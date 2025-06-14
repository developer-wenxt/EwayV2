import { Component, OnInit } from '@angular/core';
import { ProductData } from '../../../customer/customer-create-form/product';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { SharedService } from 'src/app/_services/shared.service';
import Swal from 'sweetalert2';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ShortTermVehicle } from '../../../quotation/quotation-plan/models/Tanzaniya/ShortTermVehicle';
import { MotorShotQuoteUganda } from '../../../quotation/quotation-plan/models/Uganda/MotorShotQuoteUganda';
import { FormGroup } from '@angular/forms';
import { MotorB2CQuoteTanzaniya } from '../../../quotation/quotation-plan/models/Tanzaniya/MotorB2CQuoteTanzaniya';
import { distinctUntilChanged } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-customer-info',
    templateUrl: './customer-info.component.html',
    styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
    currentCustomerType: string = 'personal';
    ownerCategoryOptions: any[] | undefined;
    selectedOwnerCategory: any | undefined;
    statusOptions: string = '';
    maxTextLen: any = '10';
    date: Date | undefined;
    titleError: boolean = false;
    userDetails: any = null;
    maxDate: any = null;
    maxDobDate: any = null;
    loginId: any = null;
    agencyCode: any = null;
    branchCode: any = null;
    productId: any = null;
    insuranceId: any = null;
    loginType: any = null;
    userType: any = null;
    quoteNo: any = null;
    brokerbranchCode: any = null;
    typeValue: any = null;
    statusList: any[] = [];
    notificationList: any[] = [];
    taxExcemptedList: any[] = [];
    policyHolderList: any[] = [];
    private readonly ApiUrl1: string = environment.ApiUrl1;
    private readonly CommonApiUrl: string = environment.CommonApiUrl;
    private readonly motorApiUrl: string = environment.MotorApiUrl;
    customerReferenceNo: any = null;
    titleList: any[] = [];
    regionList: any[] = [];
    stateList: any[] = [];
    enableFieldsList: any[] = [];
    countryList: any[] = [];
    genderList: any[] = [];
    occupationList: any[] = [];
    mobileCodeList: any[] = [];
    businessTypeList: any[] = [];
    productItem: any;
    endorsementName: any = null;
    policyHolderTypeList: any[] = [];
    dob: any = null;
    stateOptions: any[] = [];
    value1: string = 'en';
    final1: boolean = false;
    final2: any = false;
    final3: any = false;
    final4: any = false;
    final5: any = false;
    final6: any = false;
    final7: any = false;
    endorseCategory: any = null;
    shows: boolean = false;
    final: boolean = false;
    endorsementId: any = null;
    Idnumber: any;
    shortQuoteYN: boolean = false;
    enableCustomerDetails: boolean = false;
    Idnumber1: any;
    endorsementSection: boolean = false;
    Idnumber2: any;
    lang: any = null;
    minDate: Date;
    policyStartDate: any;
    policyEndDate: any = null;
    vehicleDetailsList: any[] = [];
    IndustryId: string;
    industryError: boolean;
    brokerLoginId: null;
    brokerCode: null;
    customerCodeError: boolean;
    customerName: string;
    policyStartError: boolean;
    policyEndError: boolean;
    currencyCodeError: boolean;
    policyPassDate: boolean;
    currencyCode: null;
    issuerSection: any;
    Code: string;
    sourceCodeError: boolean;
    quoteRefNo: any = null;
    currencyList: any;
    exchangeRate: any;
    minCurrencyRate: any;
    maxCurrencyRate: any;
    promocode: any;
    vehicleId: any;
    makeList: any;
    bodyTypeList: any;
    colorList: any;
    fuelTypeList: any;
    usageList: any;
    motorCategoryList: any;
    modelList: any;
    commonDetails: any;
    subuserType: string;
    customerDetails: any;
    vehicleDetails: any;
    commissionType: any;
    requestReferenceNo: any;
    endorsementDate: any;
    endorsementEffectiveDate: any;
    endorsementRemarks: any;
    endorsementType: any;
    endorsementTypeDesc: any;
    endtCategoryDesc: any;
    endtCount: any;
    endtPrevPolicyNo: any;
    endtPrevQuoteNo: any;
    endtStatus: any;
    isFinanceEndt: any;
    orginalPolicyNo: any;
    motorDetails: null;
    currentIndex: number;
    totalIndex: number;
    customerCode: any;
    sourceType: string;
    currentGroupIndex: number;
    fields: any[] = [];
    form: any;
    model: any;
    editSection: boolean = false;
    mainBodyTypeList: any[] = [];
    bodyTypeValue: any = null;
    motorUsageList: any[] = [];
    motorTypeList: any[] = [];
    motordetails: any;
    bodyTypeId: any = null;
    classList: any[] = [];
    typeList: any[] = [];
    motorUsageValue: any = null;
    motorUsageType: any = null;
    yearList: any[] = [];
    cityValue: any = null;
    classValue: any = null;
    makeValue: any = null;
    customerNameError: boolean = false;
    countryCodeError: boolean = false;
    mobileNoError: boolean = false;
    individualCalcIndex: number;
    endorseEffectiveDate: any;
    endorseCoverModification: any;
    disabledSection: boolean;
    constructor(
        private sharedService: SharedService,
        private datePipe: DatePipe,
        private router: Router,
        private appComp: AppComponent,
        private translate: TranslateService,
    ) {
        this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
        const type = sessionStorage.getItem('QuoteType');
        if (type) this.shortQuoteYN = true;
        this.minDate = new Date();
        this.maxDate = new Date();
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        this.maxDobDate = new Date(year - 18, month, day);
        this.loginId = this.userDetails.Result.LoginId;
        this.agencyCode = this.userDetails.Result.OaCode;
        this.branchCode = this.userDetails.Result.BranchCode;
        this.productId = this.userDetails.Result.ProductId;
        this.insuranceId = this.userDetails.Result.InsuranceId;
        this.loginType = this.userDetails.Result.LoginType;
        this.userType = this.userDetails.Result.UserType;
        this.currencyCode = this.userDetails.Result.CurrencyId;
        this.brokerbranchCode = this.userDetails.Result.BrokerBranchCode;
        this.typeValue = sessionStorage.getItem('typeValue');
        if (this.typeValue == 'b2c' || this.typeValue == 'B2C Broker') {
            this.productId = '5';
        }
        this.typeValue = sessionStorage.getItem('typeValue');
        this.productItem = new ProductData();
        if (sessionStorage.getItem('reloadType')) {
            sessionStorage.removeItem('reloadType');
            window.location.reload();
        }
        this.form = new FormGroup({});
        this.model = {};
        this.stateOptions = [
            { label: 'English', value: 'en' },
            { label: 'Portugese', value: 'po' },
        ];

        this.getTitleList();
        this.getCurrencyList();
        this.getMobileCodeList();
        this.getPolicyHolderList();

        const referenceNo = sessionStorage.getItem('quoteReferenceNo');
        if (referenceNo) {
            this.requestReferenceNo = referenceNo;
            this.quoteRefNo = referenceNo;
            this.vehicleDetailsList = [];
            this.vehicleId = null;
            const refNo = sessionStorage.getItem('customerReferenceNo');
            if (refNo) {
                this.customerReferenceNo = refNo;
            } else {
                this.customerReferenceNo = null;

                this.productItem.IdType = '1';
            }

            this.getmotorDetails();
            //this.setCommonFormValues();
        }
    }
    ngOnInit() {
        this.appComp.getLanguage().subscribe((res: any) => {
            if (res) this.lang = res;
            else this.lang = 'en';
            this.translate.setDefaultLang(this.lang);
        });
        if (!this.lang) {
            if (sessionStorage.getItem('language'))
                this.lang = sessionStorage.getItem('language');
            else this.lang = 'en';
            sessionStorage.setItem('language', this.lang);
            this.translate.setDefaultLang(sessionStorage.getItem('language'));
        }
        this.productItem.CarAlarmYN = 'N';
        this.productItem.GpsYN = 'N';
        this.productItem.ClaimsYN = 'N';
        this.yearList = this.getYearList();
        this.getCurrencyList();
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        this.policyStartDate = this.datePipe.transform(
            new Date(year, month, day),
            'dd/MM/yyyy',
        );
        this.policyEndDate = this.datePipe.transform(
            new Date(year + 1, month, day - 1),
            'dd/MM/yyyy',
        );
        if (this.productId == '46') {
            const fireData = new ShortTermVehicle();
            this.fields[0] = fireData?.fields;
        } else if (this.productId == '5') {
            let fireData = null;
            if (this.insuranceId == '100002') {
                fireData = new MotorB2CQuoteTanzaniya();
            }
            if (this.insuranceId == '100019')
                fireData = new MotorShotQuoteUganda();
            this.fields[0] = fireData?.fields;
        }
        const regionHooks7 = {
            onInit: (field: FormlyFieldConfig) => {
                field.form.controls['RegistrationNo'].valueChanges
                    .pipe(distinctUntilChanged())
                    .subscribe(() => {});
            },
        };
        if (
            this.insuranceId == '100002' ||
            this.insuranceId == '100018' ||
            this.insuranceId == '100019' ||
            this.insuranceId == '100020' ||
            this.insuranceId == '100004' ||
            this.insuranceId == '100027' ||
            this.insuranceId == '100040' ||
            this.insuranceId == '100042' ||
            this.insuranceId == '100028'
        ) {
            const regionHooks2 = {
                onInit: (field: FormlyFieldConfig) => {
                    field.formControl.valueChanges.subscribe(() => {
                        this.onChangeInsuranceClass();
                    });
                },
            };
            const regionHooks5 = {
                onInit: (field: FormlyFieldConfig) => {
                    field.formControl.valueChanges.subscribe(() => {
                        this.onChangeMotorUsage('change');
                        this.getMotorTypeList(
                            'change',
                            this.productItem.BodyType,
                        );
                    });
                },
            };
            const regionHooks3 = {
                onInit: (field: FormlyFieldConfig) => {
                    field.formControl.valueChanges.subscribe(() => {
                        this.onBodyTypeChange('change');
                    });
                },
            };
            const regionHooks4 = {
                onInit: (field: FormlyFieldConfig) => {
                    field.formControl.valueChanges.subscribe(() => {
                        this.onMakeChange();
                    });
                },
            };
            const regionHooks6 = {
                onInit: (field: FormlyFieldConfig) => {
                    field.formControl.valueChanges.subscribe(() => {
                        this.onModelChange('change');
                    });
                },
            };
            if (this.insuranceId != '100004') {
                const fieldList = this.fields[0].fieldGroup[0].fieldGroup;
                const defaultObj = [
                    {
                        label: '---Select---',
                        value: '',
                        Code: '',
                        CodeDesc: '---Select---',
                    },
                ];
                for (const field of fieldList) {
                    if (
                        field.key == 'ManufactureYear' &&
                        this.yearList.length != 0
                    )
                        field.props.options = defaultObj.concat(this.yearList);
                    if (field.key == 'MotorUsage') {
                        field.hooks = regionHooks5;
                    }
                    if (
                        field.key == 'RegistrationNo' &&
                        this.insuranceId == '100002'
                    ) {
                        field.hooks = regionHooks7;
                    }
                    if (field.key == 'BodyType') {
                        field.hooks = regionHooks3;
                    }
                    if (field.key == 'Make') {
                        field.hooks = regionHooks4;
                    }
                    if (field.key == 'Model') {
                        field.hooks = regionHooks6;
                    }
                    if (
                        field.key == 'InsuranceType' &&
                        this.insuranceId == '100028'
                    ) {
                        field.hooks = regionHooks2;
                    } else if (
                        field.key == 'InsuranceClass' &&
                        this.insuranceId != '100028'
                    )
                        field.hooks = regionHooks2;
                }
            } else
                this.fields[0].fieldGroup[0].fieldGroup[0].hooks = regionHooks2;
        }
        this.getInsuranceTypeList();
        this.getInsuranceClassList();
        this.getMotorUsageList(null, 'change');
        if (this.customerReferenceNo) {
            this.setValues();
        } else {
            this.productItem.Clientstatus = 'Y';
            this.productItem.isTaxExempted = 'N';
            this.productItem.PreferredNotification = 'Sms';
            this.productItem.Gender = '';
            this.productItem.PolicyHolderTypeid = '';
            this.productItem.IdType = '1';
            if (
                this.mobileCodeList.length != 0 &&
                this.mobileCodeList.length > 1
            ) {
                this.productItem.MobileCode = this.mobileCodeList[1].Code;
            }
            if (this.countryList.length != 0 && this.countryList.length > 1) {
                this.productItem.Country = this.countryList[1].Code;
                // this.getRegionList('change');
            }
            this.productItem.state = '';
            this.productItem.CityName = '';
            this.productItem.Occupation = '';
            this.productItem.BusinessType = '';
            this.productItem.Title = '';
            if (sessionStorage.getItem('VechileDetails')) {
                const motorDetails = JSON.parse(
                    sessionStorage.getItem('VechileDetails'),
                );
                this.productItem.ClientName = motorDetails.ResOwnerName;
                this.productItem.Title = '1';
                this.onTitleChange();
            }
        }
    }

    setPolicyType() {
        const value = this.productItem.IdType;
        if (value == 2 || value == '2') {
            this.productItem.Gender = '';
        }
    }
    getDisplayName() {
        return 'CodeDesc';
    }

    onStartDateChange(type) {
        if (type == 'change') {
            if (this.vehicleDetailsList.length != 0) {
                for (const customer of this.vehicleDetailsList)
                    customer['modifiedYN'] = 'Y';
            }
        }
    }
    getTitleList() {
        const ReqObj = {
            InsuranceId: this.insuranceId,
            BranchCode: this.branchCode,
        };
        const urlLink = `${this.CommonApiUrl}dropdown/title`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                if (data.Result) {
                    const obj = [
                        {
                            Code: '',
                            CodeDesc: '-Select-',
                            CodeDescLocal: '-Selecione-',
                        },
                    ];
                    this.titleList = obj.concat(data.Result);
                }
            });
    }
    onCommonDetailsChange() {
        if (this.vehicleDetailsList.length != 0) {
            for (const customer of this.vehicleDetailsList)
                customer['modifiedYN'] = 'Y';
        }
    }
    getCurrencyList() {
        const ReqObj = {
            InsuranceId: this.insuranceId,
            ProductId: this.productId,
            BranchCode: this.branchCode,
        };
        const urlLink = `${this.CommonApiUrl}master/dropdown/productcurrency`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                if (data.Result) {
                    this.currencyList = data.Result;
                    if (this.currencyCode) {
                        //   if(this.currencyList.some(ele=>ele.Code==this.currencyCode)){
                        this.onCurrencyChange('direct');
                        // }
                        // else this.currencyCode=this.currencyList[0].Code
                    } else if (this.currencyList.length == 1) {
                        this.currencyCode = this.currencyList[0].Code;
                        this.onCurrencyChange('direct');
                    }
                }
            });
    }
    onCurrencyChange(type) {
        let currencyData;
        if (this.currencyCode != null && this.currencyCode != '') {
            if (this.currencyList.length != 0) {
                currencyData = this.currencyList.find(
                    (ele) => ele.Code == this.currencyCode,
                );
                if (currencyData) {
                    this.exchangeRate = currencyData?.ExchangeRate;
                    this.minCurrencyRate = currencyData?.MinRate;
                    this.maxCurrencyRate = currencyData?.MaxRate;
                } else {
                    this.currencyCode = this.currencyList[0]?.Code;
                    this.exchangeRate = this.currencyList[0]?.ExchangeRate;
                    this.minCurrencyRate = this.currencyList[0]?.MinRate;
                    this.maxCurrencyRate = this.currencyList[0]?.MaxRate;
                }
            }
        }
        if (this.currencyCode == 'TZS') {
            // this.editSection=false;
        } else {
            // this.editSection=true;
        }
        //if((this.productId=='5' || this.productId=='46' || this.productId=='29') && type=='change'){this.updateComponent.modifiedYN = 'Y'}
        if (type == 'change' && this.quoteRefNo != null) {
            // this.updateComponent.ModifiedCurrencyYN = 'Y';
        }
        if (type == 'change') {
            if (this.vehicleDetailsList.length != 0) {
                for (const customer of this.vehicleDetailsList)
                    customer['modifiedYN'] = 'Y';
            }
        }
    }
    onRegistrationSearch() {
        if (
            this.productItem.RegistrationNo != '' &&
            this.productItem.RegistrationNo != null &&
            this.productItem.RegistrationNo != undefined
        ) {
            this.disabledSection = true;
            const fieldList = this.fields[0].fieldGroup[0].fieldGroup;
            for (const field of fieldList) {
                if (field.props) field.props.disabled = true;
                else if (field.templateOptions)
                    field.templateOptions.disabled = true;
            }
        }
        this.productItem.RegistrationNo =
            this.productItem.RegistrationNo.toUpperCase();
        this.editSection = true;
        sessionStorage.setItem('loadingType', 'motorSearch');
        const ReqObj = {
            ReqChassisNumber: '',
            ReqRegNumber: this.productItem.RegistrationNo,
            InsuranceId: this.insuranceId,
            BranchCode: this.branchCode,
            BrokerBranchCode: this.branchCode,
            ProductId: this.productId,
            CreatedBy: this.loginId,
            SavedFrom: 'API',
        };
        const urlLink = `${this.motorApiUrl}regulatory/showvehicleinfo`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(() => {
            const fieldList = this.fields[0].fieldGroup[0].fieldGroup;
            for (const field of fieldList) {
                if (field.props) field.props.disabled = false;
                else if (field.templateOptions)
                    field.templateOptions.disabled = false;
            }
            sessionStorage.removeItem('loadingType');
            this.disabledSection = false;
        });
    }
    checkMandatories() {
        this.policyStartError = false;
        this.policyEndError = false;
        this.currencyCodeError = false;
        this.policyPassDate = false;
        this.titleError = false;
        this.customerNameError = false;
        this.countryCodeError = false;
        this.mobileNoError = false;
        let i = 0;
        if (
            this.productItem.Title == null ||
            this.productItem.Title == '' ||
            this.productItem.Title == undefined
        ) {
            i += 1;
            this.titleError = true;
        }
        if (
            this.productItem.ClientName == null ||
            this.productItem.ClientName == '' ||
            this.productItem.ClientName == undefined
        ) {
            i += 1;
            this.customerNameError = true;
        }
        if (
            this.productItem.MobileCode == null ||
            this.productItem.MobileCode == '' ||
            this.productItem.MobileCode == undefined
        ) {
            i += 1;
            this.countryCodeError = true;
        }
        if (
            this.productItem.MobileNo == null ||
            this.productItem.MobileNo == '' ||
            this.productItem.MobileNo == undefined
        ) {
            i += 1;
            this.mobileNoError = true;
        }
        if (
            this.policyStartDate == null ||
            this.policyStartDate == '' ||
            this.policyStartDate == undefined
        ) {
            i += 1;
            this.policyStartError = true;
        } else {
            const dateList = String(this.policyStartDate).split('/');
            if (dateList.length > 0) {
                const date =
                    dateList[2] + '-' + dateList[1] + '-' + dateList[0];
                const firstRepaymentDate = new Date(date);
                const today = new Date();
                if (
                    (this.productId == '5' ||
                        this.productId == '4' ||
                        this.productId == '46' ||
                        this.productId == '29') &&
                    firstRepaymentDate.getTime() < today.setHours(0, 0, 0, 0)
                ) {
                    i += 1;
                    this.policyPassDate = true;
                }
            }
        }
        if (
            this.currencyCode == null ||
            this.currencyCode == '' ||
            this.currencyCode == undefined
        ) {
            i += 1;
            this.currencyCodeError = true;
        }
        if (this.issuerSection) {
            if (
                this.Code == '' ||
                this.Code == null ||
                this.Code == undefined
            ) {
                i += 1;
                this.sourceCodeError = true;
            } else {
                //this.sourceCodeError = false;
                //if(this.sourceCodeDesc=='Premia Agent' || this.sourceCodeDesc=='Premia Broker' || this.sourceCodeDesc=='Premia Direct'){
                if (
                    this.customerName == '' ||
                    this.customerName == undefined ||
                    this.customerName == null
                ) {
                    this.customerCodeError = true;
                    i += 1;
                }
                this.brokerCode = null;
                this.brokerbranchCode = null;
                this.brokerLoginId = null;
                // }
                // else{
                //   if(this.brokerCode=='' || this.brokerCode==undefined || this.brokerCode==null){
                //     this.brokerCodeError = true;
                //     i+=1;
                //   }
                //   if(this.brokerBranchCode=='' && this.brokerBranchCode==undefined && this.brokerBranchCode==null){
                //     this.brokerBranchCodeError = true;
                //     i+=1;
                //   }
                // }
            }
        }
        if (
            this.productId == '6' ||
            this.productId == '13' ||
            this.productId == '16' ||
            this.productId == '39' ||
            this.productId == '14' ||
            this.productId == '32' ||
            this.productId == '1' ||
            this.productId == '21' ||
            this.productId == '26' ||
            this.productId == '25' ||
            this.productId == '57'
        ) {
            if (
                this.IndustryId == '' ||
                this.IndustryId == null ||
                this.IndustryId == undefined
            ) {
                i += 1;
                this.industryError = true;
            } else this.industryError = false;
        }
        return i == 0;
    }
    getPolicyHolderList() {
        const ReqObj = {
            InsuranceId: this.insuranceId,
            BranchCode: this.branchCode,
        };

        const urlLink = `${this.CommonApiUrl}dropdown/policyholdertype`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                console.log(data);
                if (data.Result) {
                    this.policyHolderList = data.Result;
                    const defaultRow = [];
                    this.policyHolderList = defaultRow.concat(
                        this.policyHolderList,
                    );
                }
            });
    }
    onTitleChange() {
        const title = this.productItem.Title;
        if (title != '' && title != null && title != undefined) {
            if (title == '2') this.productItem.IdType = '2';
            else this.productItem.IdType = '1';
            if (title == '1') this.productItem.Gender = 'M';
            else this.productItem.Gender = 'F';
        } else {
            this.productItem.IdType = '';
        }
    }
    onsavedatas(type) {
        if (type == 'Customer') {
            this.Customervalidate();
        } else if (type == 'direct' && this.final) {
            if (this.final5) this.Customervalidate();
        }
    }
    getMobileCodeList() {
        const ReqObj = { InsuranceId: this.insuranceId };
        const urlLink = `${this.CommonApiUrl}dropdown/mobilecodes`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                console.log(data);
                if (data.Result) {
                    const obj = [
                        {
                            Code: '',
                            CodeDesc: '-Select-',
                            CodeDescLocal: '-Selecione-',
                        },
                    ];
                    this.mobileCodeList = obj.concat(data.Result);
                }
            });
    }
    getmotorDetails() {
        const ReqObj = {
            RequestReferenceNo: this.quoteRefNo,
            Idnumber: null,
            Vehicleid: '1',
        };
        const urlLink = `${this.motorApiUrl}api/getmotordetails`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                this.motordetails = data.Result;
                this.editSection = true;
                const vehicleDetails = data.Result;
                this.currencyCode = vehicleDetails.Currency;
                this.exchangeRate = vehicleDetails.ExchangeRate;
                this.motorUsageValue = vehicleDetails.Motorusage;
                this.productItem.MotorUsage = vehicleDetails.Motorusage;
                this.bodyTypeId = vehicleDetails.VehicleType;
                this.productItem.BodyType = vehicleDetails.VehicleType;
                this.bodyTypeValue = vehicleDetails.VehicleType;
                if (vehicleDetails.SourceTypeId != null)
                    this.Code = vehicleDetails?.SourceTypeId;
                this.branchCode = vehicleDetails?.BranchCode;
                this.brokerbranchCode = vehicleDetails?.BrokerBranchCode;
                this.customerCode = vehicleDetails?.CustomerCode;
                this.brokerCode = vehicleDetails?.BrokerCode;
                if (
                    vehicleDetails?.Insurancetype != null &&
                    vehicleDetails?.Insurancetype != ''
                ) {
                    if (Array.isArray(vehicleDetails?.Insurancetype)) {
                        if (vehicleDetails?.Insurancetype.length != 0)
                            this.productItem.InsuranceType =
                                vehicleDetails.Insurancetype[0];
                    }
                }
                this.productItem.InsuranceClass =
                    vehicleDetails?.InsuranceClass;
                this.productItem.Make = vehicleDetails.Vehiclemake;
                this.productItem.MakeDesc = vehicleDetails.VehiclemakeDesc;
                this.productItem.ModelId = vehicleDetails.Vehcilemodel;
                this.productItem.ManufactureYear =
                    vehicleDetails.ManufactureYear;
                this.productItem.ChassisNo = vehicleDetails.Chassisnumber;
                this.productItem.VehicleSI = vehicleDetails.SumInsured;
                this.productItem.WindScreenSumInsured =
                    vehicleDetails.WindScreenSumInsured;
                this.productItem.TppdIncreaeLimit =
                    vehicleDetails.TppdIncreaeLimit;
                this.productItem.AcccessoriesSumInsured =
                    vehicleDetails.AcccessoriesSumInsured;
                this.productItem.Registrationnumber =
                    vehicleDetails.Registrationnumber;
                this.productItem.ClaimsYN = vehicleDetails.NcdYn;
                this.productItem.GpsYN = vehicleDetails.Gpstrackinginstalled;
                this.productItem.CarAlarmYN = vehicleDetails.CarAlarmYn;
                let i = 0;
                const fieldList = this.fields[0].fieldGroup[0].fieldGroup;
                for (const field of fieldList) {
                    if (field.key == 'InsuranceType') {
                        field.formControl.setValue(
                            vehicleDetails?.Insurancetype[0],
                        );
                    }
                    if (field.key == 'InsuranceClass')
                        field.formControl.setValue(
                            vehicleDetails?.InsuranceClass,
                        );
                    if (field.key == 'BodyType')
                        field.formControl.setValue(vehicleDetails?.VehicleType);
                    if (field.key == 'MotorUsage')
                        field.formControl.setValue(vehicleDetails?.Motorusage);
                    if (field.key == 'Make')
                        field.formControl.setValue(vehicleDetails?.Vehiclemake);
                    if (field.key == 'ModelId')
                        field.formControl.setValue(
                            vehicleDetails?.Vehcilemodel,
                        );
                    if (field.key == 'ManufactureYear')
                        field.formControl.setValue(
                            vehicleDetails?.ManufactureYear,
                        );
                    if (field.key == 'ChassisNo')
                        field.formControl.setValue(
                            vehicleDetails?.Chassisnumber,
                        );
                    if (field.key == 'VehicleSI')
                        field.formControl.setValue(vehicleDetails?.SumInsured);
                    if (field.key == 'WindScreenSumInsured')
                        field.formControl.setValue(
                            vehicleDetails?.WindScreenSumInsured,
                        );
                    if (field.key == 'TppdIncreaeLimit')
                        field.formControl.setValue(
                            vehicleDetails?.TppdIncreaeLimit,
                        );
                    if (field.key == 'AcccessoriesSumInsured')
                        field.formControl.setValue(
                            vehicleDetails?.AcccessoriesSumInsured,
                        );
                    if (field.key == 'Registrationnumber')
                        field.formControl.setValue(
                            vehicleDetails?.Registrationnumber,
                        );
                    if (field.key == 'ClaimsYN')
                        field.formControl.setValue(vehicleDetails?.NcdYn);
                    if (field.key == 'GpsYN')
                        field.formControl.setValue(
                            vehicleDetails?.Gpstrackinginstalled,
                        );
                    if (field.key == 'CarAlarmYn')
                        field.formControl.setValue(vehicleDetails?.CarAlarmYn);
                    i += 1;
                    if (i == fieldList.length) {
                        this.editSection = false;
                    }
                }
            });
    }
    onChangeInsuranceClass() {
        const fieldList = this.fields[0].fieldGroup[0].fieldGroup;
        for (const field of fieldList) {
            if (field.key == 'GpsYN' || field.key == 'CarAlarmYN') {
                if (
                    this.productItem.InsuranceClass != '' &&
                    this.productItem.InsuranceClass != null &&
                    this.productItem.InsuranceClass != undefined
                ) {
                    if (this.productItem.InsuranceClass == '1') {
                        field.hideExpression = false;
                        field.hide = false;
                        if (
                            this.productItem.GpsYN == null ||
                            this.productItem.GpsYN == ''
                        )
                            this.productItem.GpsYN = 'N';
                        if (
                            this.productItem.CarAlarmYN == null ||
                            this.productItem.CarAlarmYN == ''
                        )
                            this.productItem.CarAlarmYN = 'N';
                    } else {
                        field.hideExpression = true;
                        field.hide = true;
                        if (this.productItem) {
                            this.productItem.GpsYN = 'N';
                            this.productItem.CarAlarmYN = 'N';
                        }
                    }
                }
            }
            if (
                field.key == 'InsuranceType' &&
                (this.insuranceId == '100028' ||
                    this.insuranceId == '100027' ||
                    this.insuranceId == '100040' ||
                    this.insuranceId == '100042') &&
                this.vehicleDetailsList.length == 1
            ) {
                field.hideExpression = true;
                field.hide = true;
            }
            if (
                field.key == 'VehicleSI' ||
                field.key == 'AccessoriesSI' ||
                field.key == 'WindShieldSI' ||
                field.key == 'ExtendedTPPDSI'
            ) {
                if (
                    this.insuranceId == '100028' &&
                    this.vehicleDetailsList.length == 1
                ) {
                    field.hideExpression = false;
                    field.hide = false;
                } else if (
                    this.productItem.InsuranceClass != '' &&
                    this.productItem.InsuranceClass != null &&
                    this.productItem.InsuranceClass != undefined
                ) {
                    if (
                        this.productItem.InsuranceClass == '1' ||
                        this.productItem.InsuranceClass == '2'
                    ) {
                        field.hideExpression = false;
                        field.hide = false;
                    } else {
                        this.productItem.VehicleSI = null;
                        this.productItem.WindShieldSI = null;
                        this.productItem.Accessories;
                        field.hideExpression = true;
                        field.hide = true;
                    }
                }
            }
        }
    }
    onChangeMotorUsage(type) {
        if (
            this.productItem.MotorUsage != null &&
            this.productItem.MotorUsage != '' &&
            this.productItem.MotorUsage != undefined
        ) {
            const entry = this.motorUsageList.find(
                (ele) =>
                    ele.CodeDesc == this.productItem.MotorUsage ||
                    ele.Code == this.productItem.MotorUsage,
            );
            if (entry) {
                const defaultObj = [
                    {
                        label: '---Select---',
                        value: '',
                        Code: '',
                        CodeDesc: '---Select---',
                    },
                ];
                const bodyTypeStatus = entry?.BodyType;
                if (
                    this.insuranceId == '100027' ||
                    this.insuranceId == '100040' ||
                    this.insuranceId == '100042' ||
                    this.insuranceId == '100002' ||
                    this.insuranceId == '100028' ||
                    this.insuranceId == '100018' ||
                    this.insuranceId == '100019' ||
                    this.insuranceId == '100020'
                ) {
                    const fieldList = this.fields[0].fieldGroup[0].fieldGroup;
                    for (const field of fieldList) {
                        if (field.key == 'BodyType') {
                            const typeList = this.motorTypeList.filter(
                                (ele) => ele.BodyType == bodyTypeStatus,
                            );
                            field.props.options = defaultObj.concat(typeList);
                        }
                    }
                }
                if (type == 'change' && !this.editSection)
                    this.bodyTypeValue = null;
            }
        }
    }
    onBodyTypeChange(type) {
        if (this.motordetails) {
            this.productItem.BodyType = this.motordetails.VehicleType;
            this.bodyTypeValue = this.motordetails.VehicleType;
        }
        if (
            this.productItem.BodyType != null &&
            this.productItem.BodyType != ''
        ) {
            const fieldList = this.fields[0].fieldGroup[0].fieldGroup;
            for (const field of fieldList) {
                //if(field.key=='BodyType'){field.formControl.setValue(this.productItem.BodyType)}
                if (field.key == 'Model') {
                    if (
                        this.productItem.BodyType == '1' ||
                        this.productItem.BodyType == '2' ||
                        this.productItem.BodyType == '3' ||
                        this.productItem.BodyType == '' ||
                        this.productItem.BodyType == null
                    ) {
                        field.hideExpression = false;
                        field.hide = false;
                    } else {
                        field.hideExpression = true;
                        field.hide = true;
                    }
                } else if (field.key == 'ModelDesc') {
                    if (
                        (this.productItem.BodyType != '1' &&
                            this.productItem.BodyType != '2' &&
                            this.productItem.BodyType != '3' &&
                            this.productItem.BodyType != '' &&
                            this.productItem.BodyType != null) ||
                        this.productItem.Model == '99999'
                    ) {
                        field.hideExpression = false;
                        field.hide = false;
                    } else {
                        field.hideExpression = true;
                        field.hide = true;
                    }
                }
            }

            if (this.motorTypeList.length != 0)
                this.bodyTypeId = this.motorTypeList.find(
                    (ele) =>
                        ele.CodeDesc == String(this.productItem.BodyType) ||
                        ele.Code == String(this.productItem.BodyType),
                )?.Code;
            else this.bodyTypeId = this.productItem.BodyType;
            if (
                type == 'change' &&
                this.insuranceId != '100020' &&
                !this.editSection
            ) {
                this.productItem.MakeId = null;
                this.productItem.ModelId = null;
            }
            if (this.bodyTypeId && this.insuranceId != '100020') {
                this.getMakeList();
            }
            if (this.editSection && this.motorTypeList.length != 0)
                this.editSection = false;
        }
    }
    getMakeList() {
        const ReqObj = {
            InsuranceId: this.insuranceId,
            BranchCode: this.branchCode,
            BodyId: this.bodyTypeId,
        };
        const urlLink = `${this.CommonApiUrl}master/dropdown/motormake`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                console.log(data);
                if (data.Result) {
                    this.makeList = data.Result;
                    if (this.makeList.length != 0) {
                        const defaultObj = [
                            {
                                label: '---Select---',
                                value: '',
                                Code: '',
                                CodeDesc: '---Select---',
                            },
                        ];
                        for (let i = 0; i < this.makeList.length; i++) {
                            this.makeList[i].label =
                                this.makeList[i]['CodeDesc'];
                            this.makeList[i].value = this.makeList[i]['Code'];
                            if (i == this.makeList.length - 1) {
                                if (this.fields.length != 0) {
                                    const fieldList =
                                        this.fields[0].fieldGroup[0].fieldGroup;
                                    for (const field of fieldList) {
                                        if (field.key == 'Make') {
                                            field.props.options =
                                                defaultObj.concat(
                                                    this.makeList,
                                                );
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
    }
    onModelChange(type) {
        if (this.productItem.Model != null && this.productItem.Model != '') {
            if (this.productItem.Model != '99999') {
                this.productItem.ModelDesc = this.modelList.find(
                    (ele) => ele.CodeDesc == this.productItem.Model,
                )?.CodeDesc;
            }
            if (type == 'change' && this.productItem.Model != '99999') {
                this.productItem.ModelDesc = null;
            }
            const fieldList = this.fields[0].fieldGroup[0].fieldGroup;
            for (const field of fieldList) {
                console.log(field);
                const fieldList = this.fields[0].fieldGroup[0].fieldGroup;
                for (const field of fieldList) {
                    if (field.key == 'Model') {
                        if (
                            this.productItem.BodyType == '1' ||
                            this.productItem.BodyType == '2' ||
                            this.productItem.BodyType == '3' ||
                            this.productItem.BodyType == '' ||
                            this.productItem.BodyType == null
                        ) {
                            field.hideExpression = false;
                            field.hide = false;
                        } else {
                            field.hideExpression = true;
                            field.hide = true;
                        }
                    } else if (field.key == 'ModelDesc') {
                        if (
                            (this.productItem.BodyType != '1' &&
                                this.productItem.BodyType != '2' &&
                                this.productItem.BodyType != '3' &&
                                this.productItem.BodyType != '' &&
                                this.productItem.BodyType != null) ||
                            this.productItem.Model == '99999'
                        ) {
                            field.hideExpression = false;
                            field.hide = false;
                        } else {
                            field.hideExpression = true;
                            field.hide = true;
                        }
                    }
                }
            }
        }
    }
    onMakeChange() {
        console.log('on make change', this.makeValue);
        if (this.productItem.Make != '' && this.productItem.Make != null) {
            const ReqObj = {
                InsuranceId: this.insuranceId,
                BranchCode: this.branchCode,
                BodyId: this.productItem.BodyType,
                MakeId: this.productItem.Make,
            };
            const urlLink = `${this.CommonApiUrl}master/dropdown/motormakemodel`;
            this.sharedService
                .onPostMethodSync(urlLink, ReqObj)
                .subscribe((data: any) => {
                    console.log(data);
                    if (data.Result) {
                        this.modelList = data.Result;
                        if (this.modelList.length != 0) {
                            const defaultObj = [
                                {
                                    label: '---Select---',
                                    value: '',
                                    Code: '',
                                    CodeDesc: '---Select---',
                                },
                            ];
                            for (let i = 0; i < this.modelList.length; i++) {
                                this.modelList[i].label =
                                    this.modelList[i]['CodeDesc'];
                                this.modelList[i].value =
                                    this.modelList[i]['Code'];
                                if (i == this.modelList.length - 1) {
                                    if (this.fields.length != 0) {
                                        const fieldList =
                                            this.fields[0].fieldGroup[0]
                                                .fieldGroup;
                                        for (const field of fieldList) {
                                            if (field.key == 'Model') {
                                                field.props.options =
                                                    defaultObj.concat(
                                                        this.modelList,
                                                    );
                                                if (this.motordetails) {
                                                    if (
                                                        this.productItem
                                                            .BodyType == '1' ||
                                                        this.productItem
                                                            .BodyType == '2' ||
                                                        this.productItem
                                                            .BodyType == '3' ||
                                                        this.productItem
                                                            .BodyType == '' ||
                                                        this.productItem
                                                            .BodyType == null
                                                    ) {
                                                        field.hideExpression =
                                                            false;
                                                        field.hide = false;
                                                    } else {
                                                        field.hideExpression =
                                                            true;
                                                        field.hide = true;
                                                    }
                                                    field.formControl.setValue(
                                                        this.motordetails
                                                            ?.Vehcilemodel,
                                                    );

                                                    const entry =
                                                        this.modelList.find(
                                                            (ele) =>
                                                                ele.CodeDesc ==
                                                                    this
                                                                        .motordetails
                                                                        ?.Vehcilemodel ||
                                                                ele.Code ==
                                                                    this
                                                                        .motordetails
                                                                        ?.Vehcilemodel,
                                                        );
                                                    if (
                                                        (entry == null ||
                                                            entry ==
                                                                undefined) &&
                                                        this.motordetails
                                                            ?.Vehcilemodel !=
                                                            null &&
                                                        this.motordetails
                                                            ?.Vehcilemodel !=
                                                            undefined
                                                    ) {
                                                        this.productItem.Model =
                                                            '99999';
                                                        this.productItem.ModelDesc =
                                                            this.motordetails?.Vehcilemodel;
                                                    } else {
                                                        this.productItem.Model =
                                                            entry.Code;
                                                        this.productItem.ModelDesc =
                                                            this.motordetails?.Vehcilemodel;
                                                    }
                                                }
                                            } else if (
                                                field.key == 'ModelDesc'
                                            ) {
                                                if (
                                                    (this.productItem
                                                        .BodyType != '1' &&
                                                        this.productItem
                                                            .BodyType != '2' &&
                                                        this.productItem
                                                            .BodyType != '3' &&
                                                        this.productItem
                                                            .BodyType != '' &&
                                                        this.productItem
                                                            .BodyType !=
                                                            null) ||
                                                    this.productItem.Model ==
                                                        '99999'
                                                ) {
                                                    field.hideExpression =
                                                        false;
                                                    field.hide = false;
                                                } else {
                                                    field.hideExpression = true;
                                                    field.hide = true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
        }
    }
    getYearList() {
        const d = new Date();
        let year = d.getFullYear();
        const currentYear = new Date().getFullYear() - 20,
            years = [];
        while (year >= currentYear) {
            const yearEntry = year--;
            years.push({
                Code: String(yearEntry),
                label: String(yearEntry),
                value: String(yearEntry),
                CodeDesc: String(yearEntry),
            });
        }
        return years;
    }
    getInsuranceTypeList() {
        const ReqObj = {
            ProductId: this.productId,
            InsuranceId: this.insuranceId,
            BranchCode: this.branchCode,
        };
        const urlLink = `${this.ApiUrl1}master/dropdown/productsection`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                console.log(data);
                if (data.Result) {
                    this.typeList = data.Result;
                    if (this.typeList.length != 0) {
                        const defaultObj = [
                            {
                                label: '---Select---',
                                value: '',
                                Code: '',
                                CodeDesc: '---Select---',
                            },
                        ];
                        for (let i = 0; i < this.typeList.length; i++) {
                            this.typeList[i].label =
                                this.typeList[i]['CodeDesc'];
                            this.typeList[i].value = this.typeList[i]['Code'];
                            if (i == this.typeList.length - 1) {
                                if (this.fields.length != 0) {
                                    const fieldList =
                                        this.fields[0].fieldGroup[0].fieldGroup;
                                    for (const field of fieldList) {
                                        if (field.key == 'InsuranceType')
                                            field.props.options =
                                                defaultObj.concat(
                                                    this.typeList,
                                                );
                                    }
                                }
                            }
                        }
                    }
                }
            });
    }
    getInsuranceClassList() {
        let loginId = null;
        if (this.userType != 'Issuer') {
            this.subuserType = sessionStorage.getItem('typeValue');
            if (this.subuserType == 'B2C') loginId = 'guest';
            else {
                loginId = this.loginId;
            }
        } else {
            loginId = this.loginId;
            if (this.vehicleDetailsList.length != 0)
                loginId = this.vehicleDetailsList[0].LoginId;
            //if(this.updateComponent.brokerLoginId) loginId = this.updateComponent.brokerLoginId
        }
        const ReqObj = {
            InsuranceId: this.insuranceId,
            ProductId: this.productId,
            BranchCode: this.branchCode,
            LoginId: loginId,
        };
        const urlLink = `${this.ApiUrl1}master/dropdown/policytype`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                if (data.Result) {
                    this.classList = data.Result;
                    if (
                        this.insuranceId != '100027' &&
                        this.insuranceId != '100040' &&
                        this.insuranceId != '100042'
                    ) {
                        if (this.classList.length != 0) {
                            const defaultObj = [
                                {
                                    label: '---Select---',
                                    value: '',
                                    Code: '',
                                    CodeDesc: '---Select---',
                                },
                            ];
                            for (let i = 0; i < this.classList.length; i++) {
                                this.classList[i].label =
                                    this.classList[i]['CodeDesc'];
                                this.classList[i].value =
                                    this.classList[i]['Code'];
                                if (i == this.classList.length - 1) {
                                    console.log('Dropdown List', this.fields);
                                    if (
                                        this.insuranceId == '100002' ||
                                        this.insuranceId == '100018' ||
                                        this.insuranceId == '100019' ||
                                        this.insuranceId == '100020' ||
                                        this.insuranceId == '100004'
                                    ) {
                                        const fieldList =
                                            this.fields[0].fieldGroup[0]
                                                .fieldGroup;
                                        for (const field of fieldList) {
                                            console.log('Field ', field);
                                            if (field.key == 'InsuranceClass') {
                                                field.props.options =
                                                    defaultObj.concat(
                                                        this.classList,
                                                    );
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
    }
    getMotorUsageList(vehicleValue, type) {
        this.productItem.MotorUsage = this.motorUsageValue;
        console.log('ProductItem', this.productItem);
        const ReqObj = {
            InsuranceId: this.insuranceId,
            BranchCode: this.branchCode,
        };
        const urlLink = `${this.CommonApiUrl}api/dropdown/induvidual/vehicleusage`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                console.log(data);
                if (data.Result) {
                    this.motorUsageList = data.Result;
                    if (this.motorUsageList.length != 0) {
                        const defaultObj = [
                            {
                                label: '---Select---',
                                value: '',
                                Code: null,
                                CodeDesc: '---Select---',
                            },
                        ];
                        for (let i = 0; i < this.motorUsageList.length; i++) {
                            this.motorUsageList[i].label =
                                this.motorUsageList[i]['CodeDesc'];
                            this.motorUsageList[i].value =
                                this.motorUsageList[i]['Code'];
                            if (i == this.motorUsageList.length - 1) {
                                const fieldList =
                                    this.fields[0].fieldGroup[0].fieldGroup;
                                for (const field of fieldList) {
                                    if (field.key == 'MotorUsage') {
                                        if (
                                            vehicleValue == null &&
                                            type != 'direct'
                                        ) {
                                            if (this.motorUsageValue)
                                                this.productItem.MotorUsage =
                                                    this.motorUsageValue;
                                            const entry =
                                                this.motorUsageList.some(
                                                    (ele) =>
                                                        ele.Code ==
                                                            this.productItem
                                                                .MotorUsage ||
                                                        ele.CodeDesc ==
                                                            this.productItem
                                                                .MotorUsage,
                                                );
                                            if (!entry && !this.editSection) {
                                                this.productItem.MotorUsage =
                                                    '';
                                                field.formControl.setValue('');
                                                this.motorUsageValue = '';
                                                this.motorUsageType = type;
                                            }
                                        }
                                        field.props.options = defaultObj.concat(
                                            this.motorUsageList,
                                        );
                                    }
                                }
                            }
                        }
                    }
                    this.motorUsageValue = vehicleValue;
                    if (this.insuranceId != '100028')
                        this.productItem.MotorUsage = vehicleValue;
                    if (
                        this.motordetails &&
                        this.motorUsageList.length != 0 &&
                        this.motorUsageValue == null
                    ) {
                        const value = this.motorUsageList.find(
                            (ele) =>
                                ele.CodeDesc == this.motordetails?.Motorusage ||
                                ele.Code == this.motordetails?.Motorusage,
                        );
                        if (value) {
                            this.motorUsageValue = value.Code;
                            this.productItem.MotorUsage = value.Code;
                        } else
                            this.productItem.MotorUsage =
                                this.motordetails.Motorusage;
                    }
                }
            });
    }
    getMotorTypeList(type, motorValue) {
        if (
            this.insuranceId == '100027' ||
            this.insuranceId == '100040' ||
            this.insuranceId == '100042' ||
            this.insuranceId == '100002' ||
            this.insuranceId == '100028' ||
            this.insuranceId == '100018' ||
            this.insuranceId == '100019' ||
            this.typeValue == '100020'
        )
            this.typeValue = this.productItem.InsuranceType;
        const ReqObj = {
            InsuranceId: this.insuranceId,
            BranchCode: this.branchCode,
        };
        const urlLink = `${this.CommonApiUrl}master/dropdown/induvidual/bodytype`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                if (data.Result) {
                    if (type == 'change') {
                        this.cityValue = null;
                        if (
                            this.insuranceId == '100027' ||
                            this.insuranceId == '100040' ||
                            this.insuranceId == '100042' ||
                            this.insuranceId == '100028'
                        ) {
                            this.productItem.InsuranceClass =
                                this.productItem?.InsuranceType;
                            this.classValue = this.typeValue;
                        }
                    }
                    this.motorTypeList = data.Result;
                    if (type == 'direct' && !this.editSection) {
                        this.bodyTypeValue = motorValue;
                        this.productItem.BodyType = motorValue;
                    } else if (
                        this.insuranceId != '100027' &&
                        this.insuranceId != '100040' &&
                        this.insuranceId != '100042'
                    )
                        this.bodyTypeValue = motorValue;
                    if (
                        this.motordetails &&
                        this.motorTypeList.length != 0 &&
                        this.bodyTypeValue == null
                    ) {
                        const value = this.motorTypeList.find(
                            (ele) =>
                                ele.Code == this.motordetails?.VehicleType ||
                                ele.CodeDesc == this.motordetails?.VehicleType,
                        );
                        if (value) {
                            this.bodyTypeValue = value.Code;
                        }
                    }
                    if (this.motorTypeList.length != 0) {
                        const defaultObj = [
                            {
                                label: '---Select---',
                                value: '',
                                Code: '',
                                CodeDesc: '---Select---',
                            },
                        ];
                        for (let i = 0; i < this.motorTypeList.length; i++) {
                            this.motorTypeList[i].label =
                                this.motorTypeList[i]['CodeDesc'];
                            this.motorTypeList[i].value =
                                this.motorTypeList[i]['Code'];
                            if (i == this.motorTypeList.length - 1) {
                                if (
                                    this.insuranceId == '100027' ||
                                    this.insuranceId == '100040' ||
                                    this.insuranceId == '100042' ||
                                    this.insuranceId == '100002' ||
                                    this.insuranceId == '100028' ||
                                    this.insuranceId == '100018' ||
                                    this.insuranceId == '100019' ||
                                    this.insuranceId == '100020'
                                ) {
                                    const fieldList =
                                        this.fields[0].fieldGroup[0].fieldGroup;
                                    for (const field of fieldList) {
                                        if (
                                            field.key == 'VehicleSI' ||
                                            field.key == 'AccessoriesSI' ||
                                            field.key == 'WindShieldSI' ||
                                            field.key == 'ExtendedTPPDSI'
                                        ) {
                                            if (
                                                this.insuranceId == '100027' ||
                                                this.insuranceId == '100040' ||
                                                this.insuranceId == '100042'
                                            ) {
                                                if (
                                                    this.vehicleDetailsList
                                                        .length == 1
                                                ) {
                                                    field.hideExpression =
                                                        false;
                                                    field.hide = false;
                                                } else if (
                                                    this.productItem
                                                        .InsuranceType ==
                                                        '102' ||
                                                    this.productItem
                                                        .InsuranceType == '95'
                                                ) {
                                                    field.hideExpression = true;
                                                    field.hide = true;
                                                } else {
                                                    field.hideExpression =
                                                        false;
                                                    field.hide = false;
                                                }
                                            } else if (
                                                this.insuranceId == '100028'
                                            ) {
                                                if (
                                                    this.vehicleDetailsList
                                                        .length == 1
                                                ) {
                                                    field.hideExpression =
                                                        false;
                                                    field.hide = false;
                                                } else if (
                                                    this.productItem
                                                        .InsuranceType == '104'
                                                ) {
                                                    field.hideExpression =
                                                        false;
                                                    field.hide = false;
                                                } else {
                                                    field.hideExpression = true;
                                                    field.hide = true;
                                                }
                                            }
                                        }
                                        if (field.key == 'BodyType') {
                                            if (
                                                this.motorTypeList.length !=
                                                    0 &&
                                                this.productItem.MotorUsage !=
                                                    null &&
                                                this.productItem.MotorUsage !=
                                                    '' &&
                                                this.productItem.MotorUsage !=
                                                    undefined
                                            ) {
                                                const entry =
                                                    this.motorUsageList.find(
                                                        (ele) =>
                                                            ele.CodeDesc ==
                                                                this.productItem
                                                                    .MotorUsage ||
                                                            ele.Code ==
                                                                this.productItem
                                                                    .MotorUsage,
                                                    );
                                                if (entry) {
                                                    const bodyTypeStatus =
                                                        entry?.BodyType;
                                                    this.mainBodyTypeList =
                                                        this.motorTypeList.filter(
                                                            (ele) =>
                                                                ele.BodyType ==
                                                                bodyTypeStatus,
                                                        );
                                                    if (
                                                        type == 'change' &&
                                                        !this.editSection
                                                    ) {
                                                        this.bodyTypeValue =
                                                            null;
                                                    }
                                                    field.props.options =
                                                        defaultObj.concat(
                                                            this
                                                                .mainBodyTypeList,
                                                        );
                                                }
                                            }
                                        }
                                    }
                                }
                                //this.fields[0].fieldGroup[0].fieldGroup[1].props.options = defaultObj.concat(this.motorTypeList);
                            }
                        }
                    }
                }
            });
    }
    Customervalidate() {
        const urlLink = `${this.CommonApiUrl}api/validateCustomerName?name=${this.productItem.ClientName}&companyid=${this.insuranceId}&saveOrsubmit=Submit`;
        this.sharedService.onGetMethodSync(urlLink).subscribe((data: any) => {
            console.log(data);
            if (data.Message == 'Success') {
                this.final5 = false;
                this.final = false;
            } else {
                this.final5 = true;
                this.final = true;
            }
        });
    }
    setValues() {
        const ReqObj = {
            CustomerReferenceNo: this.customerReferenceNo,
        };
        const urlLink = `${this.CommonApiUrl}api/getcustomerdetails`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                console.log(data);
                if (data.Result) {
                    const customerDetails = data.Result;
                    this.productItem.ClientName = customerDetails.ClientName;
                    this.productItem.MiddleName = customerDetails.MiddleName;
                    this.productItem.LastName = customerDetails.LastName;
                    // if(customerDetails.AppointmentDate!=null && customerDetails.AppointmentDate!=undefined){
                    // 	var dateParts = customerDetails.AppointmentDate.split("/");
                    // 	 this.productItem.AppointmentDate = dateParts[2]+'-'+dateParts[1]+'-'+dateParts[0];
                    // }
                    this.productItem.Address1 = customerDetails.Address1;
                    this.productItem.Address2 = customerDetails.Address2;
                    this.productItem.BusinessType =
                        customerDetails.BusinessType;
                    this.productItem.CityName = customerDetails.CityCode;
                    if (this.productItem.CityName == null)
                        this.productItem.CityName = '';
                    this.productItem.districtcode = customerDetails.CityName;
                    if (customerDetails.Clientstatus)
                        this.productItem.Clientstatus =
                            customerDetails.Clientstatus;
                    else this.productItem.Clientstatus = 'Y';
                    this.productItem.EmailId = customerDetails.Email1;
                    this.productItem.occupationdesc =
                        customerDetails?.OtherOccupation;
                    if (customerDetails.Nationality != null) {
                        this.productItem.Country = customerDetails.Nationality;
                    } else if (
                        this.countryList.length != 0 &&
                        this.countryList.length > 1
                    ) {
                        this.productItem.Country = this.countryList[1].Code;
                    }
                    if (this.productItem.Country == null)
                        this.productItem.Country = '';
                    this.productItem.PinCode = customerDetails.PinCode;
                    this.productItem.Gender = customerDetails.Gender;
                    //this.productItem.IdNumber = customerDetails.IdNumber;
                    if (
                        customerDetails.PolicyHolderType != null &&
                        customerDetails.PolicyHolderType != ''
                    ) {
                        this.productItem.IdType =
                            customerDetails.PolicyHolderType;
                    }
                    // this.getPolicyIdTypeList(null);
                    this.productItem.isTaxExempted =
                        customerDetails.IsTaxExempted;
                    if (this.productItem.isTaxExempted == 'Y')
                        this.productItem.TaxExemptedId =
                            customerDetails.TaxExemptedId;
                    this.productItem.MobileNo = customerDetails.MobileNo1;
                    this.productItem.MobileCode = customerDetails.MobileCode1;
                    this.productItem.MobileCodeDesc =
                        customerDetails.MobileCodeDesc1;

                    this.productItem.PolicyHolderTypeid =
                        customerDetails.PolicyHolderTypeid;
                    if (this.productItem.PolicyHolderTypeid == '1') {
                        this.shows = true;
                        if (customerDetails.IdNumber != 'NA') {
                            this.Idnumber = customerDetails.IdNumber.substr(
                                0,
                                5,
                            );
                            this.Idnumber1 = customerDetails.IdNumber.substr(
                                5,
                                3,
                            );
                            this.Idnumber2 = customerDetails.IdNumber.substr(
                                8,
                                1,
                            );
                        }
                    } else {
                        this.shows = false;
                        if (customerDetails.IdNumber != 'NA')
                            this.productItem.IdNumber =
                                customerDetails.IdNumber;
                    }
                    this.productItem.PreferredNotification =
                        customerDetails.PreferredNotification;
                    if (this.productItem.PreferredNotification == null)
                        this.productItem.PreferredNotification = 'Sms';
                    this.productItem.state = customerDetails.StateCode;
                    if (this.productItem.state == null) {
                        this.productItem.state = '';
                    }
                    // this.getStateList(null);
                    // this.getRegionList(null);
                    if (
                        customerDetails.DobOrRegDate != null &&
                        customerDetails.DobOrRegDate != undefined
                    ) {
                        if (
                            new Date(this.maxDobDate).setHours(0, 0, 0, 0) >=
                            new Date(customerDetails.DobOrRegDate).setHours(
                                0,
                                0,
                                0,
                                0,
                            )
                        ) {
                            const dateParts =
                                customerDetails.DobOrRegDate.split('/');
                            this.productItem.dobOrRegDate =
                                dateParts[2] +
                                '-' +
                                dateParts[1] +
                                '-' +
                                dateParts[0];
                        } else {
                            const dateParts =
                                customerDetails.DobOrRegDate.split('/');
                            this.productItem.dobOrRegDate =
                                dateParts[2] +
                                '-' +
                                dateParts[1] +
                                '-' +
                                dateParts[0];
                        }
                    }
                    this.productItem.Street = customerDetails.Street;
                    this.productItem.TelephoneNo = customerDetails.TelephoneNo1;
                    if (
                        this.shortQuoteYN &&
                        customerDetails.Occupation == '99999'
                    )
                        this.productItem.Occupation = '';
                    else
                        this.productItem.Occupation =
                            customerDetails.Occupation;
                    this.productItem.Title = customerDetails.Title;
                    this.productItem.vrngst = customerDetails.VrTinNo;
                    if (
                        this.loginType == 'B2CFlow' ||
                        this.loginType == 'B2CFlow2'
                    ) {
                        if (
                            this.productItem.Address1 == null ||
                            this.productItem.Address1 == ''
                        ) {
                            this.productItem.Occupation = '';
                            if (this.productItem.Title == '1')
                                this.productItem.Gender = 'M';
                            else this.productItem.Gender = 'F';
                        }
                    }
                    console.log('Final Edit Data', this.productItem);
                }
            });
    }
    onCreateVehicle() {
        this.vehicleId = this.vehicleDetailsList.length + 1;
        let color = '',
            fuel = '';
        const insuranceType = ['73'];

        if (
            this.productItem.Color != '' &&
            this.productItem.Color != undefined &&
            this.productItem.Color != null
        ) {
            const entry = this.colorList.find(
                (ele) => ele.Code == this.productItem.Color,
            );
            color = entry.label;
        }
        if (
            this.productItem.FuelType != '' &&
            this.productItem.FuelType != undefined &&
            this.productItem.FuelType != null
        ) {
            const entry = this.fuelTypeList.find(
                (ele) => ele.Code == this.productItem.FuelType,
            );
            fuel = entry.label;
        }

        let createdBy = '';
        let startDate = '',
            endDate = '';
        startDate = this.commonDetails[0].PolicyStartDate;
        endDate = this.commonDetails[0].PolicyEndDate;
        const quoteStatus = sessionStorage.getItem('QuoteStatus');
        this.subuserType = sessionStorage.getItem('typeValue');

        let appId = '1',
            loginId = '',
            brokerbranchCode = '';
        if (
            quoteStatus == 'AdminRP' ||
            quoteStatus == 'AdminRA' ||
            quoteStatus == 'AdminRR'
        ) {
            brokerbranchCode = this.commonDetails[0].BrokerBranchCode;
            createdBy = this.commonDetails[0].CreatedBy;
        } else {
            createdBy = this.loginId;
            if (this.userType != 'Issuer') {
                this.brokerCode = this.agencyCode;
                appId = '1';
                loginId = this.loginId;
                brokerbranchCode = this.brokerbranchCode;
            } else {
                appId = this.loginId;
                loginId = this.commonDetails[0].LoginId;
                //loginId = this.updateComponent.brokerLoginId
                brokerbranchCode = this.commonDetails[0].BrokerBranchCode;
            }
        }
        if (this.userType != 'Broker' && this.userType != 'User') {
            console.log(this.userType);
        } else {
            this.sourceType = this.subuserType;
            this.customerCode = this.userDetails?.Result.CustomerCode;
        }
        let refNo = '99999',
            regYear = '99999',
            IdType = '99999',
            IdNo = '99999';
        if (this.customerDetails) {
            refNo = this.customerDetails?.CustomerReferenceNo;
            IdNo = this.customerDetails?.IdNumber;
            regYear = this.customerDetails?.DobOrRegDate;
            IdType = this.customerDetails?.PolicyHolderType;
        }
        if (this.customerName == undefined) this.customerName = null;
        if (this.vehicleId == null || this.vehicleId == undefined)
            this.vehicleId = '1';
        this.vehicleDetails = {
            BrokerBranchCode: brokerbranchCode,
            AcExecutiveId: null,
            CommissionType: this.commissionType,
            CustomerCode: this.customerCode,
            CustomerName: this.customerName,
            BdmCode: this.customerCode,
            BrokerCode: this.brokerCode,
            LoginId: loginId,
            SubUserType: this.subuserType,
            ApplicationId: appId,
            CustomerReferenceNo: refNo,
            RequestReferenceNo: this.requestReferenceNo,
            Idnumber: IdNo,
            VehicleId: this.vehicleId,
            AxelDistance: '01',
            Chassisnumber: '99999',
            Color: null,
            ColorDesc: color,
            OwnerCategory: null,
            CubicCapacity: '100',
            CreatedBy: createdBy,
            DrivenByDesc: 'Driver',
            EngineNumber: null,
            EngineCapacity: null,
            FuelType: null,
            FuelTypeDesc: fuel,
            Grossweight: '100',
            HoldInsurancePolicy: 'N',
            Insurancetype: insuranceType,
            InsuranceId: this.insuranceId,
            InsuranceClass: '3',
            ModelNumber: null,
            NcdYn: 'N',
            NoOfClaims: null,
            NumberOfAxels: '1',
            BranchCode: this.branchCode,
            AgencyCode: this.agencyCode,
            ProductId: this.productId,
            SectionId: '73',
            PolicyType: IdType,
            RadioOrCasseteplayer: null,
            RegistrationYear: regYear,
            SourceTypeId: this.sourceType,
            SpotFogLamp: null,
            Stickerno: null,
            SumInsured: null,
            Tareweight: '100',
            TppdFreeLimit: null,
            TppdIncreaeLimit: null,
            TrailerDetails: null,
            Windscreencoverrequired: null,
            accident: null,
            periodOfInsurance: '30',
            PolicyStartDate: startDate,
            PolicyEndDate: endDate,
            Currency: this.currencyCode,
            ExchangeRate: this.commonDetails[0].ExchangeRate,
            HavePromoCode: this.commonDetails[0].HavePromoCode,
            PromoCode: this.commonDetails[0].PromoCode,
            CollateralYn: 'N',
            BorrowerType: null,
            CollateralName: null,
            FirstLossPayee: null,
            FleetOwnerYn: 'N',
            NoOfVehicles: '1',
            NoOfComprehensives: null,
            ClaimRatio: null,
            SavedFrom: 'Owner',
            UserType: this.userType,
            SearchFromApi: false,
            TiraCoverNoteNo: null,
            EndorsementYn: 'N',
            EndorsementDate: this.endorsementDate,
            EndorsementEffectiveDate: this.endorsementEffectiveDate,
            EndorsementRemarks: this.endorsementRemarks,
            EndorsementType: this.endorsementType,
            EndorsementTypeDesc: this.endorsementTypeDesc,
            EndtCategoryDesc: this.endtCategoryDesc,
            EndtCount: this.endtCount,
            EndtPrevPolicyNo: this.endtPrevPolicyNo,
            EndtPrevQuoteNo: this.endtPrevQuoteNo,
            EndtStatus: this.endtStatus,
            IsFinanceEndt: this.isFinanceEndt,
            OrginalPolicyNo: this.orginalPolicyNo,
            Ncb: '0',
            DefenceValue: null,
            PurchaseDate: null,
            RegistrationDate: null,
            Scenarios: {
                ExchangeRateScenario: {
                    OldAcccessoriesSumInsured: null,
                    OldCurrency: null,
                    OldExchangeRate: null,
                    OldSumInsured: null,
                    OldTppdIncreaeLimit: null,
                    OldWindScreenSumInsured: null,
                },
            },
            AcccessoriesSumInsured: null,
            AccessoriesInformation: null,
            AdditionalCircumstances: null,
            CityLimit: null,
            CoverNoteNo: null,
            Gpstrackinginstalled: 'N',
            InsurerSettlement: '',
            InterestedCompanyDetails: '',
            MotorCategory: null,
            RoofRack: null,
            WindScreenSumInsured: null,
            SaveOrSubmit: 'Save',
        };
        this.vehicleDetails['FleetOwnerYn'] = 'N';
        this.vehicleDetails['Active'] = false;
        this.vehicleDetailsList.push(this.vehicleDetails);
        this.motorDetails = null;
        this.productItem = new ProductData();
        this.currentIndex = this.vehicleDetailsList.length;
        this.totalIndex = this.vehicleDetailsList.length;
    }

    onDeleteVehicle() {
        Swal.fire({
            title: '<strong> &nbsp;Delete Vehicle!</strong>',
            iconHtml: '<i class="fa-solid fa-trash fa-fade"></i>',
            icon: 'info',
            html: `<ul class="list-group errorlist">
            Are You Sure Want to Delete this Vehicle Details?
          </ul>`,
            showCloseButton: true,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Delete!',
        }).then((result) => {
            if (result.isConfirmed) {
                const entry = this.vehicleDetailsList[this.currentIndex - 1];
                if (entry?.Active != undefined) {
                    if (entry.Active == false) {
                        this.vehicleDetailsList.splice(
                            this.currentGroupIndex - 1,
                            1,
                        );
                        this.currentIndex = 1;
                        this.totalIndex = this.vehicleDetailsList.length;
                        this.motorDetails = null;
                        this.productItem = new ProductData();
                        this.vehicleId = this.vehicleDetailsList[0].Vehicleid;
                        // this.setCommonFormValues();
                    } else {
                        this.onDelete(entry);
                    }
                } else {
                    this.onDelete(entry);
                }
            }
        });
    }
    onDelete(rowData) {
        console.log('Entry', rowData);
        const ReqObj = {
            RequestReferenceNo: rowData.RequestReferenceNo,
            Vehicleid: rowData.Vehicleid,
            EndtType: null,
        };
        const urlLink = `${this.motorApiUrl}api/deletemotordetails`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                if (data.Result) {
                    this.vehicleId = null;
                    this.motorDetails = null;
                    this.getMotorDetails('direct');
                }
            });
    }
    getMotorDetails(type) {
        const ReqObj = {
            RequestReferenceNo: this.requestReferenceNo,
        };
        const urlLink = `${this.motorApiUrl}api/getallmotordetails`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                if (data.Result) {
                    this.vehicleDetailsList = data.Result;
                    if (data.Result.length != 0) {
                        for (const veh of data.Result) {
                            veh['Active'] = true;
                        }
                        const vehicleDetails = data.Result;
                        this.commonDetails = data.Result;
                        this.currencyCode = vehicleDetails[0].Currency;
                        if (type != 'proceedNext') {
                            if (
                                this.vehicleId == null ||
                                this.vehicleId == undefined
                            ) {
                                this.policyStartDate =
                                    vehicleDetails[0].PolicyStartDate;
                                this.sourceType =
                                    vehicleDetails[0]?.SourceTypeId;
                                this.vehicleId = vehicleDetails[0].Vehicleid;
                            }
                            this.totalIndex = this.vehicleDetailsList.length;
                            const index = this.vehicleDetailsList.findIndex(
                                (ele) => ele.Vehicleid == this.vehicleId,
                            );
                            if (index != null && index != undefined)
                                this.currentIndex = index + 1;
                            sessionStorage.setItem(
                                'vehicleDetailsList',
                                JSON.stringify(vehicleDetails),
                            );
                            this.commonDetails = data.Result;
                        } else {
                            this.onCreateVehicle();
                        }
                    }
                }
            });
    }

    saveCustomerDetails(data) {
        const entry = this.checkMandatories();
        if (entry) {
            let street = null,
                dobOrRegDate = '',
                vrngst = '0',
                taxExemptedId = null,
                cityName = null,
                stateName = null,
                businessType = '1',
                add1 = null,
                StateCode = null,
                IsTaxExempted = 'N',
                Gender = null,
                cityCode = null,
                countryCode = null,
                pinCode = null;
            const refNo = sessionStorage.getItem('customerReferenceNo');
            if (refNo) this.customerReferenceNo = refNo;
            else this.customerReferenceNo = null;
            if (this.customerReferenceNo == null) {
                businessType = '1';
            } else {
                if (this.customerDetails) {
                    if (this.customerDetails.BusinessType == null) {
                        businessType = '1';
                        vrngst = '0';
                    } else {
                        businessType = this.customerDetails.BusinessType;
                        vrngst = this.customerDetails.VrTinNo;
                    }
                    add1 = this.customerDetails.Address1;
                    stateName = this.customerDetails.StateName;
                    StateCode = this.customerDetails.StateCode;
                    IsTaxExempted = this.customerDetails?.IsTaxExempted;
                    Gender = this.customerDetails?.Gender;
                    cityName = this.customerDetails.CityName;
                    cityCode = this.customerDetails.CityCode;
                    dobOrRegDate = this.customerDetails.DobOrRegDate;
                    countryCode = this.customerDetails.Nationality;
                    taxExemptedId = this.customerDetails.TaxExemptedId;
                    pinCode = this.customerDetails.PinCode;
                    street = this.customerDetails.Street;
                }
            }
            if (
                data?.PreferredNotification == null ||
                data.PreferredNotification == '' ||
                data.PreferredNotification == undefined
            ) {
                if (
                    data?.EmailId != null &&
                    data.EmailId != '' &&
                    data.EmailId != undefined
                )
                    data['PreferredNotification'] = 'Mail';
                else data['PreferredNotification'] = 'Sms';
            }
            let createdBy = null;
            if (
                this.productItem.MobileCode != null &&
                this.productItem.MobileCode != ''
            ) {
                createdBy =
                    this.productItem.MobileCode + this.productItem.MobileNo;
            } else createdBy = this.loginId;
            const ReqObj = {
                BrokerBranchCode: this.brokerbranchCode,
                CustomerReferenceNo: this.customerReferenceNo,
                InsuranceId: this.insuranceId,
                BranchCode: this.branchCode,
                ProductId: '5',
                AppointmentDate: null,
                Address1: add1,
                Address2: null,
                BusinessType: businessType,
                CityCode: cityCode,
                CityName: cityName,
                ClientName: this.productItem?.ClientName,
                Clientstatus: 'Y',
                CreatedBy: createdBy,
                DobOrRegDate: dobOrRegDate,
                Email1: data?.EmailId,
                Email2: null,
                Email3: null,
                Fax: null,
                Gender: Gender,
                IdNumber: this.productItem?.IdNumber,
                IdType: this.productItem?.IdType,
                IsTaxExempted: IsTaxExempted,
                Language: '1',
                MobileNo1: this.productItem.MobileNo,
                MobileNo2: null,
                MobileNo3: null,
                Nationality: countryCode,
                Occupation: this.productItem?.Occupation,
                Placeofbirth: 'Chennai',
                PolicyHolderType: this.productItem.IdType,
                PolicyHolderTypeid: data?.PolicyHolderTypeid,
                PreferredNotification: data?.PreferredNotification,
                RegionCode: '01',
                MobileCode1: data?.MobileCode,
                WhatsappCode: data?.MobileCode,
                MobileCodeDesc1: data?.MobileCodeDesc,
                WhatsappDesc: data?.MobileCodeDesc,
                WhatsappNo: data.MobileNo,
                StateCode: StateCode,
                StateName: stateName,
                Status: 'Y',
                Street: street,
                TaxExemptedId: taxExemptedId,
                TelephoneNo1: data?.TelephoneNo,
                PinCode: pinCode,
                TelephoneNo2: null,
                TelephoneNo3: null,
                Title: this.productItem.Title,
                VrTinNo: vrngst,
                SaveOrSubmit: 'Save',
            };
            ReqObj['Type'] = 'b2c';
            const urlLink = `${this.CommonApiUrl}api/customer`;
            this.sharedService
                .onPostMethodSync(urlLink, ReqObj)
                .subscribe((data: any) => {
                    if (data.Result) {
                        sessionStorage.setItem(
                            'customerReferenceNo',
                            data.Result.SuccessId,
                        );
                        //this.customerReferenceNo = data.Result.SuccessId;
                        this.onSubmit();
                    }
                });
        }
    }
    onSubmit() {
        if (this.insuranceId == '100004') this.typeValue = this.classValue;
        let createdBy = '';
        let startDate = '',
            endDate = '';
        const quoteStatus = sessionStorage.getItem('QuoteStatus');
        this.subuserType = sessionStorage.getItem('typeValue');
        if (this.policyStartDate) {
            if (String(this.policyStartDate).split('/').length > 1)
                startDate = this.policyStartDate;
            else
                startDate = this.datePipe.transform(
                    this.policyStartDate,
                    'dd/MM/yyyy',
                );
        }
        if (this.policyEndDate) {
            if (String(this.policyEndDate).split('/').length > 1)
                endDate = this.policyEndDate;
            else
                endDate = this.datePipe.transform(
                    this.policyEndDate,
                    'dd/MM/yyyy',
                );
        }
        let appId = '1',
            loginId = '',
            brokerbranchCode = '';
        if (
            quoteStatus == 'AdminRP' ||
            quoteStatus == 'AdminRA' ||
            quoteStatus == 'AdminRR'
        ) {
            brokerbranchCode = this.vehicleDetailsList[0].BrokerBranchCode;
            createdBy = this.vehicleDetailsList[0].CreatedBy;
        } else {
            createdBy = this.loginId;

            if (this.userType != 'Issuer') {
                this.brokerCode = this.agencyCode;
                appId = '1';
                loginId = this.loginId;
                brokerbranchCode = this.brokerbranchCode;
            } else {
                appId = this.loginId;
                loginId = this.brokerLoginId;
                brokerbranchCode = this.brokerbranchCode;
            }
            if (this.userType != 'Broker' && this.userType != 'User') {
                this.sourceType = this.Code;
            } else {
                this.sourceType = this.subuserType;
                this.customerCode = this.userDetails?.Result.CustomerCode;
            }
        }
        if (this.customerName == undefined) this.customerName = null;
        let deductibles = null;
        if (
            this.productItem.Deductibles != '' &&
            this.productItem.Deductibles != undefined
        )
            deductibles = this.productItem.Deductibles;
        let insuranceType = [];
        if (
            (this.insuranceId == '100028' ||
                this.insuranceId == '100027' ||
                this.insuranceId == '100040' ||
                this.insuranceId == '100042') &&
            this.vehicleDetailsList.length == 1
        ) {
            for (const entry of this.typeList) {
                insuranceType.push(entry.Code);
            }
        } else {
            if (this.typeValue == null || this.typeValue == undefined) {
                console.log(this.typeValue);
            } else {
                if (this.insuranceId == '100004') {
                    this.productItem.InsuranceType =
                        this.productItem.InsuranceClass;
                }
                if (Array.isArray(this.productItem.InsuranceType))
                    insuranceType = this.productItem.InsuranceType;
                else insuranceType.push(this.productItem.InsuranceType);
            }
        }

        if (
            this.insuranceId == '100027' ||
            this.insuranceId == '100040' ||
            this.insuranceId == '100042' ||
            this.insuranceId == '100028'
        ) {
            if (Array.isArray(insuranceType)) {
                if (insuranceType.length != 0)
                    this.productItem.InsuranceClass = insuranceType[0];
            } else this.productItem.InsuranceClass = insuranceType;
            this.classValue = this.typeValue;
        }
        let PurchaseDate = null;
        if (
            this.productItem.PurchaseDate != null &&
            this.productItem.PurchaseDate != '' &&
            this.productItem.PurchaseDate != undefined
        ) {
            if (String(this.productItem.PurchaseDate).includes('/')) {
                PurchaseDate = this.productItem.PurchaseDate;
            } else
                PurchaseDate = this.datePipe.transform(
                    this.productItem.PurchaseDate,
                    'dd/MM/yyyy',
                );
        }
        if (
            this.productItem.GpsYN == null ||
            this.productItem.GpsYN == undefined ||
            this.productItem.GpsYN == ''
        )
            this.productItem.GpsYN = 'N';
        let VehicleTypeId = null,
            VehicleType = null;
        if (
            this.productItem.BodyType != null &&
            this.productItem.BodyType != ''
        ) {
            const usageId = this.motorTypeList.find(
                (ele) =>
                    ele.CodeDesc == this.productItem.BodyType ||
                    ele.Code == this.productItem.BodyType,
            ).Code;
            if (usageId) VehicleTypeId = usageId;
            const usageDesc = this.motorTypeList.find(
                (ele) =>
                    ele.CodeDesc == this.productItem.BodyType ||
                    ele.Code == this.productItem.BodyType,
            ).CodeDesc;
            if (usageDesc) VehicleType = usageDesc;
        }
        let motorUsage = null;

        if (
            this.productItem.MotorUsage != null &&
            this.productItem.MotorUsage != '' &&
            this.productItem.MotorUsage != undefined
        ) {
            const usageDesc = this.motorUsageList.find(
                (ele) =>
                    ele.CodeDesc == this.productItem.MotorUsage ||
                    ele.Code == this.productItem.MotorUsage,
            )?.CodeDesc;
            if (usageDesc) {
                motorUsage = usageDesc;
            } else {
                if (this.motordetails) {
                    motorUsage = this.motordetails.MotorUsageDesc;
                }
            }
        } else {
            if (this.motordetails) {
                motorUsage = this.motordetails.MotorUsageDesc;
            }
        }
        //let InsuranceClassDesc = this.classList.find(ele)
        if (
            this.productItem.Make != '' &&
            this.productItem.Make != undefined &&
            this.productItem.Make != null
        ) {
            const entry = this.makeList.find(
                (ele) => ele.Code == this.productItem.Make,
            );
            if (entry) {
                this.productItem.MakeDesc = entry.CodeDesc;
            }
        }
        const ReqObj = {
            CustomerName: this.productItem.ClientName,
            LoginId: loginId,
            SubUserType: this.subuserType,
            UserType: this.userType,
            ApplicationId: appId,
            CustomerReferenceNo: this.customerReferenceNo,
            RequestReferenceNo: this.quoteRefNo,
            VehicleId: '1',
            CreatedBy: createdBy,
            InsuranceId: this.insuranceId,
            BranchCode: this.branchCode,
            BrokerBranchCode: brokerbranchCode,
            AgencyCode: this.agencyCode,
            ProductId: this.productId,
            SavedFrom: 'SQ',
            MobileCode: this.productItem.MobileCode,
            MobileNumber: this.productItem.MobileNo,
            Chassisnumber: this.productItem.ChassisNo,
            Insurancetype: this.productItem.InsuranceType,
            InsuranceClass: this.productItem.InsuranceClass,
            Motorusage: motorUsage,
            MotorusageId: this.productItem.MotorUsage,
            Vehiclemake: this.productItem.MakeDesc,
            VehiclemakeId: this.productItem.Make,
            VehicleModel: this.productItem.ModelDesc,
            VehcilemodelId: this.productItem.Model,
            VehicleValueType: this.productItem.VehicleValue,
            DefenceValue: this.productItem.DefenceCost,
            PurchaseDate: PurchaseDate,
            Deductibles: deductibles,
            Inflation: this.productItem.Inflation,
            ManufactureYear: this.productItem.ManufactureYear,
            Gpstrackinginstalled: this.productItem.GpsYN,
            NcdYn: this.productItem.ClaimsYN,
            VehicleType: VehicleType,
            VehicleTypeId: VehicleTypeId,
            CarAlarmYn: this.productItem.CarAlarmYN,
            PolicyStartDate: startDate,
            PolicyEndDate: endDate,
            CustomerCode: this.customerCode,
            BdmCode: this.customerCode,
            SourceTypeId: this.sourceType,
            SumInsured: this.productItem.VehicleSI,
            AcccessoriesSumInsured: null,
            AccessoriesInformation: '',
            accident: null,
            AcExecutiveId: null,
            AdditionalCircumstances: '',
            AggregatedValue: null,
            AxelDistance: 2,
            BankingDelegation: '',
            BorrowerType: null,
            CommissionType: this.commissionType,
            BrokerCode: this.brokerCode,
            ExchangeRate: this.exchangeRate,
            Currency: this.currencyCode,
            HavePromoCode: 'N',
            SearchFromApi: false,
            Registrationnumber: this.productItem.RegistrationNo,
            HorsePower: null,
            SectionId: [this.productItem.InsuranceType],
            Zone: '1',
            CityLimit: null,
            ClaimType: '0',
            CollateralCompanyAddress: '',
            CollateralCompanyName: '',
            CollateralName: null,
            CollateralYn: 'N',
            Color: '4',
            CoverNoteNo: null,
            CubicCapacity: null,
            DateOfCirculation: null,
            DrivenByDesc: 'D',
            DriverDetails: null,
            EndorsementDate: null,
            EndorsementEffectiveDate: null,
            EndorsementRemarks: null,
            EndorsementType: null,
            EndorsementTypeDesc: null,
            EndorsementYn: 'N',
            EndtCategoryDesc: null,
            EndtCount: null,
            EndtPrevPolicyNo: null,
            EndtPrevQuoteNo: null,
            EndtStatus: null,
            EngineNumber: null,
            ExcessLimit: null,
            FirstLossPayee: null,
            FleetOwnerYn: 'N',
            FuelType: null,
            Grossweight: null,
            HoldInsurancePolicy: 'N',
            Idnumber: null,
            InflationSumInsured: '350000',
            InsuranceClassDesc: 'Comprehensive',
        };
        ReqObj['DriverDetails'] = null;
        if (this.insuranceId == '100019')
            ReqObj['CarAlarmYn'] = this.productItem.CarAlarmYN;
        if (this.insuranceId == '100020')
            ReqObj['VehicleClass'] = this.productItem.VehicleClass;
        const urlLink = `${this.motorApiUrl}api/savemotordetails`;
        this.sharedService
            .onPostMethodSync(urlLink, ReqObj)
            .subscribe((data: any) => {
                if (data.ErrorMessage.length === 0) {
                    if (data.Result?.length != 0) {
                        this.vehicleDetailsList = [];
                        this.vehicleDetailsList.push(ReqObj);
                        const entry = this.vehicleDetailsList[0];
                        entry['PolicyEndDate'] = endDate;
                        entry['PolicyStartDate'] = startDate;
                        this.quoteRefNo = data?.Result[0]?.RequestReferenceNo;
                        this.customerReferenceNo =
                            data?.Result[0]?.CustomerReferenceNo;
                        sessionStorage.setItem(
                            'customerReferenceNo',
                            data?.Result[0]?.CustomerReferenceNo,
                        );
                        sessionStorage.setItem(
                            'quoteReferenceNo',
                            data?.Result[0]?.RequestReferenceNo,
                        );
                        this.individualCalcIndex = 0;
                        for (const veh of data.Result) {
                            entry['MSRefNo'] = data?.Result[0].MSRefNo;
                            entry['VdRefNo'] = data?.Result[0].VdRefNo;
                            entry['CdRefNo'] = data?.Result[0].CdRefNo;
                            entry['Active'] = true;
                            entry['VehicleId'] = data.Result[0].VehicleId;
                            this.onCalculateVehDetails(veh, data.Result.length);
                        }
                    }
                }
            });
    }
    onCalculateVehDetails(vehicleDetails, totalCount) {
        let createdBy = '';
        let coverModificationYN = 'N';
        if (this.endorsementSection) {
            if (this.endorseCoverModification)
                coverModificationYN = this.endorseCoverModification;
        }
        const quoteStatus = sessionStorage.getItem('QuoteStatus');
        if (quoteStatus == 'AdminRP') {
            createdBy = this.vehicleDetailsList[0].CreatedBy;
        } else {
            createdBy = this.loginId;
        }

        let endDate: any = null;
        if (this.endorsementSection && vehicleDetails?.Status == 'D') {
            coverModificationYN = 'Y';
            endDate = this.endorseEffectiveDate;
        } else {
            if (this.policyEndDate) {
                if (String(this.policyEndDate).includes('/'))
                    endDate = this.policyEndDate;
                else
                    endDate = this.datePipe.transform(
                        this.policyEndDate,
                        'dd/MM/yyyy',
                    );
            }
        }
        let effectiveDate = null;
        if (this.endorsementSection) {
            effectiveDate = this.endorseEffectiveDate;
        } else {
            if (this.policyStartDate) {
                if (String(this.policyStartDate).includes('/'))
                    effectiveDate = this.policyStartDate;
                else
                    effectiveDate = this.datePipe.transform(
                        this.policyStartDate,
                        'dd/MM/yyyy',
                    );
            }
        }
        const ReqObj = {
            InsuranceId: this.insuranceId,
            BranchCode: this.branchCode,
            AgencyCode: this.agencyCode,
            SectionId: vehicleDetails?.SectionId,
            ProductId: this.productId,
            MSRefNo: vehicleDetails?.MSRefNo,
            VehicleId: vehicleDetails?.VehicleId,
            CdRefNo: vehicleDetails?.CdRefNo,
            DdRefNo: vehicleDetails?.DdRefNo,
            VdRefNo: vehicleDetails?.VdRefNo,
            CreatedBy: createdBy,
            productId: this.productId,
            sectionId: vehicleDetails?.SectionId,
            RequestReferenceNo: this.quoteRefNo,
            EffectiveDate: effectiveDate,
            PolicyEndDate: endDate,
            CoverModification: coverModificationYN,
        };
        const urlLink = `${this.CommonApiUrl}calculator/calc`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(() => {
            this.individualCalcIndex += 1;
            if (this.individualCalcIndex == totalCount) {
                this.router.navigate(['/quotation/plan/premium-details']);
            }
        });
    }
}
