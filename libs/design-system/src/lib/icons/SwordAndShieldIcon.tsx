import { IconProps } from './types';
import styles from './Icon.module.scss';

export function SwordAndShieldIcon({ size = 'sm' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.933 16.933"
      className={styles[`icon--${size}`]}
    >
      <g transform="translate(0 -280.067)">
        <circle
          style={{
            display: 'inline',
            opacity: 1,
            fill: '#f4f4f4',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: '#000',
            strokeWidth: 0.5291667,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: 'normal',
          }}
          cx={12.171}
          cy={289.724}
          r={3.572}
        />
        <path
          style={{
            display: 'inline',
            opacity: 1,
            vectorEffect: 'none',
            fill: '#f4f4f4',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: '#000',
            strokeWidth: 0.5291667,
            strokeLinecap: 'butt',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          d="M5.16 281.654h-.794l-1.323 1.323v7.938h2.116zM5.424 291.18v1.587H1.191v-1.588zM5.424 291.18h1.323v1.587H5.424Z"
        />
        <path
          style={{
            display: 'inline',
            opacity: 1,
            vectorEffect: 'none',
            fill: '#99999b',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: '#000',
            strokeWidth: 0.5291667,
            strokeLinecap: 'butt',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          d="M5.16 293.031v1.323H3.042v-1.323zM5.16 294.354v1.058H3.042v-1.058z"
        />
        <path
          style={{
            display: 'inline',
            opacity: 1,
            vectorEffect: 'none',
            fill: '#444',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: '#000',
            strokeWidth: 0.5291667,
            strokeLinecap: 'butt',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          d="M10.98 288.269h2.646v2.91h-2.91v-2.91z"
        />
        <path
          style={{
            display: 'inline',
            opacity: 1,
            vectorEffect: 'none',
            fill: '#000',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0.26458332,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          d="M8.599 289.327h.794v.794h-.794zM11.774 286.152h.794v1.058h-.794zM14.949 289.327h.794v.794h-.794zM11.774 292.237h.794v1.059h-.794z"
        />
      </g>
    </svg>
  );
}
