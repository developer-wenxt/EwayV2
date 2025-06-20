import { FormlyFieldConfig } from "@ngx-formly/core";
import { ForceLengthValidators } from "../../personal-quote-details/personal-quote-details.component";

export class ElectronicEquipmentNew{
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
        this.fields={
            props: { label: 'Electronic Equipment' },
            fieldGroup: [
              {
                fieldGroupClassName: 'grid mx-0',
                fieldGroup: [
                  {
                    type: 'ngselect',
                    key: 'ContentTypeId',
                    defaultValue: '',
                    className: 'col-12 lg:col-3 md:col-3 xl:col-3 specialcss ',
                    templateOptions: {
                      label: `Electronic Item`,
                      placeholder: 'Select Content Type',
                     // disabled: true,
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
                    className: 'col-12 lg:col-3 md:col-3 xl:col-3 ',
                    type: 'commaSeparator',
                    key: 'ElectronicEquipmentSI',
                    templateOptions: {
                      label: `Sum Insured`,
                      required: true,
                      disabled: this.checkDisable('ElectronicEquipmentSI'),
                      maxLength: 15
                    },
                    
                    validators: {
                    },
                    hooks: {
                    },
                    expressions: {
                    },
                  },
                  {
                    className: 'col-12 lg:col-3 md:col-3 xl:col-3',
                    type: 'input',
                    key: 'ElectronicDescription',
                    templateOptions: {
                      label: `Description`,
                      
                      required: true,
                      disabled: this.checkDisable('ElectronicDescription'),
                      maxLength: 200
                    },
                    
                    validators: {
                    },
                    hooks: {
                    },
                    expressions: {
                    },
                  },
                  
                ]
              },
              // {
              //   fieldGroupClassName: 'grid mx-0',
              //   fieldGroup: [
                  
              //     {
              //       className: 'col-12 lg:col-5 md:col-5 xl:col-6',
              //       type: 'input',
              //       key: 'ElectronicDescription',
              //       templateOptions: {
              //         label: `Description`,
              //         required: true,
              //         disabled: this.checkDisable('ElectronicDescription'),
              //         maxLength: 15
              //       },
                    
              //       validators: {
              //       },
              //       hooks: {
              //       },
              //       expressions: {
              //       },
              //     },
                  
              //   ]
              // }
            ]
            // fieldGroup: [
            //   {
            //     fieldGroupClassName: 'newclassname',
            //     fieldGroup: [
            //       {
            //         className: 'w-full md:mt-0 mt-3 md:w-1/3',
            //         type: 'displays',
            
            //         templateOptions: {
            //           label: `Sum Insured`,
            //           required: true,
  
            //         },
            //       },
            //       {
            //         className: 'w-full md:mt-0 mt-5 mdw-5',
            //         type: 'commaSeparator',
            //         key: 'AllriskSumInsured',
  
            //         props: {
            //           //label: `Sum Insured`,
            //           //(${this.commonDetails[0].Currency})`,
            //           maxLength: 15,
            //           disabled: this.checkDisable('AllriskSumInsured'),
            //           //required: true,
            //           options: [
  
            //           ],
  
            //         },
            //         validators: {
            //         },
            //         hooks: {
            //         },
            //         expressions: {
            //         },
            //       },
            //     ]
            //   }
            // ]
          }
    }
  fields:FormlyFieldConfig;
    getFieldDetails(){return this.fields; }
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