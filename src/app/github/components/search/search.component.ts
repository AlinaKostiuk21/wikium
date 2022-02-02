import {Component} from "@angular/core";
import {GithubService} from "../../../services/github.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  repositories: any
  userName: string = ''

  constructor(private githubService: GithubService) {
  }

  getRepositories() {
    this.githubService.getData(this.userName).subscribe(data => this.repositories = data)
  }

  setRepositoryAuthor($event: Event) {
    // @ts-ignore
    this.userName = $event.target.value;
  }
}
