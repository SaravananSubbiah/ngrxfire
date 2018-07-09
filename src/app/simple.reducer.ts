import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello Saravana', action: Action) {
    console.log(action.type,' , ', state);

    switch(action.type){
        case 'SPANISH':
            console.log(action.type);
            return state = "Hello Spanish";
        case 'FRENCH' : 
        console.log(action.type);
            return state = "Hello French";
        default : 
        console.log(action.type);
            return state;
    }
}
