

import { FormlyFieldConfig } from "@ngx-formly/core";
import { ForceLengthValidators } from "../../../common-product-details/common-product-details.component";

export class MotorVehiclePhoenixBotswana{
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
        this.fields={
            props: { label: 'Policy Details' },
            fieldGroup: [
              {
                fieldGroupClassName: 'grid',
                fieldGroup: [
                  {
                    type: 'ngselect',
                    key: 'InsuranceType',
                    id: 'InsuranceType',
                    defaultValue: '',
                    className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                    props: {
                      label: `InsuranceType`,
                      disabled: this.checkDisable('InsuranceType'),
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
                    key: 'MotorUsage',
                    id: 'MotorUsage',
                    defaultValue: '',
                    className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                    props: {
                      label: `Motor Usage`,
                      disabled: this.checkDisable('MotorUsage'),
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
                  // {
                  //   type: 'ngselect',
                  //   key: 'BodyType',
                  //   id: 'BodyType',
                  //   defaultValue: '',
                  //   className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                  //   props: {
                  //     label: `Body Type`,
                  //     disabled: this.checkDisable('BodyType'),
                  //     required: true,
                  //     options: [
      
                  //     ],
      
                  //   },
                  //   validators: {
                  //     validation: [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                  //   },
                  //   hooks: {
                  //   },
                  //   expressions: {
                  //   },
                  // },
                 
                  {
                    className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                    type: 'commaSeparator',
                    key: 'VehicleSI',
                    id: 'VehicleSI',
                    hide: true,
                    hideExpression:true,
                    props: {
                      label: `VehicleSI`,
                      maxLength: 15,
                      disabled: this.checkDisable('VehicleSI'),
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
                  // {
                  //   type: 'commaSeparator',
                  //   key: 'ExtendedTPPDSI',
                  //   id: 'ExtendedTPPDSI',
                  //   defaultValue: '',
                  //   className: 'col-12 md:col-4 lg:col-4 xl:col-4 pl-2 pr-2 pt-1',
                  //   hide: true,
                  //   hideExpression:true,
                  //   props: {
                  //     label: `Extended TPPD SumInsured`,
                  //     disabled: this.checkDisable('ExtendedTPPDSI'),
                  //     required: false,
                  //     options: [
      
                  //     ],
      
                  //   },
                  //   validators: {
                  //     validation: [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
                  //   },
                  //   hooks: {
                  //   },
                  //   expressions: {
                  //   },
                  // }
                  // {
                  //   className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                  //   type: 'commaSeparator',
                  //   key: 'AccessoriesSI',
                  //   id: 'AccessoriesSI',
                  //   hide: true,
                  //   hideExpression:true,
                  //   props: {
                  //     label: `Accessories SumInured`,
                  //     maxLength: 15,
                  //     disabled: this.checkDisable('AccessoriesSI'),
                  //     required: true,
                  //     options: [
  
                  //     ],
  
                  //   },
                  //   validators: {
                  //   },
                  //   hooks: {
                  //   },
                  //   expressions: {
                  //   },
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