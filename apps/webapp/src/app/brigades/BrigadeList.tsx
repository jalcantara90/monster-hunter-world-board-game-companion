import { BrigadeCard, BrigadeCardSkeletonList, Button, ListContainer, SectionTitle, FloatingButton, PlusIcon } from '@mhwboard-companion/design-system';
import { useBrigadeList } from './application/useBrigadeList';

import styles from './BrigadeList.module.scss';
import { BrigadeRepository } from './domain/BrigadeRepository';

type BrigadeListProps = {
  brigadeRepository: BrigadeRepository;
}

export function BrigadeList({ brigadeRepository }: BrigadeListProps) {
  const { brigadeList, isLoading } = useBrigadeList(brigadeRepository);

  return (
    <ListContainer>
      <SectionTitle title="Brigades"/>
      {/*<section className={styles.brigadeList__actions}>
        <Button>Create Brigade</Button>
  </section> */}
      <section className={styles.brigadeList__floating}>
          <FloatingButton><PlusIcon /></FloatingButton>
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
    </ListContainer>
  );
}
