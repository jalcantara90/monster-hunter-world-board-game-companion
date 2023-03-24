import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import styles from './BrigadeCard.module.scss';

export type BrigadeCardProps = {
  image: string;
  name: string;
};

export function BrigadeCard({ name, image }: BrigadeCardProps) {
  return (
    <article className={styles.brigadeCard}>
      <img className={styles.brigadeCard__image} src={image} alt="" />
      {name}
    </article>
  );
}

export function BrigadeCardSkeleton() {
  return (
    <SkeletonTheme baseColor="#1A2233" highlightColor="#535966">
      <article className={styles.brigadeCard}>
        <Skeleton baseColor="#3CFF64" highlightColor="#D1FFDA" width={'100px'} height={'100px'}/>
        <Skeleton baseColor="#3CFF64" highlightColor="#D1FFDA" height={'1.5rem'} />
      </article>
    </SkeletonTheme>
  );
}
