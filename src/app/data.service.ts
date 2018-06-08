import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) { }

  getShoppingList(){
    let headers = new Headers;
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/getItems').pipe(map(res=> res.json()));
  }

  getSelectedItem(itemName){
    let headers = new Headers;
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/getItem/'+itemName).pipe(map(res=> res.json()));
  }

  addToCart(item){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/shoppingCart',item,{headers:headers}).pipe(map(res => res.json()));
  }

  getShoppingCart(){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/getShoppingItems').pipe(map(res => res.json()));
  }

  //login system
  registerUser(user){
    let headers= new Headers();
    headers.append('content-type','application/json');
    return this.http.post('http://localhost:3000/api/register',user,{headers:headers}).pipe(map(res=>res.json()));
  }
  authenticateUser(user){
    let headers = new Headers();
    headers.append('content-type','application/json');
    return this.http.post('http://localhost:3000/api/login',user,{headers:headers}).pipe(map(res=> res.json()));
  }
  getLoginPage(){
    return this.http.get('http://localhost:3000/api/login').pipe(map(res=>res.json()))
  }

}
