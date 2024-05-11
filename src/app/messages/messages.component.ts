import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../model/message.model';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages: Message[] = [];
  recipientId: string = '';
  message: string = '';

  constructor(private messageService: MessageService) {
  }

  getMessages(): void {
   this.messageService.getMessages(this.recipientId).subscribe(
      (response: Message[]) => {
        this.messages = response;
      },
      (error: any) => {
        console.error('Error fetching messages:', error);
      }
    );
  }

  sendMessage(): void {
    const newMessage: Message = {
      recepientId: this.recipientId,
      message: this.message
    };

    this.messageService.sendMessage(newMessage).subscribe(
      (response: Message) => {
        console.log('Message sent:', response);
        // Optionally, update messages list immediately after sending the message
        this.getMessages();
        this.clearFields();
      },
      (error: any) => {
        console.error('Error sending message:', error);
      }
    );
  }

  clearFields(): void {
    this.recipientId = '';
    this.message = '';
  }
}
