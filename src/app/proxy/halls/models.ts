import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateHallDto {
  name: string;
}

export interface HallDto extends AuditedEntityDto<string> {
  name?: string;
}

export interface UpdateHallDto {
  name: string;
}
