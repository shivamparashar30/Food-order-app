import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS } from '../constants/theme'

const CategoryItem = ({category, selected}) => {
  return (
    <View style={{
        marginLeft:12, 
        padding:2,
        alignItems:'center',
        width:80,
        height:55,
        justifyContent:'center',
        borderRadius:15,
        borderWidth:0.5,
        borderColor:category.value ==selected ? COLORS.secondary :'transparent',
        shadowColor:SHADOWS.small
        }}>
            <Image source={{uri: category.imageUrl}}
            style={{width:35,height:35 }}
            />
            <Text style={{fontSize:12,
            fontFamily:'regular',
            fontWeight:'700'
            }}>{category.title}</Text>
      
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({})