import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.page.html',
  styleUrls: ['./categorys.page.scss'],
  standalone: false,
})
export class CategorysPage implements OnInit {
  categories: any;
  searchTerm: string = '';
  constructor(
    public router: Router,
  ) { }

  async ngOnInit() {    
    let cat: any = localStorage.getItem('categories')
    if (!cat) {
      cat = '[]';
    }
    // console.log(cat);  
    this.categories = JSON.parse(cat);
    console.log(this.categories);
    
  }

  AddCategory() {
    this.router.navigateByUrl('add-category');    
  }

  editCategory(id: number) {  
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(id)
      }
    };
    this.router.navigate(['edit-category'], navigationExtras);


    
  }

  deleteCategory(id: number) {      
    console.log('deleteCategory', id);
    let cat: any = localStorage.getItem('categories')
    if (!cat) {
      cat = '[]';
    }
    this.categories = JSON.parse(cat);
    this.categories = this.categories.filter((category: any) => category.id !== id);
    localStorage.setItem('categories', JSON.stringify(this.categories));
    alert('Category deleted successfully!');
    this.router.navigateByUrl('categorys');    
  }

  filterCategories() {
    if (this.searchTerm) {
      let f = this.categories.filter((category: any) =>
        category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      this.categories = f;
      
    } else {
     
      this.ngOnInit();
    }
    
  }
  

}
