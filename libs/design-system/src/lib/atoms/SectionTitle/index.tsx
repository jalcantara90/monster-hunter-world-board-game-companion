import Skeleton from 'react-loading-skeleton';
import styles from './SectionTitle.module.scss';

export type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className={styles.sectionTitle}>{title}</h2>;
}

export function SectionTitleSkeleton() {
  return (
    <h2>
      <Skeleton
        baseColor="#565353"
        highlightColor="#fff"
        height={'1.5rem'}
        width={'200px'}
      />
    </h2>
  );
}
