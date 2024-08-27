import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-dialog/confirm-dialog.component';

interface ClientItem {
  _id: string;
  text: string;
  priority: number;
  state: number;
  startDate: Date;
  endDate: Date;
  userId: string;
  isEditing: boolean;
  isSaved: boolean;
}

interface AddItem {
  text: string;
  priority: number;
  state: number;
  startDate: Date | null;
  endDate: Date | null;
}

interface Priority {
  value: number;
  viewValue: string;
}

interface State {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  itemToAdd: AddItem = {
    text: '',
    priority: 0,
    state: 0,
    startDate: null,
    endDate: null,
  }; // Переменная для привязки данных

  priorities: Priority[] = [
    { value: 0, viewValue: 'none' },
    { value: 1, viewValue: 'small' },
    { value: 2, viewValue: 'normal' },
    { value: 3, viewValue: 'high' },
    { value: 4, viewValue: 'important' },
    { value: 5, viewValue: 'urgent' },
  ];

  states: State[] = [
    { value: 0, viewValue: 'not started' },
    { value: 1, viewValue: 'progress' },
    { value: 2, viewValue: 'completed' },
  ];

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog
  ) {}

  openDeleteItemDialog(itemId: string): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);
    dialogRef.componentInstance.title = 'Item deleting';
    dialogRef.componentInstance.content = 'Do you want to delete item?';

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteItem(itemId);
      }
    });
  }

  openSaveItemDialog(item: any): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);
    dialogRef.componentInstance.title = 'Item saving';
    dialogRef.componentInstance.content = 'Do you want to save item?';

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.saveItem(item);
      }
    });
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.apiService.getItems().subscribe((data) => {
      this.items = data.map((item: ClientItem) => ({
        ...item,
        isEditing: false,
        isSaved: true,
      }));
    });
  }

  addItem() {
    const item: AddItem = {
      text: this.itemToAdd.text,
      priority: this.itemToAdd.priority,
      state: this.itemToAdd.state,
      startDate: this.itemToAdd.startDate,
      endDate: this.itemToAdd.endDate,
    };

    this.apiService.addItem(item).subscribe({
      next: (response) => {
        console.log('Item added:', response);
        this.getItems();
      },

      error: (err) => console.error('Error:', err),
    });
  }

  saveItem(item: any) {
    this.apiService.saveItem(item).subscribe({
      next: (response) => {
        console.log('Item saved:', response);
        this.getItems();
      },
      error: (err) => console.error('Error:', err),
    });
  }

  deleteItem(id: any) {
    this.apiService.deleteItem(id).subscribe({
      next: (response) => {
        console.log('Item deleted:', response);
        this.getItems();
      },
      error: (err) => console.error('Error:', err),
    });
  }

  editItem(item: any) {
    item.isEditing = !item.isEditing;
  }

  itemChanged(item: any) {
    item.isSaved = false;
    console.log('itemChanged:' + item.isSaved);
  }
}
