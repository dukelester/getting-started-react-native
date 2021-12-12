/***
 * Style:=> the apps are styled using JS.the components accept a prop called style = {{}}
 * the style names are camelCasing and are declared just like in CSS. eg backgroundColor,
 * the style prop is a Js object. 
 * One can also pass an array of styles and use this to inherit the styles.
 * As the component grow bigger it is good to use the StyleSheet.create to define several styles 
 * in one place.
 */

import React, {useState} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native';
//dealing with StyleSheet and styles examples.

export const OtherStyles = (props) => {
    let age = 23;
    const [color, setColor] = useState(" hello");
    console.log(color);
    const handleChange = (event) => {
        setColor(event.target.value);
        console.log(color);
    }

    return (
        <View style={myStyles.body}>
        <Text style={myStyles.myWords}> Hello duke Lester this is a child component </Text>
          <Text styles={myStyles.myWords}>Showing results for hello No results found for hekllovbkl
            Adele - Hello
            Adele - Hello - YouTube https://www.youtube.com › watch
            Lyrics Hello, it's me <Text style={myStyles.myWords}>Showing results for hello
            No results found for hekllovbkl
            Adele - Hello
            Adele - Hello - YouTube
            https://www.youtube.com › watch
            Lyrics
            Hello, it's me
            I was wondering if after all these years you'd like to meet
            To go over everything
            They say that time's supposed to heal ya</Text>XThey say that time's supposed to heal ya</Text>  
             <Text style={myStyles.numbers}> My name is {props.name} and I am just {age} years old</Text>       
       <Text style={myStyles.myWords} >A Button</Text>
        <Button type="submit" style={myStyles.button} defaultValue={props.name} onChangeText={handleChange}>Click Here</Button>
        </View>
    )
}

const myStyles = StyleSheet.create({
    body: { backgroundColor:'rgb(234, 224, 238)', fontSize:24, fontWeight:'bold',
     alignItems: 'center', justifyContent: 'center', flex: 'center', display: 'flex',
    padding:[0,25,0,25]},
    myWords:{
        color:'black',fontWeight:'bold'
    },
    numbers:{color:'green',fontWeight:'bold', fontSize:'45px'},
    button:{color:'red',fontWeight:'bold', padding:10, margin:10, height:40,width:40}

})

const MyStyles = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.bigBlue}>This is a blue text Mr. Duke Lester</Text>
        <Text style={styles.purple}>This is purple however!!</Text>
        <Text style={styles.green}>This is a Green text Pal.</Text>
        <Text style={[styles.green, styles.purple]}>This is a mixture, of Green and Purple </Text>

        <OtherStyles name="dukelester"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {color:'red', backgroundColor:'white', flex: 1,
    alignItems: 'center', margin:50, padding:50},
    bigBlue:{color:'blue', fontSize:'30px', fontWeight:'bold'},
    purple:{color:'purple', fontSize:'30px', fontWeight:'bold'},
    green:{color:'green', fontSize:'30px', fontWeight:'bold'},

})


export default MyStyles

