import  React  from 'react';
import Button from './Button';

export default{
    title: "Button",
    component: Button,
}

export const All = () => (
    <>
    <Button color="primary">Save and continue</Button>
    <Button color="success">Save changes</Button>
    <Button color="danger">Cancel</Button>
    </>
)
export const Danger = () => (
    <Button color="danger">Cancel</Button>
)
export const Default = () => (
    <Button>Default color and type</Button>
)
export const Primary = () => (
    <Button color="primary">Save and continue</Button>
)
export const Success = () => (
    <Button color="success">Save changes</Button>
)
