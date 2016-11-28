import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { OffersComponent } from '../offers/offers.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit{

  cities = <any>[];

  constructor(private _cityService: SearchService) { }

  ngOnInit(){
    this.cities = this._cityService.getSearch();

  }
}

