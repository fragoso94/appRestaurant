import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from '../Components/ResultsDetail';

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style= {styles.title}>{title}</Text>
            <FlatList
                //can also use just the name of the prop when it´s true.
                //horizontal={true}
                horizontal
                data = {results}
                keyExtractor = {(result) => result.id}
                renderItem = {({item}) => {
                    return <ResultsDetail result = {item} />;
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default ResultsList;