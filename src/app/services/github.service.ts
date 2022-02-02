import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getData(userName: string): Observable<any> {
    const url = `${environment.githubUrl}/users/${userName}/repos?per_page=10`;

    return this.http.get<any>(url);
  }
}
