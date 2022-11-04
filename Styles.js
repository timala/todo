import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fafafa',
        height: '100%'
      },
      darkColor: {
        backgroundColor: '#8aacc8',
      },
      mediumColor: {
        backgroundColor: '#bbdefb',
      },
      login: {
        padding: 30,
      },
      header: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 5,
      },
      list: {
        width: '100%'
      },
      listElement: {
        width: '97%',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        margin: 5,
        justifyContent: 'space-between',
      },
      row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 5
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      addNew: {
        padding: 10,
        margin: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#97b498'
      },
      text: {
        fontSize: 16,
      },
      helpText: {
        fontSize: 8,
        fontWeight: 'bold'
      },
      center: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        fontSize: 16,
        borderRadius: 5,
        marginBottom: 12,
        padding: 4
      },
      icon: {
        padding: 5
      },
})