import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";
import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";
import ChoicesList from "../components/ChoicesList";
import Heading from "../components/Heading";
import NearByRestuarants from "../components/NearByRestuarants";
import Divider from "../components/Divider";
import NewFoodList from "../components/NewFoodList";
import FastestNearYou from "../components/FastestNearYou";

const Home = () => {
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [selectedSection,setSelectedSection] = useState(null)
  const [selectedValue,setSelectedValue] = useState(null)
  const [selectedChoice,setSelectedChoice] = useState(null)
//  console.log(selectedChoice);
  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>
          <HomeHeader/>

          <ScrollView
          showsVerticalScrollIndicator={false}
           style={{borderBottomEndRadius:30, borderBottomStartRadius:30}}>
            <CategoryList
            setSelectedCategory={setSelectedCategory}
            setSelectedSection={setSelectedSection}
            setSelectedValue={setSelectedValue}
            />

            <ChoicesList
            setSelectedChoice={setSelectedChoice}
            setSelectedSection={setSelectedSection}
            />
            <View>
              <Heading heading={'Nearby Restuarents'} onPress={()=>{}}/>
              <NearByRestuarants/>
              <Divider/>
              <Heading heading={'Try Something New'} onPress={()=>{}}/>

              <NewFoodList/>
              <Divider/>
              <Heading heading={'Fastest Near You'} onPress={()=>{}}/>

              <FastestNearYou/>

            </View>
          </ScrollView>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
