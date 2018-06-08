import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getShoppingListCall();
  }

  data=[];
  specificData=[];

  toggleSelected: boolean= true;

  getShoppingListCall(){
    this.dataService.getShoppingList().subscribe(data=> {this.data = data;} );
  }
  selectedItemCall(itemName){
    this.toggleSelected = !this.toggleSelected;
    this.dataService.getSelectedItem(itemName).subscribe(data => {this.specificData = data;} );
  }
  addToCartCall(name,price,picture){
    let item = { 
      itemDetails: `${name}${price}${picture}`
    };
    
    this.dataService.addToCart(item).subscribe();
  }

}
