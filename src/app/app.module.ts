import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './login.service';
import { DataService } from './data.service';

// in the angular-cli upgrade, the app.module.ts file came with a lot of integrations
// everytime I generated a service, filter or a component, the app.module was auto-magically updated
// and I did not have to tell my components to expect and directives, only import them

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [LoggingService, DataService], // I did have to inject my services into my @NgModule
  bootstrap: [AppComponent]
})
export class AppModule { }
