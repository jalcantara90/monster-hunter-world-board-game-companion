import styles from './SectionTitle.module.scss';

export type SectionTitleProps = {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className={styles.sectionTitle}>{title}</h2>;
}
