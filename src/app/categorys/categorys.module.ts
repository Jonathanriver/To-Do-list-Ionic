import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorysPageRoutingModule } from './categorys-routing.module';

import { CategorysPage } from './categorys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorysPageRoutingModule
  ],
  declarations: [CategorysPage]
})
export class CategorysPageModule {}
