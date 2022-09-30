import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio';

  getPrint(event:any){
  console.log('HI PARENT COMPONENT', event);
  }
  
}
  