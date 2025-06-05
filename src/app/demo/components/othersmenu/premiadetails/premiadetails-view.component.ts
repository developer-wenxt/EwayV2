import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Mydatas from '../../../../app-config.json';
import { SharedService } from '../../../../shared/shared.service';
//import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-premiadetails-view',
  templateUrl: './premiadetails-view.component.html',
  styleUrls: ['./premiadetails-view.component.scss']
})
export class PremiaDetailsViewComponent implements OnInit {

  issuerHeader:any[]=[];issuerData:any[]=[];companyList:any[]=[];SectionData:any[]=[];
  CoverData:any[]=[];riskData:any[]=[];DiscountDetail:any[]=[];VatDetail:any[]=[];
  CreditDetail:any[]=[];ChargeDetail:any[]=[];PolicyDetail:any[]=[];DriverDetail:any[]=[];
  PolicyData:any[]=[];
  quoteno:any;panelOpenState = false;
  insuranceId:any;userDetails:any;subUserType:any;
  public AppConfig: any = (Mydatas as any).default;
  public ApiUrl1: any = this.AppConfig.ApiUrl1;
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl;
  productId: string;show:boolean=false;
  Name: string="PolicyDetail";
  shows:boolean=false;
  constructor(private router:Router,private sharedService:SharedService,) {
    this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
    const user = this.userDetails?.Result;
    let insurance = sessionStorage.getItem('issuerInsuranceId');
    if(insurance){
      this.insuranceId = insurance;
    }
    else{
      if(user.AttachedCompanies){
        if(user.AttachedCompanies.length!=0) this.insuranceId=user.AttachedCompanies[0];
      }
    }
    this.productId =  sessionStorage.getItem('companyProductId');
    this.subUserType = sessionStorage.getItem('typeValue');
  }

  ngOnInit(): void {
    this.quoteno=sessionStorage.getItem('QuoteRow');
    if(this.quoteno!='' && this.quoteno!=null && this.quoteno!=undefined){
      this.onPolicySection();
      // this.onCustomerSearch();
      // this.onCustomerSearchsection();
      // this.onCustomerSearchCover();
      // this.onriskinfo();
      // this.ondiscountdetail();
      // this.onVatdetail();
      // this.oncreditlimit();
      // this.onChargeDetails();
      // this.onpolicyDetails();
    }
  }
 
  onCustomerSearch(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getyipremcal`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              // this.issuerHeader = [
              //   { key: 'UserName', display: 'Issuer Name' },
              //   { key: 'LoginId', display: 'LoginID' },
              //   { key: 'UserMail', display: 'MailID' },
              //   { key: 'UserMobile', display: 'Mobile No' },
              //   { key: 'EntryDate', display: 'Created Date' },
              //   // { key: 'CreatedBy', display: 'Created By' },
              //   { key: 'Status', display: 'Status' },
              //   {
              //     key: 'actions',
              //     display: 'Action',
              //     config: {
              //       isEdit: true,
              //     },
              //   },
              // {
              //   key: 'configure',
              //   display: 'Configure',
              //   config: {
              //     isConfigure: true,
              //   },
              // },
              // ];
              this.issuerData = data.Result;
            }
          },
          (err) => { },
        );
  }
  onCustomerSearchsection(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getyisectiondetail`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.SectionData = data.Result;
            }
          },
          (err) => { },
        );
  }
   onCustomerSearchCover(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getyicoverdetails`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.CoverData = data.Result;
            }
          },
          (err) => { },
        );
  }
  onriskinfo(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getpgithpolriskaddlinfo`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.riskData = data.Result;
            }
          },
          (err) => { },
        );
  }
  ondiscountdetail(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getmotcommdiscountdetail`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.DiscountDetail = data.Result;
            }
          },
          (err) => { },
        );
  }
  onVatdetail(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getyivatdetails`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.VatDetail = data.Result;
            }
          },
          (err) => { },
        );
  }
  oncreditlimit(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getcreditlimitdetail`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.CreditDetail = data.Result;
            }
          },
          (err) => { },
        );
  }

  onChargeDetails(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getyichargedetails`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.ChargeDetail = data.Result;
            }
          },
          (err) => { },
        );
  }
 
  onpolicyDetails(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getyipolicyapproval`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.PolicyDetail = data.Result;
            }
          },
          (err) => { },
        );
  }

  ondiverDetails(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getmotdriverdetails`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.DriverDetail = data.Result;
            }
          },
          (err) => { },
        );
  }

  onPolicySection(){
    console.log('Eventsss');
    this.show=true;
    let ReqObj = {
      "QuoteNo":this.quoteno
        }
        let urlLink = `${this.CommonApiUrl}integration/getyipolicydetails`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.PolicyData = data.Result;
            }
          },
          (err) => { },
        );
  }
  Details(type){
        if(type=='Section'){
          this.onCustomerSearchsection();
        } else{
           
        }
        if(type=='PolicyDetail'){
          this.onPolicySection();
          this.shows=true;
        }
        if(type=='Risk'){
          this.onriskinfo();
          this.shows=true;
        }
        if(type=='Driver'){
          this.ondiverDetails();
          this.shows=true;
        }
        if(type=='Cover'){
          this.onCustomerSearchCover();
          this.shows=true;
        }
        if(type=='Discount'){
          this.ondiscountdetail();
          this.shows=true;
        }
        if(type=='Charge'){
          this.onChargeDetails();
          this.shows=true;
        }
        if(type=='vat'){
          this.onVatdetail();
          this.shows=true;
        }
        if(type=='precal'){
          this.onCustomerSearch();
          this.shows=true;
        }
        if(type=='Approval'){
          this.onpolicyDetails();
          this.shows=true;
        }
        if(type=='Credit'){
          this.oncreditlimit();
          this.shows=true;
        }
       
  }

  backs(){
    this.shows=false;
    //this.router.navigate(['/Admin/premiaintegrationgrid']);
  }
  backd(){
    this.show=false;
     this.router.navigate(['/Home/premiaintegrationgrid']);
  }
}
