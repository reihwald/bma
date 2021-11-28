import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ColorCombination from '../components/ColorCombination';

import { Text, ThemedScrollView, View } from '../components/Themed';
import { ColorCombinationModel } from '../models/ColorModels';
import { FirstTabParamList } from '../types';


export default function SearchCombinationsScreen({ navigation }: NativeStackScreenProps<FirstTabParamList>) {
    const combinationWidth = Dimensions.get('window').width;
    const combinations = [{colorCombinationId: 0, rgbFirst: "rgb(255, 99, 71)", rgbSecond: "green"}, 
        {colorCombinationId: 0, rgbFirst: "blue", rgbSecond: "green", rgbThird: "brown"},
        {colorCombinationId: 0, rgbFirst: "blue", rgbSecond: "coral", rgbThird: "grey", rgbFourth: "orange"},
        {colorCombinationId: 0, rgbFirst: "black", rgbSecond: "beige"}] as ColorCombinationModel[]

    const exampleText = "Rot eine eine rote Farbe und steht für das das das und das. Geeignete Farben sind farbe farbe und farbe"

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
                <Text style={styles.title}>Rot</Text>
                <Text style={styles.colorInfoText}>{exampleText}</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Text style={styles.colorInfoText}>Eine der folgenden Farbkombinationen auswählen um ein Outfit mit den vorhandenen Farben vorgeschlagen zu bekommen:</Text>
            </View>
            <View style={styles.container}>
                {combinations.map((combination, i) => {
                    return <TouchableOpacity key={i} onPress={() => navigation.navigate("ColorVisualisation", { combination: combination })}>
                            <ColorCombination colorCombination={combination}/>
                        </TouchableOpacity>;
                })}
            </View>
        </ThemedScrollView>
    );
}


