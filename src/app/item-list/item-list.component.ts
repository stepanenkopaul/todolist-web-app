import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  items: any[] = [];

  constructor(private apiService: ApiService) { }


  getItems(){
    this.apiService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
