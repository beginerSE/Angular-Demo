import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

class ApiData {
  data: string;
}
@Injectable({ providedIn: "root" })
@Component({
  selector: "app-bitcoin-sample",
  templateUrl: "./bitcoin-sample.component.html",
  styleUrls: ["./bitcoin-sample.component.css"],
})
export class BitcoinSampleComponent implements OnInit {
  btcPrice: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBtcData();
    setInterval(() => this.getBtcData(), 5000);
  }

  getBtcData() {
    this.http
      .get("https://public.bitbank.cc/btc_jpy/ticker")
      .subscribe((result: ApiData) => {
        this.btcPrice = result.data;
        console.log(this.btcPrice);
      });
  }
}
