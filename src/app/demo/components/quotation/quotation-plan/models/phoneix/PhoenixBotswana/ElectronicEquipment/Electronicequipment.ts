import { FormlyFieldConfig } from "@ngx-formly/core";
import { ForceLengthValidators } from "../../../../personal-quote-details/personal-quote-details.component";

export class ElectronicEquipmentBotswana{
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
          props: { label: 'Electronic Equipment' },
          fieldGroup: [
            {
              fieldGroupClassName: 'grid',
              fieldGroup: [
                {
                  className: 'col-12 md:col-12 lg:col-12 xl:col-12',
                  type: 'table',
                  fieldGroup: [
                    {
                        fieldGroup:[
                          {props:{label:`Coverage`}},
                          {props:{label:`Description`},className:"col-2"},
                          {props:{label:`Sum Insured`}},
                        ]
                    },
                    {
                      fieldGroup:[
                            {
                              fieldGroup:[
                                {
                                  className: "mt-1",
                                  type: 'display',
                
                                  templateOptions: {
                                    label: `Electronic Equipment`,
                                    required: false,
                
                                  },
                                },
                                {
                                  type: 'input',
                                  className:'formlymargin',
                                  key: 'ElectronicEquipmentDesc',
                
                                  templateOptions: {
                                    required: false,
                                    disabled: this.checkDisable('ElectronicEquipmentDesc'),
                                    options: [
                
                                    ],
                
                                  },
                                  validators: {
                                  },
                                  hooks: {
                                  },
                                  expressions: {
                                    //disabled: (this.checkDisable('StockLossPercent') || this.model.StockInTradeSi =='' || this.model.StockInTradeSi =='0'),
                                  },
                                },
                                {
                                  className: "mt-1",
                                  type: 'commaSeparator',
                                  key: 'ElectronicEquipment',
                
                                  templateOptions: {
                                    disabled: this.checkDisable('ElectronicEquipment'),
                                    maxLength:15,
                                    required: false,
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
                               
                              ]
                            },
                            {
                              fieldGroup:[
                             
                                {
                                  className: "mt-1",
                                  type: 'display',
                
                                  templateOptions: {
                                    label: `Various Portable Equipment`,
                                    required: false,
                
                                  },
                                },
                                {
                                  type: 'input',
                                  key: 'VariousPortableEquipmentDesc',
                                  className:'formlymargin',
                                  templateOptions: {
                                    disabled: this.checkDisable('VariousPortableEquipmentDesc'),
                                    required: false,
                                    options: [
                
                                    ],
                
                                  },
                                  validators: {
                                  },
                                  hooks: {
                                  },
                                  expressions: {
                                    //disabled: (this.checkDisable('GoodsLossPercent') || this.model.GoodsSi =='' || this.model.GoodsSi =='0'),
                                  },
                                },
                                {
                                  className: "mt-3",
                                  type: 'commaSeparator',
                                  key: 'VariousPortableEquipment',
                
                                  templateOptions: {
                                    maxLength:15,
                                    disabled: this.checkDisable('VariousPortableEquipment'),
                                    required: false,
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
                          
                              ]
                            },
                            {
                              fieldGroup:[
                                {
                                  className: "mt-1",
                                  type: 'display',
                
                                  templateOptions: {
                                    label: `Increased Cost of Working`,
                                    required: false,
                
                                  },
                                },
                                {
                                  type: 'input',
                                  className:'formlymargin',
                                  key: 'IncreasedCostofWorkingDesc',
                
                                  templateOptions: {
                                    required: false,
                                    disabled: this.checkDisable('IncreasedCostofWorkingDesc'),
                                    options: [
                
                                    ],
                
                                  },
                                  validators: {
                                  },
                                  hooks: {
                                  },
                                  expressions: {
                                    //disabled: (this.checkDisable('StockLossPercent') || this.model.StockInTradeSi =='' || this.model.StockInTradeSi =='0'),
                                  },
                                },
                                {
                                  className: "mt-1",
                                  type: 'commaSeparator',
                                  key: 'IncreasedCostofWorking',
                
                                  templateOptions: {
                                    disabled: this.checkDisable('IncreasedCostofWorking'),
                                    maxLength:15,
                                    required: false,
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
                               
                              ]
                            },
                            {
                              fieldGroup:[
                             
                                {
                                  className: "mt-1",
                                  type: 'display',
                
                                  templateOptions: {
                                    label: `Incompatibility Cover`,
                                    required: false,
                
                                  },
                                },
                                {
                                  type: 'input',
                                  key: 'IncompatibilityCoverDesc',
                                  className:'formlymargin',
                                  templateOptions: {
                                    disabled: this.checkDisable('IncompatibilityCoverDesc'),
                                    required: false,
                                    options: [
                
                                    ],
                
                                  },
                                  validators: {
                                  },
                                  hooks: {
                                  },
                                  expressions: {
                                    //disabled: (this.checkDisable('GoodsLossPercent') || this.model.GoodsSi =='' || this.model.GoodsSi =='0'),
                                  },
                                },
                                {
                                  className: "mt-3",
                                  type: 'commaSeparator',
                                  key: 'IncompatibilityCover',
                
                                  templateOptions: {
                                    maxLength:15,
                                    disabled: this.checkDisable('Incompatibility Cover'),
                                    required: false,
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
                               
                              ]
                            },
                            {
                              fieldGroup:[
                                {
                                  className: "mt-1",
                                  type: 'display',
                
                                  templateOptions: {
                                    label: `Additional claims Preparation Cost`,
                                    required: false,
                
                                  },
                                },
                                {
                                  type: 'input',
                                  className:'formlymargin',
                                  key: 'EEclaimsPreparationCostsDesc',
                
                                  templateOptions: {
                                    required: false,
                                    disabled: this.checkDisable('EEclaimsPreparationCostsDesc'),
                                    options: [
                
                                    ],
                
                                  },
                                  validators: {
                                  },
                                  hooks: {
                                  },
                                  expressions: {
                                    //disabled: (this.checkDisable('StockLossPercent') || this.model.StockInTradeSi =='' || this.model.StockInTradeSi =='0'),
                                  },
                                },
                                {
                                  className: "mt-1 rightAlign",
                                  type: 'ngselect',
                                  key: 'EEclaimsPreparationCosts',
                
                                  templateOptions: {
                                    disabled: this.checkDisable('EEclaimsPreparationCosts'),
                                    maxLength:15,
                                    required: false,
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
                            
                              ]
                            },
                          
                      ]
                    },
                    
                  ]
                }
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