import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from "../api/yelp";

const ResultShowScreen = ({navigation})=>
{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result); //imprimiendo el data de result
    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        console.log(response.data);
        setResult(response.data);
    }
    useEffect( ()=>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photo}
                keyExtractor={(photo)=> photo}
                renderItem={(item)=>{

                }}

            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ResultShowScreen;