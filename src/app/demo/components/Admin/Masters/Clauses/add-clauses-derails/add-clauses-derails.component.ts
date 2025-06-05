import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import * as Mydatas from '../../../../../../app-config.json';
import { SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-add-clauses-derails',
  templateUrl: './add-clauses-derails.component.html',
  styleUrls: ['./add-clauses-derails.component.scss']
})
export class AddClausesDerailsComponent implements OnInit {

  WarrantyHeader:any[]=[];clausesData:any[]=[];
  insuranceName: string;
  userDetails: any;
  insuranceId: any;
  loginId: any;
  public AppConfig: any = (Mydatas as any).default;
  public ApiUrl1: any = this.AppConfig.ApiUrl1;
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl;
  sectionList: any[];
  sectionValue: any;
  productValue: any;
  branchValue: any;clausesList:any[]=[];

  constructor(
    private sharedService: SharedService, private router: Router) {
      this.insuranceName = sessionStorage.getItem('insuranceConfigureName');

     // this.productId =  sessionStorage.getItem('companyProductId');
      let userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
    if(userDetails){

      this.insuranceId = userDetails?.Result?.InsuranceId;
      this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
      const user = this.userDetails?.Result;
      this.insuranceId = user.LoginBranchDetails[0].InsuranceId;
      this.loginId = userDetails?.Result?.LoginId;
      let docObj = JSON.parse(sessionStorage.getItem('ClausesIdValue'))
        if(docObj){
           this.productValue = docObj?.ProductId,
          this.branchValue = docObj?.BranchCode,
          this.sectionValue = docObj?.SectionId;
        };

    }

  }

  ngOnInit(): void {
    this.getExistingDoc();

  }

  ongetBack(){
    this.router.navigate(['/Admin/clausesMaster'])
  }


  getExistingDoc(){
    let ReqObj = {
      "BranchCode": this.branchValue,
      "InsuranceId": this.insuranceId,
      "ProductId": this.productValue,
      "SectionId":this.sectionValue
    }
    let urlLink = `${this.CommonApiUrl}master/getallnonselectedclauses`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
          this.WarrantyHeader = [
            {
              key: 'EntryDate',
              display: 'Select',
              config: {
                isChecked: true,
                model:'isChecked'
              },
            },
            { key: 'ClausesDescription', display: 'Clauses Description' },
            { key: 'EffectiveDateStart', display: 'Effective Date' },
            { key: 'CoreAppCode', display: 'Core App Code' },
            { key: 'Status', display: 'Status' },

          ];
            this.clausesData = data.Result.map(x=>({
              ...x,
              isChecked:false
            }));
        }
      },
      (err) => { },
    );
  }
  onSelectCustomer(rowData){
    console.log("RowData",rowData);
    if(rowData.isChecked){
        let entry =  {
          "CreatedBy": this.loginId,
          "InsuranceId": this.insuranceId,
          "ProductId": this.productValue,
          "SectionId":this.sectionValue,
          "ClausesId": rowData.ClausesId,
          "BranchCode":this.branchValue
        }
        this.clausesList.push(entry);
    }
    else{
      let index = this.clausesList.findIndex(ele=>ele.CoverId==rowData.CoverId);
      this.clausesList.splice(index,1);
    }
    console.log("Cover List",this.clausesList);

    }
  onProceed(){
    if(this.clausesList.length!=0){
      let ReqObj = this.clausesList;

    let urlLink = `${this.CommonApiUrl}master/insertclauseslist`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
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
            //         'Clauses Details Inserted Successfully',
            //         'Clauses Details',
            //         config);
                    this.router.navigate(['/Admin/clausesMaster']);
          }

        },
        (err) => { },
      );
    }
    else{
      /*let type: NbComponentStatus = 'danger';
      const config = {
        status: type,
        destroyByClick: true,
        duration: 4000,
        hasIcon: true,
        position: NbGlobalPhysicalPosition.TOP_RIGHT,
        preventDuplicates: false,
      };
      this.toastrService.show(
        "Please Select Minimum Two Cover to Include",
        "Add Cover",
        config);*/
    }
    //this.router.navigate(['/Admin/companyList/companyConfigure/productDetails/documentDetails']);
  }
  }

