import { StyleSheet, Image} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.titleBox1}>Get 10% off on Groceries Plus T&C Apply</Text>
          <Text style={styles.subtitleBox1}>Spend TK3000 Get 5% Discount</Text>
        </View>
        <Text style={styles.title4}>All Categories</Text>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.box2}>
          <View style ={{flexDirection: "row"}}>
            <View style={styles.box3}>
            <Text style={styles.title1}>Fruits & Vegetables</Text>
            
            </View>
            <View style={styles.box3}>
            <Image style={styles.Timg}
            
               source={require("../../assets/images/img1.png")} />
               </View>
          </View>
        </View>
        <View style={styles.box2}>
          <View style ={{flexDirection: "row"}}>
            <View style={styles.box3}>
            <Text style={styles.title1}>Fruits & Vegetables</Text>
            
            </View>
            <View style={styles.box3}>
            <Image style={styles.Timg}
            
               source={require("../../assets/images/img1.png")} />
               </View>
          </View>
        </View>
        </View>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.box2}>
          <View style ={{flexDirection: "row"}}>
            <View style={styles.box3}>
            <Text style={styles.title1}>Fruits & Vegetables</Text>
            
            </View>
            <View style={styles.box3}>
            <Image style={styles.Timg}
            
               source={require("../../assets/images/img1.png")} />
               </View>
          </View>
        </View>
        <View style={styles.box2}>
          <View style ={{flexDirection: "row"}}>
            <View style={styles.box3}>
            <Text style={styles.title1}>Fruits & Vegetables</Text>
            
            </View>
            <View style={styles.box3}>
            <Image style={styles.Timg}
            
               source={require("../../assets/images/img1.png")} />
               </View>
          </View>
        </View>
        </View>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.box2}>
          <View style ={{flexDirection: "row"}}>
            <View style={styles.box3}>
            <Text style={styles.title1}>Fruits & Vegetables</Text>
            
            </View>
            <View style={styles.box3}>
            <Image style={styles.Timg}
            
               source={require("../../assets/images/img1.png")} />
               </View>
          </View>
        </View>
        <View style={styles.box2}>
          <View style ={{flexDirection: "row"}}>
            <View style={styles.box3}>
            <Text style={styles.title1}>Fruits & Vegetables</Text>
            
            </View>
            <View style={styles.box3}>
            <Image style={styles.Timg}
            
               source={require("../../assets/images/img1.png")} />
               </View>
          </View>
        </View>
        </View>
        <View style ={{flexDirection: "row"}}>
        <View style={styles.box2}>
          <View style ={{flexDirection: "row"}}>
            <View style={styles.box3}>
            <Text style={styles.title1}>Fruits & Vegetables</Text>
            
            </View>
            <View style={styles.box3}>
            <Image style={styles.Timg}
            
               source={require("../../assets/images/img1.png")} />
               </View>
          </View>
        </View>
        <View style={styles.box2}>
          <View style ={{flexDirection: "row"}}>
            <View style={styles.box3}>
            <Text style={styles.title1}>Fruits & Vegetables</Text>
            
            </View>
            <View style={styles.box3}>
            <Image style={styles.Timg}
            
               source={require("../../assets/images/img1.png")} />
               </View>
          </View>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  box1: {
    height:100,
    width: 390,
    backgroundColor: "#F8EA9E",
    borderRadius: 20,
    marginTop: 20,
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
    marginTop: 8,
  },
  title4: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 15,
  },
  box2: {
    height: 110,
    width: 180,
    backgroundColor: "#FFDAC8",
    borderRadius: 2,
    marginTop: 20,
    marginLeft: 20,
    
  },
  box3:{
    backgroundColor:"#FFDAC8"
  },
  title1: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 5,
    paddingTop: 34,
    backgroundColor:"#FFDAC8"
  },
  Timg:{
    height:70,
    width: 70,
    marginLeft: 3,
    marginTop: 20,
    backgroundColor:"#FFDAC8"
  },
});
