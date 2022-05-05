import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWithoutSearchComponent } from './select-without-search.component';

describe('SelectWithoutSearchComponent', () => {
  let component: SelectWithoutSearchComponent;
  let fixture: ComponentFixture<SelectWithoutSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWithoutSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWithoutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
