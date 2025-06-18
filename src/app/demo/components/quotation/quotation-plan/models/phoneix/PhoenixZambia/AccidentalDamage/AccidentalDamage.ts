import { ForceLengthValidators } from "@app/demo/components/common-quote-details/common-quote-details.component";
import { FormlyFieldConfig } from "@ngx-formly/core";

export class AccidentalDamagePhoenix{
    customerDetails: any;
    commonDetails: any[]=[];
    endorsementSection: boolean=false;subuserType:any=null;
    enableFieldsList: any[]=[];finalizeYN:any='N';
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
        this.fields = {
          props: { label: 'Accidental Damage'},
          fieldGroup: [
            {
              fieldGroupClassName: 'grid',
              fieldGroup: [
                {
                  className: 'col-12 md:col-4 lg:col-4 p-2',
                  type: 'displays',
          
                  templateOptions: {
                    label: 'Maximum Limit Per Occurrence',
                    required: true,

                  },
                },
                {
                  type: 'commaSeparator',
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  key: 'MaximumLimitperOccurrence',
                  defaultValue: '0',
                  templateOptions: {
                    label: '',
                    maxLength: 15,
                    disabled: this.checkDisable('MaximumLimitperOccurrence'),
                    required:true,
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
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  type: 'displays',
          
                  templateOptions: {
                    label: '',
                    required: false,

                  },
                },
                {
                  className: 'col-12 md:col-4 lg:col-4 p-2',
                  type: 'displays',
          
                  templateOptions: {
                    label: 'Accidental Physical Loss / Damage',
                    required: false,

                  },
                },
                {
                  type: 'commaSeparator',
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  key: 'AccidentalPhysicalLossDamage',
                  defaultValue: '0',
                  templateOptions: {
                    label: '',
                    maxLength: 15,
                    disabled: this.checkDisable('AccidentalPhysicalLossDamage'),
                    required:false,
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
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  type: 'displays',
          
                  templateOptions: {
                    label: '',
                    required: false,

                  },
                },
                {
                  className: 'col-12 md:col-4 lg:col-4 p-2',
                  type: 'displays',
          
                  templateOptions: {
                    label: 'Accidental Oil and Chemical',
                    required: false,

                  },
                },
                {
                  type: 'commaSeparator',
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  key: 'Accidentaloilandchemical',
                  defaultValue: '0',
                  templateOptions: {
                    label: '',
                    maxLength: 15,
                    disabled: this.checkDisable('Accidentaloilandchemical'),
                    required:false,
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
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  type: 'displays',
          
                  templateOptions: {
                    label: '',
                    required: false,

                  },
                },
                
                {
                  className: 'col-12 md:col-4 lg:col-4 p-2',
                  type: 'displays',
          
                  templateOptions: {
                    label: 'Additional Claim Preparation Costs',
            

                  },
                },
                {
                  type: 'ngselect',
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4 rightAlign',
                  key: 'AdditionalclaimsPreparationCosts',
                  defaultValue: '0',
                  templateOptions: {
                    label: '',
                    maxLength: 15,
                    required: false,
                    disabled: this.checkDisable('AdditionalclaimsPreparationCosts'),
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
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  type: 'displays',
          
                  templateOptions: {
                    label: '',
                    required: false,

                  },
                }
                // {
                // "type": "commaSeparator",
                // "key": 'MaximumLimitperOccurrence',
                // "id": "countryDropdown",
                //   "validators":{
                //       "validation": [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                //   },
                //  templateOptions: {
                //       "label": "Maximum Limit per Occurrence",
                //       "name": "Maximum Limit per Occurrence",
                //       "placeholder": "Enter Sum Insured",
                //       "pattern": "",
                //       "minLength": 0,
                //       "maxLength": 0,
                //       "disabled": false,
                //       "hide": false,
                //       "options": [], 
                //       "rows": 0,
                //       "cols": 0,
                //  },
                //   "className": "col-12 md:col-4 lg:col-4 p-2",
                //   "defaultValue": "",
                 
                // },
                // {
                //     "type": "commaSeparator",
                //     "key": "AccidentalPhysicalLossDamage",
                //     "name": "AccidentalPhysicalLossDamage",
                //     "id": "countryDropdown",
                //     "validators":{
                //        "validation": [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                //     },
                //     templateOptions: {
                //       "minLength": 0,
                //       "maxLength": 0,
                //        "hide": false,
                //        "pattern": "",
                //         "placeholder": "Enter Sum Insured",
                //        "disabled": false,
                //       "options": [],
                //       "rows": 0,
                //       "cols": 0,
                //       "label": "Accidental Physical Loss Damage",
                //     },
                //     "className": "col-12 md:col-4 lg:col-4 p-2",
                //     "defaultValue": "",
                   
                // },
                // {
                //     "type": "commaSeparator",
                //     "id": "countryDropdown",
                //     "key": 'Accidentaloilandchemical',
                //      "validators":{
                //        "validation": [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                //     },
                //     templateOptions: {
                //       "label": "Accidental oil and chemical",
                //       "name": "Accidental oil and chemical",
                //       "placeholder": "Enter Sum Insured",
                //       "pattern": "",
                //       "minLength": 0,
                //       "maxLength": 0,
                //       "disabled": false,
                //       "hide": false,
                //       "options": [], 
                //       "rows": 0,
                //       "cols": 0,
                //   },
                //     "className": "col-12 md:col-4 lg:col-4 p-2",
                //     "defaultValue": "",
                   
                // },
                // {
                //     "type": "ngselect",
                //     "key": "AdditionalclaimsPreparationCosts",
                //     "id": "AdditionalclaimsPreparationCosts",
                //    "validators":{
                //        "validation": [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                //     },
                //     templateOptions: {
                //         "label": "Additional claims Preparation Costs",
                //         "name": "Additional claims Preparation Costs",
                //         "placeholder": "Enter Sum Insured",
                //         "pattern": "",
                //         "minLength": 0,
                //         "maxLength": 0,
                //         "disabled": false,
                //         "hide": false,
                //         "options": [], 
                //         "rows": 0,
                //         "cols": 0,
                //     },
                //     "className": "col-12 md:col-4 lg:col-4 p-2",
                //     "defaultValue": "",
                   
                // }
              ]
            }
          ]
        }
    }
  fields:FormlyFieldConfig;
    getFieldDetails(){return this.fields; }
    checkDisable(fieldName) {
        if (this.endorsementSection) {
          let entry = this.enableFieldsList.some(ele => ele == fieldName);
          return !entry;
        }
        else if(this.subuserType=='low') return this.finalizeYN=='Y'; 
        else return false;
      
      }
}