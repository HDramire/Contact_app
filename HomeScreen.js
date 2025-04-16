import React, {Component} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import styles from "./page.module.css";
import ContactList from "./ContactList";

const URL_CONTACTS = 'http://localhost:8081/contact';
 
export default class HomeScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            contacts: ''
        }
    }

    componentDidMount() {
        fetch(URL_CONTACTS, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({contacts: json})
        })
    }

    render () {
        console.log(this.state.contacts);
        return(
            <ScrollView style={styles.container}>
                <ContactList
                    allContacts={this.state.contacts}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});