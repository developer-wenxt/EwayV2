import { FormlyJsonschema } from "@ngx-formly/core/json-schema";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { ForceLengthValidators } from "../../accesories/accesories.component";


export class ContentRisk{
    customerDetails: any;
    commonDetails: any[]=[];
    endorsementSection: boolean=false;
    enableFieldsList: any[]=[];
    constructor() {
        this.customerDetails = JSON.parse(sessionStorage.getItem('customerDetails'));
        let commonDetails = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
        if (commonDetails) this.commonDetails = commonDetails;
        if (sessionStorage.getItem('endorsePolicyNo')) {
            this.endorsementSection = true;
            let endorseObj = JSON.parse(sessionStorage.getItem('endorseTypeId'))
            if (endorseObj) {
              this.enableFieldsList = endorseObj.FieldsAllowed;
            }
        }
        this.fields = [
          {
            
            fieldGroup: [
              {
                fieldGroupClassName: 'row',
                fieldGroup: [
                  {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                      {
                        type: 'ngselect',
                        key: 'ContentLocation',
                        defaultValue: '',
                        className: 'col-12 col-md-6 col-lg-4',
                        props: {
                          label: `Location`,
                          required: true,
                          options: [
          
                          ],
          
                        },
                        validators: {
                          validation: [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                        },
                        hooks: {
                        },
                        expressions: {
                        },
                      },
                      {
                        type: 'ngselect',
                        key: 'ContentType',
                        defaultValue: '',
                        className: 'col-12 col-md-6 col-lg-4',
                        props: {
                          label: `Content Type`,
                          required: true,
                          options: [
          
                          ],
          
                        },
                        validators: {
                          validation: [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                        },
                        hooks: {
                        },
                        expressions: {
                        },
                      },
                      {
                        className: 'col-12 col-md-6 col-lg-4',
                        type: 'input',
                        key: 'ContentSerialNo',
                        templateOptions: {
                          label: 'Serial No',
                          required: false,
                        },
                        validators: {
                          validation: [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                        },
                      
                      },
                      {
                        className: 'col-sm-12 col-md-6 col-lg-7 col-xl-7',
                        type: 'input',
                        key: 'ContentDesc',
                        templateOptions: {
                          label: 'Description',
                          required: false,
                        },
                        validators: {
                          validation: [ForceLengthValidators.maxLength(1000), ForceLengthValidators.min(1)]
                        },
                      
                      },
                      {
                        className: 'col-12 col-md-6 col-lg-4',
                        type: 'commaSeparator',
                        key: 'ContentSI',
                        templateOptions: {
                          label: 'Sum Insured',
                          maxLength:15,
                          required: true,
                        },
                        validators: {
                          validation: [ForceLengthValidators.maxLength(50), ForceLengthValidators.min(1)]
                        },
                        hooks: {
                        },
                        expressions: {
                        },
                      
                      },
                     
                    ]
                  }
                ]
              }
            ]
         
          }
        ];
    }
    fields:FormlyFieldConfig[]=[];
    checkDisable(fieldName) {
        if (this.endorsementSection) {
          // let occupationEntry = this.enableFieldsList.some(ele => ele == 'OccupationType');
          // if (occupationEntry) {
          //     return false;
          // }
          // else{
            let entry = this.enableFieldsList.some(ele => ele == fieldName);
            return !entry;
          //}
          
        }
        else return false;
      
      }
}