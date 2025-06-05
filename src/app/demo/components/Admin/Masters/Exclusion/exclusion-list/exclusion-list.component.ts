import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import * as Mydatas from '../../../../../../app-config.json';
import { SharedService } from 'src/app/shared/shared.service';
import { LayoutService } from '@app/layout/service/layout.service';

@Component({
  selector: 'app-exclusion-list',
  templateUrl: './exclusion-list.component.html',
  styleUrls: ['./exclusion-list.component.scss']
})
export class ExclusionListComponent implements OnInit {
  tableData:any []=[];
  insuranceName: any;activeMenu="Exclusion Master ";
  public columnHeader: any[] = [];
  public AppConfig:any =(Mydatas as any).default;
  public CommonApiUrl1:any = this.AppConfig.CommonApiUrl;
  public ApiUrl1:any = this.AppConfig.ApiUrl1;
  public insuranceId:any;
  public ExclusionData:any[]=[];
  public branchList:any;branchValue:any;
  public userDetails: any;
  public sectionYn: any='N';
  public sectionValue: any;
  public sectionList: any;
  public productValue: any;
  public productList: any;
  insuranceList: { Code: string; CodeDesc: string; }[];
  loginId: any;
  MenuMasterList: any[]=[];
  ProductId: any;
  UserType: any;
  constructor(private router:Router,private sharedService: SharedService,
    private datePipe:DatePipe,private layoutService:LayoutService) {
      //this.insuranceName = sessionStorage.getItem('insuranceConfigureName');
      // this.insuranceId = sessionStorage.getItem('insuranceConfigureId');
      this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
      this.MenuMasterList = this.userDetails?.Result?.MenuMasterList;
      const user = this.userDetails?.Result;
      this.UserType = this.userDetails?.Result?.UserType;
      this.ProductId = this.userDetails?.Result?.ProductId;
      this.loginId = user?.LoginId;
      if(user.AttachedCompanies){
        if(user.AttachedCompanies.length!=0) this.insuranceId=user.AttachedCompanies[0];
      }

     }

