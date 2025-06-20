import { ForceLengthValidators } from "../../personal-quote-details/personal-quote-details.component";
import { FormlyFieldConfig } from "@ngx-formly/core";

export class HouseHoldContents{
    customerDetails: any;
    commonDetails: any[]=[];
    endorsementSection: boolean=false;
    enableFieldsList: any[]=[];
  finalizeYN: any='N';
  subuserType: string;
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
        this.fields={
          props: { label: 'Contents Risk' },
          // fieldGroup: [
          //   {
          //     fieldGroupClassName: 'grid mt-2',
          //     fieldGroup: [
          //       {
          //         className: 'col-12 md:col-6 lg:col-6 p-2',
          //         type: 'displays',
          
          //         templateOptions: {
          //           label: `Contents Value`,
          //           required: true,

          //         },
          //       },
          //       {
          //         className: 'col-12 md:col-4 lg:col-4',
          //         type: 'commaSeparator',
          //         key: 'ContentSuminsured',
    
          //         props: {
          //           //label: `Contents Value`,
          //           maxLength: 15,
          //           disabled: this.checkDisable('ContentSuminsured'),
          //           //required: true,
          //           options: [
    
          //           ],
    
          //         },
          //         validators: {
          //           validation: [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
          //         },
          //         hooks: {
          //         },
          //         expressions: {
          //         },
          //       },
          //     ]
          //   }
          // ]
          fieldGroup: [
            {
              fieldGroupClassName: 'grid mx-0',
              fieldGroup: [
                {
                  className: 'col-12 lg:col-6 md:col-6 xl:col-6',
                  type: 'input',
                  key: 'ContentDescription',
                  props: {
                    label: `Description`,
                    maxLength: 15,
                    disabled: this.checkDisable('ContentDescription'),
                    required: true,
                    options: [],
                  },
                  validators: {
                    validation: [ForceLengthValidators.maxLength(100), ForceLengthValidators.min(1)]
                  },
                  hooks: {},
                  expressions: {},
                },
                {
                  className: 'col-12 lg:col-6 md:col-6 xl:col-6',
                  type: 'commaSeparator',
                  key: 'ContentSuminsured',
                  props: {
                    label: `Content Value`,
                    maxLength: 15,
                    disabled: this.checkDisable('ContentSuminsured'),
                    required: true,
                    options: [],
                  },
                  validators: {
                    validation: [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                  },
                  hooks: {},
                  expressions: {},
                },
                
              ]
            },
            // {
            //   fieldGroupClassName: 'grid mx-0', // New fieldGroup to separate ContentDescription
            //   fieldGroup: [
            //     {
            //       className: 'col-12 lg:col-12 md:col-12 xl:col-12 py-0 specialcss',
            //       type: 'input',
            //       key: 'ContentDescription',
            //       props: {
            //         label: `Description`,
            //         maxLength: 15,
            //         disabled: this.checkDisable('ContentDescription'),
            //         required: true,
            //         options: [],
            //       },
            //       validators: {
            //         validation: [ForceLengthValidators.maxLength(100), ForceLengthValidators.min(1)]
            //       },
            //       hooks: {},
            //       expressions: {},
            //     }
            //   ]
            // }
          ]
          
        }
    }
  fields:FormlyFieldConfig;
    getFieldDetails(){return this.fields; }
    checkDisable(fieldName) {
        if (this.endorsementSection) {
          let entry = this.enableFieldsList.some(ele => ele == fieldName);
          return !entry ;
        }
        else if(this.subuserType=='low') return this.finalizeYN=='Y'; 
        else return false;
      
      }
}