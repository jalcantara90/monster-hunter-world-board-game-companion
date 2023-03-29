import { useParams } from 'react-router-dom';
import { ICampaignRepository } from './CampaignRepositoryService';
import { useCampaignDetail } from './hooks';
import {
  CampaignHunterCard,
  CampaignHunterCardSkeleton,
  ListContainer
} from '@mhwboard-companion/design-system';

import styles from './CampaignDetail.module.scss';

type CampaignDetailProps = {
  campaignRepository: ICampaignRepository;
};

export function CampaignDetail({ campaignRepository }: CampaignDetailProps) {
  const { campaignId } = useParams();
  const { isLoading, hunterList } = useCampaignDetail(
    campaignRepository,
    campaignId
  );

  if (isLoading) {
    return (
      <>
        <CampaignHunterCardSkeleton />
        <CampaignHunterCardSkeleton />
        <CampaignHunterCardSkeleton />
        <CampaignHunterCardSkeleton />
      </>
    );
  }

  return (
    <ListContainer>
      {hunterList.map((campaignHunters) => (
        <CampaignHunterCard
          name={campaignHunters.hunter.name}
          palicoName={campaignHunters.hunter.palicoName}
          weaponType={campaignHunters.weaponType}
        />
      ))}
    </ListContainer>
  );
}
