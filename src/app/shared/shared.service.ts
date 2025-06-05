declare const $: any;

import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, throwError, timer } from 'rxjs';
import { catchError, map, retry, take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../_services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    private readonly CommonApiUrl: string = environment.CommonApiUrl;
    public errorApiMsg: string = '';
    public successApiMsg: string = '';
    public Token: any;
    redirectSection: boolean = false;
    timeLimit: Subscription;
    public value: number;
    userDetails: any;
    loginId: any;
    timer: any;
    ProductName: any;
    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private router: Router,
        private cookieService: CookieService,
    ) {}

    getToken() {
        this.authService.isloggedToken.subscribe((event: any) => {
            if (event !== undefined && event !== '' && event != null) {
                this.Token = event;
            } else {
                this.Token = sessionStorage.getItem('UserToken');
            }
        });
        return this.Token;
    }

    async onPostMethodAsync(
        UrlLink: any,
        ReqObj: any,
    ): Promise<Observable<any[]>> {
        this.cookieService.set(
            'XSRF-TOKEN',
            this.getToken(),
            1,
            '/',
            'localhost',
            false,
            'Strict',
        );
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        headers = headers.append('X-XSRF-TOKEN', this.getToken());
        return await this.http
            .post<any>(UrlLink, ReqObj, { headers: headers })
            .pipe(catchError(this.handleError));
    }
    async onGetMethodAsync(UrlLink: any): Promise<Observable<any[]>> {
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        return await this.http
            .get<any>(UrlLink, { headers: headers })
            .pipe(catchError(this.handleError));
    }

    onPostMethodSync(UrlLink: string, ReqObj: any): Observable<any[]> {
        this.cookieService.set(
            'XSRF-TOKEN',
            this.getToken(),
            1,
            '/',
            'localhost',
            false,
            'Strict',
        );
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        headers = headers.append('X-XSRF-TOKEN', this.getToken());
        return this.http
            .post<any>(UrlLink, ReqObj, { headers: headers })
            .pipe(catchError(this.handleError));
    }

    async onPostMethodUnAuthAsync(
        UrlLink: any,
        ReqObj: any,
    ): Promise<Observable<any[]>> {
        const headers = new HttpHeaders();
        return await this.http
            .post<any>(UrlLink, ReqObj, { headers: headers })
            .pipe(retry(1), catchError(this.handleError));
    }
    onGetMethodSync(UrlLink: string): Observable<any[]> {
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        return this.http
            .get<any>(UrlLink, { headers: headers })
            .pipe(catchError(this.handleError));
    }
    onPostMethodPreexceptionAsync(
        UrlLink: string,
        ReqObj: any,
    ): Observable<any[]> {
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append(
            'Authorization',
            'Basic d2hhdHNhcHBjaGF0YXBpOndoYXRzYXBwY2hhdGFwaUAxMjMj',
        );
        return this.http
            .post<any>(UrlLink, ReqObj, { headers: headers })
            .pipe(retry(1), catchError(this.handleError));
    }
    onGetMethodPreexceptionAsync(UrlLink: string): Observable<any[]> {
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append(
            'Authorization',
            'Basic d2hhdHNhcHBjaGF0YXBpOndoYXRzYXBwY2hhdGFwaUAxMjMj',
        );
        return this.http
            .get<any>(UrlLink, { headers: headers })
            .pipe(retry(1), catchError(this.handleError));
    }
    onPostFilePathDocumentMethodSync(
        UrlLink: string,
        filePath: any,
    ): Observable<any[]> {
        const formData: FormData = new FormData();
        formData.append('FilePath', filePath);
        this.cookieService.set(
            'XSRF-TOKEN',
            this.getToken(),
            1,
            '/',
            'localhost',
            false,
            'Strict',
        );
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        headers = headers.append('X-XSRF-TOKEN', this.getToken());
        return this.http
            .post<any>(UrlLink, formData, { headers: headers })
            .pipe(catchError(this.handleError));
    }
    onPostBrokerDocumentMethodSync(
        UrlLink: string,
        Req: any,
        file: any,
    ): Observable<any[]> {
        const formData: FormData = new FormData();
        formData.append('Req', JSON.stringify(Req));
        formData.append('BrokerLogo', file);
        this.cookieService.set(
            'XSRF-TOKEN',
            this.getToken(),
            1,
            '/',
            'localhost',
            false,
            'Strict',
        );
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        headers = headers.append('X-XSRF-TOKEN', this.getToken());
        return this.http
            .post<any>(UrlLink, formData, { headers: headers })
            .pipe(catchError(this.handleError));
    }
    onPostDocumentMethodSync(
        UrlLink: string,
        ReqObj: any,
        file: File,
    ): Observable<any[]> {
        const formData: FormData = new FormData();
        formData.append('File', file);
        formData.append('Req ', JSON.stringify(ReqObj));
        this.cookieService.set(
            'XSRF-TOKEN',
            this.getToken(),
            1,
            '/',
            'localhost',
            false,
            'Strict',
        );
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        headers = headers.append('X-XSRF-TOKEN', this.getToken());
        return this.http
            .post<any>(UrlLink, formData, { headers: headers })
            .pipe(catchError(this.handleError));
    }
    onPostExcelDocumentMethodSync(
        UrlLink: string,
        ReqObj: any,
        file: File,
    ): Observable<any[]> {
        this.cookieService.set(
            'XSRF-TOKEN',
            this.getToken(),
            1,
            '/',
            'localhost',
            false,
            'Strict',
        );
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('uploadReq', JSON.stringify(ReqObj));
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        headers = headers.append('X-XSRF-TOKEN', this.getToken());
        return this.http
            .post<any>(UrlLink, formData, { headers: headers })
            .pipe(catchError(this.handleError));
    }
    // TimeOut Session
    onPostCoverDocumentMethodSync(
        UrlLink: string,
        ReqObj: any,
        file: File,
    ): Observable<any[]> {
        this.cookieService.set(
            'XSRF-TOKEN',
            this.getToken(),
            1,
            '/',
            'localhost',
            false,
            'Strict',
        );
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('uploadReq', JSON.stringify(ReqObj));
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        headers = headers.append('X-XSRF-TOKEN', this.getToken());
        return this.http
            .post<any>(UrlLink, formData, { headers: headers })
            .pipe(catchError(this.handleError));
    }
    clearTimeOut() {
        console.log('Clear Time Out');
        const redirectStatus = sessionStorage.getItem('redirectStatus');
        console.log('Router url', this.router.url);
        // tslint:disable-next-line: triple-equals
        if (redirectStatus == undefined && this.router != undefined) {
            // tslint:disable-next-line: triple-equals
            console.log('Clear Time Out1');
            if (
                this.router.url != '/' &&
                this.router.url != '/Login/Home' &&
                this.router.url != '/login' &&
                this.router.url != '/Login/sessionRedirect' &&
                this.router.url != '/Login/Officer' &&
                this.router.url != '/Login/Assessor' &&
                this.router.url != '/Login/Garage'
            ) {
                // window.clearTimeout(this.timeoutHandle);
                console.log('Clear Time Out2');
                this.setTimeOutSection();
            }
        }
        return true;
    }
    setTimeOutSection() {}
    showAlert(router) {
        const redirectStatus = sessionStorage.getItem('redirectStatus');
        // tslint:disable-next-line: triple-equals
        if (redirectStatus == undefined && router != undefined) {
            // tslint:disable-next-line: triple-equals
            if (
                this.router.url != '/' &&
                this.router.url != '/Login/Home' &&
                this.router.url != '/Login/sessionRedirect' &&
                this.router.url != '/Login/Officer' &&
                this.router.url != '/Login/Assessor' &&
                this.router.url != '/Login/Garage'
            ) {
                sessionStorage.setItem('redirectStatus', 'started');

                const startValue: any = 1 * 60 + 5;

                this.timeLimit = timer(0, 1000)
                    .pipe(
                        take(startValue + 1),
                        map((value: any) => startValue - value),
                    )
                    .subscribe(
                        (value) => (this.value = value),
                        null,
                        () => (this.timeLimit = null),
                    );
                console.log(
                    'Alert Time Out',
                    router,
                    this.redirectSection,
                    this.timeLimit,
                );
                // alert('User Ti');
                if (
                    this.router.url != '/' &&
                    this.router.url != '/login' &&
                    this.loginId != 'guest'
                ) {
                    Swal.fire({
                        title: '<strong> Time Out</strong>',
                        icon: 'info',
                        html: `<ul class="list-group errorlist">
                 <li>Do You Want to Still Proceed?</li>
             </ul>`,
                        showCloseButton: false,
                        //focusConfirm: false,
                        showCancelButton: true,
                        //confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'YES',
                        cancelButtonText: 'NO',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.onProceed('Yes');
                        } else if (result.isDismissed) {
                            this.onProceed('No');
                        }
                    });
                }
            }
        }
    }

    async onProceed(type) {
        if (type == 'Yes') {
            this.userDetails = JSON.parse(
                sessionStorage.getItem('Userdetails'),
            );
            this.loginId = this.userDetails.Result.LoginId;

            const ReqObj = {
                LoginId: this.loginId,
            };
            const urlLink = `${this.CommonApiUrl}authentication/tokenregenrate`;
            (await this.onPostMethodUnAuthAsync(urlLink, ReqObj)).subscribe(
                (data: any) => {
                    if (data) {
                        const Token = data?.Result?.Token;
                        this.authService.UserToken(Token);
                        sessionStorage.setItem('UserToken', Token);
                        sessionStorage.removeItem('redirectStatus');
                    }
                },
            );
        } else if (type == 'No') {
            sessionStorage.clear();
            this.cookieService.delete(
                'XSRF-TOKEN',
                '/',
                'domain name',
                true,
                'None',
            );
            this.router.navigate(['/login']);
        }
    }

    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }

    //Toast Display Method
    /*Error Message*/
    fnToastMoveHover(msg: any) {
        $('.toastDisplay').stop();
        $('.toastDisplay').fadeIn();
        $('.toastDisplay span').html(msg);
        this.errorApiMsg = msg;
        this.fnToastMoveOut();
    }

    fnOnToastCloseClick() {
        $('.toastDisplay').stop();
        $('.toastDisplay').hide();
    }
    fnToastMoveOut() {
        $('.toastDisplay').fadeOut(10000);
    }
    /*Success Message*/
    fnOnSuccessToastCloseClick() {
        $('.toastDisplaySuccess').hide();
    }

    fnToastMoveHoverSuccess(msg: any) {
        $('.toastDisplaySuccess').stop();
        $('.toastDisplaySuccess').fadeIn();
        $('.toastDisplaySuccess span').html(msg);
        this.successApiMsg = msg;
        this.fnToastMoveOutSuccess();
    }

    fnToastMoveOutSuccess = function () {
        $('.toastDisplaySuccess').fadeOut(10000);
    };

    onPostMethodWithOutAuth(UrlLink: string, ReqObj: any): Observable<any[]> {
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Content-Type', 'application/json');
        return this.http
            .post<any>(UrlLink, ReqObj, { headers: headers })
            .pipe(catchError(this.handleError));
    }

    onPutMethodWithOutAuth(UrlLink: string, ReqObj: any): Observable<any[]> {
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        headers = headers.append('Content-Type', 'application/json');
        return this.http
            .put<any>(UrlLink, ReqObj, { headers: headers })
            .pipe(catchError(this.handleError));
    }
    onGetMethodWithOutAuth(UrlLink: string): Observable<any[]> {
        let headers = new HttpHeaders();
        headers = headers.append(
            'Cache-Control',
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        );
        headers = headers.append('Pragma', 'no-cache');
        headers = headers.append('Expires', '0');
        return this.http
            .get<any>(UrlLink, { headers: headers })
            .pipe(catchError(this.handleError));
    }
}
