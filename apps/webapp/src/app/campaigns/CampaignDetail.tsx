import { useParams } from 'react-router-dom';
import { ICampaignRepository } from './CampaignRepositoryService';
import { useCampaignDetail } from './hooks';

type CampaignDetailProps = {
  campaignRepository: ICampaignRepository;
};

export function CampaignDetail({ campaignRepository }: CampaignDetailProps) {
  const { campaignId } = useParams();
  const { isLoading } = useCampaignDetail(
    campaignRepository,
    campaignId
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Campaign CampaignDetail</div>;
}
