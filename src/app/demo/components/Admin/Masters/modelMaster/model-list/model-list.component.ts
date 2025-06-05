import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Mydatas from '../../../../../../app-config.json';
import { SharedService } from 'src/app/shared/shared.service';
import { NewmodelDetailsComponent } from '../newmodel-details/newmodel-details.component';
import { LayoutService } from '@app/layout/service/layout.service';
//import { NbComponentStatus, NbDialogService, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';


@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {
  MenuMasterList: any[]=[];
  activeMenu:any='Model Master';insuranceName:any;insuranceId:any;
  ModelId:any;
  public AppConfig: any = (Mydatas as any).default;
  public ApiUrl1: any = this.AppConfig.ApiUrl1;
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl;
  public columnHeader: any[] = [];
  ModelData: any[]=[];insuranceList:any[]=[];
  BranchCode: any;
  title:string|any;
  ModelList: any[]=[];MakeValue:any;
  MakeId: any;
  userDetails: any;
  branchList:any[]=[];
  branchValue:any;
  loginId: any;
  constructor(private router:Router,private sharedService: SharedService,private layoutService:LayoutService ) {
    this.insuranceName = sessionStorage.getItem('insuranceConfigureName');
    //this.insuranceId = sessionStorage.getItem('insuranceConfigureId'); 
    this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
    this.MenuMasterList = this.userDetails?.Result?.MenuMasterList;
    const user = this.userDetails?.Result;
    this.loginId = user?.LoginId;
    if(user.AttachedCompanies){
      if(user.AttachedCompanies.length!=0) this.insuranceId=user.AttachedCompanies[0];
    }
  }

  ngOnInit(): void {
    this.columnHeader = ['Model Name' ,
   'Core APP Code' , 'Local Name','EffectiveDateStart' ,'Status' ,
      'Action'
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
          if(this.insuranceId){this.getBranchList('direct');}
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
  onAddModel(){
    /*this.dialogService.open(NewmodelDetailsComponent, {
      context: {
        title: 'Model Details',
        "MakeId" : this.MakeValue
      },
    });*/
    let ReqObj = {
      "MakeId": this.MakeId,
      "InsuranceId":this.insuranceId,
      "BranchCode": this.branchValue,
      "ModelId": null,
      "BodyId": null
    }
    sessionStorage.setItem('editModelId',JSON.stringify(ReqObj));

    this.router.navigate(['/Admin/modelMaster/newModelDetails'])

  //this.router.navigate(['/Admin/companyList/companyConfigure/existingOccupations/updateOccupationDetails'])
  }


  getModelList(){
    let ReqObj = {

      "InsuranceId" :this.insuranceId,
      "BranchCode" : "99999"

    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/motormake`;
  this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
    (data: any) => {
      if(data.Result){
        let obj = [];
        this.ModelList = obj.concat(data?.Result);

        let docObj = JSON.parse(sessionStorage.getItem('MakeDetails'))
        if(docObj){ this.MakeId= docObj?.Make;
          console.log('LLLLLLLLLL',this.MakeId);
          this. getExistingModel();}
        else{ this.MakeId='5'; this.getExistingModel();}
        //if(!this.MakeId){ this.MakeId = "5"; this.getExistingModel() }
      }
    },
    (err) => { },
  );
  }

  getExistingModel(){
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode":this.branchValue,
      "MakeId":this.MakeId

    }
    let urlLink = `${this.CommonApiUrl}master/getallmotormakemodel`;

    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
            this.ModelData = data?.Result;
            if(this.MakeId!=undefined && this.MakeId!=null){
              let docObj = {"Make":this.MakeId,"BranchCode":this.branchValue};
              sessionStorage.setItem('MakeDetails',JSON.stringify(docObj));
            }


        }
      },
      (err) => { },
    );
  }
  onEditModel(rowdata){
    let entry = {
      "MakeId" :this.MakeId,
      "BranchCode" :this.branchValue,
      "InsuranceId":this.insuranceId,
      "ModelId":rowdata.ModelId,
      "BodyId":rowdata.BodyId,
    }
    sessionStorage.setItem('editModelId',JSON.stringify(entry));
    this.router.navigate(['/Admin/modelMaster/newModelDetails'])

  }


  getBranchList(type){
    if(type=='change'){this.ModelData = [];this.branchValue=null;this.MakeId=null}
    let ReqObj = {
      "InsuranceId": this.insuranceId

    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/branchmaster`;
  this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
    (data: any) => {
      if(data.Result){
        let obj = [{Code:"99999",CodeDesc:"ALL"}];
        this.branchList = obj.concat(data?.Result);
        let docObj = JSON.parse(sessionStorage.getItem('editModelId'))
        if(docObj){
          this.branchValue = docObj?.BranchCode;
          this.insuranceId = docObj?.InsuranceId;
          this.getModelList()
          //this.getCompanyProductList();
        //this.getIndustryList()
      }
        else{
          this.branchValue="99999";
          this.getModelList()
          //this.getCompanyProductList();
          //this.getIndustryList()
        }
        //if(!this.branchValue){ this.branchValue = "99999"; this.getCompanyProductList() }
      }
    },
    (err) => { },
  );
  }

  EditStatus(event){
    let ReqObj = {
      "MakeId":event.MakeId,
      "InsuranceId":this.insuranceId,
      "BranchCode":event.BranchCode,
      "ModelId":event.ModelId,
      "BodyId":event.BodyId,
      "EffectiveDateStart":event.ChangedEffectiveDate,
      "Status":event.ChangedStatus,
    }
    let urlLink = `${this.CommonApiUrl}master/motormakemodel/changestatus`;
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
  getMenu(rowData){
    this.layoutService.setMaster(rowData);
 }
}




