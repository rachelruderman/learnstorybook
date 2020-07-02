import '../src/index.css';

import { addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { reduxStore } from '../src/lib/redux';
import React from 'react';

addDecorator(story => <Provider store={reduxStore}>{story()}</Provider>);