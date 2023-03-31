import {
  BrigadeCard,
  BrigadeCardSkeletonList,
  ListContainer,
  SectionTitle,
  FloatingButton,
  PlusIcon,
  useModal,
  useModalManager,
  Modal,
  Input,
  Button,
} from '@mhwboard-companion/design-system';

import { useBrigadeList } from './hooks';
import { IBrigadeRepository } from './BrigadeRepositoryService';

import styles from './BrigadeList.module.scss';

type BrigadeListProps = {
  brigadeRepository: IBrigadeRepository;
};

export function BrigadeList({ brigadeRepository }: BrigadeListProps) {
  const { brigadeList, isLoading } = useBrigadeList(brigadeRepository);

  const { showModal } = useModal();

  const showCreateBrigadeModal = async () => {
    const { result, isCanceled } = await showModal(<BrigadeModal />);

    if (isCanceled) {
      console.error(result);
    }

    return result;
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
    </ListContainer>
  );
}

function BrigadeModal() {
  const { confirmModal, cancelModal } = useModalManager();

  return (
    <Modal>
      <Modal.Header title="Create Brigade" />
      <Modal.Content>
        <Input label="Brigade name" />
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="inverted"
          onClick={() =>
            cancelModal({ message: '', value: { confirmed: false } })
          }
        >
          Cancel
        </Button>
        <Button onClick={() => confirmModal({ confirmed: true })}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
