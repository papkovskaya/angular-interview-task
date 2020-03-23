import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss']
})
export class InputMessageComponent implements OnInit {
  
  message: string;

  constructor(private data: MessageService) { }

  ngOnInit(): void {
  }

  newMessage(newMessage: string) {
    this.data.changeMessage(newMessage);
  }

}
