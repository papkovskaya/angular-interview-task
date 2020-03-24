import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {EButtonsInformationActions} from '../../store/actions/buttons-information.actions';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public counter: number = 0;

  constructor(private _store: Store) { }

  ngOnInit(): void {
  }

  increaseCounter() {
    this.counter += 1;
    this._store.dispatch({type: EButtonsInformationActions.UpdateAmountOfClicks, payload: 1});
  }

}
