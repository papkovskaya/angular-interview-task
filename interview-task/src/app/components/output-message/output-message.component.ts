import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-output-message',
  templateUrl: './output-message.component.html',
  styleUrls: ['./output-message.component.scss']
})
export class OutputMessageComponent implements OnInit {

  message: string;

  constructor(private data: MessageService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
