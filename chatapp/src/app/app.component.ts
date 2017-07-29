import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ChatService, DataService ]
})
export class AppComponent {
  title = 'app';
}
