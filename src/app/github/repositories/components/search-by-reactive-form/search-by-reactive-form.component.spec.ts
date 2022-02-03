import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByReactiveFormComponent } from './search-by-reactive-form.component';

describe('SearchByReactiveFormComponent', () => {
  let component: SearchByReactiveFormComponent;
  let fixture: ComponentFixture<SearchByReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
