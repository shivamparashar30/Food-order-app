import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants/theme';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Counter from '../components/Counter';

const FoodPage = ({route,navigation}) => {
    const item = route.params.item;
    const [isChecked, setIsChecked] = useState(false);
    const [additives, setAdditives] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [restaurant, setRestaurant] = useState(1);
    const [count, setCount] = useState(1);
    const [preference, setPreference] = useState('');
    // const {cartCount, setCartCount} = useContext(cartCountContext);

    console.log(additives);
    const handleAdditives = (newAdditives) =>{
        setAdditives((prevAdditives) =>{
            const exists = prevAdditives.some(
                (additive) => additive.id === newAdditives.id
            );

            if(exists){
                return prevAdditives.filter(
                    (additive) => additive.id !== newAdditives.id
                )
            } else{
                return [...prevAdditives,newAdditives]
            }
        })
    }
  return (
    <View style={{backgroundColor:COLORS.lightWhite, height:SIZES.height}}>
      <View>
        <Image source={{uri:item.imageUrl[0]}}
        style={{width:SIZES.width,
        height:SIZES.height/4,
        borderBottomRightRadius:30
        }}/>
        <TouchableOpacity onPress={()=>navigation.goBack()}
        style={styles.backBtn}
        >
            <Ionicons name='chevron-back-circle' size={30} 
             color={COLORS.black}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}
        style={styles.ShareBtn}
        >
            <MaterialCommunityIcons name='share-circle' size={30} 
             color={COLORS.black}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}
        style={{position:'absolute', bottom:15, right:0}}
        >
            <View style={styles.restBtn}>
                <Text style={styles.restText}>Open the store</Text>
            </View>
            
        </TouchableOpacity>


      </View>
      
      <View style={styles.container}>
        <View style={{
            flexDirection:'row',
            justifyContent:"space-between",
        }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={[styles.title,{color:COLORS.primary}]}>${(item.price +totalPrice) *count}</Text>

        </View>
        <Text style={styles.small}>{item.description}</Text>
        <FlatList
        data={item.foodTags}
        showsHorizontalScrollIndicator={false}
        // keyExtractor={(item)=>item}
        keyExtractor={(item, index) => index.toString()}

        style={{marginTop:10}}
        horizontal
        scrollEnabled
        renderItem={({item}) =>(
            <View style={styles.tags}>
                <Text style={{
                    paddingHorizontal:4,
                    color:COLORS.lightWhite
                }}>{item}</Text>
            </View>
        )}
        
        />

        <Text style={[styles.title, {marginBottom:10,marginTop:12}] }>
            Additives and Toppings
        </Text>
        <FlatList
        data={item.additives}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}

        style={{marginTop:0}}
        
        scrollEnabled={false}
        renderItem={({item}) =>(
            <View style={{flexDirection:'row',
            justifyContent:"space-between",
            marginBottom:10
            }}>
                <BouncyCheckbox
                size={20}
                unfillColor='#ffffff'
                fillColor={COLORS.primary}
                innerIconStyle={{borderWidth:1}}
                textStyle={styles.small}
                text={item.title}
                onPress={()=>{
                    handleAdditives(item);
                }}

                />
                <Text style={styles.small}>${item.price}</Text>
            </View>
        )}
        
        />

        <Text style={[styles.title, {marginBottom:10,marginTop:12}] }>
            Preferences
        </Text>
        
        <View style={styles.input}>
            <TextInput
            placeholder='Add specific instruction'
            value={preference}
            onChangeText={(value) => setPreference(value)}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={{flex:1}}
            />
        </View>

        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:10
        }}>
            <Text style={[styles.title, {marginBottom:10}]}>
                Quantity
            </Text>
            <Counter count={count} setCount={setCount}/>  
        </View>


      </View>
        <View style={{left:0, top:80}}>
        <View style={{flex:1, justifyContent:'flex-end'}}>
            <View style={styles.suspended}>
                <View style={styles.cart}>
                    <View style={styles.cartRow}>
                        <TouchableOpacity onPress={()=>{}}
                        style={styles.cartBtn}>
                            <AntDesign name="pluscircleo"
                            size={24}
                            color={COLORS.lightWhite}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={()=>navigation.navigate('order-page')}
                        style={{
                            backgroundColor:COLORS.primary,
                            paddingHorizontal:80,
                            borderRadius:30
                        }}>
                            <Text style={[styles.title,{color:COLORS.lightWhite,marginTop:3, alignItems:'center'}]}> Order </Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{}}
                        style={styles.cartBtn}>
                            <Text style={[styles.title,{color:COLORS.lightWhite,marginTop:3,marginHorizontal:13, alignItems:'center'}]}>{0}  </Text>
                            
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        </View>
    </View>
  )
}

export default FoodPage

const styles = StyleSheet.create({
    suspended:{
        position:'absolute',
        zIndex:999,
        bottom:1,
        width:'100%',
        alignItems:'center',

        
    },
    cart:{
        width:SIZES.width,
        height:60,
        justifyContent:'center',
        backgroundColor:COLORS.primary1,
        borderRadius:30,
        marginTop:30

    },
    cartRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:12
    },
    cartBtn:{
        width:40,
        height:40,
        borderRadius:99,
        justifyContent:'center',
        backgroundColor:COLORS.primary,
        alignItems:'center'
    },
    backBtn:{
        marginLeft:12,
        alignItems:'center',
        zindex:999,
        position:"absolute",
        top:SIZES.xxLarge
    },

    ShareBtn:{
        marginLeft:12,
        alignItems:'center',
        zindex:999,
        right:0,
        position:"absolute",
        top:SIZES.xxLarge+3
    },
    restBtn:{
        borderColor:COLORS.primary,
                borderWidth:1,
                borderRadius:10,
                padding:10,
                marginRight:10,
                backgroundColor:COLORS.primary
    },
    restText:{
        color:COLORS.white,
        fontFamily:'bold'
    },
    title:{
        fontSize:22,
        fontFamily:'medium',
        color:COLORS.black
    },
    container:{
        marginHorizontal:12,
        marginTop:3
    },
    small:{
        fontSize:13,
        fontFamily:'regular',
        color:COLORS.gray,
        textAlign:'justify',
        marginTop:8 

    },
    tags:{
        right:10,
        marginHorizontal:10,
        backgroundColor:COLORS.primary,
        borderRadius:8
    },
    input:{
        borderColor:COLORS.primary1,
        borderWidth:1,
        backgroundColor:COLORS.offwhite,
        height:50,
        borderRadius:12,
        paddingHorizontal:12,
        flexDirection:'row',
        alignItems:"center"
    },
})