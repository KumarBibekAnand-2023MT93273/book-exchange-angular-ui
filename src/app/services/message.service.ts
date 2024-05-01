// message.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: any[] = []; // Assuming each message is an object with properties like sender, recipient, content, etc.

  constructor() { }

  getMessages(): any[] {
    // Return a copy of the messages array to prevent direct mutation
    return [...this.messages];
  }

  sendMessage(recipient: string, content: string): void {

    
    // Assuming message objects have properties like sender, recipient, content, etc.
    const newMessage = {
      sender: 'currentUserId', // You can replace 'currentUserId' with the actual sender's ID or username
      recipient,
      content,
      timestamp: new Date()
    };
    this.messages.push(newMessage);
  }
}
