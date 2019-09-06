import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ListItem, Icon, Button } from 'react-native-elements';

const CardView = () =>
{
    return(
        <View>
            <Card
                title='HELLO WORLD'
                //image={require('../images/pic2.jpg')}
            >
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card>
        </View>
    );
}

const style = StyleSheet.create({

});

export default CardView;