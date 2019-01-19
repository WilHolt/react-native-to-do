import React, { Component } from 'react';
import {View, Text} from 'react-native'
import Todo from './todo'

class TodoList extends Component {
  
    render(){

        return(
            <View>
                {this.props.todoList.map( (todo) => (
                    <Todo text = {todo.text} />
                   ))
                }
            </View>
        )
    }
}

export default TodoList;