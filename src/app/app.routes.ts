import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ShopComponent } from './views/shop/shop.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';

import { DetailProductsComponent } from './views/detail-products/detail-products.component';
import { CartsComponent } from './views/carts/carts.component';
import { ProfileComponent } from './views/profile/profile.component';

export const routes: Routes = [
    {
        path: '',component: HomeComponent
    },
    {
        path: 'shop',component: ShopComponent
    },
    {
        path: 'contact',component: ContactComponent
    },
    {
        path: 'about',component: AboutComponent}
    ,
    {
        path: 'panier',component: CartsComponent}
    ,
    {
        path: 'profil',component: ProfileComponent}
    ,
    {
        path: 'detail-products',component: DetailProductsComponent}
    
];

