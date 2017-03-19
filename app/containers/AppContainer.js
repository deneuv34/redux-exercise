import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions'

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    addCountRecipe() {
        this.props.addRecipe();
    }

    subCountRecipe() {
        this.props.subRecipe();
    }

    render() {
        return(
            <View>
                <Text style={{ marginTop: 20 }}>
                    Count This Container: {this.props.recipeCount}
                </Text>
                <TouchableOpacity onPress={() => this.addCountRecipe()}>
                    <Text>ADD THE CONTAINER</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.subCountRecipe()}>
                    <Text>SUBS THE CONTAINER</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return {
        recipeCount: state.recipeCount,
    }
}, mapDispatchToProps)(AppContainer);