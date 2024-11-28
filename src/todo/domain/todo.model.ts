import {PrimitiveTodo} from "./interfaces/todo";

export class Todo {
    constructor(private _attributes: PrimitiveTodo) {
    }

    static create(payload: PrimitiveTodo): Todo {
        return new Todo(payload);
    }
}
