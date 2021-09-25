import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public location = '' ;

constructor(private  _router : Router) 
{      
  this.location = _router.url;
}
  title = 'ang-a1';
}
