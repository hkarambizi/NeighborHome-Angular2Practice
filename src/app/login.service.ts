import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  // I mispelled the logging service as login service when I created this service.
  // this function will be called once we inject the service into our components
  log(){
    console.log('I am the logging service');
  }
  constructor() { }

}
