import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
const order = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <View style ={{flexDirection: "row"}}>
          <AntDesign name="infocirlce" size={24} color="#FF3B00" style={styles.info} />
          <Text style={styles.titleBox1}>The discount has been automatically deducted on your shopping items</Text>
      </View>
        </View>
        <View style ={{flexDirection: "row"}}>
        <Text style={styles.title4}>My Orders</Text>
        <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="#FF3B00"  style={styles.del} />
        <Text style={styles.title11}>Express Delivery</Text> 
      </View>
      <View style={styles.box2}>
        <View style ={{flexDirection: "row"}}>
           <View style={styles.kotak1}>
           <Image style={styles.Kimg}
               source={require("../../assets/images/oil.png")} />
          </View>
          <View style={styles.box3}>
            <Text style={styles.titleProd1}>Minyak Saji </Text>
              <View style ={{flexDirection: "row"}}>
                <Text style={styles.subTitleProd1}>RM 15.90 | 1 KG </Text>
                 <View style={styles.kotak2}>
                   <MaterialCommunityIcons name="trash-can-outline" size={20} color="#FF3B00" style={styles.trash}  />
                </View>
                
          </View>
         
          </View>
          <View style={styles.box4}>
              <View style ={{flexDirection: "row"}}>
              <Foundation name="minus-circle" size={30} color="#EFAA7C"style={styles.minus} />
              <Text style={styles.KBtitle6}>1</Text>
              <AntDesign name="pluscircleo" size={23} color="#FF3B00" style={styles.plus} />
              </View>
          </View>
        </View>
        <View style={styles.box6}>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.box7}>
        
               <Text style={styles.KBtitle7}>1</Text>
               
        </View>
        <Text style={styles.KBtitle8}>Review Address</Text>
        </View>
        </View>
      </View>
    </View>
  )
}

export default order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  box1: {
    height:70,
    width: 390,
    backgroundColor: "#F8EA9E",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    
  },
  titleBox1:{
    fontWeight: 'bold',
    fontSize: 12.5,
    marginLeft: 5,
    marginTop: 18,
    color: "#FF3B00"
   
  },
  titleProd1:{
    fontWeight: 'bold',
    fontSize: 15.5,
    marginLeft: 8,
    marginTop: 18,
    color: "#FF3B00"
   
  },
  subTitleProd1:{
    fontWeight: 'bold',
    fontSize: 15.5,
    marginLeft: 8,
    marginTop: 5,
    
   
  },
  info:{
    marginLeft: 10,
    marginTop: 18,
  },
  del:{
    marginLeft: 130,
    marginTop: 18,
  },
  title4: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 15,
  },
  title11: {
    fontSize: 15,
    color:"#FF3B00",
    marginLeft: 13,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  box2: {
    height:70,
    width: 390,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    borderColor: "#C3C1C0"
  },
  box4: {
    height:40,
    width: 100,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 50,
    borderColor: "#C3C1C0"
  },
  box6: {
    height:50,
    width: 400,
    backgroundColor: "#FF3B00",
    borderRadius: 10,
    marginTop: 430,
    marginRight: 5,
    
  },
  box7: {
    height:35,
    width: 35,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 8,
    marginLeft: 20,
    borderColor: "#FFFFFF"
  },
  kotak1: {
    height: 52,
    width: 50,
    backgroundColor: "#E6E9E5",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    
  },
  kotak2: {
    height: 30,
    width: 30,
    backgroundColor: "#E6E9E5",
    borderRadius: 15,
    
    marginLeft: 10,
    
  },
  Kimg:{
    height:50,
    width: 50,
    marginRight: 10,
  },
  box3:{

  },
  trash:{
    marginLeft: 5,
    marginTop: 5,
  },
  minus:{
    marginLeft: 15,
    marginTop: 5,
  },
  KBtitle6:{
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 8,
    paddingTop: 5,
  },
  plus:{
    marginLeft: 5,
    marginTop: 8,
  },
  KBtitle7:{
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 2,
    color: "#FFFFFF"
  },
  KBtitle8:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 80,
    paddingTop: 13,
    color: "#FFFFFF"
  },
})