import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HomeComponent } from './components/home/home.component';

import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HomeComponent

  ],
  imports: [
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
