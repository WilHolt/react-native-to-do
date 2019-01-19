import React, { Component } from 'react';

import { Text, TextInput, View, Button, StyleSheet } from 'react-native';

export default class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }
    addTodo(text) {
        this.props.add(text) 
       this.setState({
        text: ''
    })
    }
    onTextInput(text) {
        this.setState({
            text: text
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <Text>Nome da Ação</Text> */}
                <TextInput value={this.state.text}
                    onChangeText={text => this.onTextInput(text)}
                    style={styles.input}
                     />
                <Button
                    onPress={() => this.addTodo(this.state.text)}
                    title= 'Add To-DO'
                    style={styles.button}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      padding:15,
      backgroundColor:'lightgrey',
      flexDirection:'row',
      width:'100%',
    },
    input:{
        flex:1,
        padding:5,
        backgroundColor:'white',
        borderRadius:5,
        marginRight:10

    },
    button:{
        flexShrink:0,
      backgroundColor:'lightgrey',
        margin:10,

    }
  });
  