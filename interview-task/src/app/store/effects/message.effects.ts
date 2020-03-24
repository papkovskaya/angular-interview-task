// import { Injectable } from '@angular/core';
// import { Effect, ofType, Actions} from '@ngrx/effects';
// import { Store, select } from '@ngrx/store';
// import { of } from 'rxjs';
// import { switchMap, map, withLatestFrom } from 'rxjs/operators';

// import { EMessageActions } from '../actions/message.actions';

// @Injectable()
// export class MessageEffects {
//   @Effect()
//   message$ = this.actions$.pipe(
//     ofType(EMessageActions.LoadMessage),
//     map(() =>
//       this.MessageService.getArticles().pipe(
//         map(articles => new ArticlesLoadedSuccess({ articles: articles })),
//         catchError(() => of(new ArticlesLoadedError()))
//       )
//     )
//   )

//   constructor(
//     private actions$: Actions,
//     private articlesService: ArticlesService
//   ) {}
// }