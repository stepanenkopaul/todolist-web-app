
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
    },
  },

  {
    path: 'item-list',
    component: ItemListComponent,
    data: {
      title: 'Item list',
    },
  },



];

