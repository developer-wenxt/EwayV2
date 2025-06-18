import { DatePipe } from '@angular/common';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import * as Mydatas from '../../../../../app-config.json';
import { LayoutService } from '@app/layout/service/layout.service';
@Component({
  selector: 'app-surveyor',
  templateUrl: './surveyor.component.html',
  styleUrls: ['./surveyor.component.scss']
})
export class SurveyorComponent implements OnInit{
  
 
  Sno: any;  public AppConfig: any = (Mydatas as any).default;
  public ReInsurance: any = this.AppConfig.ReInsurance;
  insuranceName: string;tabIndex:any=0;
  insuranceId: string;
  userDetails: any;
  UserType: any;
  ProductId: any;
  loginId: any;rejectedList:any[]=[];
  columnHeader: any[]=[];pendingList:any[]=[];
  public ApiUrl1: any = this.AppConfig.ApiUrl1;
  public CommonApiUrl1: any = this.AppConfig.CommonApiUrl;
  approvedList: any[]=[];
  constructor(private router:Router,private sharedService: SharedService,private layoutService:LayoutService,
    private datePipe:DatePipe,/*private toastrService:NbToastrService,*/) {
      this.insuranceName = sessionStorage.getItem('insuranceConfigureName');
      this.insuranceId = '100004';
      this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
      const user = this.userDetails?.Result;
      this.UserType = this.userDetails?.Result?.UserType;
      this.ProductId = this.userDetails?.Result?.ProductId;
      let mainStatus = sessionStorage.getItem('controllerType');
      if(mainStatus=='SP'){ this.tabIndex=0}
      else if(mainStatus=='SA'){ this.tabIndex=1}
      else if(mainStatus=='SR'){ this.tabIndex=2}
      else { this.tabIndex=0} 
      this.onClickTab(this.tabIndex)
     }
  ngOnInit(): void {
    this.columnHeader =[
      'QuoteNo',"Customer Name","Payment Type","Policy Start Date","Policy End Date","Mobile No","Premium","Action"
    ]
  }
  onClickTab(index){
    if(index==0){this.getProductList('SP')}
    else if(index==1){this.getProductList('SA')}
    else if(index==2){this.getProductList('SR')}
  }
  getProductList(type){
    let urlLink = `${this.CommonApiUrl1}paymentprocess/get/surveyor/${type}`;
    let ReqObj = {
      "ProductId": this.ProductId
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if(data.Result){
            if(type=='SP') this.pendingList = data.Result;
            else if(type=='SA') this.approvedList = data.Result;
            else if(type=='SR') this.rejectedList = data.Result;
        }
      });
  }
  getPendingList(){
    let urlLink = `${this.CommonApiUrl1}paymentprocess/get/creditcontroller/SP`;
    let ReqObj = {
      "ProductId": this.ProductId
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if(data.Result){
        }
    })
  }
  creditPending(){}
  onEditSPending(rowData,type){
    sessionStorage.setItem('controllerType',type)
    sessionStorage.setItem('quoteNo',rowData.QuoteNo);
    sessionStorage.setItem('PaymentId',rowData.PaymentId);
    this.router.navigate(['Home/surveyor/Info'])
  }
}