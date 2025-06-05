
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EndorsementFieldMasterComponent } from './Masters/endorsement-field-master/endorsement-field-master.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent

  },
  {
    path: 'countryMaster',
    loadChildren: () => import('./Masters/countryMaster/country-master.module').then(m => m.CountryMasterModule),
    data: {
      preload: true,
      title: "Country Master",
      breadcrumb: 'Country Master',
    }
  },
  {
    path: 'integrationDetails',
    loadChildren: () => import('./Masters/Integration/integration-list/integration-list.module').then(m => m.IntegrationListModule),
    data: {
      preload: true,
      title: "Integration List",
      breadcrumb: 'Integration List',
    }
  },
  {
    path: 'makeMaster',
    loadChildren: () => import('./Masters/makeMaster/make-master-module').then(m => m.MakeMasterModule),
    data: {
      preload: true,
      title: "Existing Make",
      breadcrumb: 'Existing Make',
    }
  },
  {
    path: 'modelMaster',
    loadChildren: () => import('./Masters/modelMaster/model-master-module').then(m => m.ModelMasterModule),
    data: {
      preload: true,
      title: "Existing Model",
      breadcrumb: 'Existing Model',
    }
  },
  {
    path: 'colorMaster',
    loadChildren: () => import('./Masters/colorMaster/color-master-module').then(m => m.ColorMasterModule),
    data: {
      preload: true,
      title: "Color Master",
      breadcrumb: 'Color Master',
    }
  },
  {
    path: 'occupationMaster',
    loadChildren: () => import('./Masters/occupationMaster/existing-occupations/existing-occupations.module').then(m => m.ExistingOccupationsModule),
    data: {
      preload: true,
      title: 'Existing Occupations',
      breadcrumb: 'Existing Occupations',
    }
  },
  {
    path: 'bankMaster',
    loadChildren: () => import('./Masters/Bank/bank-list/bank-list.module').then(m => m.BankListModule),
    data: {
      preload: true,
      title: "Bank Master",
      breadcrumb: 'Bank Master',
    }
  },
  {
    path: 'apiIntegMaster',
    loadChildren: () => import('./Masters/Api-inter-Master/api-inter.module').then(m => m.ApiInterModule),
    data: {
      preload: true,
      title: "Api Inter Master",
      breadcrumb: 'Api Inter Master',
    }
  },
  {
    path: 'queryMaster',
    loadChildren: () => import('./Masters/QueryMaster/query.module').then(m => m.QueryModule),
    data: {
      preload: true,
      title: "Api Inter Master",
      breadcrumb: 'Api Inter Master',
    }
  },
  {
    path: 'exchangeMaster',
    loadChildren: () => import('./Masters/Exchange/exchange-list/exchange-list.module').then(m => m.ExchangeListModule),
    data: {
      preload: true,
      title: "Exchange Master",
      breadcrumb: 'Exchange Master',
    }
  },
  {
    path: 'Industry',
    loadChildren: () => import('./Masters/industry/industry-list/industry-list.module').then(m => m.IndustryListModule),
    data: {
      preload: true,
      title: "Industry Master",
      breadcrumb: 'Industry Master',
    }
  },
  {
    path: 'errorMaster',
    loadChildren: () => import('./Masters/ErrorModules/error-list.module').then(m => m.EmiListModule),
    data: {
      preload: true,
      title: "Error Master",
      breadcrumb: 'Error Master',
    }
  },
  {
    path: 'lifepolicyterms',
    loadChildren: () => import('./Masters/LifePolicyTermsMaster/Lifepolicy-list/lifepolicy-list.module').then(m => m.LifepolicytermsModule),
    data: {
      preload: true,
      title: "LifePolicyTerms Master",
      breadcrumb: 'LifePolicyTerms Master',
    }
  },
  {
    path: 'bodyTypeMaster',
    loadChildren: () => import('./Masters/BodyType/body-type-list/body-type-list.module').then(m => m.BodyTypeListModule),
    data: {
      preload: true,
      title: "Body Type Master",
      breadcrumb: 'Body Type Master',
    }
  },
  {
    path: 'vehicleUsageMaster',
    loadChildren: () => import('./Masters/VehicleUsage/Vehicle-usage-list/vehicle-usage-list.module').then(m => m.VehicleUsageListModule),
    data: {
      preload: true,
      title: "Vehicle Usage Master",
      breadcrumb: 'Vehicle Usage Master',
    }
  },
  {
    path: 'currencyMaster',
    loadChildren: () => import('./Masters/currencyMaster/currency-master.module').then(m => m.CurrencyMasterModule),
    data: {
      preload: true,
      title: "Currency Master",
      breadcrumb: 'Currency Master',
    }
  },
  {
    path: 'endorsementfieldDetails',
    component: EndorsementFieldMasterComponent
  },
  {
    path: 'warrantyMaster',
    loadChildren: () => import('./Masters/Warranty/warranty-list/warranty-list.module').then(m => m.WarrantyListModule),
    data: {
      preload: true,
      title: "Warranty Master",
      breadcrumb: 'Warranty Master',
    }
  },
  {
    path: 'CompanyTax',
    loadChildren: () => import('./Masters/companytax/companytax.module').then(m => m.CompanyTaxListsModule),
    data: {
      preload: true,
      title: "Company Tax",
      breadcrumb: 'Company Tax',
    }
  },
  // {
  //   path: 'depositMaster',
  //   loadChildren: () => import('./Masters/DepositMaster/depositmaster/depositmaster.module').then(m => m.DepositesModule),
  //   data: {
  //     preload: true,
  //     title: "Deposit Master",
  //     breadcrumb: 'Deposit Master',
  //   }
  // },
  {
    path: 'exclusionMaster',
    loadChildren: () => import('./Masters/Exclusion/exclusion-list/exclusion-list.module').then(m => m.ExclusionListModule),
    data: {
      preload: true,
      title: "Exclusion Master",
      breadcrumb: 'Exclusion Master',
    }
  },
  {
    path: 'clausesMaster',
    loadChildren: () => import('./Masters/Clauses/clauses-list/clauses-list.module').then(m => m.ClausesListModule),
    data: {
      preload: true,
      title: "Clauses Master",
      breadcrumb: 'Clauses Master',
    }
  },
  {
    path: 'warsMaster',
    loadChildren: () => import('./Masters/Wars/wars-list/wars-list.module').then(m => m.WarsListModule),
    data: {
      preload: true,
      title: "Wars Master",
      breadcrumb: 'Wars Master',
    }
  },
  {
    path: 'dropdownMaster',
    loadChildren: () => import('./Masters/dropdownMaster/exisiting-dropdowns/exisiting-dopdowns.module').then(m => m.ExistingDropdownsModule),
    data: {
      preload: true,
      title: "Dropdown Master",
      breadcrumb: 'Dropdown Master',
    }
  },
  {
    path: 'MenuMaster',
    loadChildren: () => import('./Masters/MenuMaster/menumaster.module').then(m => m.MenuListModule),
    data: {
      preload: true,
      title: "Existing Menu",
      breadcrumb: 'Existing Menu',
    }
  },
  {
    path: 'RegionMaster',
    loadChildren: () => import('./Masters/region/region.module').then(m => m.RegionModule),
    data: {
      preload: true,
      title: "Region Master",
      breadcrumb: 'Region Master',
    }
  },
  {
    path: 'PlanTypeMaster',
    loadChildren: () => import('./Masters/plantypeMaster/plantypelist/plantypelist.module').then(m => m.PlanTypeModule),
    data: {
      preload: true,
      title: "Plan Type Master",
      breadcrumb: 'Plan Type Master',
    }
  },
  {
    path: 'ProductGroupMaster',
    loadChildren: () => import('./Masters/productgroupMaster/productgrouplist/productgrouplist.module').then(m => m.ProductGroupModule),
    data: {
      preload: true,
      title: "Product Group Master",
      breadcrumb: 'Product Group Master',
    }
  },
  {
    path: 'errorMaster',
    loadChildren: () => import('./Masters/ErrorModules/error-list.module').then(m => m.EmiListModule),
    data: {
      preload: true,
      title: "Error Master",
      breadcrumb: 'Error Master',
    }
  },
  // {
  //   path: 'uwreferralpendinglist',
  //   loadChildren: () => import('./underwriterQuestions/underwriter.module').then(m => m.UnderWriterModule),
  //   data: {
  //     preload: true,
  //     title: "UWReferralPending",
  //     breadcrumb: 'UW Referral Pending',
  //   }
  // },
  {
    path: 'mailMaster',
    loadChildren: () => import('./Masters/mailMaster/mail.module').then(m => m.MailModule),
    data: {
      preload: true,
      title: 'Mail Details',
      breadcrumb: 'Mail Details',
    }
  },

  {
    path: 'taxMaster',
    loadChildren: () => import('./Masters/TaxMaster/tax-list/tax-list.module').then(m => m.TaxListsModule),
    data: {
      preload: true,
      title: 'Tax Details',
      breadcrumb: 'Tax Details',
    }
  },
  {
    path: 'smsMaster',
    loadChildren: () => import('./Masters/SmsMaster/sms-master.module').then(m => m.SmsMasterModule),
    data: {
      preload: true,
      title: 'Existing Sms',
      breadcrumb: 'Existing Sms',
    }
  },
  // {
  //   path: 'referralPending',
  //   component: ReferralPendingComponent,
  //   data: {
  //     preload: true,
  //     title: "Referral Pending Quotes",
  //     breadcrumb: 'Referral Pending Quotes',
  //   }
  // },
  // {
  //   path: 'referralRejected',
  //   component: ReferralRejectedComponent,
  //   data: {
  //     preload: true,
  //     title: "Referral Rejected Quotes",
  //     breadcrumb: 'Referral Rejected Quotes',
  //   }
  // },

  // {
  //   path: 'referralApproved',
  //   component: ReferralApprovedComponent,
  //   data: {
  //     preload: true,
  //     title: "Referral Approved Quotes",
  //     breadcrumb: 'Referral Approved Quotes',
  //   }
  // },
  // {
  //   path: 'referralReQuote',
  //   component: ReferralRequoteComponent,
  //   data: {
  //     preload: true,
  //     title: "Referral ReQuote Quotes",
  //     breadcrumb: 'Referral ReQuote Quotes',
  //   }
  // },
  // {
  //   path: 'dataManipulation',
  //   component: DataManipulationComponent,
  //   data: {
  //     preload: true,
  //     title: "Data Manipulation",
  //     breadcrumb: 'Data Manipulation',
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
