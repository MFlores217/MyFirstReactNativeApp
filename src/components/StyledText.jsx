import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Theme from '../Theme.js'

const styles = StyleSheet.create({
    text: {
        color: Theme.colors.textPrimary,
        fontSize: Theme.fontSizes.body,
        fontFamily: Theme.fonts.main,
        fontWeight: Theme.fontWeights.normal
    },
    colorPrimary: {
        color: Theme.colors.textPrimary
    },
    colorSecondary: {
        color: Theme.colors.textSecondary
    }, 
    bold: {
        fontWeight: Theme.fontWeights.bold
    },
    subheading: {
        fontSize: Theme.fontSizes.subheading
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})

export default function StyledText({align, children, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        align == 'center' && styles.textAlignCenter,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecondary,
        fontSize == 'subheading' && styles.subheading,
        fontWeight == 'bold' && styles.bold,
        style

    ]
    return(
        <Text style={textStyles} {...restOfProps}>{children}</Text>
    )
}