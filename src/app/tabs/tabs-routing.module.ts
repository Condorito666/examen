import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },

          {
            path: 'details',
            loadChildren: () =>
              import('../tabpages/details/details.module').then(
                (m) => m.DetailsPageModule
              ),
          },
          {
            path: 'categories',
            loadChildren: () =>
              import('../tabpages/categories/categories.module').then(
                (m) => m.CategoriesPageModule
              ),
          },
          {
            path: 'offers',
            loadChildren: () =>
              import('../tabpages/offers/offers.module').then(
                (m) => m.OffersPageModule
              ),
          },
          {
            path: 'account',
            loadChildren: () =>
              import('../tabpages/account/account.module').then(
                (m) => m.AccountPageModule
              ),
          },
          {
            path: 'setting-modal',
            loadChildren: () =>
              import('../tabpages/setting-modal/setting-modal.module').then(
                (m) => m.SettingModalPageModule
              ),
          },
          {
            path: 'filter-modal',
            loadChildren: () =>
              import('../tabpages/filter-modal/filter-modal.module').then(
                (m) => m.FilterModalPageModule
              ),
          },
          {
            path: 'category-modal',
            loadChildren: () =>
              import('../tabpages/category-modal/category-modal.module').then(
                (m) => m.CategoryModalPageModule
              ),
          },
          {
            path: 'basket',
            loadChildren: () =>
              import('../tabpages/basket/basket.module').then(
                (m) => m.BasketPageModule
              ),
          },
          {
            path: 'checkout',
            loadChildren: () =>
              import('../tabpages/checkout/checkout.module').then(
                (m) => m.CheckoutPageModule
              ),
          },
          {
            path: 'fee-popover',
            loadChildren: () =>
              import('../tabpages/fee-popover/fee-popover.module').then(
                (m) => m.FeePopoverPageModule
              ),
          },
        ],
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
