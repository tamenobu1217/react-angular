/// <reference path="interface.d.ts" />
import * as React from 'react';
import TodoItem from './TodoItem';
import { ReactElement } from 'react';
 
export default class TodoList extends React.Component<ITodoListProp, {}> {
    render() {
        var list: Array<ReactElement<TodoItem>> = [];
        this.props.todos.forEach((todo, index) => 
            list.push(<TodoItem key={todo.id} todo={todo} checkTodoAction={this.props.checkTodoAction} />)
        );
        return  (
            <ul className="todoList">
                {list}
            </ul>
        );
    }
}
