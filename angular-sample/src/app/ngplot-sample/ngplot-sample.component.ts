import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "app-ngplot-sample",
  templateUrl: "./ngplot-sample.component.html",
  styleUrls: ["./ngplot-sample.component.css"],
})
export class NgplotSampleComponent implements OnInit {
  // グラフの表示サイズ
  view: any[] = [700, 400];

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };

  sampleData = [
    {
      name: "btc_jpy",
      series: [
        { name: "2020/03/01", value: 941263 },
        { name: "2020/03/02", value: 927433 },
        { name: "2020/03/03", value: 891997 },
        { name: "2020/03/04", value: 838375 },
        { name: "2020/03/05", value: 814149 },
        { name: "2020/03/06", value: 796400 },
        { name: "2020/03/07", value: 821648 },
        { name: "2020/03/08", value: 825701 },
      ],
    },
  ];

  // チャートの設定
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "Year";
  yAxisLabel: string = "Population";
  timeline: boolean = true;

  constructor() {}

  ngOnInit() {}
}
