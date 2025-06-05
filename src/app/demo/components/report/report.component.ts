import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from 'src/app/_services/shared.service';
import * as Mydatas from '../../../app-config.json';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: [`.form-container input, p-dropdown { min-width: 20rem }`]
})
export class ReportComponent implements OnInit {
  items: MenuItem[] | undefined;
  startdate:any;branchValue:any;
  public quoteData:any []=[];innerColumnHeader:any []=[];customerData:any[]=[];
  userDetails: any;
  loginId: any;
  userType: any;
  agencyCode: any;
  countryId: any;
  brokerbranchCode: any;
  productId: any;
  PackageYn: any;
  insuranceId: any;
  branchList: any;
  updateComponent: any;
  loginType: any;
  enddate:any;
  showgrid:any=false;

  public AppConfig: any = (Mydatas as any).default;
  public ApiUrl1: any = this.AppConfig.ApiUrl1;
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl;
  public motorApiUrl:any = this.AppConfig.MotorApiUrl;
  Currency:any;brokerList:any[]=[];
  brokerCode: any;btype:any;buisnessList:any[]=[];
  columns:any[]=[];lang:any=null;
  custumData: any[];
  searchSection: boolean;
  // @Output('Currency') Currency:any='TZS';

  constructor(private router:Router,private sharedService: SharedService,private datePipe:DatePipe,
    private appComp:AppComponent,private translate: TranslateService
  ) {
    this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
    console.log("UserDetails",this.userDetails);
    this.loginId = this.userDetails.Result.LoginId;
    this.userType = this.userDetails?.Result?.UserType;
    this.agencyCode = this.userDetails.Result.OaCode;
    //this.branchCode = this.userDetails.Result.BranchCode;
    this.countryId = this.userDetails.Result.CountryId;
    this.brokerbranchCode = this.userDetails.Result.BrokerBranchCode;
    this.productId = this.userDetails.Result.ProductId;
    this.PackageYn= this.userDetails.Result.PackageYn
    this.insuranceId = this.userDetails.Result.InsuranceId;
    this.loginType = this.userDetails.Result.LoginType;
    if(this.userType!='Issuer')this.brokerCode = this.loginId;
   }

  ngOnInit(): void {
    this.appComp.getLanguage().subscribe((res:any)=>{  
			if(res) this.lang=res;
			else this.lang='en';
			this.translate.setDefaultLang(this.lang);
		  });
		if(!this.lang){if(sessionStorage.getItem('language'))this.lang=sessionStorage.getItem('language');
		else this.lang='en';
		sessionStorage.setItem('language',this.lang)
		this.translate.setDefaultLang(sessionStorage.getItem('language'));}
    let branchList = this.userDetails.Result.LoginBranchDetails;
    let i=0;
    for(let branch of branchList){
      branch['Code'] = branch?.BranchCode;
      branch['CodeDesc']=branch?.BranchName;
      i+=1;
      if(i==branchList.length){
        let obj = [{Code:null,CodeDesc:"--Select--"}];
        this.branchList=obj.concat(branchList)}
    }
    this.quoteData =  [
      { key: 'PolicyNo', display: 'Policy No' },
      { key: 'QuoteNo', display: 'Quote No' },
      { key: 'CustomerName', display: 'Customer Name' },
      { key: 'StartDate', display: 'Start Date' },
      { key: 'EndDate', display: 'End Date' },
      { key: 'SumInured', display: 'Sum Inured' },
      { key: 'PolicyDesc', display: 'Policy Desc' },
      { key: 'CommisionAmt', display: 'Commision Amt' },
      { key: 'Premium', display: 'Premium' },
      { key: 'CreditLimit', display: 'Credit Limit' },
      { key: 'Currency', display: 'Currency' },
      { key: 'CreditLimit', display: 'Credit Limit' },
      { key: 'PaymentType', display: 'Payment Type' },
     
     
      // {
      //   key: 'edit',
      //   display: 'Vehicle Details',
      //   sticky: false,
      //   config: {
      //     isCollapse: true,
      //     isCollapseName:'Vehicles'
      //   },
      // },
      // {
      //   key: 'actions',
      //   display: 'Action',
      //   config: {
      //     isEdit: true,
      //   },
      // },
    ];
    this.innerColumnHeader =  [
      { key: 'Vehicleid', display: 'VehicleID' },
      { key: 'Registrationnumber', display: 'Registration No' },
      { key: 'Chassisnumber', display: 'Chassis No' },
      { key: 'Vehiclemake', display: 'Make' },
      { key: 'Vehcilemodel', display: 'Model' },
      // {
      //   key: 'actions',
      //   display: 'Action',
      //   config: {
      //     isEdit: true,
      //   },
      // },
      
    ];
    this.columns = [ 'PolicyNo', 'QuoteNo', 'CustomerName', 'StartDate', 'EndDate', 'SumInsured','PolicyDesc','CommisionAmt','Premium','CreditLimit','PaymentType'];
  }
  
