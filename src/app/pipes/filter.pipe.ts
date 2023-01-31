import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any , searchText:string){
    if (value.length === 0 || searchText === '') {
      return value;
    }

    const employees = [];
    for (const employee of value){
      if(employee['name'] === searchText || employee['address'] === searchText ) {
        employees.push(employee);
      }
      
    }
    if(employees.length == 0)
    {
      return value;
    }
    else{
      return employees;
    }
    
  }

}
