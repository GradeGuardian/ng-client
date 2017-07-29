import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Message } from '../interfaces/Message';

@Injectable()
export class DataService {

  private messagesSource = new BehaviorSubject<Message []>([])
  currentMessages = this.messagesSource.asObservable()

  private prevMessageTypeSource = new BehaviorSubject<string>('client')
  currentPrevMessageType = this.prevMessageTypeSource.asObservable()

  constructor() { }

  public updateMessages(messages: Message []) {
    this.messagesSource.next(messages)
  }

  public updatePrevMessageType(type: string) {
    this.prevMessageTypeSource.next(type)
  }
}
