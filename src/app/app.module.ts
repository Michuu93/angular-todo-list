import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {ItemsComponent} from './items/items.component';
import {LoginComponent} from './login/login.component';
import {DndModule} from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemsComponent,
    LoginComponent
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
