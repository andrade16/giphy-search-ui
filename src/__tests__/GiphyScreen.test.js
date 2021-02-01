import React from 'react';
import renderer from 'react-test-renderer';
import GiphyScreen from '../components/GiphyScreen/GiphyScreen';

describe('GiphyScreen', () => {
    it('renders GiphyScreen correctly', () => {
        const tree = renderer.create(<GiphyScreen/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
