import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

import { NgxCurrencyModule } from 'ngx-currency';

import { AppComponent } from './app.component';
import { ReleasesSearchComponent } from './releases-search/releases-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeoplesSearchComponent } from './peoples-search/peoples-search.component';
import { LaunchRegisterComponent } from './launch-register/launch-register.component';
import { PeopleRegisterComponent } from './people-register/people-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleasesSearchComponent,
    NavbarComponent,
    PeoplesSearchComponent,
    LaunchRegisterComponent,
    PeopleRegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    NgxCurrencyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
