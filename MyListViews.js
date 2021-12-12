
//List of data components
/**  use the FlatList or the SectionList
 * FlatList=> displays a scrolling list of changing but simillary structured data. Works well with a long list of data.
 * It also renders only the elements that are showing on the screen. It requires two props: 1:data 2:renderItem ==> 
 * data is the source of the info to be rendered. renderItem takes one item from the source and renders a formatted component.
 * 
 * 
 * 
*/

import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
});


const MyListViews = () => {
    return (
        <View style={styles.container}>
            <FlatList data={[
                { key: 'duke' },
                { key: 'lester' },
                { key: 'grace' },
                { key: 'jane' },
                { key: 'duke' },
                { key: 'lester' },
                { key: 'grace' },
                { key: 'jane' },
                { key: 'duke' },
                { key: 'lester' },
                { key: 'grace' },
                { key: 'jane' },
            ]} renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />

        </View>
    )
}

export default MyListViews
