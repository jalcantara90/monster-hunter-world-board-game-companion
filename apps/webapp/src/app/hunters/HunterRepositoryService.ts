import {
  Hunter,
  CreateHunterRequest,
  UpdateHunterRequest
} from './types';

export interface IHunterRepository {
  findAll(): Promise<Hunter[]>;
  find(campaignId: string): Promise<Hunter>;
  create(request: CreateHunterRequest): Promise<Hunter>;
  update(request: UpdateHunterRequest): Promise<Hunter>;
  delete(campaignId: string): Promise<void>;
}

export class HunterRepositoryService implements IHunterRepository {
  private readonly baseUrl = 'http://localhost:3099/api/hunters';

  async create(request: CreateHunterRequest): Promise<Hunter> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    return await response.json();
  }

  async update(request: UpdateHunterRequest): Promise<Hunter> {
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

  async findAll(): Promise<Hunter[]> {
    const response = await fetch(this.baseUrl);

    return await response.json();
  }

  async find(campaignId: string): Promise<Hunter> {
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
