import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTemplateDrivenComponent } from './search-by-template-driven.component';

describe('SearchByTemplateDrivenComponent', () => {
  let component: SearchByTemplateDrivenComponent;
  let fixture: ComponentFixture<SearchByTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
