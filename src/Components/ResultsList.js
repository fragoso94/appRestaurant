import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from '../Components/ResultsDetail';
import {withNavigation} from 'react-navigation'
import CardView from "./CardView";

const ResultsList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style= {styles.title}>{title}</Text>
            <FlatList
                //can also use just the name of the prop when it´s true.
                //horizontal={true}
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {results}
                keyExtractor = {(result) => result.id}
                renderItem = {({item}) => {
                    //return <ResultsDetail result = {item} />;
                    return(
                        <TouchableOpacity onPress={ ()=> navigation.navigate('Detail', {id: item.id})}>
                            <CardView result = {item} />
                        </TouchableOpacity>
                    )
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
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default withNavigation(ResultsList);