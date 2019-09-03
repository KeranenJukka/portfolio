import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message/message.component';

import {TweenMax} from "gsap/TweenMax";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.sendMessage('work');
    var wrap = document.getElementById("workwrapper");

    TweenMax.to(wrap, 2, {opacity: 1, delay: 2})
  }

}
