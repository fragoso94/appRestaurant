import React, {useState} from 'react';
import {View, Text, StyleSheet, ToastAndroid, ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === {'$' || '$$' || '$$$'}
        return results.filter(result => {
            return result.price === price;
        });  
    };
    
    return(
        <>
        {/*<View style={styles.container}>*/}
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.textStyle}>{errorMessage}</Text> : null}
            {/*<Text style = {styles.textStyle}>We have found: {results.length} results</Text>*/}
            <ScrollView>
            <ResultsList
                // navigation={navigation}
                results = {filterResultsByPrice('$')}
                title="Cost Effective"
            />
            <ResultsList
                // navigation={navigation}
                results = {filterResultsByPrice('$$')}
                title="Bit Pricer"
            />
            <ResultsList
                // navigation={navigation}
                results = {filterResultsByPrice('$$$')}
                title="Big Spender"
            />
            </ScrollView>
        {/*</View>*/}
        </>
    );
}

const styles = StyleSheet.create({
    container:{
      //marginBottom: 90
        //flex: 1
    },
    textStyle: {
        marginLeft: 15,
        fontStyle: "italic"
    }
});

export default SearchScreen;