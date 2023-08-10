import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText.jsx';
import Constants from 'expo-constants';
import theme from '../Theme.js';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.AppBar.primary,
        paddingTop: Constants.statusBarHeight + 10, 
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.AppBar.textPrimary
    }
})

const AppBar = () => {
    return (
        <View style ={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
                Repositories
            </StyledText>
        </View>
    )
}

export default AppBar