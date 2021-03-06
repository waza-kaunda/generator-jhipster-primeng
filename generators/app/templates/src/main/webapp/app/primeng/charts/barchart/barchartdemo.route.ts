import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { BarchartDemoComponent } from '../../charts/barchart/barchartdemo.component';

export const barchartDemoRoute: Route = {
    path: 'barchart',
    component: BarchartDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.charts.barchart.title'
    },
    canActivate: [UserRouteAccessService]
};
