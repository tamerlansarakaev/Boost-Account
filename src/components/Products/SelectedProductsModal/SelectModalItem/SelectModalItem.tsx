// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Types
import allTypes from '../../../../reducers/types';

// Styles
import './SelectModalItem.less';

interface IModalItem {
  title: string;
  color?: string;
}

function SelectModalItem({ title, color = '#fff' }: IModalItem) {
  const stateModals = useSelector((state: any) => state.modalReducer.modal);
  const dispatch = useDispatch();

  function changeSelectItems() {
    setTimeout(() => {
      console.log(stateModals);
    }, 3000);
  }

  React.useEffect(() => {
    console.log(stateModals);
    changeSelectItems();
  }, [stateModals]);

  return (
    <>
      <div className="select-modal-item">
        <p style={{ color: color }}>{title}</p>
      </div>
    </>
  );
}
export default React.memo(SelectModalItem);
