import { Campaign } from '../campaigns/types';
import { Brigade, CreateBrigadeRequest, UpdateBrigadeRequest } from './types';

export interface IBrigadeRepository {
  findAll(): Promise<Brigade[]>;
  find(brigadeId: string): Promise<Brigade>;
  create(request: CreateBrigadeRequest): Promise<Brigade>;
  update(request: UpdateBrigadeRequest): Promise<Brigade>;
  delete(brigadeId: string): Promise<void>;
  findAllCampaigns(brigadeId: string): Promise<Campaign[]>;
}

export class BrigadRepositoryService implements IBrigadeRepository {
  private readonly baseUrl = 'http://localhost:3099/api/brigades';

  async create(request: CreateBrigadeRequest): Promise<Brigade> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application.json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return await response.json();
  }

  async update(request: Brigade): Promise<Brigade> {
    const { id, ...body } = request;
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application.json',
      },
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
