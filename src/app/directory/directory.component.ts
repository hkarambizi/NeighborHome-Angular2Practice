import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../login.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {
  neighborhood: string;
  neighborhoods = [];
  // constructor(private route: ActivatedRoute) {
  //   this.neighborhood = route.snapshot.params['neighborhood'];
  // };
  constructor(private logger: LoggingService, private dataService: DataService) { }

  logIt() {
    this.logger.log();
  }
  classes = {'blue':true, 'red':false, 'underline':true};
  test = true;

  ngOnInit() {
    //now when the page loads, the dataService will fetch the data
    //then we set the data recieved to our neighborhoods array.
    // this.dataService.fetchData().subscribe(
    //   (data) => this.neighborhoods = data
    // );
    this.fbGetData();
  }

  fbGetData(){
    // this will grab our database and create a reference on where we want to collect from like '/neighborhoods'
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.neighborhoods.push(snapshot.val())
      // console.log(snapshot.val())
    })
  }

  fbPostData(name, station){
    firebase.database().ref('/').push({name: name, station: station});
  };
}
