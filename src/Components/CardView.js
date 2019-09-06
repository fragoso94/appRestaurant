import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card, ListItem, Icon, Button, Rating } from 'react-native-elements';

const CardView = ({result}) =>
{
    return(
        <View style={style.container}>
            <Card
                //title={result.alias}
                image={{uri: result.image_url}}
                containerStyle={style.cardStyle}
                imageProps={style.imageStyle}
            >
                <Text style={style.textStyle}>
                    {result.name}
                </Text>
                <Text style={{color: "red", marginBottom:5}}>
                    {result.rating} Stars, {result.review_count} Reviews
                </Text>
                <Rating
                    type="star"
                    imageSize={25}
                    showRating ={false}
                    //ratingCount={5}
                    fractions={1}
                    startingValue={result.rating}
                    ratingTextColor = 'red'
                />
            </Card>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        width: 275,
        height: 300,
    },
    textStyle:{
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 15
    },
    cardStyle:{
        borderRadius: 10
    },
    imageStyle:{
        //borderRadius: 10
        borderTopLeftRadius: 10,
        borderTopRightRadius : 10
    }
});

export default CardView;