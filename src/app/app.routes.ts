import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
    },
    canActivate: [AuthGuard],
  },

  {
    path: 'item-list',
    component: ItemListComponent,
    data: {
      title: 'Item list',
    },
    canActivate: [AuthGuard],
  },
];
