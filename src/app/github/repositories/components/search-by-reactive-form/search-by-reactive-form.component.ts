import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {debounceTime, map} from "rxjs";
import {GithubService} from "../../../../services/github.service";

@Component({
  selector: 'app-search-by-reactive-form',
  templateUrl: './search-by-reactive-form.component.html',
  styleUrls: ['./search-by-reactive-form.component.scss']
})
export class SearchByReactiveFormComponent implements OnInit {
  @Input() repositories: any[] = [];

  @Output() filteringRepositories = new EventEmitter();

  filterRepositories: any[] = [];

  searchForm = this.formBuilder.group({
    query: ['', Validators.required]
  })

  constructor(
    private repositoriesService: GithubService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.subscribeOnSearchUpdates();
  }

  private subscribeOnSearchUpdates() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(100),
        map((formValues) => formValues.query),
        map((query: string) => query.toLocaleLowerCase())
      )
      .subscribe((query) => {
        this.filteringRepositories.emit(query);
      });
  }
}
