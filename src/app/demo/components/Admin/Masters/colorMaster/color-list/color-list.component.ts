import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as Mydatas from '../../../../../../app-config.json';
import { SharedService } from 'src/app/shared/shared.service';
import { NewcolorDetailsComponent } from '../newcolor-details/newcolor-details.component';
import { LayoutService } from '@app/layout/service/layout.service';



@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {
  MenuMasterList: any[]=[];
  activeMenu:any='Color Master';insuranceName:any;insuranceId:any;
  public AppConfig: any = (Mydatas as any).default;
  public ApiUrl1: any = this.AppConfig.ApiUrl1;
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl;
  public columnHeader: any[] = [];
  ColorData: any[]=[];
  BranchCode: any;userDetails:any;
  title:string|any;
  insuranceList: { Code: string; CodeDesc: string; }[];
  loginId: any;
  constructor(private router:Router,private sharedService: SharedService,private layoutService:LayoutService,) {
    //this.insuranceName = sessionStorage.getItem('insuranceConfigureName');
    this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
    this.MenuMasterList = this.userDetails?.Result?.MenuMasterList;
    this.MenuMasterList = this.userDetails?.Result?.MenuMasterList;
    const user = this.userDetails?.Result;
    this.loginId = user?.LoginId;
    if(user.AttachedCompanies){
      if(user.AttachedCompanies.length!=0) this.insuranceId=user.AttachedCompanies[0];
    }
   }

  ngOnInit(): void {
    let Obj = JSON.parse(sessionStorage.getItem('editColorDetails'));
    if(Obj){
      this.insuranceId = Obj?.InsuranceId;
    }
    this.columnHeader = [
    'Color Code' ,
    'Color Desc' ,'Local Name',
     'EffectiveDateStart' ,
    'Status' ,
      'Action',
    ];

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
          if(this.insuranceId){this.getExistingColor();}
        }
  
      },
      (err) => { },
    );
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


  onAddColor(){
    let obj = {
      "InsuranceId": this.insuranceId,
      'ColorId':null
    }
    sessionStorage.setItem('editColorDetails',JSON.stringify(obj));
    this.router.navigate(['/Admin/colorMaster/newColorDetails'])
  }
  onEditColor(event){
    let obj = {
      "InsuranceId": this.insuranceId,
      'ColorId':event.ColorId
    }
    sessionStorage.setItem('editColorDetails',JSON.stringify(obj));
    this.router.navigate(['/Admin/colorMaster/newColorDetails'])
    
  }
  EditStatus(event){
    let ReqObj = {
      "ColorId":event.ColorId,
      "Status": event.ChangedStatus,
      "InsuranceId":this.insuranceId,
      "BranchCode": "99999"
    }
    let urlLink = `${this.CommonApiUrl}master/color/changestatus`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data:any) => {
        console.log(data);
        let res:any=data;
        if(data.Result){
          /*let type: NbComponentStatus = 'success';
                const config = {
                  status: type,
                  destroyByClick: true,
                  duration: 4000,
                  hasIcon: true,
                  position: NbGlobalPhysicalPosition.TOP_RIGHT,
                  preventDuplicates: false,
                };
                this.toastrService.show(
                  'Status Changed Successfully',
                  'Status Updated',
                  config);
                window.location.reload()*/
        }
      },
      (err) => { },
    );
  }
  getExistingColor(){
    let ReqObj = {
      "InsuranceId":this.insuranceId,
      "BranchCode":"99999",
    }
    let urlLink = `${this.CommonApiUrl}master/getallmotorcolor`;

    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
            this.ColorData = data?.Result;
        }
      },
      (err) => { },
    );
  }
  getMenu(rowData){
    this.layoutService.setMaster(rowData);
 }
}
