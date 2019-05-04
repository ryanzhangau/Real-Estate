import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import '../style/errmsg.scss';
library.add(faSync);

interface ErrMsgProp {
  onClick(): void;
  error: string;
}

const ErrorMsg: React.FC<ErrMsgProp> = props => {
  const { onClick, error } = props;
  return (
    <div className='Error_wrap'>
      <div className='Error_msg'>{error}</div>
      <button className='Error_Action--reload' onClick={() => onClick()}>
        <FontAwesomeIcon icon='sync' size='6x' />
      </button>
    </div>
  );
};

export default ErrorMsg;
