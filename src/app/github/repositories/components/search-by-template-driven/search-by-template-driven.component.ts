import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search-by-template-driven',
  templateUrl: './search-by-template-driven.component.html',
  styleUrls: ['./search-by-template-driven.component.scss']
})
export class SearchByTemplateDrivenComponent implements OnInit {
  searchForm: any ={
    query: ''
  }

  @Input() repositories: any[] = [];
  @Output() filteringRepositories = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getRepositories() {

  }

}
