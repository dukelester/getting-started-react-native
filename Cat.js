import React from 'react';
import {View, Text} from 'react-native';
import FullName from './FullName';

function Cat() {
    const catName = 'Maruuu';
    const area = (radius)=> {
        return radius * radius * 3.142;
    }
    let answer =area(21);

    return (
       <View >
           <Text >This is my Cat! And its called {catName}</Text>
           <Text >The area of a circle  {answer}</Text>
            <FullName/>
       </View>
    )
}

export default Cat
