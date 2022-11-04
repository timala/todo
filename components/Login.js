import { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from '../firebase/Config'
import StyleSheet from '../Styles'

export default function Login({setLogin}) {
    const [user, setUser] = useState('test@foo.com')
    const [password, setPassword] = useState('testi1')

    const login = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, user, password)
        .then( userCredential => {
            setLogin(true)
        }).catch(error => {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                alert('Invalid credentials!')
            } else if (error.code === 'auth/too-many-requests') {
                alert('Too many attempts, your account will be locked temporarily')
            } else if (error.code === 'auth/invalid-email') {
                alert('Invalid email')
            } else {
                console.log(error.code)
                console.log(error.message)
            }
        })
    }

  return (
    <SafeAreaView style={StyleSheet.container}>
        <View>
            <Text style={[StyleSheet.header, StyleSheet.darkColor]}>Kirjaudu sisään</Text>
            <View style={StyleSheet.login}>
                <Text style={StyleSheet.text}>Käyttäjätunnus</Text>
                <TextInput style={[StyleSheet.input, StyleSheet.mediumColor]} 
                    keyboardType='email-address' 
                    placeholder='Käyttäjätunnus' 
                    value={user} 
                    onChangeText={text => setUser(text)} />
                <Text style={StyleSheet.text}>Salasana</Text>
                <TextInput style={[StyleSheet.input, StyleSheet.mediumColor]} 
                    placeholder='Salasana'
                    secureTextEntry
                    value={password} 
                    onChangeText={text => setPassword(text)} />
                <Button color='#8aacc8' title='Kirjaudu' onPress={login} />
            </View>
        </View>
    </SafeAreaView>
  )
}