import {
  BrigadeCard,
  BrigadeCardSkeletonList,
  ListContainer,
  SectionTitle,
  PlusIcon,
  useModal,
  FullPageLoader,
  useToast,
  AddHunterButton,
} from '@mhwboard-companion/design-system';
import { Link, useNavigate } from 'react-router-dom';

import { useBrigadeList } from './hooks';
import { IBrigadeRepository } from './BrigadeRepositoryService';

import styles from './BrigadeList.module.scss';
import { BrigadeForm, BrigadeModal } from './BrigadeModal';

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
    const { result, isCancelled } = await showModal<BrigadeForm>(
      <BrigadeModal />
    );

    if (isCancelled) {
      return;
    }

    try {
      const brigade = await notify.promise(createBrigade(result), {
        pending: 'Creating brigade',
        success: 'Brigade created',
        error: {
          render({ data }) {
            return <div>{(data as { message: string }).message}</div>;
          },
        },
      });
      navigate(`brigades/${brigade.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ListContainer>
      <SectionTitle title="Brigades" />
      <section className={styles.brigadeList}>
        {isLoading ? (
          <BrigadeCardSkeletonList quantity={5} />
        ) : (
          <>
            {brigadeList?.map((brigade, index) => (
              <Link key={brigade.id} to={`brigades/${brigade.id}`}>
                <BrigadeCard index={index} name={brigade.name} />
              </Link>
            ))}
            <AddHunterButton onClick={showCreateBrigadeModal}>
              <PlusIcon />
              Add Brigade
            </AddHunterButton>
          </>
        )}
      </section>
      {isCreating && <FullPageLoader />}
    </ListContainer>
  );
}
