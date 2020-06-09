import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from './components/Modal';
import { css } from 'emotion';
import FocusTrap from 'focus-trap-react';

const App = () => {

  const [ show, setShow ] = React.useState(false);
  const [ hidden, setHidden ] = React.useState(null);

  const buttonRef = React.useRef(null);
  const openButtonRef = React.useRef(null);

  React.useEffect(() => {
    if (openButtonRef.current) {
      openButtonRef.current.focus();
    }
  });

  const onKeyDown = event => {
    if (event.keyCode === 27) {
      setShow(false);
    }
  };

  const openModal = () => {
    setShow(true);
    setHidden(true);
  };

  const closeModal = () => {
    setShow(false);
    setHidden(null);
  };

  return (
    <FocusTrap>
      <section className={styles.section}>
        <div id="sectionContent" aria-hidden={hidden}>
          {
            !show && <button className={styles.button}
                             ref={openButtonRef}
                             onClick={openModal}>Show modal
            </button>
          }
        </div>
        <Modal
          onKeyDown={onKeyDown}
          closeModal={closeModal}
          buttonRef={buttonRef}
          header={'One Input Form'}
          show={show}
          content={
            <div>
              <TextField
                type="text"
                variant='outlined'
              />
            </div>
          }
        />
      </section>
    </FocusTrap>
  );
};

const styles = {
  button: css({
    color: 'white',
    opacity: 0.8,
    backgroundColor: '#005781',
    marginRight: 6,
    marginLeft: 6,
    cursor: 'pointer',
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 20,
    height: 40,
    width: 180,
    border: 'none',
    textTransform: 'uppercase',
    fontWeight: 600,
    '&:hover': {
      opacity: 1,
      backgroundColor: '#005781',
    },
  }),
  section: css({
    backgroundColor: '#1d1d1d',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
  })
};

export default App;
