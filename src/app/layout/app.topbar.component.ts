import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/layout.service';
import { Router } from '@angular/router';
import { LoginService } from '../demo/components/auth/login/login.service';
import { AuthService } from '../demo/components/auth/Auth/auth.service';
import { SharedService } from '../_services/shared.service';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {
    @Output() selectedBranch = new EventEmitter<any>();
    private readonly CommonApiUrl: string = environment.CommonApiUrl;
    private readonly CRMApiUrl: string = environment.CRMApiUrl;
    branches!: MenuItem[];
    userOptions!: any[];
    selectedOption!: '';
    productName: any = null;
    userDetails: any = null;
    loginId: any = null;
    productId: any = null;
    userType: any = null;
    productname: any = null;
    branchName: any = null;
    @Input() typeList: any[] = [];
    @Input() typeValue: any = null;
    @Output() typeValueChange = new EventEmitter();
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;
    branchValue: any = null;
    branchList: any[] = [];
    typeName: any = null;
    loginType: any = null;
    customerCode: any = null;
    customerName: any = null;
    insuranceid: any;
    b2cType: any = null;
    langList: any[] = [];
    lang: string;
    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private loginService: LoginService,
        private appComp: AppComponent,
        private authService: AuthService,
        private cookieService: CookieService,
        private SharedService: SharedService,
    ) {
        this.productName = sessionStorage.getItem('productName');
        this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
        console.log(this.userDetails);

        this.branches = this.userDetails?.Result?.LoginBranchDetails;
        this.loginId = this.userDetails?.Result?.LoginId;
        this.userType = this.userDetails?.Result?.UserType;
        this.b2cType = sessionStorage.getItem('b2cType');
        const language = sessionStorage.getItem('language');
        this.lang = language ?? 'en';
        this.appComp.setLanguage(language ?? 'en');

        if (this.userDetails?.Result?.LoginBranchDetails?.length > 0)
            this.insuranceid =
                this.userDetails?.Result?.LoginBranchDetails[0]?.InsuranceId;

        if (sessionStorage.getItem('Userdetails')) {
            this.productName = sessionStorage.getItem('productName');
            this.userDetails = JSON.parse(
                sessionStorage.getItem('Userdetails'),
            );
            this.typeValue = sessionStorage.getItem('typeValue');
            this.loginId = this.userDetails.Result.LoginId;
            this.productId = this.userDetails.Result.ProductId;
            this.userType = this.userDetails.Result.UserType;
            if (this.SharedService.ProductName) {
                this.productname = this.SharedService.ProductName;
            } else {
                if (this.lang == 'en') {
                    const entry = this.typeList.find((ele) => (ele.CodeDesc = this.typeValue));
                    if (entry == 'low') {
                        this.typeList['label'] = 'Quotation';
                    }
                    this.productname = this.userDetails.Result.ProductName;
                } else {
                    this.productname =
                        this.userDetails.Result.BrokerCompanyProducts[0].ProductNameLocal;
                }
            }
            if (this.userDetails?.Result?.LoginType)
                this.loginType = this.userDetails?.Result?.LoginType;
            if (this.userType != 'Issuer') {
                this.customerCode = this.userDetails?.Result?.CustomerCode;
                this.customerName = this.userDetails?.Result?.UserName;
            }
        } else this.router.navigate(['/auth/login']);
    }

    ngOnInit() {
        this.getBranchList();
        if (this.insuranceid == '100027') {
            this.langList = [
                {
                    Code: 'en',
                    CodeDesc: 'English',
                    CodeDescPor: 'Inglês',
                    CodeDescFr: 'Anglais',
                },
                {
                    Code: 'po',
                    CodeDesc: 'Portuguese',
                    CodeDescPor: 'Português',
                    CodeDescFr: 'Portugais',
                },
            ];
        } else {
            this.langList = [
                {
                    Code: 'en',
                    CodeDesc: 'English',
                    CodeDescPor: 'Inglês',
                    CodeDescFr: 'Anglais',
                },
                {
                    Code: 'fr',
                    CodeDesc: 'French',
                    CodeDescPor: 'Francês',
                    CodeDescFr: 'Français',
                },
            ];
        }
        if (this.lang == 'en') {
            this.userOptions = [
                {
                    label: 'Logout',
                    value: 'logout',
                    icon: 'pi pi-power-off',
                    command: () => {
                        this.setLogout();
                    },
                },
            ];
        } else if (this.lang == 'fr') {
            this.userOptions = [
                {
                    label: 'Se déconnecter',
                    value: 'logout',
                    icon: 'pi pi-power-off',
                    command: () => {
                        this.setLogout();
                    },
                },
            ];
        }
    }

    onProductRedirect() {
        if (this.typeValue == 'B2C Broker')
            this.router.navigate(['/customerProducts']);
        else this.router.navigate(['/auth/login/product']);
    }
    getLangCodeDesc(entry) {
        if (this.lang == 'en') return entry.CodeDesc;
        else if (this.lang == 'po') return entry.CodeDescPor;
        else if (this.lang == 'fr') return entry.CodeDescFr;
    }

    getBranchList() {
        const userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
        const branchList: any[] = userDetails?.Result?.LoginBranchDetails;
        this.branchValue = this.userType === 'Issuer' ? userDetails?.Result?.BranchCode : userDetails?.Result?.BrokerBranchCode;

        if (branchList.length > 0) {
            this.branchList = branchList.map(branch => ({
                ...branch,
                label: this.lang === 'en' ? branch.BranchName : branch.BrokerBranchNameLocal
            }));
            const branch = this.branchList.filter(
                (ele) => this.userType == 'Issuer' ? ele.BranchCode === this.branchValue : ele.BrokerBranchCode === this.branchValue,
            );

            
            
            if (branch.length > 0) {
                console.log("sss branch : ", branch);
                this.onSelectBranch(branch[0]);
            } else {
                this.onSelectBranch(branchList[0]);
            }
        } else {
            this.onSelectBranch(branchList[0]);
        }
    }

    // onSelectBranch(branch) {
    //     const isIssuer = this.userType === 'Issuer';
    //     const selectedBranch = isIssuer ? branch.BranchCode : branch.BrokerBranchCode;

    //     if (selectedBranch) {
    //         const userDetails = JSON.parse(sessionStorage.getItem('Userdetails') as any);
    //         const branchData: any = this.branches.find((ele) =>
    //             isIssuer ? ele.BranchCode === selectedBranch : ele.BrokerBranchCode === selectedBranch
    //         );

    //         userDetails.Result = {
    //             ...userDetails.Result,
    //             BrokerBranchCode: isIssuer ? null : branchData?.BrokerBranchCode,
    //             BranchCode: branchData?.BranchCode,
    //             CurrencyId: branchData?.CurrencyId,
    //             InsuranceId: branchData?.InsuranceId,
    //         };

    //         sessionStorage.setItem('Userdetails', JSON.stringify(userDetails));
    //         console.log(userDetails);
    //     }
    // }

    onSelectBranch(branch, type = 'direct') {
        console.log("branch : ", branch);
        
        if (type == 'change') {
            branch = this.branchList.find((ele) => ele.BranchName === this.branchName);
        }
        const isIssuer = this.userType === 'Issuer';
        this.branchValue = isIssuer ? branch?.BranchCode : branch?.BrokerBranchCode;
        this.branchName = branch?.BranchName;
        if (this.branchValue) {
            const userDetails = JSON.parse(sessionStorage.getItem('Userdetails') as any);
            const branchData: any = this.branches.find((ele:any) =>
                isIssuer ? ele.BranchCode === this.branchValue : ele.BrokerBranchCode === this.branchValue
            );
            userDetails.Result = {
                ...userDetails.Result,
                BrokerBranchCode: isIssuer ? null : branchData?.BrokerBranchCode,
                BranchCode: branchData?.BranchCode,
                CurrencyId: branchData?.CurrencyId,
                InsuranceId: branchData?.InsuranceId,
            };
            console.log(userDetails);
            this.selectedBranch.emit(userDetails)
        }
        if (type == 'change') {
            this.router.navigate(['/auth/login/product']);
        }
        sessionStorage.setItem('selectedBranchCode', this.branchValue);
    }

    finaliseTypeValue(types, changeType) {
        if (types == null)
            types = this.typeList.find(
                (ele) => (ele.CodeDesc = this.typeValue),
            );
        else if (types.CodeDesc != 'B2C Broker')
            this.typeValue = types.CodeDesc;
        this.typeName = types.DisplayName;
        this.onTypeChange(changeType);
    }

    onTypeChange(changeType) {
        let type = sessionStorage.getItem('typeValue');
        if (type != undefined) {
            sessionStorage.setItem('typeValue', this.typeValue);
            type = sessionStorage.getItem('typeValue');
            this.typeValueChange.emit('change');
        } else {
            sessionStorage.setItem('typeValue', this.typeValue);
            this.typeValueChange.emit('change');
        }
        if (changeType == 'direct') {
            this.getBranchList();
        } else {
            if (this.typeValue == 'high') {
                const url = String(window.location.href).split('#');
                if (url[1] != '/') {
                    sessionStorage.setItem('reloadOnce', 'true');
                    this.router.navigate(['/']);
                } else window.location.reload();
            } else this.router.navigate(['/auth/login/product']);
        }
    }
    onRedirect() {
        if (this.loginId != 'guest') {
            if (this.typeValue == 'SuperAdmin') {
                this.router.navigate(['/']);
            } else {
                this.router.navigate(['/']);
            }
        } else {
            sessionStorage.clear();
            this.cookieService.delete(
                'XSRF-TOKEN',
                '/',
                'domain name',
                true,
                'None',
            );
            //window.location.href='https://apps.alliance.co.tz/';
        }
    }
    setLanguage(value) {
        this.lang = value;
        sessionStorage.setItem('language', value);
        this.appComp.setLanguage(value);
        window.location.reload();
    }

    showUserDetails() {
        if (this.router.url == '/auth/login/product') return false;
        else return true;
    }

    setLogout() {
        const Req = {
            LoginId: this.loginId,
            Token: this.loginService.getToken(),
        };
        const urlLink = `${this.CommonApiUrl}authentication/logout`;
        this.SharedService.onPostMethodSync(urlLink, Req).subscribe(
            (data: any) => {
                console.log(data);
                this.cookieService.delete(
                    'XSRF-TOKEN',
                    '/',
                    'domain name',
                    true,
                    'None',
                );
                sessionStorage.clear();
                this.authService.logout();
                this.router.navigate(['/auth/login']);
            },
            (err: any) => {
                console.log(err);
                sessionStorage.clear();
                this.cookieService.delete(
                    'XSRF-TOKEN',
                    '/',
                    'domain name',
                    true,
                    'None',
                );
                this.authService.logout();
                this.router.navigate(['/login']);
            },
        );
    }
   CRM(){
        sessionStorage.removeItem('reloadDone');
        sessionStorage.removeItem('quoteReferenceNo');
        sessionStorage.removeItem('quoteNo');
        const token = sessionStorage.getItem('UserToken');
        if(token && localStorage.getItem('TokenExpired') != 'Expired'){
        const apiUrl = "http://192.168.1.248:3000/";
        let userData = JSON.parse(sessionStorage.getItem('Userdetails'));
        const brokerBranchCode = userData?.Result?.BrokerBranchCode;
        const branchCode = userData?.Result?.BranchCode;
        const url = `${apiUrl}navigationPage?token=${token}&path=${this.router.url}&productId=${this.productId}&branchCode=${branchCode}&brokerBranchCode=${brokerBranchCode}`;
        window.open(url, '_self');
        }
    }
}
