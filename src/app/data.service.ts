import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { };
    // this fetchData method will be called on in our components that we inject the service into 
    fetchData(){
      //this sets up an OBSERVABLE that we can SUBSCRIBE to
      //Or we can map the data to something like JSON
      return this.http.get('./neighborhoods.json').map(
        // we take this response and map it json data so we can use it.
        (res) => res.json()
      );
    };


}
