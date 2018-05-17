import React, { SFC, Fragment, ReactElement } from 'react';
import classnames from 'classnames';

import './Modal.scss';

interface Props {
  noBackdrop?: boolean;
  show: boolean;
  visible: boolean;
  children: any;
  onClose(): void;
}

const preventEventPropagation = (event: React.SyntheticEvent<any>) => {
  event.preventDefault();
  event.stopPropagation();
};

const ModalWrapper: SFC<Props> = ({
  noBackdrop,
  show,
  visible,
  children,
  onClose
}: Props) => {
  const modalClasses = classnames('modal fade kata-modal', {
    show,
    'kata-modal--show': visible
  });
  return (
    <Fragment>
      {!noBackdrop && (
        <div
          className={classnames(
            'fade',
            show ? 'kata-modal__backdrop modal-backdrop show' : null
          )}
        />
      )}
      <div
        className={modalClasses}
        tabIndex={-1}
        role="dialog"
        onClick={!noBackdrop ? onClose : undefined}
      >
        <div
          className="modal-dialog"
          role="document"
          onClick={preventEventPropagation}
        >
          <div className="modal-content kata-modal__content">
            {React.Children.map(
              children,
              (Item: ReactElement<any>) =>
                Item
                  ? React.cloneElement(Item, {
                      onClose
                    })
                  : Item
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalWrapper;
