import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
  standalone: false,
})
export class AddCategoryPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  addCategory() {
    const category = (document.getElementById('category') as HTMLInputElement).value;
    const categorrStatus = (document.getElementById('categorrStatus') as HTMLInputElement).value;
    const categories = localStorage.getItem('categories');
    let cat: any = []
    if (categories) {
      cat = JSON.parse(categories);
      cat.push({ 
        'name': category,
        'status': categorrStatus,
        'id': cat.length + 1
      });
      localStorage.setItem('categories', JSON.stringify(cat));
    } else {
      cat = [
        {
        'name': category,
        'status': categorrStatus,
        'id': 1
        }
      ]
      localStorage.setItem('categories', JSON.stringify(cat));
    }
    (document.getElementById('category') as HTMLInputElement).value = '';
    alert('Category added successfully!');
    this.router.navigateByUrl('categorys');  
  }

}
