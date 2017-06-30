// Notes on how this app was built can be found at https://www.evernote.com/shard/s616/sh/09562611-86ee-4c9f-849a-8cd518d31ce9/6fefba6052c3ed8150b76f8c39f102f6

// importing the Component class from the Angular core. We have to import everything we use
import { Component } from '@angular/core';
// we have to inject our nested components in order to use them in our view
// EDIT: the newest release includes an app.module.ts that imports all generated components automatically
// imports { HomeComponent } from './home folder

//This is a class decorator, signified by a @ at the beginning
// It tells us about this class and how this class works
@Component({
  selector: 'app-root', // the <app-root> directive tag in our index.html
  templateUrl: './app.component.html', //this is the relative reference to our view for this component
  styleUrls: ['./app.component.css'] // this is a relative reference for the stylesheet(s) of this component
  // NEW RELEASE: does not require the component to expect a directive for home
})

// similar to module.export this throws out the class/Object to be imported anywhere
export class AppComponent {
  title = 'app works! Hello, World!';
  name = "Harry Karambizi";
  realtor = {
    name: 'Nicole Levine',
    agency: 'Levine City Realty',
    territory: 'Intown Atlanta'
  };
// this function was created to practice Custom Event Binding
  yell(e){
    alert("I am yelling");
    console.log(e);
  }
}
