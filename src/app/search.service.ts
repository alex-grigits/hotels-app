import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SearchService{

  private _url: string = "apidata/destinations.json";

  constructor(private _http: Http){}
  getCities(){
    return this._http.get(this._url)
        .map((response: Response) => response.json());
  }
  // getCityById(id: number){

  // }
}