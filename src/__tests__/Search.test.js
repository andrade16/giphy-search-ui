import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../components/Search/Search';

describe('Search', () => {
    it('renders Search component correctly', () => {
        const tree = renderer.create(<Search/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
