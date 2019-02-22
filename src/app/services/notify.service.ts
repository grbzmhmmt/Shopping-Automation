import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }


  SuccessMessage(message:string){
    
    alertify.success(message+" Add to Cart");
  }
  WarningMessage(message:string){
    
    alertify.warning(message+" Add to Cart");
  }
  ErrorMessage(message:string){
    
    alertify.error(message+" Add to Cart");
  }
  InfoMessage(message:string){
    
    alertify.message(message+" Add to Cart");
  }
  

  






}
