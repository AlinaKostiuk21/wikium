import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {debounceTime, filter, map} from "rxjs";
import {GithubService} from "../../../../services/github.service";
import {FilterByNamePipe} from "../../pipes/filter-by-name.pipe";

@Component({
  selector: 'app-search-by-reactive-form',
  templateUrl: './search-by-reactive-form.component.html',
  styleUrls: ['./search-by-reactive-form.component.scss']
})
export class SearchByReactiveFormComponent implements OnInit {
  @Input() repositories: any[] = [];

  filterRepositories: any[] = [];

  searchForm = this.formBuilder.group({
    query: ['', Validators.required]
  })

  constructor(private repositoriesService: GithubService,
              private formBuilder: FormBuilder,
              private filterByName: FilterByNamePipe) { }

  ngOnInit(): void {
    this.subscribeOnSearchUpdates();
  }

  private subscribeOnSearchUpdates() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(100),
        map((formValues) => formValues.query),
        map((query: string) => query.toLocaleLowerCase()),
      )
      .subscribe((query: string) => {
        this.filterRepositoriesByName(query);
      })

  }

  private filterRepositoriesByName(query: string = '') {
    this.filterRepositories = this.filterByName.transform(this.repositories, query);
  }
}
