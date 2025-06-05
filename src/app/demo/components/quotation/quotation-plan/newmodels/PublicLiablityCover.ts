import { ForceLengthValidators } from "../personal-quote-details/personal-quote-details.component";
import { FormlyFieldConfig } from "@ngx-formly/core";

export class PublicLiabilitys{
  customerDetails: any;
  commonDetails: any[]=[];
  endorsementSection: boolean=false;
  enableFieldsList: any[]=[];finalizeYN: any='N';
  subuserType: any=null;
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
          props: { label: 'PublicLiabilty' },
          fieldGroup: [
            {
              fieldGroupClassName: 'row',
              fieldGroup: [
                {
                  className: 'col-12 col-lg-4 col-md-6',
                  type: 'commaSeparator',
                  key: 'LegalLiabilityAnnualAggreagte',
                  props: {
                    label: 'Legal Liability Annual Aggreagte',
                    // disabled: this.checkDisable('IndemityPeriod'),
                    required: true,
                    options: [
                    ],
                  },
                  expressions: {
    
                  },
                },
                {
                  className: 'col-12 col-lg-4 col-md-6',
                  type: 'commaSeparator',
                  key: 'ProductTurnover',
    
                  props: {
                    maxLength:15,
                    label: `Product Turnover`,
                    // disabled: this.checkDisable('BuildingSuminsured'),
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
          ]
      }
  }
  fields:FormlyFieldConfig;
  checkDisable(fieldName) {
      if (this.endorsementSection) {
        let entry = this.enableFieldsList.some(ele => ele == fieldName);
        console.log("Entry ", fieldName, entry)
        return !entry;
      }
      else if(this.subuserType=='low') return this.finalizeYN=='Y'; 
      else return false;
    
    }
}