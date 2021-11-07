import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchColorsScreen from '../screens/SearchColorsScreen';
import SearchCombinationsScreen from '../screens/SearchCombinationsScreen';

const Stack = createNativeStackNavigator(); 

export function FirstTabNavigator(){
    return (
        <Stack.Navigator initialRouteName="Screen1">    // contains all child component screens within a stack. 
            <Stack.Screen
            name="Screen1"
            component={SearchColorsScreen}
            />
            <Stack.Screen
            name="NestedScreen1"
            component={SearchCombinationsScreen}
            />
        </Stack.Navigator>
    );
  }