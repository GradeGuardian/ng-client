import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Message } from '../interfaces/Message';

import { DataService } from './data.service';

import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private url = 'http://52.14.34.73:7000';
  private socket: any;
  public messages: Message[];
  private prevMessageType: string;

  constructor(private _dataService: DataService) {
    this._dataService.currentMessages.subscribe(messages => this.messages = messages)
    this._dataService.currentPrevMessageType.subscribe(type => this.prevMessageType = type)
  }

  public sendMessage(messageText: string) {
    let newMessage: Message = {
      message: messageText,
      sent: true,
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

    this._sendMessage(newMessage)
  }

  private _sendMessage(message: Message) {
    this.socket.emit('message', message);
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

}
