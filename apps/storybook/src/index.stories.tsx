import {Button} from '@nighttrax/components/button';
import React from 'react';
import {Foo} from './components/foo';

const object = {
  title: 'Index',
};

export default object;

export const Local = () => <Foo />;

export const Monorepo = () => <Button />;
