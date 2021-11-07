import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import ColorCombination from '../components/ColorCombination';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, ThemedScrollView, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { ColorCombinationModel, SingleColorModel } from '../models/ColorModels';


export default function SearchColorsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
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
                <Text style={styles.colorInfoText}>Young aloha</Text>
            </View>
        </ThemedScrollView>
    );
}


