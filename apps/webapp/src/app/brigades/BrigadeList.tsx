import { BrigadeCard } from '@mhwboard-companion/design-system';
import { useBrigadeList } from './application/useBrigadeList';

import styles from './BrigadeList.module.scss';

export function BrigadeList() {
  const { brigadeList, isLoading } = useBrigadeList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.brigadeList}>
      {brigadeList?.map((brigade) => (
        <BrigadeCard
          key={brigade.id}
          name={brigade.name}
          image="assets/mhw-logo.jpeg"
        />
      ))}
    </section>
  );
}
