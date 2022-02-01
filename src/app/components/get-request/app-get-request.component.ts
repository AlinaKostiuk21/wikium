import {Component} from "@angular/core";
import {GithubService} from "../../services/github.service";


@Component({
  selector: 'app-get-request',
  templateUrl: './app-get-request.component.html',
  styleUrls: ['./app-get-request.component.scss']
})

export class GetRequestComponent {

  repositories: any
  userName: string = ''

  constructor(private githubService: GithubService) {}

  getRepositories() {
      this.githubService.getData(this.userName).subscribe(data => this.repositories = data)
  }

  setRepositoryAuthor($event: Event) {
    // @ts-ignore
    this.userName = $event.target.value;
  }
}
