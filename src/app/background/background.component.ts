import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';

import  GLTFLoader from 'three-gltf-loader';


import { Component, OnInit } from '@angular/core';
 

import { MessageService } from '../message/message.component';

import {TweenMax} from "gsap/TweenMax";




@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  message: string = "MOI";
  
  loadingScreen () {
    
    var load = document.getElementById("loadingscreen");
    var round = document.getElementById("loading1")

    

    TweenMax.to(load, 1, {opacity: 0})

    setTimeout(() => {
      round.style.animation = "none";
      load.style.display = "none";
    }, 1000);

    
    

  }

  constructor(private messageService: MessageService) {



  }

  ngOnInit() {
   
    var screenHeight = window.innerHeight;
    
    document.documentElement.style.setProperty('--height', screenHeight + "px");


  }

ngAfterViewInit() {
    
    
var pic = document.getElementById("bgpic");
pic.onload = async () => { 
    


    /* --------- THREE ------------------*/

    // this is the scene
var scene = new THREE.Scene();

// this is the camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


camera.position.x = 0;
camera.position.y = 0;
camera.position.z = -145;


// this is the canvas
var renderer = new THREE.WebGLRenderer({ alpha: true } );

// here are the controls

const controls = new OrbitControls(camera, renderer.domElement);

controls.target.set(0, 0, 0);
controls.autoRotate = false;
controls.autoRotateSpeed = 0.18;
  
renderer.setClearColor( "#000000", 0 );



var background = document.getElementById("background");

background.appendChild(renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);



window.addEventListener('resize', function (e) {


  var screenHeight = window.innerHeight;
    
  document.documentElement.style.setProperty('--height', screenHeight + "px");
/*
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();*/


  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
 

})




const loader = new GLTFLoader();



var mesh;

var promise1 = new Promise(function(resolve, reject) {

  loader.load('assets/3d/white3.glb', function ( gltf ) {

    mesh = gltf.scene;
    
    scene.add( mesh );
    
    resolve();
    
  }, function ( error ) {
  
  //	console.error( error );
  
  } );

});


promise1.then(() => {



// the light

var light = new THREE.DirectionalLight( "#ffffff", 0.6 );
var light2 = new THREE.PointLight( "#f013c5", 0.6 );
var light3 = new THREE.PointLight( "#34cede", 0.6 );
var light4 = new THREE.PointLight( "#ffffff", 0.2 );



light.position.set(0, 0, -3000 );
light2.position.set( 1000, 0, -200 );
light3.position.set( -1000, 0, -200);
light4.position.set( 0, 0, -10);


light.lookAt( 0, 0, 0 );
light2.lookAt( 0, 0, 0 );
light3.lookAt( 0, 0, 0 );
light4.lookAt( 0, 0, 0 );


scene.add(light)
scene.add(light2)
scene.add(light3)
scene.add(light4)




// let's render the scene and the camera


var x = 0;
var speed = 0.0005;

var id;
function animate () {



if (mesh !== undefined) {
  mesh.position.set(0, 0, 0);
  x += speed;
  mesh.rotation.set(0, x, 0);
 
}



controls.update();



renderer.render(scene, camera);

 id =  requestAnimationFrame(animate);

}

animate();
/*
setTimeout(() => {
  cancelAnimationFrame( id );
},1000);
/*----------------------------------------------*/
   
function homeAnim () {
  
  TweenMax.to(camera.position, 2, {x: 0, y: 0, z: -145});
}

function aboutAnim () {
  TweenMax.to(camera.position, 2, {x: 0, y: 0, z: -30});
}

function workAnim () {
  TweenMax.to(camera.position, 2, {x: 45, y: 0, z: -30});
}

function contactAnim () {
  TweenMax.to(camera.position, 2, {x: -45, y: 0, z: -30});
}

this.messageService.getMessage().subscribe(message => {
  
  if (message.text === "home") {
    homeAnim();
  }

  else if (message.text === "about") {
    aboutAnim();
  }

  else if (message.text === "work") {
    workAnim();
  }

  else if (message.text === "contact") {
    contactAnim();
  }

})

setTimeout(() => {
  
  this.loadingScreen();

}, 1000);

})



  }

}

}
