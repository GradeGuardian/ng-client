import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Message } from '../interfaces/Message';

import { DataService } from './data.service';

import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  //private url = 'http://52.14.34.73:7000';
  //private url = 'http://localhost:7000'
  private url = 'http://52.14.179.178:4404/';
  private socket: any;
  public messages: Message[];
  private prevMessageType: string;
  private chatboxView: ElementRef;

  constructor(private _dataService: DataService) {
    this._dataService.currentMessages.subscribe(messages => this.messages = messages)
    this._dataService.currentPrevMessageType.subscribe(type => this.prevMessageType = type)
    this._dataService.currentChatboxView.subscribe(chatboxView => this.chatboxView = chatboxView)
  }

  public sendMessage(messageText: string) {
    let newMessage: Message = {
      message: messageText,
      sent: false,
      isSenderServer: false
    }

    if (this.prevMessageType === 'server') {
      newMessage.continuous = false
      this.prevMessageType = 'client'
      this._dataService.updatePrevMessageType(this.prevMessageType)
    } else {
      newMessage.continuous = true
    }

    this.messages.push(newMessage)
    this._dataService.updateMessages(this.messages)
    this.scrollToBottom()

    this._sendMessage(newMessage)
  }

  private _sendMessage(message: Message) {
    this.socket.emit('message', message);

    // Listen for success
    this.socket.on('message-success', () => {
      message.sent = true;
      this._dataService.updateMessages(this.messages)
    })
  }

  public getMessages() {
    let observable = new Observable((observer: any) => {
      this.socket = io(this.url);
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });

      return () => { this.socket.disconnect(); }
    })

    return observable;
  }

  private scrollToBottom(): void {
    setTimeout( () => {
      this.chatboxView.nativeElement.scrollTop = this.chatboxView.nativeElement.scrollHeight;
    }, 20)
  }

}
