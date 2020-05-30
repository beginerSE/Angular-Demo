import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgifSampleComponent } from "./ngif-sample/ngif-sample.component";
import { FullcalendarSampleComponent } from "./fullcalendar-sample/fullcalendar-sample.component"; // これを追加!
import { CustomFullcalendarSampleComponent } from "./custom-fullcalendar-sample/custom-fullcalendar-sample.component"; // これを追加!
import { NgdialogpageSampleComponent } from "./ngdialogpage-sample/ngdialogpage-sample.component"; // これを追加!
import { NgplotSampleComponent } from "./ngplot-sample/ngplot-sample.component";
import { PdfSampleComponent } from "./pdf-sample/pdf-sample.component";
import { NgcalendarSampleComponent } from "./ngcalendar-sample/ngcalendar-sample.component";
import { PdfViewerSampleComponent } from "./pdf-viewer-sample/pdf-viewer-sample.component";
import { FlexlauoutSampleComponent } from "./flexlauout-sample/flexlauout-sample.component";
import { BitcoinSampleComponent } from "./bitcoin-sample/bitcoin-sample.component";
import { NgapiSampleComponent } from "./ngapi-sample/ngapi-sample.component";
import { CsvSampleComponent } from "./csv-sample/csv-sample.component";
import { ExpanelSampleComponent } from "./expanel-sample/expanel-sample.component";
import { NgtableSampleComponent } from "./ngtable-sample/ngtable-sample.component";
import { MultiTableSampleComponent } from "./multi-table-sample/multi-table-sample.component";
import { EditTableSampleComponent } from "./edit-table-sample/edit-table-sample.component";

const routes: Routes = [
  { path: "ngif", component: NgifSampleComponent },
  { path: "fullcalendar-sample", component: FullcalendarSampleComponent }, //これを追加!,
  {
    path: "custom-fullcalendar-sample",
    component: CustomFullcalendarSampleComponent,
  },
  { path: "dialog", component: NgdialogpageSampleComponent },
  { path: "plot", component: NgplotSampleComponent },
  { path: "pdf-generater", component: PdfSampleComponent },
  { path: "pdf-viewer", component: PdfViewerSampleComponent },
  { path: "angular-calendar-sample", component: NgcalendarSampleComponent },
  { path: "flexlayout-sample", component: FlexlauoutSampleComponent },
  { path: "bitcoin-sample", component: BitcoinSampleComponent },
  { path: "api-sample", component: NgapiSampleComponent },
  { path: "csv-download", component: CsvSampleComponent },
  { path: "expanel-sample", component: ExpanelSampleComponent },
  { path: "mattable-sample", component: NgtableSampleComponent },
  { path: "multi-mattable-sample", component: MultiTableSampleComponent },
  { path: "edit-mattable-sample", component: EditTableSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
