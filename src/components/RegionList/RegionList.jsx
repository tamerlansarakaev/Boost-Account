// Global
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import RegionItem from '../RegionItem/RegionItem';

// Styles
import './RegionList.less';

function RegionList() {
  const regions = useSelector((state) => state.server.region);
  const [active, setActive] = React.useState('');

  return (
    <div className="region-section">
      <div className="region-container">
        {regions &&
          regions.map((region, i) => {
            return (
              <RegionItem
                onClick={(region) => {
                  setActive(region);
                }}
                region={region}
                key={i}
                active={active === region}
              />
            );
          })}
      </div>
    </div>
  );
}

export default RegionList;
