import { Component, OnInit } from '@angular/core';
import {TweenMax} from "gsap/TweenMax";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status = "no";

  mobileMenu () {
    
    var ham = document.getElementById("hamburger");
    var nav = document.getElementById("navbar3");
    var ul = document.getElementById("mobileul");

    var tween;

    if (this.status === "no") {
      this.status = "yes";
      
      TweenMax.to(ham, 0.5, {transform: "rotate(-90deg)"});
      TweenMax.to(nav, 0, {display: "flex"});
      TweenMax.to(nav, 0.5, {width: "100%"});
      
      TweenMax.to(ul, 0.5, {display: "initial", delay: 0.5});
      TweenMax.to(ul, 0.5, {right: "0%", delay: 0.5});
      


    }

    else if (this.status === "yes") {
      this.status = "no";
      
      TweenMax.killTweensOf(ul);

      TweenMax.to(ul, 0, {display: "none"});
      TweenMax.to(ul, 0, {right: "100%"});
      TweenMax.to(ham, 0.5, {transform: "rotate(0deg)"});
      TweenMax.to(nav, 0.5, {width: "0%"});
      TweenMax.to(nav, 0, {display: "none", delay: 0.5});

      

    }



  }

  constructor() { }

  ngOnInit() {
  }

}
