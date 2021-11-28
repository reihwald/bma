import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ColorCombinationBox } from '../components/ColorBoxes';

import { Text, ThemedScrollView, View } from '../components/Themed';
import { ColorCombinationModel } from '../models/ColorModels';
import { FirstTabParamList } from '../types';


export default function SearchCombinationsScreen({ navigation }: NativeStackScreenProps<FirstTabParamList>) {
    const route = useRoute<RouteProp<FirstTabParamList, "ColorCombination">>()
    const combinationWidth = Dimensions.get('window').width;
    const combinations = [{colorCombinationId: 0, rgbFirst: route.params.color.rgb, rgbSecond: "green"}, 
        {colorCombinationId: 0, rgbFirst: route.params.color.rgb, rgbSecond: "green", rgbThird: "brown"},
        {colorCombinationId: 0, rgbFirst: route.params.color.rgb, rgbSecond: "coral", rgbThird: "grey", rgbFourth: "orange"},
        {colorCombinationId: 0, rgbFirst: route.params.color.rgb, rgbSecond: "beige"}] as ColorCombinationModel[]

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
        },
        separator: {
            marginVertical: 10,
            height: 1,
            width: "100%",
        },
        infoContainer: {
            paddingTop: combinationWidth / 12,
            paddingLeft: combinationWidth / 12,
            paddingRight: combinationWidth / 12
        },
        colorInfoText: {
            fontSize: 17,
            lineHeight: 24,
        }
    })

    return (
        <ThemedScrollView>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{route.params.color.name}</Text>
                <Text style={styles.colorInfoText}>{route.params.color.description}</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Text style={styles.colorInfoText}>Eine der folgenden Farbkombinationen auswählen um ein Outfit mit den vorhandenen Farben vorgeschlagen zu bekommen:</Text>
            </View>
            <View style={styles.container}>
                {combinations.map((combination, i) => {
                    return <TouchableOpacity key={i} onPress={() => navigation.navigate("ColorVisualisation", { combination: combination })}>
                            <ColorCombinationBox colorCombination={combination}/>
                        </TouchableOpacity>;
                })}
            </View>
        </ThemedScrollView>
    );
}


