import { Component, OnInit, Inject, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: "app-edit-dialog",
  templateUrl: "./edit-dialog.component.html",
  styleUrls: ["./edit-dialog.component.css"],
})
export class EditDialogComponent implements OnInit {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData
  ) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: "Cancel" });
  }

  ngOnInit() {}
}
