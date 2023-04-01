import {
  BrigadeCard,
  BrigadeCardSkeletonList,
  ListContainer,
  SectionTitle,
  FloatingButton,
  PlusIcon,
  useModal,
  FullPageLoader,
  useToast,
} from '@mhwboard-companion/design-system';

import { useBrigadeList } from './hooks';
import { IBrigadeRepository } from './BrigadeRepositoryService';

import styles from './BrigadeList.module.scss';
import { BrigadeForm, BrigadeModal } from './BrigadeModal';
import { useNavigate } from 'react-router-dom';

type BrigadeListProps = {
  brigadeRepository: IBrigadeRepository;
};

export function BrigadeList({ brigadeRepository }: BrigadeListProps) {
  const navigate = useNavigate();
  const { brigadeList, isLoading, createBrigade, isCreating } =
    useBrigadeList(brigadeRepository);
  const notify = useToast();

  const { showModal } = useModal();

  const showCreateBrigadeModal = async () => {
    const { result, isCanceled } = await showModal<BrigadeForm>(
      <BrigadeModal />
    );

    if (isCanceled) {
      return;
    }

    try {
      const brigade = await notify.promise(createBrigade(result), {
        pending: 'Creating brigade',
        success: 'Brigade created',
        error: 'Error when creating brigade',
      });
      navigate(`brigades/${brigade.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ListContainer>
      <SectionTitle title="Brigades" />
      <section className={styles.brigadeList__floating}>
        <FloatingButton onClick={showCreateBrigadeModal}>
          <PlusIcon />
        </FloatingButton>
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
      {isCreating && <FullPageLoader />}
    </ListContainer>
  );
}
