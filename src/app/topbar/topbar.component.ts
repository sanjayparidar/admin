import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit() {
  }
  logout(){
    console.log("hello")
    localStorage.clear();
    console.log(localStorage.getItem('token'))
    this.router.navigate(['']);
  }
}
