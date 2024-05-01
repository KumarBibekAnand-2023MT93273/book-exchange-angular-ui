import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages: any[];
  recipient!: string;
  messageContent!: string;

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
  }

  sendMessage(): void {
    this.messageService.sendMessage(this.recipient, this.messageContent);
    // Optionally, update messages list immediately after sending the message
    this.messages = this.messageService.getMessages();
    this.clearFields();
  }

  clearFields(): void {
    this.recipient = '';
    this.messageContent = '';
  }
}
