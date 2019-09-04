import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message/message.component';

import {TweenMax} from "gsap/TweenMax";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.sendMessage('contact');
    var wrap = document.getElementById("contactwrapper");

    window.scrollTo(0, 0);
    TweenMax.to(wrap, 2, {opacity: 1, delay: 2})
  }

}
