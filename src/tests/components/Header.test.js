import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/Header';

//react-test-renderer

test('should render Header correctry', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    console.log(renderer.getRenderOutput());
});

