import { IconProps } from './types';
import styles from './Icon.module.scss';

export function PotionIcon({ size = 'sm' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 48 48"
      className={styles[`icon--${size}`]}
    >
      <g
        fillRule="evenodd"
        stroke="#000"
        strokeOpacity="1"
        transform="translate(0 -1004.362)"
      >
        <path
          fill="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M13 1010.362h22v6l4 5v8H9v-10l4-4z"
          display="inline"
        ></path>
        <path
          fill="#70c674"
          fillOpacity="1"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="2"
          d="M15 1007.362v10l-4 4v20s0 2 2 2h22s2 0 2-2v-20l-4-4v-10h8v4h-4v4h4v31l-3 3H10l-3-3v-31h4v-4H7v-4z"
          display="inline"
        ></path>
        <path
          fill="#70c674"
          fillOpacity="1"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="2"
          d="M27 1013.362c-1 0-1-2-2-2h-2s-2 0-2 2v2l6 6v6h-4v-4l-7-7v-6l3-3h10l2 2v7l-3 3h-3l-4-4v-2s0-2 2-2h2c1 0 1 2 2 2z"
          display="inline"
        ></path>
        <path
          fill="#4e884f"
          fillOpacity="1"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="2"
          d="M11 1027.362h26v14s0 2-2 2H13s-2 0-2-2v-14z"
          display="inline"
        ></path>
      </g>
    </svg>
  );
}
