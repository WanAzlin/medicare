import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
const more = () => {
  return (
    <View style={styles.container}>
      <View style={styles.kotak1}>
      <Image style={styles.Kimg}
               source={require("../../assets/images/oil.png")} />
      </View>
      <Text style={styles.KBtitle1}>Minyak Masak Saji 1KG</Text>
      <Text style={styles.KBtitle2}>1 Botol Cap Merah</Text>
      <View style ={{flexDirection: "row"}}>
      <Text style={styles.KBtitle1}>RM 12.90</Text>
      <Text style={styles.KBtitle3}>Available in Stock</Text>
      </View>
      <View style={styles.box1}>
      <View style ={{flexDirection: "row"}}>
      <FontAwesome5 name="shopping-bag" size={30} color="#FF3B00" style={styles.cart} />
      <View style={styles.box}>
          <Text style={styles.titleBox1}>Free Delivery</Text>
          <Text style={styles.subtitleBox1}>Within 2 Days</Text>
      </View>
      <Text style={styles.titleBox2}>Choose Now</Text>
      <Entypo name="chevron-thin-right" size={20} color="#FF3B00"  style={styles.arrow}/>
        </View>
        <Text style={styles.KBtitle4}>Product Information</Text>
        <Text style={styles.KBtitle5}>Original is 100% pure soluble oil made from a perfect combination of central and south american oil. which have bean roasted to perfection. It has an amazing aroma, rich in taste and an easy lingering finish</Text>
    
    </View>
    <View style ={{flexDirection: "row"}}>
      <View style={styles.box2}>
        <View style ={{flexDirection: "row"}}>
            <Foundation name="minus-circle" size={40} color="#EFAA7C"style={styles.minus} />
            <Text style={styles.KBtitle6}>1</Text>
            <AntDesign name="pluscircleo" size={28} color="#FF3B00" style={styles.plus} />
        </View>
      </View>
      <View style={styles.box3}>
        <View style ={{flexDirection: "row"}}>
        <MaterialCommunityIcons name="shopping-outline" size={30} color="white" style={styles.cart2}  />
        <Link href="/order" asChild>
            <Pressable>
                {({ pressed }) => (
                        <Text style={styles.titleBox3}>Add To Cart</Text>
            )}
            </Pressable>
            </Link>
        
        </View>
      </View>
    </View>
    </View>
  )
}

export default more

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  kotak1: {
    height:300,
    width: 430,
    backgroundColor: "#E6E9E5",
    marginTop: 2,
  },
  Kimg:{
    height:300,
    width: 300,
    marginLeft: 60,
  },
  KBtitle1:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 15,
  },
  KBtitle2:{
    fontSize: 15,
    
    marginLeft: 20,
    paddingTop: 5,
  },
  KBtitle3:{
    fontSize: 15,
    color:"#359123",
    marginLeft: 170,
    paddingTop: 20,
  },
  KBtitle4:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 35,
  },
  KBtitle5:{
    fontSize: 15,
    
    marginLeft: 10,
    paddingTop: 5,
  },
  KBtitle6:{
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    paddingTop: 15,
  },
  box1: {
    height:80,
    width: 390,
    backgroundColor: "#F8EA9E",
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 10,
    
  },
  box2: {
    height:60,
    width: 140,
    backgroundColor: "#F8EA9E",
    borderRadius: 30,
    marginTop:160,
    marginLeft: 10,
    
  },
  box3: {
    height:60,
    width: 250,
    backgroundColor: "#FF3B00",
    borderRadius: 30,
    marginTop:160,
    marginLeft: 10,
    
  },
  titleBox1:{
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20,
    color: "#FF3B00"
   
  },
  subtitleBox1:{
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5,
  },
  box:{

  },
  cart:{
    marginLeft: 20,
    marginTop:28,
  },
  cart2:{
    marginLeft: 50,
    marginTop:15,
  },
  titleBox2:{
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 50,
    marginTop: 30,
    color: "#FF3B00"
   
  },
  titleBox3:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 20,
    color: "#FFFFFF"
   
  },
  arrow:{
    marginLeft: 10,
    marginTop:30,
  },
  minus:{
    marginLeft: 20,
    marginTop: 10,
  },
  plus:{
    marginLeft: 14,
    marginTop: 15,
  }
})