import {Component, Output} from "@angular/core";
import {GithubService} from "../../../services/github.service";
import {FilterByNamePipe} from "../../repositories/pipes/filter-by-name.pipe";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  repositories: any;
  filteredRepositories: any[] = [];
  userName: string = '';

  constructor(
    private githubService: GithubService,
    private filterByName: FilterByNamePipe,
  ) {
  }

  getRepositories() {
    this.githubService
      .getData(this.userName)
      .subscribe({
        next: (data) => {
          this.filteredRepositories = this.repositories = data;
        },
        error: (e) => alert(e.message),
      });
  }

  filterRepositories(query: string = '') {
    this.filterRepositoriesByName(query);
  }

  setRepositoryAuthor($event: Event) {
    // @ts-ignore
    this.userName = $event.target.value;
  }

  private filterRepositoriesByName(query: string = '') {
    this.filteredRepositories = this.filterByName.transform(this.repositories, query);
  }
}
