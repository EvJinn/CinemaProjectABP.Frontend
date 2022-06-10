import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateSeatDto {
  number: number;
  row: number;
  hallId: string;
}

export interface SeatDto extends AuditedEntityDto<string> {
  number: number;
  row: number;
  hallId?: string;
}

export interface UpdateSeatDto {
  number: number;
  row: number;
  hallId: string;
}