  ngOnInit(): void {
    //sessionStorage.removeItem('ExclusionId')
    this.columnHeader = [
      'Exclusion Description',
    'Core App Code' ,'Local Name',
     'Effective Date Start' ,
     'Status','Action',
    ];

    let obj =  JSON.parse(sessionStorage.getItem('ExclusionId'));
      if(obj){
        this.insuranceId = obj.InsuranceId;
        this.branchValue=obj.BranchCode
        this.productValue=obj.ProductId
        this.sectionValue=obj.SectionId
        if(this.sectionValue=='99999'){
          this.sectionYn='N'
        }
        else{
          this.sectionYn='Y'
        }
      }
      //sessionStorage.removeItem('ExclusionId')
      this.getCompanyList();
 
    
  }
  getCompanyList(){
    let ReqObj = {
      "BrokerCompanyYn":"",
      "LoginId": this.loginId
    }
    let urlLink = `${this.ApiUrl1}master/dropdown/superadmincompanies`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
          let defaultObj = [{"Code":"99999","CodeDesc":"ALL"}]
          this.insuranceList = defaultObj.concat(data.Result);
          if(this.insuranceId){this.getBranchList('direct'); this.getCompanyProductList('direct');}
          else{this.insuranceId='99999';this.getBranchList('direct'); this.getCompanyProductList('direct');}
        }
  
      },
      (err) => { },
    );
  }
  getBranchList(type){
    if(type=='change'){this.ExclusionData=[];this.branchValue=null;this.productValue=null;this.sectionYn='N';this.sectionValue=null;}
    let ReqObj = {
      "InsuranceId": this.insuranceId
    }
    let urlLink = `${this.CommonApiUrl1}master/dropdown/branchmaster`;
  this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
    (data: any) => {
      if(data.Result){
        let obj = [{Code:"99999",CodeDesc:"ALL"}];
        this.branchList = obj.concat(data?.Result);
        if(!this.branchValue){
           this.branchValue = "99999"; }
        }
    },
    (err) => { },
  );
  }
  EditStatus(event){
    let ReqObj = {
      "ExclusionId":event.ExclusionId,
      "InsuranceId": this.insuranceId,
      "BranchCode":this.branchValue,
      "ProductId": this.productValue,
      "SectionId":this.sectionValue,
      "Status": event.ChangedStatus,
      "EffectiveDateStart":event.ChangedEffectiveDate,
    }
    let urlLink = `${this.CommonApiUrl1}master/exclusion/changestatus`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data:any) => {
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
            //         'Status Changed Successfully',
            //         'Status Updated',
            //         config);
                  window.location.reload()
          }
        },
        (err) => { },
      );
  }
  onAddSection(){
    let ReqObj = {
      "ExclusionId": null,
      "BranchCode": this.branchValue,
      "ProductId": this.productValue,
      "SectionId": this.sectionValue,
      "InsuranceId":this.insuranceId,
    }
    sessionStorage.setItem('ExclusionId', JSON.stringify(ReqObj));
    this.router.navigate(['/Admin/exclusionMaster/newExclusionDetails'])
  }
  getExistingExclusion(){
    this.ExclusionData = [];
    if(this.sectionYn=='N'){
      //this.productValue="99999";
      this.sectionValue="99999"
    }
    let ReqObj = {
    "InsuranceId":this.insuranceId,
     "BranchCode":this.branchValue,
     "ProductId":this.productValue,
     "SectionId":this.sectionValue,
    }
    let urlLink = `${this.CommonApiUrl1}master/getallexclusion`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
            this.ExclusionData = data?.Result;
        }
      },
      (err) => { },
    );
  }
  public onEditSection(event) {
    /*if(this.sectionValue='99999'){
      this.sectionYn="N"
    }
    else{
      this.sectionYn="Y"
    }*/

    let ReqObj = {
      "ExclusionId": event.ExclusionId,
      "BranchCode": this.branchValue,
      "ProductId":this.productValue,
      "SectionId":this.sectionValue,
      "InsuranceId": this.insuranceId,
    }
    sessionStorage.setItem('ExclusionId', JSON.stringify(ReqObj));

    this.router.navigateByUrl('/Admin/exclusionMaster/newExclusionDetails');
  }
  onChangeSectionYn(){
    if(this.sectionYn!='Y'){
      this.sectionValue= '99999';
    }
    else{
      this.sectionValue = null;
      this.ExclusionData = [];
    }
  }
  getSectionList(){
    this.sectionList =[];
    let ReqObj = {
      "InsuranceId":this.insuranceId,
      "ProductId":this.productValue,
    }
    let urlLink = `${this.ApiUrl1}master/dropdown/productsection`;
  this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
    (data: any) => {
      if(data.Result){
        let obj = [];
        this.sectionList = obj.concat(data?.Result);
        let secObj = JSON.parse(sessionStorage.getItem('ExclusionId'))
          if (secObj) {
            this.sectionValue = secObj?.SectionId;
          }
         else{
          this.sectionValue = '99999';
        }
      }

    },
    (err) => { },
  );
  }
  getCompanyProductList(type){
    if(type=='change'){this.ExclusionData=[];this.sectionYn='N';this.sectionValue=null;}
    let ReqObj ={
      "InsuranceId":this.insuranceId,
      "Limit":"0",
      "Offset":"100000"
    }
    let urlLink = `${this.ApiUrl1}master/getallcompanyproducts`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
       this.productList = data?.Result;
        let obj =[]
        this.productList = obj.concat(data?.Result)
        // if(!this.productValue){ this.productValue = "5";
        // this.getSectionList();
        // this.getExistingExclusion() }
        if(this.productValue){
          this.getSectionList(); this.getExistingExclusion()  }
        }

      },
      (err) => { },
    );
  }
  onAddSectionList(){
    let ReqObj ={
    "ExclusionId":null,
      "BranchCode": this.branchValue,
      "ProductId":this.productValue,
     "SectionId":this.sectionValue
    }
    sessionStorage.setItem('ValueGet', JSON.stringify(ReqObj));
    this.router.navigate(['/Admin/exclusionMaster/AddExclusionDetails'])
  }
  getMenu(rowData){
    this.layoutService.setMaster(rowData);
 }
}
