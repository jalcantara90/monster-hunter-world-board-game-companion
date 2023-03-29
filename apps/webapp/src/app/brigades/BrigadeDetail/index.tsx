import { useParams } from 'react-router-dom';
import {
  BrigadeCard,
  BrigadeCardSkeletonList,
  Button,
  ListContainer,
  SectionTitle,
} from '@mhwboard-companion/design-system';
import { useBrigadeDetails } from './hooks';

import styles from './BrigadeDetail.module.scss';
import { IBrigadeRepository } from '../BrigadeRepositoryService';

type BrigadeDetailProps = {
  brigadeRepository: IBrigadeRepository;
};

export function BrigadeDetail({ brigadeRepository }: BrigadeDetailProps) {
  const { brigadeId } = useParams();
  const { campaignList, isLoading } = useBrigadeDetails(
    brigadeRepository,
    brigadeId
  );

  return (
    <ListContainer>
      <SectionTitle title="Campaigns" />
      <section className={styles.campaignList__actions}>
        <Button>Create campaign</Button>
      </section>
      <section className={styles.campaignList}>
        {isLoading ? (
          <BrigadeCardSkeletonList quantity={5} />
        ) : (
          campaignList?.map((campaign, index) => (
            <BrigadeCard
              route={`campaigns/${campaign.id}`}
              index={index}
              key={campaign.id}
              name={campaign.name}
            />
          ))
        )}
      </section>
    </ListContainer>
  );
}
