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
      const imgWidth = 308;
      const imgHeight = (canvas.height * imgWidth) / canvas.width + 50;
      const contentDataURL = canvas.toDataURL("image/png");
      const pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });
  }

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
