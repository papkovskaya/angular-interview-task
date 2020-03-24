import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMessage } from 'src/app/store/selectors/message.selector';
import { EMessageActions } from 'src/app/store/actions/message.actions';

@Component({
  selector: 'app-output-message',
  templateUrl: './output-message.component.html',
  styleUrls: ['./output-message.component.scss']
})
export class OutputMessageComponent implements OnInit {

  message$: Observable<string> = this._store.select(selectMessage);

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch({type: EMessageActions.LoadMessage});
  }

}
