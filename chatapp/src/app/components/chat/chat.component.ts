import { Component, OnInit } from '@angular/core';
import { TitlebarComponent } from './titlebar/titlebar.component'
import { TextboxComponent } from './textbox/textbox.component'
import { MessageboxComponent } from './messagebox/messagebox.component'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
