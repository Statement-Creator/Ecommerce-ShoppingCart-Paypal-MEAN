import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
  registerUserCall(user){
    this.dataService.registerUser(user).subscribe(data => {console.log(data);})
  }
}
