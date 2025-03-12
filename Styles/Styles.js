import { StyleSheet } from "react-native";

export const containerStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  mapView: {
    flex: 1,
  },
  inputField: {
    margin: 5,
    backgroundColor: 'lavenderblush',
  },
  ratingWrapper: {
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    justifyContent: 'space-evenly',
    backgroundColor: 'darkgray',
  },
  submitButton: {
    marginLeft: 20,
    marginRight: 20,
  },
  addButton: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  card: {
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
