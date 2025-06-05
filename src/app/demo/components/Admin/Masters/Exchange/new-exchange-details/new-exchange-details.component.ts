import { Component, OnInit, Input } from '@angular/core';
//import { NbDialogRef, NbToastrService, NbGlobalPhysicalPosition, NbComponentStatus } from '@nebular/theme';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Exchange } from './Exchange';
import * as Mydatas from '../../../../../../app-config.json';
import { SharedService } from 'src/app/shared/shared.service';
import { LayoutService } from '@app/layout/service/layout.service';

@Component({
  selector: 'app-new-bank-details',
  templateUrl: './new-exchange-details.component.html',
  styleUrls: ['./new-exchange-details.component.scss']
})
export class NewExchangeDetailsComponent implements OnInit {

  @Input() title: any;@Input() ExchangeId:any;
  MenuMasterList: any[]=[];
  activeMenu='Exchange Master'
  public minDate:Date;BranchCodeList:any;currencyList:any[]=[];
  public AppConfig: any = (Mydatas as any).default;
  public ApiUrl1: any = this.AppConfig.ApiUrl1;
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl;
  insuranceId: string;productId:any;loginId:any;exchangeDetails:any;
  constructor(
    private router:Router,private sharedService: SharedService,private datePipe:DatePipe,private layoutService:LayoutService) {
      this.minDate = new Date();
    //this.insuranceId = sessionStorage.getItem('insuranceConfigureId');
    this.productId =  sessionStorage.getItem('companyProductId');
      let userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
      this.MenuMasterList = userDetails?.Result?.MenuMasterList;
    if(userDetails){
      this.loginId = userDetails?.Result?.LoginId;
    }
    if(this.insuranceId==undefined){
    if(userDetails?.Result?.AttachedCompanies){
      if(userDetails?.Result?.AttachedCompanies.length!=0) this.insuranceId=userDetails?.Result?.AttachedCompanies[0];
    }
    }

    this.exchangeDetails = new Exchange();
    
    }

  ngOnInit(): void {
    let obj = JSON.parse(sessionStorage.getItem('ExchangeId'))
    if(obj){
      this.ExchangeId = obj.ExchangeId;
      this.insuranceId = obj.InsuranceId;
      
    }
    this.getCurrencyList();
    if(this.ExchangeId!=null && this.ExchangeId!=undefined){
      this.getEditExchangeDetails();
    }
    else{
      this.exchangeDetails = new Exchange();
      this.ExchangeId=null;
      if(this.exchangeDetails?.Status==null)  this.exchangeDetails.Status = 'N';
      this.exchangeDetails.CreatedBy = this.loginId;
    }
  }
  getEditExchangeDetails(){
    let ReqObj = {
      "ExchangeId": this.ExchangeId,
      "InsuranceId": this.insuranceId
    }
      let urlLink = `${this.CommonApiUrl}master/getexchangemaster`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res:any = data;
        if(res.Result){
          this.exchangeDetails = res.Result;
          // if(this.exchangeDetails){
          //   if(this.exchangeDetails?.EffectiveDateStart!=null){
          //     this.exchangeDetails.EffectiveDateStart = this.onDateFormatInEdit(this.exchangeDetails?.EffectiveDateStart)
          //   }
          //   if(this.exchangeDetails?.EffectiveDateEnd!=null){
          //     this.exchangeDetails.EffectiveDateEnd = this.onDateFormatInEdit(this.exchangeDetails?.EffectiveDateEnd)
          //   }
          // }
        }
      },
      (err) => { },
    );
  }
  onDateFormatInEdit(date) {
    console.log(date);
    if (date) {
      let format = date.split('-');
      if(format.length >1){
        var NewDate = new Date(new Date(format[0], format[1], format[2]));
        NewDate.setMonth(NewDate.getMonth() - 1);
        return NewDate;
      }
      else{
        format = date.split('/');
        if(format.length >1){
          //var NewDate = new Date(new Date(format[2], format[1], format[0]));
          //NewDate.setMonth(NewDate.getMonth() - 1);
          let NewDate = format[2]+'-'+format[1]+'-'+format[0];
          return NewDate;
        }
      }

    }
  }
  getCurrencyList(){
    let ReqObj = {
      "InsuranceId": this.insuranceId
    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/currency`;
    this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
      (data: any) => {
        if(data.Result){
            this.currencyList = data.Result;

        }
      },
      (err) => { },
    );
  }
  ongetBack(){
    this.router.navigate(['/Admin/exchangeMaster'])
  }
  onProceed(){
    let startDate;
    if(String(this.exchangeDetails.EffectiveDateStart).includes('/')) startDate = this.exchangeDetails.EffectiveDateStart
    else startDate = this.datePipe.transform(this.exchangeDetails.EffectiveDateStart,'dd/MM/yyyy');
    let ReqObj = {
      "ExchangeId": this.ExchangeId,
      "ExchangeRate":  this.exchangeDetails.ExchangeRate,
      "CurrencyId":  this.exchangeDetails.CurrencyId,
      "Status":  this.exchangeDetails.Status,
      "EffectiveDateStart": startDate,
      "Remarks":  this.exchangeDetails.Remarks,
      //"InsuranceId":  this.exchangeDetails.InsuranceId,
      "CreatedBy":  this.loginId,
      "CoreAppCode":  this.exchangeDetails.CoreAppCode,
      "MinDiscount": this.exchangeDetails.MinDiscount,
      "MaxLoading": this.exchangeDetails.MaxLoading,
      "InsuranceId":this.insuranceId,
"CodeDescLocal": this.exchangeDetails.CodeDescLocal,
    }
    let urlLink = `${this.CommonApiUrl}master/insertexchangemaster`;
    // if (ReqObj.EffectiveDateStart != '' && ReqObj.EffectiveDateStart != null && ReqObj.EffectiveDateStart != undefined) {
    //   ReqObj['EffectiveDateStart'] =  this.datePipe.transform(ReqObj.EffectiveDateStart, "dd/MM/yyyy")
    // }
    // else{
    //   ReqObj['EffectiveDateStart'] = "";
    // }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
          console.log(data);
          let res:any=data;
          if(data.Result){
            // let type: NbComponentStatus = 'success';
            //       const config = {
            //         status: type,
            //         destroyByClick: true,
            //         duration: 4000,
            //         hasIcon: true,
            //         position: NbGlobalPhysicalPosition.TOP_RIGHT,
            //         preventDuplicates: false,
            //       };
            //       this.toastrService.show(
            //         'Exchange Details Inserted/Updated Successfully',
            //         'Exchange Details',
            //         config);
            this.router.navigate(['/Admin/exchangeMaster']);
          }
          else if(data.ErrorMessage){
              if(res.ErrorMessage){
                // for(let entry of res.ErrorMessage){
                //   let type: NbComponentStatus = 'danger';
                //   const config = {
                //     status: type,
                //     destroyByClick: true,
                //     duration: 4000,
                //     hasIcon: true,
                //     position: NbGlobalPhysicalPosition.TOP_RIGHT,
                //     preventDuplicates: false,
                //   };
                //   this.toastrService.show(
                //     entry.Field,
                //     entry.Message,
                //     config);
                // }
                console.log("Error Iterate",data.ErrorMessage)
                //this.loginService.errorService(data.ErrorMessage);
              }
          }
        },
        (err) => { },
      );
  }
  getMenu(rowData){
    this.layoutService.setMaster(rowData);
 }
}
