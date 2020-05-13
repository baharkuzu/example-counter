import {FORM} from "./types";

export const formReducer = (state= [], action)  => {
       switch (action.type) {
        case 'FORM':
            return [...state, action.payload, {id: Math.random()}];
        default:
            return state;
       }
};
