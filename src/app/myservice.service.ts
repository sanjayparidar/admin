import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http : HttpClient) { }

  add_new_user(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        })
    };
    return this.http.post('https://shielded-beach-68250.herokuapp.com/authentication/add_new_user',user , httpOptions)
  }

  drivers(){
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
       })
    };

    return this.http.get('https://shielded-beach-68250.herokuapp.com/driver/get_drivers',httpheaders)
  }

  order(){
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
       })
    };
    return this.http.get('https://shielded-beach-68250.herokuapp.com/driver/get_orders',httpheaders)

  }

  ordercancel(data){
    console.log(data)
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
       })
    };
    var fb={Order_id:data}
    
    
     
    return this.http.post('https://floating-brushlands-52313.herokuapp.com/payment/cancel_order',fb,httpheaders)
  }

  pendin_order(){
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
       })
    };

    return this.http.get('https://shielded-beach-68250.herokuapp.com/user/get_pending_orders',httpheaders)

  }

  unverified_user(){
    https://shielded-beach-68250.herokuapp.com/user/get_unverified_users
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
       })
    };

    return this.http.get('https://shielded-beach-68250.herokuapp.com/user/get_unverified_users',httpheaders)


  }

  user(){
       const httpheaders = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+localStorage.getItem('token')
         })
      };

      return this.http.get('https://shielded-beach-68250.herokuapp.com/user/get_users',httpheaders)

    

  }

  login(user){
   
    return this.http.post('https://shielded-beach-68250.herokuapp.com/authentication/login',user)
 }

 transaction(){
  const httpheaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
     })
  };
  return this.http.get('https://shielded-beach-68250.herokuapp.com/user/transactions',httpheaders)

 }
 transactiondetail(data){
   var fb={Charge_id:data}
  const httpheaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
     })
  };
  return this.http.post('https://shielded-beach-68250.herokuapp.com/user/charge_detail' , fb , httpheaders)
 }

 unverified_driver(){
  const httpheaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
     })
  };
  return this.http.get('https://shielded-beach-68250.herokuapp.com/driver/get_unverified_user', httpheaders)

 }
}
