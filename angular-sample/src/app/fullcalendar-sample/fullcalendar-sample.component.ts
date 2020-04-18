import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";

@Component({
  selector: "app-fullcalendar-sample",
  templateUrl: "./fullcalendar-sample.component.html",
  styleUrls: ["./fullcalendar-sample.component.css"],
})
export class FullcalendarSampleComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; //これを追加!

  constructor() {}

  ngOnInit() {}
}
