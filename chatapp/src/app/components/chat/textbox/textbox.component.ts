import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  private messageText: string;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
  }

  private sendMessage() {
    if(this.messageText.trim().length !== 0) {
      this._chatService.sendMessage(this.messageText)
    }
    this.messageText = ""
  }

}
