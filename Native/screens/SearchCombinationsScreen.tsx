import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ColorCombinationBox } from '../components/ColorBoxes';

import { Text, ThemedScrollView, View } from '../components/Themed';
import { ColorCombinationModel, ColorCombinationRequestModel } from '../models/ColorModels';
import { FirstTabParamList } from '../types';


export default function SearchCombinationsScreen({ navigation }: NativeStackScreenProps<FirstTabParamList>) {
    const route = useRoute<RouteProp<FirstTabParamList, "ColorCombination">>()
    const combinationWidth = Dimensions.get('window').width;
    const [combinationState, setCombinationState] = useState([] as ColorCombinationModel[])

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        fetch(`https://reihwald-bma-test.herokuapp.com/farbkombi/${route.params.color.IDFarbe}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        })
            .then(res => res.json())
            .then(responseParamerter => {
                const a = responseParamerter
                let newCombinations = [] as ColorCombinationModel[]

                a.map((colorCombination: ColorCombinationRequestModel) => {
                    const newColor = {
                        rgbFirst: route.params.colors.find(c => c.IDFarbe == colorCombination.FKFarbe1)?.RGB,
                        rgbSecond: route.params.colors.find(c => c.IDFarbe == colorCombination.FKFarbe2)?.RGB,
                    } as ColorCombinationModel
                    newCombinations.push(newColor)
                })
                if (newCombinations.length > 4){
                    
                    const firstRandomArrayIndex = getRandomInt(newCombinations.length-1)
                    let secondRandomArrayIndex = getRandomInt(newCombinations.length-1)
                    if (secondRandomArrayIndex == firstRandomArrayIndex)
                    {
                        if(secondRandomArrayIndex<newCombinations.length-1){
                            secondRandomArrayIndex += 1
                        } else {
                            secondRandomArrayIndex -= 1
                        }
                    }
                    const differentColor = newCombinations[secondRandomArrayIndex].rgbFirst == route.params.color.RGB ? 
                        newCombinations[secondRandomArrayIndex].rgbSecond : newCombinations[secondRandomArrayIndex].rgbFirst
                    newCombinations[firstRandomArrayIndex].rgbThird = differentColor
                    newCombinations.splice(secondRandomArrayIndex, 1)
                }
                setCombinationState(newCombinations)

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
                <Text style={styles.title}>{route.params.color.Name}</Text>
                <Text style={styles.colorInfoText}>{route.params.color.Beschreibung}</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Text style={styles.colorInfoText}>Eine der folgenden Farbkombinationen auswählen um ein Outfit mit den vorhandenen Farben vorgeschlagen zu bekommen:</Text>
            </View>
            <View style={styles.container}>
                {combinationState.map((combination, i) => {
                    return <TouchableOpacity key={i} onPress={() => navigation.navigate("ColorVisualisation", { combination: combination })}>
                            <ColorCombinationBox colorCombination={combination}/>
                        </TouchableOpacity>;
                })}
            </View>
        </ThemedScrollView>
    );
}


