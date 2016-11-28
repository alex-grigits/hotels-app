import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component ({
  selector: 'offers',
  templateUrl: 'offers.component.html',
  styleUrls: ['offers.component.css']
})

export class OffersComponent implements OnInit{
  cities = [];

  constructor(private _cityService: SearchService){}

  ngOnInit(){
    this._cityService.getCities().subscribe(resCityData => this.cities = resCityData);
  }
}