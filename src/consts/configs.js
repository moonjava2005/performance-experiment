import {fill} from 'lodash';

export const NUMBER_OF_ROW = 1000;
export const TEST_ROW = fill(Array(NUMBER_OF_ROW), '').map((value, index) => {
    return {
        id: `${index + 1}`,
        text: `Row ${index + 1}`,
        selected: false,
    };
});
