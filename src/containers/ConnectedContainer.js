import React from 'react';
import {connect} from 'react-redux';
import {selectRows} from '../selectors/experimentalSelectors';
import {ScrollView, StyleSheet} from 'react-native';
import PureRow from '../components/PureRow';
import {toggleSelection as toggleSelectionAction} from '../actions/experimentalActions';

class ConnectedContainer extends React.PureComponent {
    render() {
        const {
            rows,
        } = this.props;
        console.log('***Render Container****');
        return (<ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {rows.toIndexedSeq().toArray().map(({id, text, selected}) => {
                return (<PureRow
                    style={styles.rowContainer}
                    key={id}
                    id={id}
                    text={text}
                    selected={selected}
                    onPress={this.onRowPress}
                />);
            })}
        </ScrollView>);
    }

    onRowPress = (id) => {
        const {
            onToggleSelection,
        } = this.props;
        onToggleSelection(id);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: 'stretch',
    },
    rowContainer: {
        flexDirection: 'row',
    },
});
const stateToProps = (state) => {
    return {
        rows: selectRows(state),
    };
};
const dispatchToProps = (dispatch) => {
    return {
        onToggleSelection: (id) => {
            dispatch(toggleSelectionAction(id));
        },
    };
};
export default connect(stateToProps, dispatchToProps)(ConnectedContainer);
