import { Component } from '@angular/core';

@Component({
  selector: 'pies',
  template: `
<h3>Here are my favorite pies!</h3>
    <div *ngFor="let currentPie of favoritePies">
      <h2>{{currentPie}}</h2>
</div>
  `
})

export class PiesListComponent {
     favoritePies:string []=["Avocado","chapo","Chapoavocado","Ugali"]

}