import {Component} from "@angular/core";
import {GithubService} from "../../services/github.service";


@Component({
  selector: 'app-get-request',
  templateUrl: './app-get-request.component.html',
  styleUrls: ['./app-get-request.component.scss']
})

export class GetRequestComponent {

  repositories: any

  constructor(private githubService: GithubService) {}

  getRepositories() {
      this.githubService.getData().subscribe(data => this.repositories = data)
  }
}
