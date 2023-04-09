import { environment } from '../../environments/environment';
import {
  AddHunterCampaignRequest,
  Campaign,
  CampaignHunters,
  CreateCampaignRequest,
  InventoryHunter,
  UpdateCampaignRequest,
} from './types';

export interface ICampaignRepository {
  findAll(): Promise<Campaign[]>;
  find(campaignId: string): Promise<Campaign>;
  create(request: CreateCampaignRequest): Promise<Campaign>;
  update(request: UpdateCampaignRequest): Promise<Campaign>;
  delete(campaignId: string): Promise<void>;
  findAllHunters(campaignId: string): Promise<CampaignHunters[]>;
  AddHunters(request: AddHunterCampaignRequest): Promise<void>;
  findHunterInventory(campaignId: string, hunterId: string): Promise<InventoryHunter>;
}

export class CampaignRepositoryService implements ICampaignRepository {
  private readonly baseUrl = `${environment.baseUrl}/campaigns`;

  async create(request: CreateCampaignRequest): Promise<Campaign> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    return await response.json();
  }

  async update(request: UpdateCampaignRequest): Promise<Campaign> {
    const { id, ...body } = request;
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return await response.json();
  }

  async findAll(): Promise<Campaign[]> {
    const response = await fetch(this.baseUrl);

    return await response.json();
  }

  async find(campaignId: string): Promise<Campaign> {
    const response = await fetch(`${this.baseUrl}/${campaignId}`);

    return await response.json();
  }

  async delete(campaignId: string) {
    const response = await fetch(`${this.baseUrl}/${campaignId}`, {
      method: 'DELETE',
    });

    await response.json();
  }

  async findAllHunters(campaignId: string): Promise<CampaignHunters[]> {
    const response = await fetch(`${this.baseUrl}/${campaignId}/hunters`);

    return await response.json();
  }

  async AddHunters(request: AddHunterCampaignRequest): Promise<void> {
    const { campaignId, huntersCampaign } = request;
    await fetch(`${this.baseUrl}/${campaignId}/hunters`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ huntersCampaign }),
    });
  }

  async findHunterInventory(campaignId: string, hunterId: string): Promise<InventoryHunter> {
    const response = await fetch(`${this.baseUrl}/${campaignId}/hunters/${hunterId}/inventories`);

    return response.json();
  }
}
