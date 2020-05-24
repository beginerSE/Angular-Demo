import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  no: number;
  weight: number;
  weightRate: number;
  remarks: string;
}

@Component({
  selector: "app-multi-table-sample",
  templateUrl: "./multi-table-sample.component.html",
  styleUrls: ["./multi-table-sample.component.css"],
})
export class MultiTableSampleComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { no: 1001, weight: 65.5, weightRate: 19.5, remarks: "運動不足" },
    { no: 1002, weight: 66, weightRate: 18.1, remarks: "飲みすぎ" },
    { no: 1003, weight: 65.7, weightRate: 19.1, remarks: "" },
    { no: 1004, weight: 65.8, weightRate: 19.3, remarks: "" },
    { no: 1005, weight: 65.3, weightRate: 20.1, remarks: "" },
  ];

  constructor() {}

  ngOnInit() {}

  displayedColumns: string[] = ["no", "weight", "weightRate", "remarks"];
  dataSource = this.ELEMENT_DATA;
}
