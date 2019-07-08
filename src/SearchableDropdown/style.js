import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flatListStyle: {
    maxHeight: 300,
    position: 'absolute',
    top: 100,
    left: 10,
    zIndex: 9999,
    elevation: 5,
    borderWidth: 0.3
  },
  itemWrapper: {
    backgroundColor: 'white',
    padding: 10,
    height: 50
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInputStyle: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  titleStyle: {
    color: '#7b8189',
    fontSize: 18
  },
  boxWrapper: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#9faab7',
    borderRadius: 5,
    justifyContent: 'center'
  }
});

export default styles;
