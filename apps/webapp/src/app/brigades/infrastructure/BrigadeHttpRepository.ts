import { BrigadeRepository } from '../domain/BrigadeRepository';
import { CreateBrigadeRequest, Brigade } from '../domain/Brigade';
import { Campaign } from '../../campaigns/domain/Campaign';

export class BrigadeHttpRepository implements BrigadeRepository {
  private readonly baseUrl = 'http://localhost:3099/api/brigades';

  async create(request: CreateBrigadeRequest): Promise<Brigade> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(request),
    });

    return await response.json();
  }

  async update(request: Brigade): Promise<Brigade> {
    const { id, ...body } = request;
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });

    return await response.json();
  }

  async findAll(): Promise<Brigade[]> {
    const response = await fetch(this.baseUrl);

    return await response.json();
  }

  async find(brigadeId: string): Promise<Brigade> {
    const response = await fetch(`${this.baseUrl}/${brigadeId}`);

    return await response.json();
  }

  async delete(brigadeId: string) {
    const response = await fetch(`${this.baseUrl}/${brigadeId}`, {
      method: 'DELETE',
    });

    await response.json();
  }

  async findAllCampaigns(brigadeId: string): Promise<Campaign[]> {
    const response = await fetch(`${this.baseUrl}/${brigadeId}/campaigns`);

    return await response.json();
  }
}
