
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormlyModule } from '@ngx-formly/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TreeSelectModule } from 'primeng/treeselect';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DirectivesModule } from 'src/app/_services/directives.module';
import { PipesModule } from 'src/app/_pipes/pipes.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { MaterialModule } from '@app/shared/material/material.module';
import { PickListModule } from 'primeng/picklist';
import { UWControllerComponent } from './uw-Controller.component';
import { UWControllerRoutingModule } from './uw-Controller-routing.module';
import { UWInfoComponent } from '../uw-controller-info/uw-Controller.component';
@NgModule({
  declarations: [
    UWControllerComponent,
    UWInfoComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    NgSelectModule,
    PipesModule,
    NgxPaginationModule,
    HttpClientModule,
    BreadcrumbModule, 
    ButtonModule,
    DividerModule,
    TabViewModule,
    TableModule,
    FormsModule,
    InputTextModule,
    DialogModule,
    CheckboxModule,
    ChipModule,
    AutoCompleteModule,
    RadioButtonModule,
    CardModule,
    TreeSelectModule,
    SelectButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    FormlyModule,
    CalendarModule,
    InputTextareaModule,
    BadgeModule,
    OverlayPanelModule,
    InputSwitchModule,
    ToggleButtonModule,
    MultiSelectModule,
    MaterialModule,
    PickListModule,
    UWControllerRoutingModule
  ],
  bootstrap: [],
  providers: [
    CurrencyPipe
  ],
})
export class UWControllerModule { }
