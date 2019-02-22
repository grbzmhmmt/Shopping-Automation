import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string=this.apiUrl+'/categories';
  constructor(private httpClient:HttpClient,@Inject('apiUrl')private apiUrl) { }




}
