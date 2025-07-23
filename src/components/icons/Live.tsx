import { JSX } from 'react';

export default function LiveIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='43' height='43' fill='none' viewBox='0 0 43 43' {...props}>
      <g clipPath='url(#clip0_7010_1600)'>
        <g fill='#F5B923' clipPath='url(#clip1_7010_1600)'>
          <path d='M21.375 42.75a20.905 20.905 0 1 1 .05-41.81 20.905 20.905 0 0 1-.05 41.81m0-39.713A18.753 18.753 0 1 0 40.127 21.79 18.77 18.77 0 0 0 21.376 3.037'></path>
          <path
            stroke='#F5B923'
            strokeWidth='1.161'
            d='M21.384 35.782a13.937 13.937 0 1 1 .034-27.874 13.937 13.937 0 0 1-.034 27.874Zm0-26.475a12.502 12.502 0 1 0 12.501 12.501A12.513 12.513 0 0 0 21.384 9.308Z'
          ></path>
          <path d='M26.919 20.879c.69.46.69 1.473 0 1.932l-7.197 4.799a1.161 1.161 0 0 1-1.806-.967v-9.596c0-.928 1.034-1.481 1.806-.967z'></path>
        </g>
      </g>
      <defs>
        <clipPath id='clip0_7010_1600'>
          <path fill='#fff' d='M.495.94h41.81v41.81H.495z'></path>
        </clipPath>
        <clipPath id='clip1_7010_1600'>
          <path fill='#fff' d='M.495.94h41.81v41.81H.495z'></path>
        </clipPath>
      </defs>
    </svg>
  );
}
