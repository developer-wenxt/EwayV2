import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from 'src/app/_services/shared.service';
import * as Mydatas from '../../../app-config.json';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`.form-container input, p-dropdown { min-width: 20rem }`]
})
export class SearchComponent implements OnInit {
  
    quoteHeader:any[]=[];
    innerColumnHeader:any[]=[];brokerCode:any;
    items:any[]=[];
    customerData:any[]=[];
    innerTableData:any[]=[];
    SearchList:any[]=[];
    public accordionchecked: boolean = true;
    public panelOpen:boolean=true;
  userDetails: any;
  loginId: any;
  agencyCode: any;
  brokerbranchCode: any;
  branchCode: any;
  productId: any;
  userType: any;
  insuranceId: any;
  innertabData:any[]=[];
  Currency:any;
  
  searchValue:any[]=[];
  search:any;
  public AppConfig: any = (Mydatas as any).default;
  public ApiUrl1: any = this.AppConfig.ApiUrl1;selectedData:any;
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl;
  public motorApiUrl:any = this.AppConfig.MotorApiUrl;
  currencyValue:any;
   dob:any;
    totalQuoteRecords: any;
    pageCount: any;
    quotePageNo: number;
    startIndex: number;
    endIndex: any;columns:any[]=[];lang:any=null;
    limit: string;branchValue:any;branchList:any[]=[];
    constructor(public router:Router,private sharedService: SharedService,private datePipe:DatePipe,
      private translate:TranslateService,private appComp:AppComponent
    ){
      this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
      this.loginId = this.userDetails.Result.LoginId;
      this.agencyCode = this.userDetails.Result.OaCode;
      this.brokerbranchCode = this.userDetails.Result.BrokerBranchCode;
      this.branchCode = this.userDetails.Result.BranchCode;
      this.productId = this.userDetails.Result.ProductId;
      this.userType = this.userDetails?.Result?.UserType;
      this.insuranceId = this.userDetails.Result.InsuranceId;
      this.appComp.getLanguage().subscribe((res:any)=>{  
        if(res) this.lang=res;
        else this.lang='en';
        this.translate.setDefaultLang(this.lang);
        });
      if(!this.lang){if(sessionStorage.getItem('language'))this.lang=sessionStorage.getItem('language');
      else this.lang='en';
      sessionStorage.setItem('language',this.lang)
      this.translate.setDefaultLang(sessionStorage.getItem('language'));}
      this.quoteHeader =  [
        {
             key: "more",
             display: "",
             config: {
               isMoreView: true,
               actions: ["VIEW"]
             }
           },
         { key:'RequestReferenceNo', display:"Request ReferenceNo"},  
         { key: 'QuoteNo', display: 'Quote No' },
         { key: 'PolicyNo', display: 'Policy No' },
         { key: 'CustomerName', display: 'Customer Name' },
         { key: 'BranchName', display: 'Branch Name' },
         { key: 'LoginId', display: 'Login Id' },
         { key: 'Status', display: 'Status' },
         { key: 'MobileNumber', display: 'Mobile No' },
         {
             key: 'actions',
             display: 'Action',
             config: {
              isSearchConfig:true
              //isViews:true
             //isEdit: true,
             //isView:true
             },
           }
    
  
       ];
  
       if(this.productId=='5' || this.productId=='46' || this.productId=='29'){
       this.innerColumnHeader=[
        { key: 'PolicyType', display: 'Policy Type' },
        { key: 'PolicyStartDate', display: 'Policy StartDate' },
        { key: 'VehicleType', display: 'VehicleType' },
        { key: 'OverallPremiumLc', display: 'Premium' },
        { key: 'QuoteDate', display: 'Quote Date' },
        { key: 'PolicyStartDate', display: 'Effective Date' },
   
    ];
  }
  
  
    if(this.productId!='5' && this.productId!='46' && this.productId!='29'){
      this.innerColumnHeader=[
        //{ key: 'PolicyType', display: 'Policy Type' },
        { key: 'OverallPremiumLc', display: 'Premium' },
        { key: 'PolicyStartDate', display: 'Policy Start Date' },
        //{ key: 'VehicleType', display: 'VehicleType' },
        //{ key: 'OverallPremiumLc', display: 'Premium' },
        { key: 'QuoteDate', display: 'Quote Date' },
        //{ key: 'PolicyStartDate', display: 'Effective Date' },
   
    ];
  
    }
  
  
  
  
  
      this.getCustomersList();
    }
    ngOnInit(): void {
        this.columns = [ 'View','ReferenceNo', 'QuoteNo', 'PolicyNo','CustomerName', 'BranchName','LoginId','Status','MobileNumber'];
    }
    getDisplayName(){
      if(this.lang=='en') return 'CodeDesc';
      else return 'CodeDescLocal'
    }
    getCustomersList(){
      let ReqObj = {
        "InsuranceId":this.insuranceId,
        "BranchCode":this.branchCode,
        "ProductId":this.productId,
      }
      let urlLink = `${this.CommonApiUrl}api/dropdown/adminsearch`;
      this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
        (data: any) => {
          console.log(data);
          if(data.Result){
            let defaultObj=[{"Code":'',"CodeDesc":"--Select--","CodeDescLocal":"--Selecione--"}]
            this.SearchList = defaultObj.concat(data?.Result);
             //this.search=sessionStorage.getItem('search');
                 
             //let sr=sessionStorage.getItem('searchvaue');
             //this.searchValue=[sr];
             //this.onCustomerSearch();
  
             //let docObj=JSON.parse(sessionStorage.getItem('search'))
             //if(docObj){
               //this.searchValue=docObj.SearchValue;
               //this.search=docObj.Search;
               //this.onCustomerSearch();
  //}
            //else{
             //this.regionValue="TZA";
                  //this.searchValue=[];
                  //this.search="";
  
             //this.getExistStateList();
            //}
             //this.onCustomerSearch()
  
          }
        },
        (err) => { },
      );
  }
  
  onNextData(element){
    this.limit = String(Number(this.limit)+1);
    this.quotePageNo = this.quotePageNo+1;
    this.startIndex = element.startCount;
    this.endIndex = element.endCount
    this.onCustomerSearch();
  }
  onPreviousData(element){
    this.limit = String(Number(this.limit)-1);
      this.quotePageNo = this.quotePageNo-1;
    this.onCustomerSearch();
  }
  onCustomerSearch(){
  let app; let login;
    if(this.userType == 'Issuer'){
      app=this.loginId;
      login=this.loginId;
    }
    else{
      app="1";
      login=this.loginId;
    }
    /*if(this.search=='EntryDate'){
  
      let dob:any = this.datePipe.transform(this.dob, "dd/MM/yyyy");
      this.searchValue=dob;
      //this.onDateFormatInEdit(this.searchValue);
    }*/
    if(this.searchValue){
      this.customerData = [];
      let ReqObj = {
    "SearchKey":this.search,
    "SearchValue": this.searchValue,
    "LoginId":login,
    "InsuranceId":this.insuranceId,
    "BranchCode": this.branchCode,
    "ProductId":this.productId,
    "UserType": this.userType,
    "ApplicationId": app
  
      }
      let urlLink = `${this.CommonApiUrl}api/adminsearchdetails`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          console.log(data);
          if(data.Result){
            if (data.Result?.length != 0) {
              this.totalQuoteRecords = data.Result.length;
              this.quotePageNo = 1;
              let startCount = 1, endCount = this.pageCount;
              startCount = endCount + 1;
              this.pageCount = 10;
             let quoteData = data.Result;
             if (quoteData.length <= this.pageCount) {
               endCount = quoteData.length
             }
             else endCount = this.pageCount;
           
              this.startIndex = startCount; this.endIndex = endCount;
              this.customerData=data?.Result;
              this.Currency=data?.Result[0].Currency;
            }
              
  
              if(this.searchValue!=undefined && this.searchValue!=null){
                let docObj = {"SearchValue":this.searchValue,"Search":this.search}
                sessionStorage.setItem('searchValue',JSON.stringify(docObj));
              }
              //this.quoteno=data.Result.QuoteNo
  
  
          }
  
        },
        (err) => { },
      );
    }
  }
  
    onCollapseToggle() {
        console.log(this.accordionchecked);
        if (this.accordionchecked) {
          this.panelOpen = true;
        } else {
          this.panelOpen = false;
    
        }
    
      }
    searchout(row:any){
        //console.log('jjjjjjj',this.productId);
        //sessionStorage.setItem('Status',this.productId);
  
        let ReqObj={
          "Search":this.search,
          "SearchValue":this.searchValue,
          "QuoteNo":row.QuoteNo,
          "RequestReferenceNo":row.RequestReferenceNo,
          "ProductId":this.productId,
          "pageFrom": 'search',
          "CustomerReferenceNo": row.CustomerReferenceNo,
          "CustomerName": row.CustomerName,
          "ProductName":row.ProductName,
          "Currency":row.Currency,
          "PolicyNo":row.PolicyNo,
          "EmiYn":row.EmiYn
        }
        sessionStorage.setItem('editCustomer',JSON.stringify(ReqObj));
     this.router.navigate(['/Home/MotorDocument']);
    }
  
    /*searchgrid(){
        this.quoteHeader =  [
            
           {
                key: "more",
                display: "MORE VIEW",
                config: {
                  isMoreView: true,
                  actions: ["VIEW"]
                }
              },
            { key: 'QuoteNo', display: 'Quote No' },
            { key: 'PolicyNo', display: 'Policy No' },
            { key: 'CustomerName', display: 'Customer Name' },
            { key: 'BranchName', display: 'Branch Name' },
            { key: 'LoginId', display: 'Login Id' },
            { key: 'Status', display: 'Status' },
            { key: 'MobileNo', display: 'Mobile No' },
            {
                key: 'actions',
                display: 'Edit',
                config: {
                isEdit: true,
                },
              }
       
  
          ];
  
  
          this.customerData=[{
            "RequestReferenceNo":"VISN10018954",
              "QuoteNo":"Q45679",
              "PolicyNo":"P-1006WB-30001-23-00003",
              "Status":"Y",
              "MotorList":[{
                "BrokerCode": "10065",
                "LoginId": "broker71",
              }]
        },
        {
          "RequestReferenceNo":"VFGDSA89765",
            "QuoteNo":"Q45679",
            "PolicyNo":"P-1006WB-30001-23-99987",
            "Status":"No",
            "MotorList":[{
              "BrokerCode": "10065",
              "LoginId": "broker71",
            }]
      },
        ];
  
       
  
        this.innerColumnHeader=[
            { key: 'PolicyType', display: 'Policy Type' },
            { key: 'PolicyStartDate', display: 'Policy StartDate' },
            { key: 'VechileType', display: 'VechileType' },
            { key: 'Premium', display: 'Premium' },
            { key: 'QuoteDate', display: 'Quote Date' },
            { key: 'EffectiveDate', display: 'Effective Date' },
       
        ];
  
        this.innerTableData= [
              
            {
                "PolicyType":"PrivateComprehensive",
                  "PolicyStartDate":"31/01/2023",
                  "VechileType":"Private"
    
            },
        ];
       
           console.log('jjjjjjjjjjj',this.innerTableData)
  
  
    }*/
  
  
  
    onInnerData(rowData){
            console.log('jjjjjjjjjj',rowData)
        rowData.MotorList =[{
          "PolicyStartDate":rowData.PolicyStartDate,
          "PolicyType":rowData.PolicyType,
          "VehicleType":rowData.VehicleType,
          "OverallPremiumLc":rowData.OverallPremiumLc,
          "QuoteDate":rowData.QuoteDate,
         "EffectiveDate":rowData.EffectiveDate,
         "Currency":rowData.Currency
        }];
  
        //rowData.MotorList=this.customerData
  
        //this.innertabData=rowData;
        console.log('hhhhhhhhhhhh',rowData.MotorList)
        /*let ReqObj = {
            "RequestReferenceNo": rowData.RequestReferenceNo
          }
          let urlLink = `${this.motorApiUrl}api/getallmotordetails`;
          this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
            (data: any) => {
              console.log(data);
              if(data.Result){
                  rowData.MotorList = data.Result;
  
                  console.log('hhhhhhhhhhhhh')
              }
            },
            (err) => { },
          );*/
          
    
        
    }
    onEditQuotes(rowData){
      sessionStorage.removeItem('vehicleDetailsList');
      sessionStorage.removeItem('QuoteStatus');
      sessionStorage.removeItem('QuoteStatus');
      sessionStorage.removeItem('endorsePolicyNo');
      sessionStorage.removeItem('homeCommonDetails');
      sessionStorage.setItem('Pagefrom',"Search");
      if(this.productId){
        
        if(rowData.QuoteNo!='' && rowData.QuoteNo!=undefined && rowData.QuoteNo!=null){
          this.checkStatus(rowData);
        }
        else{
          sessionStorage.setItem('customerReferenceNo',rowData.CustomerReferenceNo);
          if(rowData.QuoteNo!=null && rowData.QuoteNo!='' && rowData.QuoteNo!=undefined) sessionStorage.setItem('quoteNo',rowData.QuoteNo);
          sessionStorage.setItem('quoteReferenceNo',rowData.RequestReferenceNo);
          sessionStorage.setItem('TravelQuoteRefNo',rowData.RequestReferenceNo);
          sessionStorage.removeItem('quoteNo');
          this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails']);
        }
      
      }
     
  
    }
  
    checkStatus(rowData){
      let ReqObj = {
        "InsuranceId": this.insuranceId
      }
      let urlLink = `${this.CommonApiUrl}selcom/v1/checkout/order-status/${rowData.QuoteNo}`;
      
      this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
        (data: any) => {
          console.log(data);
          if(data.result=='FAIL'){
            let date = rowData.PolicyStartDate;
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate();
            let date1 = formatDate(new Date(),'yyyy-MM-dd','en_US');
            let date2 = null;
            if(date!='' && date !=null){
              if(date.split('/').length>1){
                let dates = date.split('/')
                date2 = dates[2]+'-'+dates[1]+'-'+dates[0]
              }
            } 
            if((rowData.QuoteNo!=null && rowData.QuoteNo!='' && rowData.QuoteNo!=undefined) && date2>=date1){
        
                sessionStorage.setItem('customerReferenceNo',rowData.CustomerReferenceNo);
                sessionStorage.setItem('quoteReferenceNo',rowData.RequestReferenceNo);
                sessionStorage.setItem('quoteNo',rowData.QuoteNo);
                sessionStorage.setItem('updatebar',rowData.QuoteNo);
                this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);
              
  
            }
            else{
              sessionStorage.setItem('customerReferenceNo',rowData.CustomerReferenceNo);
              if(rowData.QuoteNo!=null && rowData.QuoteNo!='' && rowData.QuoteNo!=undefined) sessionStorage.setItem('quoteNo',rowData.QuoteNo);
              sessionStorage.setItem('quoteReferenceNo',rowData.RequestReferenceNo);
              sessionStorage.setItem('TravelQuoteRefNo',rowData.RequestReferenceNo);
              sessionStorage.removeItem('quoteNo');
              this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails']);
            }
          }
          else{
            sessionStorage.setItem('customerReferenceNo',rowData.CustomerReferenceNo);
            sessionStorage.setItem('quoteReferenceNo',rowData.RequestReferenceNo);
            sessionStorage.setItem('quoteNo',rowData.QuoteNo);
              this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/make-payment']);
          }
        })
  
    }
  }
  

