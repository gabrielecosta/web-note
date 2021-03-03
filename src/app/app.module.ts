import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableModule, WavesModule } from 'ng-uikit-pro-standard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './home/table/table.component';
import { NoteListComponent } from './dashboard/note-list/note-list.component';

// MDB Angular Pro
;




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    TableComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    WavesModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
