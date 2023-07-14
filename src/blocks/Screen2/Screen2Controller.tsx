
import { Component } from 'react';




interface IProps {
    navigation?: any;


    todos: { id: string, text: string }[];
    addTodo: (task: { id: number, text: string }) => void;

    deleteTodo: (taskId: string) => void;

    updateTodo: (tasks: { id: string, text: string }) => void;



}
interface IState {
    todoText: string;
    editingTodoId: string;
    editingTodoText: string;
    error: boolean;
}

export class Screen2Controller extends Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            todoText: '',
            editingTodoId: '',
            editingTodoText: '',
            error: false,
        };
    }

    handleAddTodo = () => {
        const { todoText } = this.state;
        if (todoText.trim() !== '') {
            this.props.addTodo({
                id: Date.now(),
                text: todoText,
            });
            this.setState({ todoText: '', error: false });
        }
        else {
            this.setState({ todoText: '', error: true });
        }
    };

    handleDeleteTodo = (id: string) => {
        this.props.deleteTodo(id);
    };

    handleEditTodo = (id: string, text: string) => {
        this.setState({ editingTodoId: id, todoText: text });
    };
    handleUpdateTodo = () => {
        const { editingTodoId } = this.state;
        if (this.state.todoText.trim() !== '') {
            this.props.updateTodo({
                id: editingTodoId,
                text: this.state.todoText,
            });
            this.setState({ editingTodoId: '', todoText: '' });
        }
    };


}



export default Screen2Controller
