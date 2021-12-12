// Text input is a core componet that allows users to enter text inputs.
/* 
it has onChangeText ==> Prop that takes in a function which will be called eachtime the text changes.
onSubmitEditing prop ==> that takes a function when a text is submitted.
*/

import React, { useState} from 'react';
import {Text, TextInput, View} from 'react-native';


const HandleTextInput = () => {
    const [text, setText] = useState("");
    return (
        <View style={{padding:10}}>
        <TextInput style={{height:40}}
        placeholder="Type here to translate"
        onChangeText={ (text) => setText(text) }
        defaultValue={text}

        />
        <Text style={{padding:10, fontSize:40}}>
        {text.split(' ').map((word) => word && ':fire').join(' ')}

        </Text>


        </View>
       
    );
}

export default HandleTextInput

