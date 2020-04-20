import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgifSampleComponent } from "./ngif-sample/ngif-sample.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgforSampleComponent } from "./ngfor-sample/ngfor-sample.component";
import { ExpanelSampleComponent } from "./expanel-sample/expanel-sample.component";
import { NgplotSampleComponent } from "./ngplot-sample/ngplot-sample.component";
import { NgdialogSampleComponent } from "./ngdialog-sample/ngdialog-sample.component";
import { NgdialogpageSampleComponent } from "./ngdialogpage-sample/ngdialogpage-sample.component";
import { NgapiSampleComponent } from "./ngapi-sample/ngapi-sample.component";
import { BitcoinSampleComponent } from "./bitcoin-sample/bitcoin-sample.component";
import { BitflyerSampleComponent } from "./bitflyer-sample/bitflyer-sample.component";
import { FiledownloadSampleComponent } from "./filedownload-sample/filedownload-sample.component";
import { NgtableSampleComponent } from "./ngtable-sample/ngtable-sample.component";
import { NguploadSampleComponent } from "./ngupload-sample/ngupload-sample.component";
import { FullcalendarSampleComponent } from "./fullcalendar-sample/fullcalendar-sample.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import { CustomFullcalendarSampleComponent } from "./custom-fullcalendar-sample/custom-fullcalendar-sample.component";
import { NgdialogviewSampleComponent } from "./ngdialogview-sample/ngdialogview-sample.component"; // これを追加!
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { PdfSampleComponent } from "./pdf-sample/pdf-sample.component";
import { NgcalendarSampleComponent } from "./ngcalendar-sample/ngcalendar-sample.component";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrModule } from "angularx-flatpickr";
import { CommonModule } from "@angular/common";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    NgifSampleComponent,
    NgforSampleComponent,
    ExpanelSampleComponent,
    NgplotSampleComponent,
    NgdialogSampleComponent,
    NgdialogpageSampleComponent,
    NgapiSampleComponent,
    BitcoinSampleComponent,
    BitflyerSampleComponent,
    FiledownloadSampleComponent,
    NgtableSampleComponent,
    NguploadSampleComponent,
    FullcalendarSampleComponent,
    CustomFullcalendarSampleComponent,
    NgdialogviewSampleComponent,
    PdfSampleComponent,
    NgcalendarSampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,

    NgxChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    NgbModalModule,
    MatButtonToggleModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgdialogviewSampleComponent],
  exports: [NgcalendarSampleComponent],
})
export class AppModule {}
