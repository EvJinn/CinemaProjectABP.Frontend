import type { CreateHallDto, HallDto, UpdateHallDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HallService {
  apiName = 'Default';

  create = (input: CreateHallDto) =>
    this.restService.request<any, HallDto>({
      method: 'POST',
      url: '/api/app/hall',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/hall/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, HallDto>({
      method: 'GET',
      url: `/api/app/hall/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<HallDto>>({
      method: 'GET',
      url: '/api/app/hall',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  update = (id: string, input: UpdateHallDto) =>
    this.restService.request<any, HallDto>({
      method: 'PUT',
      url: `/api/app/hall/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
