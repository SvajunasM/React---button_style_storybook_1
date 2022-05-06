import React from 'react';
import { Button, Block, Hero } from './components';
const App = () => {
  return (
    <div>
      <h1>Storybook 1:</h1>
      <p>Komponentai</p>
      <h2>Hero komponentai:</h2>
      <>
        <p>Default hero - parametrai: title="Title" subtitle="subtitle"</p>
        <Hero title='Title' subtitle='subtitle' />
        <p>
          Success hero - parametrai: color="success" title="Success hero"
          subtitle="Success subtitle"
        </p>
        <Hero
          color='success'
          title='Success hero'
          subtitle='Success subtitle'
        />
        <p>
          Danger hero - parametrai: color="danger" title="Danger hero"
          subtitle="Danger subtitle"
        </p>
        <Hero color='danger' title='Danger hero' subtitle='Danger subtitle' />
      </>
      <h2>Block komponentai:</h2>
      <>
        <p>Default block komponentas.</p>
        <Block>Default</Block>
        <p>Primary block - parametrai: color="primary"</p>
        <Block color='primary'>Primary color</Block>
        <p>Success block - parametrai: color="success"</p>
        <Block color='success'>Success color</Block>
        <p>Danger block - parametrai: color="danger"</p>
        <Block color='danger'>Danger color</Block>
      </>
      <h2>Button komponentai:</h2>
      <h3>Mygtuko paspaudimas parodo mygtuko tipą</h3>
      <>
        <p>Default button komponentas.</p>
        <Button>Default</Button>
        <h3>Button su primary color</h3>
        <>
          <p>Button - parametrai: color="primary" type="button"</p>
          <Button color='primary' type='button'>
            Primary button
          </Button>
          <p>Button - parametrai: color="primary" type="submit"</p>
          <Button color='primary' type='submit'>
            Primary submit button
          </Button>
          <p>Button - parametrai: color="primary" type="reset"</p>
          <Button color='primary' type='reset'>
            Primary reset button
          </Button>
        </>
        <h3>Button su success color</h3>
        <>
          <p>Button - parametrai: color="success" type="button"</p>
          <Button color='success' type='button'>
            Success button
          </Button>
          <p>Button - parametrai: color="success" type="submit"</p>
          <Button color='success' type='submit'>
            Success submit button
          </Button>
          <p>Button - parametrai: color="success" type="reset"</p>
          <Button color='success' type='reset'>
            Success reset button
          </Button>
        </>
        <h3>Button su danger color</h3>
        <>
          <p>Button - parametrai: color="danger" type="button"</p>
          <Button color='danger' type='button'>
            Danger button
          </Button>
          <p>Button - parametrai: color="danger" type="submit"</p>
          <Button color='danger' type='submit'>
            Danger submit button
          </Button>
          <p>Button - parametrai: color="danger" type="reset"</p>
          <Button color='danger' type='reset'>
            Danger reset button
          </Button>
        </>
      </>
    </div>
  );
};

export default App;
