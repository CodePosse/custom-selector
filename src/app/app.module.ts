import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { SelectWithSearchComponent } from './select-with-search/select-with-search.component';
import { SelectWithoutSearchComponent } from './select-without-search/select-without-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectWithSearchComponent,
    SelectWithoutSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
