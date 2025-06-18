import { ForceLengthValidators } from "../personal-quote-details/personal-quote-details.component";
import { FormlyFieldConfig } from "@ngx-formly/core";

export class WorkmenCompensationCorporate{
    customerDetails: any;
    commonDetails: any[]=[];
    endorsementSection: boolean=false;
    enableFieldsList: any[]=[];
  subuserType: any=null;
  finalizeYN: any='N';
    constructor() {
        let finalize = sessionStorage.getItem('FinalizeYN');
        if(finalize) this.finalizeYN = finalize;
        this.subuserType = sessionStorage.getItem('typeValue');
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
            key: 'employeeList',
            type: 'repeat',
            
            templateOptions: {
              addText: 'Add Employee',
            },
            fieldArray: {
              fieldGroup: [
                {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      type: 'ngselect',
                      key: 'LiabilityOccupationId',
                      defaultValue: '',
                      className: 'col-sm-12 col-md-6 col-lg-4',
                      props: {
                        label: `Occupation`,
                        disabled: this.checkDisable('LiabilityOccupationId'),
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
                      className: 'col-sm-12 col-md-6 col-lg-4',
                      type: 'number',
                      key: 'TotalNoOfEmployees',
                      templateOptions: {
                        label: 'Employee Count',
                        disabled: this.checkDisable('TotalNoOfEmployees'),
                        required: true,
                      },
                      validators: {
                        validation: [ForceLengthValidators.maxLength(3), ForceLengthValidators.min(1)]
                      },
                    },
                    
                    {
                      type: 'commaSeparator',
                      className: 'col-sm-12 col-md-6 col-lg-4',
                      key: 'EmpLiabilitySi',
                      defaultValue: '0',
                      props: {
                        label: `SumInsured`,
                        maxLength: 15,
                        disabled: this.checkDisable('EmpLiabilitySi'),
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
                  ]
                }
              ],
            },
          },
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
        else if(this.subuserType=='low') return this.finalizeYN=='Y'; 
        else return false;
      
      }
}