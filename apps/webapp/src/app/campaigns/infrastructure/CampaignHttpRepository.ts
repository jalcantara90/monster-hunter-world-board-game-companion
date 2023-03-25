import {  CampaignRepository } from '../domain/CampaignRepository';
import { CreateCampaignRequest, Campaign } from '../domain/Campaign';

export class CampaignHttpRepository implements CampaignRepository {
  private readonly baseUrl = 'http://localhost:3099/api/campaigns';

  async create(request: CreateCampaignRequest): Promise<Campaign> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(request),
    });

    return await response.json();
  }

  async update(request: Campaign): Promise<Campaign> {
    const { id, ...body } = request;
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });

    return await response.json();
  }

  async findAll(): Promise<Campaign[]> {
    const response = await fetch(this.baseUrl);

    return await response.json();
  }

  async find(campaignId: string): Promise<Campaign[]> {
    const response = await fetch(`${this.baseUrl}/${campaignId}`);

    return await response.json();
  }

  async delete(campaignId: string) {
    const response = await fetch(`${this.baseUrl}/${campaignId}`, {
      method: 'DELETE',
    });

    await response.json();
  }
}
