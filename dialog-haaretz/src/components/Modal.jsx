import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import CloseIcon from '@material-ui/icons/Close';

const propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  header: PropTypes.string,
  content: PropTypes.node,
  buttonRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  onKeyDown: PropTypes.func,
};

const Modal = ({
                 show,
                 closeModal,
                 header,
                 content,
                 buttonRef,
                 onKeyDown
               }) => {

  React.useEffect(() => {
    buttonRef.current.focus();
  });

  return (
    <>
      <div
        className={styles.overlay({ show })}
        onClick={closeModal}/>
      <div role="document" onKeyDown={onKeyDown}>
        <dialog className={styles.modal({ show })}>
          <button
            ref={buttonRef}
            className={styles.icon}
            onClick={closeModal}>
            <CloseIcon/>
          </button>
          <h1>{header}</h1>
          {content}
        </dialog>
      </div>
    </>
  );
};

const styles = {
  overlay: ({ show }) => css({
    display: show ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#0000003a',
    transition: 'opacity 0.2s ease'
  }),
  modal: ({ show }) => css({
    display: show ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 500,
    minWidth: 320,
    position: 'relative',
    margin: '0px auto',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    transition: 'transform 0.2s ease',
    boxShadow: '0 2px 8px 3px',
    fontFamily: 'monospace'
  }),
  icon: css({
    position: 'absolute',
    top: 5,
    right: 5,
    width: 20,
    height: 20,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    border: 'none',
  })
};

Modal.propTypes = propTypes;

export default Modal;
