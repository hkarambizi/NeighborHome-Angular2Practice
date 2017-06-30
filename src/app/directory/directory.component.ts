import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../login.service';
import { DataService } from '../data.service';
// this is to import the firebaseAPI methods we linked to in the scripts in index.html
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {
  neighborhood: string;
  // this neighborhoods array will be how our data is sent to the view
  neighborhoods = [];
  // constructor(private route: ActivatedRoute) {
  //   this.neighborhood = route.snapshot.params['neighborhood'];
  // };

  constructor(private logger: LoggingService, private dataService: DataService) { }

  // the logIt() function below was to practice building a service that logs to the console.
  logIt() {
    this.logger.log();
  }
  // the following properties below were to practice property binding
  classes = {'blue':true, 'red':false, 'underline':true};
  test = true;

  ngOnInit() {
    //the commented code below shows the original fetchData method before we used FirebaseAPI
    //now when the page loads, the dataService will fetch the data
    //then we set the data recieved to our neighborhoods array.
    // this.dataService.fetchData().subscribe(
    //   (data) => this.neighborhoods = data
    // );
    this.fbGetData();
  }
// function to get data from firebase using API methods
  fbGetData(){
    // this will grab our database and create a reference on where we want to collect from like '/neighborhoods'
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.neighborhoods.push(snapshot.val())
      // console.log(snapshot.val())
    })
  }
// function to post data to our firebase database using API methods
  fbPostData(name, station){
    firebase.database().ref('/').push({name: name, station: station});
  };
}
