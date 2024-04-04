
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

const Counter = ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <AntDesign
        name="minuscircleo"
        size={32}
        color={COLORS.primary}
        onPress={decrement}
      />

      <Text
        style={{
          fontFamily: 'medium',
          fontSize: 15,
          marginTop: 5,
          paddingHorizontal: 10, // Added padding for space between icons and text
        }}
      >
        {count}
      </Text>

      <AntDesign
        name="pluscircleo"
        size={32}
        color={COLORS.primary}
        onPress={increment}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
