import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message/message.component';



import {TweenMax} from "gsap/TweenMax";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private messageService: MessageService) {



   }

  ngOnInit() {
    this.messageService.sendMessage('about');

    var wrap = document.getElementById("aboutwrapper");

    window.scrollTo(0, 0);

    TweenMax.to(wrap, 2, {opacity: 1, delay: 2})
  }

}
