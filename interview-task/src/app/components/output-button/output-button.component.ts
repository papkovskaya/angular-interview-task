import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectAmountOfButtonsClicks } from '../../store/selectors/buttons-information.selector';

@Component({
  selector: 'app-output-button',
  templateUrl: './output-button.component.html',
  styleUrls: ['./output-button.component.scss']
})
export class OutputButtonComponent implements OnInit {
  amountOfClicks$: any;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this.amountOfClicks$ = this._store.select(selectAmountOfButtonsClicks);
  }

}
