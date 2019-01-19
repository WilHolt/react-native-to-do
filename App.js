
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import AddTodo from './components/addTodo'
import TodoList from './components/list'


class Hello extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Text
        style={styles.welcome}>
        Welcome, {this.props.name}
      </Text>
    )
  }
}

export default class App extends Component{
  constructor() {
    super();
    const todo1 = {
      text: "fazer o ap bonitão",
    }
    const todo2 = {
      text: "fazer o app mais bonitão",
    }
    const todo3 = {
      text: "lanchar",
    }
    this.state = {
      todos: [todo1,todo2,todo3],
    }
  }
  add(text){
      this.setState({
      // todos:{...this.state.todos,text}
      todos:this.state.todos.concat([{text}])
    })
  }
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
        <AddTodo  add={ text => this.add(text)} /> 
        <TodoList todoList={this.state.todos} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header:{
    flex: 5,
    backgroundColor: '#841584',
  }
});
