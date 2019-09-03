import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message/message.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  changePage () {
    console.log("JEaa")
  }

  constructor(private messageService: MessageService) {

    

   }

  ngOnInit() {
    this.messageService.sendMessage('home');
  }

}
