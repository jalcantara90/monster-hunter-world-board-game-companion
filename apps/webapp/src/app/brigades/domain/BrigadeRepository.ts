import { Brigade, CreateBrigadeRequest, UpdateBrigadeRequest } from './Brigade';

export interface BrigadeRepository {
  findAll(): Promise<Brigade[]>;
  find(brigadeId: string): Promise<Brigade[]>;
  create(request: CreateBrigadeRequest): Promise<Brigade>;
  update(request: UpdateBrigadeRequest): Promise<Brigade>;
  delete(brigadeId: string): Promise<void>;
}
