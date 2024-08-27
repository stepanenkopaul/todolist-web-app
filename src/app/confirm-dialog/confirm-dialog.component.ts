import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
})
export class ConfirmDeleteDialogComponent {
  @Input() title: string = '';
  @Input() content: string = '';

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>) {}

  onYesClick(): void {
    return this.dialogRef.close(true);
  }

  onNoClick(): void {
    return this.dialogRef.close(false);
  }
}
