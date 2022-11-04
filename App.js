import { useState, useEffect, useRef } from 'react';
import { ScrollView, Text, View, SafeAreaView, Alert } from 'react-native';
import { firestore, collection, addDoc, TODOS, query, onSnapshot, doc, deleteDoc, updateDoc } from './firebase/Config'
import { AntDesign } from '@expo/vector-icons'
import Login from './components/Login';
import List from './components/List';
import StyleSheet from './Styles';
import AddNew from './components/AddNew';

export default function App() {
  const [logged, setLogged] = useState(false)
  const todoRef = useRef();
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [updateMode, setUpdateMode] = useState(false)
  const [updatedTodo, setUpdatedTodo] = useState('')

  useEffect(() => {
    const q = query(collection(firestore, TODOS))

    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      const tempTodos = []

      querySnapshot.forEach(doc => {
        const todoObject = {
          id: doc.id,
          text: doc.data().text,
          }
        tempTodos.push(todoObject)
      })
      setTodos(tempTodos)
    })

    return () => {
      unsubscribe()
    }
  }, [])
  
  const save = async() => {
    const docRef = await addDoc(collection(firestore, TODOS), {
      text: newTodo
    }).catch (error => console.log(error))
    setNewTodo('')
  }

  const update = async() => {
    const docRef = await updateDoc(doc(firestore, TODOS, todoRef.current), {
      text: updatedTodo
    })
    todoRef.current = ''
    setUpdateMode(false)
  }

  const edit = (text, id) => {
    todoRef.current = id
    setUpdatedTodo(text)
    setUpdateMode(true)    
  }

  const remove = async(id) => {
    const docRef = await deleteDoc(doc(firestore, TODOS, id))
  }

  const showAlert = (id) => {
    Alert.alert(
      "",
      "Haluatko varmasti poistaa merkinnän?",
      [
        { 
          text: "Poista",
          onPress: () => remove(id)
        },
        {
          text: "Peruuta"
        }
      ]
    )}

  const logout = () => setLogged(false)

  if(logged){
  return (
    <SafeAreaView style={StyleSheet.container}>
      <View style={[StyleSheet.row, StyleSheet.darkColor]}>
        <Text style={StyleSheet.header}>To do</Text>
        <AntDesign style={StyleSheet.icon} name='logout' size={36} onPress={logout} />
      </View>
      <ScrollView>
        <List todos={todos} updateMode={updateMode} update={update} remove={remove} edit={edit} todoRef={todoRef} updatedTodo={updatedTodo} setUpdatedTodo={setUpdatedTodo} showAlert={showAlert} />
        <AddNew newTodo={newTodo} setNewTodo={setNewTodo} save={save} />
      </ScrollView>
    </SafeAreaView>
  );
} else {
  return <Login setLogin={setLogged} /> 
}
}
