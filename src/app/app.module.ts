import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {CdkTableModule} from '@angular/cdk/table';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MaterialModule, TableScrollingViewportModule } from './shared';
import { PeopleTableComponent, PeopleViewportComponent } from './components';
import { ResizeColumnDirective } from './components/people-table/resize-column.directive';

@NgModule({
  declarations: [
    AppComponent,
    PeopleTableComponent,
    PeopleViewportComponent,
    ResizeColumnDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkTableModule,
    ScrollingModule,
    MaterialModule,
    TableScrollingViewportModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
