import { FormlyFieldConfig } from "@ngx-formly/core";

export class CustomTransitNamibia{
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
      
        this.BidTensionEngineerfields = {
          fieldGroupClassName: 'grid',
          fieldGroup: [
           
            {
              key: 'CARPrincipal',
              type: 'input',
              className:'col-12 md:col-6 lg:col-4 xl:col-4',
              props: {
                label: 'Principal',
                placeholder: 'Enter Principal Owner',
                required: true,
              },
            },
            {
              key: 'CARDescription',
              type: 'primeTextArea',
              className:'col-12 md:col-6 lg:col-4 xl:col-4',
              props: {
                label: 'Decription of Project',
                placeholder: '',
                required: true,
              },
            },
            {
                key: 'CARPeriodOfActivity',
                type: 'number',
                className:'col-12 md:col-6 lg:col-4 xl:col-4',
                props: {
                  label: 'Project Period in Months',
                  placeholder: '',
                  required: true,
                  options:[]
                },
              },
            {
                key: 'CARStartDate',
                type: 'datepicker',
                className:'col-12 md:col-6 lg:col-4 xl:col-4',
                props: {
                  label: 'Project Date From',
                 
                  required: true,
                  options:[]
                },
              },
              // {
              //   key: 'CAREndDate',
              //   type: 'datepicker',
              //   className:'col-12 md:col-6 lg:col-4 xl:col-4',
              //   props: {
              //     label: 'Project Date To',
                
              //     required: true,
              //     options:[]
              //   },
              // },
             
          ]
        }
        this.BidTensionAdditionalfields = {
            fieldGroupClassName: 'grid',
            fieldGroup: [
                 {
                            type: 'input',
                            className: ' col-12 lg:col-3 md:col-3 xl:col-3 paddingReduced',
                            key: 'ProjectSite',
                            defaultValue: '0',
                            props: {
                              label: `Project Site`,
                              maxLength: 15,
                              disabled: this.checkDisable('ProjectSite'),
                              required:true,
                              placeholder:'Enter Site',
                              options: [
                              ],
                              lettersOnly: true,
                            },
                            
                            hooks: {
                            },
                            expressions: {
                            },
                          },
                          {
                            type: 'commaSeparator',
                            className: ' col-12 lg:col-3 md:col-3 xl:col-3 paddingReduced',
                            key: 'GrossProfitLc',
                            defaultValue: '0',
                            props: {
                              label: `Value Of Bond`,
                              maxLength: 15,
                              disabled: this.checkDisable('GrossProfitLc'),
                              required:true,
                              placeholder:'Enter Sum Insured',
                              options: [
                              ],
              
                            },
                            
                            hooks: {
                            },
                            expressions: {
                            },
                          },
                          {
                            type: 'commaSeparator',
                            className: ' col-12 lg:col-3 md:col-3 xl:col-3 paddingReduced',
                            key: 'FirstLossPercentId',
                            defaultValue: '0',
                            props: {
                              label: `Percentage Guarantee Required %`,
                              maxLength: 15,
                              disabled: this.checkDisable('FirstLossPercentId'),
                              placeholder:'Enter Sum Insured',
                              options: [
                              ],
              
                            },
                            
                            hooks: {
                            },
                            expressions: {
                            },
                          },
                          {
                            type: 'commaSeparator',
                            className: ' col-12 lg:col-3 md:col-3 xl:col-3 paddingReduced',
                            key: 'BidTensionSumInsured',
                            defaultValue: '0',
                            props: {
                              label: `Percentage Guarantee Required N$`,
                              maxLength: 15,
                              disabled: this.checkDisable('BidTensionSumInsured'),
                              placeholder:'Enter Sum Insured',
                              options: [
                              ],
              
                            },
                            
                            hooks: {
                            },
                            expressions: {
                            },
                          },
                          {
                            type: 'commaSeparator',
                            className: ' col-12 lg:col-3 md:col-3 xl:col-3 paddingReduced',
                            key: 'CollateralName',
                            defaultValue: '0',
                            props: {
                              label: `Collateral Required`,
                              maxLength: 15,
                              disabled: this.checkDisable('CollateralName'),
                              required:true,
                              placeholder:'Enter Sum Insured',
                              options: [
                              ],
              
                            },
                            
                            hooks: {
                            },
                            expressions: {
                            },
                          },
            ]
        }
        
       
    }
  BidTensionEngineerfields:FormlyFieldConfig;
  BidTensionAdditionalfields:FormlyFieldConfig;
    getFieldDetails(){return this.BidTensionEngineerfields; }
    checkDisable(fieldName) {
        if (this.endorsementSection) {
          let entry = this.enableFieldsList.some(ele => ele == fieldName);
          return !entry;
        }
        else if(this.subuserType=='low') return this.finalizeYN=='Y'; 
        else return false;
      
      }
      
}