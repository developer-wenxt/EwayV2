import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as Mydatas from '../../../../../app-config.json';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AuthService } from '../../../auth/Auth/auth.service';
import { SharedService } from 'src/app/_services/shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../dialog/dialog.component';
import { MessageService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { TranslateService } from '@ngx-translate/core';

declare var $:any;


@Component({
  selector: 'app-excess-discount',
  templateUrl: './excess-discount.component.html',
  styleUrls: ['./excess-discount.component.css'],
  standalone: false,
  //imports: [NgbPopoverModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [MessageService]
})
export class ExcessDiscountComponent implements OnInit {

  closeResult: string;
  tooltip:boolean=false;
  coverList:any[]=[];discountList:any[]=[];
  HtmlCard:boolean=false;
  public dataSource: any;columnHeader: any[] = [];
  //@ViewChild(NbPopoverDirective) popover;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) private paginator!: MatPaginator;
  sortProperty: any = 'AllotedYN';loadingList:any[]=[];
  sortDirection: any = 'desc';taxList:any[]=[];
  filterValue: any = '';innerColumnHeader:any[]=[];
  dataExt: any[] = [];selectedRowData:any=null;
  ClausesDataId:any[]=[];
  columnsToDisplay = [
    'Id',
    'Username',
    'Gender',
    'DateOfBirth',
    'KnownAs',
    'Created',
    'LastActive',
    'City',
    'Country'
  ];
  public AppConfig: any = (Mydatas as any).default;
  public ApiUrl1: any = this.AppConfig.ApiUrl1;
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl;
  public motorApiUrl:any = this.AppConfig.MotorApiUrl;
  innerDisplayedColumns = ['Id', 'Username', 'City', 'Country'];
  displayedColumns: string[] = ['CoverName', 'PremiumAfterDiscount'];
  vehicleId: string;quoteRefNo: string;isMannualReferal:any="N";
  emiPeriod:any="0";
  beforeDiscount: any;afterDiscount: any;havePromoCode:any;
  premiumExcluedTax: any; premiumIncluedTax: any;promoCode:any;
  selectedCoverList: any[]=[];totalPremium: any=0;
  motorDetails: any;customerDetails: any;
  vehicleDetails: any;panelOpen:boolean=false;custPanelOpen:boolean=false;
  title: any;clientName: any;agencyCode:any;remarks:any;
  dateOfBirth: any;emailId: any;branchCode:any;showSection:boolean = false;
  mobileNo: any;idNumber: any;userType:any;insuranceId:any;
  clientType: string;userDetails:any;branchList:any;statusValue:any="";
  currencyCode: any="";loginId:any;productId:any;quoteNo:any;rejectedReason:any;
  vehicleList: any[]=[];config = { multi: false };vehicleDetailsList:any[]=[];
  vehicleData: any;adminSection:boolean=false;statusList:any[]=[];
  MinimumPremium: any;emiYN:any="N"; gridshow=false;
  requestReferenceNo:any;typeList: any[]=[];typeValue:any;motorTypeList: any[]=[];bodyTypeValue:any;vehicleSI:any;accessoriesSI:any;windShieldSI:any;tppdSI:any;cityValue:any;
  classList:any[]=[];borrowerList:any[]=[];bankList:any[]=[];motorUsageValue: any;motorUsageList: any[]=[];classValue: any;collateralYN:any="N";
  collateralValue: boolean;coverSection:boolean=false;
  firstLossPayee: any="";
  borrowerValue: any;
  fleetYN: string;
  fleetValue: boolean;
  noOfVehicles: any="";
  noOfCompPolicy: any="";
  claimRatio: any="";
  policyEndDate: any;
  claimsYN: any;
  policyStartDate:any;
  gpsYn: any;
  noOfDays:any;
  brokerCode:any="";
  brokerLoginId: any="";subuserType: any="";applicationId: any="";
  brokerbranchCode: any;
  acExecutiveId:any="";
  commissionType:any;
  drivenBy:any="D";currentIndex:number;
  myPopover:boolean=false;
  IsmodelShow:boolean=false
  emi3MonthsList:any[]=[];emi6MonthsList:any[]=[];
  EmiList:any[]=[];
  Emilist1:any[]=[];
  Emilist2:any[]=[];
  EmiDetails1:any[]=[];
  currencyValue:any=""; exchangeRate:any="0.98"; collateralName: any="";
  premium: any;
  EmiDetails: any[]=[];
  yearlySection: boolean;
  nineMonthSection: boolean;
  sixMonthSection: boolean;
  threeMonthSection: boolean;
  fiveMonthSection:boolean;eightMonthSection:boolean;
  emiSection: boolean;
  FiveMonthSection:boolean;
EmiYn:boolean;
emiyn="N";
  minDate: Date;
  maxDate: Date;
  endMinDate: Date;
  PromoCode: any;
  coverlist:any[]=[];
  ClausesColumnHeader:any[]=[];ClausesData:any[]=[];
  ClauseColumnHeader:any[]=[];
  ExclusionColumnHeader:any[]=[];ExclusionData:any[]=[];
  WarrantyColumnHeader:any[]=[];WarrteData:any[]=[];
  WarrteColumnHeader:any[]=[];WarrantyData:any[]=[];
  ExclusionsColumnHeader:any[]=[];
  ExclusionDataId: any[]=[];
  WarrantyDataId: any[]=[];
  WarrantiesColumnHeader:any[]=[];
  insertClause:any[]=[];
  CoverList:any[]=[];

  onClauses:boolean= false;onExclusion:boolean= false;onWars:boolean= false;onWarranty:boolean= false;
  CoveList:boolean=true;
  viewList: any;
  referralRemarks: any[]=[];
  adminRemarks: any[]=[];
  localCurrency: any;
  localPremiumCost: any=0;
  clause: boolean;
  viewDropDown: any;
  VehicleSectionId: any[];
  insert:any[];
  clauses: any;
  warranty: boolean;
  Exclusion: boolean;
  common1:any[]=[];
  common2:any[]=[];
  common3:any[]=[];
  common4:any[]=[];

  Wcommon:any[]=[];
  Ecommon:any[]=[];
  inserts: any[] = [];
  jsonList:any[]=[];
  row:any;
  json:any[]=[];
  //ExclusionList:any[]=[];
  ExclusionList:any[]=[];
  tempVehicleId: any;
  terms:any[]=[];
  tempData: any;
  closes:any;
  button: boolean;
  ddata: any;
  Id: string;
  Ids: string;
  id: string;
  newcoverlist:any[]=[];
  newendrosementcoverlist:any[]=[];
  productName: any;
  endorsementSection: boolean;
  endorsementId: any;
  enableFieldsList: any;
  endorseCovers: boolean;
  endorsementDetails: any;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
  p: Number = 1;
  s: Number = 1;
  pa:Number=1;
  endorseEffectiveDate: any;
  coverModificationYN: any='N';
  endorsementFeePercent: any;
  enableRemoveVehicle: any=false;
  CoverHeader:any[]=[];
  CoverName: any;
  endorseAddOnCovers: any;
  enableSections: any;
  endorseSIModification: any;
  endorsementType: any;
  showGrid:boolean=false;
  enableAddVehicle: any;
  selectedVehId: any;
  selectedCoverId: any;
  selectedSectionId: any;
  uwReferralSection: boolean=false;
  selectedVehicleList: any;
  ratePercent: any;
  excessPercent: any;
  excessAmount: any;
  calcType: any=null;
  sumInsured: any;
  dependantTaxList: any;
  premiumBeforeTax: number;
  discountEndtSection: boolean=false;
  differencePremium: any;
  differenceSI: any;otpSection=false;
  customerReferenceNo: any=null;
  otpGenerated: null;
  OtpBtnTime: any=null;
  customerObj: any;
  otpId: any;
  OtpBtnEnable: boolean;
  otpValue: string;
  sampleloginId: any;
  loginType: any;modifyCommissionYN:any='N';
  endorsementCategory: any;commissionPercent:any=null;
  commissionValue: any=null;
  SourceType: any;
  emistatus: any;
  emipolicytype: any;endorseShortCode:any=null;
  minimumPremiumYN: any;finalizeYN:any='N';
  factorViewList: any[]=[];
  factorPremiumDetails: any=null;
  showDiscountSection:boolean=false;
  showExcessSection: boolean=false;modifyOptions:any[]=[];
  fleetCoverDetails: any;
  basePremium: any;factorDetailModal:boolean = false;
  premiumIncludedTax: any;
  premiumExcludedTax: any;
  benefitCoverList: any;lang:any=null;
  termsSectionList: { SectionId: string; SectionName: string; }[];
  termsSectionId: string;
  showCoverList: boolean=false;newAddClauses: boolean=false;newAddExclusion: boolean=false;newAddWarranty: boolean=false;
  actualRatePercent: any;
  minRatePercent: any;
  coverRateError: boolean;
  minRateYN: any;
  coverBenefitDisplay: boolean;
  fromWorkFlow: any=null;excessList:any[]=[];
  workFlowStatusList: any[]=[];
  ProposalId: any;
  constructor(public sharedService: SharedService,private authService: AuthService,private router:Router,private modalService: NgbModal,
    private appComp:AppComponent,private translate:TranslateService,
    private datePipe:DatePipe,public dialog: MatDialog) {
    this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
    let loginType = sessionStorage.getItem('resetLoginDetails');
    this.userType = this.userDetails?.Result?.UserType;
    this.subuserType = sessionStorage.getItem('typeValue');
    this.fromWorkFlow = sessionStorage.getItem('FromWorkFlow');
    this.ProposalId = sessionStorage.getItem('ProposalId');
    this.agencyCode = this.userDetails.Result.OaCode;
    this.branchCode = this.userDetails.Result.BranchCode;
    this.branchList = this.userDetails.Result.LoginBranchDetails;
    this.productId = this.userDetails.Result.ProductId;
    this.productName =  this.userDetails.Result.ProductName;
    this.insuranceId = this.userDetails.Result.InsuranceId;
    this.brokerbranchCode = this.userDetails.Result.BrokerBranchCode;
    this.loginType = this.userDetails.Result.LoginType;
    let finalize = sessionStorage.getItem('FinalizeYN');
      if(finalize) this.finalizeYN = finalize;
    if(loginType){
      sessionStorage.removeItem('resetLoginDetails');
      let sectionType = sessionStorage.getItem('riskSection');
      if(sectionType=='additional' ) this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/domestic-risk-details'])
      else if(this.productId=='4') this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/travel-quote-details'])
      else if(this.productId!='5' && this.productId!='46' && this.productId!='29') this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/domestic-risk-details'])
      else  this.router.navigate(['/quotation/plan/main/document-info']);
    }
   
    console.log("Received Session",this.userDetails)
    this.localCurrency = this.userDetails.Result.CurrencyId;
    this.loginId = this.userDetails.Result.LoginId;
    this.sampleloginId = this.loginId;
    
    sessionStorage.removeItem('vehicleDetailsList');
      let endorseObj = JSON.parse(sessionStorage.getItem('endorseTypeId'))
      if(endorseObj){
        this.endorsementSection = true;
        console.log("Endorse obj",endorseObj)
        this.endorsementCategory = endorseObj.Category;
        this.endorsementId = endorseObj.EndtTypeId;
        this.endorseShortCode = endorseObj?.EndtShortCode;
        this.endorseEffectiveDate = endorseObj?.EffectiveDate;
        this.enableFieldsList = endorseObj.FieldsAllowed;
        let entry = this.enableFieldsList.some(ele=>ele=='Covers' || ele=='RemoveSection'  || ele=='AddOnCovers' || ele=='AddCovers' || ele=='removeVehicle');
        if(entry || this.endorseShortCode == '846' ) this.coverModificationYN = 'Y';
        else this.coverModificationYN = 'N';
        if(this.endorseShortCode!='42'){
          this.endorseCovers = this.enableFieldsList.some(ele=>ele=='Covers' && this.endorseShortCode=='852');
          this.endorseSIModification = this.enableFieldsList.some(ele=>(ele=='Covers' && this.endorseShortCode=='850'));
          this.endorseAddOnCovers = this.enableFieldsList.some(ele=>ele=='AddOnCovers' || ele=='AddCovers');
          this.enableAddVehicle = this.enableFieldsList.some(ele=>ele=='addVehicle');
          this.enableRemoveVehicle = this.enableFieldsList.some(ele=>ele=='removeVehicle');
          this.enableSections = this.enableFieldsList.some(ele=>ele=='RemoveSection');
        }
        else{
          this.endorseSIModification = false;
          this.endorseCovers = false;
          this.enableAddVehicle = false;
          this.endorseAddOnCovers = false;
          this.enableRemoveVehicle = false;
          this.enableSections = false;
        }
      }
      else{
        this.endorsementSection = false;
        this.endorseCovers = false;
      }
    this.statusList = [
      {"Code":"RP","CodeDesc":"Referral Pending"},
      {"Code":"RA","CodeDesc":"Referral Approved"},
      {"Code":"RR","CodeDesc":"Referral Rejected"},
      {"Code":"RE","CodeDesc":"Referral Re-Quote"},
      {"Code":"REV","CodeDesc":"Referal Reverted"},
    ]
    this.innerColumnHeader =  [
      {
        key: 'SubCoverId',
        display: '',
        config: {
          select:true
        },
      },
      { key: 'SubCoverName', display: 'SubCoverName' },
      { key: 'Rate', display: 'Rate' },
      { key: 'MinimumPremium', display: 'Minimum' },
      { key: 'PremiumAfterDiscount', display: 'AfterDiscount' },
      { key: 'PremiumIncludedTax', display: 'IncludedTax' },
      // {
      //   key: 'actions',
      //   display: 'Action',
      //   config: {
      //     isEdit: true,
      //   },
      // },

    ];
    this.emi3MonthsList = [
      {
          "EmiMonth": "0",
          "InstallmentAmount": "42400.00",
          "InstallmentDesc": "Advance Amount",
          "DueDate": "10/01/2023"
      },
      {
          "EmiMonth": "1",
          "InstallmentAmount": "42400.00",
          "InstallmentDesc": "Installment Amount",
          "DueDate": "10/02/2023"
      },
      {
          "EmiMonth": "2",
          "InstallmentAmount": "42400.00",
          "InstallmentDesc": "Installment Amount",
          "DueDate": "10/03/2023"
      },
      {
          "EmiMonth": "3",
          "InstallmentAmount": "42400.00",
          "InstallmentDesc": "Installment Amount",
          "DueDate": "10/04/2023"
      }
    ];
    this.emi6MonthsList = [
      {
          "EmiMonth": "0",
          "InstallmentAmount": "24456.67",
          "InstallmentDesc": "Advance Amount",
          "DueDate": "10/01/2023"
      },
      {
          "EmiMonth": "1",
          "InstallmentAmount": "24456.67",
          "InstallmentDesc": "Installment Amount",
          "DueDate": "10/02/2023"
      },
      {
          "EmiMonth": "2",
          "InstallmentAmount": "24456.67",
          "InstallmentDesc": "Installment Amount",
          "DueDate": "10/03/2023"
      },
      {
          "EmiMonth": "3",
          "InstallmentAmount": "24456.67",
          "InstallmentDesc": "Installment Amount",
          "DueDate": "10/04/2023"
      },
      {
          "EmiMonth": "4",
          "InstallmentAmount": "24456.67",
          "InstallmentDesc": "Installment Amount",
          "DueDate": "10/05/2023"
      },
      {
          "EmiMonth": "5",
          "InstallmentAmount": "24456.67",
          "InstallmentDesc": "Installment Amount",
          "DueDate": "10/06/2023"
      },
      {
          "EmiMonth": "6",
          "InstallmentAmount": "24456.67",
          "InstallmentDesc": "Installment Amount",
          "DueDate": "10/07/2023"
      }
  ]
    // this.vehicleId = sessionStorage.getItem('editVehicleId');


    //this.vehicleDetails = JSON.parse(sessionStorage.getItem('vehicleDetails'));
    // this.coverList = JSON.parse(sessionStorage.getItem('coverObject'));
    // const data:any[] = this.coverList.map(x=>({
    //   CoverageType:x.CoverageType
    // }));

    // const groupCoverList:any[] = [];
    // for (let index = 0; index < data.length; index++) {
    //   const element = data[index];
    //   let list:any[] = this.coverList.filter((ele:any)=> ele.CoverageType === element.CoverageType);

    //   groupCoverList.push(...list);

    // }
    this.quoteRefNo = sessionStorage.getItem('quoteReferenceNo');
    this.requestReferenceNo = this.quoteRefNo;
    this.minDate = new Date();
    var d = this.minDate;
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    this.maxDate = new Date(year, month, day+90);
    let quoteNo = sessionStorage.getItem('quoteNo');
    if(quoteNo) this.quoteNo = quoteNo;
    
    let referenceNo =  sessionStorage.getItem('customerReferenceNo');
    if(referenceNo){
      this.getCustomerDetails(referenceNo);
      
      //this.viewCondition('direct');
    }
    let quoteStatus = sessionStorage.getItem('QuoteStatus');
    if(quoteStatus=='AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRE'){
      if(quoteStatus=='AdminRP') this.statusValue ="RP";
      else if(quoteStatus =='AdminRA') this.statusValue ="RA";
      else if(quoteStatus =='AdminRE') this.statusValue ="RE";
        this.adminSection = true;
    }
    else{
      if(quoteStatus) this.statusValue = quoteStatus;
      this.adminSection = false;
    }
      if(this.productId=='5'  || this.productId=='59' || this.productId=='46' || this.productId=='29'){
        //let vehicles = JSON.parse(sessionStorage.getItem('vehicleDetailsList'));
        let vehicles:any;
        if(this.statusValue=='RA'){
          this.getUpdatedVehicleDetails();
        }
        else{
          if(vehicles && (this.productId=='5' || this.productId=='46' || this.productId=='29')){
            let vehicleList=[];
            let i=0;
            for(let veh of vehicles){
              if(i==0) veh['Collapse'] = true;
              else veh['Collapse'] = false;
              i+=1;
              vehicleList.push(veh);
              if(i==vehicles.length){
                  this.vehicleDetailsList = vehicleList;
                  if(this.vehicleDetailsList.some(ele=>ele.ManualReferalYn=='Y') && !this.adminSection){  
                    this.isMannualReferal = "Y";
                    console.log('MannnnnnnnReferral', this.isMannualReferal);
                  }
                  if(this.statusValue=='RP' && !this.adminSection){
                    if(!this.vehicleDetailsList.some(ele=>ele.Status=='RP') && this.isMannualReferal!='Y'){
                      this.statusValue = null;
                      sessionStorage.removeItem('QuoteStatus')
                    }
                  }
                  this.selectedRowData = this.vehicleDetailsList[0];
                  this.getTermsSectionList();
                  this.onSelectSection();
                  this.coverSection = true;
                  // if(((this.uwReferralSection && !this.adminSection  && (this.statusValue=='RP' || this.statusValue==null || this.statusValue==undefined))  || (!this.adminSection && this.statusValue=='RP' && this.vehicleDetailsList.some(ele=>ele.Status=='RP')) || (this.statusValue=='RP' && !this.adminSection && this.vehicleDetailsList.some(ele=>ele.Status=='RP')))){
                  //   this.columnHeader = [
                  //     {
                  //       key: 'selected',
                  //       display: 'Select',
                  //       config: {
                  //         isChecked:true
                  //       },
                  //     },
                  //     { key: 'CoverName', display: 'Cover Name' },
                  //     { key: 'SumInsured', display: 'Sum Insured' }
                  //   ]
                  // }
                  // else{
                    this.columnHeader = [
                      {
                        key: 'selected',
                        display: 'Select',
                        config: {
                          isChecked:true
                        },
                      },
                      { key: 'CoverName', display: 'Cover Name' },
                      { key: 'SumInsured', display: 'Sum Insured' },
                      { key: 'PremiumAfterDiscount', display: 'After Discount' },
                      { key: 'PremiumIncludedTax', display: 'Included Tax' },
              
                    ]
              
     
                   
                  //}
                  //this.EmiInstallment();
              }
            }
          }
          else{

            this.getUpdatedVehicleDetails();
          }
        }
      }
      else if(this.productId!='5' && this.productId!='59' && this.productId!='46' && this.productId!='29'){
        // let coverListObj = JSON.parse(sessionStorage.getItem('travelCoverListObj'));
        // if(coverListObj){
        //   this.getCoverList(coverListObj);
        // }
        this.quoteRefNo = sessionStorage.getItem('quoteReferenceNo');
        this.requestReferenceNo = this.quoteRefNo;
        let quoteNo = sessionStorage.getItem('quoteNo');
        if(quoteNo) this.quoteNo = quoteNo;
        this.getUpdatedVehicleDetails();
      }

      if(this.fromWorkFlow!=null)this.getSatusForWorkFlow();
   }

  ngOnInit(): void {
    let chassisNo = sessionStorage.getItem('vehChassisNo');
    //this.vehicleId = String(this.vehicleDetailsList.Vehicleid);
    // if(chassisNo) this.getVehicleDetails(chassisNo);
    this.appComp.getLanguage().subscribe((res:any)=>{  
      if(res) this.lang=res;
      else this.lang='en';
      this.translate.setDefaultLang(this.lang);
    });
    if(!this.lang){if(sessionStorage.getItem('language'))this.lang=sessionStorage.getItem('language');
      else this.lang='en';
      sessionStorage.setItem('language',this.lang)
      this.translate.setDefaultLang(sessionStorage.getItem('language'));}
     this.checkSelectedCovers();

     console.log('Final Status Value',this.statusValue)
    //this.currencyCode="TZS"
     //this.getCoverList(coverListObj);
    //  this.ClausesColumnHeader =[
    //   { key: 'ClausesId', display: 'Clauses Id' },
    //   { key: 'ClausesDesc', display: 'Clauses Description' },
    //   { key: 'DocRefNo', display: 'Document Reference No' },
    // ];
    //  this.ClauseColumnHeader =[
    //   { key: 'ClausesId', display: 'Clauses Id' },
    //   { key: 'ClausesDesc', display: 'Clauses Description' },
    // ];
    // this.ExclusionColumnHeader =[

    //   { key: 'ExclusionId', display: 'Exclusion Id' },
    //   { key: 'ExclusionDesc', display: 'Exclusion Description' },
    //   { key: 'DocRefNo', display: 'Document Reference No' },
    // ];
    // this.ExclusionsColumnHeader =[

    //   { key: 'ExclusionId', display: 'Exclusion Id' },
    //   { key: 'ExclusionDesc', display: 'Exclusion Descriptions' },

    // ];
    // this.WarrantyColumnHeader =[
    //   { key: 'WarrantyId', display: 'Warranty Id' },
    //   { key: 'WarrantyDesc', display: 'Warranty Description' },
    //   { key: 'DocRefNo', display: 'Document Reference No' },
    // ];
    // this.WarrantiesColumnHeader =[
    //   { key: 'WarrantyId', display: 'Warranty Id' },
    //   { key: 'WarrantyDesc', display: 'Warranty Description' },

    // ];
    // this.WarrteColumnHeader =[
      // { key: 'WarrateId', display: 'Warrate Id' },
      // { key: 'WarrateDesc', display: 'Warrate Description' },
      // { key: 'DocRefNo', display: 'Document Reference No' },
    //];
    this.ViewDropDown();

    // $('#exampleModal').on('shown.bs.modal', function () {
    //   $('#myInput').trigger('focus')
    // })

    if(this.userType=='Broker'){
      this.button=false
    }
    else{
      this.button=true
    }


  //   $(function () {
  //     $("#exampleModal").click(function () {
  //         $("#exampleModal").modal("hide");
  //     });
  // });


  }
  getCustomerDetails(referenceNo){
    let ReqObj = {
      "CustomerReferenceNo": referenceNo
    }
    let urlLink = `${this.CommonApiUrl}api/getcustomerdetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
          this.customerDetails = data.Result;
          this.clientName = this.customerDetails?.ClientName
          this.idNumber = this.customerDetails?.IdNumber;
          if(this.customerDetails){
            this.title = this.customerDetails?.TitleDesc;
            this.clientName = this.customerDetails?.ClientName;
            this.dateOfBirth = this.customerDetails?.DobOrRegDate;
            if(this.customerDetails?.PolicyHolderType == '1') this.clientType = "Individual";
            if(this.customerDetails?.PolicyHolderType == '2') this.clientType = "Corporate";
            this.emailId = this.customerDetails?.Email1;
            this.mobileNo = this.customerDetails?.MobileNo1;
            this.idNumber = this.customerDetails?.IdNumber;
          }
        }
      },
      (err) => { },
    );
  }
  getSatusForWorkFlow(){
    let ReqObj = {
       "CompanyId":this.insuranceId,
        "BranchCode": "99999",
        "ProductId":this.productId,
        "LoginId":this.loginId,    
    }
    let urlLink = `${this.CommonApiUrl}dropdown/referralactiondropdown`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
          this.workFlowStatusList = data.Result;
        }
      },
      (err) => { },
    );
  }
  close(modal) {
    //menu.hide();
    this.IsmodelShow=true;
    this.myPopover=false;
    // $('#mymodalEdit').modal('hide');
    //this.modalService.close(id);
  }
  getCoverList(coverListObj){
    this.currencyCode = coverListObj?.Currency;
    //console.log('HCCCCCCCCCCC',this.currencyCode)
    let createdBy = this.loginId
    let groupList = coverListObj?.GroupDetails;
    let vehicleList = [];
    if(groupList.length!=0){
      let i=0;
      for(let group of groupList){
        let effectiveDate=null,policyEndDate,coverModificationYN='N';
        if(this.endorsementSection){
          effectiveDate = this.endorseEffectiveDate;
          let entry = this.enableFieldsList.some(ele=>ele=='Covers' || ele=='RemoveSection' || ele=='AddOnCovers' || ele=='AddCovers' || ele=='removeVehicle');
          if(entry) coverModificationYN = 'Y';
          else coverModificationYN = 'N';
        }
        else {
  
        }
        let ReqObj ={
          "EffectiveDate":null,
          "PolicyEndDate":null,
          "InsuranceId": this.insuranceId,
          "BranchCode": this.branchCode,
          "AgencyCode": this.agencyCode,
          "SectionId": coverListObj?.SectionId,
          "ProductId": this.productId,
          "MSRefNo": coverListObj?.MSRefNo,
          "VehicleId": group.TravelId,
          "CdRefNo": coverListObj?.CdRefNo,
          "VdRefNo": coverListObj?.VdRefNo,
          "CreatedBy": createdBy,
          "productId": this.productId,
          "Passengers":group.GroupMembers,
          "RequestReferenceNo": coverListObj?.RequestReferenceNo,
          "CoverModification": coverModificationYN
        }
        let urlLink = `${this.CommonApiUrl}calculator/calc`;
        this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
          (data: any) => {
            let entry = data;
            entry['DestinationCountry'] = coverListObj.DestinationCountry;
            entry['TravelStartDate'] = coverListObj.TravelStartDate;
            entry['TravelEndDate'] = coverListObj.TravelEndDate;
            let groupEntry = groupList.filter(ele=>ele.GroupId==data?.VehicleId);
            if(groupEntry){
              entry['Passengers'] = groupEntry[0].GroupMembers;
              entry['TravelId'] = entry.VehicleId;
            }
            vehicleList.push(entry);
            i+=1;
            if(i==groupList.length){
              this.vehicleDetailsList = vehicleList;
              this.checkSelectedCovers();
  
            }
          },
          (err) => { },
        );
      }
    }
  
  }
    onChangeBodyType(){
      if(this.bodyTypeValue=='7') this.cityValue='';
    }
    onChangeClassType(){
      this.vehicleSI ="0";this.accessoriesSI="0",this.windShieldSI="0";this.tppdSI = "0";
    }
    /*CommaFormatted() {
  
      // format number
      if (this.getTotalCost) {
       this.getTotalCost = this.getTotalCost.replace(/\D/g, "")
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }}*/
      getInsuranceTypeList(){
        let ReqObj = {
          "ProductId": this.productId,
          "InsuranceId": this.insuranceId,
          "BranchCode": this.branchCode
        }
        let urlLink = `${this.ApiUrl1}master/dropdown/productsection`;
        this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
          (data: any) => {
            console.log(data);
            if(data.Result){
                this.typeList = data.Result;
                this.getInsuranceClassList();
            }
  
          },
          (err) => { },
        );
      }
      onVehicleValueChange (args) {
        if (args.key === 'e' || args.key === '+' || args.key === '-') {
          return false;
        } else {
          return true;
        }
      }
      getMotorTypeList(type,motorValue,vehicleUsage){
        let ReqObj = {
          "SectionId": this.typeValue,
          "InsuranceId": this.insuranceId,
          "BranchCode": this.branchCode
        }
        let urlLink = `${this.CommonApiUrl}master/dropdown/bodytype`;
        this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
          (data: any) => {
            console.log(data);
            if(data.Result){
              if(type=='change') this.cityValue = null;
                this.motorTypeList = data.Result;
                this.bodyTypeValue = motorValue;
                this.getMotorUsageList(vehicleUsage);
            }
  
          },
          (err) => { },
        );
      }
  
  getInsuranceClassList(){
    let loginId = null;
      if(this.userType!='Issuer'){
        loginId=this.loginId;
      }
      else{
        loginId = this.vehicleDetailsList[0].LoginId;
      }
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "BranchCode": this.branchCode,
      "LoginId":this.loginId
    }
    let urlLink = `${this.ApiUrl1}`;
    this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
      (data: any) => {
        if(data.Result){
            this.classList = data.Result;
            this.getBorrowerList();
        }
      },
      (err) => { },
    );
  }
  getBorrowerList(){
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/borrowertype`;
    this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
            this.borrowerList = data.Result;
            this.getBankList();
        }
  
      },
      (err) => { },
    );
  }
  getBankList(){
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/bankmaster`;
    this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
            this.bankList = data.Result;
            //this.getCurrencyList();
        }
  
      },
      (err) => { },
    );
  }
  onStartDateChange(){
    if(this.productId!='4'){
      var d = this.policyStartDate;
      var year = d.getFullYear();
      var month = d.getMonth();
      var day = d.getDate();
      this.endMinDate = new Date(this.policyStartDate);
      this.policyEndDate = new Date(year + 1, month, day-1);
      this.onChangeEndDate();
    }
  }
  getMotorUsageList(vehicleValue){
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "SectionId": this.typeValue,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}api/dropdown/vehicleusage`;
    this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if(data.Result){
            this.motorUsageList = data.Result;
            this.motorUsageValue = vehicleValue;
        }
  
      },
      (err) => { },
    );
  }
      getEditVehicleDetails(rowData,type,modal){
        let ReqObj =  {
          "RequestReferenceNo": this.requestReferenceNo,
           "Idnumber": this.customerDetails?.IdNumber,
          "Vehicleid": rowData.Vehicleid
         }
         let urlLink = `${this.motorApiUrl}api/getmotordetails`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.vehicleDetails = data.Result;
              this.myPopover=true;
  
              if(type=='edit'){
                this.setVehicleValues(type);
                this.open(modal);
              }
            }
          },
          (err) => { },
        );
        this.getInsuranceTypeList();
      }
      onViewFactorDetails(modal){
        let ReqObj = {
          "RequestReferenceNo" : this.quoteRefNo, 
          "VehicleId": this.selectedRowData?.Vehicleid,
          "ProductId": this.productId,
          "InsuranceId": this.insuranceId,
          "SectionId" : this.selectedRowData?.SectionId
        }
        let urlLink = `${this.CommonApiUrl}api/getfactorratedetailsList`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.factorViewList = data.Result.FactorCalculationRes;
              this.factorPremiumDetails = data.Result.FactorResultRes;
              this.factorDetailModal = true;
            }
          },
          (err) => { },
        );
      }
      setVehicleValues(type){
        this.vehicleId = String(this.vehicleDetails?.Vehicleid);
        this.typeValue = this.vehicleDetails?.Insurancetype;
        this.classValue = this.vehicleDetails?.InsuranceClass;
        if(type=='edit'){
          this.getMotorTypeList('direct',this.vehicleDetails?.VehicleType,this.vehicleDetails?.Motorusage)
          this.bodyTypeValue = this.vehicleDetails?.VehicleType;
          this.motorUsageValue = this.vehicleDetails?.Motorusage;
          this.collateralYN = this.vehicleDetails?.CollateralYn;
          if(this.collateralYN=='Y'){
            this.collateralValue = true;
            this.collateralYN = this.vehicleDetails?.CollateralName;
            this.firstLossPayee = this.vehicleDetails?.FirstLossPayee;
            this.borrowerValue = this.vehicleDetails?.BorrowerType;
          }
          if(this.vehicleDetails?.FleetOwnerYn){
            if(this.fleetYN!='')
            this.fleetYN = this.vehicleDetails?.FleetOwnerYn;
            if(this.fleetYN=='Y'){
              this.fleetValue = true;
              this.noOfVehicles = this.vehicleDetails?.NoOfVehicles;
              this.noOfCompPolicy = this.vehicleDetails?.NoOfComprehensives;
              this.claimRatio = this.vehicleDetails?.ClaimRatio
            }
          }
        }
        else{
  
        }
        this.cityValue = this.vehicleDetails?.CityLimit;
        if(this.vehicleDetails?.PolicyStartDate != null ){
          var dateParts = this.vehicleDetails?.PolicyStartDate.split("/");
          // month is 0-based, that's why we need dataParts[1] - 1
          this.policyStartDate = dateParts[2]+'-'+dateParts[1]+'-'+dateParts[0];
          console.log("Policy Start",this.policyStartDate)
          //this.policyStartDate = dateObject.toString()
        }
        if(this.vehicleDetails?.PolicyEndDate != null ){
          var dateParts = this.vehicleDetails?.PolicyEndDate.split("/");
  
    // month is 0-based, that's why we need dataParts[1] - 1
          this.policyEndDate = dateParts[2]+'-'+dateParts[1]+'-'+dateParts[0];
          this.onChangeEndDate();
        }
        if(type=='edit'){
          this.claimsYN = this.vehicleDetails?.NcdYn;
          this.gpsYn = this.vehicleDetails?.Gpstrackinginstalled;
          this.vehicleSI = String(this.vehicleDetails?.SumInsured);
          this.CommaFormatted();
          this.windShieldSI = String(this.vehicleDetails?.WindScreenSumInsured);
          this.WindSICommaFormatted();
          this.tppdSI = String(this.vehicleDetails?.TppdIncreaeLimit);
          this.TppdCommaFormatted();
          this.accessoriesSI = String(this.vehicleDetails?.AcccessoriesSumInsured);
          this.accessoriesCommaFormatted();
          this.getVehicleDetails(this.vehicleDetails?.Chassisnumber);
        }
  
  
      }
      onChangeEndDate(){
        const oneday = 24 * 60 * 60 * 1000;
        const momentDate = new Date(this.policyEndDate); // Replace event.value with your date value
        const formattedDate = moment(momentDate).format("YYYY-MM-DD");
        const formattedDatecurrent = new Date(this.policyStartDate);
        console.log(formattedDate);
  
      console.log(formattedDatecurrent);
      this.noOfDays = Math.round(Math.abs((Number(momentDate)  - Number(formattedDatecurrent) )/oneday)+1);
      }
      CommaFormatted() {
  
        // format number
        if (this.vehicleSI) {
         this.vehicleSI = this.vehicleSI.replace(/\D/g, "")
           .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }}
        TppdCommaFormatted() {
  
          // format number
          if (this.tppdSI) {
           this.tppdSI = this.tppdSI.replace(/\D/g, "")
             .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }}
        accessoriesCommaFormatted() {
  
          // format number
          if (this.accessoriesSI) {
           this.accessoriesSI = this.accessoriesSI.replace(/\D/g, "")
             .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
        WindSICommaFormatted() {
          // format number
          if (this.windShieldSI) {
           this.windShieldSI = this.windShieldSI.replace(/\D/g, "")
             .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
  
    canbeChecked(rowData){
      return rowData.selected;
    }
    get keys() {
      return this.columnHeader.map(({ key }) => key);
    }
    get innerKeys() {
      return this.innerColumnHeader.map(({ key }) => key);
    }
    ngOnChanges() {
  
    }
    toggle(index: number) {
      let entry = this.vehicleDetailsList[index];
      if (!this.config.multi) {
        this.vehicleDetailsList.filter(
          (menu, i) => i == index
        ).forEach(menu => menu.Collapse = !menu.Collapse);
        this.vehicleList.filter(
          (menu, i) => i != index
        ).forEach(menu => menu.Collapse = false);
      }
    }
    toggleAccordian(){
      $(document).ready(function(){
        $(".accordion-button").click(function(){
          $(".referal-status").toggle();
        });
      });
    }
    onChangeSubCover(subCover,cover,vehicle,event,element){
      if(subCover==undefined || subCover==null){
        if(element){
          subCover = cover.SubCovers.find(ele=>ele.SubCoverId==element.value)
        }
      }
      if(subCover.MultiSelectYn=='Y'){
          if(event){
            if(this.selectedCoverList.length!=0){
              let entry = this.selectedCoverList.filter(ele=>ele.Id==vehicle.VehicleId && ele.LocationId==vehicle.LocationId );
              if(entry.length==0){
                let id=null;
                if(cover.RiskDetails?.RiskId) id= cover.RiskDetails?.RiskId; else id=cover.VehicleId
                let element = {
                    "Covers": [
                      {
                        "CoverId": cover.CoverId,
                        "SubCoverId": subCover.SubCoverId,
                        "SubCoverYn": "Y",
                        //"isReferal": rowData.isReferal
                      }
                    ],
                    "LocationId": vehicle.LocationId,
                    "Id": id,
                    "SectionId": cover.SectionId
                  }
                cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
                cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
                cover.selected = true;
                for(let sub of cover.SubCovers){
                  if(sub.SubCoverId==subCover.SubCoverId){
                    cover['isReferal'] = sub.isReferal;
                    cover['SumInsured'] = sub.SumInsured;
                    cover['Loadings'] = sub.Loadings;
                    cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
                    cover['MinimumPremium'] = sub.MinimumPremium;
                    cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
                    cover['Discounts'] = sub?.Discounts;
                    cover['CalcType'] = sub?.CalcType;
                    cover['Rate'] = sub?.Rate;
                    cover['ExcessPercent'] = sub?.ExcessPercent;
                    cover['ExcessAmount'] = sub?.ExcessAmount;
                    cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
                    cover['ExchangeRate'] = sub?.ExchangeRate;
                    cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
                    cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
                    cover['Taxes'] = sub.Taxes;
                    cover['SubCoverId'] = sub.SubCoverId
                    sub['selected'] = true;
                  }
                  else{
                    sub['selected'] = false;
                  }
                }
                subCover['selected'] = true;
                this.selectedCoverList.push(element);
                console.log("Selected Covers",this.selectedCoverList)
                if(vehicle?.totalPremium){
                  if(cover.Endorsements!=null){
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  }
                  else{
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
                  }
                
                }
                else{
                  if(cover.Endorsements!=null){
                    vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  }
                  else{
                    vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                    vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                  }
                  
                }
                // if(vehicle?.totalPremium){
                //   vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.PremiumIncludedTax;
                //   vehicle['totalPremium'] =  vehicle['totalPremium']+cover.PremiumIncludedTax;
                // }
                // else{
                //   vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                //   vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                // }
                  console.log("Total Premium",cover,vehicle)
                this.getTotalVehiclesCost();
                //this.totalPremium = this.totalPremium+rowData.PremiumIncludedTax
              }
              else{
               let sectionEntry = entry.find(ele=>ele.SectionId == cover.SectionId);
               if(sectionEntry == undefined){
                let id=null;
                if(cover.RiskDetails?.RiskId) id= cover.RiskDetails?.RiskId; else id=cover.VehicleId
                let element = {
                  "Covers": [
                    {
                      "CoverId": cover.CoverId,
                      "SubCoverId": subCover.SubCoverId,
                      "SubCoverYn": "Y",
                      //"isReferal": rowData.isReferal
                    }
                  ],
                  "LocationId": vehicle.LocationId,
                  "Id": id,
                  "SectionId": cover.SectionId
                }
                cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
                cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
  
                cover.selected = true;
                for(let sub of cover.SubCovers){
                  if(sub.SubCoverId==subCover.SubCoverId){
                    cover['isReferal'] = sub.isReferal;
                    cover['SumInsured'] = sub.SumInsured;
                    cover['Loadings'] = sub.Loadings;
                    cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
                    cover['MinimumPremium'] = sub.MinimumPremium;
                    cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
                    cover['Discounts'] = sub?.Discounts;
                    cover['CalcType'] = sub?.CalcType;
                    cover['Rate'] = sub?.Rate;
                    cover['ExcessPercent'] = sub?.ExcessPercent;
                    cover['ExcessAmount'] = sub?.ExcessAmount;
                    cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
                    cover['ExchangeRate'] = sub?.ExchangeRate;
                    cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
                    cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
                    cover['Taxes'] = sub.Taxes;
                    cover['SubCoverId'] = sub.SubCoverId
                    sub['selected'] = true;
                  }
                  else{
                    sub['selected'] = false;
                  }
                }
                subCover['selected'] = true;
                this.selectedCoverList.push(element);
                if(vehicle?.totalPremium){
                  if(cover.Endorsements!=null){
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  }
                  else{
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
                  }
                
                }
                else{
                  if(cover.Endorsements!=null){
                    vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  }
                  else{
                    vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                    vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                  }
                  
                }
                  // if(vehicle?.totalPremium){
                  //   vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.PremiumIncludedTax;
                  //   vehicle['totalPremium'] =  vehicle['totalPremium']+cover.PremiumIncludedTax;
                  // }
                  // else{
                  //   vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                  //   vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                  // }
                  console.log("Total Premium",cover,vehicle)
                  this.getTotalVehiclesCost();
               }
               else{
                 console.log("Sections",sectionEntry)
                let covers:any[] = sectionEntry.Covers;
                let findCover = covers.filter(ele=>ele.CoverId==cover.CoverId);
                if(findCover.length==0) {
                  let newEntry = {
                    "CoverId": cover.CoverId,
                    "SubCoverId":subCover.SubCoverId,
                    "SubCoverYn": "Y"
                    //"isReferal": rowData.isReferal
                  }
                  cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
                  cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
                  cover.selected = true;
                  for(let sub of cover.SubCovers){
                    if(sub.SubCoverId==subCover.SubCoverId){
                      cover['isReferal'] = sub.isReferal;
                      cover['SumInsured'] = sub.SumInsured;
                      cover['Loadings'] = sub.Loadings;
                      cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
                      cover['MinimumPremium'] = sub.MinimumPremium;
                      cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
                      cover['Discounts'] = sub?.Discounts;
                      cover['CalcType'] = sub?.CalcType;
                      cover['Rate'] = sub?.Rate;
                      cover['ExcessPercent'] = sub?.ExcessPercent;
                      cover['ExcessAmount'] = sub?.ExcessAmount;
                      cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
                      cover['ExchangeRate'] = sub?.ExchangeRate;
                      cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
                      cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
                      cover['Taxes'] = sub.Taxes;
                      cover['SubCoverId'] = sub.SubCoverId
                      sub['selected'] = true;
                    }
                    else{
                      sub['selected'] = false;
                    }
                  }
                  subCover['selected'] = true;
                  sectionEntry.Covers.push(newEntry);
                  if(vehicle?.totalPremium){
                    if(cover.Endorsements!=null){
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                    }
                    else{
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
                    }
                  
                  }
                  else{
                    if(cover.Endorsements!=null){
                      vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                    }
                    else{
                      vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                      vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                    }
                    
                  }
                  console.log("Total Premium",cover,vehicle)
                  this.getTotalVehiclesCost();
                }
                else{
                  console.log("Finded Covers",findCover,sectionEntry)
                  let subCoverEntry = findCover.filter(ele=>ele.SubCoverId==subCover.SubCoverId);
                  if(subCoverEntry.length==0){
                    let newEntry = {
                      "CoverId": cover.CoverId,
                      "SubCoverId":subCover.SubCoverId,
                      "SubCoverYn": "Y"
                      //"isReferal": rowData.isReferal
                    }
                    cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
                    cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
                    cover.selected = true;
                    for(let sub of cover.SubCovers){
                      if(sub.SubCoverId==subCover.SubCoverId){
                        cover['isReferal'] = sub.isReferal;
                        cover['SumInsured'] = sub.SumInsured;
                        cover['Loadings'] = sub.Loadings;
                        cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
                        cover['MinimumPremium'] = sub.MinimumPremium;
                        cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
                        cover['Discounts'] = sub?.Discounts;
                        cover['CalcType'] = sub?.CalcType;
                        cover['Rate'] = sub?.Rate;
                        cover['ExcessPercent'] = sub?.ExcessPercent;
                        cover['ExcessAmount'] = sub?.ExcessAmount;
                        cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
                        cover['ExchangeRate'] = sub?.ExchangeRate;
                        cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
                        cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
                        cover['Taxes'] = sub.Taxes;
                        cover['SubCoverId'] = sub.SubCoverId
                        sub['selected'] = true;
                      }
                      else{
                        sub['selected'] = false;
                      }
                    }
                    subCover['selected'] = true;
                    sectionEntry.Covers.push(newEntry);
                    if(vehicle?.totalPremium){
                      if(cover.Endorsements!=null){
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                      }
                      else{
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
                      }
                    
                    }
                    else{
                      if(cover.Endorsements!=null){
                        vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                      }
                      else{
                        vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                        vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                      }
                      
                    }
                    console.log("Total Premium",cover,vehicle)
                    this.getTotalVehiclesCost();
                  }
                  
                }
               }
              }
            }
            else{
              let id=null;
              if(cover.RiskDetails?.RiskId) id= cover.RiskDetails?.RiskId; else id=cover.VehicleId
              let element = {
                "Covers": [
                  {
                    "CoverId": cover.CoverId,
                    "SubCoverId": subCover.SubCoverId,
                    "SubCoverYn": "Y",
                    //"isReferal": rowData.isReferal
                  }
                ],
                "LocationId": vehicle.LocationId,
                "Id": id,
                "SectionId": cover.SectionId
              }
              cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
              cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
  
              cover.selected = true;
              for(let sub of cover.SubCovers){
                if(sub.SubCoverId==subCover.SubCoverId){
                  cover['isReferal'] = sub.isReferal;
                  cover['SumInsured'] = sub.SumInsured;
                  cover['Loadings'] = sub.Loadings;
                  cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
                  cover['MinimumPremium'] = sub.MinimumPremium;
                  cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
                  cover['Discounts'] = sub?.Discounts;
                  cover['CalcType'] = sub?.CalcType;
                  cover['Rate'] = sub?.Rate;
                  cover['ExcessPercent'] = sub?.ExcessPercent;
                  cover['ExcessAmount'] = sub?.ExcessAmount;
                  cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
                  cover['ExchangeRate'] = sub?.ExchangeRate;
                  cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
                  cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
                  cover['Taxes'] = sub.Taxes;
                  cover['SubCoverId'] = sub.SubCoverId
                  sub['selected'] = true;
                }
                else{
                  sub['selected'] = false;
                }
              }
              subCover['selected'] = true;
              this.selectedCoverList.push(element);
              if(vehicle?.totalPremium){
                if(cover.Endorsements!=null){
                  vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                }
                else{
                  vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTax;
                  vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
                }
                
              }
              else{
                if(cover.Endorsements!=null){
                  vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                }
                else{
                  vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                  vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                }
                
              }
              this.getTotalVehiclesCost();
            }
          }
          else{
            if(this.selectedCoverList.length!=0){
              let entry = this.selectedCoverList.filter(ele=>ele.Id==vehicle.VehicleId && ele.LocationId==vehicle.LocationId);
              console.log("Entry List",entry);
              let sectionEntry = entry.find(ele=>ele.SectionId==cover.SectionId);
              sectionEntry.Covers = sectionEntry.Covers.filter(ele=>ele.SubCoverId!=subCover.SubCoverId )
              let covers:any[] = sectionEntry.Covers;
              let findCover = covers.filter(ele=>ele.CoverId==cover.CoverId);
              subCover['selected'] = false;
              
              cover.PremiumIncludedTax = cover.PremiumIncludedTax-subCover.PremiumIncludedTax;
              cover.PremiumIncludedTax = cover.PremiumIncludedTax-subCover.PremiumIncludedTax;
              if(vehicle?.totalPremium==null || vehicle?.totalPremium==undefined){ vehicle['totalLcPremium']=0;vehicle['totalPremium']=0 }
              if(vehicle?.totalPremium){
                vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - subCover.PremiumIncludedTax;
                vehicle['totalPremium'] =  vehicle['totalPremium']-subCover.PremiumIncludedTax;
                if(findCover.length==0){cover['selected'] = false;  vehicle['totalPremium'] =  vehicle['totalPremium']-cover.PremiumIncludedTax; vehicle['totalLcPremium'] =  vehicle['totalLcPremium']-cover.PremiumIncludedTax;}
              }
              else{
                if(findCover.length!=0){
                  vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                  vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                }
              }
              this.getTotalVehiclesCost();
            }
          }
      }
      else{
        if(this.selectedCoverList.length!=0){
          let entry = this.selectedCoverList.filter(ele=>ele.Id==vehicle.VehicleId && ele.LocationId==vehicle.LocationId);
          if(entry.length==0){
            let id=null;
            if(cover.RiskDetails?.RiskId) id= cover.RiskDetails?.RiskId; else id=cover.VehicleId
            let element = {
                "Covers": [{ "CoverId": cover.CoverId,"SubCoverId": subCover.SubCoverId,"SubCoverYn": "Y" }],
                "LocationId": vehicle.LocationId,"Id": id,"SectionId": cover.SectionId
              }
              if((cover.PremiumIncludedTax!=null && cover.PremiumIncludedTax!='0' && cover.PremiumIncludedTax!=undefined && cover.CoverageType!='A')){
                
                vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - cover.PremiumIncludedTax;
                vehicle['totalPremium'] =  vehicle['totalPremium'] - cover.PremiumIncludedTax; 
                cover.PremiumIncludedTax = 0;
                cover.PremiumIncludedTax=0;
              }
              cover.PremiumIncludedTax = subCover.PremiumIncludedTaxLC;
              cover.PremiumIncludedTax = subCover.PremiumIncludedTax;
            // cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
            // cover.PremiumIncludedTax = cover.PremiumIncludedTax+subCover.PremiumIncludedTax;
            cover['selected'] = true;
            for(let sub of cover.SubCovers){
              if(sub.SubCoverId==subCover.SubCoverId){
                cover['isReferal'] = sub.isReferal;
                cover['SumInsured'] = sub.SumInsured;
                cover['Loadings'] = sub.Loadings;
                cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
                cover['MinimumPremium'] = sub.MinimumPremium;
                cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
                cover['Discounts'] = sub?.Discounts;
                cover['CalcType'] = sub?.CalcType;
                cover['Rate'] = sub?.Rate;
                cover['ExcessPercent'] = sub?.ExcessPercent;
                cover['ExcessAmount'] = sub?.ExcessAmount;
                cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
                cover['ExchangeRate'] = sub?.ExchangeRate;
                cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
                cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
                cover['Taxes'] = sub.Taxes;
                cover['SubCoverId'] = sub.SubCoverId;
                sub['selected'] = true;
              }
              else{
                sub['selected'] = false;
              }
            }
            subCover['selected'] = true;
            this.selectedCoverList.push(element);
            if(vehicle?.totalPremium){
              if(cover.Endorsements!=null){
                vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
              }
              else{
                vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTaxLC;
                vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
              }
            
            }
            else{
              if(cover.Endorsements!=null){
                vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
              }
              else{
                vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                vehicle['totalPremium'] =  cover.PremiumIncludedTax;
              }
            }
            
            this.getTotalVehiclesCost();
          }
          else{
            
           let sectionEntry = entry.find(ele=>ele.SectionId == cover.SectionId);
           if(sectionEntry == undefined){
            let id=null;
            if(cover.RiskDetails?.RiskId) id= cover.RiskDetails?.RiskId; else id=cover.VehicleId
            let element = {
              "Covers": [
                {
                  "CoverId": cover.CoverId,
                  "SubCoverId": subCover.SubCoverId,
                  "SubCoverYn": "Y",
                  //"isReferal": rowData.isReferal
                }
              ],
              "LocationId": vehicle.LocationId,
              "Id": id,
              "SectionId": cover.SectionId
            }
            if((cover.PremiumIncludedTax!=null && cover.PremiumIncludedTax!='0' && cover.PremiumIncludedTax!=undefined && cover.CoverageType!='A')){
              vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - cover.PremiumIncludedTax;
              vehicle['totalPremium'] =  vehicle['totalPremium'] - cover.PremiumIncludedTax; 
              cover.PremiumIncludedTax = 0;
              cover.PremiumIncludedTax=0;
            }
            cover.PremiumIncludedTax = subCover.PremiumIncludedTaxLC;
            cover.PremiumIncludedTax = subCover.PremiumIncludedTax;
            cover.selected = true;
            cover.SubCoverId = subCover.SubCoverId;
            for(let sub of cover.SubCovers){
              if(sub.SubCoverId==subCover.SubCoverId){
                cover['isReferal'] = sub.isReferal;
                cover['SumInsured'] = sub.SumInsured;
                cover['Loadings'] = sub.Loadings;
                cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
                cover['MinimumPremium'] = sub.MinimumPremium;
                cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
                cover['Discounts'] = sub?.Discounts;
                cover['CalcType'] = sub?.CalcType;
                cover['Rate'] = sub?.Rate;
                cover['ExcessPercent'] = sub?.ExcessPercent;
                cover['ExcessAmount'] = sub?.ExcessAmount;
                cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
                cover['ExchangeRate'] = sub?.ExchangeRate;
                cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
                cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
                cover['Taxes'] = sub.Taxes;
                cover['SubCoverId'] = sub.SubCoverId
                sub['selected'] = true;
              }
              else{
                sub['selected'] = false;
              }
            }
            subCover['selected'] = true;
            this.selectedCoverList.push(element);
            if(vehicle?.totalPremium){
              if(cover.Endorsements!=null){
                vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
              }
              else{
                vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTaxLC;
                vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
              }
            }
            else{
              if(cover.Endorsements!=null){
                vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
              }
              else{
                vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                vehicle['totalPremium'] =  cover.PremiumIncludedTax;
              }
            }
              this.getTotalVehiclesCost();
           }
           else{
            
            let covers:any[] = sectionEntry.Covers;
            let findCover = covers.filter(ele=>ele.CoverId==cover.CoverId);
            if(findCover.length==0) {
              let newEntry = {
                "CoverId": cover.CoverId,
                "SubCoverId":subCover.SubCoverId,
                "SubCoverYn": "Y"
              }
              cover.SubCoverId = subCover.SubCoverId;
              cover.PremiumIncludedTax = subCover.PremiumIncludedTaxLC;
              cover.PremiumIncludedTax = subCover.PremiumIncludedTax;
              cover.selected = true;
              for(let sub of cover.SubCovers){
                if(sub.SubCoverId==subCover.SubCoverId){
                  cover['isReferal'] = sub.isReferal;
                  cover['SumInsured'] = sub.SumInsured;
                  cover['Loadings'] = sub.Loadings;
                  cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
                  cover['MinimumPremium'] = sub.MinimumPremium;
                  cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
                  cover['Discounts'] = sub?.Discounts;
                  cover['CalcType'] = sub?.CalcType;
                  cover['Rate'] = sub?.Rate;
                  cover['ExcessPercent'] = sub?.ExcessPercent;
                  cover['ExcessAmount'] = sub?.ExcessAmount;
                  cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
                  cover['ExchangeRate'] = sub?.ExchangeRate;
                  cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
                  cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
                  cover['Taxes'] = sub.Taxes;
                  cover['SubCoverId'] = sub.SubCoverId;
                  sub['selected'] = true;
                }
                else{
                  sub['selected'] = false;
                }
              }
              subCover['selected'] = true;
              sectionEntry.Covers.push(newEntry);
              
              if(vehicle?.totalPremium){
                if(cover.Endorsements!=null){
                  vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                }
                else{
                  vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTaxLC;
                  vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
                }
              }
              else{
                if(cover.Endorsements!=null){
                  vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                }
                else{
                  vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                  vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                }
              }
              this.getTotalVehiclesCost();
            }
            else{
              console.log("Finded Covers",findCover,sectionEntry)
                let newEntry = {
                  "CoverId": cover.CoverId,
                  "SubCoverId":subCover.SubCoverId,
                  "SubCoverYn": "Y"
                }
                if((cover.PremiumIncludedTax!=null && cover.PremiumIncludedTax!='0' && cover.PremiumIncludedTax!=undefined && cover.CoverageType!='A')){
                  vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - cover.PremiumIncludedTax;
                  vehicle['totalPremium'] =  vehicle['totalPremium'] - cover.PremiumIncludedTax; 
                  cover.PremiumIncludedTax = 0;
                  cover.PremiumIncludedTax= 0;
                }
                cover.SubCoverId = subCover.SubCoverId;
                cover.PremiumIncludedTax = subCover.PremiumIncludedTaxLC;
                cover.PremiumIncludedTax = subCover.PremiumIncludedTax;
                cover.selected = true;
                for(let sub of cover.SubCovers){
                  if(sub.SubCoverId==subCover.SubCoverId){
                    cover['isReferal'] = sub.isReferal;
                    cover['SumInsured'] = sub.SumInsured;
                    cover['Loadings'] = sub.Loadings;
                    cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
                    cover['MinimumPremium'] = sub.MinimumPremium;
                    cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
                    cover['Discounts'] = sub?.Discounts;
                    cover['CalcType'] = sub?.CalcType;
                    cover['Rate'] = sub?.Rate;
                    cover['ExcessPercent'] = sub?.ExcessPercent;
                    cover['ExcessAmount'] = sub?.ExcessAmount;
                    cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
                    cover['ExchangeRate'] = sub?.ExchangeRate;
                    cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
                    cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
                    cover['Taxes'] = sub.Taxes;
                    cover['SubCoverId'] = sub.SubCoverId
                    sub['selected'] = true;
                  }
                  else{
                    sub['selected'] = false;
                  }
                }
                subCover['selected'] = true;
                let subIndex = sectionEntry.Covers.findIndex(ele=>ele.CoverId==cover.CoverId);
                sectionEntry.Covers[subIndex] = newEntry;
                if(vehicle?.totalPremium){
                  if(cover.Endorsements!=null){
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  }
                  else{
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTaxLC;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
                  }
                }
                else{
                  if(cover.Endorsements!=null){
                    vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
                  }
                  else{
                    vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
                    vehicle['totalPremium'] =  cover.PremiumIncludedTax;
                  }
                }
                console.log("Total Premium",cover,vehicle)
                this.getTotalVehiclesCost();
              
              
            }
           }
          }
        }
        else{
          let id=null;
          if(cover.RiskDetails?.RiskId) id= cover.RiskDetails?.RiskId; else id=cover.VehicleId
          let element = {
            "Covers": [{
                "CoverId": cover.CoverId,
                "SubCoverId": subCover.SubCoverId,
                "SubCoverYn": "Y"
              }],
            "LocationId": vehicle.LocationId,
            "Id": id,
            "SectionId": cover.SectionId
          }
          if((cover.PremiumIncludedTax!=null && cover.PremiumIncludedTax!='0' && cover.PremiumIncludedTax!=undefined && cover.CoverageType!='A')){
            vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - cover.PremiumIncludedTax;
            vehicle['totalPremium'] =  vehicle['totalPremium'] - cover.PremiumIncludedTax; 
            cover.PremiumIncludedTax = 0;
            cover.PremiumIncludedTax=0;
          }
          cover.PremiumIncludedTax = subCover.PremiumIncludedTaxLC;
          cover.PremiumIncludedTax = subCover.PremiumIncludedTax;
          cover.selected = true;
          for(let sub of cover.SubCovers){
            if(sub.SubCoverId==subCover.SubCoverId){
              cover['isReferal'] = sub.isReferal;
              cover['SumInsured'] = sub.SumInsured;
              cover['Loadings'] = sub.Loadings;
              cover['PremiumAfterDiscount'] = sub.PremiumAfterDiscount;
              cover['MinimumPremium'] = sub.MinimumPremium;
              cover['MinimumPremiumYn'] = sub?.MinimumPremiumYn;
              cover['Discounts'] = sub?.Discounts;
              cover['CalcType'] = sub?.CalcType;
              cover['Rate'] = sub?.Rate;
              cover['ExcessPercent'] = sub?.ExcessPercent;
              cover['ExcessAmount'] = sub?.ExcessAmount;
              cover['PremiumBeforeDiscount'] = sub.PremiumBeforeDiscount;
              cover['ExchangeRate'] = sub?.ExchangeRate;
              cover['PremiumExcluedTax'] = sub?.PremiumExcluedTax;
              cover['PremiumIncludedTax'] = sub?.PremiumIncludedTax;
              cover['Taxes'] = sub.Taxes;
              cover['SubCoverId'] = sub.SubCoverId
              sub['selected'] = true;
            }
            else{
              sub['selected'] = false;
            }
          }
          subCover['selected'] = true;
          this.selectedCoverList.push(element);
          if(vehicle?.totalPremium){
            if(cover.Endorsements!=null){
              vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
              vehicle['totalPremium'] =  vehicle['totalPremium']+cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
            }
            else{
              vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + subCover.PremiumIncludedTax;
              vehicle['totalPremium'] =  vehicle['totalPremium']+subCover.PremiumIncludedTax;
            }
            
          }
          else{
            if(cover.Endorsements!=null){
              vehicle['totalLcPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
              vehicle['totalPremium'] = cover.Endorsements[cover.Endorsements.length-1].PremiumIncludedTax;
            }
            else{
              vehicle['totalLcPremium'] =  cover.PremiumIncludedTax;
              vehicle['totalPremium'] =  cover.PremiumIncludedTax;
            }
            
          }
          this.getTotalVehiclesCost();
        }
      }
    }
    mergeConfig(options: any) {
      const config = {
        multi: true
      };
  
      return { ...config, ...options };
    }
    getUpdatedVehicleDetails(){
      let referenceNo =  sessionStorage.getItem('quoteReferenceNo');
      if(referenceNo){
        this.quoteRefNo = referenceNo;
        let ReqObj = {
          "ProductId":this.productId,
          "RequestReferenceNo": this.quoteRefNo,
          "InsuranceId": this.insuranceId
        }
        let urlLink = `${this.CommonApiUrl}api/view/calc`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
  
                this.vehicleData = data.Result;
                if(this.vehicleData.length!=0){
                  let finalizeyn = this.vehicleData[0]?.FinalizeYn;
                  if(finalizeyn!=null){this.finalizeYN = finalizeyn;sessionStorage.setItem('FinalizeYN',finalizeyn);}
                  else{this.finalizeYN='N';sessionStorage.removeItem('FinalizeYN')};
                }
                // this.emipolicytype=this.vehicleData[0]?.RiskDetails?.InsuranceClass;
                //     console.log('KKKKKKKKKKKK',this.emipolicytype);
               
                // let refRemarks = this.vehicleData[0].ReferalRemarks;
                // if(refRemarks){
                //   this.referralRemarks = refRemarks.split('~');
                // }
                if(this.productId=='5' || this.productId=='29'){
                  let j=0;let datass:any=[]
                  if(this.vehicleData.length>1){
                    if(this.vehicleData[0]?.RiskDetails?.InsuranceClass == this.vehicleData[1]?.RiskDetails?.InsuranceClass){
                      this.emipolicytype=this.vehicleData[0]?.RiskDetails?.InsuranceClass;
                      console.log('Secondsse',this.emipolicytype)
                    }
                    else{
                      this.emipolicytype='99999';
                      console.log('Firsteee',this.emipolicytype)
                    }
                   
                  }
                  else{
                   this.emipolicytype=this.vehicleData[0]?.RiskDetails?.InsuranceClass;
                  console.log('KKKKKKKKKKKK',this.emipolicytype);
                  }
                  // this.emipolicytype=this.vehicleData[0]?.RiskDetails?.InsuranceClass;
                  // console.log('KKKKKKKKKKKK',this.emipolicytype);
                 }
                 else{
                  this.emipolicytype='99999';
                 }
  
                let vehicleList:any[]=[];
                if(this.vehicleData.length!=0){
                  this.SourceType = this.vehicleData[0].SourceType;
                  this.commissionValue = this.vehicleData[0].CommissionPercentage;
                  this.commissionPercent = this.vehicleData[0].CommissionPercentage;
                  this.policyStartDate = this.vehicleData[0]?.PolicyStartDate;
                  this.policyEndDate = this.vehicleData[0]?.PolicyEndDate;
                  let referralList = this.vehicleData.filter(ele=>(ele.UWReferral!=null && ele.UWReferral.length!=0) || ele.MasterReferral.length!=0);
                  if(referralList.length!=0) this.uwReferralSection = true;
                  if(this.vehicleData[0].EndtTypeMaster!=null){
                    let quoteDetails = this.vehicleData[0].EndtTypeMaster
                    this.endorsementType = quoteDetails.Endtcategdesc;
                    this.endorsementCategory = quoteDetails.Endttypecategory;
                    if(!JSON.parse(sessionStorage.getItem('endorseTypeId'))){
                      let obj = {
                        "EndtTypeId": Number(quoteDetails?.Endttypeid),
                        "FieldsAllowed":quoteDetails.Endtdependantfields.split(','),
                        "EffectiveDate":quoteDetails.Endorsementeffdate,
                        "Remarks":quoteDetails.Remarks,
                        "Category": quoteDetails.Endttypecategory,
                        "EndtName": quoteDetails.Endttype,
                        "PolicyNo": quoteDetails?.PolicyNo
                      }
                      sessionStorage.setItem('endorsePolicyNo',this.vehicleData[0].OriginalPolicyNo);
                      //sessionStorage.setItem('endorsePolicyNo',)
                      sessionStorage.setItem('endorseTypeId',JSON.stringify(obj));
                      this.endorsementSection = true;
                      let endorseObj = JSON.parse(sessionStorage.getItem('endorseTypeId'))
                      if(endorseObj){
                        console.log("Endorse obj",endorseObj)
                        this.endorsementId = endorseObj.EndtTypeId;
                        this.endorseEffectiveDate = endorseObj?.EffectiveDate;
                        this.enableFieldsList = endorseObj.FieldsAllowed;
                        this.endorseShortCode = endorseObj.EndtShortCode;
                        let entry = this.enableFieldsList.some(ele=>ele=='Covers' || ele=='RemoveSection'  || ele=='AddOnCovers' || ele=='AddCovers' || ele=='removeVehicle');
                        if(entry || this.endorseShortCode == '846') this.coverModificationYN = 'Y';
                        else this.coverModificationYN = 'N';
                        console.log("Enable Obj",this.enableFieldsList)
                        if(this.endorseShortCode!=42){
                          this.endorseCovers = this.enableFieldsList.some(ele=>ele=='Covers' && this.endorseShortCode==852);
                          this.endorseSIModification = this.enableFieldsList.some(ele=>ele=='Covers' && this.endorseShortCode==850);
                          this.endorseAddOnCovers = this.enableFieldsList.some(ele=>ele=='AddOnCovers' || ele=='AddCovers');
                          this.enableAddVehicle = this.enableFieldsList.some(ele=>ele=='addVehicle');
                          this.enableRemoveVehicle = this.enableFieldsList.some(ele=>ele=='removeVehicle');
                          this.enableSections = this.enableFieldsList.some(ele=>ele=='RemoveSection');
                        }
                        else{
                            this.endorseSIModification = false;
                            this.endorseCovers = false;
                            this.enableAddVehicle = false;
                            this.endorseAddOnCovers = false;
                            this.enableRemoveVehicle = false;
                            this.enableSections = false;
                        }
                      }
                    }
                  }
                  if(this.vehicleData[0].HavePromoCode){
                    this.havePromoCode = this.vehicleData[0].HavePromoCode;
                    this.promoCode = this.vehicleData[0].PromoCode;
                  }
                  else{
                    this.havePromoCode = "N";
                    this.promoCode = null;
                  }
                  let admRemarks = this.vehicleData[0].AdminRemarks;
                  if(admRemarks){
                    this.adminRemarks = admRemarks.split('~');
  
                  }
                  this.currencyCode= this.vehicleData[0].CoverList[0].Currency;
                  let i=0;
                  for(let veh of this.vehicleData){
                    veh['ReferralList'] = [];
                    if(veh.MasterReferral.length!=0){
                      for(let master of veh.MasterReferral){
                        veh['ReferralList'].push(master.ReferralDesc)
                      }
                    }
                    if(veh.UWReferral.length!=0){
                      for(let master of veh.UWReferral){
                        veh['ReferralList'].push(master.QuestionDesc)
                      }
                    }
                    if(veh.EndorsementYn=='Y'){
                      if(this.endorsementSection==false){
                        
                      }
                    }
                    // if(veh.ReferalRemarks){
                    //   veh['ReferralList']= veh.ReferalRemarks.split('~');
                    // }
                    if(veh.VehicleId) veh['Vehicleid'] = veh.VehicleId;
                      veh['Active'] = true;
                      let coverList = veh.CoverList;
                      console.log("Basic CoverList",veh.CoverList)
                      let baseCovers =[],otherCovers=[],benefitCovers=[],totalCovers:any[]
                      baseCovers = coverList.filter(ele=>ele.CoverageType=='B');
                      otherCovers= coverList.filter(ele=>ele.CoverageType!='B' && ele.CoverageType!='A');
                      benefitCovers = coverList.filter(ele=>ele.CoverageType=='A');
                      totalCovers  = baseCovers.concat(otherCovers);
                      veh['CoverList'] = totalCovers.concat(benefitCovers);
                      console.log("Basecovers",baseCovers.length)
                      console.log("Othercovers",totalCovers.length)
                      console.log("Benefitcovers",benefitCovers.length)
                      console.log("Final Covers Length",veh.CoverList.length )
                      console.log("Final  CoverList 22",veh['CoverList'])
                      if(i==0){
                        veh['Collapse'] = true;
                        //this.remarks = veh.AdminRemarks;
                        vehicleList.push(veh);
                      }
                      else{
                        veh['Collapse'] = false;
                        console.log(veh.CoverList.length)
                        vehicleList.push(veh);
                      }
                      i+=1;
                      if(i==this.vehicleData.length){
                        console.log("Vehiclessss",vehicleList)
                        
                        //sessionStorage.setItem('vehicleDetailsList',JSON.stringify(vehicleList));
                        if(this.productId!='4' && this.productId!='5' && this.productId!='46' && this.productId!='29'){
                          this.vehicleData = vehicleList;
                          this.filterVehicleList();
                        }
                        else{
                          this.vehicleDetailsList = vehicleList;
                          this.checkSelectedCovers();
                        }
                        if(this.insuranceId=='100019') this.onViewFactorDetails(null);
                      }
                  }
                  if(this.vehicleData[0].EmiYn!=null && this.vehicleData[0].EmiYn!=undefined && this.vehicleData[0].EmiYn!=''){
                    //this.emiYN = this.vehicleData[0].EmiYn;
                    this.emiPeriod = this.vehicleData[0].InstallmentPeriod;
                    if(!this.endorsementSection && this.emiYN=='Y'){
                    //this.EmiInstallment();
                    }
                    }
                    else if(!this.endorsementSection && this.insuranceId!='100002') {
                      this.emiYN = "N";
                      this.EmiInstallment();
                    }
                }
                
            }
          },
          (err) => { },
        );
      }
    }
    checkPremiumIncludedTax(coverData,rowData){
      let entry = this.selectedCoverList.find(ele=>ele.Id==rowData.Vehicleid);
      if(coverData.SubCovers){
         if(coverData.SubCovers.length!=0){
           return coverData.SubCovers.some(ele=>ele.isSelected=='D' || ele.isSelected=='O' || ele.isSelected=='Y' || ele?.UserOpt=='Y' || ele?.selected==true);
        }
      }
      else return true;
    }
    checkBenefitCover(){
      if(this.selectedRowData){
        return this.selectedRowData.BenefitCovers.length!=0;
      }
      else return false;
    }
    onViewBenefitCovers(modal){
        this.benefitCoverList = this.selectedRowData.BenefitCovers;
        this.open(modal);
    }
    getViewPremiumCalc(modal){
      let ReqObj = {
          "InsuranceId" : this.insuranceId,
          "ProductId" : this.productId,
          "RequestReferenceNo": this.requestReferenceNo
      }
      let urlLink = `${this.CommonApiUrl}api/view/policycalc`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if(data.Result){
              this.fleetCoverDetails = data?.Result;
              if(this.fleetCoverDetails){
                if(this.fleetCoverDetails.CoverList.length!=0){
                  let cover = this.fleetCoverDetails.CoverList.find(ele=>ele.CoverId=='5');
                  if(cover){
                    //if(cover?.PremiumBeforeDiscount!=0 && cover?.PremiumBeforeDiscount!="0"){
                      this.ratePercent = cover.Rate;
                      this.CoverName = cover.CoverName;
                      this.minimumPremiumYN = cover.MinimumPremiumYn;
                      this.basePremium = cover?.PremiumBeforeDiscount;
                      this.premiumIncludedTax = cover?.PremiumIncludedTax;
                      this.premiumExcludedTax = cover?.PremiumExcludedTax;
                      if(cover.Discounts) this.discountList = cover.Discounts;
                      if(cover.Loadings) this.loadingList = cover.Loadings;
                      if(cover.Taxes) this.taxList = cover.Taxes;
                      this.open(modal);
                    // }
                    // else this.onFleetProceed(modal);
                  }
                  else{
                    this.onFleetProceed(modal);
                  }
                }
              }
              else this.onFleetProceed(modal);
            }
          });
    }
    checkManualReferral(){
      return this.vehicleDetailsList.some(ele=>ele.ManualReferalYn=='Y')
    }
    filterVehicleList(){
      let vehicleList = this.vehicleData.filter(ele=>ele.SectionId=='1');
        if(this.vehicleData.length!=0){
            let i=0;
            this.vehicleDetailsList = [];
            let k=0;
            for(let vehicle of this.vehicleData){
              let entry =null;
              console.log("Filter Details",vehicleList,this.vehicleData)
              if(this.productId!='5' && this.productId!='46') entry = vehicleList.find(ele=>ele.LocationId==vehicle.LocationId);
              else  entry = vehicleList.find(ele=>ele.VehicleId==vehicle.VehicleId || ele.RiskDetails.RiskId==vehicle.RiskDetails.RiskId);
              if(entry && (vehicle.SectionId!='1'  || this.productId=='66' || this.productId=='67')){
                //if(entry.SectionId==vehicle.SectionId){
                let j=0;
                for(let cover of vehicle.CoverList){
                  cover['SectionId'] = vehicle.SectionId;
                  cover['SectionName'] = vehicle.SectionName;
                  cover['VehicleId'] = vehicle.VehicleId;
                  cover['RiskId'] = vehicle?.RiskDetails?.RiskId;
                  cover['RiskDetails'] = vehicle.RiskDetails;
                  j+=1;
                  if(j==vehicle.CoverList.length) entry.CoverList = entry.CoverList.concat(vehicle.CoverList);
                }
                  
                // }
                // else{
                //   vehicleList.push(vehicle);
                // }
              }
              else if(vehicle.SectionId!='1'){
                let j=0;
                for(let cover of vehicle.CoverList){
                  cover['SectionId'] = vehicle.SectionId;
                  cover['SectionName'] = vehicle.SectionName;
                  cover['VehicleId'] = vehicle.VehicleId;
                  cover['RiskId'] = vehicle?.RiskDetails?.RiskId;
                  cover['RiskDetails'] = vehicle.RiskDetails;
                  j+=1;
                  if(j==vehicle.CoverList.length) vehicleList.push(vehicle)
                }
              }
              i+=1;
              if(i==this.vehicleData.length){
                if(this.productId=='66' || this.productId=='67'){
                  let list = [],i=0;
                  console.log("Vehicles",vehicleList)
                  for(let veh of vehicleList){
                    if(!list.some(ele=>ele.LocationId==veh.LocationId)) list.push(veh);
                    i+=1;
                    if(i==vehicleList.length){
                      console.log("Vehicles 2",list)
                      this.vehicleDetailsList = list;
                      this.checkSelectedCovers();}
                  }
                }
                else{
                  this.vehicleDetailsList = vehicleList;
                this.checkSelectedCovers();
                }
              }
            }
        }
    }
    submitForm(rowData,modal){
      let index;
      let entry=rowData;
        let createdBy="";
        let quoteStatus = sessionStorage.getItem('QuoteStatus');
        if(quoteStatus=='AdminRP'){
            createdBy = this.vehicleDetailsList[0].CreatedBy;
        }
        else{
          createdBy = this.loginId;
        }
        let startDate = "",endDate = "",vehicleSI="",accSI="",windSI="",tppSI="";
        if(this.vehicleSI==undefined) vehicleSI = null;
        else if(this.vehicleSI.includes(',')){ vehicleSI = this.vehicleSI.replace(/,/g, '') }
        else vehicleSI = this.vehicleSI;
        if(this.accessoriesSI==undefined) accSI = null;
        else if(this.accessoriesSI.includes(',')){ accSI = this.accessoriesSI.replace(/,/g, '') }
        else accSI = this.accessoriesSI
        if(this.windShieldSI==undefined) windSI = null;
        else if(this.windShieldSI.includes(',')){ windSI = this.windShieldSI.replace(/,/g, '') }
        else windSI = this.windShieldSI
        if(this.tppdSI==undefined) tppSI = null;
        else if(this.tppdSI.includes(',')){ tppSI = this.tppdSI.replace(/,/g, '') }
        else tppSI = this.tppdSI
        if(this.policyStartDate){
          startDate = this.datePipe.transform(this.policyStartDate, "dd/MM/yyyy");
        }
        if(this.policyEndDate){
          endDate = this.datePipe.transform(this.policyEndDate, "dd/MM/yyyy");
        }
        if(this.userType=='Broker'){
          this.brokerCode = this.agencyCode;
          this.brokerLoginId = createdBy;
          this.subuserType = sessionStorage.getItem('typeValue');
          this.applicationId = "01";
        }
  
  
      let appId = "1",loginId="",brokerbranchCode="";
      if(this.userType!='Issuer'){
        appId = "1"; loginId = this.loginId;
        brokerbranchCode = this.brokerbranchCode;
      }
      else{
        appId = this.loginId;
        brokerbranchCode = null;
      }
      console.log("AcExecutive",this.acExecutiveId);
      //this.exchangeRate=this.vehicleDetails.ExchangeRate;
      let currencyValue="";
      let ReqObj = {
        "BrokerBranchCode": brokerbranchCode,
        "AcExecutiveId": this.acExecutiveId,
        "CommissionType": this.vehicleDetails.commissionType,
        "BrokerCode": this.vehicleDetails.BrokerCode,
        "LoginId": this.vehicleDetails.LoginId,
        "SubUserType": this.subuserType,
        "ApplicationId": this.vehicleDetails.ApplicationId,
        "CustomerReferenceNo": this.customerDetails?.CustomerReferenceNo,
        "RequestReferenceNo": this.requestReferenceNo,
        "Idnumber": this.customerDetails?.IdNumber,
        "VehicleId": this.vehicleId,
        "AcccessoriesSumInsured": accSI,
        "AccessoriesInformation": "",
        "AdditionalCircumstances": "",
        "AxelDistance": this.vehicleDetails?.AxelDistance,
        "Chassisnumber": this.vehicleDetails?.Chassisnumber,
        "Color": this.vehicleDetails?.Color,
        "CityLimit": this.cityValue,
        "Currency" : this.currencyCode,
        "CoverNoteNo": null,
        "OwnerCategory": this.vehicleDetails?.OwnerCategory,
        "CubicCapacity": this.vehicleDetails?.Grossweight,
        "CreatedBy": this.vehicleDetails?.CreatedBy,
        "DrivenByDesc": this.drivenBy,
        "EngineNumber": this.vehicleDetails?.EngineNumber,
        "ExchangeRate": this.vehicleDetails?.ExchangeRate,
        "FuelType": this.vehicleDetails?.FuelType,
        "Gpstrackinginstalled": this.gpsYn,
        "Grossweight": this.vehicleDetails?.Grossweight,
        "HoldInsurancePolicy": "N",
        "Insurancetype": this.typeValue,
        "InsuranceId": this.insuranceId,
        "InsuranceClass": this.classValue,
        "InsurerSettlement": "",
        "InterestedCompanyDetails": "",
        "ManufactureYear": this.vehicleDetails?.ManufactureYear,
        "ModelNumber": null,
        "MotorCategory": this.vehicleDetails?.MotorCategory,
        "Motorusage": this.motorUsageValue,
        "NcdYn": this.claimsYN,
        "NoOfClaims": null,
        "NumberOfAxels": this.vehicleDetails?.NumberOfAxels,
        "BranchCode": this.vehicleDetails?.BranchCode,
        "AgencyCode": this.agencyCode,
        "ProductId": this.productId,
        "SectionId": this.typeValue,
        "PolicyType": this.customerDetails?.PolicyHolderType,
        "RadioOrCasseteplayer": null,
        "RegistrationYear": this.customerDetails?.DobOrRegDate,
        "Registrationnumber": this.vehicleDetails?.Registrationnumber,
        "RoofRack": null,
        "SeatingCapacity": this.vehicleDetails?.SeatingCapacity,
        "SpotFogLamp": null,
        "Stickerno": null,
        "SumInsured": vehicleSI,
        "Tareweight": this.vehicleDetails?.Tareweight,
        "TppdFreeLimit": null,
        "TppdIncreaeLimit": tppSI,
        "TrailerDetails": null,
        "TiraCoverNoteNo": this.vehicleDetails?.TiraCoverNoteNo,
        "Vehcilemodel": this.vehicleDetails?.Vehcilemodel,
        "VehicleType": this.bodyTypeValue,
        "Vehiclemake": this.vehicleDetails?.Vehiclemake,
        "WindScreenSumInsured": windSI,
        "Windscreencoverrequired": null,
        "accident": null,
        "periodOfInsurance": this.noOfDays,
        "PolicyStartDate": startDate,
        "PolicyEndDate": endDate,
        "CollateralYn": this.vehicleDetails.CollateralYn,
        "BorrowerType": this.borrowerValue,
        "CollateralName": this.collateralName,
        "FirstLossPayee": this.firstLossPayee,
        "FleetOwnerYn": this.vehicleDetails?.FleetOwnerYn,
        "NoOfVehicles": this.noOfVehicles,
        "NoOfComprehensives": this.noOfCompPolicy,
        "ClaimRatio": this.claimRatio,
        "SavedFrom": this.vehicleDetails?.SavedFrom,
        "UserType": this.userType,
        "HavePromoCode": this.havePromoCode,
        "PromoCode" : this.promoCode,
        "SourceType":this.vehicleDetails?.SourceType,
        "CustomerCode": this.vehicleDetails?.CustomerCode,
        }
        ReqObj['FleetOwnerYn'] = "N";
        if(this.insuranceId=='100019'){
          if(this.vehicleDetails?.CarAlarmYn) ReqObj['CarAlarmYn'] = this.vehicleDetails?.CarAlarmYn;
          else ReqObj['CarAlarmYn'] = 'N';
        }
        let urlLink = `${this.motorApiUrl}api/savemotordetails`;
        this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
          (data: any) => {
            let res:any = data;
            if(data.ErrorMessage.length!=0){
              if(res.ErrorMessage){
              }
            }
            else{
              this.requestReferenceNo = data?.Result?.RequestReferenceNo;
               sessionStorage.setItem('quoteReferenceNo',data?.Result?.RequestReferenceNo);
              let entry = this.motorDetails;
              entry['PolicyStartDate'] = this.vehicleDetails.PolicyStartDate;
            entry['PolicyEndDate'] = this.vehicleDetails.PolicyStartDate;
            entry['Currency'] = this.currencyCode;
            entry['HavePromoCode'] = this.havePromoCode;
            entry['PromoCode'] = this.promoCode;
            entry['ExchangeRate'] = this.exchangeRate;
              entry['InsuranceType'] = this.typeValue;
              entry['MSRefNo'] = data?.Result?.MSRefNo;
              entry['VdRefNo'] = data?.Result?.VdRefNo;
              entry['CdRefNo'] = data?.Result?.CdRefNo;
              entry['RequestReferenceNo'] = data?.Result?.RequestReferenceNo;
              entry['Active'] = true;
              entry['Vehicleid'] = this.vehicleId;
              console.log("Save Iterate 2",entry);
              this.myPopover=false;
              this.coverSection = false;
              let effectiveDate=null,coverModificationYN='N'
              if(this.endorsementSection){
                  effectiveDate = this.endorseEffectiveDate;
                  let entry = this.enableFieldsList.some(ele=>ele=='Covers' || ele=='RemoveSection' || ele=='AddOnCovers' || ele=='AddCovers' || ele=='removeVehicle');
                  if(entry) coverModificationYN = 'Y';
                  else coverModificationYN = 'N';
              }
              else {
                  effectiveDate = this.vehicleDetails.PolicyStartDate
              }
              let ReqObj = {
                "InsuranceId": this.insuranceId,
                "BranchCode": this.branchCode,
                "AgencyCode": this.agencyCode,
                "SectionId": entry.InsuranceType,
                "ProductId": this.productId,
                "MSRefNo": entry?.MSRefNo,
                "VehicleId":this.vehicleId,
                "CdRefNo": entry?.CdRefNo,
                "VdRefNo": entry?.VdRefNo,
                "CreatedBy": createdBy,
                "productId": this.productId,
                "RequestReferenceNo": this.requestReferenceNo,
                "EffectiveDate": effectiveDate,
                "PolicyEndDate": this.vehicleDetails?.PolicyEndDate,
                "CoverModification": coverModificationYN
              }
              let urlLink = `${this.CommonApiUrl}calculator/calc`;
              let i=0;
              this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
                (data: any) => {
                  this.coverSection = false;
                  modal.dismiss('Cross click');
                  $('#mymodalEdit').modal('hide');
                  this.selectedCoverList = [];
                  this.getUpdatedVehicleDetails();
                },
                (err) => { },
              );
            }
          },
          (err) => { },
        );
  
  
  
    }
    covername(){
      
    }
    covernameinfo(modal,row){
      this.tooltip=true;
      console.log('UUUUUUUUUUUUUUUUUUU',row);
      this.CoverName=row.CoverDesc;
      let ReqObj = {
        "InsuranceId":this.insuranceId,
        "ProductId":this.productId,
        "SectionId":row.SectionId,
        "CoverId":row.CoverId
      }
      let urlLink = `${this.CommonApiUrl}master/dropdown/productbenefit`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if(data.Result){
          this.coverBenefitDisplay = true;

          this.CoverHeader=['BenefitId', 'Benefit Description', 'Calc Type','Section Description','Value', 'Long Description']
  
              this.CoverList=data?.Result;
  
          //this.CoverList = obj.concat(data?.Result);
          //this.getExistingDocument();
          //if(!this.CountryValue){ this.CountryValue = "99999"; this.getStateList() }
        }
      },
  
      (err) => { },
    );
      
    }
  
  
  
    htmlcard(rowData,modal)
    {
      this.HtmlCard=true;
      this.getEditVehicleDetails(rowData,'edit',modal);
      this.myPopover=true;
    }
    editcard(rowData,modal)
    {
      this.getEditVehicleDetails(rowData,'edit',modal);
  
      //this.setVehicleValues('direct')
    }
    editWarranty(id){
      const dialogRef = this.dialog.open(DialogComponent, {
  
        data: {
          title:"Warranty",
          existingData:this.WarrantyData,
          QuoteNo:this.quoteNo,
          ReferenceNo:this.quoteRefNo,
          RiskId:String(this.selectedRowData.RiskDetails.RiskId),
          SectionId:this.termsSectionId,
          Id:"4"
        }
      });
      dialogRef.afterClosed().subscribe((result) => {
        let i=id
        console.log('The dialog was closed');
        this.WarrantyStatuss();
        //  this.WarrantyStatus(i,this.tempData)
      
      });
  
    }
    saveClausesData(rawData,type){

      let clauses
       
  
      console.log('QQQQQ',this.quoteNo,rawData);
          let quote
      if(this.quoteNo){
        quote=this.quoteNo;
      }
      else{
        quote="";
      }
      let i=0;
      let passData:any[]=[];
      let id:any;
      for( let f of rawData){
         if(f.TypeId != 'D'){
          console.log('KKKKKKKKK',f.TypeId);
          f['TypeId']='O';
         }
         if(f['selected']==true) passData.push(f)
         i+=1;
        if(i==rawData.length){
          let Req = {
            BranchCode: this.branchCode,
            CreatedBy: this.loginId,
            InsuranceId: this.insuranceId,
            ProductId: this.productId,
            QuoteNo:quote,
            //TermsId:null,
            RiskId:String(this.selectedRowData.RiskDetails.RiskId),
            SectionId:this.termsSectionId,
            TermsAndConditionReq:passData,
            RequestReferenceNo: this.requestReferenceNo
          };
      
          let urlLink = `${this.CommonApiUrl}api/inserttermsandcondition`;
          this.sharedService.onPostMethodSync(urlLink, Req).subscribe((data: any) => {
            if (data.Result) {
              this.CoveList=true;
              this.onExclusion = false;
              this.onWarranty=false;
              this.onWars = false;
              this.onClauses = false;
              this.warranty = false;
              this.Exclusion = false;
              this.clause = false;
              this.clauses = false;
              this.showGrid=true;
              
         if(type){
          if(type=='Clauses'){
            this.viewCondition('direct');
            this.clauses = true;
            this.showGrid=true;
          }
          else if(type=='Exclusion'){
            this.viewCondition('direct');
          this.Exclusion = true;
          this.showGrid=true;
          }
          else if(type=='Warranty'){
            this.viewCondition('direct');
            this.warranty = true;
            this.showGrid=true;
            }
            else{
              this.showGrid=false;
            }
          }
            }
            
          });
        }
      }
    
      //console.log('SSSSSSSSSSSS',this.tempData)
      //console.log('aaaaaaaaaaaaaa',this.jsonList)
      
    }
    editClauses(id){
  
  
      //this.open(modal);
      const dialogRef = this.dialog.open(DialogComponent, {
  
        data: {
          title:"Clauses",
          existingData:this.ClausesData,
          QuoteNo:this.quoteNo,
          ReferenceNo:this.quoteRefNo,
          RiskId: String(this.selectedRowData.RiskDetails.RiskId),
          SectionId:this.termsSectionId,
          Id:"6"
        }
      });
      dialogRef.afterClosed().subscribe((result) => {
        let i=id
        console.log('The dialog was closed');
        this.ClausesStatuss();
        //  this.ClausesStatus(i,this.tempData);
      });
    }
  
    editExclusion(id){
      //this.open(modal);
      const dialogRef = this.dialog.open(DialogComponent, {
  
        data: {
          title:"Exclusion",
          existingData:this.ExclusionData,
          QuoteNo:this.quoteNo,
          ReferenceNo:this.quoteRefNo,
          RiskId: String(this.selectedRowData.RiskDetails.RiskId),
          SectionId:this.termsSectionId,
          Id:"7"
        }
      });
      dialogRef.afterClosed().subscribe((result) => {
        let i=id
        this.ExclusioStatuss();
        //this.ExclusioStatus(i,this.tempData);
        
      });
    }
    saveExclusionData(){
  
    }
    CloseClauses(){
      //$('#exampleModal').modal('hide');
      //$("#examplemodal .close").click();
      //modal.dismiss('Cross click');
      $('#exampleModal').modal('hide');
    }
  
    getVehicleDetails(chassisNo){
      let ReqObj = {
        "ReqChassisNumber": chassisNo,
        "ReqRegNumber": null,
        "InsuranceId": this.insuranceId,
        "BranchCode": this.branchCode,
        "BrokerBranchCode": this.brokerbranchCode,
        "ProductId": this.productId,
        "CreatedBy": this.loginId
      }
      let urlLink = `${this.motorApiUrl}regulatory/showvehicleinfo`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if(data.Result){
        this.motorDetails = data.Result;
        console.log(" this.motorDetails==", this.motorDetails);
        }
        },
        (err) => { },
      );
    }
    checkSelectedCovers(){
      if(this.vehicleDetailsList.length!=0){
        if(this.vehicleDetailsList[0].CoverList.length!=0){
          this.currencyCode== this.vehicleDetailsList[0].CoverList[0].Currency;
        }
        let j=0;
        for(let veh of this.vehicleDetailsList){
          veh['totalPremium'] = 0;
          let i=0;
          let coverList:any[]=veh.CoverList;
          for(let cover of coverList){
            cover['ExcessDesc'] = 'None';
            let fieldList = [];
            if(cover.Endorsements!=null && veh.Status!='D'){
              
              cover['DifferenceYN']= 'Y';
              if(veh?.EndtTypeMaster?.Endtdependantfields){
                fieldList = veh?.EndtTypeMaster?.Endtdependantfields.split(',')
              }
            }
            if(cover.Endorsements!=null && !this.endorsementSection){
              this.endorsementSection = true;
              
              let obj = {
                "EndtTypeId":cover.Endorsements[0].EndorsementId,
                "FieldsAllowed": fieldList,
                "EffectiveDate":cover.EffectiveDate,
                "Remarks":null,
                "Category": veh?.EndtTypeMaster?.Endttypecategory,
                "EndtName": cover.Endorsements[0].EndorsementDesc,
                "PolicyNo": null
              }
              this.endorsementId = cover.Endorsements[0].EndorsementId;
              this.endorseEffectiveDate = cover.EffectiveDate;
              this.enableFieldsList = fieldList;
              let entry = this.enableFieldsList.some(ele=>ele=='Covers' || ele=='RemoveSection' || ele=='AddOnCovers' || ele=='AddCovers' || ele=='removeVehicle');
              if(this.coverModificationYN=='N'){
                if(entry || this.endorsementId == 846) this.coverModificationYN = 'Y';
                else this.coverModificationYN = 'N';
              }
              sessionStorage.setItem('endorseTypeId',JSON.stringify(obj));
            }
            if((((cover.isSelected=='D' || cover.isSelected=='O' || cover.isSelected=='Y' || cover?.UserOpt=='Y') && !this.endorsementSection) || 
            (this.endorsementSection && (cover.UserOpt=='Y' || cover.isSelected=='D' || cover.isSelected=='O'))) && cover.SubCovers==null ){
              if(this.endorsementId == 846 && veh.Status=='D'){
                // cover['selected']= false;
                // this.onSelectCover(cover,false,veh.Vehicleid,veh,'coverList','change');
              }
              else{
                this.onSelectCover(cover,true,cover.VehicleId,veh,'coverList','direct');
              }
              
            }
            else{
              console.log("Not Selected 1",cover);
              cover['selected']= false;
            }
            if(cover.SubCovers!=null){
              let k=0;
              for(let sub of cover.SubCovers){
                if(sub.isSelected=='D' || sub.isSelected=='O' || sub.isSelected=='Y' || sub?.UserOpt=='Y'){
                      this.onChangeSubCover(sub,cover,veh,true,null);
                }
                k+=1;
                if(k==cover.SubCovers){
                  i+=1;
                  if(i==coverList.length){
                    let defaultList = coverList.filter(ele=>ele.isSelected=='D' || ele.UserOpt == 'Y');
                    let otherList = coverList.filter(ele=>ele.isSelected!='D' && ele.UserOpt != 'Y')
                    veh.CoverList = defaultList.concat(otherList);
                    if(this.adminSection) veh.CoverList = coverList.filter(ele=>ele.isSelected=='D' || ele?.UserOpt=='Y')
                  }
                }
              }
            }
            else{
              i+=1;
              if(i==coverList.length){
                let defaultList = coverList.filter(ele=>ele.isSelected=='D' || ele.UserOpt == 'Y');
                let otherList = coverList.filter(ele=>ele.isSelected!='D' && ele.UserOpt != 'Y')
                veh.CoverList = defaultList.concat(otherList);
                if(this.adminSection) veh.CoverList = coverList.filter(ele=>ele.isSelected=='D' || ele?.UserOpt=='Y')
              }
            }
          }
          j+=1;
          if(j==this.vehicleDetailsList.length){
            if(this.endorsementId==846){
                let vehicles = this.vehicleDetailsList.filter(ele=>ele.Status=='D');
                if(vehicles.length!=0){
                  let n=0;
                    for(let veh of vehicles){
                      let SectionEntry:any[]=[];
                      SectionEntry = this.vehicleDetailsList.filter(ele=>ele.Status=='E' && ele.SectionId==veh.SectionId);
                      let coverList:any[]=veh.CoverList;
                      let j = 0;
                      for(let cover of coverList){
                        if(((cover.isSelected=='D' || cover.isSelected=='O' || cover.isSelected=='Y' || cover?.UserOpt=='Y') && !this.endorsementSection) || 
                          (this.endorsementSection && (cover.UserOpt=='Y' || cover.isSelected=='Y')) ){
                            cover['selected']= false;
                            this.onSelectCover(cover,false,cover.VehicleId,veh,'coverList','change');
                            cover['DifferenceYN'] = 'N';
                            if(SectionEntry.length!=0){
                              let coverList = SectionEntry[0]?.CoverList;
                              let covers = coverList.filter(ele=>ele.CoverId==cover.CoverId);
                              
                              if(!(covers[0].UserOpt=='Y' || covers[0].isSelected=='D' || covers[0].isSelected=='O')){
                                console.log("Opted Sections",SectionEntry[0],covers)
                                covers[0]['selected']= true;
                                this.onSelectCover(covers[0],true,covers[0].VehicleId,SectionEntry[0],'coverList','change');
                                 covers[0]['DifferenceYN'] = 'Y';
                              }
                            }
                            
                          }
                        
                        j+=1;
                        if(j==coverList.length) n+=1;
                      }
                      
                      if(n==vehicles.length){
                        if(this.quoteNo!="null" && this.quoteNo!=null){
                        }
                         if(this.quoteRefNo!="null" && this.quoteRefNo!=null){
                          this.getEditQuoteDetails();
                        }
                        else{
                          
                        }
                      }
                    }
                }
                else{
                  if(this.quoteNo!="null" && this.quoteNo!=null){
                    //this.getEditQuoteDetails();
                  }
                   if(this.quoteRefNo!="null" && this.quoteRefNo!=null){
                    //this.updateComponent.quoteNo = this.quoteNo;
                    this.getEditQuoteDetails();
                  }
                  else{
                    
                  }
                }
            }
            else{
              //this.getExcessDetails();
              if(this.quoteNo!="null" && this.quoteNo!=null){
                //this.getEditQuoteDetails();
              }
               if(this.quoteRefNo!="null" && this.quoteRefNo!=null){
                //this.updateComponent.quoteNo = this.quoteNo;
                this.getEditQuoteDetails();
              }
              else{
                
              }
            }
            
            //this.onGetCoverListById();
          }
        }
  
  
      }
    }
    getExcessDetails(){
      let ReqObj={
        "RequestReferenceNo": this.quoteRefNo
      }
      let urlLink = `${this.CommonApiUrl}excess/gettransactiondetails`;
      this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
        (data: any) => {
          if(data.Result){
              this.excessList = data.Result;
          }
        });
    }
    checkExcessData(rowData){
      if(this.selectedCoverList.length!=0){
          if(this.selectedCoverList.some(ele=>ele.SectionId==rowData.sectionId)){
            for(let veh of this.selectedCoverList){
              if(veh.SectionId==rowData.sectionId){
                let coverList = veh.Covers;
                return coverList.some(ele=>ele.CoverId==rowData.coverId);
              }
            }
          }
          else return false;
      }
      else return false
    }
    getFilterCoverList(rowData){
      return rowData.CoverList.filter(ele=>ele.CoverageType!='A')
    }
    getFilterBenefitCoverList(rowData){
      return rowData.CoverList.filter(ele=>ele.CoverageType=='A')
    }
    checkBenefitCovers(rowData){
      return rowData.CoverList.filter(ele=>ele.CoverageType=='A').length!=0
    }
    checkSubCoverSelection(rowData){
      if(rowData.UserOpt=='Y') return true;
      else return false;
    }
    checkSelectedSections(rowData){
        let coverList = rowData.CoverList;
        return coverList.some(ele=>ele.UserOpt=='Y' || ele.isSelected=='D' || ele.isSelected=='O')
    }
    checkSectionDisable(rowData){
      let coverList = rowData.CoverList;
      return (!coverList.some(ele=>ele.UserOpt=='Y' || ele.isSelected=='D' || ele.isSelected=='O'))
    }
    onSelectSection(){
      console.log("Current Id",this.selectedRowData)
      if(this.selectedRowData!=null){
        this.coverSection = false;
        this.selectedVehicleList = [this.selectedRowData]
        this.coverSection = true;
  
      }
    }
    onSelectSections(event,rowData){
        this.selectedRowData = rowData;
        this.getTermsSectionList();
        this.selectedVehicleList = [rowData];
        let coverList:any[]=rowData.CoverList.filter(ele=>ele.CoverageType!='B');
          for(let cover of coverList){
            if(cover.UserOpt=='Y' || cover.isSelected=='D' || cover.isSelected=='O'){
              if(event){cover['selected']=true;this.onSelectCover(cover,true,rowData.Vehicleid,rowData,'coverList','change')}
              else{cover['selected']=false; this.onSelectCover(cover,false,rowData.Vehicleid,rowData,'coverList','change')}
            }
          }
    }
    onSelectSectionIndex(rowData){
      this.coverSection = false;
      this.selectedRowData = rowData;
      this.getTermsSectionList();
      this.selectedVehicleList = [rowData];
      this.coverSection = true;
    }
    ongetBack(){
      // if(this.statusValue=='RA'){
      //     this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/customer-details']);
      // }
      // else{
      //   if(this.productId!='4'){
      //     this.getUWDetails();
      //     //this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/underwriter-details']);
      //   }
      //   else if(this.productId == '4'){
        if(this.fromWorkFlow!=null){
          this.router.navigate(['/workFlow'])
          sessionStorage.removeItem('ProposalId')
          sessionStorage.removeItem('FromWorkFlow')
        }
        else{

          if(this.finalizeYN!=null && this.subuserType=='low'){
              this.updateFinalizeYN('back')
          }
          else if(this.statusValue){
              if(this.adminSection){
                  if(this.statusValue=='RA' || this.statusValue=='RP') this.router.navigate(['/referralCases']);
                  //else this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/customer-details']);
                  else if(this.statusValue=='RE') this.router.navigate(['/referralCases']);
                  // if(this.statusValue=='RA' || this.statusValue=='RP' || this.statusValue=='RE'){
                  //     this.router.navigate(['/quotation/plan/premium-details']);
                  // }
                  else this.onSetBackPage();
              }
              else{
                if(this.statusValue=='RA') this.router.navigate(['/referral']);
                else if(this.statusValue=='RE') this.router.navigate(['quotation/plan/premium-details']);
                else{
                  this.onSetBackPage();
                } 
              }
           }
          else{
            if(this.endorsementSection && this.enableFieldsList.some(ele=>ele=='Covers' || ele=='AddOnCovers' || ele=='RemoveSection') && !this.endorseSIModification){
              this.router.navigate(['/portfolio/endorsementtype']);
            }
            else{
              this.onSetBackPage();
            }
          }
        }
        //}
      //}
    }
    onSetBackPage(){
      if((this.productId=='5' || this.productId=='29') && !this.endorsementSection) this.router.navigate(['/quotation/plan/premium-details']);
       else if(this.productId=='4'  && !this.endorsementSection) this.router.navigate(['quotation/plan/premium-details']);
      else if(this.endorsementSection && this.productId=='5') this.router.navigate(['/policyDetails']);
      else if(this.productId=='46') this.router.navigate(['quotation/plan/quote-details']);
      else if((this.endorsementSection && this.productId!='5' && this.productId!='46')){ this.router.navigate(['quotation/plan/risk-page']);}
      else this.router.navigate(['/quotation/plan/premium-details']);
    }
    updateFinalizeYN(type){
      let ReqObj = {
        "ProductId" : this.productId,
        "InsuranceId" : this.insuranceId,
        "RequestReferenceNo" : this.quoteRefNo,
        "FinalizeYn" : this.finalizeYN
      }
      let urlLink = `${this.CommonApiUrl}quote/changefinalyzestatus`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          if(data.Result){
            sessionStorage.setItem('FinalizeYN',this.finalizeYN);
                if(type=='back'){
                  if(this.statusValue){
                    if(this.adminSection){
                        if(this.statusValue=='RA') this.router.navigate(['/Admin/referralApproved']);
                        //else this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/customer-details']);
                        else if(this.statusValue=='RE') this.router.navigate(['/Admin/referralReQuote']);
                        else this.router.navigate(['/Admin/referralPending']);
                    }
                    else{
                      if(this.statusValue=='RA') this.router.navigate(['/Home/referralApproved']);
                      else if(this.statusValue=='RE') this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/customer-details']);
                      else{
                        this.onSetBackPage();
                       
                      } 
                    }
                  }
                  else{
                    if(this.endorsementSection && this.enableFieldsList.some(ele=>ele=='Covers' || ele=='AddOnCovers' || ele=='RemoveSection') && !this.endorseSIModification && this.endorseShortCode!=853){
                      this.router.navigate(['/portfolio/endorsementtype']);
                    }
                    else{
                      this.onSetBackPage();
                    }
                  }
                }
                else{
                    this.onUpdateFactor('',null);
                }
          }
        },
        (err) => { },
      );
    }
    getUWDetails(){
      let ReqObj = {
      "Limit":"0",
      "Offset":"100",
      "ProductId": this.productId,
      "LoginId": this.loginId,
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
      }
      let urlLink = `${this.CommonApiUrl}master/getactiveuwquestions`;
      this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
        (data: any) => {
          let res:any = data.Result;
          if(res.length!=0){
            this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/underwriter-details']);
          }
          else{
            if(this.productId=='5' || this.productId=='46' || this.productId=='29'){
              this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/vehicle-details']);
            }
            else if(this.productId=='59'){
              this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/domestic-quote-details']);
            }
          }
        },
        (err) => { },
      );
    }
    getEditQuoteDetails(){
      let i=0;
      this.vehicleDetailsList = this.vehicleDetailsList.filter(ele=>ele.CoverList.length!=0);
      for(let veh of this.vehicleDetailsList){
        if(veh.VehicleId) veh['Vehicleid'] = veh.VehicleId
          if(i ==0 ){ //this.remarks = veh.AdminRemarks;
             this.rejectedReason = veh.RejectReason}
          let covers = veh.CoverList;
          let j=0;
          console.log("CoverList are",covers,veh)
          for(let cover of covers){
            
              let entry = this.vehicleDetailsList.find(ele=>String(ele.VehicleId)==String(veh.VehicleId))
              if(entry){
                let coverList = entry.CoverList;
                if(cover.UserOpt=='Y' ){
                  let coverEntry = coverList.find(ele=>ele.CoverId == cover.CoverId)
                  if(coverEntry){
                    if(this.endorseShortCode == 846 && veh.Status=='D'){
                      cover['selected']= false;
                     // this.onSelectCover(cover,true,veh.Vehicleid,veh,'coverList','direct');
                    }
                    else{
                      cover['selected']= true;
                      this.onSelectCover(cover,true,veh.Vehicleid,veh,'coverList','direct');
                    }
                  }
                }
                else if(this.endorseAddOnCovers || this.endorseCovers || this.endorseSIModification){
                  if(cover.ModifiedYN==undefined){
                    cover['Modifiable']='N';
                    cover['ModifiedYN'] = 'Y';
                  }
                }
              }
              j+=1;
              if(j==covers.length){ i+=1;
                if(i==this.vehicleDetailsList.length){
                  this.showSection = true;
                  if(this.vehicleDetailsList.some(ele=>ele.ManualReferalYn=='Y') && !this.adminSection && this.statusValue){
                    this.isMannualReferal = "N";
                  }
                  this.selectedRowData = this.vehicleDetailsList[0];
                  this.getTermsSectionList();
                  this.onSelectSection();
                  this.coverSection = true;
                  // if(((this.uwReferralSection && !this.adminSection && (this.statusValue=='RP' || this.statusValue=='' || this.statusValue==null || this.statusValue==undefined))  || (!this.adminSection && this.statusValue=='RP' && this.vehicleDetailsList.some(ele=>ele.Status=='RP')))){
                  //   this.columnHeader = [
                  //     {
                  //       key: 'selected',
                  //       display: 'Select',
                  //       config: {
                  //         isChecked:true
                  //       },
                  //     },
                  //     { key: 'CoverName', display: 'Cover Name' },
                  //     { key: 'SumInsured', display: 'Sum Insured' }
              
                  //   ]
                  // }
                  // else{
                    this.columnHeader = [
        
                      {
                        key: 'CalcType',
                        display: '',
                        config: {
                          isExpand:true
                        },
                      },
                      // { key: 'SectionName', display: 'Section Name' },
                      {
                        key: 'selected',
                        display: 'Select',
                        config: {
                          isChecked:true
                        },
                      },
                      { key: 'CoverName', display: 'CoverName' },
                      // { key: 'ReferalDescription', display: 'Referral' },
                      { key: 'SumInsured', display: 'SumInsured' },
                      // { key: 'Rate', display: 'Rate' },
                      // { key: 'ExcessPercent', display: 'Excess Percent' },
                      // { key: 'ExcessAmount', display: 'Excess Amount' },
                      //{ key: 'MinimumPremium', display: 'Minimum' },
                      { key: 'PremiumAfterDiscount', display: 'AfterDiscount' },
                      { key: 'PremiumIncludedTax', display: 'IncludedTax' },
              
                    ]
              
                   
                  //}
                  // if(!this.endorsementSection){
                  if(this.insuranceId=='100027' || this.insuranceId=='100040' || this.insuranceId=='100042')   this.EmiInstallment();
                  // }
                  
                  console.log("Final Vehicle Listaaaa",this.vehicleDetailsList,this.selectedCoverList)
                }
              }
          }
  
          
      }
  
    }
    getTotalCost(rowData){
      //console.log('rowData entry',rowData);
      if(rowData?.totalPremium) return rowData?.totalPremium;
      else return 0;
  
    }
    numberWithCommas(totalPremium) {
      var parts = totalPremium.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
  }
    onCheckChange(){
  
    }
    onGetInfo(){
  
    }
    onSelectCover(rowData,event,vehicleId,vehicleData,type,directType){
      if(event==null){
        event = !this.canbeChecked(rowData);
      }
      //if(type=='coverList' && (rowData.SubCovers==null || (rowData.SubCovers!=null && rowData.SubCoverId!=null))){
        let vehicle:any;
          if(this.productId!='4' && this.productId!='5' && this.productId!='46' && this.productId!='29'){
            vehicle = this.vehicleDetailsList.find(ele=>(ele.LocationId==rowData.LocationId && ele.SectionId==rowData.SectionId));
            if(vehicle==undefined) vehicle = vehicleData
           
          }
          else{
  
            vehicle = this.vehicleDetailsList.find(ele=>ele.VehicleId==vehicleId);
          }
          console.log("Vehicle",vehicle,this.vehicleDetailsList)
          let coverList = vehicle?.CoverList;
          if(event){
            rowData.selected= true;
            if(this.coverModificationYN=='Y'){
              if(vehicle.Status=='D') rowData.DifferenceYN = 'N';
              else rowData.DifferenceYN = 'Y'
            }
            if(this.selectedCoverList.length!=0){
             
            let entry = this.selectedCoverList.filter(ele=>(ele.Id==vehicleId && (this.productId=='5' || this.productId=='46')) || (ele.Id==rowData.RiskId && (this.productId!='5' && this.productId!='46')) );
              if(entry.length==0){
                let id=null;
                if(rowData?.RiskId) id= rowData?.RiskId; else id=vehicleId
                if(rowData.SubCovers==null){
                  console.log("Error Vehicle",vehicle)
                  let element = {
                    "Covers": [
                      {
                        "CoverId": rowData.CoverId,
                        "SubCoverId": null,
                        "SubCoverYn": "N",
                        //"isReferal": rowData.isReferal
                      }
                    ],
                    "LocationId": rowData.LocationId,
                    "Id": id,
                    "SectionId": rowData.SectionId,
  
                  }
                  this.selectedCoverList.push(element);
                }
                
                
                if(directType=='change' && this.endorsementSection){
                  console.log('Endorsemet section Values')
                  if((this.endorseAddOnCovers || this.endorseCovers) && (rowData.Modifiable==undefined || rowData.Modifiable!='N')){
                    rowData['ModifiedYN'] = 'Y';
                  }
                  if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                    if(this.coverModificationYN=='Y'){
                      if(rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax<0){
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']-rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      }
                      else{
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      }
                      
                    }
                    else{
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    }
                    //rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax = 0;
                  }
                  else{
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.PremiumIncludedTax;
                  }
                }
                else if(vehicle?.totalPremium){
                  console.log('Endorsemet section Values 2')
                  rowData['Modifiable']='N';
                  if(this.endorseAddOnCovers || this.endorseCovers){
                    rowData['ModifiedYN'] = 'N';
                  }
                  if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                    if(this.coverModificationYN!='Y' || this.endorseSIModification || vehicle.Status=='D'){
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    }
                    
                  }
                  else{
                      if(rowData.CoverageType!='A' ){
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.PremiumIncludedTax;
                      }
                      
                  }
                  
                }
                else{
                  console.log('Endorsemet section Values3')
                  rowData['Modifiable']='N';
                  if(this.endorseAddOnCovers || this.endorseCovers){
                    rowData['ModifiedYN'] = 'N';
                  }
                  if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                    if(this.coverModificationYN!='Y' || this.endorseSIModification || vehicle.Status=='D'){
                      if(!vehicle?.totalLcPremium) {vehicle['totalLcPremium'] = 0;}
                      if(!vehicle?.totalPremium){ vehicle['totalPremium'] = 0;}
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    }
                  }
                  else{
                    if(rowData.CoverageType!='A'){
                      vehicle['totalLcPremium'] =  rowData.PremiumIncludedTax;
                      vehicle['totalPremium'] =  rowData.PremiumIncludedTax;
                    }
                  }
                }
                this.getTotalVehiclesCost();
                //this.totalPremium = this.totalPremium+rowData.PremiumIncludedTax
              }
              else{
                console.log('Endorsemet section Values4');
               let sectionEntry:any;
              if(this.productId=='4') sectionEntry = entry.find(ele=>ele.VehicleId == rowData.VehicleId);
              else sectionEntry = entry.find(ele=>ele.SectionId == rowData.SectionId);
               if(sectionEntry == undefined){
                if(rowData.SubCovers==null){
                  let id=null;
                  if(rowData?.RiskId) id= rowData?.RiskId; else id=vehicleId
                  let element = {
                    "Covers": [
                      {
                        "CoverId": rowData.CoverId,
                        "SubCoverId": null,
                        "SubCoverYn": "N",
                        //"isReferal": rowData.isReferal
                      }
                    ],
                    "LocationId": rowData.LocationId,
                    "Id": id,
                    "SectionId": rowData.SectionId,
  
                  }
                  this.selectedCoverList.push(element);
                  if(this.endorseAddOnCovers || this.endorseCovers){
                    rowData['ModifiedYN'] = 'Y';
                  }
                  console.log("Selected Cover Lists",this.selectedCoverList)
                }
                
                if(directType=='change' && this.endorsementSection){
                  
                  if((this.endorseAddOnCovers || this.endorseCovers) && (rowData.Modifiable==undefined || rowData.Modifiable!='N')){
                    rowData['ModifiedYN'] = 'Y';
                  }
                  if(this.coverModificationYN=='Y' && this.endorsementSection && vehicle?.totalPremium && rowData.Endorsements!=null){
                    if(rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax<0){
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']-rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    }
                    else{
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    }
                  }
                  else if(vehicle?.totalPremium){
                    rowData['Modifiable']='N';
                    if(this.endorseAddOnCovers || this.endorseCovers){
                      rowData['ModifiedYN'] = 'N';
                    }
                    if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                      if(this.coverModificationYN!='Y' || this.endorseSIModification){
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      }
    
    
                    }
                    else{
                      if(rowData.CoverageType!='A'){
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.PremiumIncludedTax;
                      }
                    }
                    
                  }
                  else{
                    rowData['Modifiable']='N';
                    if(this.endorseAddOnCovers || this.endorseCovers){
                      rowData['ModifiedYN'] = 'N';
                    }
                    if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                      if(this.coverModificationYN!='Y' || this.endorseSIModification){
                        vehicle['totalLcPremium'] = rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] = rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      }
                    }
                    else{
                      if(rowData.CoverageType!='A'){
                        vehicle['totalLcPremium'] =  rowData.PremiumIncludedTax;
                        vehicle['totalPremium'] =  rowData.PremiumIncludedTax;
                      }
                    }
                  }
                  
                }
                else if(vehicle?.totalPremium){
                  rowData['Modifiable']='N';
                  if(this.endorseAddOnCovers || this.endorseCovers){
                    rowData['ModifiedYN'] = 'N';
                  }
                  if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                    if(this.coverModificationYN!='Y' || this.endorseSIModification){
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    }
  
  
                  }
                  else{
                    if(rowData.CoverageType!='A'){
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.PremiumIncludedTax;
                    }
                  }
                  
                }
                else{
                  rowData['Modifiable']='N';
                  if(this.endorseAddOnCovers || this.endorseCovers){
                    rowData['ModifiedYN'] = 'N';
                  }
                  if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                    if(this.coverModificationYN!='Y' || this.endorseSIModification){
                      vehicle['totalLcPremium'] = rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] = rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    }
                  }
                  else{
                    if(rowData.CoverageType!='A'){
                      console.log("Row Data",rowData,vehicle);
                      vehicle['totalLcPremium'] =  rowData.PremiumIncludedTax;
                      vehicle['totalPremium'] =  rowData.PremiumIncludedTax;
                    }
                  }
                }
                  this.getTotalVehiclesCost();
               }
               else{
                  let covers:any[] = sectionEntry.Covers;
                let findCover = covers.filter(ele=>ele.CoverId==rowData.CoverId);
                if(findCover.length==0) {
                  if(rowData.SubCovers==null){
                    let element = {
                          "CoverId": rowData.CoverId,
                           "SubCoverId": null,
                           "SubCoverYn": "N",
                    }
                    sectionEntry.Covers.push(element)
                  }
                  if(directType=='change' && this.endorsementSection){
                    if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                      if(this.coverModificationYN=='Y'){
                        if(rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax<0){
                          vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                          vehicle['totalPremium'] =  vehicle['totalPremium']-rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        }
                        else{
                          vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                          vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        }
                      }
                      else{
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      }
                      
                    }
                    else{
                      console.log('JJJJJJJJJ',vehicle?.totalLcPremium,vehicle?.totalPremium);
                      if(!vehicle?.totalLcPremium) {vehicle['totalLcPremium'] = 0;}
                      if(!vehicle?.totalPremium){ vehicle['totalPremium'] = 0; }
                      console.log('If cover changes10',rowData,rowData.PremiumIncludedTax,rowData.PremiumIncludedTax);
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.PremiumIncludedTax;
                        console.log('Total Premiums 111111111',vehicle?.totalPremium,rowData.PremiumIncludedTax);
                        vehicle['totalPremium'] =  vehicle['totalPremium'] + rowData.PremiumIncludedTax;
                        console.log('end', vehicle);
                    }
                  }
                  else if(vehicle?.totalPremium){
                    if(this.endorseAddOnCovers || this.endorseCovers){
                      rowData['ModifiedYN'] = 'N';
                    }
                    if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                      if(this.coverModificationYN!='Y' || this.endorseSIModification){
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      }
                    }
                    else{
                      if(rowData.CoverageType!='A'){
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.PremiumIncludedTax;
                      }
                    }
                  }
                  else{
                    if(this.endorseAddOnCovers || this.endorseCovers){
                      rowData['ModifiedYN'] = 'N';
                    }
                    if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                      if(this.coverModificationYN!='Y' || this.endorseSIModification){
                        
                        if(!vehicle?.totalLcPremium){ vehicle['totalLcPremium'] = 0;}
                        if(!vehicle?.totalPremium){ vehicle['totalPremium']=0;}
                        vehicle['totalLcPremium'] = rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] = rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      }
                      
                    }
                    else{
                      if(!vehicle?.totalLcPremium) {vehicle['totalLcPremium'] = 0;}
                      if(!vehicle?.totalPremium){ vehicle['totalPremium']=0;}
                      if(rowData.CoverageType!='A'){
                        vehicle['totalLcPremium'] =  rowData.PremiumIncludedTax;
                        vehicle['totalPremium'] =  rowData.PremiumIncludedTax;
                      }
                    }
                  }
                  this.getTotalVehiclesCost();
                }
               }
              }
            }
            else{
              if(rowData.SubCovers==null){
                let id=null;
                if(rowData.RiskDetails?.RiskId) id= rowData.RiskDetails?.RiskId; else id=vehicleId
                let element = {
                  "Covers": [
                    {
                      "CoverId": rowData.CoverId,
                      "SubCoverId": null,
                      "SubCoverYn": "N"
                    }
                  ],
                  "LocationId": rowData.LocationId,
                  "Id": id,
                  "SectionId": rowData.SectionId,
  
                }
                this.selectedCoverList.push(element);
              }
              if(directType=='change' && this.endorsementSection){
                if((this.endorseAddOnCovers || this.endorseCovers) && (rowData.Modifiable==undefined || rowData.Modifiable!='N')){
                  rowData['ModifiedYN'] = 'Y';
                }
                if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                  if(this.coverModificationYN=='Y'){
                    if(rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax<0){
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']-rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    }
                    else{
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    }
                    
                  }
                  else{
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                  }
                  
                }
                else{
                  if(rowData.CoverageType!='A'){
                  vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.PremiumIncludedTax;
                  vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.PremiumIncludedTax;
                  }
                }
                
              }
              else if(vehicle?.totalPremium){
                if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                  if(this.coverModificationYN!='Y' || this.endorseSIModification){
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                  }
                }
                else{
                  if(rowData.CoverageType!='A'){
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.PremiumIncludedTax;
                  }
                }
              
              }
              else{
                if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                  if(this.coverModificationYN!='Y' || this.endorseSIModification){
                    vehicle['totalLcPremium'] = rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] = rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                  }
                  else{
                  }
                }
                else{
                  if(rowData.CoverageType!='A'){
                  console.log("Veh",vehicle);
                  vehicle['totalLcPremium'] =  rowData.PremiumIncludedTax;
                  vehicle['totalPremium'] =  rowData.PremiumIncludedTax;
                  }
                }
                
              }
            this.getTotalVehiclesCost();
            }
          }
          else{
            let entry=null;
            rowData['selected'] = false;
            rowData['UserOpt'] ='N';
            let id=null;
            if(rowData.RiskDetails?.RiskId) id= rowData.RiskDetails?.RiskId; else id=vehicleId
            if(this.productId!='5' && this.productId!='46'){
              entry = this.selectedCoverList.filter(ele=>ele.Id==id && ele.LocationId==rowData.LocationId)
            }
            else entry = this.selectedCoverList.filter(ele=>ele.Id==vehicleId)
            if(entry){
              
              let sectionEntry = entry.find(ele=>ele.SectionId==rowData.SectionId && ele.LocationId==rowData.LocationId);
              if(sectionEntry!=undefined){
                let covers:any[] = sectionEntry.Covers;
                let CoverIndex = covers.findIndex(ele=>ele.CoverId==rowData.CoverId);
                covers = covers.filter(ele=>ele.CoverId!=rowData.CoverId);
                if(covers.length==0 && (this.productId=='5' || this.productId=='46')) this.selectedCoverList = this.selectedCoverList.filter(ele=>ele.Id!=id && ele.LocationId==rowData.LocationId)
                else{
                      let finalList = [],i=0;
                      for(let sec of this.selectedCoverList){
                        if(sec.Id==id && sec.SectionId==rowData.SectionId && sec.LocationId==rowData.LocationId){
                          sec.Covers = sec.Covers.filter(ele=>ele.CoverId!=rowData.CoverId); 
                        }
                        if(sec.Covers.length!=0) finalList.push(sec)
                        i+=1;
                        if(i==this.selectedCoverList.length) this.selectedCoverList=finalList;
                      }
                }
                if(this.coverModificationYN=='Y') {rowData['DifferenceYN'] = 'N';}
                if(directType=='change' && this.endorsementSection){
                  if(!vehicle?.totalLcPremium) {vehicle['totalLcPremium'] = 0;}
                  if(!vehicle?.totalPremium) { vehicle['totalPremium'] = 0 ;}
                  if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                      if(this.coverModificationYN=='Y'){
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] + rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']+rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      }
                      else{
                        vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                        vehicle['totalPremium'] =  vehicle['totalPremium']-rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                      }
                    }
                    else{
                      if(rowData.CoverageType!='A'){
                      vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - rowData.PremiumIncludedTax;
                      vehicle['totalPremium'] =  vehicle['totalPremium'] - rowData.PremiumIncludedTax;
                      }
                    }
                  
                }
                else if(vehicle?.totalPremium){
                  if(rowData.Endorsements!=null && rowData.Endorsements!=undefined){
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']-rowData.Endorsements[rowData.Endorsements.length-1].PremiumIncludedTax;
                  }
                  else{
                    if(rowData.CoverageType!='A'){
                    vehicle['totalLcPremium'] = vehicle['totalLcPremium'] - rowData.PremiumIncludedTax;
                    vehicle['totalPremium'] =  vehicle['totalPremium']-rowData.PremiumIncludedTax;
                    }
                  }
                
                }
                if(rowData.SubCovers){
                  rowData.SubCoverId=null;
                  for(let sub of rowData.SubCovers){
                    sub['selected'] = false;
                  }
                }
                this.getTotalVehiclesCost();
              }
            
            }
          }
    }
    checkCoverSelection(vehicleData,coverData){
      if(this.finalizeYN=='Y') return true;
      else if(this.endorsementSection && !this.adminSection && this.statusValue!='RA'){
        if(this.endorseCovers){
          if(!this.adminSection && coverData.ModifiedYN =='N') return false;
          else if(!this.adminSection) return true;
          else return false;
        }
        else if(this.endorseSIModification){
          // console.log("Admin Section",this.adminSection,coverData.ModifiedYN)
          if(!this.adminSection && coverData.ModifiedYN =='Y') return false;
          else if(!this.adminSection) return true;
          else return false;
        }
        else if(vehicleData.EndorsementYN=='Y') return false;
        else if(this.endorseAddOnCovers && coverData.ModifiedYN =='Y'){
            return false;
        }
        else if(this.enableAddVehicle){
          if(vehicleData.EndorsementYn=='Y')return false;
          else return true;
        }
        else if(this.endorseAddOnCovers && this.adminSection )return false;
        else return true;  
      }
      else if(!this.adminSection && this.statusValue=='RA' && (((coverData.isSelected=='D' || coverData.isSelected=='O' || coverData.isSelected=='Y' || coverData?.UserOpt=='Y') && !this.endorsementSection) || 
      (this.endorsementSection && (coverData.UserOpt=='Y' || coverData.isSelected=='D' || coverData.isSelected=='O')))) return true;
      else return false;
    }
    onViewOverAllPremium(modal){
      this.discountList = [];this.loadingList=[];
      this.onUpdateFactor('fleetSave',modal);
     
      
    }
    setDiscountDetails(vehData,rowData,modal){
      this.discountList = [];this.loadingList=[];
      this.selectedVehId = vehData.VehicleId;this.coverRateError=false;
      this.selectedCoverId = rowData.CoverId;
      this.ratePercent = rowData.Rate;
      this.CoverName = rowData.CoverName;
      this.minimumPremiumYN = rowData.MinimumPremiumYn;
      this.minRateYN = rowData.MinimumRateYn;
      if(rowData.Discounts) this.discountList = rowData.Discounts;
      if(rowData.Loadings) this.loadingList = rowData.Loadings;
      if(rowData.Endorsements){
          this.discountEndtSection = true;
          this.sumInsured = rowData.SumInsured;
          //this.sumInsured = rowData.Endorsements[rowData.Endorsements.length-1].EndorsementSumInsured;
          this.calcType = rowData.Endorsements[rowData.Endorsements.length-1].EndorsementCalcType;
          this.excessPercent = rowData.Endorsements[rowData.Endorsements.length-1].ExcessPercent;
          this.ratePercent = rowData.Endorsements[rowData.Endorsements.length-1].EndorsementRate;
          this.excessAmount = rowData.Endorsements[rowData.Endorsements.length-1].ExcessAmount;
          this.differenceSI = rowData.Endorsements[rowData.Endorsements.length-1].EndorsementSumInsured;
          this.differencePremium = rowData.Endorsements[rowData.Endorsements.length-1].PremiumAfterDiscount
          this.beforeDiscount = rowData.Endorsements[rowData.Endorsements.length-1].PremiumBeforeDiscount;
          this.selectedSectionId = vehData.SectionId;
      }
      else{
        this.discountEndtSection = false;
        this.sumInsured = rowData.SumInsured;
        this.calcType = rowData.CalcType;
        this.selectedSectionId = vehData.SectionId;
        this.ratePercent = rowData.Rate;
        if(rowData.ActualRate) this.actualRatePercent = rowData.ActualRate;
        else this.actualRatePercent = 0;
        if(rowData.MinRate) this.minRatePercent = rowData.MinRate;
        else this.minRatePercent = 0;
        this.excessPercent = rowData.ExcessPercent;
        this.excessAmount = rowData.ExcessAmount;
        this.beforeDiscount = rowData.PremiumBeforeDiscount;
        this.afterDiscount = rowData.PremiumAfterDiscount;
      }
      // this.discountOpen(modal);
      if(modal=='excess') this.showExcessSection = true;
      else this.showDiscountSection = true;
      
    }
    SaveLoadingDetails(modal){
      if(this.loadingList.length!=0){
        let i=0;
        for(let load of this.loadingList){
          console.log("Entry Load",load)
          if(load.LoadingAmount!=0 && String(load.LoadingAmount).includes(',')) load['LoadingAmount'] = Number(load.LoadingAmount.replaceAll(',',''));
          i+=1;
          if(i==this.loadingList.length) this.finalSaveLoading(modal)
        }
      }
      else this.finalSaveLoading(modal)
    }
    checkRangeCoverRate(){
      if(this.minRateYN!=undefined){
        if(this.minRateYN=='Y'){
          if(this.minRatePercent!=null && this.actualRatePercent!=null){
              if(this.ratePercent!='' && this.ratePercent!=null){
                if(Number(this.ratePercent)<this.minRatePercent || Number(this.ratePercent)>this.actualRatePercent){
                  this.coverRateError = true;
                }
                else this.coverRateError = false;
              }
          }
          else this.coverRateError = false;
        }
        else this.coverRateError = false;
      }
      else this.coverRateError = false;
    }
    checkDiscountRate(rowData,type){
      if(this.minRateYN!=undefined){
        if(this.minRateYN=='Y'){
          if((rowData.DiscountRate!=null && rowData.DiscountRate!='' && type=='P') || (rowData.DiscountAmount!=null && rowData.DiscountAmount!='' && type=='A')){
            let actualRate = 0,minRate=0,rate=null;
            if(type=='A') rate=Number(rowData.DiscountAmount.replaceAll(',',''));
            else rate = Number(rowData.DiscountRate)
            if(rowData.ActualRate!=null && rowData.ActualRate!=undefined){actualRate=rowData.ActualRate}
            if(rowData.MinRate!=null && rowData.MinRate!=undefined){minRate=rowData.MinRate}
            if(actualRate!=0 && minRate!=0){
              if(rate<minRate || rate>actualRate) rowData['RateError']=true;
              else rowData['RateError']=true;
            }
            else rowData['RateError']=false;
          }
          else rowData['RateError'] = false; 
        }
        else rowData['RateError']=false;
      }
      else  rowData['RateError']=false;
    }
    checkLoadingRate(rowData,type){
      if(this.minRateYN!=undefined){
        if(this.minRateYN=='Y'){
          if((rowData.LoadingRate!=null && rowData.LoadingRate!='' && type=='P') || (rowData.LoadingAmount!=null && rowData.LoadingAmount!='' && type=='A')){
            let actualRate = 0,minRate=0,rate=null;
            if(type=='A') rate=Number(rowData.LoadingAmount.replaceAll(',',''));
            else rate = Number(rowData.LoadingRate)
            if(rowData.ActualRate!=null && rowData.ActualRate!=undefined){actualRate=rowData.ActualRate}
            if(rowData.MinRate!=null && rowData.MinRate!=undefined){minRate=rowData.MinRate}
            if(actualRate!=0 && minRate!=0){
              if(rate<minRate || rate>actualRate) rowData['RateError']=true;
              else rowData['RateError']=true;
            }
            else rowData['RateError']=false;
          }
          else rowData['RateError'] = false; 
        }
        else rowData['RateError'] = false; 
      }
      else rowData['RateError'] = false; 
    }
    checkSubmitValue(){
      return (!this.coverRateError && !this.loadingList.some(ele=>ele.RateError==true) && !this.discountList.some(ele=>ele.RateError==true))
    }
    getLoadingHeader(row){
      if(this.lang=='en') return `Rate Must be between ${row.MinRate} - ${row.ActualRate}`;
      else if(this.lang=='fr') return `La valeur du taux doit être comprise entre ${row.MinRate} - ${row.ActualRate}`;
      else if(this.lang=='po') return `O valor da taxa deve estar entre ${row.MinRate} - ${row.ActualRate}`;
    }
    getValidationHeader(){
      if(this.lang=='en') return `Rate Must be between ${this.minRatePercent} - ${this.actualRatePercent}`;
      else if(this.lang=='fr') return `La valeur du taux doit être comprise entre ${this.minRatePercent} - ${this.actualRatePercent}`;
      else if(this.lang=='po') return `O valor da taxa deve estar entre ${this.minRatePercent} - ${this.actualRatePercent}`;
    }
    finalSaveLoading(modal){
      let vehData = this.vehicleDetailsList.filter(ele=>ele.VehicleId==this.selectedVehId);
      let secData = vehData.filter(ele=>ele.SectionId==this.selectedSectionId);
      console.log("Final Sellec",vehData,secData,this.selectedSectionId)
      let coverData = secData[0].CoverList.filter(ele=>ele.CoverId==this.selectedCoverId);
      if(coverData[0]?.Endorsements){
        coverData[0].Endorsements[coverData[0].Endorsements.length-1].PremiumBeforeDiscount = this.beforeDiscount;
        coverData[0].Endorsements[coverData[0].Endorsements.length-1].PremiumAfterDiscount = this.differencePremium;
        coverData[0].Endorsements[coverData[0].Endorsements.length-1].EndorsementCalcType = this.calcType;
        coverData[0].Endorsements[coverData[0].Endorsements.length-1].ExcessPercent = this.excessPercent;
        coverData[0].Endorsements[coverData[0].Endorsements.length-1].ExcessAmount = this.excessAmount;
        coverData[0].Endorsements[coverData[0].Endorsements.length-1].EndorsementRate = this.ratePercent;
  
      }
      else{
        coverData[0].PremiumAfterDiscount = this.afterDiscount;
        coverData[0].Discounts = this.discountList;
        coverData[0].ratePercent = this.ratePercent;
        coverData[0].ExcessPercent = this.excessPercent;
        coverData[0].ExcessAmount = this.excessAmount;
        coverData[0].Rate = this.ratePercent;
      }
      
      this.selectedVehId = null;this.excessPercent = null;
      this.selectedCoverId = null;this.excessAmount=null;
      this.selectedSectionId = null;this.ratePercent = null;
      this.beforeDiscount = null;this.loadingList =[];
      this.afterDiscount = null;this.discountList =[];
      if(coverData){
        this.showExcessSection = false; this.showDiscountSection=false;
      }
    }
    premiumComma(i,LoadingAmount){
      console.log('HHHHHHH',LoadingAmount);
      let entry = this.loadingList[i];
      console.log("Entry Came")
      if(entry.LoadingAmount){
        let value = entry.LoadingAmount.replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.loadingList[i]['LoadingAmount'] = value;
      }
      this.setTotalPremium();
    }
    setTotalPremium(){
        let finalPremium = 0;
        finalPremium = Number(this.beforeDiscount+finalPremium);
         
        if(this.loadingList.length!=0){
            let i=0;
            for(let load of this.loadingList){
              if(load.LoadingAmount){
                finalPremium = finalPremium+Number(load.LoadingAmount.replaceAll(',',''));
              }
                i+=1;
                if(i==this.loadingList.length){
                  if(this.discountList.length!=0){
                      let j =0;
                      for(let dis of this.discountList){
                          if(dis.DiscountAmount!=0 && dis.DiscountAmount!=null)  finalPremium = finalPremium + dis.DiscountAmount
                          j+=1;
                          if(j==this.discountList.length) this.afterDiscount = finalPremium
                      }
                  }
                  else this.afterDiscount = finalPremium
                }
            }
        }
    }
    getTotalVehiclesCost(){
      let totalCost = 0,i=0,totalLocalCost=0;
      
      for(let veh of this.vehicleDetailsList){
        
        if(veh?.totalPremium) totalCost = totalCost+veh?.totalPremium;console.log('Total1 premium',veh,totalCost,veh?.totalPremium);
        if(veh?.totalLcPremium) totalLocalCost = totalLocalCost+veh?.totalLcPremium; console.log('Total2 premium',veh,totalLocalCost,veh?.totalLcPremium);
        i+=1;
        if(i==this.vehicleDetailsList.length){
          this.localPremiumCost = totalLocalCost;
          this.totalPremium = totalCost;
          console.log('Total3 premium', this.localPremiumCost);
        console.log('Total4 premium',this.totalPremium );
          
      }
      console.log("Total Premium",this.vehicleDetailsList)
      console.log("Final Cost Of Vehicle",this.vehicleDetailsList)
        console.log('TTTTTTTT',this.totalPremium);
      }
    }
    onEMIChange(){
      if(this.emiPeriod!='N'){
        console.log("Entered Level",this.emiPeriod,this.EmiDetails)
        if(this.EmiDetails==null || this.EmiDetails==undefined || this.EmiDetails.length==0){
        }
      }
    }
    onEmiYNChange(){
      if(this.emiYN == 'Y' && this.insuranceId!='100002') this.EmiInstallment();
    }
    EmiInstallment(){
      // if(this.localCurrency==undefined) this.localCurrency = 'TZS'
      // let ReqObj = {
      // "PremiumWithTax":this.totalPremium,
      //  "InsuranceId":this.insuranceId,
      //  "ProductId":this.productId,
      //  "Currency": this.localCurrency,
      //  "PolicyType":this.emipolicytype
      // }
      // let urlLink = `${this.CommonApiUrl}api/viewemi`;
      // this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
      //   (data: any) => {
      //     if(data.Result){
      //         //let emiList = data.Result;
      //         let emiList=[];
      //         emiList = data.Result;
      //         if(data.Result.length!=0){
      //               let EmiYnShow =data.Result[0].EmiYn;
      //               if(EmiYnShow=='Y'){
      //                 this.gridshow=true;
      //                 if(emiList.length!=0){
        
      //                   let i=0,yearlyList=[],nineList=[],sixList=[],threeList=[],fiveList=[],eightList=[];
      //                   for(let entry of emiList){
      //                       let emiDetails = entry.EmiPremium;
      //                       if(emiDetails.length==13){
      //                         this.yearlySection = true;
      //                         yearlyList = entry.EmiPremium;
      //                       }
      //                       else if(emiDetails.length==10){
      //                         nineList = entry.EmiPremium;
      //                         this.nineMonthSection = true;
      //                       }
      //                       else if(emiDetails.length==7){
      //                         sixList = entry.EmiPremium;
      //                         this.sixMonthSection = true;
      //                       }
      //                       else if(emiDetails.length==4){
      //                         threeList = entry.EmiPremium;
      //                         this.threeMonthSection = true;
      //                       }
      //                       else if(emiDetails.length==6){
      //                         fiveList = entry.EmiPremium;
      //                         this.fiveMonthSection = true;
      //                       }
      //                       else if(emiDetails.length==9){
      //                         eightList = entry.EmiPremium;
      //                         this.eightMonthSection = true;
      //                       }
      //                       i+=1;
      //                       if(i==emiList.length){
      //                           this.setEmiTableValues(yearlyList,nineList,sixList,threeList,fiveList,eightList);
      //                       }
      //                   }
      //                   console.log('tttt',this.totalPremium);
      //                 }
      //                 else{
      //                   this.emiYN='N';
      //                   // let type: NbComponentStatus = 'danger';
      //                   // const config = {
      //                   //   status: type,
      //                   //   destroyByClick: true,
      //                   //   duration: 4000,
      //                   //   hasIcon: true,
      //                   //   position: NbGlobalPhysicalPosition.TOP_RIGHT,
      //                   //   preventDuplicates: false,
      //                   // };
      //                   // this.toastrService.show(
      //                   //   'EMI Option',
      //                   //   'No EMI Plan Available',
      //                   //   config);
      //                 }
      //               }
      //               else{
      //                 this.gridshow=true;
      //               }
      //         }
      //         else{this.gridshow=true;}
  
      //         //this.getBorrowerList();
      //     }
      //   },
      //   (err) => { },
      // );
    }
    setEmiTableValues(yearlyList,nineList,sixList,threeList,fiveList,eightList){
      if(this.yearlySection){
         let i=0;this.Emilist1=[];
         for(let entry of yearlyList){
              let data = entry;
              if(yearlyList[i]){data['yearlyAmount']=yearlyList[i].InstallmentAmount}
              else{data['yearlyAmount']=null}
              if(nineList[i]){data['nineAmount']=nineList[i].InstallmentAmount}
              else{data['nineAmount']=null}
              if(sixList[i]){data['sixAmount']=sixList[i].InstallmentAmount}
              else{data['sixAmount']=null}
              if(threeList[i]){data['threeAmount']=threeList[i].InstallmentAmount}
              else{data['threeAmount']=null}
              if(fiveList[i]){data['fiveAmount']=fiveList[i].InstallmentAmount}
              else{data['fiveAmount']=null}
              if(eightList[i]){data['eightAmount']=eightList[i].InstallmentAmount}
              else{data['eightAmount']=null}
              this.Emilist1.push(entry);
              i+=1;
              if(i==yearlyList.length){this.emiSection=true}
         }
      }
      else if(this.nineMonthSection){
        let i=0;this.Emilist1=[];
        for(let entry of nineList){
             let data = entry;
             if(yearlyList[i]){data['yearlyAmount']=yearlyList[i].InstallmentAmount}
             else{data['yearlyAmount']=null}
             if(nineList[i]){data['nineAmount']=nineList[i].InstallmentAmount}
             else{data['nineAmount']=null}
             if(sixList[i]){data['sixAmount']=sixList[i].InstallmentAmount}
             else{data['sixAmount']=null}
             if(threeList[i]){data['threeAmount']=threeList[i].InstallmentAmount}
             else{data['threeAmount']=null}
             if(fiveList[i]){data['fiveAmount']=fiveList[i].InstallmentAmount}
             else{data['fiveAmount']=null}
             if(eightList[i]){data['eightAmount']=eightList[i].InstallmentAmount}
             else{data['eightAmount']=null}
             this.Emilist1.push(entry);
             i+=1;
             if(i==nineList.length){this.emiSection=true}
        }
     }
     else if(this.sixMonthSection){
        let i=0;this.Emilist1=[];
        for(let entry of sixList){
             let data = entry;
             if(yearlyList[i]){data['yearlyAmount']=yearlyList[i].InstallmentAmount}
             else{data['yearlyAmount']=null}
             if(nineList[i]){data['nineAmount']=nineList[i].InstallmentAmount}
             else{data['nineAmount']=null}
             if(sixList[i]){data['sixAmount']=sixList[i].InstallmentAmount}
             else{data['sixAmount']=null}
             if(threeList[i]){data['threeAmount']=threeList[i].InstallmentAmount}
             else{data['threeAmount']=null}
             if(eightList[i]){data['eightAmount']=eightList[i].InstallmentAmount}
             else{data['eightAmount']=null}
             this.Emilist1.push(entry);
             i+=1;
             if(i==sixList.length){this.emiSection=true}
  
        }
     }
     else if(this.threeMonthSection){
        let i=0;this.Emilist1=[];
        for(let entry of threeList){
             let data = entry;
             if(yearlyList[i]){data['yearlyAmount']=yearlyList[i].InstallmentAmount}
             else{data['yearlyAmount']=null}
             if(nineList[i]){data['nineAmount']=nineList[i].InstallmentAmount}
             else{data['nineAmount']=null}
             if(sixList[i]){data['sixAmount']=sixList[i].InstallmentAmount}
             else{data['sixAmount']=null}
             if(threeList[i]){data['threeAmount']=threeList[i].InstallmentAmount}
             else{data['threeAmount']=null}
             if(eightList[i]){data['eightAmount']=eightList[i].InstallmentAmount}
             else{data['eightAmount']=null}
             this.Emilist1.push(entry);
             i+=1;
             if(i==threeList.length){this.emiSection=true}
        }
     }
     else if(this.FiveMonthSection){
      let i=0;this.Emilist1=[];
      for(let entry of fiveList){
           let data = entry;
           if(yearlyList[i]){data['yearlyAmount']=yearlyList[i].InstallmentAmount}
           else{data['yearlyAmount']=null}
           if(nineList[i]){data['nineAmount']=nineList[i].InstallmentAmount}
           else{data['nineAmount']=null}
           if(sixList[i]){data['sixAmount']=sixList[i].InstallmentAmount}
           else{data['sixAmount']=null}
           if(threeList[i]){data['threeAmount']=threeList[i].InstallmentAmount}
           else{data['threeAmount']=null}
           if(threeList[i]){data['fiveAmount']=fiveList[i].InstallmentAmount}
           else{data['fiveAmount']=null}
           if(eightList[i]){data['eightAmount']=eightList[i].InstallmentAmount}
           else{data['eightAmount']=null}
           this.Emilist1.push(entry);
           i+=1;
           if(i==fiveList.length){this.emiSection=true}
      }
   }
   else if(this.eightMonthSection){
    let i=0;this.Emilist1=[];
    for(let entry of fiveList){
         let data = entry;
         if(yearlyList[i]){data['yearlyAmount']=yearlyList[i].InstallmentAmount}
         else{data['yearlyAmount']=null}
         if(nineList[i]){data['nineAmount']=nineList[i].InstallmentAmount}
         else{data['nineAmount']=null}
         if(sixList[i]){data['sixAmount']=sixList[i].InstallmentAmount}
         else{data['sixAmount']=null}
         if(threeList[i]){data['threeAmount']=threeList[i].InstallmentAmount}
         else{data['threeAmount']=null}
         if(threeList[i]){data['fiveAmount']=fiveList[i].InstallmentAmount}
         else{data['fiveAmount']=null}
         if(eightList[i]){data['eightAmount']=eightList[i].InstallmentAmount}
         else{data['eightAmount']=null}
         this.Emilist1.push(entry);
         i+=1;
         if(i==eightList.length){this.emiSection=true}
        }
      }
     console.log("Final Emi List",this.EmiDetails1)
    }
    ongetTaxDetails(rowData){
      console.log("Tax Details",rowData);
      this.MinimumPremium = (rowData.MinimumPremium/rowData.ExchangeRate);
      this.premiumExcluedTax = rowData.PremiumExcluedTax;
      this.premiumIncluedTax = rowData.PremiumIncludedTax;
      this.dependantTaxList = [];this.taxList =[];
      this.premiumBeforeTax = 0;
      if(rowData.Taxes){
        if(rowData.Taxes.length!=0){
          this.dependantTaxList = rowData.Taxes.filter(ele=>ele.DependentYN=='N');
          if(this.dependantTaxList.length!=0){
            let i=0;
            for(let tax of this.dependantTaxList){this.premiumBeforeTax = this.premiumBeforeTax+tax.TaxAmount;i+=1;
                if(i==this.dependantTaxList.length) this.premiumBeforeTax = this.premiumBeforeTax + this.premiumExcluedTax;
            }
          }
          this.taxList = rowData.Taxes.filter(ele=>ele.DependentYN!='N');
        }
       
      }
    }
    onGetEndorsement(rowData){
      console.log("End Details",rowData);
      this.endorsementDetails = rowData.Endorsements[rowData.Endorsements.length-1];
      //this.endorsementFeePercent = this.endorsementDetails.EndorsementFees[0].TaxRate;
    }
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue?.trim().toLowerCase();
    }
    onFormSubmit(){
      console.log("Selected Covers",this.selectedCoverList);
      
      this.subuserType = sessionStorage.getItem('typeValue');
      if(this.selectedCoverList.length!=0){
        let coverList:any[]=[];
        let loginType = this.userDetails.Result.LoginType;
        let i=0;
        if(loginType){
          if(loginType=='B2CFlow' && this.sampleloginId =='guest'){
            this.customerReferenceNo = null;
            let customerObj = JSON.parse(sessionStorage.getItem('b2cCustomerObj'));
              this.customerObj = this.customerDetails
              this.customerReferenceNo = sessionStorage.getItem('customerReferenceNo');
              this.generateOtp();
            //this.onCustomerSave(customerObj);
          }
          else this.onProceed(this.selectedCoverList);
        }
        else this.onProceed(this.selectedCoverList);
  
      }
    }
    public async onCustomerSave(data) {
      this.customerObj = data;
        let appointmentDate = "", dobOrRegDate = "", taxExemptedId = null,cityName=null, stateName=null,businessType = null;
        //  if(data.AppointmentDate!= undefined && data.AppointmentDate!=null && data.AppointmentDate!=''){
        // 	appointmentDate = this.datePipe.transform(data.AppointmentDate, "dd/MM/yyyy");
        //  }
        // if(data.CityName!=null && data.CityName!='') cityName = this.stateList.find(ele=>ele.Code==data.CityName)?.CodeDesc;
        // if(data.state!=null && data.state!='') stateName = this.regionList.find(ele=>ele.Code==data.state)?.CodeDesc;
        let ReqObj = {
          "BrokerBranchCode": this.brokerbranchCode,
          "CustomerReferenceNo": this.customerReferenceNo,
          "InsuranceId": this.insuranceId,
          "BranchCode": this.branchCode,
          "ProductId": "5",
          "AppointmentDate": appointmentDate,
          "Address1": data?.Address1,
          "Address2": data?.Address2,
          "BusinessType": businessType,
          "CityCode": data?.CityName,
          "CityName": cityName,
          "ClientName": data?.ClientName,
          "Clientstatus": 'P',
          "CreatedBy": this.loginId,
          "DobOrRegDate": dobOrRegDate,
          "Email1": data?.EmailId,
          "Email2": null,
          "Email3": null,
          "Fax": null,
          "Gender": data?.Gender,
          "IdNumber": data?.IdNumber,
          "IdType": data.IdType,
          "IsTaxExempted": 'N',
          "Language": "1",
          "MobileNo1": data.MobileNo,
          "MobileNo2": null,
          "MobileNo3": null,
          "Nationality": data.Country,
          "Occupation": data?.Occupation,
          "Placeofbirth": "Chennai",
          "PolicyHolderType": data.IdType,
          "PolicyHolderTypeid": data?.PolicyHolderTypeid,
          "PreferredNotification": data?.PreferredNotification,
          "RegionCode": "01",
          "MobileCode1": data?.MobileCode,
          "WhatsappCode": data?.MobileCode,
          "MobileCodeDesc1": data?.MobileCodeDesc,
          "WhatsappDesc": data?.MobileCodeDesc,
          "WhatsappNo": data.MobileNo,
          "StateCode": data?.state,
          "StateName": stateName,
          "Status": 'P',
          "Street": data?.Street,
          "TaxExemptedId": taxExemptedId,
          "TelephoneNo1": data?.TelephoneNo,
          "PinCode": data?.PinCode,
          "TelephoneNo2": null,
          "TelephoneNo3": null,
          "Title": data.Title,
          "VrTinNo": data.vrngst,
          "SaveOrSubmit": 'Submit'
        }
        let urlLink = `${this.CommonApiUrl}api/customer`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            let res: any = data;
            console.log(data);
            if (data.ErrorMessage.length != 0) {
              if (res.ErrorMessage) {
                const errorList: any[] = res.ErrorMessage || res?.Result?.ErrorMessage;
                  let ulList:any='';
                  for (let index = 0; index < errorList.length; index++) {
          
                  const element = errorList[index];
                  ulList +=`<li class="list-group-login-field">
                    <div style="color: darkgreen;">Field<span class="mx-2">:</span>${element?.Field}</div>
                    <div style="color: red;">Message<span class="mx-2">:</span>${element?.Message}</div>
                  </li>`
                  }
                  Swal.fire({
                  title: '<strong>Form Validation</strong>',
                  icon: 'info',
                  html:
                    `<ul class="list-group errorlist">
                    ${ulList}
                  </ul>`,
                  showCloseButton: true,
                  focusConfirm: false,
                  confirmButtonText:
                    '<i class="fa fa-thumbs-down"></i> Errors!',
                  confirmButtonAriaLabel: 'Thumbs down, Errors!',
                  })
                }
            }
            else {
              
            }
          },
  
          (err: any) => { console.log(err); },
        );
    }
    onOtpValidate() {
  
      if (this.otpValue == "" || this.otpValue == undefined || this.otpValue == null) {
        let element = '<div class="my-1"><i class="far fa-dot-circle text-danger p-1"></i>Please Enter OTP</div>';
        Swal.fire(
        'Please Fill Valid Value',
        `${element}`,
        'error',
        )
      }
      else {
        this.otpValue = this.otpValue.replace(/\D/g, '');
        let reqObj = {
        "CompanyId": this.insuranceId,
        "ProductId": this.productId,
        "AgencyCode": this.agencyCode,
        "OtpToken": this.otpId,
        "UserOTP": this.otpValue,
        "CreateUser": true,
        "CustomerId": this.customerReferenceNo,
        "ReferenceNo": sessionStorage.getItem('quoteReferenceNo') 
        }
        let url = `${this.CommonApiUrl}otp/validate`;
        try {
        this.sharedService.onPostMethodSync(url, reqObj).subscribe((data: any) => {
          console.log("Otp Generate", data);
          if (data) {
          if (data.Errors) {
            let element = '';
            for (let i = 0; i < data.Errors.length; i++) {
            element += '<div class="my-1"><i class="far fa-dot-circle text-danger p-1"></i>' + data.Errors[i].Message + "</div>";
            }
    
            Swal.fire(
            'Please Fill Valid Value',
            `${element}`,
            'error',
            )
          }
          else {
    
    
            this.otpId = "";
            this.otpValue = "";
            this.onGuestLogin()
           
          }
          }
        }, (err) => {
        })
        } catch (error) {
        }
      }
    }
      onGuestLogin(){
      
        const urlLink = `${this.CommonApiUrl}authentication/login`;
        let loginId=this.customerObj.MobileCodeDesc1+this.customerObj.MobileNo1
        const reqData = {
        "LoginId": loginId,
        "Password": 'Admin@01',
        "ReLoginKey": 'Y'
        };
      
          this.sharedService.onPostMethodSync(urlLink, reqData).subscribe(
            (data: any) => {
              let res: any = data;
              console.log(data);
                if (data.Result) {
                  this.sampleloginId = loginId;
                  const Token = data?.Result?.Token;
                  this.authService.login(data);
                  this.authService.UserToken(Token);
                  data.Result['LoginType'] = 'B2CFlow';
                  sessionStorage.setItem('Userdetails', JSON.stringify(data));
                  sessionStorage.setItem('UserToken', Token);
                  sessionStorage.setItem('menuSection', 'navMenu');
            sessionStorage.removeItem('b2cType')
                  let userDetails = JSON.parse(sessionStorage.getItem('Userdetails') as any);
            userDetails.Result['ProductId'] = this.productId;
            userDetails.Result['ProductName'] = this.userDetails.Result.ProductName;
            userDetails.Result['BrokerBranchCode'] = this.brokerbranchCode;
            userDetails.Result['BranchCode'] = this.branchCode;
            userDetails.Result['CurrencyId'] = this.userDetails.Result.CurrencyId;
            userDetails.Result['InsuranceId'] = this.insuranceId;
            
            sessionStorage.setItem('Userdetails', JSON.stringify(userDetails));
              // Swal.fire(
              //   'Success',
              //   `Otp Validated Successfully`,
              //   'success',
              //   )
              sessionStorage.setItem('resetLoginDetails','true');
              this.onFormSubmit();
              }
              },
              (err: any) => {
                alert("Error")
                // console.log(err);
              },
            );
        }
    generateOtp() {
      let searchValue = "";
      let mobileCode = ""; let mobileNumber = "";
      let token = sessionStorage.getItem('UserToken');
      let reqObj = {
        "CompanyId":this.insuranceId,
        "ProductId": this.productId,
        "LoginId": this.loginId,
        "TemplateName":null,
        "OtpUser": {
          "UserMailId": this.customerObj.Email1,
          "UserMobileNo":this.customerObj?.MobileNo1,
          "UserMobileCode": this.customerObj?.MobileCodeDesc1,
          "UserWhatsappNo": this.customerObj?.MobileNo1,
          "UserWhatsappCode": this.customerObj?.MobileCodeDesc1,
          "CustomerName": this.customerObj?.ClientName
        }
      }
      let url = `${this.CommonApiUrl}otp/generate`;
      try {
    
        this.sharedService.onPostMethodSync(url, reqObj).subscribe((data: any) => {
        console.log("Otp Generate Res", data);
        if (data.Errors) {
          this.otpSection = false;
          this.otpGenerated = null;
          let element = '';
          for (let i = 0; i < data.Errors.length; i++) {
          element += '<div class="my-1"><i class="far fa-dot-circle text-danger p-1"></i>' + data.Errors[i].Message + "</div>";
          }
    
          Swal.fire(
          'Please Fill Valid Value',
          `${element}`,
          'error',
          )
        }
        else {
    
           this.otpId = data.OtpToken;
           this.otpGenerated = data.OTP;
          this.otpSection = true;
          this.OtpBtnEnable = true;
          this.setTimeInterval();
        }
        }, (err) => {
        console.log(err);
        })
       } catch (error) {
      }
    }
    setTimeInterval() {
  
      var count = 15,
        timer = setInterval(() => {
          var seconds = (count--) - 1;
          var percent_complete = (seconds / 60) * 100;
          percent_complete = Math.floor(percent_complete);
  
          this.OtpBtnTime = count;
          if (seconds == 0) {
            clearInterval(timer);
            this.OtpBtnEnable = false;
            this.OtpBtnTime = '';
          }
        }, 1000);
      }
    onProceed(coverList:any){
    coverList = coverList.filter(ele=>ele.Covers.length!=0)
      if(this.statusValue == 'RA' && !this.adminSection){
        if(this.productId!='4'){
          console.log('Referral Approved',coverList);
           if((this.productId=='59' || this.productId=='19' || this.productId=='39' || this.productId=='32' || this.productId=='14' || this.productId=='1' || this.productId=='6' || this.productId=='16' || this.productId=='42' || this.productId=='43' || this.productId=='25') && this.insuranceId!='100046' && this.insuranceId!='100047' && this.insuranceId!='100048' && this.insuranceId!='100049' && this.insuranceId!='100050'){
            
            let homeSession = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
            if(homeSession){
              if(this.loginType=='B2CFlow' && this.loginId=='guest'){
                window.location.reload();
              }
              else if(this.productId=='6') this.router.navigate(['/quotation/plan/main/document-info']);
              else this.router.navigate(['/quotation/plan/main/document-info']);
             // else this.router.navigate(['quotation/plan/main/accessories']);
            }
            else{
              if(this.productId=='59') this.getExistingBuildingList();
              else  if(this.loginType=='B2CFlow' && this.loginId=='guest'){
                window.location.reload();
              }
              else if(this.productId=='6') this.router.navigate(['/quotation/plan/main/document-info']);
              else this.router.navigate(['/quotation/plan/main/document-info']);
              //else this.router.navigate(['quotation/plan/main/accessories']);
            }
  
          }
          else if(this.productId == '5'){
            let i=0;let coverlist:any=[];
            for(let vehicle of coverList){
              let vehEntry = vehicle.Covers;
              console.log('VVVVVVVVV',vehEntry);
              if(vehEntry.length!=0){
                let entry = vehEntry.filter(ele=>ele.CoverId == '55');
                if(entry.length!=0){
                  console.log('RRRRRRR',entry);
                  coverlist.push(entry)
                }
              }
              i+=1;
            }           
           if(coverlist.length!=0){
            console.log('if entry of cover id 55',coverlist);
              sessionStorage.setItem('riskSection','additional');
              this.router.navigate(['quotation/plan/main/accessories']);
             }
             else if(this.insuranceId!='100002') {
              sessionStorage.setItem('riskSection','normal');
              this.router.navigate(['/quotation/plan/main/driver-info']);
             }
             else{
              sessionStorage.setItem('riskSection','normal');
              this.router.navigate(['/quotation/plan/main/document-info']);
             }
          }
    
          else{
            sessionStorage.setItem('riskSection','normal');
            this.router.navigate(['/quotation/plan/main/document-info']);
          }
          //this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/premium-details']);
  
        }
        else if(this.productId == '4'){
          console.log('Referral Approved');
          if(this.loginType=='B2CFlow' && this.loginId=='guest'){
            window.location.reload();
          }
          else this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/travel-quote-details']);
        }
      
      }
      else{
        if(!this.statusValue && this.isMannualReferal=='Y'){
            if(this.remarks==null || this.remarks=='' || this.remarks == undefined){
              // let type: NbComponentStatus = 'danger';
              // const config = {
              //   status: type,
              //   destroyByClick: true,
              //   duration: 4000,
              //   hasIcon: true,
              //   position: NbGlobalPhysicalPosition.TOP_RIGHT,
              //   preventDuplicates: false,
              // };
              // this.toastrService.show(
              //   'Referral Remarks',
              //   'Please Enter Referral Remarks',
              //   config);
            }
        }
        
        let ReqObj:any ={},createdBy = "";
        let quoteStatus = sessionStorage.getItem('QuoteStatus');
          if(quoteStatus=='AdminRP'){
              createdBy = this.vehicleDetailsList[0].CreatedBy;
          }
          else{
            createdBy = this.loginId;
          }
        //this.finalFormSubmit(ReqObj);
        if(this.endorsementSection && this.enableRemoveVehicle){
          let entry = this.vehicleDetailsList.filter(ele=>ele.Status=='D');
          if(entry){
            console.log("Entry",entry);
            let i=0,orgCoverList:any[]=[];
            for(let cover of coverList){
              let Exist = entry.some(ele=>ele.VehicleId==cover.Id);
              
              if(!Exist) orgCoverList.push(cover);
              i+=1;
              if(i==coverList.length) {
                ReqObj = {
                  "RequestReferenceNo": this.quoteRefNo,
                  "CreatedBy": createdBy,
                  "ProductId": this.productId,
                  "ManualReferralYn": this.isMannualReferal,
                  "ReferralRemarks": this.remarks,
                  "Vehicles" : orgCoverList
                }
                this.newcoverlist=coverList;
                console.log('in if block',this.newcoverlist)
                console.log("Final COvers",coverList,orgCoverList,ReqObj)
                this.finalFormSubmit(ReqObj);
              } 
            }
          }
        }
        else{
          ReqObj = {
            "RequestReferenceNo": this.quoteRefNo,
            "CreatedBy": createdBy,
            "ProductId": this.productId,
            "ManualReferralYn": this.isMannualReferal,
            "ReferralRemarks": this.remarks,
            "Vehicles" : coverList
          }
          this.newcoverlist=coverList;
          console.log('in else',this.newcoverlist)
          // if(this.subuserType=='B2C' && this.loginId=='guest'){
          //     sessionStorage.setItem('buyPolicyDetails',JSON.stringify(ReqObj));
          //     this.router.navigate(['./Home/existingQuotes/customerSelection/customerDetails/userDetails'])
          // }
          
          // else{
            this.finalFormSubmit(ReqObj);
          //}
          
        }
      }
  
  
    }
    finalFormSubmit(ReqObj){
      if(this.insuranceId=='100028'){
        let duplicateId = null;
            let i=0,j=0;
            for(let veh of this.vehicleDetailsList){
              let duplicateVehicle = [];
              duplicateVehicle = this.vehicleDetailsList.filter((val) => val.Vehicleid === veh.Vehicleid);
              if (duplicateVehicle.length > 1) {
                  duplicateId = duplicateVehicle[0].Vehicleid;
              }
              j+=1;
              if(j==this.vehicleDetailsList.length){
                if (duplicateId!=null) {
                  console.log(this.selectedRowData)
                  let entry = ReqObj.Vehicles.find(ele=>ele.Id==duplicateId && ele.SectionId==this.selectedRowData.SectionId);
                  console.log(ReqObj,entry);
                  if(entry){
                    console.log("Final Entry",entry)
                    
                    ReqObj['Vehicles'] = [entry];
                    this.onProceedBuyPolicy(ReqObj);
                  }
                }
                else{ this.onProceedBuyPolicy(ReqObj);}
              }
            }
      }
      else this.onProceedBuyPolicy(ReqObj);
    }
    onProceedBuyPolicy(ReqObj){
      let urlLink = `${this.CommonApiUrl}quote/buypolicy`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
          if(data.Result){
            if(data?.Result.QuoteNo){
              this.quoteNo = data.Result?.QuoteNo;
              sessionStorage.setItem('quoteNo',data.Result?.QuoteNo);
              sessionStorage.setItem('quoteReferenceNo',data.Result?.RequestReferenceNo);
              let clausesList: any[] = [],
              exclusionList: any[] = [],
              warrantiesList: any[] = [];
            //console.log("Cccccccc", this.CoversList);
            //console.log("VVVVVVVV", this.vehicleDetailsList);
            let vechileId: any;
            let sectionId: any;
            let i = 0;
  
            if(this.userType=='Broker'|| this.userType=='User'){
              this.onFinalProceed();
            }
            else{
              for (let v of this.vehicleDetailsList) {
                vechileId = v.VehicleId;
                  sectionId = v.SectionId;
                   i++;
                  if (v.Common) {
                     this.CommonMethod(v,i);
                  }
                  else{
                    if(i==this.vehicleDetailsList.length){
                      this.onFinalProceed();
                    }
                  }
  
              }
            }
  
            // for (let v of this.vehicleDetailsList) {
            //   vechileId = v.VehicleId;
            //   sectionId = v.SectionId;
            //   i++;
            //   if (v.Common) {
            //     this.CommonMethod(v,i);
            //   }
  
            //   else{
            //     if(i==this.vehicleDetailsList.length) {
  
            //     }
            //   }
  
            // }
  
              /*if(this.productId=='59'){
                let homeSession = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
                if(homeSession){
                  this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/domestic-risk-details'])
                }
                else{
                  this.getExistingBuildingList();
                }

  
              }
              else if(this.productId !='3' && this.productId!='4'){
                if(this.emiYN=='Y'){
                  this.insertEMIDetails();
                }
                else{
                  this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/premium-details']);
                }
  
              }
              else if(this.productId == '4'){
                this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/travel-quote-details']);
              }*/
            }
            else if(data?.Result?.Status=='RP'){
                // let type: NbComponentStatus = 'danger';
                // const config = {
                //   status: type,
                //   destroyByClick: true,
                //   duration: 4000,
                //   hasIcon: true,
                //   position: NbGlobalPhysicalPosition.TOP_RIGHT,
                //   preventDuplicates: false,
                // };
                // this.toastrService.show(
                //   'Referral Quote',
                //   'Quote Moved to Referral Pending',
                //   config);
                this.router.navigate(['/referral']);
            }
          }
        },
        (err) => {
          this.sharedService.fnToastMoveHover("Quote Moved to Referral Pending");
         },
      );
    }
    CommonMethod(rowdata,i) {
      console.log('GHJK',rowdata,i);
      console.log('TTTTHHHHJ',this.vehicleDetailsList);
      let clauses
      let common
      let index=0
      /*for (let v of rowdata){
        common=v.Common;
        clauses=common.ClausesList
        index++;
      }*/
  
  
     clauses=rowdata.Common.ClausesList;
     let exclusion=rowdata.Common.ExclusionList;
     let warranties=rowdata.Common.WarrantyList;
     if(clauses==null || clauses==undefined){
      clauses=[];
     }
     if(exclusion == null || exclusion == undefined){
      exclusion=[];
     }
     if(warranties == null || warranties == undefined){
      warranties=[];
     }
  
      let newArr = [];
  
      let subId: any;
      let subDesc: any;
      let sub: any;
      let Desc: any;
      console.log("IIIIIIII", i);
      console.log('CLLLLLLLLLLLL',clauses);
      if (this.userType != "Broker") {
        /*if (clauses.length != 0) {
          clauses.forEach((item) => (item["Id"] = "6"));
          warranties.forEach((item) => (item["Id"] = "4"));
          exclusion.forEach((item) => (item["Id"] = "7"));
          console.log("EEEEEEEE", exclusion);
          console.log("iiii", clauses);
        } else if (warranties.length != 0) {
          warranties.forEach((item) => (item["Id"] = "4"));
          exclusion.forEach((item) => (item["Id"] = "7"));
          console.log("WWWWWWW", warranties);
        } else if (exclusion.length != 0) {
          exclusion.forEach((item) => (item["Id"] = "7"));
          console.log("EEEEEEEE", exclusion);
        }*/
        this.inserts = clauses.concat(warranties, exclusion);
  
        console.log("insert", this.inserts);
  
      } else {
  
         //this.inserts=this.selected
      }
  
  
      /*insert.map((item, index) => {
        this.vehicleDetailsList.push(insert[index]);
        this.vehicleDetailsList[index]['Insert'] = insert[index];
      });
      console.log('NNEEE',this.vehicleDetailsList);*/
      //this.vehicleDetailsList.concat(insert);
      let quoteNo=null;
      if(this.quoteNo) quoteNo = this.quoteNo
      else quoteNo = ''
      let Req = {
        BranchCode: this.branchCode,
        CreatedBy: this.loginId,
        InsuranceId: this.insuranceId,
        ProductId: this.productId,
        QuoteNo: quoteNo,
        RiskId: rowdata.VehicleId,
        SectionId: rowdata.SectionId,
        TermsAndConditionReq: this.inserts,
        RequestReferenceNo: this.quoteRefNo
      };
  
      let urlLink = `${this.CommonApiUrl}api/inserttermsandcondition`;
      this.sharedService.onPostMethodSync(urlLink, Req).subscribe((data: any) => {
        if (data.Result) {
          console.log('TOOOOOOOOO',i);
          console.log('VechileLength',this.vehicleDetailsList.length);
          if(i==this.vehicleDetailsList.length) {
            this.onFinalProceed();
          }
        }
      });
    }
    onFinalProceed(){
      //this.emiYN=='Y' && this.emiPeriod!='N'
      if(this.emiYN!=null && this.insuranceId!='100002' && this.emiPeriod!='0' && this.emiPeriod!=0){
        if(this.emiYN=='N'){
          this.emistatus='N';
          this.emiPeriod='0';
          this.insertEMIDetails();
        }
        else if(this.emiYN=='Y'){
          if(this.emiPeriod!='0'){
            this.emistatus='Y';
            this.insertEMIDetails();
          }
          else{
            this.emistatus='N';
            this.insertEMIDetails();
          }
        }
      }
      else{this.finalproceedCheck()}
        // if(this.productId=='59'){
        //   let homeSession = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
        //   if(homeSession){
        //     if(this.loginType=='B2CFlow' && this.loginId=='guest'){
        //       window.location.reload();
        //     }
        //     else this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/domestic-risk-details'])
        //   }
        //   else{
        //     this.getExistingBuildingList();
        //   }
  
        // }
  
        // else if(this.productId == '4'){
        //   if(this.loginType=='B2CFlow' && this.loginId=='guest'){
        //     window.location.reload();
        //   }
        //   else this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/travel-quote-details']);
        // }
        // else if(this.productId=='32' || this.productId=='39' || this.productId=='14' || this.productId=='15' || this.productId=='19' || this.productId=='1' || this.productId=='6' || this.productId=='16' || this.productId =='21' || this.productId =='26' || this.productId =='25'|| this.productId=='42' || this.productId=='43'){
        //   // let homeSession = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
        //   // if(homeSession){
        //     if(this.loginType=='B2CFlow' && this.loginId=='guest'){
        //       window.location.reload();
        //     }
        //     else this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/domestic-risk-details'])
        //   // }
        //   // else{
        //    // this.getExistingEserviceDetails();
        //   //}
        // }
        // else if(this.productId=='5' || this.productId=='46' || this.productId=='29'){
        //   this.coverlist=[];let i=0;
        //   for(let vehicle of this.newcoverlist){
        //     let vehEntry = vehicle.Covers;
        //     console.log('VVVVVVVVV',vehEntry);
        //     if(vehEntry.length!=0){
        //       let entry = vehEntry.filter(ele=>ele.CoverId == '55');
        //       if(entry.length!=0){
        //         console.log('RRRRRRR',entry);
        //         this.coverlist.push(entry)
        //       }
        //     }
        //     i+=1;
        //   }           
        //   console.log('if entry of cover id 55',this.coverlist);
        //   if(sessionStorage.getItem('resetLoginDetails')){
        //     if(this.coverlist.length!=0){
        //         sessionStorage.setItem('riskSection','additional')
        //     }
        //     else sessionStorage.setItem('riskSection','normal')
        //         window.location.reload();
        //   }
        //   else if(this.coverlist.length!=0){
        //     this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/domestic-risk-details']);
        //    }
        //    else {
        //     this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/premium-details']);
        //    }
        // }
        // else{
        //   console.log("BBBBBBBBBBBYYYYYYYYYYYYYY");
        //     this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/premium-details']);
        // }
    }
    viewQuoteDetails(){
      let ReqObj = {
        "QuoteNo":this.quoteNo
        }
        let urlLink = `${this.CommonApiUrl}quote/viewquotedetails`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          if(data?.Result){
            let quoteDetails = data?.Result?.QuoteDetails;
            this.localPremiumCost = quoteDetails?.OverallPremiumLc;
            if(this.productId=='5' || this.productId=='46' || this.productId=='29'){
              let i=0;
              for(let vehicle of this.newcoverlist){
                let vehEntry = vehicle.Covers;
                console.log('VVVVVVVVV',vehEntry);
                if(vehEntry.length!=0){
                  let entry = vehEntry.filter(ele=>ele.CoverId == '55');
                  
                  if(entry.length!=0){
                    let veh = this.vehicleDetailsList.find(ele=>String(ele.Vehicleid)==String(vehicle.Id));
                    console.log("C",this.vehicleDetailsList)
                    
                    if(veh){
                      if(veh.Status!='D')this.coverlist.push(entry)
                    }
                  }
                }
                else{alert('No Entry')}
                i+=1;
              }           
              console.log('if entry of cover id 55',this.coverlist);
             if(this.coverlist.length!=0){
              sessionStorage.setItem('proceedType','AdditionalInfo');
              this.insertPayementDetails();
             }
             else{
              sessionStorage.removeItem('proceedType');
              this.insertPayementDetails();
             }
            }
            else this.insertPayementDetails();
            
          }
        },
        (err) => {
          this.sharedService.fnToastMoveHover("Quote Moved to Referral Pending");
         },
        );
    }
    insertPayementDetails(){
      let ReqObj = {
        "CreatedBy": this.loginId,
        "EmiYn": 'N',
        "InstallmentMonth": null,
        "InstallmentPeriod": null,
        "InsuranceId": this.loginId,
        "Premium": this.localPremiumCost,
        "QuoteNo": this.quoteNo,
        "Remarks": "None",
        "SubUserType": sessionStorage.getItem('typeValue'),
        "UserType": this.userType
        }
        let urlLink = `${this.CommonApiUrl}payment/makepayment`;
        this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
        (data: any) => {
          console.log(data);
          if(data.Result){
          sessionStorage.setItem('quotePaymentId',data.Result.PaymentId);
          this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/make-payment']);
          }
        },
        (err) => {
        this.sharedService.fnToastMoveHover("Quote Moved to Referral Pending");
        },
      );
    }
    insertEMIDetails(){
        let ReqObj = {
          "QuoteNo":this.quoteNo,
          "InsuranceId": this.insuranceId,
          "ProductId":this.productId,
          "PolicyType":this.emipolicytype,
          "InstallmentPeriod":this.emiPeriod,
          "PremiumWithTax":this.totalPremium,//this.localPremiumCost
          "PaymentDetails":"",
          "Status":this.emistatus,
          "CreatedBy":this.loginId,
          "Remarks":"None"
        }
        let urlLink = `${this.CommonApiUrl}api/insertemitransactiondetails`
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
              this.finalproceedCheck()
              if(data.Result?.Response=='Saved Successful'){
              //    if(this.onClauses=true){
              //      let Id:any;
  
              //      for(let clause of this.insertClause){
              //         Id= clause.Id;
  
              //      }
  
              //       let Req= {
              //     "BranchCode":this.branchCode,
              //     "CreatedBy":this.loginId,
              //     "InsuranceId":this.insuranceId,
              //     "ProductId":this.productId,
              //     "QuoteNo": this.quoteNo,
              //     "RiskId": "1",
              //     "SectionId": "2",
              //     "TermsAndConditionReq":this.insertClause
  
              // }
              // let urlLink = `${this.CommonApiUrl}api/inserttermsandcondition`
              // this.sharedService.onPostMethodSync(urlLink, Req).subscribe(
              //   (data: any) => {
              //       if(data.Result){
              //         this.insert=data.Result
              //       }},);
              //    }
                
              }
            },
            (err) => { },
          );
    }
    finalproceedCheck(){
      if(this.productId=='59'){
        let homeSession = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
        if(homeSession){
          //this.router.navigate(['quotation/plan/main/accessories']);
          this.router.navigate(['/quotation/plan/main/document-info']);
        }
        else{
          this.getExistingBuildingList();
        }

      }

      else if(this.productId == '4'){
        if(this.loginType=='B2CFlow' && this.loginId=='guest'){
          window.location.reload();
        }
        else this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/travel-quote-details']);
      }
 
      else if((this.productId=='32' || this.productId=='39' || this.productId=='14' || this.productId=='15' || this.productId=='19' || this.productId=='1' || this.productId=='6' || this.productId=='16' || this.productId =='21' || this.productId =='26' || this.productId =='25' || this.productId =='24'|| this.productId=='42' || this.productId=='43' || this.productId=='13' || this.productId=='27' || this.productId=='57' || this.productId=='56') && this.insuranceId!='100046' && this.insuranceId!='100047' && this.insuranceId!='100048' && this.insuranceId!='100049'){
         if(this.productId=='6') this.router.navigate(['/quotation/plan/main/document-info']);
         //else this.router.navigate(['quotation/plan/main/accessories']);
         else this.router.navigate(['/quotation/plan/main/document-info']);
      }
      else if(this.productId=='5' || this.productId=='46' || this.productId=='29'){

        this.coverlist=[];let i=0;
        for(let vehicle of this.newcoverlist){
          let vehEntry = vehicle.Covers;
          if(vehEntry.length!=0){
            let entry = vehEntry.filter(ele=>ele.CoverId == '55' );
            
            if(entry.length!=0 ){
              let veh = this.vehicleDetailsList.find(ele=>String(ele.Vehicleid)==String(vehicle.Id));
              if(veh){
                if(veh.Status!='D')this.coverlist.push(entry)
              }
              
            }
          }
          i+=1;
        }           
        if(sessionStorage.getItem('resetLoginDetails')){
          if(this.coverlist.length!=0){
              sessionStorage.setItem('riskSection','additional')
          }
          else sessionStorage.setItem('riskSection','normal')
              window.location.reload();
        }
        else if(this.coverlist.length!=0){
          this.router.navigate(['quotation/plan/main/accessories']);
         }
         else if(this.insuranceId=='100002') {
          this.router.navigate(['/quotation/plan/main/document-info']);
         }
         else this.router.navigate(['/quotation/plan/main/driver-info']);
      }
      else{
        this.router.navigate(['/quotation/plan/main/document-info']);
      }
    }
    checkReferralStatus(){
      return false;
      // return ((this.uwReferralSection && !this.adminSection && (this.statusValue=='RP' || this.statusValue=='' || this.statusValue==null || this.statusValue==undefined))  || (!this.adminSection && this.statusValue=='RP' && this.vehicleDetailsList.some(ele=>ele.Status=='RP')))
    }
    getExistingEserviceDetails(){
      let ReqObj = {
        "RequestReferenceNo": this.quoteRefNo,
        "RiskId":"1"
      }
      let urlLink = `${this.motorApiUrl}api/geteservicebyriskid`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          let customerDatas = data.Result;
          let commonDetails =[{
            "PolicyStartDate": customerDatas.PolicyStartDate,
            "PolicyEndDate":customerDatas.PolicyEndDate,
            "Currency":customerDatas.Currency,
            "SectionId":[customerDatas.SectionId],
            "AcexecutiveId":"",
            "ExchangeRate":customerDatas.ExchangeRate,
            "StateExtent":"",
            "NoOfDays": this.noOfDays,
            "HavePromoCode":customerDatas.Havepromocode,
            "Promocode": customerDatas.Promocode,
          }]
          sessionStorage.setItem('homeCommonDetails',JSON.stringify(commonDetails));
          this.router.navigate(['quotation/plan/main/accessories']);
        },
        (err) => { },
      );
    }
    getExistingBuildingList(){
      let ReqObj = {
        "RequestReferenceNo": this.quoteRefNo
      }
      let urlLink = `${this.motorApiUrl}home/getbuildingdetails`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          let customerDatas = data.Result[0];
          let commonDetails =[{
            "PolicyStartDate": customerDatas.PolicyStartDate,
            "PolicyEndDate":customerDatas.PolicyEndDate,
            "Currency":customerDatas.Currency,
            "SectionId":customerDatas.SectionId,
            "AcexecutiveId":"",
            "ExchangeRate":customerDatas.ExchangeRate,
            "StateExtent":"",
            "NoOfDays": this.noOfDays,
            "HavePromoCode":customerDatas.Havepromocode,
            "Promocode": customerDatas.Promocode,
          }]
          sessionStorage.setItem('homeCommonDetails',JSON.stringify(commonDetails));
          if(this.loginType=='B2CFlow' && this.loginId=='guest'){
            window.location.reload();
          }
         // else this.router.navigate(['quotation/plan/main/accessories']);
         else this.router.navigate(['/quotation/plan/main/document-info']);
        },
        (err) => { },
      );
    }
    onUpdateFleetFactorRate(modal){
      this.fleetCoverDetails.CoverList[0].Discount = this.discountList;
      this.fleetCoverDetails.CoverList[0].Loading = this.loadingList;
      let ReqObj = {
        "VehicleId": "99999",
        "RequestReferenceNo": this.quoteRefNo,
        "InsuranceId": this.insuranceId,
        "ProductId": this.productId,
        "SectionId":this.termsSectionId,
        "CoverList": this.fleetCoverDetails.CoverList
      }
      let urlLink = `${this.CommonApiUrl}quote/update/referalstatus`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
            if(data.Result){
                this.onFleetProceed(modal);
            }
          },
          (err) => { },
        );
    }
    onFleetProceed(modal){
      modal.dismiss('Cross click');
      if(!this.adminSection && this.userType=='Issuer' && this.statusValue == 'RA' && !this.otpSection && !this.endorsementSection){
        this.updateFinalizeYN('proceed')
      }
      else if(!this.adminSection && (this.userType!='Issuer'  || (this.userType=='Issuer' && this.subuserType=='low' && this.endorsementSection)) && (this.statusValue == 'RA' || (this.userType=='Issuer' && this.subuserType=='low' && this.endorsementSection)) && !this.otpSection){
        this.onFormSubmit();
      }
      else if(!this.adminSection && (this.userType!='Issuer') && this.statusValue != 'RA' && !this.otpSection){
        this.onFormSubmit();
      }
      else if(this.userType=='Issuer' && this.subuserType=='low' && this.statusValue!=null  && this.statusValue != 'RA' && !this.endorsementSection){
        this.updateFinalizeYN('proceed');
      }
      else if(this.adminSection){
        this.onUpdateFactor('',null);
      }
    }
    onSaveIndividualFactor(){
      if(this.selectedVehicleList.length!=0){
        let i=0;
        for(let vehicle of this.selectedVehicleList){
          let vehEntry = this.selectedCoverList.filter(ele=>ele.Id==vehicle.Vehicleid);
          if(vehEntry.length!=0){
            let entry = [];
            if(this.productId=='5') vehEntry.filter(ele=>ele.SectionId==vehicle.SectionId);
            else entry = vehEntry;
            if(entry.length!=0){
              let j=0; let covers = [];
              for(let veh of entry){
                  let k=0;
                  for(let selectedCover of veh.Covers){
                    let coverList = vehicle.CoverList.filter(ele=>ele.CoverId == selectedCover.CoverId)
                    covers = covers.concat(coverList);
                    k+=1;
                    if(k==veh.Covers.length){
                      j+=1;
                      if(j==entry.length){
                          let Location = '1';
                          if(veh.LocationId){
                            Location = veh.LocationId;
                          }
                          let ReqObj = {
                            "RequestReferenceNo": this.quoteRefNo,
                            "VehicleId": veh.Id,
                            "SectionId": veh.SectionId,
                            "ProductId": this.productId,
                            "AdminLoginId": this.loginId,
                            "InsuranceId": this.insuranceId,
                            "Covers":covers,
                            "LocationId": Location,
                          }
                          console.log("Final Req",vehicle,veh,ReqObj)
                          let urlLink = `${this.CommonApiUrl}api/updatefactorrate`;
                          this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
                            (data: any) => {
                                if(data.Result){
                                  i+=1;
                                  if(i==this.selectedVehicleList.length){
  
                                  }
                                }
                              },
                              (err) => { },
                            );
                      }
                    }
                  }
                  
  
              }
                  console.log("Entry",entry)
            }
          }
          
        }
      }
    }
    onUpdateFactor(type,modal){
      // if(this.excessList.length!=0){
      //   let l=0,finalExcessList = []
      //     for(let rowData of this.excessList){
      //         if(this.selectedCoverList.length!=0){
      //         if(this.selectedCoverList.some(ele=>ele.SectionId==rowData.SectionId)){
      //           for(let veh of this.selectedCoverList){
      //             if(veh.SectionId==rowData.SectionId){
      //               let coverList = veh.Covers;
      //               if(coverList.some(ele=>ele.CoverId==rowData.CoverId)){
      //                   finalExcessList.push(rowData);
      //               }
      //             }
      //           }
      //            l+=1;
      //           if(l==this.excessList.length && finalExcessList.length!=0){this.onSaveExcessDetails(finalExcessList,type,modal)}
      //           else{this.updateFactorRateAlt(type,modal)}
      //         }
      //         else{
      //           l+=1;
      //           if(l==this.excessList.length && finalExcessList.length!=0){this.onSaveExcessDetails(finalExcessList,type,modal)}
      //           else{this.updateFactorRateAlt(type,modal)}
      //         }
      //     }
      //     }
      // }
      // else{
        this.updateFactorRateAlt(type,modal)
      //}
  
    }
    onSaveExcessDetails(excessList,type,modal){
        let ReqObj={
          "RequestReferenceNo": this.quoteRefNo,
          "ExcessDetails": excessList
        }
        let urlLink = `${this.CommonApiUrl}excess/inserttransactiondetails`;
          this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
            (data: any) => {
                if(data.Result){
                    this.updateFactorRateAlt(type,modal);
                }
            });
    }
    updateFactorRateAlt(type,modal){
        if((this.statusValue!='' && this.statusValue!=null) || (this.endorsementSection && this.endorseCovers) || this.userType=='Issuer' || type=='fleetSave'){
        if(this.statusValue=='RA' || type=='calculate' || this.userType=='Issuer' || type=='fleetSave'){
          if(this.selectedCoverList.length!=0){
            let i=0;
            let List=[];
            for(let vehicle of this.vehicleData){
              let vehEntry =[];
              //vehEntry = this.selectedCoverList.filter(ele=>ele.RiskId==vehicle.RiskId && ele.Id==vehicle.LocationId);
              if(this.productId!='5' && this.productId!='46') vehEntry = this.selectedCoverList.filter(ele=>ele.LocationId==vehicle.LocationId);
              else vehEntry = this.selectedCoverList.filter(ele=>ele.LocationId==vehicle.LocationId);
              console.log("Filtered Veh",vehicle,vehEntry,List,this.selectedCoverList)
              if(vehEntry.length!=0){
                let entry = List.find(ele=>ele.LocationId==vehEntry[0].LocationId)
                if(entry){
                  let coverList = [];
                  //coverList = vehicle.CoverList.filter(ele=>ele.SectionId==vehicle.SectionId)
                  if(this.productId!='5' && this.productId!='46') coverList = vehicle.CoverList.filter(ele=>ele.SectionId==vehicle.SectionId && ele.LocationId==vehicle.LocationId)
                  else coverList = vehicle.CoverList.filter(ele=>ele.SectionId==vehicle.SectionId)
                  console.log("Filtered Cover1",coverList,vehicle)
                  let obj = {"SectionId": vehicle.SectionId,"RiskId": vehicle.RiskDetails?.RiskId,"Covers":coverList}
                  if(!entry.SectionDetails.some(ele=>ele.SectionId==vehicle.SectionId && ele.RiskId==vehicle.RiskDetails?.RiskId)){
                    console.log("Covers At Part1",coverList);
                    entry.SectionDetails.push(obj);}
                  else{
                    let list= entry.SectionDetails;
                    for(let obj of list){
                        if(obj.SectionId==vehicle.SectionId && obj.RiskId==vehicle.RiskDetails?.RiskId){
                          if(coverList.length!=0){
                            for(let subObj of coverList){
                              if(!obj.Covers.some(ele=>ele.CoverId==subObj.CoverId)){obj.Covers.push(subObj)}
                            }
                          }
                        }
                    }
                    
                  }
                  i+=1;if(i==this.vehicleData.length){ 
                    console.log("Final List Update3",List)
                    this.finalUpdateFactorRate(List,type,modal)
  
                  }
                }
                else{
                  console.log("Non Filter Sp",vehicle)
                  let coverList = [];
                  console.log("Previous CoverList",vehicle.CoverList)
                  if(this.productId!='5' && this.productId!='46') coverList = vehicle.CoverList.filter(ele=>ele.SectionId==vehicle.SectionId && ele.LocationId==vehicle.LocationId)
                  else coverList = vehicle.CoverList.filter(ele=>ele.SectionId==vehicle.SectionId)
                  console.log("Filtered Cover2",coverList)
                  let obj = {
                      "LocationId": vehicle.LocationId,
                      "SectionDetails": [{"SectionId": vehicle.SectionId,"RiskId": vehicle.RiskDetails?.RiskId,"Covers":coverList}]
                    }
                    List.push(obj);
                    i+=1;
                    if(i==this.vehicleData.length){ 
                      console.log("Final List Update1",List)
                      this.finalUpdateFactorRate(List,type,modal)
                    }
                } 
               }
               else{i+=1;if(i==this.vehicleData.length){  console.log("Final List Update2",List);
                 this.finalUpdateFactorRate(List,type,modal)
                }
                }
               
             // if(vehEntry.length!=0){
             //   let entry = vehEntry.filter(ele=>ele.SectionId==vehicle.SectionId);
             //   if(entry.length!=0){
             //     let j=0; let covers = [];
             //     for(let veh of entry){
             //         let k=0;
             //         for(let selectedCover of veh.Covers){
             //           let coverList = vehicle.CoverList.filter(ele=>ele.CoverId == selectedCover.CoverId && ele.SectionId==vehicle.SectionId && !(covers.some(entry=>entry.CoverId==ele.CoverId && ele.SectionId==entry.SectionId)))
             //           covers = covers.concat(coverList);
             //           k+=1;
             //           if(k==veh.Covers.length){
             //             j+=1;
             //             if(j==entry.length){
             //                 let Location = '1';
             //                 if(veh.LocationId && this.productId!='5' && this.productId!='46'){
             //                   Location = veh.LocationId;
             //                 }
             //                 let ReqObj = {
             //                   "RequestReferenceNo": this.quoteRefNo,
             //                   "VehicleId": veh.Id,
             //                   "LocationId": Location,
             //                   "SectionId": vehicle.SectionId,
             //                   "ProductId": this.productId,
             //                   "AdminLoginId": this.loginId,
             //                   "InsuranceId": this.insuranceId,
             //                   "Covers":covers
             //                 }
             //                 if(covers.length!=0){
             //                   let urlLink = `${this.CommonApiUrl}api/updatefactorrate`;
             //                   this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
             //                     (data: any) => {
             //                         if(data.Result){
             //                           i+=1;
             //                           if(i==this.vehicleDetailsList.length){
             //                             if(type=='calculate'){
             //                               // this.getcall();
             //                               //sessionStorage.removeItem('vehicleDetailsList');
             //                               window.location.reload();
             //                             }
             //                             else if(type=='altSave'){ console.log("Finally Updated");}
             //                             else if(type=='fleetSave') this.getViewPremiumCalc(modal);
             //                             else if(this.subuserType=='low') this.onFormSubmit();
             //                             else this.updateReferralStatus();
             //                           }
             //                         }
             //                       },
             //                       (err) => { },
             //                     );
             //                 }
             //                 else{
             //                   i+=1;
             //                   if(i==this.vehicleDetailsList.length){
             //                     if(type=='calculate'){
             //                       window.location.reload();
             //                     }
             //                     else if(type=='altSave'){ console.log("Finally Updated");}
             //                     else if(type=='fleetSave') this.getViewPremiumCalc(modal);
             //                     else if(this.subuserType=='low') this.onFormSubmit();
             //                     else this.updateReferralStatus();
             //                   }}
             //             }
             //           }
             //         }
             //     }
             //   }
             //   else{
             //     i+=1;
             //     if(i==this.vehicleDetailsList.length){
             //       if(type=='calculate'){
             //         //this.getcall();
             //         //sessionStorage.removeItem('vehicleDetailsList');
             //           window.location.reload();
             //       }
             //       else this.updateReferralStatus();
             //     }
             //   }
             // }
             // else{
             //   i+=1;
             //     if(i==this.vehicleDetailsList.length){
             //       if(type=='calculate'){
             //         //this.getcall();
             //         //sessionStorage.removeItem('vehicleDetailsList');
             //           window.location.reload();
             //       }
             //       else this.updateReferralStatus();
             //     }
             // }
           }
            // for(let veh of this.selectedCoverList){
            //  let entry = this.vehicleDetailsList.find(ele=>ele.Vehicleid==veh.Id);
            //  let ReqObj = {
            //   "RequestReferenceNo": this.quoteRefNo,
            //   "VehicleId": veh.Id,
            //   "SectionId": veh.SectionId,
            //   "ProductId": this.productId,
            //   "InsuranceId": this.insuranceId,
            //   "Covers":[]
            //  }
            //  let j=0;
            //  for(let cover of veh.Covers){
            //    let coverEntry = entry.CoverList.find(ele=>ele.CoverId==cover.CoverId);
            //    coverEntry['SubCoverYn'] = cover.IsSubCover;
            //    ReqObj.Covers.push(coverEntry);
            //    j+=1;
            //    if(j==veh.Covers.length){
            //     console.log("Final Vehicle List",ReqObj)
            //     let urlLink = `${this.CommonApiUrl}api/updatefactorrate`;
            //     this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
            //       (data: any) => {
            //           if(data.Result){
            //             i+=1;
            //             if(i==this.selectedCoverList.length){
            //               if(type=='calculate'){
            //                 //sessionStorage.removeItem('vehicleDetailsList');
            //                 window.location.reload();
            //               }
            //               if(!this.endorsementSection) this.updateReferralStatus();
            //             }
            //           }
            //         },
            //         (err) => { },
            //       );
            //    }
            //  }
            // }
          }
        }
        else{
          this.updateReferralStatus();
        }
        }
    }
    finalUpdateFactorRate(List,type,modal){
      let i = 0,finalList=[];
      for(let entry of List){
          entry.SectionDetails = entry.SectionDetails.filter(ele=>ele.Covers.length!=0);
          if(entry.SectionDetails.length!=0) finalList.push(entry);
          i+=1;
          if(i==List.length){
              this.updateFinalizeRate(finalList,type,modal)
          }
      }
    }
    updateFinalizeRate(List,type,modal){
      let ReqObj = {
        "RequestReferenceNo": this.quoteRefNo,
        "ProductId": this.productId,
        "AdminLoginId": this.loginId,
        "InsuranceId": this.insuranceId,
        "LocationDetails": List
      }
      let urlLink = `${this.CommonApiUrl}api/updatefactorrate`;
          this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
            (data: any) => {
                if(data.Result){
                  if(type=='calculate'){
                    // this.getcall();
                    //sessionStorage.removeItem('vehicleDetailsList');
                    window.location.reload();
                  }
                  else if(type=='altSave'){ console.log("Finally Updated");}
                  else if(type=='fleetSave') this.getViewPremiumCalc(modal);
                  else if(this.subuserType=='low') this.onFormSubmit();
                  else this.updateReferralStatus();
                }
            });
    }
    getcall(){
      let referenceNo =  sessionStorage.getItem('customerReferenceNo');
      this.getCustomerDetails(referenceNo);
     if(this.productId=='5'  || this.productId=='59' || this.productId=='46' || this.productId=='29'){
      let vehicles:any;
      if(this.statusValue=='RA'){
        this.getUpdatedVehicleDetails();
      }
      else{
        if(vehicles && (this.productId=='5' || this.productId=='46' || this.productId=='29')){
          let vehicleList=[];
          let i=0;
          for(let veh of vehicles){
            if(i==0) veh['Collapse'] = true;
            else veh['Collapse'] = false;
            i+=1;
            vehicleList.push(veh);
            if(i==vehicles.length){
                this.vehicleDetailsList = vehicleList;
                this.getEditQuoteDetails();
            }
          }
        }
        else{
          this.getUpdatedVehicleDetails();
        }
      }
    }
    else{
      this.quoteRefNo = sessionStorage.getItem('quoteReferenceNo');
      this.requestReferenceNo = this.quoteRefNo;
      let quoteNo = sessionStorage.getItem('quoteNo');
      if(quoteNo) this.quoteNo = quoteNo;
      this.getUpdatedVehicleDetails();
    }
      this.checkSelectedCovers();
      this.ViewDropDown();
    }
   
    checkEndorseValue(rowData,type,menu){
        let endorse = rowData.Endorsements;
        
        if(endorse.length!=0){
          let entry = endorse[endorse.length-1];
          if(type == 'empty'){
              return (entry.PremiumIncludedTax === 0 || entry.PremiumIncludedTax == null)
          }
          else if(type=='value' && this.coverModificationYN=='N') return  entry.PremiumIncludedTax;
          else if(type=='value'){
            let vehicleData = this.selectedCoverList.filter(ele=>ele.Id==menu.Vehicleid)
            if(vehicleData.length!=0){
              let sectionEntry = vehicleData.find(ele=>ele.SectionId == rowData.SectionId);
              if(sectionEntry!=undefined){
                let covers:any[] = sectionEntry.Covers;
                let findCover = covers.find(ele=>ele.CoverId==rowData.CoverId);
                if(findCover==undefined) return 0;
                else return entry.PremiumIncludedTax
              }
            }
          }
        }
    }
    updateReferralStatus(){
      let ReqObj,urlLink;
      if(this.fromWorkFlow!=null){
        
        ReqObj = {
          "CompanyId": this.insuranceId,
          "ProductId": this.productId,
          "LoginId": this.loginId,
          "ProposalId": this.ProposalId,
          "ActionTaken": this.statusValue,
          "ActionRemarks": this.remarks,
          "TotalPremium": String(this.totalPremium),
          "CommissionModifyYN": this.modifyCommissionYN,
          "CommissionPercent": this.commissionPercent
        }
        urlLink = `${this.CommonApiUrl}approver/takeaction`;
      }
      else {
        if(this.remarks == undefined) this.remarks = "";
        if(this.rejectedReason == undefined) this.rejectedReason = "";
           ReqObj = {
            "RequestReferenceNo": this.quoteRefNo,
            "AdminLoginId": this.loginId,
            "ProductId": this.productId,
            "Status": this.statusValue,
            "AdminRemarks": this.remarks,
            "RejectReason": this.rejectedReason,
            "CommissionModifyYn" : this.modifyCommissionYN,
            "CommissionPercent" : this.commissionPercent
          }
           urlLink = `${this.CommonApiUrl}quote/update/referalstatus`;
        }
          this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
            (data: any) => {
                if(data.Result){
                  // let type: NbComponentStatus = 'success';
                  // const config = {
                  //   status: type,
                  //   destroyByClick: true,
                  //   duration: 4000,
                  //   hasIcon: true,
                  //   position: NbGlobalPhysicalPosition.TOP_RIGHT,
                  //   preventDuplicates: false,
                  // };
                  // this.toastrService.show(
                  //   'Referral Quote Status',
                  //   'Referral Status Updated Successfully',
                  //   config);
                  if(this.fromWorkFlow!=null){
                    this.router.navigate(['/workFlow'])
                    sessionStorage.removeItem('ProposalId')
                    sessionStorage.removeItem('FromWorkFlow')
                  }
                  else{
                  if(this.statusValue=='RP' || this.statusValue=='RR' || this.statusValue=='RA' || this.statusValue=='RE') this.router.navigate(['/referralCases'])
                  }
                }
              },
              (err) => { },
            );
    }
  
    proceed()
    {
  
    }
    getTermsSectionList(){
      console.log("Sele",this.selectedRowData)
      let riskId = String(this.selectedRowData.RiskDetails.RiskId);
      let urlLink = `${this.CommonApiUrl}api/sectionlistbasedonriskid?requestReferenceNo=${this.quoteRefNo}&riskId=${riskId}`;
      this.sharedService.onGetMethodSync(urlLink).subscribe(
        (data: any) => {
          console.log(data);
          if(data.Result){
            let defaultObj = [{"SectionId":"99999","SectionName":"ALL"}];
            this.termsSectionList = defaultObj.concat(data.Result);
            this.termsSectionId = '99999';
            this.viewCondition('direct');
          }
        });
  }
    viewCondition(index){
      let QuoteNo:any;
      if(this.quoteNo!=undefined && this.quoteNo!="" && this.quoteNo!=null ){
        QuoteNo=this.quoteNo;
      }
      else{
        QuoteNo=null;
      }
      let ReqObj = {
        InsuranceId:this.insuranceId,
        BranchCode:this.branchCode,
        ProductId:this.productId,
        QuoteNo:QuoteNo,
        TermsId:"D",
        SectionId:this.termsSectionId,
        // SectionId:this.vehicleDetailsList[index].SectionId,
        RequestReferenceNo: this.quoteRefNo
  
      }
      let urlLink = `${this.CommonApiUrl}api/viewtermsandcondition`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          console.log(data);
          if(data.Result){
            this.viewList = data.Result;
            if(this.viewList?.ClausesList){
              let i=0;
              for(let clause of this.viewList?.ClausesList){
                  clause['selected'] = true;
                  i+=1;
                  if(i==this.viewList?.ClausesList.length) this.ClausesData = this.viewList?.ClausesList;
              }
            }
            if(this.viewList?.ExclusionList){
              let i=0;
              for(let clause of this.viewList?.ExclusionList){
                  clause['selected'] = true;
                  i+=1;
                  if(i==this.viewList?.ExclusionList.length) this.ExclusionData = this.viewList?.ExclusionList;
              }
            }
            if(this.viewList?.WarrantyList){
              let i=0;
              for(let clause of this.viewList?.WarrantyList){
                  clause['selected'] = true;
                  i+=1;
                  if(i==this.viewList?.WarrantyList.length) this.WarrantyData = this.viewList?.WarrantyList;
              }
            }
            if(this.userType=='Broker'){
              /*console.log('bbbbbbbbbbbbb',this.userType)
              this.ClauseColumnHeader;
              this.clause=true;*/
  
               //const isChecked=false;
               this.clause=true;
               this.ClauseColumnHeader =[
                { key: 'SubId', display: 'Clauses Id' },
                { key: 'SubIdDesc', display: 'Clauses Description' },
  
              ];
              this.ClausesDataId.map(x=>({
                ...x,
                isChecked:false
              }));
  
              this.ExclusionsColumnHeader =[
  
  
                { key: 'SubId', display: 'Exclusion Id' },
                { key: 'SubIdDesc', display: 'Exclusion Description' },
  
              ];
              this.ExclusionDataId.map(x=>({
                ...x,
                isChecked:false
              }));
              this.WarrantiesColumnHeader =[
                { key: 'SubId', display: 'Warranty Id' },
                { key: 'SubIdDesc', display: 'Warranty Description' },
  
              ];
              this.WarrantyDataId.map(x=>({
                ...x,
                isChecked:false
              }));
            }
            else{
              /*this.ClausesColumnHeader;
              this.clause=false;*/
              this.clause=false;
              this.ClausesColumnHeader =[
                {
                   key: 'EntryDate',
                   display: 'Select',
                   config: {
                     isChecked: true,
                     model:'isChecked'
                   },
                 },
  
                 { key: 'ClausesId', display: 'Clauses Id' },
                 { key: 'ClausesDesc', display: 'Clauses Description',
                 config: {
                  Edit: true,
                  model:'Edit'
                },},
                 /*{ key:'Edit', display:'Edit',
                 config: {
                  Edit: true,
                  model:'Edit'
                },}*/
  
               ];
               this.ClausesDataId.map(x=>({
                 ...x,
                 isChecked:false
               }));
               this.ExclusionColumnHeader =[
                {
                  key: 'EntryDate',
                  display: 'Select',
                  config: {
                    isChecked: true,
                    model:'isChecked'
                  },
  
                },
  
                { key: 'ExclusionId', display: 'Exclusion Id' },
                { key: 'ExclusionDesc', display: 'Exclusion Description' },
                { key:'Edit', display:'Edit',
                  config: {
                  Edit: true,
                  model:'Edit'
                  },
                }
  
              ];
              this.ExclusionDataId.map(x=>({
                ...x,
                isChecked:false
              }));
              this.WarrantyColumnHeader =[
                {
                  key: 'EntryDate',
                  display: 'Select',
                  config: {
                    isChecked: true,
                    model:'isChecked'
                  },
                },
                { key: 'WarrantyId', display: 'Warranty Id' },
                { key: 'WarrantyDesc', display: 'Warranty Description' },
                { key:'Edit', display:'Edit',
                config: {
                 Edit: true,
                 model:'Edit'
               },}
  
              ];
  
            }
            if(this.onClauses==true || this.onWarranty==true || this.onExclusion==true){
              let commonObj = {
                "ClausesList": this.ClausesData,
                "WarrantyList": this.WarrantyData,
                "ExclusionList": this.ExclusionData
              }
                // this.vehicleDetailsList[index]["Common"] = commonObj;
            }
          }
        },
        (err) => { },
      );
    }
  
    ViewDropDown(){
      let ReqObj = {
        "InsuranceId":this.insuranceId,
        "BranchCode":this.branchCode
      }
      let urlLink = `${this.CommonApiUrl}dropdown/termsandcondition`;
      this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
        (data:any) => {
          if(data.Result){
            this.viewDropDown = data.Result;
            console.log('RR SSSS',this.vehicleDetailsList);
            console.log('DDDDDDDDDDDDDDD')
            //let list = data.Result
            let clauses = this.viewDropDown.filter(ele => ele.Code == '6')
            if(clauses) {
              this.Id = "6";
              this.jsonList = [
                {
                  "TypeId":"D",
                  "DocRefNo":null,
                "DocumentId":null,
                   "Id":"6",
                  "SubId":null,
                   "SubIdDesc":"",
                   "selected": true
                }
              ];
            }
            let warranty = this.viewDropDown.filter(ele => ele.Code == '4')
            if(warranty){
              this.Ids = "4";
              this.json = [
                {
                  "TypeId":"D",
                   "Id":"4",
                  "SubId":null,
                   "SubIdDesc":"",
                   "DocRefNo":null,
                   "DocumentId":null,
                   "selected": true
                }
              ];
            }
            let Exclusion = this.viewDropDown.filter(ele => ele.Code == '7')
            if(Exclusion){ 
  
              this.id = "7";
              this.ExclusionList = [
                {
                  "TypeId":"D",
                   "Id":"7",
                  "SubId":null,
                   "SubIdDesc":"",
                   "DocRefNo":null,
                   "DocumentId":null,
                   "selected": true
                }
              ]
          }
  
            /*for(let i = 0; i<this.vehicleDetailsList.length; i++) {
              console.log('EEEEEEEEEEEE',this.vehicleDetailsList)
              this.viewCondition(i);
            }*/
  
            //let i=0;
            //this.viewCondition(i);
            //i++;
  
            /*let i=0;
            for(let s of this.vehicleDetailsList){
              console.log('RSSSSSS',s)
              this.viewCondition(i);
              i++;
            }*/
  
  
  
  
          }
        },
        (err) => { },
      )
    }
  
   ClausesStatuss(){
    let common:any;
    console.log('this',this.vehicleDetailsList);
    console.log('TTTTTTT',this.vehicleDetailsList);
    this.showCoverList=false;
   // this.ClausesSection=true;
    this.onClauses = true;
    this.onWarranty=false;
    this.onExclusion = false;
    this.newAddClauses=false;
    this.newAddExclusion=false;
    this.newAddWarranty=false;
  }
  ExclusioStatuss(){
    this.onExclusion = true;
    this.onWarranty=false;
    this.onClauses = false;
    this.newAddClauses=false;
    this.newAddExclusion=false;
    this.newAddWarranty=false;
  }
  WarrantyStatuss(){
     this.onWarranty=true;
     this.onClauses = false;
     this.onExclusion = false;
     this.newAddClauses=false;
     this.newAddExclusion=false;
     this.newAddWarranty=false;
  }
  onAddClause(){
    this.newAddClauses=true;
  }
  onAddExclusion(){
    this.newAddExclusion =true;
  }
  onAddWarranty(){
    this.newAddWarranty = true;
  }
  
  
    ClausesStatus(i,rowData){
      /*this.viewList[i]
      this.ClausesData = this.viewList[i].ClausesList;
      this.CoveList=false;
      this.onClauses = true;
      this.onWarranty=false;
      this.onWars = false;
      this.onExclusion = false;*/
      /*let rowData = this.vehicleDetailsList[i];
      if(rowData){
        this.VehicleSectionId = this.vehicleDetailsList;
        this.viewCondition(rowData);
      }*/
  
      let common:any;
      console.log('this',this.vehicleDetailsList)
      /*if(this.userType!='Broker'){
        this.viewCondition(i);
        let rowData = this.vehicleDetailsList[i];
        common=rowData.Common;
        this.common1=common.ClausesList;
  
       console.log('Common',this.common1)
      }*/
  
          console.log('TTTTTTT',this.vehicleDetailsList);
      this.CoveList=false;
     // this.ClausesSection=true;
      this.onClauses = true;
      this.onWarranty=false;
      this.onWars = false;
      this.onExclusion = false;
      this.clauses = true;
      this.warranty = false;
      this.Exclusion = false;
      if(this.productId!='59'){
        this.tempVehicleId = rowData.VehicleId;
      }
      else this.tempVehicleId = rowData.SectionId;
      
  
      this.tempData=rowData
    this.viewCondition(i);
    }
    WarrantyStatus(i,rowData){
      /*this.viewList[i]
      this.WarrantyData = this.viewList[i].WarrantyList;
      this.CoveList=false;
      this.onWarranty=true;
      this.onClauses = false;
      this.onWars = false;
      this.onExclusion = false;*/
      /*let rowData = this.vehicleDetailsList[i];
      if(rowData){
        this.VehicleSectionId = this.vehicleDetailsList;
        this.viewCondition(rowData);
      }*/
      this.CoveList=false;
     //this.WarrantySection=true;
      this.onWarranty=true;
      this.onClauses = false;
      this.onWars = false;
      this.onExclusion = false;
  
      this.warranty = true;
      this.clauses = false;
      this.Exclusion = false;
      let common
  
     /* if(this.userType!='Broker'){
        this.viewCondition(i);
        let rowData = this.vehicleDetailsList[i];
        common=rowData.Common;
        //this.common3=common.WarrantyList;
      }*/
  
  console.log('Common',this.common3);
  if(this.productId!='59'){
    this.tempVehicleId = rowData.VehicleId;
  }
  else this.tempVehicleId = rowData.SectionId;
  
  this.tempData=rowData
  this.viewCondition(i);
  
    }
    /*WarrateStatus(i){
      this.viewList[i]
      this.WarrteData = this.viewList[i].WarrateList;
      this.CoveList=false;
      this.onWars = true;
      this.onWarranty=false;
      this.onClauses = false;
      this.onExclusion = false;
    }*/
    ExclusioStatus(i,rowData){
      /*this.viewList[i]
      this.ExclusionData = this.viewList[i].ExclusionList;
      this.CoveList=false;
      this.onExclusion = true;
      this.onWarranty=false;
      this.onWars = false;
      this.onClauses = false;*/
      /*let rowData = this.vehicleDetailsList[i];
      if(rowData){
        this.VehicleSectionId = this.vehicleDetailsList;
        this.viewCondition(rowData);
      }*/
      this.CoveList=false;
      this.onExclusion = true;
      this.onWarranty=false;
      this.onWars = false;
      this.onClauses = false;
      this.Exclusion = true;
      this.warranty = false;
      this.clauses = false;
  
      let common
   /*if(this.userType!='Broker'){
    this.viewCondition(i);
    let rowData = this.vehicleDetailsList[i];
        common=rowData.Common;
        //this.common4=common.ExclusionList;
   }*/
  console.log('Common',this.common4);
  if(this.productId!='59'){
    this.tempVehicleId = rowData.VehicleId;
  }
  else this.tempVehicleId = rowData.SectionId;
  
  this.tempData=rowData
  this.viewCondition(i);
    }
    OnClose(){
      this.CoveList=true;
      this.onExclusion = false;
      this.onWarranty=false;
      this.onWars = false;
      this.onClauses = false;
      this.warranty = false;
      this.Exclusion = false;
      this.clause = false;
      this.clauses = false;
      this.showGrid=false;
    }
    onCheckUser(i, event,clause) {
      const checked = event.target.checked; // stored checked value true or false
      if (checked) {clause['selected']=true;} 
      else if(!checked) {clause['selected']=false;}
    }
     onCheckExclusion(i, event,clause) {
      
      const checked = event.target.checked; // stored checked value true or false
      if (checked) {clause['selected']=true;} 
      else if(!checked) {clause['selected']=false;}
    
     }
     onCheckWarranties(i, event,clause) {
      const checked = event.target.checked; // stored checked value true or false
      if (checked) {clause['selected']=true;} 
      else if(!checked) {clause['selected']=false;}
    }
     /*commonMethod(common){
      let commons = {
        "ClausesList": this.common2,
        "WarrantyList": this.Wcommon,
        "ExclusionList": this.Ecommon
      }
        this.vehicleDetailsList[i]["Common"] = commons;
     }*/
     onCheck(i,event,clause){
      const checked = event.target.checked; // stored checked value true or false
      if (checked) {
       //this.common1.push({ SubId: i });
       let index = this.WarrantyData.findIndex(ele => ele.SubIdDesc == clause.SubIdDesc && ele.SubId == clause.SubId);
       console.log('BBBBBBBBBBBB',this.WarrantyData);
         this.WarrantyData[index].selected=true;
         console.log('OOOOOOOOOOOOOO',index);
         } 
         else if(!checked) {
           let index = this.WarrantyData.findIndex(ele => ele.SubIdDesc == clause.SubIdDesc && ele.SubId == clause.SubId);
           this.WarrantyData[index].selected=false;
          
       }
    }
    onUser(i,event,clause){
      const checked = event.target.checked; // stored checked value true or false
      if (checked) {
       //this.common1.push({ SubId: i });
       let index = this.ExclusionData.findIndex(ele => ele.SubIdDesc == clause.SubIdDesc && ele.SubId == clause.SubId);
       console.log('BBBBBBBBBBBB',this.ExclusionData);
       this.ExclusionData[index].selected=true;
         } 
         else if(!checked) {
           let index = this.ExclusionData.findIndex(ele => ele.SubIdDesc == clause.SubIdDesc && ele.SubId == clause.SubId);
           console.log('IIIIIIIIIII',index)
           this.ExclusionData[index].selected=false;
       }
    }
    getSectionName(rowData){
      let entry = this.vehicleDetailsList.filter(ele=>ele.LocationId=='1');
      console.log("Filtered SectionS",entry);
      return entry.find(ele=>ele.SectionId==rowData.SectionId)?.SectionName
    }
    getExcessCoverName(rowData){
      let entry = this.vehicleDetailsList.filter(ele=>ele.LocationId=='1');
      console.log("Filtered SectionS",entry);
      for(let veh of entry){
        if(veh.CoverList){
          for(let cover of veh.CoverList){
            if(cover.SectionId==rowData.SectionId && cover.CoverId==rowData.CoverId) return cover.CoverName;
          }
        }
      }
    }
    open(content) {
      this.modalService.open(content, { size: 'lg', backdrop: 'static',ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    discountOpen(content) {
      this.modalService.open(content, { size: 'md', backdrop: 'static',ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
  
  
    saveChanges(tempData,jsonList){
  
      //let insert= this.jsonList.concat(this.json, this.Exclusion);
      let i=0;
      /*if (tempData.length != 0) {
        this.jsonList.forEach((item) => (item["Id"] = "6"));
        this.ExclusionList.forEach((item) => (item["Id"] = "4"));
        this.json.forEach((item) => (item["Id"] = "7"));
        console.log("EEEEEEEE", jsonList);
        console.log("iiii", this.json);
      } else if (this.json.length != 0) {
        this.ExclusionList.forEach((item) => (item["Id"] = "4"));
        this.ExclusionList.forEach((item) => (item["Id"] = "7"));
        console.log("WWWWWWW", this.ExclusionList);
      } else if (this.json.length != 0) {
        this.json.forEach((item) => (item["Id"] = "7"));
        console.log("EEEEEEEE", this.json);
      }*/
  
      //let insert=this.jsonList.concat(this.ExclusionList, this.json);
  
  
        //this.ClausesData.forEach((item) => (item["Id"] = "6"));
        //var funcs = [];
          //this.ClausesData.forEach((i) => funcs.push( () => i  ))
        console.log("EEEEEEEE", this.ClausesData);
        console.log("Final Added ROws",this.jsonList)
  
     let clauses
       if(this.ClausesData!=null || this.ClausesData !=undefined){
        clauses= this.ClausesData.concat(this.jsonList);
       }
       else{
        clauses= this.jsonList
       }
       clauses = clauses.filter(ele=>ele.selected==true)
      console.log('QQQQQ',clauses)
       let quote
   if(this.quoteNo){
    quote=this.quoteNo;
   }
   else{
     quote="";
   }
  
      console.log('SSSSSSSSSSSS',this.tempData)
      console.log('aaaaaaaaaaaaaa',this.jsonList)
      let Req = {
        BranchCode: this.branchCode,
        CreatedBy: this.loginId,
        InsuranceId: this.insuranceId,
        ProductId: this.productId,
        QuoteNo:quote,
        //TermsId:null,
        RiskId: this.selectedRowData.VehicleId,
        SectionId:this.termsSectionId,
        TermsAndConditionReq:clauses,
        RequestReferenceNo: this.quoteRefNo
      };
  
      let urlLink = `${this.CommonApiUrl}api/inserttermsandcondition`;
      this.sharedService.onPostMethodSync(urlLink, Req).subscribe((data: any) => {
        if (data.Result) {
  
          /*let vech= this.ClausesData.filter(
            (ele) => ele.SubIdDesc ==""
          );
          if(vech){
  
            let clauses = this.ClausesData
  
            clauses.concat(this.jsonList);
  
            console.log('clauses',clauses)
          }
          else{
            console.log("canot Added");
  
          }*/
  
          //this.ddata=data.Result;
          //this.ClausesData=this.ClausesData.concat(this.json);
  
          console.log('TOOOOOOOOO');
          console.log('VechileLength',this.vehicleDetailsList.length);
          //this.closes=false;
  
          //exampleModel.hide()
          this.jsonList =[
            {
              "TypeId":"D",
              "DocRefNo":null,
            "DocumentId":null,
              "SectionId":this.termsSectionId,
               "Id":"6",
              "SubId":null,
               "SubIdDesc":"",
               "selected": true
            }
          ];
          this.viewCondition('direct');
          this.clauses = true;
          this.showGrid=true;
          this.newAddClauses = false;
          //this.jsonList.splice();
  
  
          //$('#ExclusionModal').modal('hide');
          //$('#WarrantyModel').modal('hide');
  
          
          //window.location.reload();
        }
      });
  
    }
  saveExclusion(tempData,ExclusionList){
  
    let i=0;
  
    let clauses:any[]=[]
    if(this.ExclusionData!=null || this.ExclusionData !=undefined){
      clauses= this.ExclusionData.concat(this.ExclusionList);
     }
     else{
      clauses= this.ExclusionList
     }
     clauses = clauses.filter(ele=>ele.selected==true)
    //= this.ExclusionData.concat(this.ExclusionList);
    console.log('Exclusion',this.tempData)
    console.log('Exclsuion',this.ExclusionList)
    let quote
   if(this.quoteNo){
      quote=this.quoteNo;
    }
    else{
      quote="";
    }
    let Req = {
      BranchCode: this.branchCode,
      CreatedBy: this.loginId,
      InsuranceId: this.insuranceId,
      ProductId: this.productId,
      QuoteNo:quote,
      //TermsId:null,
      RiskId: this.selectedRowData.VehicleId,
      SectionId:this.termsSectionId,
      TermsAndConditionReq:clauses,
      RequestReferenceNo: this.quoteRefNo
    };
  
    let urlLink = `${this.CommonApiUrl}api/inserttermsandcondition`;
    this.sharedService.onPostMethodSync(urlLink, Req).subscribe((data: any) => {
      if (data.Result) {
  
        this.ddata=data.Result;
        console.log('TOOOOOOOOO');
        console.log('VechileLength',this.vehicleDetailsList.length);
        //this.closes=false;
        //$('#exampleModal').modal('hide');
        // $('#ExclusionModal').modal('hide');
        this.ExclusionList = [
          {
            "TypeId":"D",
             "Id":"7",
            "SubId":null,
             "SubIdDesc":"",
             "DocRefNo":null,
             "DocumentId":null,
             "selected": true
          }
        ]
        this.viewCondition('direct');
        this.newAddExclusion = false;
        this.Exclusion = true;
        this.showGrid=true;
        //window.location.reload();
      }
    });
  }
  
  saveWarranty(tempData,json){
    let i=0;
  
    let clauses:any[]=[]
    if(this.WarrantyData !=null || this.WarrantyData !=undefined){
      clauses= this.WarrantyData.concat(this.json);
     }
     else{
      clauses= this.json
     }
     clauses = clauses.filter(ele=>ele.selected==true)
    //let clauses = this.WarrantyData .concat(this.json);
    console.log('Warranty',this.tempData)
    console.log('Warranty',this.json)
    let Req = {
      BranchCode: this.branchCode,
      CreatedBy: this.loginId,
      InsuranceId: this.insuranceId,
      ProductId: this.productId,
      QuoteNo:"",
      //TermsId:null,
      RiskId: this.selectedRowData.VehicleId,
      SectionId:this.termsSectionId,
      TermsAndConditionReq:clauses,
      RequestReferenceNo: this.quoteRefNo
    };
  
    let urlLink = `${this.CommonApiUrl}api/inserttermsandcondition`;
    this.sharedService.onPostMethodSync(urlLink, Req).subscribe((data: any) => {
      if (data.Result) {
  
        this.ddata=data.Result;
        console.log('TOOOOOOOOO');
        console.log('VechileLength',this.vehicleDetailsList.length);
        //this.closes=false;
        //$('#exampleModal').modal('hide');
        //$('#ExclusionModal').modal('hide');
        // $('#WarrantyModel').modal('hide');
        this.json = [
          {
            "TypeId":"D",
             "Id":"4",
            "SubId":null,
             "SubIdDesc":"",
             "DocRefNo":null,
             "DocumentId":null,
             "selected": true
          }
        ];
  
        this.viewCondition('direct');
        this.newAddWarranty = false;
        this.warranty = true;
        this.showGrid=true;
        //window.location.reload();
      }
    });
  }
  
  addItem(){
    //this.jsonList.push(row);
      let entry = [{
       "TypeId":"O",
       "Id":'6',
       "SubId":null,
       "SectionId": this.termsSectionId,
       "RiskId": this.selectedRowData.VehicleId,
       "SubIdDesc":"",
       "DocRefNo":null,
        "DocumentId":null,
        "selected": true
       
     }]
      this.jsonList = entry.concat(this.jsonList);
     }
     addwarranty(row){
      let entry = [{
        "TypeId":"O",
        "Id":"4",
        "SubId":null,
        "SubIdDesc":"",
        "DocRefNo":null,
        "DocumentId":null,
        "selected": true
      }]
       this.json = entry.concat(this.json);
     }
     addExclusion(row:any){
      let entry = [{
        "TypeId":"O",
        "Id":"7",
        "SubId":null,
        "SubIdDesc":"",
        "DocRefNo":null,
        "DocumentId":null,
        "selected": true
      }]
       this.ExclusionList = entry.concat(this.ExclusionList);
     }
     delete(row:any){
         const index = this.json.indexOf(row);
         this.json.splice(index, 1);
     }
     deleteClauses(row){
       const index = this.jsonList.indexOf(row);
       this.jsonList.splice(index, 1);
     }
     deleteExclusion(row){
       const index = this.ExclusionList.indexOf(row);
       this.ExclusionList.splice(index, 1);
     }
  
  
     onCheckEndorseSelect(rowData){
      
    }
}
