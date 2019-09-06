import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Card, ListItem, Icon, Button } from 'react-native-elements';

const CardView = ({result}) =>
{
    return(
        <View>
            <Card
                //title={result.name}
                image={{uri: result.image_url}}
            >
                <Text style={{marginBottom: 10}}>
                    {result.name}
                </Text>
                <Text>
                    {result.rating} Stars, {result.review_count} Reviews
                </Text>
                {/*<Button*/}
                {/*    icon={<Icon name='code' color='#ffffff' />}*/}
                {/*    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}*/}
                {/*    title='VIEW NOW' />*/}
            </Card>
        </View>
    );
}

const style = StyleSheet.create({

});

export default CardView;