import { useParams } from 'react-router-dom';
import { BrigadeCard, BrigadeCardSkeletonList, SectionTitle } from '@mhwboard-companion/design-system';
import { useBrigadeDetails } from '../application/useBrigadeDetails';

import styles from './BrigadeDetail.module.scss';

export function BrigadeDetail() {
  const { brigadeId } = useParams();
  const { campaignList, isLoading } = useBrigadeDetails(brigadeId);

  return (
    <>
      <SectionTitle title="Campaigns" />
      <section className={styles.campaignList}>
        {isLoading ? (
          <BrigadeCardSkeletonList quantity={5} />
        ) : (
          campaignList?.map((campaign, index) => (
            <BrigadeCard
              route={`brigades/${brigadeId}/campaign/${campaign.id}`}
              index={index}
              key={campaign.id}
              name={campaign.name}
            />
          ))
        )}
      </section>
    </>
  );
}
