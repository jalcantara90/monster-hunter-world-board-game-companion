import Skeleton from 'react-loading-skeleton';

import styles from './BrigadeCard.module.scss';

export type BrigadeCardProps = {
  name: string;
  index: number;
  route: string;
};

function formatIndex(index: number) {
  return `0${index + 1}`.slice(-2);
}

export function BrigadeCard({ name, index, route }: BrigadeCardProps) {
  return (
    <a href={route}>
      <article className={styles.brigadeCard}>
        {formatIndex(index)}
        <div className={styles.brigadeCard__name}>{name}</div>
      </article>
    </a>
  );
}

export type BrigadeCardSkeletonProps = {
  index: number;
};

export function BrigadeCardSkeleton({ index = 1 }: BrigadeCardSkeletonProps) {
  return (
    <article className={styles.brigadeCard}>
      {formatIndex(index)}
      <Skeleton
        baseColor="#565353"
        highlightColor="#fff"
        height={'1rem'}
        width={'100px'}
      />
    </article>
  );
}

type BrigadeCardSkeletonListProps = {
  quantity: number;
};

export function BrigadeCardSkeletonList({
  quantity,
}: BrigadeCardSkeletonListProps) {
  return (
    <>
      {[...(new Array(quantity) as [])].map((_, i) => (
        <BrigadeCardSkeleton key={i} index={i} />
      ))}
    </>
  );
}
