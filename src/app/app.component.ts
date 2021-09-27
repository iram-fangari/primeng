import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

interface City {
  name: string,
  code: string

}
interface State {
  name: string,
  code: string

}
interface Country {
  name: string,
  code: string

}
interface Multi {
  name: string,
  code: string

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]

})

export class AppComponent {
  gender: string | undefined;
  selectedCategory: any = null;
  categories: any[] = [{name: 'Computer', key: 'C'}, {name: 'Mechanical', key: 'M'}, {name: 'Civil', key: 'C'}];
  selectedValues: string[] = [];
  selectedAck: string[] = [];
  selectedLang: string[] = [];
  date10: Date;
	items: SelectItem[] = [];
	item!: string;
  displayBasic: boolean=false;

  // dropdown
  cities: City[];
  states:State[];
  countries:Country[];
  multis:Multi[]
  checked2 :boolean=true;
  
public selectedCityCode: any;
public selectedStateCode:any;
public selectedCountryCode:any;
public selectedCities1:any;

    constructor() {
        this.selectedCityCode="";
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
        
        this.selectedStateCode="";
        this.states = [
            {name: 'Maharashtra', code: 'MH'},
            {name: 'Moscow', code: 'MS'},
            {name: 'London', code: 'LDN'},
            {name: 'Lucknow', code: 'LCK'},
            {name: 'Paris', code: 'PRS'}
        ];
        this.selectedCountryCode="";
        this.countries = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
        this.selectedCities1="";
        this.multis = [
          {name: 'java', code: 'AU'},
          {name: 'HTML', code: 'BR'},
          {name: 'CSS', code: 'CN'},
          {name: 'Bootstrap', code: 'EG'},
          {name: 'mongoDb', code: 'FR'},
          {name: 'React', code: 'DE'},
          {name: 'Angular', code: 'IN'},
         
      ];
        this.date10=new Date;        
    }
    
ngOnInit() {
  this.selectedCategory = this.categories[1];
}

showBasicDialog() {
  this.displayBasic = true;
}
}


