import { BrigadeCard, BrigadeCardSkeletonList, Button, SectionTitle } from '@mhwboard-companion/design-system';
import { useBrigadeList } from './application/useBrigadeList';

import styles from './BrigadeList.module.scss';

export function BrigadeList() {
  const { brigadeList, isLoading } = useBrigadeList();

  return (
    <div className={styles.brigadeList__container}>
      <SectionTitle title="Brigades"/>
      <section className={styles.brigadeList__actions}>
        <Button>Create Brigade</Button>
      </section>
      <section className={styles.brigadeList}>
        {
          isLoading ?
          <BrigadeCardSkeletonList quantity={5} /> :
          brigadeList?.map((brigade, index) => (
            <BrigadeCard
              route={`brigades/${brigade.id}`}
              index={index}
              key={brigade.id}
              name={brigade.name}
            />
          ))
        }
      </section>
    </div>
  );
}
