import { MyContextProvider } from 'core/context/myContext';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  CharacterCollectionScene,
  CharacterScene,
  LocationCollectionScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <MyContextProvider>
        <Routes>
          <Route path="/" element={<CharacterCollectionScene />} />
          <Route path="/characters" element={<CharacterCollectionScene />} />
          <Route path="/characters/:id" element={<CharacterScene />} />
          <Route path="/locations" element={<LocationCollectionScene />} />
          {/* <Route path="/episodes" element={<EpisodesCollectionScene />} /> */}
          {/* <Route path="/characterList" element={<CharacterListCollectionScene />} /> */}
        </Routes>
      </MyContextProvider>
    </HashRouter>
  );
};
