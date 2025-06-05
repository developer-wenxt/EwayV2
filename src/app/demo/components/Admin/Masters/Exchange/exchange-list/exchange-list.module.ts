
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
//import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbListModule, NbPopoverModule, NbRouteTabsetModule, NbSearchModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
//import { NbMomentDateModule } from '@nebular/moment';
// import { DigitOnlyModule } from '@uiowa/digit-only';
//import { ThemeModule } from '../../../../../@theme/theme.module';
import { ExchangeListComponent } from './exchange-list.component';
import { NewExchangeDetailsComponent } from '../new-exchange-details/new-exchange-details.component';
import { ExchangeListRoutingModule } from './exchange-list-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { PipesModule } from 'src/app/_pipes/pipes.module';
import { DirectivesModule } from 'src/app/_services/directives.module';
import { MaterialModule } from '@app/shared/material/material.module';
// import { ProductDetailsService } from '../../../loginCreation/Company/product-details/product-details.service';








@NgModule({
  declarations: [

    ExchangeListComponent,
    NewExchangeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    NgSelectModule,
    ExchangeListRoutingModule,
    // TablesModule,
    MaterialModule,
    PipesModule,
    RadioButtonModule,
    DropdownModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    BreadcrumbModule, 
    InputTextareaModule,
  ],
  bootstrap: [ExchangeListComponent],
  providers: [
    CurrencyPipe,
    // ProductDetailsService,
  ],
})
export class ExchangeListModule { }
