import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/cinema',
        name: '::Menu:Cinema',
        iconClass: 'fas fa-film',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/halls',
        name: '::Menu:Halls',
        parentName: '::Menu:Cinema',
        iconClass: 'fas fa-door-closed',
        layout: eLayoutType.application,
      },
      {
        path: '/seats',
        name: '::Menu:Seats',
        parentName: '::Menu:Cinema',
        iconClass: 'fas fa-chair',
        layout: eLayoutType.application,
      }
    ]);
  };
}
