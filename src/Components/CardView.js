import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Card, ListItem, Icon, Button, Rating } from 'react-native-elements';
import Raiting from './Raiting'

const CardView = ({result}) =>
{
    return(
        <View>
            <Card
                title={result.name}
                image={{uri: result.image_url}}
            >
                <Text style={{marginBottom: 5}}>
                    {result.alias}
                </Text>
                <Text>
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
                    //count={result.rating}
                    //defaultRating={0}
                />
            </Card>
        </View>
    );
}

const style = StyleSheet.create({

});

export default CardView;