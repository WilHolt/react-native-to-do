
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, PermissionsAndroid } from 'react-native';
import AddTodo from './components/addTodo'
import TodoList from './components/list'


import { createStackNavigator, createAppContainer } from "react-navigation";

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#1564bf'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    color: 'white'
  }
}
class TodoDetails extends Component {
  static navigationOptions = {
    ...navigationOptions,
    title: 'To-do Details',

  }
  render() {
    const todo = this.props.navigation.getParam('todo')
    console.warn(todo)
    return (

      <View>
        <Text>{todo.text}</Text>
      </View>
    )
  }
}



class Home extends Component {
  static navigationOptions = {
    ...navigationOptions,
    title: 'To-do App',

  }
  constructor() {
    super();

    const todo1 = {
      id: 1,
      text: "fazer o ap bonitão",
    }
    const todo2 = {
      id: 2,
      text: "fazer o app mais bonitão",
    }
    const todo3 = {
      id: 3,
      text: "lanchar",
    }
    this.state = {
      idCount: 3,
      todos: [todo1, todo2, todo3],
    }

    this.requestMapsPermission();
  }


  async requestMapsPermission() {
    try {
      const isGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Todo app location access',
          'message': 'We need your location to know here you'
        }
      )
      this.setState({
        geolocationPermissionGranted: isGranted,
      })
    } catch (error) {
      console.log(error)

    }
  }

  async setTodoLocation(id, coords) {
    const { latitude, longitude } = coords;
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
      );

      const data = await response.json();

      if (!data.error_message) {

        const address = data.results[0].formatted_address;

        const { todos } = this.state;
        todos.find(todo => todo.id === id).location = address;
        this.setState({
          todos
        });
      } else {
        throw JSON.stringify(data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  add(text) {
    const id = this.state.idCount + 1;
    this.setState({
      todos: [
        { id, text },
        ...this.state.todos
      ],
      idCount: id
    })

    if (this.state.geolocationPermissionGranted) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.setTodoLocation(id, pos.coords)
      }, null, { enableHighAccuracy: true })
    }
  }
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <AddTodo add={text => this.add(text)} />
          <ScrollView style={styles.listScroll}>
            <TodoList
              todoList={this.state.todos}
              navigation={this.props.navigation}
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
    flex: 1,
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
  header: {
    flex: 5,
    backgroundColor: '#841584',
  },
  listScroll: {
    width: '100%',
  }
});

export default createAppContainer(AppNavigator)