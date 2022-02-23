import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Text, ThemedScrollView, View } from '../components/Themed';
import { ColorCombinationModel, SingleColorModel } from '../models/ColorModels';
import { FirstTabParamList } from '../types';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useState } from 'react';



export default function ColorVisualisationScreen({ navigation }: NativeStackScreenProps<FirstTabParamList>) {
    const combinationWidth = Dimensions.get('window').width;
    const route = useRoute<RouteProp<FirstTabParamList, "ColorVisualisation">>()
    const boxWidth = Dimensions.get('window').width / 3 - 0.0001;
    const [saved, setSaved] = useState(false)

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "center",
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
        },
        pictureBox:{
            height: boxWidth,
            width: boxWidth,
            flexGrow: 1,
            marginBottom: 8
        },
        firstBox:{
            backgroundColor: route.params.combination.rgbFirst,
        },
        secondBox:{
            backgroundColor: route.params.combination.rgbSecond,
        },
        thirdBox:{
            backgroundColor: route.params.combination.rgbThird ? route.params.combination.rgbThird : (getRandomInt(2) == 0 ? route.params.combination.rgbFirst: route.params.combination.rgbSecond),
        },
        fourthBox:{
            backgroundColor: route.params.combination.rgbFourth ? route.params.combination.rgbFourth: (getRandomInt(2) == 0 ? route.params.combination.rgbFirst: route.params.combination.rgbSecond),
        },
        titleStarContainer:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
        },
        image:{
            width: "100%",
            height: "100%"
        }
    })


    return (
        <ThemedScrollView>
            <View style={styles.infoContainer}>
                <View style={styles.titleStarContainer}>
                    <Text style={styles.title}>Outfit Visualisierung</Text>
                    <TouchableOpacity onPress={() => setSaved(!saved)}>
                        {saved ? <Text style={styles.title}>★</Text> : <Text style={styles.title}>☆</Text>}
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <View style={styles.container}>
                    <View style={[styles.pictureBox, styles.firstBox]}>
                        <Image style={styles.image} source={require("../assets/images/visualisations/jacket.png")}/>
                    </View>
                    <View style={[styles.pictureBox, styles.secondBox]}>
                        <Image style={styles.image} source={require("../assets/images/visualisations/shirt.png")}/>
                    </View>
                    <View style={[styles.pictureBox, styles.thirdBox]}>
                        <Image style={styles.image} source={require("../assets/images/visualisations/trausers.png")}/>
                    </View>
                    <View style={[styles.pictureBox, styles.fourthBox]}>
                        <Image style={styles.image} source={require("../assets/images/visualisations/shoes.png")}/>
                    </View>
                </View>
            </View>
        </ThemedScrollView>
    );
}


