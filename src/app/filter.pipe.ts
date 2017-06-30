import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(neighborhoods: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) return neighborhoods;
    // return updated neighborhoods array
    return neighborhoods.filter(function(neighborhood){
      // this checks if nhood includes term and returns true or false.
      // if false, it will remove it from the array.
      return neighborhood.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
