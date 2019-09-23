import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-billcard',
  templateUrl: './billcard.component.html'
})
export class BillcardComponent implements OnInit {

  constructor() { }

  @Input() states: any;

  ngOnInit() {
  }

}
