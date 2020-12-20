import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JsondataComponent } from './jsondata/jsondata.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// interface User {
//   id: string;
//   isActive: boolean;
//   name: string;
//   email: string;
//   phone: string;
// }

@NgModule({
  declarations: [
    AppComponent,
    JsondataComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule , FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule{}
