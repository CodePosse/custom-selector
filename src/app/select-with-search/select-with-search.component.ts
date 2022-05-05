import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import Fuse from 'fuse.js';
import { concat, map, Observable, of, Subject } from 'rxjs';
import { Institution } from './institution';

@Component({
  selector: 'app-select-with-search',
  templateUrl: './select-with-search.component.html',
  styleUrls: ['./select-with-search.component.scss']
})
export class SelectWithSearchComponent implements OnInit {
  @Input() dataset: Institution[] = [];
  @Input() selectedItem: string | null = null;
  @Output() change: EventEmitter<Institution> = new EventEmitter<Institution>();

  focused = false;
  dataset$: Observable<Institution[]> | undefined;
  typeahead$ = new Subject<string>();

  private searchOptions: Fuse.IFuseOptions<Institution> = {
    includeScore: true,
    fieldNormWeight: 0.5,
    keys: ['cityState', 'refNum', 'name'],
  };

  ngOnInit() {
    this.dataset$ = concat(of(this.dataset), this.search());
  }

  onChange(event: Institution, select: NgSelectComponent) {
    select.searchInput?.nativeElement.blur();
    if (event) this.change.emit(event);
  }

  private filterScore(result: Fuse.FuseResult<Institution>) {
    return (result.score || 1) < 0.1;
  }

  private search(): Observable<Institution[]> {
    const fuse = new Fuse(this.dataset, this.searchOptions);
    return this.typeahead$.pipe(
      map((term) => {
        return term ? fuse.search(term).filter(this.filterScore).map((r) => r.item) : this.dataset;
      })
    );
  }
}
