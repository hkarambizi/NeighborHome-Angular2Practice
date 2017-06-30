import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {
  neighborhood: string;
  neighborhoods = [
    { name: 'Old Fourth Ward', station: "Kings Memorial"},
    { name: 'East Point', station: "East Point"},
    { name: 'Grant Park', station: "Kings Memorial"},
    { name: 'West Midtown', station: "Bankhead"}
  ];
  constructor(private route: ActivatedRoute) {
    this.neighborhood = route.snapshot.params['neighborhood'];
  };
  classes = {'blue':true, 'red':false, 'underline':true};
  test = true;
  ngOnInit() {
  }

}
