import React from 'react';
import HomePage from './pages/Homepage';
import GlobalStyled from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyled />
      <HomePage />
    </>
  );
};

export default App;
