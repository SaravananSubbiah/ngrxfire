import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as PostActions from './post.actions';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
//   message$ : Observable<string>;
//   constructor(private store: Store<AppState>){
//     this.message$ = this.store.select('message');

//   }
//   spanisMessage(){
//     this.store.dispatch({type:'SPANISH'});
//   }

//   frenchMessage(){
//     this.store.dispatch({type:'FRENCH'});
//   }

// }

// interface AppState{
//   message : string;
// }


post$ : Observable<Post>;
text : string; //form input val;
constructor(private store: Store<AppState>){
  this.post$ = this.store.select('post');

}
editText(){
  this.store.dispatch(new PostActions.EditText(this.text));
}

resetPost(){
  this.store.dispatch(new PostActions.Reset);
}


upvote(){
  this.store.dispatch(new PostActions.Upvote);
}

downvote(){
  this.store.dispatch(new PostActions.Downvote);
}

test(){
  alert('asdfsd');
}
}

interface AppState{
  post : Post;
}
