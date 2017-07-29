import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../../interfaces/Message'
import { MessageComponent } from '../message/message.component';
import { ChatService } from '../../../services/chat.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit, OnDestroy {

  @ViewChild('chatbox') private chatboxContainer: ElementRef;

  public messages: Message[];
  private connection: any;
  private prevMessageType: string;

  constructor(private _chatService: ChatService, private _dataService: DataService) { }

  ngOnInit() {

    this._dataService.currentMessages.subscribe(messages => this.messages = messages)
    this._dataService.currentPrevMessageType.subscribe(type => this.prevMessageType = type)

    this.connection = this._chatService.getMessages().subscribe((message: Message) => {

      if(this.prevMessageType === 'client') {
        message.continuous = false
        this.prevMessageType = 'server'
        this._dataService.updatePrevMessageType(this.prevMessageType)
      } else {
        message.continuous = true
      }

      this.messages.push(message)
      this._dataService.updateMessages(this.messages)
      setTimeout( () => this.scrollToBottom(), 20)
    })
    
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  scrollToBottom(): void {
    this.chatboxContainer.nativeElement.scrollTop = this.chatboxContainer.nativeElement.scrollHeight;
  }

}
