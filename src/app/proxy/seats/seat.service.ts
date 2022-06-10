import type { CreateSeatDto, SeatDto, UpdateSeatDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  apiName = 'Default';

  create = (input: CreateSeatDto) =>
    this.restService.request<any, SeatDto>({
      method: 'POST',
      url: '/api/app/seat',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/seat/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, SeatDto>({
      method: 'GET',
      url: `/api/app/seat/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<SeatDto>>({
      method: 'GET',
      url: '/api/app/seat',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  update = (id: string, input: UpdateSeatDto) =>
    this.restService.request<any, SeatDto>({
      method: 'PUT',
      url: `/api/app/seat/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
