import { Component, OnInit } from '@angular/core';
import { NewmakeDetailsComponent } from '../newmake-details/newmake-details.component';
//import { NbComponentStatus, NbDialogService, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

import { Router } from '@angular/router';
import * as Mydatas from '../../../../../../app-config.json';
import { SharedService } from 'src/app/shared/shared.service';
import { LayoutService } from '@app/layout/service/layout.service';


@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.scss']
})
export class MakeListComponent implements OnInit {

  activeMenu:any='Make Master';insuranceName:any;insuranceId:any;
  public AppConfig: any = (Mydatas as any).default;
  public ApiUrl1: any = this.AppConfig.ApiUrl1;
  MakeData: any[]=[];
  BranchCode: any;
  title:string|any;
  MakeId:any;
  public columnHeader: any[] = [];
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl;
  userDetails: any;
  branchList:any[]=[];
  branchValue: any;
  insuranceList: any[]=[];
  loginId: any;

  MenuMasterList: any[]=[];
  constructor(private router:Router,private sharedService: SharedService,private layoutService:LayoutService /*, private dialogService: NbDialogService,private toastrService:NbToastrService */)
 {  this.insuranceName = sessionStorage.getItem('insuranceConfigureName');
 this.insuranceId = sessionStorage.getItem('insuranceConfigureId');
 this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
 this.MenuMasterList = this.userDetails?.Result?.MenuMasterList;
      const user = this.userDetails?.Result;
      this.loginId = user?.LoginId;
      if(user.AttachedCompanies){
        if(user.AttachedCompanies.length!=0) this.insuranceId=user.AttachedCompanies[0];
      }

}

  ngOnInit(): void {
    let makeObj = JSON.parse(sessionStorage.getItem('MakeId'));
    if(makeObj){
      this.insuranceId = makeObj?.InsuranceId;
      this.branchValue = makeObj?.BranchCode;
    }
    this.columnHeader = [
      //{ key: 'MakeId', display: 'Make Id' },
       'Make Name En','Local Name',
      'EffectiveDateStart',
      'Status' ,'Action',
    ];

    this.getCompanyList();

    //this.getExistingColor();
  }
  onRedirect(value){
    if(value=='Product') this.router.navigate(['/Admin/companyList/companyConfigure'])
    if(value=='Dropdown') this.router.navigate(['/Admin/companyList/companyConfigure/existingDropdowns'])
    if(value=='Occupation') this.router.navigate(['/Admin/companyList/companyConfigure/existingOccupations'])
    if(value=='Branch') this.router.navigate(['/Admin/companyList/companyConfigure/branchDetails'])
    if(value=='Region') this.router.navigate(['/Admin/companyList/companyConfigure/regionList'])
    if(value=='State') this.router.navigate(['/Admin/companyList/companyConfigure/stateList'])
    if(value=='City') this.router.navigate(['/Admin/companyList/companyConfigure/cityList']);
    if(value=='Currency') this.router.navigate(['/Admin/companyList/companyConfigure/currencyList']);
    if(value=='PolicyType') this.router.navigate(['/Admin/companyList/companyConfigure/policyTypeDetails'])
    if(value=='Color') this.router.navigate(['/Admin/companyList/companyConfigure/colorList']);
    if(value=='Make') this.router.navigate(['/Admin/companyList/companyConfigure/MakeList']);
    if(value=='Model') this.router.navigate(['/Admin/companyList/companyConfigure/ModelList']);
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
          if(this.insuranceId){this.getBranchList('direct');}
          else{this.insuranceId='99999';this.getBranchList('direct');}
        }
  
      },
      (err) => { },
    );
  }
  onAddColor(){
    //sessionStorage.removeItem('MakeId');
    let ReqObj = {
      "MakeId":null,
      "InsuranceId":this.insuranceId,
      "BranchCode": this.branchValue,
    }
    sessionStorage.setItem('MakeId', JSON.stringify(ReqObj));

    this.router.navigate(['/Admin/makeMaster/newMakeDetails'])
  }
  onEditMake(event){

    let ReqObj = {
      "MakeId": event.MakeId,
      "InsuranceId":this.insuranceId,
      "BranchCode": this.branchValue,
    }
    sessionStorage.setItem('MakeId', JSON.stringify(ReqObj));
   //sessionStorage.setItem('MakeId',event.MakeId);
   this.router.navigate(['/Admin/makeMaster/newMakeDetails'])
  }
  EditStatus(event){
    let ReqObj = {
      "MakeId": event.MakeId,
      "Status": event.ChangedStatus,
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchValue,
      "EffectiveDateStart":event.ChangedEffectiveDate
    }
    let urlLink = `${this.CommonApiUrl}master/motormake/changestatus`;
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

  getBranchList(type){
    if(type=='change'){this.branchValue=null;this.MakeData=[];}
    let ReqObj = {
      "InsuranceId": this.insuranceId
    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/branchmaster`;
  this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
    (data: any) => {
      if(data.Result){
        let obj = [{Code:"99999",CodeDesc:"ALL"}];
        this.branchList = obj.concat(data?.Result);
        let docObj = JSON.parse(sessionStorage.getItem('MakeId'));
        if(docObj){
          this.branchValue = docObj?.BranchCode;
        this.getExistingColor() }
        else{
          this.branchValue="99999";
          this.getExistingColor()
        }
        //if(!this.branchValue){ this.branchValue = "99999"; this.getCompanyProductList() }
      }
    },
    (err) => { },
  );
  }

  getExistingColor(){
    let ReqObj = {
      "InsuranceId":this.insuranceId,
      "BranchCode":this.branchValue,
    }
    let urlLink = `${this. CommonApiUrl}master/getallmotormake`;

    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
            this.MakeData = data?.Result;
        }
      },
      (err) => { },
    );
  }
  getMenu(rowData){
    this.layoutService.setMaster(rowData);
 }
}



