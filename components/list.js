import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native'
import Todo from './todo'

class TodoList extends Component {
  
    render(){

        return(
            <View>
                {this.props.todoList.map( (todo) => (
                    <Todo 
                    navigation = {this.props.navigation}
                    style={styles.todolist}text = {todo.text} />
                   ))
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    todolist: {
      padding:7.5,

    },
  });

export default TodoList;