//Generic scrolling container that can contain multiple components and views.
//The scrollable Items can be heterogeneous and uyou can scroll both vertically and horizontally.(setting the horizontal property.)
//Examples.

//Props:=> pagingEnabled
//ViewerPager component used to allow horizontal scroll

import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
    url:'http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png',
    width:64,
    height:64
};


const ScrollView2 = () => {
    return (
        <ScrollView>
        <Text style={{fontSize:96}}>Scroll Here</Text>
        <Image source={logo}/>
        <Image source={logo}/>
        <Image source={logo}/>
        <Image source={logo}/>
        <Text style={{fontSize:96}}>Hello there</Text>
        {/* <Image source={logo}/>
        <Image source={logo}/>
        <Image source={logo}/>
        <Image source={logo}/>
        <Text style={{fontSize:96}}>This is Lester </Text>
        <Text style={{fontSize:96}}>Scroll Here</Text>
        <Image source={logo}/>
        <Image source={logo}/>
        <Image source={logo}/>
        <Image source={logo}/>
        <Text style={{fontSize:96}}>Scrolling Down </Text>
        <Image source={logo}/>
        <Image source={logo}/> */}
        <Image source={logo}/>
        <Image source={logo}/>
        <Text style={{fontSize:96}}>This is the End </Text>
     </ScrollView>
    )
}

export default ScrollView
