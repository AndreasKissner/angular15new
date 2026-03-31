import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product';
import { Products } from '../../services/products';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})

export class ProductList {
  private productsService = inject(Products);
  list: Product[] = this.productsService.productList
}