import  React  from 'react';
import Block from './Block';

export default{
    title: "Block",
    component: Block,
}

export const All = () => (
    <>
    <Block color="primary">Save and continue</Block>
    <Block color="success">Save changes</Block>
    <Block color="danger">Cancel</Block>
    </>
)
export const Danger = () => (
    <Block color="danger">Cancel</Block>
)
export const Default = () => (
    <Block>Default color</Block>
)
export const Primary = () => (
    <Block color="primary">Save and continue</Block>
)
export const Success = () => (
    <Block color="success">Save changes</Block>
)
