import { Component, OnInit } from '@angular/core';
import { Message } from '../../../interfaces/Message'
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {

  private messages: Message[];

  constructor() {
    this.messages = [
      {
        message: 'Hi',
        isSenderServer: true,
        sent: true
      },
      {
        message: 'Hi',
        isSenderServer: false,
        sent: true
      },
      {
        message: 'How are you',
        isSenderServer: true,
        sent: true
      },
      {
        message: 'I\'m fine',
        isSenderServer: false,
        sent: true
      },
      {
        message: 'What is the meaning of life?',
        isSenderServer: true,
        sent: true
      },
      {
        message: '42',
        isSenderServer: false,
        sent: false
      }
    ]
  }

  ngOnInit() {
  }

}
