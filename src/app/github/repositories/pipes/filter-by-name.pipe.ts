import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(repositories: any[], query: string): any[] {
    if (!repositories) {
      return [];
    }

    return repositories.filter((repo) => {
      return repo.name.includes(query)
    });
  }

}
