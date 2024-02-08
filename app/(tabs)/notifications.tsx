import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
          <View style ={{flexDirection: "row"}}>
            <Text style={styles.OU}>Order Updates</Text>
          </View>
      </View>
      <Image style={styles.Kimg}
               source={require("../../assets/images/remove.png")} />
      <Text style={styles.text}>No Notifications Just Yet</Text>
      <View style={styles.box2}>
      <Text style={styles.text1}>Refresh</Text>

      </View>
    </View>
  )
}

export default notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  box1: {
    height:50,
    width: 440,
    backgroundColor: "#E9E9E9",
  },
  OU:{
    marginLeft: 20,
    marginTop: 18,
    fontWeight: 'bold',
    color: "#787777"
  },
  Kimg:{
    height:150,
    width: 150,
    marginLeft: 140,
    marginTop: 100,
  },
  text:{
    marginLeft: 100,
    marginTop: 20,
    fontSize: 20,
  },
  box2: {
    height:50,
    width: 150,
    backgroundColor: "#47B0E9",
    marginLeft: 130,
    marginTop: 20,
    borderRadius: 10
  },
  text1:{
    marginLeft: 40,
    marginTop: 13,
    fontSize: 20,
    color: "#FFFFFF"
  },
})