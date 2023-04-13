import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  BrigadeCard,
  BrigadeCardSkeletonList,
  FloatingButton,
  ListContainer,
  PlusIcon,
  SectionTitle,
  useModal,
  useToast,
} from '@mhwboard-companion/design-system';

import { useBrigadeDetails, useCampaignCreate } from './hooks';
import { IBrigadeRepository } from '../BrigadeRepositoryService';
import { CampaignForm, CampaignModal } from '../CampaignModal';
import { ICampaignRepository } from '../../campaigns/CampaignRepositoryService';

import styles from './BrigadeDetail.module.scss';

type BrigadeDetailProps = {
  brigadeRepository: IBrigadeRepository;
  campaignRepository: ICampaignRepository;
};

export function BrigadeDetail({
  brigadeRepository,
  campaignRepository,
}: BrigadeDetailProps) {
  const { brigadeId } = useParams();
  const { campaignList, isLoading } = useBrigadeDetails(
    brigadeRepository,
    brigadeId
  );

  const { createCampaign } = useCampaignCreate(campaignRepository);

  const notify = useToast();
  const navigate = useNavigate();
  const { showModal } = useModal();

  const showCreateCampaignModal = async () => {
    const { result, isCancelled } = await showModal<CampaignForm>(
      <CampaignModal />
    );

    if (isCancelled) {
      return;
    }

    try {
      const campaign = await notify.promise(
        createCampaign({ brigadeId: brigadeId as string, name: result.name }),
        {
          pending: 'Creating campaign',
          success: 'Campaign created',
          error: {
            render({ data }) {
              return <div>{(data as { message: string }).message}</div>;
            },
          },
        }
      );
      navigate(`/campaigns/${campaign.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ListContainer>
      <SectionTitle title="Campaigns" />
      <section className={styles.campaignList__floating}>
        <FloatingButton onClick={showCreateCampaignModal}>
          <PlusIcon />
        </FloatingButton>
      </section>
      <section className={styles.campaignList}>
        {isLoading ? (
          <BrigadeCardSkeletonList quantity={5} />
        ) : (
          campaignList?.map((campaign, index) => (
            <Link to={`campaigns/${campaign.id}`}>
              <BrigadeCard
                index={index}
                key={campaign.id}
                name={campaign.name}
              />
            </Link>
          ))
        )}
      </section>
    </ListContainer>
  );
}
