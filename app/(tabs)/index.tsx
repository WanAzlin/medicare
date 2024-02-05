import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const index = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style ={{flexDirection: "row"}}>
      <View style={styles.container1}>
      <Entypo name="location-pin" size={30} color="#FF3B00" style={styles.location} />
      </View>
      <View style={styles.container2}>
          <Text style={styles.locSub}>Delivery Address</Text>
          <Text style={styles.locSub1}>Sungai Buloh, Selangor</Text>
      </View>
      <View style={styles.container3}>
      <Feather name="shopping-cart" size={24} color="black" style={styles.cartTop} />
      </View>
      </View>
      <TextInput  placeholder='Search Item'  style={styles.TextInput}/>
      <View style ={{flexDirection: "row"}}>
        <Text style={styles.title4}>Trending Categories</Text>
        <Text style={styles.title9}>View All</Text> 
      </View>
      <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
          <Text style={styles.title1}>Fruits & Vegetables</Text>
          <Text style={styles.title2}>Fruits & Veg Item</Text> 
          <Image style={styles.Timg}
               source={require("../../assets/images/img1.png")} />
          </View>
          <View style={styles.box2}>
          <Text style={styles.title1}>Fishes & Meats</Text>
          <Text style={styles.title2}>Fishes & Meats</Text> 
          <Image style={styles.Timg}
               source={require("../../assets/images/img2.png")} />
          </View>
          <View style={styles.box3}>
          <Text style={styles.title1}>Cooking Element</Text>
          <Text style={styles.title2}>Cooking Element</Text> 
          <Image style={styles.Timg}
               source={require("../../assets/images/img3.png")} />
          </View>
        </ScrollView>
        <View style ={{flexDirection: "row"}}>
        <Text style={styles.title4}>Flash Sale</Text>
        <Text style={styles.title10}>View All</Text> 
      </View>
    </ScrollView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  container1: {
    height: 50,
    width: 50,
    backgroundColor: "#FFDAC8",
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 20,
  },
  container2:{
    marginLeft: 12,
    marginTop: 25,
  },
  container3:{
    height: 50,
    width: 50,
    backgroundColor: "#EEEDED",
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 65,
  },
  location:{
    marginLeft: 10,
    marginTop: 10,
  },
  cartTop:{
    marginLeft: 11,
    marginTop: 13,
  },
  locSub:{
    fontWeight: 'bold',
    fontSize: 15,
    color: "#A09D9C",
  },
  locSub1:{
    fontWeight: 'bold',
    fontSize: 18,
   
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#CCCACA",
    width:383,
    height: 40,
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 18,
    marginTop: 18,
    marginLeft: 15,
    
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 15,
  },
  title2: {
    fontSize: 13,
    color:"#ABA6A5",
    marginLeft: 12,
    paddingTop: 8,
    fontWeight: 'bold'
  },
  title4: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 15,
  },
  title9: {
    fontSize: 15,
    color:"#A09D9C",
    marginLeft: 140,
    paddingTop: 18,
    fontWeight: 'bold',
  },
  title10: {
    fontSize: 15,
    color:"#A09D9C",
    marginLeft: 235,
    paddingTop: 18,
    fontWeight: 'bold',
  },
  box1: {
    height: 190,
    width: 150,
    backgroundColor: "#FFDAC8",
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    
  },
  box2: {
    height: 190,
    width: 150,
    backgroundColor: "#77D8ED",
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    
  },
  box3: {
    height: 190,
    width: 150,
    backgroundColor: "#CAF3B7",
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    
  },
  Timg:{
    height:100,
    width: 100,
    marginLeft: 20,
  },
})