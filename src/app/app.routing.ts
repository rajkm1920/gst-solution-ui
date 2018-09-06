import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { RmComponent } from './layout/rm/rm.component';
import { SuperAdmin } from './layout/super-admin/super-admin.component';


export const AppRoutes: Routes = [
  {
    path: '',
  redirectTo: 'userLogin',
    pathMatch: 'full'
  },
  {
    path: 'rm-login',
    loadChildren: './admin/rm/login/login.module#LoginModule'
  },
   {
   path: 'userLogin',
   loadChildren: './pages/user-login/login-default/login-default.module#LoginDefaultModule'
 },
  {
    path: '',
    component: AdminComponent,
    children: [

       {
        path: 'customer-offer-dashboard',
        loadChildren: './pages/dashboard/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      },
      {
        path: 'customer-file-gst',
        loadChildren: './pages/file-gst/file-gst-default/file-gst-default.module#FileGstDefaultModule'
      },
      {
        path: 'customer-apply-gst-number',
        loadChildren: './pages/apply-gst/apply-gst-default/apply-gst-default.module#ApplyGstDefaultModule'
      },
      {
        path: 'customer-track-gst-status',
        loadChildren: './pages/track-gst-status/track-gst-status-default/track-gst-status-default.module#TrackGstStatusDefaultModule'
      },
      {
        path: 'customer-track-gst-reports',
        loadChildren: './pages/track-gst-reports/track-gst-reports-default/track-gst-reports-default.module#TrackGstReportsDefaultModule'
      },
      {
        path: 'customer-gst-services',
        loadChildren: './pages/gst-services/gst-services-default/gst-services-default.module#GstServicesDefaultModule'
      },
      {
        path: 'customer-wallet',
        loadChildren: './pages/wallet/wallet-default/wallet-default.module#WalletDefaultModule'
      },
      {
        path: 'customer-service-request',
        loadChildren: './pages/service-request/service-request-default/service-request-default.module#ServiceRequestDefaultModule'
      },
      {
        path: 'customer-buyPlans',
        loadChildren: './pages/buy-plans/buy-plans-default/buy-plans-default.module#BuyPlansDefaultModule'
      },
      {
        path: 'customer-register-gst',
        loadChildren: './pages/register-gst/register-gst-default/register-gst-default.module#RegisterGSTDefaultModule'
      },
      {
        path: 'customer-invoices',
        loadChildren: './pages/customer-invoice/customer-invoice-default/customer-invoice-default.module#CustomerInvoiceDefaultModule'
      },
      {
        path: 'basic',
        loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      }, {
        path: 'notifications',
        loadChildren: './pages/ui-elements/advance/notifications/notifications.module#NotificationsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module#BasicBootstrapModule',
      }, {
        path: 'map',
        loadChildren: './pages/map/google-map/google-map.module#GoogleMapModule',
      }, {
        path: 'user',
        loadChildren: './pages/user/profile/profile.module#ProfileModule'
      }, {
        path: 'simple-page',
        loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      }
    ]
  }, {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '',
    component: RmComponent,
    children: [
    
      {
        path: 'rm-dashboard',
        loadChildren: './admin/rm/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'manage-customers',
        loadChildren: './admin/rm/manage-customers/manage-customers.module#ManageCustomersModule'
      },
      {
        path: 'gst',
        loadChildren: './admin/rm/gst-track/gst-track.module#GstTrackModule'
      },
      {
        path: 'proposals',
        loadChildren: './admin/rm/proposal/proposal.module#ProposalModule'
      },
      {
        path: 'invoice',
        loadChildren: './admin/rm/innovice/innovice.module#InnoviceModule'
      },
      {
        path: 'make-proposal',
        loadChildren: './admin/rm/make-proposal/make-proposal.module#MakeProposalModule'
      },
      {
        path: 'pro-documents',
        loadChildren: './admin/rm/processed-documents/processed-documents.module#ProcessedDocumentsModule'
      },
      {
        path: 'payments',
        loadChildren: './admin/rm/payments/payments.module#PaymentsModule'
      },
      {
        path: 'pro-invoice',
        loadChildren: './admin/rm/processed-invoice/processed-invoice.module#ProcessedInvoiceModule'
      },
      {
        path: 'request',
        loadChildren: './admin/rm/service-request/service-request.module#ServiceRequestModule'
      }
    ]
  },
  {
    path: '',
    component: SuperAdmin,
    children: [
      {
        path: 'admin-dashboard',
        loadChildren: './admin/super-admin/dashboard/dashboard.module#DashboardModule'
       },
      {
        path: 'manage-employees',
        loadChildren: './admin/super-admin/manage-employees/manage-employees.module#ManageEmployeesModule'
      },
      // {
      //   path: 'gst',
      //   loadChildren: './admin/super-admin/gst-track/gst-track.module#GstTrackModule'
      // },
      // {
      //   path: 'proposals',
      //   loadChildren: './admin/super-admin/proposal/proposal.module#ProposalModule'
      // },
      // {
      //   path: 'innovice',
      //   loadChildren: './admin/super-admin/innovice/innovice.module#InnoviceModule'
      // }
    ]
  }
];
