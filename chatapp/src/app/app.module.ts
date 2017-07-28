import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { TitlebarComponent } from './components/chat/titlebar/titlebar.component';
import { TextboxComponent } from './components/chat/textbox/textbox.component';
import { MessageboxComponent } from './components/chat/messagebox/messagebox.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    TitlebarComponent,
    TextboxComponent,
    MessageboxComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule, MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
