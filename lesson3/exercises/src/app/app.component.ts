import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }
 land(rocketImage) {
  let result = window.alert('The shuttle is landing. Landing gear engaged.');
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'The shuttle has landed.';
     rocketImage.style.bottom = '0px';
     this.takeOffEnabled = true;
  }
  abortMission(rocketImage) {
    let result = window.confirm('Are you sure you want to abort?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       this.message = 'Mission Aborted';
       rocketImage.style.bottom = '0px';
       this.takeOffEnabled = true;
    }
  }
  moveRocket(rocketImage, direction) {
    if (direction === 'up') {
    let bottom = parseInt(rocketImage.style.bottom);
    rocketImage.style.bottom = bottom + 10 + "px";
    this.height += 10000;
    }
    if (direction === 'down') {
      let bottom = parseInt(rocketImage.style.bottom);
      rocketImage.style.bottom = bottom - 10 + "px";
      this.height -= 10000;
 }
 if (direction === 'left') {
  let left = parseInt(rocketImage.style.left) ;
  rocketImage.style.left = left - 10 + "px";
 
}
if (direction === 'right') {
  let left = parseInt(rocketImage.style.left) ;
  rocketImage.style.left = left + 10 + "px";
}
  }
}