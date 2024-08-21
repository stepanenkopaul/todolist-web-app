import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  items: any[] = [];
  itemName: string = ''; // Переменная для привязки данных
  constructor(private apiService: ApiService) { }


  getItems(){
    this.apiService.getItems().subscribe(data => {
      this.items = data;
    });
  }


  addItem() {

    const item = {
      text : this.itemName,
      isEditing : false,
      priority : 0,
      state : 0,
      startDate : null,
      endDate : null,
    }

    this.apiService.addItem(item).subscribe({
      next: (response) => console.log('Item added:', response),
      error: (err) => console.error('Error:', err),
    });
  }

  deleteItem(id: any) {
    this.apiService.deleteItem(id).subscribe(
      (response) => {
        console.log('Item deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }

}
