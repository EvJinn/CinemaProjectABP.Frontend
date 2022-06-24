import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { HallDto, HallService } from '@proxy/halls';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss'],
  providers: [ListService],
})
export class HallComponent implements OnInit {
  hall = { items: [], totalCount: 0} as PagedResultDto<HallDto>;

  constructor(public readonly list: ListService, private hallService: HallService) { }

  ngOnInit() {
    const hallStreamCreator = (query) => this.hallService.getList(query);

    this.list.hookToQuery(hallStreamCreator).subscribe((response) => {
      this.hall = response;
    })
  }

}
