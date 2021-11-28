import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ColorCombination from '../components/ColorCombination';

import { Text, ThemedScrollView, View } from '../components/Themed';
import { ColorCombinationModel, SingleColorModel } from '../models/ColorModels';
import { FirstTabParamList } from '../types';

export default function SearchColorsScreen({ navigation }: NativeStackScreenProps<FirstTabParamList>) {
    const combinationWidth = Dimensions.get('window').width;
    const combinations = [{SingleColorId: 0, rgb: "tomato"}] as SingleColorModel[]
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
                <TouchableOpacity onPress={() => navigation.navigate("ColorCombination")}>
                    <Text style={styles.colorInfoText}>Sachen</Text>
                </TouchableOpacity>
            </View>
        </ThemedScrollView>
    );
}


