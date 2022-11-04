import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import StyleSheet from '../Styles';

export default function List(props) {
  return (
    <View style={StyleSheet.list}>
        { props.todos.map(todo => (
          <View style={[StyleSheet.listElement, StyleSheet.mediumColor]} key={todo.id}>
            { props.updateMode && todo.id === props.todoRef.current && 
              <View style={StyleSheet.row}>
                <TextInput style={StyleSheet.input} value={props.updatedTodo} onChangeText={text => props.setUpdatedTodo(text)} />
                <View style={StyleSheet.center}>
                  <AntDesign style={StyleSheet.icon} name='save' size={24} onPress={() => props.update()} />
                  <Text style={StyleSheet.helpText}>Tallenna</Text>
                </View>
              </View>}
            {todo.id !== props.todoRef.current && 
              <View style={StyleSheet.row}>  
                <Text style={StyleSheet.text}>{todo.text}</Text>
                <View style={StyleSheet.buttons}>
                  <View style={StyleSheet.center}>
                    <AntDesign style={StyleSheet.icon} name='edit' size={24} onPress={() => props.edit(todo.text, todo.id)} />
                    <Text style={StyleSheet.helpText}>Muokkaa</Text>
                  </View>
                  <View style={StyleSheet.center}>
                    <AntDesign style={StyleSheet.icon} name="delete" size={24} onPress={() => props.showAlert(todo.id)} />
                    <Text style={StyleSheet.helpText}>Poista</Text>
                  </View>
                </View>
              </View>}
            </View>
              ))
        }
        </View>
  )
}