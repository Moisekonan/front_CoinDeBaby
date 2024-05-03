import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ShopComponent } from './views/shop/shop.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { ProfilComponent } from './views/profil/profil.component';
import { PanierComponent } from './views/panier/panier.component';
import { DetailProductsComponent } from './views/detail-products/detail-products.component';

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
        path: 'panier',component: PanierComponent}
    ,
    {
        path: 'profil',component: ProfilComponent}
    ,
    {
        path: 'detail-products',component: DetailProductsComponent}
    
];

