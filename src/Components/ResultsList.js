import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from '../Components/ResultsDetail';
import CardView from "./CardView";

const ResultsList = ({title, results}) => {
    return (
        <View style={styles.container}>
            <Text style= {styles.title}>{title}</Text>
            <FlatList
                //can also use just the name of the prop when it´s true.
                //horizontal={true}
                horizontal
                data = {results}
                keyExtractor = {(result) => result.id}
                renderItem = {({item}) => {
                    //return <ResultsDetail result = {item} />;
                    return <CardView result = {item} />;
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
      marginBottom: 10,
        marginRight: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default ResultsList;