import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.css']
})
export class ConfirmationBoxComponent implements OnInit {
  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public messageInjected: string,
  public dialogRef?: MatDialogRef<ConfirmationBoxComponent>
     ) {
        this.message = messageInjected;
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
