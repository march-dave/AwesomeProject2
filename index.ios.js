import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    View,
    Text,

    TextInput,
    ScrollView,

    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({

    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        // display: flex,
        alignItems: 'center',
        justifyContent: 'center'
    },

    littleRed: {
        color: 'red',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class HelloWorldApp extends Component {

    constructor(props) {
        super(props);
        this.state = { showText: true };

        setInterval(() => {

            this.setState({ showText: !this.state.showText })

        }, 1000)

    }

    render() {

        // let pic = {
        //   uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Male_gorilla_in_SF_zoo.jpg/440px-Male_gorilla_in_SF_zoo.jpg'
        // };

        return ( <
            View style = {
                { backgroundColor: 'powderblue' } } >
            <
            Text style = { styles.bigBlue } > Hello { this.state.showText ? this.props.name : "who?" } < /Text> <
            Text style = { styles.littleRed } > Hello { this.state.showText ? this.props.name : "who?" } < /Text> <
            /View>
        );
    }
}

class HelloEveryone extends Component {

    render() {
        return ( <
            View style = {
                { alignItems: 'center' } } >

            <
            HelloWorldApp name = "Dave" / >
            <
            HelloWorldApp name = "Art" / >
            <
            HelloWorldApp name = "Kate" / >

            <
            /View>

        );
    }

}


AppRegistry.registerComponent('AwesomeProject2', () => HelloEveryone);





























// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
// <Image source={pic} style={{width:100, height:100 }} />
// <Text>Hello {this.props.name} !</Text>
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class AwesomeProject2 extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Hey, this is Dave!!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//           Hello React Native!!!!
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);