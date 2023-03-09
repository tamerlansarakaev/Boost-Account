// Global
import React from 'react';
import { connect } from 'react-redux';

// Components
import SelectModalItem from './SelectModalItem/SelectModalItem';

// Styles
import './SelectedProductsModal.less';

interface IModalItem {
  title: string;
  color: string;
}

interface ISelectProductsProps {
  modals: IModalItem[];
}

export interface IMapStateToProps {
  modalReducer: {
    statusModal: boolean;
    modal: IModalItem[];
  };
}

interface ISelectProductsState {
  modals: IModalItem[];
}

class SelectedProducts extends React.Component<
  ISelectProductsProps,
  ISelectProductsState
> {
  constructor(props: ISelectProductsProps) {
    super(props);
    this.state = {
      modals: [],
    };
  }

  activeModal() {
    const validation = this.state.modals.length !== this.props.modals.length;
    if (validation) {
      this.setState((state) => ({
        ...state,
        modals: this.props.modals,
      }));
    }
  }

  componentDidUpdate() {
    if (this.props.modals.length !== this.state.modals.length) {
      this.activeModal();
    }
  }

  render() {
    return (
      <div className="products-select-modal">
        {this.state.modals
          ? this.state.modals.map((state, i) => {
              console.log(state);
              return (
                <SelectModalItem
                  title={state.title}
                  color={state.color}
                  key={i}
                />
              );
            })
          : ''}
      </div>
    );
  }
}

const mapStateToProps = (state: IMapStateToProps) => {
  return {
    modals: state.modalReducer.modal,
  };
};

export default React.memo(connect(mapStateToProps)(SelectedProducts));
