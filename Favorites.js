import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native'
import styles from "./page.module.css";

export default class Favorites extends Component {
    render () {
        return(
            <View style={styles.container}>
                <Text> I'm the Favorites component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})