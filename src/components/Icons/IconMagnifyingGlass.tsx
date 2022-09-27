import React from 'react';

interface Props {
  className?: string;
}

const IconMagnifyingGlass = React.memo<Props>(({ className = '' }) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.4999 14.5H14.7099L14.4299 14.23C15.6299 12.83 16.2499 10.92 15.9099 8.89002C15.4399 6.11002 13.1199 3.89002 10.3199 3.55002C6.08989 3.03002 2.52989 6.59001 3.04989 10.82C3.38989 13.62 5.60989 15.94 8.38989 16.41C10.4199 16.75 12.3299 16.13 13.7299 14.93L13.9999 15.21V16L18.2499 20.25C18.6599 20.66 19.3299 20.66 19.7399 20.25C20.1499 19.84 20.1499 19.17 19.7399 18.76L15.4999 14.5ZM9.49989 14.5C7.00989 14.5 4.99989 12.49 4.99989 10C4.99989 7.51002 7.00989 5.50002 9.49989 5.50002C11.9899 5.50002 13.9999 7.51002 13.9999 10C13.9999 12.49 11.9899 14.5 9.49989 14.5Z"
      fill="#A2A2A2"
    />
  </svg>
));

IconMagnifyingGlass.displayName = 'IconMagnifyingGlass';

export default IconMagnifyingGlass;
export { IconMagnifyingGlass };
