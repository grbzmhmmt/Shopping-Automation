import { Component, OnInit, Inject } from '@angular/core';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  url: string = this.apiUrl + '/categories';
  categories: Category[];
  selectedCategory: Category;
  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl) { }

  ngOnInit() {
    this.getCategories();
  }


  getCategories() {
    this.httpClient.get<Category[]>(this.url).subscribe(res => this.categories = res);
  }

  OnSelect(category?: Category) {
    if (category) {
      this.selectedCategory = category;
    }else{
      this.selectedCategory=null;
    }

  }

}
