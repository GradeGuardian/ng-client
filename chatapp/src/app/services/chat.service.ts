import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Message } from '../interfaces/Message';
import * as io from 'socket.io';

@Injectable()
export class ChatService {

  private url = 'http://localhost:8000';
  private socket: any;

  constructor() { }

  public sendMessage(message: Message) {
    this.socket.emit('add-message', message);
  }

  public getMessages() {
    let observable = new Observable( (observer:any) => {
      this.socket = io(this.url);
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });

      return () => { this.socket.disconnect(); }
    })

    return observable;
  }

}
