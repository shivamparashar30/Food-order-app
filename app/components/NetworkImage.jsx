import { StyleSheet, Image } from 'react-native'
import React from 'react'

const NetworkImage = ({ data, width, height, mode, radius }) => {
  return (
    <Image
      source={{ uri: data }}
      style={styles.image(width, height, mode, radius)} // Pass mode and radius here
    />
  )
}

export default NetworkImage

const styles = StyleSheet.create({
  image: (width, height, mode, radius) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: mode,
    // Remove the second borderRadius declaration here
  }),
});
