import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgifSampleComponent } from "./ngif-sample/ngif-sample.component";
import { FullcalendarSampleComponent } from "./fullcalendar-sample/fullcalendar-sample.component"; // これを追加!
import { CustomFullcalendarSampleComponent } from "./custom-fullcalendar-sample/custom-fullcalendar-sample.component"; // これを追加!
import { NgdialogpageSampleComponent } from "./ngdialogpage-sample/ngdialogpage-sample.component"; // これを追加!

const routes: Routes = [
  { path: "ngif", component: NgifSampleComponent },
  { path: "fullcalendar-sample", component: FullcalendarSampleComponent }, //これを追加!,
  {
    path: "custom-fullcalendar-sample",
    component: CustomFullcalendarSampleComponent,
  }, //これを追加!,
  { path: "dialog", component: NgdialogpageSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}