import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-table-type',
  template: `
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-12 offset-md-1 offset-lg-1 offset-xl-1">
        <table class="table table-bordered" style="width: 100% !important;">
          <thead style="background-color: #042181;color:#fff;height:35px" ><!--class="display1"-->
            <tr>
              <ng-container *ngFor="let column of field.fieldGroup;let i = index">
                  <ng-container *ngIf="i==0">
                      <th *ngFor="let row of column.fieldGroup">
                      {{ row.props.label }}
                      </th>
                  </ng-container>
              </ng-container>
            </tr>
          </thead>
          <tbody style="background-color: #b3c6d6 !important;">
            <ng-container *ngFor="let row of field.fieldGroup;let i = index">
                <ng-container *ngIf="i!=0">
                  <tr *ngFor="let column of row.fieldGroup; let j = index;" style="border-bottom:1px black !important;background-color:white !important">
                  <!--<span class="mobile-label display4"> {{ column.props.label }}</span>-->
                    <td *ngFor="let subColumn of column.fieldGroup;let k=index;">
                   
                      <formly-field [field]="subColumn"></formly-field>
                       
                    </td>
                  </tr>
                </ng-container>
            </ng-container>
          <!--<tr *ngFor="let row of field.fieldGroup; let i = index;" style="border-bottom:1px black !important;background-color:white !important">
              <td *ngFor="let column of row.fieldGroup;let j=index;">
                <formly-field [field]="column"></formly-field>
              </td>
            </tr>-->
          </tbody> 
        </table>
      </div>
    </div>
  `,
 
})
export class TableTypeComponent extends FieldType {}
