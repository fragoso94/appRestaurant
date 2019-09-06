import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    
    return(
        <View style={style.backgroundStyle}>
            <Feather
                name="search"
                style={style.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={style.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing = {onTermSubmit}
            />
        </View>
    );
}

const style = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }

});

export default SearchBar;