import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { ReleasesSearchComponent } from './releases-search/releases-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeoplesSearchComponent } from './peoples-search/peoples-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleasesSearchComponent,
    NavbarComponent,
    PeoplesSearchComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
