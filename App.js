
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import AddTodo from './components/addTodo'
import TodoList from './components/list'


import { createStackNavigator, createAppContainer } from "react-navigation";

const navigationOptions ={
  headerStyle:{
    backgroundColor:'#1564bf'
  },
  headerTintColor:'white',
   headerTitleStyle:{
    fontWeigth:'bold',
    color:'white'
  }
}
class TodoDetails extends Component {
  static navigationOptions = {
    ...navigationOptions,
    title:'To-do Details',
    
  }
  render(){

      return(
          <View>
           <Text>{this.props.navigation.getParam('text')}</Text>
          </View>
      )
  }
}



class Home extends Component{
  static navigationOptions = {
    ...navigationOptions,
    title:'To-do App',
   
  }
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
        <ScrollView style={styles.listScroll}>
        <TodoList 
        todoList={this.state.todos} 
        navigation = {this.props.navigation}
        />
        </ScrollView>
        </View>
      </React.Fragment>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: TodoDetails
  }
});

const styles = StyleSheet.create({
  container: {
    flex:1,
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
  },
  listScroll:{
    width:'100%',
  }
});

export default createAppContainer(AppNavigator)