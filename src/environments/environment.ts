// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // ApiUrl1: 'http://102.69.166.162:8086/EwayAdminApi/',
    // MotorApiUrl: 'http://102.69.166.162:8086/EwayMotorApi/',
    // CommonApiUrl: 'http://102.69.166.162:8086/EwayCommonApi/',
    // CustomCommonApiUrl: 'http://102.69.166.162:8086/EwayCommonApi/',
    // ExcelUrl: 'http://102.69.166.162:8086/EwayAdminApi/',
    // PreExceptionUrl: 'http://102.69.166.162:8086/WhatsAppApiLive/',
    // CustomApiUrl1: 'http://102.69.166.162:8086/EwayAdminApi/',
   "ApiUrl1": "http://192.168.1.181:8084/",
      "MotorApiUrl": "http://192.168.1.181:8083/",
      "CommonApiUrl": "http://192.168.1.181:8086/",
      "CustomCommonApiUrl": "http://192.168.1.181:8086/",
      "ExcelUrl": "http://192.168.1.181:8084/",
      "PreExceptionUrl":"http://193.203.162.152:8085/WhatsAppApiLive/",
      "CustomApiUrl1": "http://192.168.1.181:8084/",
      "ReInsurance":"http://192.168.1.181:8084/",
      "CRMApiUrl": "http://192.168.1.181:3000/",
    productionConfig: {},
};

if (environment.production) {
    Object.assign(environment, environment.productionConfig);
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
