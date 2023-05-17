import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Introduction from './Screens/Introduction';
import Register from './Screens/Register';
import Login from  './Screens/Login';
import Data from './Screens/Data';
import EditProfile from './Screens/EditProfile';
import DeleteProfile from './Screens/DeleteProfile';
import DeleteCategory from './Screens/DeleteCategory';
import DeleteSubCategory from './Screens/DeleteSubCategory';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Introduction" component={Introduction} options={{ headerShown: false }} />
                <Stack.Screen name="DeleteSubCategory" component={DeleteSubCategory} options={{ headerShown: false }} />
                <Stack.Screen name="DeleteCategory" component={DeleteCategory} options={{ headerShown: false }} />
                <Stack.Screen name="DeleteProfile" component={DeleteProfile} options={{ headerShown: false }} />
                <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
                <Stack.Screen name="Data" component={Data} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}