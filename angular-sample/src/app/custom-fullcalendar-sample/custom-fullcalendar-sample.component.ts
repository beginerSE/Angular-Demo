import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";

@Component({
  selector: "app-custom-fullcalendar-sample",
  templateUrl: "./custom-fullcalendar-sample.component.html",
  styleUrls: ["./custom-fullcalendar-sample.component.css"],
})
export class CustomFullcalendarSampleComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; //これを追加!

  constructor() {}

  ngOnInit() {}
}
