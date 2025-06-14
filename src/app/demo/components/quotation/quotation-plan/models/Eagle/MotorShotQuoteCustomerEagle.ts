

import { FormlyFieldConfig } from "@ngx-formly/core";
import { ForceLengthValidators } from "../../personal-quote-details/personal-quote-details.component";

export class MotorShotQuoteCustomerEagle{
    customerDetails: any;
    commonDetails: any[]=[];
    endorsementSection: boolean=false;subuserType:any=null;
    enableFieldsList: any[]=[];finalizeYN:any='N';
    constructor() {
        let finalize = sessionStorage.getItem('FinalizeYN');
        if(finalize) this.finalizeYN = finalize;
        this.subuserType = sessionStorage.getItem('typeValue');
        this.customerDetails = JSON.parse(sessionStorage.getItem('customerDetails'));
        if (sessionStorage.getItem('endorsePolicyNo')) {
            this.endorsementSection = true;
            let endorseObj = JSON.parse(sessionStorage.getItem('endorseTypeId'))
            if (endorseObj) {
              this.enableFieldsList = endorseObj.FieldsAllowed;
            }
        }
        let date = new Date();
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        this.fields={
            props: { label: 'Policy Details' },
            fieldGroup: [
              {
                fieldGroupClassName: 'grid',
                fieldGroup: [
                  {
                    className: 'col-12 md:col-12 lg:col-12 xl:col-12  pl-2 pr-2 pt-1',
                    type: 'input',
                    key: 'CustomerName',
                    props: {
                      label: `Customer Name`,
                      maxLength: 150,
                      disabled: this.checkDisable('CustomerName'),
                      required: true,
                      options: [
  
                      ],
  
                    },
                    validators: {
                    },
                    hooks: {
                    },
                    expressions: {
                    },
                  },
                  {
                    type: 'ngselect',
                    key: 'MobileCode',
                    defaultValue: '',
                    className: 'col-12 md:col-4 lg:col-4 xl:col-4  pl-2 pr-2 pt-1',
                    props: {
                      label: `Mobile Code`,
                      maxLength: 10,
                      disabled: this.checkDisable('MobileCode'),
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
                    className: 'col-12 md:col-8 lg:col-8 xl:col-8  pl-2 pr-2 pt-1',
                    type: 'number',
                    key: 'MobileNo',
                    props: {
                      label: `Mobile No`,
                      maxLength: 10,
                      disabled: this.checkDisable('MobileNo'),
                      required: true,
                      options: [
  
                      ],
  
                    },
                    validators: {
                    },
                    hooks: {
                    },
                    expressions: {
                    },
                  },
                  {
                    className: 'col-12 md:col-6 lg:col-6 xl:col-6 pl-2 pr-2 pt-1',
                    type: 'datepicker',
                    id: 'RegistrationDate',
                    key: 'RegistrationDate',
                    templateOptions: {
                      datepickerOptions:{
                       max: new Date(year - 18, month, day)
                      },
                      type: 'date',
                      label: `Date Of Birth`,
                      placeholder: 'Registration Date',
                      required: true,
                      disabled: this.checkDisable('RegistrationDate'),
                      maxLength: 50
                    },
                    
                    validators: {
                    },
                    hooks: {
                    },
                    expressions: {
                    },
                  },
                  {
                    className: 'col-12 md:col-6 lg:col-6 xl:col-6  pl-2 pr-2 pt-1',
                    type: 'ngselect',
                    id: 'Occupation',
                    key: 'Occupation',
                    templateOptions: {
                      label: `Occupation`,
                      placeholder: '-Select Occupation-',
                      required: true,
                      disabled: this.checkDisable('Occupation'),
                      maxLength: 50,
                      options:[]
                    },
                    
                    validators: {
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