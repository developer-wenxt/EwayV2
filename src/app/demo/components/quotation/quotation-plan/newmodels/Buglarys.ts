import { FormlyFieldConfig } from "@ngx-formly/core";

export class Burglarys{
  customerDetails: any;
  commonDetails: any[]=[];
  endorsementSection: boolean=false;
  enableFieldsList: any[]=[];
  finalizeYN: any='N';
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
      this.fields= {
          type: 'stepper',
          fieldGroup: [

            {
              props: { label: 'Burglary' },
              fieldGroup: [
                {
                  fieldGroupClassName: 'grid',
                  fieldGroup: [
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'ngselect',
                      key: 'NatureOfTradeId',
                      props: {
                        label: 'Nature Of Trade',
                        required: true,
                        disabled: this.checkDisable('NatureOfTrade'),
                        options: []
                      },
                      expressions: {

                      }
                    },
                    // {
                    //   className: 'col-6',
                    //   type: 'ngselect',
                    //   key: 'IndustryId',
                    //   props: {
                    //     label: 'Industry Type',
                    //     required: true,
                    //     options: []
                    //   },
                    //   expressions: {

                    //   }
                    // },
                    {
                      key: 'InsuranceForId',
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'multicheckbox',
                      props: {
                        label: 'Insurance For',
                        disabled: this.checkDisable('InsuranceForId'),
                        required: true,
                        options: [

                        ],
                      },
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      key: 'BuildingOwnerYn',
                      type: 'radio',
                      templateOptions: {
                        type: 'radio',
                        label: 'Do You Rent Or Own Home ?',
                        required: true,
                        disabled: this.checkDisable('BuildingOwnerYn'),
                        name: 'BuildingOwnerYn',
                        options: [{ value: 'N', label: 'I Rent Home' }, { value: 'Y', label: 'I Own Home' }],
                      }
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'input',
                      key: 'BuildingBuildYear',
                      props: {
                        label: 'Built Construction Year',
                        placeholder: "YYYY",
                        required: false,
                        maxLength: 4,
                        pattern: /[0-9]+/gm,
                        disabled: this.checkDisable('BuildingBuildYear'),
                        options: [
                        ],
                      },
                      validation: {
                        messages: {
                          //pattern: (error: any, field: FormlyFieldConfig) => field.formControl.setValue(field.formControl.value.replace(/[^0-9]+/gm, ''))
                        },
                      },
                      expressions: {

                      },
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'input',
                      key: 'OccupiedYear',
                      props: {
                        label: 'Occupied From(Year)',
                        placeholder: "YYYY",
                        required: false,
                        maxLength: 4,
                        disabled: this.checkDisable('OccupiedYear'),
                        pattern: /[0-9]+/gm,
                        options: [
                        ],
                      },
                      validation: {
                        messages: {
                          //pattern: (error: any, field: FormlyFieldConfig) => field.formControl.setValue(field.formControl.value.replace(/[^0-9]+/gm, ''))
                        },
                      },
                      expressions: {

                      },
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'ngselect',
                      key: 'WallType',
                      props: {
                        label: 'External Wall Type',
                        required: false,
                        disabled: this.checkDisable('WallType'),
                        options: []
                      },
                      expressions: {

                      }
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'ngselect',
                      key: 'InternalWallType',
                      props: {
                        label: 'Internal Wall Type',
                        disabled: this.checkDisable('InternalWallType'),
                        required: false,
                        options: []
                      },
                      expressions: {

                      }
                    },
                    {
                      className: 'col-4',
                      type: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      key: 'RoofType',
                      props: {
                        label: 'Roof Type',
                        disabled: this.checkDisable('RoofType'),
                        required: false,
                        options: []
                      },
                      expressions: {

                      }
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'ngselect',
                      key: 'CeilingType',
                      props: {
                        label: 'Ceiling Type',
                        disabled: this.checkDisable('CeilingType'),
                        required: false,
                        options: []
                      },
                      expressions: {

                      }
                    },
                  ]
                }
              ]
            },
            {
                props: {label: 'Property Details'},
                fieldGroup:[
                  {
                    fieldGroupClassName: 'grid',
                    fieldGroup:[
                      {
                        className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                        type: 'input',
                        key: 'Address',
                        props: {
                          label: 'Address',
                          disabled: this.checkDisable('Address'),
                          required: false,
                          maxLength: 100,
                          options: [
                          ],
                        },
                        expressions: {
  
                        }
                      },
                      {
                        className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                        type: 'ngselect',
                        key: 'RegionCode',
                        props: {
                          label: 'Region',
                          disabled: this.checkDisable('RegionCode'),
                          required: false,
                          options: []
                        },
                        expressions: {
  
                        },
                        hooks: {
                          
                        },
                      },
                      {
                        className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                        type: 'ngselect',
                        key: 'DistrictCode',
                        props: {
                          label: 'District',
                          disabled: this.checkDisable('DistrictCode'),
                          required: false,
                          options: []
                        },
                        expressions: {
  
                        }
                      },
                      {
                        className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                        type: 'input',
                        key: 'WatchmanGuardHours',
                        props: {
                          label: 'Watchman Guard Premises(Hours)',
                          placeholder: "Premises Time Limit in Hours",
                          required: false,
                          disabled: this.checkDisable('WatchmanGuardHours'),
                          maxLength: 2,
                          pattern: /[0-9]+/gm,
                          options: [
                          ],
                        },
                        validation: {
                          messages: {
                            //pattern: (error: any, field: FormlyFieldConfig) => field.formControl.setValue(field.formControl.value.replace(/[^0-9]+/gm, ''))
                          },
                        },
                        expressions: {
  
                        },
                      },
  
                    ]
                  }
                ] 
            },
            {
              props: { label: 'Doors & Windows in premises' },
              fieldGroup: [
                {
                  fieldGroupClassName: 'grid',
                  fieldGroup: [
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'input',
                      key: 'AccessibleWindows',
                      props: {
                        label: 'Accessible Windows',
                        disabled: this.checkDisable('AccessibleWindows'),
                        placeholder: "Number Of Accessible Windows",
                        required: false,
                        maxLength: 2,
                        pattern: /[0-9]+/gm,
                        options: [
                        ],
                      },
                      validation: {
                        messages: {
                          //pattern: (error: any, field: FormlyFieldConfig) => field.formControl.setValue(field.formControl.value.replace(/[^0-9]+/gm, ''))
                        },
                      },
                      expressions: {

                      },
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'input',
                      key: 'ShowWindow',
                      props: {
                        label: 'Show Windows',
                        placeholder: "Number Of Show Windows",
                        required: false,
                        disabled: this.checkDisable('ShowWindow'),
                        maxLength: 2,
                        pattern: /[0-9]+/gm,
                        options: [
                        ],
                      },
                      validation: {
                        messages: {
                          //pattern: (error: any, field: FormlyFieldConfig) => field.formControl.setValue(field.formControl.value.replace(/[^0-9]+/gm, ''))
                        },
                      },
                      expressions: {

                      },
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'input',
                      key: 'FrontDoors',
                      props: {
                        label: 'Front Door',
                        placeholder: "Number Of Front Door",
                        required: false,
                        disabled: this.checkDisable('FrontDoors'),
                        maxLength: 2,
                        pattern: /[0-9]+/gm,
                        options: [
                        ],
                      },
                      validation: {
                        messages: {
                          //pattern: (error: any, field: FormlyFieldConfig) => field.formControl.setValue(field.formControl.value.replace(/[^0-9]+/gm, ''))
                        },
                      },
                      expressions: {

                      },
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'input',
                      key: 'BackDoors',
                      props: {
                        label: 'Back Door',
                        placeholder: "Number Of Back Door",
                        disabled: this.checkDisable('BackDoors'),
                        required: false,
                        maxLength: 2,
                        pattern: /[0-9]+/gm,
                        options: [
                        ],
                      },
                      validation: {
                        messages: {
                          //pattern: (error: any, field: FormlyFieldConfig) => field.formControl.setValue(field.formControl.value.replace(/[^0-9]+/gm, ''))
                        },
                      },
                      expressions: {

                      },
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'input',
                      key: 'TrapDoors',
                      props: {
                        label: 'Skylights and Trap Doors',
                        placeholder: "",
                        disabled: this.checkDisable('TrapDoors'),
                        required: false,
                        maxLength: 2,
                        pattern: /[0-9]+/gm,
                        options: [
                        ],
                      },
                      validation: {
                        messages: {
                          //pattern: (error: any, field: FormlyFieldConfig) => field.formControl.setValue(field.formControl.value.replace(/[^0-9]+/gm, ''))
                        },
                      },
                      expressions: {

                      },
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'ngselect',
                      key: 'WindowsMaterialId',
                      props: {
                        label: 'Windows Construction Material',
                        disabled: this.checkDisable('WindowsMaterialId'),
                        required: true,
                        options: []
                      },
                      expressions: {

                      }
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'ngselect',
                      key: 'DoorsMaterialId',
                      props: {
                        label: 'Doors Construction Material',
                        disabled: this.checkDisable('DoorsMaterialId'),
                        required: true,
                        options: []
                      },
                      expressions: {

                      }
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'ngselect',
                      key: 'NightLeftDoor',
                      props: {
                        label: 'In Night by which door are the premises Left',
                        disabled: this.checkDisable('NightLeftDoor'),
                        required: true,
                        options: []
                      },
                      expressions: {

                      }
                    },
                    {
                      className: 'col-12 md:col-4 lg:col-4 xl:col-4',
                      type: 'ngselect',
                      key: 'BuildingOccupied',
                      props: {
                        label: 'Building occupied',
                        disabled: this.checkDisable('BuildingOccupied'),
                        required: true,
                        options: []
                      },
                      expressions: {

                      }
                    },
                  ]
                }
              ]
            },
            {
              props: { label: 'Sum Insured Details' },
              fieldGroup: [
                {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      className: 'col-12 md:col-12 lg:col-12 xl:col-12',
                      type: 'table',
                      fieldGroup: [
                        {
                            fieldGroup:[
                              {props:{label:`Description`}},
                              {props:{label:`Sum Insured`}},
                              {props:{label:`First Loss SumInsured (%)`}},
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
                                        label: `Stock In Trade `,
                                        required: false,
                    
                                      },
                                    },
                                    {
                                      className: "mt-1",
                                      type: 'commaSeparator',
                                      key: 'StockInTradeSi',
                    
                                      templateOptions: {
                                        disabled: this.checkDisable('SumInsured'),
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
                                    {
                                      type: 'ngselect',
                                      className:'formlymargin',
                                      key: 'StockLossPercent',
                    
                                      templateOptions: {
                                        required: false,
                                        disabled: this.checkDisable('SumInsured'),
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
                                  ]
                                },
                                {
                                  fieldGroup:[
                                 
                                    {
                                      className: "mt-1",
                                      type: 'display',
                    
                                      templateOptions: {
                                        label: `Office Equipment Furniture , Fixture & Fittings`,
                                        required: false,
                    
                                      },
                                    },
                                    {
                                      className: "mt-3",
                                      type: 'commaSeparator',
                                      key: 'FurnitureSi',
                    
                                      templateOptions: {
                                        maxLength:15,
                                        disabled: this.checkDisable('SumInsured'),
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
                                    {
                                      type: 'ngselect',
                                      key: 'FurnitureLossPercent',
                                      className:'formlymargin',
                                      templateOptions: {
                                        disabled: this.checkDisable('SumInsured'),
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