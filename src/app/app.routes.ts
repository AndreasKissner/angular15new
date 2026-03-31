import { Routes } from '@angular/router';
import { ProductList } from './shared/components/product-list/product-list';
import { PorductDetail } from './shared/components/porduct-detail/porduct-detail';

export const routes: Routes = [
    { path: "", component: ProductList },
    { path: "detail/:name", component: PorductDetail },
    { path: "compc", redirectTo: "" },
    { path: "**", redirectTo: "" }
];
