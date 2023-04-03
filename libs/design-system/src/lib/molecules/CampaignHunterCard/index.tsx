import Skeleton from 'react-loading-skeleton';
import { WeaponType } from '@mhwboard-companion/common-api';

import { ArrowIcon } from '../../icons/ArrowIcon';
import { WeaponIcon } from '../../atoms/WeaponIcon';

import styles from './CampaignHunterCard.module.scss';

export type CampaignHunterCardProps = {
  name: string;
  palicoName: string;
  weaponType: WeaponType;
};

export function CampaignHunterCard({
  name,
  palicoName,
  weaponType,
}: CampaignHunterCardProps) {
  return (
    <article className={styles.campaignHunterCard}>
      <div className={styles.campaignHunterCard__weapon}>
        <WeaponIcon weaponType={weaponType} size="lg" />
      </div>
      <div className={styles.hunterInfo}>
        <div>
          <span className={styles.hunterInfo__label}>Hunter: </span> {name}
        </div>
        <span>
          <span className={styles.hunterInfo__label}> Palico: </span>
          {palicoName}
        </span>
      </div>
      <div className={styles.campaignHunterCard__arrow}>
        <ArrowIcon size="lg" />
      </div>
    </article>
  );
}

export function CampaignHunterCardSkeleton() {
  return (
    <article className={styles.campaignHunterCard}>
      <div>
        <Skeleton
          baseColor="#565353"
          highlightColor="#fff"
          height={'3.5rem'}
          width={'3rem'}
        />
      </div>

      <div className={styles.hunterInfo}>
        <div>
          <span className={styles.hunterInfo__label}>Hunter: </span>
          <Skeleton
            baseColor="#565353"
            highlightColor="#fff"
            height={'1rem'}
            width={'3rem'}
          />
        </div>
        <span>
          <span className={styles.hunterInfo__label}> Palico: </span>
          <Skeleton
            baseColor="#565353"
            highlightColor="#fff"
            height={'1rem'}
            width={'3rem'}
          />
        </span>
      </div>
      <div className={styles.campaignHunterCard__arrow}>
        <ArrowIcon size="lg" />
      </div>
    </article>
  );
}
