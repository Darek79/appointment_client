import React from 'react';

export const CloseCircle = ({ fnClick, clName }) => (
  <svg
    onClick={fnClick}
    className={clName}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'>
    <path d='M12 1.875C6.417 1.875 1.875 6.417 1.875 12S6.417 22.125 12 22.125 22.125 17.583 22.125 12 17.583 1.875 12 1.875zm0 18c-4.343 0-7.875-3.533-7.875-7.875S7.657 4.125 12 4.125 19.875 7.658 19.875 12 16.343 19.875 12 19.875z' />
    <path d='M14.828 7.757L12 10.586 9.172 7.757 7.758 9.171 10.586 12l-2.828 2.829 1.414 1.414L12 13.414l2.828 2.829 1.414-1.414L13.414 12l2.828-2.829z' />
  </svg>
);
