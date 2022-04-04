import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DolarService } from './dolar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dolar = new FormGroup({
    dolar: new FormControl(''),
    USD: new FormControl(''),

  });
  resp: any;
  mult:any;
  

  constructor(
    private DolarService: DolarService
  ) { }

  ngOnInit() { }

  getdolar() {
    this.DolarService.getadress(this.dolar.value.USD).subscribe((result) => {
      this.fillAddress(result)
      this.resp = result.USD.high;
      this.mult = this.dolar.value.dolar

    }
    );
  }

  fillAddress(result: any) {
    this.dolar.patchValue({
      USD: result.USD.high,
    });
  }
}
