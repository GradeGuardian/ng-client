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
        sender: 'server',
        sent: true
      },
      {
        message: 'Hi',
        sender: 'client',
        sent: true
      },
      {
        message: 'How are you',
        sender: 'server',
        sent: true
      },
      {
        message: 'I\'m fine',
        sender: 'client',
        sent: true
      },
      {
        message: 'What is the meaning of life?',
        sender: 'server',
        sent: true
      },
      {
        message: '42',
        sender: 'client',
        sent: false
      }
    ]
  }

  ngOnInit() {
  }

}
