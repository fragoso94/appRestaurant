import React from 'react';
import {StyleSheet} from 'react-native';
import {Rating} from 'react-native-elements';

const reviews = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'];

const Raiting = ({ranking})=>
{
    return (
        <Rating
            imageSize={1}
            type="heart"
            readonly
            ratingCount={5}
            showRating
            count={ranking}
            defaultRating={ranking}
            //reviews={reviews}
            ratingBackgroundColor={style.backColor}
            //startingValue={ranking}
            //onFinishRating={ranking}
            //style={{ styles.rating }}
        />
    );
}

const style = StyleSheet.create({
    backColor:{
        color: 'green'
    }
})

export default Rating;