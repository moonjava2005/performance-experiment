import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class PureRow extends React.PureComponent {
    render() {
        const {
            style,
            text,
            selected,
        } = this.props;
        console.log('---Render Row---');
        return (<TouchableOpacity
            style={[style, styles.container, {backgroundColor: selected ? 'red' : 'transparent'}]}
            onPress={this.onPress}
        >
            <Text
                style={styles.textStyle}
            >
                {text}
            </Text>
        </TouchableOpacity>);
    }

    onPress = () => {
        const {
            id,
            onPress,
        } = this.props;
        onPress && onPress(id);
    };
}

const styles = StyleSheet.create({
    container: {
        height: 36,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: 'black',
    },
    textStyle: {
        fontSize: 14,
        color: 'black',
    },
});
