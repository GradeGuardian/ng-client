import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { TitlebarComponent } from './components/chat/titlebar/titlebar.component';
import { TextboxComponent } from './components/chat/textbox/textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    TitlebarComponent,
    TextboxComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
