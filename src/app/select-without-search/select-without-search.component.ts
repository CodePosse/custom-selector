import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Institution } from './institution';

@Component({
  selector: 'app-select-without-search',
  templateUrl: './select-without-search.component.html',
  styleUrls: ['./select-without-search.component.scss']
})
export class SelectWithoutSearchComponent implements OnInit {
  @Input() dataset: Institution[] = [];
  @Input() selectedItem: string | null = null;
  @Output() change: EventEmitter<Institution> = new EventEmitter<Institution>();

  ngOnInit() { }

  onChange(event: Institution) {
    if (event) this.change.emit(event);
  }
}
