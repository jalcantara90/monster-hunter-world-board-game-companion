import { useParams, Link } from 'react-router-dom';
import { ICampaignRepository } from './CampaignRepositoryService';
import { useCampaignDetail } from './hooks';
import {
  AddHunterButton,
  CampaignHunterCard,
  CampaignHunterCardSkeleton,
  ListContainer,
  PlusIcon,
  SectionTitle,
  SectionTitleSkeleton,
  useModal,
  useToast,
} from '@mhwboard-companion/design-system';
import { Campaign, CampaignHunters } from './types';
import {
  AddCampaignHunterForm,
  AddCampaignHunterModal,
} from './AddCampaignHunterModal';

type CampaignDetailProps = {
  campaignRepository: ICampaignRepository;
};

export function CampaignDetail({ campaignRepository }: CampaignDetailProps) {
  const notify = useToast();
  const { showModal } = useModal();
  const { campaignId } = useParams();
  const {
    isLoading,
    hunterList,
    campaign,
    findAllHunters,
    addCampaignHunters,
  } = useCampaignDetail(campaignRepository, campaignId);

  const addHunter = async () => {
    if (!campaignId) {
      return;
    }

    const { result, isCanceled } = await showModal<AddCampaignHunterForm>(
      <AddCampaignHunterModal />
    );

    if (isCanceled) {
      return;
    }

    try {
      await notify.promise(
        addCampaignHunters({
          campaignId,
          huntersCampaign: [result],
        }),
        {
          pending: 'Adding hunter',
          success: 'Hunter added',
          error: {
            render({ data }) {
              return <div>{(data as { message: string }).message}</div>;
            },
          },
        }
      );
      findAllHunters(campaignId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ListContainer>
      {isLoading ? (
        <SectionTitleSkeleton />
      ) : (
        <SectionTitle title={(campaign as Campaign)?.name} />
      )}
      <HunterList
        campaignId={campaignId as string}
        hunterList={hunterList}
        isLoading={isLoading}
        addHunter={addHunter}
      />
    </ListContainer>
  );
}

interface HunterListProps {
  isLoading: boolean;
  hunterList: CampaignHunters[];
  campaignId: string;
  addHunter: () => void;
}

function HunterList({
  isLoading,
  hunterList,
  addHunter,
  campaignId,
}: HunterListProps) {
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
    <>
      {hunterList.map((campaignHunters) => (
        <Link
          key={campaignHunters.id}
          to={`hunters/${campaignHunters.hunter.id}`}
        >
          <CampaignHunterCard
            name={campaignHunters.hunter.name}
            palicoName={campaignHunters.hunter.palicoName}
            weaponType={campaignHunters.weaponType}
          />
        </Link>
      ))}
      {hunterList.length < 4 && (
        <AddHunterButton onClick={addHunter}>
          <PlusIcon />
          Add hunter
        </AddHunterButton>
      )}
    </>
  );
}
