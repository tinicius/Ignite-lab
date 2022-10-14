import { Meta, StoryObj } from '@storybook/react';
import Login from '../pages/Login';

export default {
    title: 'Components/Login',
    component: Login,
    args: {
        children: "Create account",
    },
    argTypes: {}
} as Meta;

export const Default: StoryObj = {

};
