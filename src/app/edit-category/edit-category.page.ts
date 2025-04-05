import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
  standalone: false
})
export class EditCategoryPage implements OnInit {
categories: any;
category: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
  ) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {  
      this.category = JSON.parse(params['special']);
      let cat: any = localStorage.getItem('categories')
      if (!cat) {
        cat = '[]';
      }
      this.categories = JSON.parse(cat);
      console.log(this.categories);
      for (let index = 0; index < this.categories.length; index++) {
        const element = this.categories[index];
        if (element.id == this.category) {
          this.category = element;
          
          
          break;
        }
        
      }
      
    })
  }

  updateCategory() {
    console.log('updateCategory', this.category);
    let cat: any = localStorage.getItem('categories')
    if (!cat) {
      cat = '[]';
    }
    this.categories = JSON.parse(cat);
    this.categories = this.categories.filter((category: any) => category.id !== this.category.id);
    this.categories.push(this.category);
    localStorage.setItem('categories', JSON.stringify(this.categories));
    alert('Category updated successfully!');
    this.router.navigateByUrl('categorys'); 
  }

}
