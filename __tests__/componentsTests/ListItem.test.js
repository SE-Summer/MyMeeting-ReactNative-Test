import moment from 'moment';
import React from 'react';
import { ListItem } from '../../src/components/ListItem';

describe('renderItem function in ReserveInfScreen', () => {
    const meeting = {
        start_time: moment().add(1, 'h'),
        end_time: moment().add(2, 'h'),
        id: 12345,
        password: 12345,
        topic: 'test renderItem',
        host: 10000,
    }

    test('given an outdated meeting', () => {

    })
})