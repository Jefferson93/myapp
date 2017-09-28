import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  base_api_path = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  
//RETORNO DO JSON DE API
  getMovies(){
    return this.http.get(this.base_api_path + '/movie/latest?api_key=7461e347a8e8435d5f4a4c277b87f661');
  }

}
