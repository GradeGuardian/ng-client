import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../../../interfaces/Message'
import { MessageComponent } from '../message/message.component';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit, OnDestroy {

  public messages: Message[];
  private connection: any;

  constructor(private _chatService: ChatService) {
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

  ngOnDestroy() {
    
  }

}
