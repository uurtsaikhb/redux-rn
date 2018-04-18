'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static navigationOptions = {
        title: 'Chat'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18, paddingBottom: 10 }}>
                    {this.props.title}
                </Text>
                <Text style={{ color: 'gray' }}>{this.props.description}</Text>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        title: state.userReducer.title,
        description: state.userReducer.description
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10
    }
});
