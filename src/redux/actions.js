import {FORM} from "./types";

export const form = (content) => {
    return {
        type: FORM,
        payload: content
    }
};
