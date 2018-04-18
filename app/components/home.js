'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static navigationOptions = {
        title: 'Messages'
    };

    componentDidMount() {
        this.props.getData();
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            );
        } else {
            return (
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <View style={{ flex: 5 }}>
                        <FlatList
                            data={this.props.data}
                            renderItem={this.renderItem}
                        />
                    </View>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity onPress={this.onPressAdd}>
                            <Text>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={this.onPressItem.bind(this, item)}>
                <View style={styles.row}>
                    <Text style={styles.title}>
                        {parseInt(index) + 1} {'. '} {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    onPressItem = item => {
        this.props.itemClicked(item);
        this.props.navigation.navigate('Detail');
    };

    onPressAdd = () => {
        this.props.addItem(this.props.data);
    };
}

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    row: {
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        padding: 20
    },

    title: {
        fontSize: 15,
        fontWeight: '600'
    }
});
