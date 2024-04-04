import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import uidata from '../constants/uidata'
import FoodComponent from './FoodComponent'
import { useNavigation } from '@react-navigation/native'
const NewFoodList = () => {
  const navigation = useNavigation();
  // const renderSeparator = () => (
  //   <View
  //     style={{
  //       width: 10, // Adjust the spacing as needed
  //     }}
  //   />
  // );

  const renderItem = ({ item }) => (
    <FoodComponent item={item} onPress={() => navigation.navigate('food-nav', item)} />
  );

  return (
    <View style={{ marginLeft: 15 }}>
      <FlatList
        data={uidata.foods}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, rowGap:10 }}
        scrollEnabled
        renderItem={renderItem}
        // ItemSeparatorComponent={renderSeparator} // Add spacing between items
        // keyExtractor={(item, index) => index.toString()} // Add a key extractor
      />
    </View>
  )
}

export default NewFoodList

const styles = StyleSheet.create({})
