/// <reference path="./interface.d.ts" />

import * as React from 'react';
import '../App.css';

export default class TodoItem extends React.Component<ITodoProp, {}> {
    constructor(param: ITodoProp) {
        super(param);
    }
    render() {
        return (
            (this.props.todo.checked) 
                // tslint:disable-next-line:max-line-length
                ? <li key={this.props.todo.id} className="checked" onClick={() => this.props.checkTodoAction(this.props.todo.id)}>{this.props.todo.text}</li>
                // tslint:disable-next-line:max-line-length
                : <li key={this.props.todo.id} onClick={() => this.props.checkTodoAction(this.props.todo.id)}>{this.props.todo.text}</li>
        );
    }
}