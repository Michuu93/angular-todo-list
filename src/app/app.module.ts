import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {TaskComponent} from './task/task.component';
import {DndModule} from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    DndModule.forRoot()
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
