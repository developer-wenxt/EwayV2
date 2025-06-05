import { FormlyFieldConfig } from "@ngx-formly/core";

export class MedicalInsurance{
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
      this.fields = {
          props: { label: 'Medical Insurance' },
          fieldGroup: [
            {
              fieldGroupClassName: 'grid',
              fieldGroup: [
                {
                  className: 'col-12 col-lg-12 col-md-12',
                  type: 'radioList',
                  key: 'Category',
                  templateOptions: {
                    label:'Occupation',
                    name: 'gender',
                    options: []
                  },
                  expressions: {
    
                  },
                },
                {
                    className: 'col-5 col-lg-5 col-md-5 offset-1',
                    type: 'ngselect',
                    key: 'AooSumInsured',
                    props: {
                      label: 'Limit Of Indeminity(AOO)',
                      defaultValue: null,
                      disabled: this.checkDisable('AooSumInsured'),
                      required: true,
                      options: [
                      ],
                    },
                    expressions: {
      
                    },
                  },
                  {
                    className: 'col-5 col-lg-5 col-md-5',
                    type: 'ngselect',
                    key: 'AggSumInsured',
                    props: {
                      label: 'Limit Of Indeminity(AGG)',
                      defaultValue: null,
                      disabled: this.checkDisable('AggSumInsured'),
                      required: true,
                      options: [
                      ],
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
        return !entry;
      }
      else if(this.subuserType=='low') return this.finalizeYN=='Y'; 
      else return false;
    
    }
}