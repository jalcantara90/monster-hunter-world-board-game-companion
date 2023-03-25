import { useParams } from 'react-router-dom';
import { useCampaignDetail } from './application/useCampaignDetail';
import { CampaignRepository } from './domain/CampaignRepository';

type CampaignDetailProps = {
  campaignRepository: CampaignRepository;
};

export function CampaignDetail({ campaignRepository }: CampaignDetailProps) {
  const { campaignId } = useParams();
  const { isLoading, hunterList } = useCampaignDetail(
    campaignRepository,
    campaignId
  );

  console.log(hunterList);

  return <div>Campaign CampaignDetail</div>;
}
