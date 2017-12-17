interface ITodo {
    id: string;
    text: string;
    checked: boolean;
}
interface IAddButtonProp {
    addTodoAction(text: string): void;
}
interface IAddButtonState {
    text: string;
}

interface ITodoProp {
    todo: ITodo;
    checkTodoAction(id: string): void;
}

interface ITodoListProp {
    todos: Array<ITodo>;
    checkTodoAction(id: string): void;
}

interface IAppState {
    todos: Array<ITodo>;
}