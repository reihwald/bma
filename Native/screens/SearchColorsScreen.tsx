import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ColorBox, ColorCombinationBox } from '../components/ColorBoxes';

import { Text, ThemedScrollView, View } from '../components/Themed';
import { ColorCombinationModel, SingleColorModel } from '../models/ColorModels';
import { FirstTabParamList } from '../types';

export default function SearchColorsScreen({ navigation }: NativeStackScreenProps<FirstTabParamList>) {
    const combinationWidth = Dimensions.get('window').width;
    const [colorState, setColorState] = useState([] as SingleColorModel[])
    const exampleText = "Eine Farbe auswählen um mit der gewählten Farbe eine Farbkombination zu generieren"
    
    useEffect(() => {
        fetch("https://reihwald-bma-test.herokuapp.com/colours", {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        })
            .then(res => res.json())
            .then(responseParamerter => {
                const a = responseParamerter
                a.map((color: SingleColorModel) => {
                    const newColor = {
                        IDFarbe: color.IDFarbe,
                        Beschreibung: color.Beschreibung,
                        Name: color.Name,
                        RGB: color.RGB
                    } as SingleColorModel
                    console.log(newColor)
                    setColorState(colors => [newColor, ...colors])
                })

            })
    }, [])

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
                <Text style={styles.title}>Farbe auswählen</Text>
                <Text style={styles.colorInfoText}>{exampleText}</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            </View>
            <View style={styles.container}>
                {colorState.map((color, i) => {
                    return <TouchableOpacity key={i} onPress={() => navigation.navigate("ColorCombination", {color: color, colors: colorState})}>
                            <ColorBox color={color}/>
                        </TouchableOpacity>;
                })}
            </View>
        </ThemedScrollView>
    );
}


