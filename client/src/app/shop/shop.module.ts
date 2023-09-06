import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {SharedModule} from "../shared/shared.module";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  exports: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    SharedModule,
    RouterModule,
  ]
})
export class ShopModule { }
