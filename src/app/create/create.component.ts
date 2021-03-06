import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }
  createItemCall(item){
    this.dataService.createNewItem(item).subscribe();
  }

}
