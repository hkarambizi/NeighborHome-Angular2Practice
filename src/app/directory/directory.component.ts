import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../login.service';
import { DataService } from '../data.service';

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
    this.dataService.fetchData().subscribe(
      (data) => this.neighborhoods = data
    );
  }

}
