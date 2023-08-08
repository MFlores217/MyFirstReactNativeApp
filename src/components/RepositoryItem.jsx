import React from 'react'
import {Image, View, StyleSheet} from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryStats from './RepositoryStats.jsx'
import theme from '../Theme.js'

const RepositoryItemHeader = (props) => (
    <View style={{flexDirection: 'row', paddingBottom: 2}}>
        <View style={{paddingRight: 10}}>
            <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
            <StyledText fontWeight='bold'>{props.fullName}</StyledText>
            <StyledText>{props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
        </View>
    </View>
)
   

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {... props}/>
        <RepositoryStats {... props}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5, 
        paddingTop: 5
    },
    cursiva: {
        color: '#09f',
        fontStyle: 'italic',
        marginBottom: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem