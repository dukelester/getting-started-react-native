import React, { useState }  from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';


const getFullName = (firstName, middleName,lastName) =>{
    return firstName + ' ' + middleName + ' ' + lastName;
}

const Bio = (props) => {
    const age = 24;
    return (
        <View>
        <Text style={{color:'green'}}>I am {props.age} years old.</Text>
        </View>
    );
}

const AreaOfCircles = (props) =>{
    const radius = 12;
    let area = props.radius * props.radius * 3.142;

    return(
        <View>
            <Text style={{color:'purple', fontWeight:18}} > The area of a circle with radius {props.radius} is {area}.
            </Text>
        </View>
    )

}

const  FullName = () => { {/* parent component */}

const [userName1, setUserName1] = useState("");
console.log(userName1)

    return (
        <View>
        <Text>
            Hello , I am {getFullName("Duke", "Nyasani", "Nyamongo")}! 
            I am a software dev
        </Text>

        <Image source={{url:"https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"}}
        style={{width:200, height:200}}/>

        <TextInput style={{height: 40,
        borderColor:'red',borderWidth:2}} defaultValue="My Name"/>
        <Button type="button" style={{}}onPress={() => {
            setUserName1('duke lester ')
        }}

        name="My Name"/>

 
        <Bio age="25"/>
        <Bio age="35"/>
        <Bio age="55"/>
        <Bio age="45"/>
        {/* child component */}

        <AreaOfCircles radius="20"/>
        <AreaOfCircles radius="30"/>
        <AreaOfCircles radius="40"/>
        <AreaOfCircles radius="50"/>

        </View>
    );
}

export default FullName
