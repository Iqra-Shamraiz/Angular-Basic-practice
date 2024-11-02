import { Component, ElementRef, ViewChild, AfterContentInit } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-ticketlist',
  standalone: true,
  // 'ElementRef' and 'MessageService' should not be in the imports array
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketListComponent implements AfterContentInit {
  // Example of using @ViewChild
  @ViewChild('myButton', { static: true }) button!: ElementRef;

  constructor(private messageService: MessageService) {} // Injecting MessageService

  ngAfterContentInit(): void {
    console.log('Button element:', this.button.nativeElement);
    // You can manipulate the button here or listen for events
  }

  onClickButton(): void {
    alert('Button Clicked!');
  }
}
