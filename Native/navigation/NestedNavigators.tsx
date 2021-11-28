import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchColorsScreen from '../screens/SearchColorsScreen';
import SearchCombinationsScreen from '../screens/SearchCombinationsScreen';
import { FirstTabParamList } from '../types';
import ColorVisualisationScreen from '../screens/ColorVisualisationScreen';

const Stack = createNativeStackNavigator<FirstTabParamList>(); 
export const FirstTabNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="SearchColors"
                component={SearchColorsScreen}
            />
            <Stack.Screen
                name="ColorCombination"
                component={SearchCombinationsScreen}
            />
            <Stack.Screen
                name="ColorVisualisation"
                component={ColorVisualisationScreen}
            />
        </Stack.Navigator>
    );
}