import { Component, OnInit } from "@angular/core";
// import { PDFDocumentProxy } from "ng2-pdf-viewer";
// import { PDFAnnotationData } from "pdfjs-dist";
@Component({
  selector: "app-pdf-viewer-sample",
  templateUrl: "./pdf-viewer-sample.component.html",
  styleUrls: ["./pdf-viewer-sample.component.css"],
})
export class PdfViewerSampleComponent implements OnInit {
  pdfSrc = "../assets/pdf-test.pdf";

  constructor() {}

  ngOnInit() {}
}
