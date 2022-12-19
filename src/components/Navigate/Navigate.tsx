import React, { FC } from 'react';
import { useSelector } from 'react-redux';

interface INavigateRedcuer {
  links: Array<string>;
}

interface INavigateItem {
  state: object;
  navigateReducer: INavigateRedcuer;
}

const Navigate: React.FC<INavigateItem> = () => {
  const navigateState = useSelector(
    (state: INavigateItem) => state.navigateReducer.links
  );

  return (
    <div>
      <p></p>
    </div>
  );
};

export default Navigate;
