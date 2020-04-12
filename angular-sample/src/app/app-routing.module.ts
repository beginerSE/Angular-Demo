import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgifSampleComponent } from "./ngif-sample/ngif-sample.component";

const routes: Routes = [{ path: "ngif", component: NgifSampleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
