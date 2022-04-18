import { MyContext } from 'core/context/myContext';
import React from 'react';
import { createEmptyLocation, getLocationCollection, LocationApi } from './api';

export const LocationCollectionContainer: React.FC = () => {
  const [locations, setLocations] = React.useState<LocationApi[]>(
    createEmptyLocation()
  );
  const { page } = React.useContext(MyContext);

  React.useEffect(() => {
    getLocationCollection(page).then((locations) => {
      setLocations(locations);
    });
  }, [page]);

  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
};
