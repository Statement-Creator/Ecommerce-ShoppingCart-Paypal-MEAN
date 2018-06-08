import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private dataService:DataService) { }

  data=[];
  toggleVar : boolean = true;

  ngOnInit() {
    this.getShoppingCartCall();
  }
  getShoppingCartCall(){
    this.dataService.getShoppingCart().subscribe(data => {this.data= data; if(data){ this.toggleVar = !this.toggleVar}});
  }

}
