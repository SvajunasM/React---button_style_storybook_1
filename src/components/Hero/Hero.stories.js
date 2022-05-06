import  React  from 'react';
import Hero from './Hero';

export default{
    title: "Hero",
    component: Hero,
}

export const All = () => (
    <>
    <Hero title="Default hero" subtitle="default subtitle"/>
    <Hero color="success" title="Success hero" subtitle="success subtitle"/>
    <Hero color="danger" title="Danger hero" subtitle="danger subtitle"/>
    </>
)
export const Danger = () => (
    <Hero color="danger" title="Danger hero" subtitle="danger subtitle"/>
)
export const Default = () => (
    <Hero title="Default hero" subtitle="default subtitle"/>

)
export const Success = () => (
    <Hero color="success" title="Success hero" subtitle="success subtitle"/>
)
