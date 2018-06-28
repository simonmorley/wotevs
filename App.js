import React, { Component } from 'react';
import { Root, Tabs } from './config/router';
import { AppRegistry, Text, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    // return <Text> Simon </Text>
    return <Root />;
  }
}

export default App;// import React from 'react';

// import { FlatList, ActivityIndicator, Text, View, NativeModules } from 'react-native';
// import { createStackNavigator } from 'react-navigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

// export default createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
// });

// import { TabNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

// import MapView from './MapView.js';
//

// var CalendarManager = NativeModules.CalendarManager;
// console.dir(NativeModules.CalendarManager);  // ← add this line

// export default class FetchExample extends React.Component {

//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }



//   render(){

//     if(this.state.isLoading){
//       // CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     var date = new Date().getTime();

//     CalendarManager.addEvent(
//       'Birthday Party',
//       '4 Privet Drive, Surrey',
//       date,
//       function(o) {
//         console.log(123123, o);
//       });

//     var region = {
//       latitude: 37.48,
//       longitude: -122.16,
//       latitudeDelta: 0.1,
//       longitudeDelta: 0.1,
//     };

//     return (
//       <Text style={{padding: 100}}>Simon</Text>
//       // <MapView
//       //   region={region}
//       //   zoomEnabled={false}
//       //   style={{ flex: 1 }}
//       // />
//     );

//   }
// }

