import { MyContextProvider } from 'core/context/myContext';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { CharacterCollectionScene, CharacterScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <MyContextProvider>
        <Routes>
          <Route path="/" element={<CharacterCollectionScene />} />
          <Route path="/characters" element={<CharacterCollectionScene />} />
          <Route path="/characters/:id" element={<CharacterScene />} />
        </Routes>
      </MyContextProvider>
    </HashRouter>
  );
};
