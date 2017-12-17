import * as React  from 'react';
 
export default class AddButton extends React.Component<IAddButtonProp, IAddButtonState> {
    inputBox: HTMLInputElement | null;

    constructor(param: IAddButtonProp) {
        super(param);
        this.state = {
            text: ''
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleTextChanged = this.handleTextChanged.bind(this);
    }

    handleAdd(): void {
        this.props.addTodoAction(this.state.text);
        this.setState({ text: ''});
    }

    handleTextChanged(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ text: e.target.value});
    }

    render() {
        return (
        <div className="add">
            <input  type="text"
                    placeholder="TODOを入力"
                    value={this.state.text}
                    onChange={this.handleTextChanged}
            />
            <input  type="button"
                    value="登録"
                    onClick={this.handleAdd}
            />
        </div>
        );
    }
}
