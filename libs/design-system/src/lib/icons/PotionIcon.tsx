import { IconProps } from './types';
import styles from './Icon.module.scss';

export function PotionIcon({ size = 'sm' }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles[`icon--${size}`]}>
      <path
        style={{
          display: 'inline',
          fill: '#000',
          fillRule: 'evenodd',
          stroke: '#000',
          strokeWidth: 1,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
        }}
        d="M13 1010.362h22v6l4 5v8H9v-10l4-4z"
        transform="translate(0 -1004.362)"
      />
      <path
        style={{
          display: 'inline',
          fill: '#70c674',
          fillRule: 'evenodd',
          stroke: '#000',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
          fillOpacity: 1,
        }}
        d="M15 1007.362v10l-4 4v20s0 2 2 2h22s2 0 2-2v-20l-4-4v-10h8v4h-4v4h4v31l-3 3H10l-3-3v-31h4v-4H7v-4z"
        transform="translate(0 -1004.362)"
      />
      <path
        style={{
          display: 'inline',
          fill: '#70c674',
          fillRule: 'evenodd',
          stroke: '#000',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
          fillOpacity: 1,
        }}
        d="M27 1013.362c-1 0-1-2-2-2h-2s-2 0-2 2v2l6 6v6h-4v-4l-7-7v-6l3-3h10l2 2v7l-3 3h-3l-4-4v-2s0-2 2-2h2c1 0 1 2 2 2z"
        transform="translate(0 -1004.362)"
      />
      <path
        style={{
          display: 'inline',
          fill: '#4e884f',
          fillOpacity: 1,
          fillRule: 'evenodd',
          stroke: '#000',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        d="M11 1027.362h26v14s0 2-2 2H13s-2 0-2-2v-14z"
        transform="translate(0 -1004.362)"
      />
    </svg>
  );
}
