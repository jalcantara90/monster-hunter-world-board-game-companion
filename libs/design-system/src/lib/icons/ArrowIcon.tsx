import styles from './Icon.module.scss';

type ArrowIconProps = {
  size?: 'xs' | 'sm' | 'lg';
};

export function ArrowIcon({ size = 'sm' }: ArrowIconProps) {
  return (
    <svg
      version="1.1"
      id="arrow_icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 57.1 42.8"
      xmlSpace="preserve"
      className={styles[`icon--${size}`]}
    >
      <g id="arrow_icon_1_">
        <polygon
          fill="#FFFFFF"
          points="19.9,23.3 19.9,30.6 46.2,21.6 9,8 13.8,20 5.3,40.5 0,42.8 8.9,20.2 0,0 57.1,21.4 8.2,39.9 18.8,14.8 32,20.2 "
        />
      </g>
    </svg>
  );
}
