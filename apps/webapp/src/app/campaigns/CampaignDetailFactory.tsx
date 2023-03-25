import { CampaignDetail } from "./CampaignDetail";
import { CampaignHttpRepository } from "./infrastructure/CampaignHttpRepository";

export class CampaignDetailFactory {
  static create() {
    const repository = new CampaignHttpRepository();

    return <CampaignDetail campaignRepository={repository} />
  }
}
