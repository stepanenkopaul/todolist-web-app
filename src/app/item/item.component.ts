import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Item {
  _id?: string;
  text: string;
  priority: number;
  state: number;
  startDate: Date | null;
  endDate: Date | null;
  isEditing?: boolean;
  isSaved?: boolean;
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
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item!: Item;
  @Input() priorities!: Priority[];
  @Input() states!: State[];
  @Input() disabled!: boolean;

  @Output() itemChangedEvent = new EventEmitter<Item>();
  @Output() saveItemEvent = new EventEmitter<Item>();
  @Output() deleteItemEvent = new EventEmitter<string>();

  editItem(): void {
    this.item.isEditing = !this.item.isEditing;
  }

  saveItem(): void {
    this.saveItemEvent.emit(this.item);
  }

  deleteItem(): void {
    this.deleteItemEvent.emit(this.item._id);
  }

  itemChanged(): void {
    this.item.isSaved = false;
    this.itemChangedEvent.emit(this.item);
  }
}
