import { Component, OnInit } from "@angular/core";

export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
  favoriteColor: string;
}

const ELEMENT_DATA: Element[] = [
  {
    position: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    favoriteColor: "red",
  },
  {
    position: 1,
    firstName: "Mike",
    lastName: "Hussey",
    email: "mike@gmail.com",
    favoriteColor: "red",
  },
  {
    position: 1,
    firstName: "Ricky",
    lastName: "Hans",
    email: "ricky@gmail.com",
    favoriteColor: "red",
  },
  {
    position: 1,
    firstName: "Martin",
    lastName: "Kos",
    email: "martin@gmail.com",
    favoriteColor: "red",
  },
  {
    position: 1,
    firstName: "Tom",
    lastName: "Paisa",
    email: "tom@gmail.com",
    favoriteColor: "red",
  },
];

@Component({
  selector: "app-csv-sample",
  templateUrl: "./csv-sample.component.html",
  styleUrls: ["./csv-sample.component.css"],
})
export class CsvSampleComponent implements OnInit {
  constructor() {}
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    "position",
    "firstName",
    "lastName",
    "email",
    "favoriteColor",
  ];

  ngOnInit() {}
}
