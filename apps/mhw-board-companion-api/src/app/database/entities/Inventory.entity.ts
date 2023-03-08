import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { CampaignEntity } from "../../campaigns/infrastructure/entity/Campaign.entity";
import { HunterEntity } from "../../hunters/infrastructure/entity/Hunter.entity";
import { BaseEntity } from "./Base.entity";

@Entity({ name: 'inventories' })
export class InventoryEntity extends BaseEntity {
  @ManyToOne(() => HunterEntity, (hunter) => hunter.id)
  @JoinColumn({ name: 'hunterId' })
  hunter: string;

  @ManyToOne(() => CampaignEntity, (campaign) => campaign.id)
  @JoinColumn({ name: 'campaignId' })
  campaign: string;
}
