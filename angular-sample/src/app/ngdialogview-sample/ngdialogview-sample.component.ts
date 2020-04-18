import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-ngdialogview-sample",
  templateUrl: "./ngdialogview-sample.component.html",
  styleUrls: ["./ngdialogview-sample.component.css"],
})
export class NgdialogviewSampleComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<NgdialogviewSampleComponent>
  ) {}

  ngOnInit() {}
}