  getBranchList(){
    let ReqObj = {
      "InsuranceId": this.insuranceId
    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/branchmaster`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if(data.Result){
          //let obj = [{Code:"",CodeDesc:"ALL"}];
          this.branchList = data?.Result;
          if(!this.branchValue && this.branchList.length!=0){ 
            this.branchValue = this.branchList[0].Code;
            this.getBrokerList();
          }

        }
      },
      (err) => { },
    );
  } 
  getDisplayName(){
    if(this.lang=='en') return 'CodeDesc';
    else return 'CodeDescLocal'
  }
  newQuote(){
    this.router.navigate(['/policyDetails']);
  }
  // onCommonDocumentDownload(){
  //   let startdate=this.datePipe.transform(this.startdate, "dd/MM/yyyy");
  //   let enddate=this.datePipe.transform(this.enddate, "dd/MM/yyyy");
  //   let ReqObj = {
  //     "BranchCode": this.branchValue,
  //     "EndDate": enddate,
  //     "LoginId": this.loginId,
  //     "StartDate": startdate,
  //     "ProductId": this.productId,
  //   }
  //   let urlLink = `${this.CommonApiUrl}pdf/premium/report`;
  //   this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       const link = document.createElement('a');
  //       link.setAttribute('target', '_blank');
  //       link.setAttribute('href', data?.Result?.Base64);
  //       link.setAttribute('download', data?.Result?.FileName);
  //       document.body.appendChild(link);
  //       link.click();
  //       link.remove();
  //     },
  //     (err) => { },
  //   );
  // }
  onCommonDocumentDownload(type){
    let startdate=this.datePipe.transform(this.startdate, "dd/MM/yyyy");
    let enddate=this.datePipe.transform(this.enddate, "dd/MM/yyyy");
    let ReqObj = {
      "BranchCode": this.branchValue,
      "EndDate": enddate,
      "LoginId": this.loginId,
      "StartDate": startdate,
      "ProductId": this.productId,
    }
    if(type=='Excel'){
      ReqObj['ExcelYn'] = 'Y';
    }
    else ReqObj['ExcelYn'] = null;
    let urlLink = `${this.CommonApiUrl}pdf/premium/report`;
    this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', data?.Result?.Base64);
        link.setAttribute('download', data?.Result?.FileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
    },
      (err) => { },
    );
  }
  
  getsearchs(){
    this.showgrid=false;
  }

  getsearch(){
    this.showgrid=true;
    this.getQuotes();
  }
  
getQuotes(){
  let brokertype;let brokertypes;let brokerCode:any=null,Code=null;
  if(this.userType=='Broker'){brokertype=this.userType;brokerCode=this.agencyCode;Code=this.loginId}
  else if(this.brokerCode){
    if(this.brokerCode =='99999'){
      brokertype = "99999";
      brokerCode = "";Code=""
    }
    else{
      brokertypes=this.brokerList.filter(ele => ele.Code == this.brokerCode)
      if(brokertypes){
      brokertype = brokertypes[0].Type;
      console.log('brokerrs',brokertypes,brokertype)
    }
    brokerCode=this.brokerCode;Code=this.brokerCode
    }
  }
  
  
  this.customerData=[];
  let startdate=this.datePipe.transform(this.startdate, "dd/MM/yyyy");
  let enddate=this.datePipe.transform(this.enddate, "dd/MM/yyyy");
  let ReqObj = {
    "BranchCode": this.branchValue,
    "EndDate": enddate,
    "LoginId": this.loginId,
    "StartDate": startdate,
    "ProductId": this.productId,
    "Code":Code,
    "UserType":brokertype,
    "BrokerBranchCode": "1",
    "InsuranceId": this.insuranceId,
    "ApplicationId": "1",
    "SubUserType": "Broker",
    "SourceType": "",
    "BdmCode": null,
    "Limit": 0,
    "Offset": 100
  }
  let urlLink = `${this.CommonApiUrl}pdf/getPremiumReportDetails`;
  this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
    (data: any) => {
      if(data.Result){
        this.searchSection = true;
        this.customerData=data.Result.ReportList;
        //this.custumData =this.customerData
        console.log("this.customerData",this.customerData);
        //this.Currency=this.customerData[0].Currency
      
      }
    },
    (err) => { },
  );
}
getBrokerList(){
  let appId = "1",loginId="",brokerbranchCode="";
  if(this.userType!='Issuer'){
    appId = "1"; loginId = this.brokerCode;
    brokerbranchCode = this.brokerbranchCode;
  }
  else{
    appId = this.loginId;
    loginId=this.brokerCode;
    brokerbranchCode = '';
  }
  let ReqObj = {
    "ProductId": this.productId,
    "InsuranceId": this.insuranceId,
    "LoginId": loginId,
    "ApplicationId":appId,
    "UserType":this.userType,
    "BranchCode": this.branchValue,
    "Status": "Y",
  }
  let urlLink = `${this.CommonApiUrl}api/portfoliobrokerdropdown`;
  this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
    (data: any) => {
      if(data.Result){
        let defaultObj = [{"Code":"99999",CodeDesc:"ALL",Type:"99999"}];
        this.brokerList = defaultObj.concat(data.Result);
        if(this.brokerList.length==0){this.brokerCode = ''; this.brokerList = []}
        else this.brokerCode = this.loginId;
        if(this.brokerCode!=null && this.brokerCode!=''){
          if(!this.brokerList.some(ele=>ele.Code==this.brokerCode)) this.brokerCode = this.brokerList[0].Code;
          this.getBusiness();
          //this.getQuotes();
        }
        else{
          this.brokerCode = this.brokerList[0].Code;
          this.getBusiness();
          //this.getQuotes();
        }
      }
      
    },
    (err) => { },
  );

} 
getBusiness(){
  let ReqObj = {
    "InsuranceId": this.insuranceId
  }
  let urlLink = `${this.CommonApiUrl}dropdown/reportbusinesstypes`;
this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
  (data: any) => {
    if(data.Result){
      this.buisnessList = data?.Result;
      this.getQuotes();
    }
  },
  (err) => { },
);
} 
}

