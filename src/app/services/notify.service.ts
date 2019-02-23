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
    
    alertify.warning(message+" Warning");
  }
  ErrorMessage(message:string){
    
    alertify.error(message+" Removed to Cart");
  }
  InfoMessage(message:string){
    
    alertify.message("This is a message "+message);
  }
  
  PaySuccess(message:string){
    alertify.success(message);
  }

  






}
