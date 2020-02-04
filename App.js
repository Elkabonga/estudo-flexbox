import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  norte: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#bdf9ed',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  centro: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#f2f9bd',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15
  },
  sul: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#bdf9c4',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  circulo: {
    width: 100,
    height: 100,
    backgroundColor: '#f47f61',
    borderRadius: 50,
  }
})

const Circulo = props => <View style={styles.circulo}></View>

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.norte}>
        <Circulo />
        <Circulo />
      </View>
      <View style={styles.centro}>
        <Circulo />
        <Circulo />
      </View>
      <View style={styles.sul}>
        <Circulo />
        <Circulo />
      </View>
    </View>
  )
}