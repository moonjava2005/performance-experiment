import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useRowIds} from '../hooks/experimentalHooks';
import ConnectedRow from '../components/ConnectedRow';

const PureContainer = React.memo(() => {
    const rowIds = useRowIds();
    console.log('***Render Container****');
    return (<ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
    >
        {rowIds.toArray().map((id) => {
            return (<ConnectedRow
                style={[styles.rowContainer]}
                key={id}
                id={id}
            />);
        })}
    </ScrollView>);
});
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
export default PureContainer;
