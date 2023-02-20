import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { CarsData } from '../../utils/cars';
import CardItem from '../CardItem';
const CarList = () => {
    return (
        <View style={{ width: '100%' }}>
            <FlatList
                data={CarsData}
                renderItem={({ item }) => (
                    <CardItem
                        name={item.name}
                        image={item.image}
                        tagline={item.tagline}
                        taglineCTA={item.taglineCTA}
                        key={item.name}
                    />
                )}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};
export default CarList;
