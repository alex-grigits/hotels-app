import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component ({
  selector: 'offer-detail',
  templateUrl: 'offer-detail.component.html',
  styleUrls: ['offer-detail.component.css']
})

export class OfferDetailComponent implements OnInit{
  cities = [];

  constructor(private _cityService: SearchService) { }

  ngOnInit(){
    this._cityService.getCities().subscribe(resCityData => this.cities = resCityData);
  }
}