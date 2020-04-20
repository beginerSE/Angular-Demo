import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
declare var jsPDF: any;
@Component({
  selector: "app-pdf-sample",
  templateUrl: "./pdf-sample.component.html",
  styleUrls: ["./pdf-sample.component.css"],
})
export class PdfSampleComponent implements OnInit {
  @ViewChild("screen", { static: true }) screen: ElementRef;
  @ViewChild("canvas", { static: true }) canvas: ElementRef;
  @ViewChild("downloadLink", { static: true }) downloadLink: ElementRef;

  captureScreen() {
    const data = document.getElementById("contentToConvert");
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 595;
      const imgHeight = (canvas.height * imgWidth) / canvas.width - 50;
      const heightLeft = imgHeight;
      console.log(imgHeight);

      const contentDataURL = canvas.toDataURL("image/png");
      const pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });
  }

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

  htmlToPdf() {
    const doc = new jsPDF("letter");
    const ta = document.getElementById("pdfSink");
    // doc.fromHTML(ta, 0, 0);
    // doc.save("demo.pdf");
    doc.fromHTML(
      ta,
      0,
      0,
      {
        // options
      },

      setTimeout(function () {
        doc.save(`fileName`);
      }, 3000)
    );
  }
}
