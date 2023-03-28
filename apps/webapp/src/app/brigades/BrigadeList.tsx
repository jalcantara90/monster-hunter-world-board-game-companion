import {
  BrigadeCard,
  BrigadeCardSkeletonList,
  Button,
  ListContainer,
  SectionTitle,
} from '@mhwboard-companion/design-system';
import { useBrigadeList } from './hooks';

import styles from './BrigadeList.module.scss';
import { IBrigadeRepository } from './BrigadeRepositoryService';

type BrigadeListProps = {
  brigadeRepository: IBrigadeRepository;
};

export function BrigadeList({ brigadeRepository }: BrigadeListProps) {
  const { brigadeList, isLoading } = useBrigadeList(brigadeRepository);

  return (
    <ListContainer>
      <SectionTitle title="Brigades" />
      <section className={styles.brigadeList__actions}>
        <Button>Create Brigade</Button>
      </section>
      <section className={styles.brigadeList}>
        {isLoading ? (
          <BrigadeCardSkeletonList quantity={5} />
        ) : (
          brigadeList?.map((brigade, index) => (
            <BrigadeCard
              route={`brigades/${brigade.id}`}
              index={index}
              key={brigade.id}
              name={brigade.name}
            />
          ))
        )}
      </section>
    </ListContainer>
  );
}
