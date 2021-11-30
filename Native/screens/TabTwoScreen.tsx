import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, ThemedScrollView, View } from '../components/Themed';

const combinationWidth = Dimensions.get('window').width;

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
        width: '100%',
    },
    colorInfoText: {
        fontSize: 17,
        lineHeight: 24,
    },
    infoContainer: {
        paddingTop: combinationWidth / 12,
        paddingLeft: combinationWidth / 12,
        paddingRight: combinationWidth / 12
},
});

export default function TabTwoScreen() {
    return (
        <ThemedScrollView>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Gespeicherte Outfits</Text>
                <Text style={styles.colorInfoText}>Hier sind alle Farbkombinationen zu sehen die gespeichert wurden.</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            </View>
        </ThemedScrollView>
    );
}

