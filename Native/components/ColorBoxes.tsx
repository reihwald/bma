import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { ColorCombinationModel, SingleColorModel } from '../models/ColorModels';
import { Dimensions } from 'react-native';
import { Text, View } from './Themed';


interface CombinationProps {
    colorCombination: ColorCombinationModel
}

const combinationWidth = Dimensions.get('window').width / 3 - 0.0001;

export function ColorCombinationBox(props: CombinationProps) {
    const { colorCombination } = props
    let squareAmount = 2
    if (colorCombination.rgbThird){
        squareAmount = squareAmount + 1
    }
    if (colorCombination.rgbFourth){
        squareAmount = squareAmount + 1
    }

    const styles = StyleSheet.create({
        colorBox: {
            height: combinationWidth / 2
        },
        first: {
            backgroundColor: colorCombination.rgbFirst,
            width: squareAmount < 4 ? combinationWidth : combinationWidth / 2
        },
        second: {
            backgroundColor: colorCombination.rgbSecond,
            width: squareAmount < 3 ? combinationWidth : combinationWidth / 2
        },
        third: {
            backgroundColor: colorCombination.rgbThird ? colorCombination.rgbThird : "red",
            width: combinationWidth / 2
        },
        fourth: {
            backgroundColor: colorCombination.rgbFourth ? colorCombination.rgbFourth : "red",
            width: combinationWidth / 2
        },
        getStartedContainer: {
          alignItems: 'center',
          marginHorizontal: 50,
        },
        homeScreenFilename: {
          marginVertical: 7,
        },
        codeHighlightContainer: {
          borderRadius: 3,
          paddingHorizontal: 4,
        },
        getStartedText: {
          fontSize: 17,
          lineHeight: 24,
          textAlign: 'center',
        },
        helpContainer: {
            marginTop: 15,
            marginHorizontal: 20,
            alignItems: 'center',
        },
        boxWrapper: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            width: combinationWidth,
            height: combinationWidth,
        },
        megaWrapper: {
            margin: combinationWidth / 4,
            width: combinationWidth,
            backgroundColor: "lightgreen"
        },
      });

    return (
        <View style={styles.megaWrapper}>
            <View style={styles.boxWrapper}>
                <View style={[styles.colorBox, styles.first]} />
                <View style={[styles.colorBox, styles.second]} />
                {colorCombination.rgbThird ? <View style={[styles.colorBox, styles.third]} /> : null}
                {colorCombination.rgbFourth ? <View style={[styles.colorBox, styles.fourth]} /> : null}
            </View>
        </View>
    );
}

interface SingleProps {
    color: SingleColorModel
}

export function ColorBox(props: SingleProps) {
    const { color } = props

    const styles = StyleSheet.create({
        colorBox: {
            height: combinationWidth, 
            width: combinationWidth,
            backgroundColor: color.rgb
        },
        helpContainer: {
            marginTop: 15,
            marginHorizontal: 20,
            alignItems: 'center',
        },
        boxWrapper: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            width: combinationWidth,
            height: combinationWidth,
        },
        megaWrapper: {
            margin: combinationWidth / 4,
            width: combinationWidth,
            backgroundColor: "lightgreen"
        },
      });

    return (
        <View style={styles.megaWrapper}>
            <View style={styles.boxWrapper}>
                <View style={styles.colorBox} />
            </View>
        </View>
    );
}