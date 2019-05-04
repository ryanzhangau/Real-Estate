import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../style/loading.scss';
library.add(faSpinner);

const Loading: React.FC = () => {
  return <FontAwesomeIcon icon='spinner' size='3x' className='fa-spin loading' />;
};

export default Loading;
