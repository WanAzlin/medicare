import { StyleSheet,  ScrollView  } from 'react-native';


import { Text, View,} from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={{flexDirection: 'row'}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
           <Text>Am vertical scroll </Text>
           <Text>Am vertical scroll </Text>
           <Text>Am vertical scroll </Text>
          <Text>Am vertical scroll </Text>
          
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
