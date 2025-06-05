import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from '../login.service';
import { CustomerProduct } from '@app/_models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/_services';
import * as CryptoJS from 'crypto-js';

interface UserType {
    code: string;
    description: string;
    url: string;
}

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['product.component.scss'],
})
export class ProductComponent implements OnInit {
    private readonly ApiUrl1: string = environment.ApiUrl1;
    productImageMap: { [key: string]: string } = {};
    imageMappings: {
        products: { [key: string]: string };
        userTypes: UserType[]
    };
    products: CustomerProduct[];loginId:any=null;
    branches: any[] | undefined;
    selectedBranch: any = null;
    lang: any = null;
    cities: any[] = [];
    userType: any = null;
    selectedProduct: string = '';
    user: any;
    subUserType: string;
    typeList: any[] = [];
    quoteSection: boolean = false;
    approverSection: boolean = false;
    UserTypeList: any[] = [];insuranceId:any=null;
    constructor(
        private http: HttpClient,
        private router: Router,
        private translate: TranslateService,
        private appComp: AppComponent,
        private loginService: LoginService,
        private authService: AuthService
    ) {
        this.user = (this.authService?.getLoginDetails());
        this.branches = this.user?.Result?.LoginBranchDetails;
        this.userType = this.user?.Result?.UserType;
        this.products = this.user?.Result?.BrokerCompanyProducts;
        this.subUserType = sessionStorage.getItem('typeValue');
        this.loginId = this.user.Result?.LoginId
        // const isIssuer = this.userType === 'Issuer';
        // this.selectedBranch = this.userType === 'Issuer' ? this.user?.Result?.BranchCode : this.user?.Result?.BrokerBranchCode;
        // alert(this.selectedBranch)
        // console.log("selectedBranch : ", selectedBranch);
        
        // if (selectedBranch) {
        //     const branch = this.branches.find(
        //         (ele) => isIssuer ? ele.BrokerBranchCode === selectedBranch : ele.BranchCode === selectedBranch,
        //     );
        //     if (branch) this.selectBranch(branch);
        // } else {
        //     this.selectBranch(this.branches[0]);
        // }
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
    }
    ngOnInit(): void {
        if (this.userType == 'Issuer') {
            this.getTypeList();
        } else {
            this.quoteSection = true;
            this.approverSection = false;
        }

        this.http.get<{ [key: string]: string }>('./assets/json/product-url.json')
            .subscribe({
                next: (data: any) => {
                    this.imageMappings = data;

                },
                error: (err) => {
                    console.error('Error loading product image map:', err);
                },
            });
    }
    getTypeList() {
        const urlLink = `${this.ApiUrl1}dropdown/subusertype`;
        const userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
        if (userDetails) {
            const ReqObj = {
                InsuranceId: userDetails?.Result?.InsuranceId,
                LoginId: userDetails?.Result?.LoginId,
                BranchCode: userDetails?.Result?.BranchCode,
                UserType: userDetails?.Result?.UserType,
            };
            this.loginService
                .onPostMethodBearerSync(urlLink, ReqObj)
                .subscribe((data: any) => {
                    console.log(data);
                    if (data.Result) {
                        this.typeList = data?.Result;
                        if (this.typeList.length != 0) {
                            const entry = this.typeList.some(
                                (ele) => ele.Code == 'high',
                            );
                            if (entry) {
                                this.quoteSection = false;
                                this.approverSection = true;
                            } else {
                                this.quoteSection = true;
                                this.approverSection = false;
                            }
                        }
                    }
                });
        }
    }
    onSelectUserType(rowData: UserType) {
        const userDetails = JSON.parse(
            sessionStorage.getItem('Userdetails') as any,
        );
        if (rowData.code == '1') {
            sessionStorage.setItem('typeValue', 'low');
            this.quoteSection = true;
            this.approverSection = false;
            this.selectedBranch = true;
        } else if (rowData.code == '2') {
            if (this.branches.length != 0) {
                let branchCode = null;
                if (
                    userDetails.Result.BranchCode == null ||
                    userDetails.Result.BranchCode == '' ||
                    userDetails.Result.BranchCode == undefined
                )
                    branchCode = this.branches[0].BranchCode;
                else branchCode = userDetails.Result.BranchCode;
                const branchData: any = this.branches.find(
                    (ele) => ele.BranchCode == branchCode,
                );
                userDetails.Result['BrokerBranchCode'] = branchData.BrokerBranchCode;
                userDetails.Result['BranchCode'] = branchData.BranchCode;
                userDetails.Result['BelongingBranch'] = branchData.BelongingBranch;
                userDetails.Result['CurrencyId'] = branchData?.CurrencyId;
                userDetails.Result['InsuranceId'] = branchData?.InsuranceId;
                this.insuranceId = branchData?.InsuranceId;
                sessionStorage.setItem(
                    'Userdetails',
                    JSON.stringify(userDetails),
                );
            }
            sessionStorage.setItem('typeValue', 'high');
            this.router.navigate(['/logincreation']);
        } else if (rowData.code == '3') {
            sessionStorage.setItem('typeValue', 'high');
            this.quoteSection = true;
            this.approverSection = false;
        }
        else if (rowData.code == '4') {
            if (this.branches.length != 0) {
                let branchCode = null;
                if (
                    userDetails.Result.BranchCode == null ||
                    userDetails.Result.BranchCode == '' ||
                    userDetails.Result.BranchCode == undefined
                )
                    branchCode = this.branches[0].BranchCode;
                else branchCode = userDetails.Result.BranchCode;
                const branchData: any = this.branches.find(
                    (ele) => ele.BranchCode == branchCode,
                );
                userDetails.Result['BrokerBranchCode'] = branchData.BrokerBranchCode;
                userDetails.Result['BranchCode'] = branchData.BranchCode;
                userDetails.Result['BelongingBranch'] = branchData.BelongingBranch;
                userDetails.Result['CurrencyId'] = branchData?.CurrencyId;
                userDetails.Result['InsuranceId'] = branchData?.InsuranceId;
                userDetails.Result['ProductId'] = "11";
                userDetails.Result['ProductName'] = "Marine Opencover Policy";
                userDetails.Result['UserTypeAlt'] ="admin";
                let encryptInfo = encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(userDetails), 'secret key 123').toString());
                //location.href=`http://197.254.65.234:8080/Marine/#/customer-Redirect?e=${encryptInfo}`;
                location.href=`http://193.203.162.152:8085/Marine/#/customer-Redirect?e=${encryptInfo}`;
            }
        }
    }
    selectProduct(product) {
        this.selectedProduct = product.ProductId;
        const userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
        userDetails.Result['ProductId'] = product.ProductId;
        userDetails.Result['ProductName'] = product.ProductName;
        userDetails.Result['PackageYn'] = product.PackageYn;
        userDetails.Result['UserTypeAlt'] = userDetails.Result.UserType;
        sessionStorage.setItem('Userdetails', JSON.stringify(userDetails));
        if(product.ProductId=='3' || product.ProductId=='11'){
            let branchList = userDetails.Result.LoginBranchDetails;
            let branchData = branchList.find(ele=>ele.BranchCode==userDetails.Result.BranchCode || ele.BranchCode==userDetails.Result.BrokerBranchCode)
                if(branchData){
                    userDetails.Result['BelongingBranch']=branchData?.BelongingBranch;
                    userDetails.Result['OriginationCountryId']=branchData?.OriginationCountryId;
                    userDetails.Result['DestinationCountryId']=branchData?.DestinationCountryId;
                } 
                localStorage.setItem('Userdetails', JSON.stringify(userDetails));
                window.addEventListener('message',function(event) {});
                let ReqObj = {
                    "Username": this.loginId,
                    "InsuranceId": this.insuranceId,
                    "BranchCode": userDetails?.Result?.BranchCode,
                    "ProductId": userDetails?.Result?.ProductId,
                }
           let encryptInfo = encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(userDetails), 'secret key 123').toString());
           location.href=`http://193.203.162.152:8085/Marine/#/customer-Redirect?e=${encryptInfo}`;
          }
        else this.router.navigate(['/']);
    }

    getProductUrl(productId: string) {
        return (
            this.imageMappings.products[productId] ||
            this.imageMappings.products['default']
        );
    }

    getUserTypeImage(code: string): string {
        const userType = this.imageMappings.userTypes.find(
            (type: any) => type.code === code,
        );
        return userType ? userType.url : './assets/images/default.jpg';
    }

    onGetBranch(data: any) {
        console.log("Fdatataaa : ", data);
        
        sessionStorage.setItem('Userdetails', JSON.stringify(data));
        this.branches = data?.Result?.LoginBranchDetails;
        this.userType = data?.Result?.UserType;
        this.products = data?.Result?.BrokerCompanyProducts;
        this.subUserType = sessionStorage.getItem('typeValue');
        this.selectedBranch = this.userType === 'Issuer' ? this.user?.Result?.BranchCode : this.user?.Result?.BrokerBranchCode;
        if(this.selectedBranch==undefined) window.location.reload();
    }

    // selectBranch(branch) {
    //     const isIssuer = this.userType === 'Issuer';
    //     this.selectedBranch = isIssuer ? branch.BranchCode : branch.BrokerBranchCode;
    
    //     if (this.selectedBranch) {
    //         const userDetails = JSON.parse(sessionStorage.getItem('Userdetails') as any);
    //         const branchData: any = this.branches.find((ele) =>
    //             isIssuer ? ele.BranchCode === this.selectedBranch : ele.BrokerBranchCode === this.selectedBranch
    //         );
    
    //         userDetails.Result = {
    //             ...userDetails.Result,
    //             BrokerBranchCode: isIssuer ? null : branchData?.BrokerBranchCode,
    //             BranchCode: branchData?.BranchCode,
    //             CurrencyId: branchData?.CurrencyId,
    //             InsuranceId: branchData?.InsuranceId,
    //         };
    
    //         sessionStorage.setItem('Userdetails', JSON.stringify(userDetails));
    //     }
    // }
    
    checkBranchBg(branch): string {
        const branchCode = this.userType === 'Issuer' ? branch.BranchCode : branch.BrokerBranchCode;
        return branchCode === this.selectedBranch ? '#042181' : '';
    }
}
