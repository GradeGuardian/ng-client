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
        message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        isSenderServer: true,
        sent: true
      },
    ]
  }

  sendMessage() {
    //this._chatService.sendMessage(this)
  }

  ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe( (message: Message) => {
      this.messages.push(message)
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
