import { IconProps } from './types';
import styles from './Icon.module.scss';

export function PalicoIcon({ size = 'sm' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.933 16.933"
      className={styles[`icon--${size}`]}
    >
      <g
        style={{
          display: 'inline',
        }}
      >
        <path
          style={{
            fill: '#99999b',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: '.26458335px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
          d="M11.807 281.638s-2.646.397-3.06 2.199c-.412 1.802-.412 6.416-.412 6.416h3.373l.016-3.87s.58-2.182 1.059-2.91c.48-.727.678-1.835.678-1.835z"
          transform="translate(0 -280.067)"
        />
        <path
          style={{
            fill: '#f4f4f4',
            stroke: 'none',
            strokeWidth: '.26458335px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
            fillOpacity: 1,
          }}
          d="m11.807 281.638-1.531-.006-2.456.912-2.233 1.847-.702 1.824.06 4.039 4.126-.004v-4.303c0-1.217 1.788-4.01 2.736-4.309z"
          transform="translate(0 -280.067)"
        />
        <path
          style={{
            fill: '#99999b',
            stroke: '#000',
            strokeWidth: 0.5291667,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 1,
            fillOpacity: 1,
          }}
          d="M7.31 291.526v1.505H9.36v-1.505H8.335ZM7.31 293.031v1.224H9.36v-1.224H8.335Z"
          transform="translate(0 -280.067)"
        />
        <path
          style={{
            fill: '#f4f4f4',
            stroke: '#000',
            strokeWidth: 0.5291667,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 1,
            fillOpacity: 1,
          }}
          d="M7.31 294.255v.835l.38.339h1.29l.38-.339v-.835H8.336Z"
          transform="translate(0 -280.067)"
        />
        <path
          style={{
            fill: 'none',
            stroke: '#000',
            strokeWidth: 0.5291667,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          d="M8.335 290.253h-3.39v-3.787c0-2.216 2.86-4.828 6.267-4.828h2.249v.496c0 .364-1.753 2.348-1.753 4.812v3.307z"
          transform="translate(0 -280.067)"
        />
        <path
          style={{
            fill: '#444',
            fillOpacity: 1,
            stroke: '#000',
            strokeWidth: 0.5291667,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          d="M3.473 290.253v1.273h9.724v-1.273H8.335Z"
          transform="translate(0 -280.067)"
        />
        <path
          style={{
            fill: '#000',
            stroke: 'none',
            strokeWidth: '.26458335px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
          d="M6.721 285.046s-.76.608-.783 1.017c-.024.41.42.596.69.62.269.023.643-.386.631-.515-.012-.129-.666-.585-.538-1.122z"
          transform="translate(0 -280.067)"
        />
        <path
          style={{
            display: 'inline',
            fill: '#000',
            stroke: 'none',
            strokeWidth: '.26458335px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
          d="M10.399 285.198s-.76.608-.784 1.017c-.023.41.421.596.69.62.269.023.643-.386.632-.515-.012-.129-.667-.585-.538-1.122zM8.586 284.262s-.76.608-.783 1.017c-.024.41.42.597.69.62.269.024.643-.386.631-.514-.012-.129-.666-.585-.538-1.123z"
          transform="translate(0 -280.067)"
        />
        <path
          style={{
            fill: '#000',
            stroke: 'none',
            strokeWidth: '.26458335px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
          d="M8.61 286.186c-.041.397-1.632.824-1.561 1.876.07 1.053 1.467 1.083 2.104.868.637-.215.918-1.133.628-1.57-.29-.439-1.446-.067-1.446.545 0 .612.57-.48.86-.174.289.306-.231.835-.86.835s-.927-.752-.637-1.1c.29-.347.972-.809.912-1.28z"
          transform="translate(0 -280.067)"
        />
      </g>
    </svg>
  );
}
