import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngif-sample",
  templateUrl: "./ngif-sample.component.html",
  styleUrls: ["./ngif-sample.component.css"],
})
export class NgifSampleComponent implements OnInit {
  flg1: boolean;
  flg2: boolean; //追記
  flg3: boolean;

  constructor() {
    this.flg1 = true;
    this.flg2 = false;
    this.flg3 = true;
  }

  ngOnInit() {}

  doClick() {
    // this.flg3 = !this.flg3;
    if (this.flg3 == true) {
      this.flg3 = false;
    } else {
      this.flg3 = true;
    }
  }
}
