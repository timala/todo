import { View, TextInput, Button } from 'react-native'
import React from 'react'
import StyleSheet from '../Styles'

export default function AddNew({newTodo, setNewTodo, save}) {
  return (
    <View style={[StyleSheet.addNew, StyleSheet.mediumColor]}>
        <TextInput style={StyleSheet.input}
            placeholder='Lisää uusi tehtävä'
            value={newTodo} 
            onChangeText={text => setNewTodo(text)} />
        <Button color='#8aacc8' title='Lisää' onPress={save} />
    </View>
  )
}