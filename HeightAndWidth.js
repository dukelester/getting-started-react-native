/** The size of the component on the screen :
 * The height and width determine the size of a component in a screen.
 * Fixed dimensions: the genaral way to set the dimensions of a component. To use the dixed height and width
 * dimesions are unitless
 * 
 * Example
 * 
 * Flex dimensions: use flex is a style which makes a component to expand and shrink dynamically.
 * normally you will use flex:1 ==> The space is shared evenly with the componets under the parent.
 * the larger the flex given, the larger the shared space.
 * 
 * Percentage Dimension : 
 * One can use the percentage in place of the flex to issue space to the components...
*/


import React, { useState } from 'react';
import {View, Text, TextInput } from 'react-native';

export const MyComponent = (props) => {
    const [fullName, setFullName] = useState(props.fullName);
    console.log(fullName.toUpperCase());
    
    return (
        <View >
        <Text style={{fontSize:24, fontColor: 'orangered', fontWeight: 'bold', margin:[14, 0, 14,0]}}></Text>
        <TextInput style={{padding:10, margin:10, borderWidth:2, borderColor: 'orangered'}}
        defaultValue={props.fullName} onChangeText={ (e) => {setFullName('Lester')}} 
        onSubmitEditing={() => {setFullName('Dlester')}}/>
          
        </View>
    )
}
// using flex

export const FlexDimension = () => {

    return (
        <View style={{flex: 1}}>
        <View style={{flex: 2, backgroundColor:'magenta'}}/>
        <Text>My View 1</Text>
        <View style={{flex:3, backgroundColor:'steelblue'}}/>
        <View style={{flex:4, backgroundColor:'skyblue'}}/>
            
        </View>
    )
}

//using percentage.

export const PercentageDimension = () => {
    return (
        <View style={{height: '100% '}}>
        <View style={{height:'20%', backgroundColor:'magenta'}}/>
        <Text>My View 1</Text>
        <View style={{height:'30%', backgroundColor:'steelblue'}}/>
        <View style={{height:'40%', backgroundColor:'skyblue'}}/>
            
        </View>
    )
}



const HeightAndWidth = () => {

    return (
        <View style={{flex: 1,backgroundColor:'gray', height:300, width:400}}>
        <View style={{width: 150, height:150, backgroundColor: 'powderblue'}}/>
        <View style={{width: 300, height: 300, backgroundColor: 'red'}}/>
        <View style={{width:180, height:180, backgroundColor: 'green'}}/>
        <MyComponent fullName="duke Lester "/>
        <View style={{width: 300, height: 300, backgroundColor: 'purple'}}/>
        <View style={{width:190, height:190, backgroundColor: 'yellow'}}/>
        <FlexDimension/>    
        </View>
    )
}

export default HeightAndWidth
