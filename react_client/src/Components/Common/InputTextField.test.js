import React from 'react';
import ReactDOM from 'react-dom';
import InputTextField from './InputTextField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputTextField />, div);
});
