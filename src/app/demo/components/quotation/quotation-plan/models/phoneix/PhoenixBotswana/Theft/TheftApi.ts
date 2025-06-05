import { FormlyFieldConfig } from "@ngx-formly/core";

export class TheftApiBotswana{
    customerDetails: any;
    commonDetails: any[]=[];
    endorsementSection: boolean=false;subuserType:any=null;
    enableFieldsList: any[]=[];finalizeYN:any='N';
  policyfields:FormlyFieldConfig;
  policyfields1 :FormlyFieldConfig;
  extendsfields:FormlyFieldConfig
    constructor() {
      
    }
    getEditDetails(subDetails,obj){
       
        let TheftSection  = subDetails.filter(ele=>ele['SectionId']=='220');
        if(TheftSection.length!=0){
          let theftLossDamage = TheftSection.filter(ele=>ele.CoverId==423|| ele.CoverId=='423')
          if(theftLossDamage.length!=0){obj['LossDamagetoPersonalEffects']=theftLossDamage[0].SumInsured;obj['IndustryType']=null;if(theftLossDamage[0]?.IndustryType!='0')obj['IndustryType']=theftLossDamage[0].IndustryType;}
          let theftFuelaboveGround = TheftSection.filter(ele=>ele.CoverId==419|| ele.CoverId=='419')
          if(theftFuelaboveGround.length!=0){obj['FuelinAbovegroundtanks']=theftFuelaboveGround[0].SumInsured;obj['IndustryType']=null;if(theftFuelaboveGround[0]?.IndustryType!='0')obj['IndustryType']=theftFuelaboveGround[0].IndustryType;}
          let theftFuelbottomGround = TheftSection.filter(ele=>ele.CoverId==500|| ele.CoverId=='500')
          if(theftFuelbottomGround.length!=0){obj['FuelinUndergroundtanks']=theftFuelbottomGround[0].SumInsured;obj['IndustryType']=null;if(theftFuelbottomGround[0]?.IndustryType!='0')obj['IndustryType']=theftFuelbottomGround[0].IndustryType;}
          let theftDamageByThieves = TheftSection.filter(ele=>ele.CoverId==421|| ele.CoverId=='421')
          if(theftDamageByThieves.length!=0){obj['DamagetoBuildingscausedbyThieves']=theftDamageByThieves[0].SumInsured;obj['IndustryType']=null;if(theftDamageByThieves[0]?.IndustryType!='0')obj['IndustryType']=theftDamageByThieves[0].IndustryType;}
          let theftLockskeys = TheftSection.filter(ele=>ele.CoverId==3422|| ele.CoverId=='422')
          if(theftLockskeys.length!=0){obj['LocksandKeys']=theftLockskeys[0].SumInsured;obj['IndustryType']=null;if(theftLockskeys[0]?.IndustryType!='0')obj['IndustryType']=theftLockskeys[0].IndustryType;}
          let theftfirstlosslimit = TheftSection.filter(ele=>ele.CoverId==418 || ele.CoverId=='418')
          if(theftfirstlosslimit.length!=0){obj['FirstLossLimit']=theftfirstlosslimit[0].SumInsured;obj['IndustryType']=null;if(theftfirstlosslimit[0]?.IndustryType!='0')obj['IndustryType']=theftfirstlosslimit[0].IndustryType;}
          let theftVehicles = TheftSection.filter(ele=>ele.CoverId==420 || ele.CoverId=='420')
          if(theftVehicles.length!=0){obj['VehiclesintheOpen']=theftVehicles[0].SumInsured;obj['IndustryType']=null;if(theftVehicles[0]?.IndustryType!='0')obj['IndustryType']=theftVehicles[0].IndustryType;}
          let theftClaims = TheftSection.filter(ele=>ele.CoverId==372 || ele.CoverId=='372')
          if(theftClaims.length!=0){obj['AdditionalClaimsPreparationCosts']=theftClaims[0].CategoryId;obj['IndustryType']=null;if(theftClaims[0]?.IndustryType!='0')obj['IndustryType']=theftClaims[0].IndustryType;}
         return obj
         
        }
    }
    getSaveDetails(entry,ClaimCostList,IndustryId,industryTypeList,obj){
        if(entry.LocksandKeys!='0' && entry.LocksandKeys!=null && entry.LocksandKeys!=''){
            let subEntry= {
              "SectionId": "220",
              "SectionName":"theft",
              "CoverId":"422",
              "SumInsured": entry.LocksandKeys
            }
            if(IndustryId){subEntry['IndustryType'] = IndustryId;subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==IndustryId)?.CodeDesc}
            obj.SectionList.push(subEntry);
          }
          if(entry.LossDamagetoPersonalEffects!='0' && entry.LossDamagetoPersonalEffects!=null && entry.LossDamagetoPersonalEffects!=''){
            let subEntry= {
              "SectionId": "220",
              "SectionName":"theft",
              "CoverId":"423",
              "SumInsured": entry.LossDamagetoPersonalEffects,
              "IndustryType": IndustryId
            }
            if(IndustryId){subEntry['IndustryType'] = IndustryId;subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==IndustryId)?.CodeDesc}
            obj.SectionList.push(subEntry);
          }
          if(entry.FuelinAbovegroundtanks!='0' && entry.FuelinAbovegroundtanks!=null && entry.FuelinAbovegroundtanks!=''){
            let subEntry= {
              "SectionId": "220",
              "SectionName":"theft",
              "CoverId":"419",
              "SumInsured": entry.FuelinAbovegroundtanks
            }
            if(IndustryId){subEntry['IndustryType'] = IndustryId;subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==IndustryId)?.CodeDesc}
            obj.SectionList.push(subEntry);
          }
          if(entry.FuelinUndergroundtanks!='0' && entry.FuelinUndergroundtanks!=null && entry.FuelinUndergroundtanks!=''){
            let subEntry= {
              "SectionId": "220",
              "SectionName":"theft",
              "CoverId":"500",
              "SumInsured": entry.FuelinUndergroundtanks
            }
            if(IndustryId){subEntry['IndustryType'] = IndustryId;subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==IndustryId)?.CodeDesc}
            obj.SectionList.push(subEntry);
          }
          if(entry.DamagetoBuildingscausedbyThieves!='0' && entry.DamagetoBuildingscausedbyThieves!=null && entry.DamagetoBuildingscausedbyThieves!=''){
            let subEntry= {
              "SectionId": "220",
              "SectionName":"theft",
              "CoverId":"421",
              "SumInsured": entry.DamagetoBuildingscausedbyThieves,
              "IndustryType": IndustryId
            }
            obj.SectionList.push(subEntry);
          }
        
          if(entry.FirstLossLimit!='0' && entry.FirstLossLimit!=null && entry.FirstLossLimit!=''){
            let subEntry= {
              "SectionId": "220",
              "SectionName":"theft",
              "CoverId":"418",
              "SumInsured": entry.FirstLossLimit,
             
            }
            if(IndustryId){subEntry['IndustryType'] = IndustryId;subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==IndustryId)?.CodeDesc}
            obj.SectionList.push(subEntry);
          }
          if(entry.VehiclesintheOpen!='0' && entry.VehiclesintheOpen!=null && entry.VehiclesintheOpen!=''){
            let subEntry= {
              "SectionId": "220",
              "SectionName":"theft",
              "CoverId":"420",
              "SumInsured": entry.VehiclesintheOpen,
              
            }
            if(IndustryId){subEntry['IndustryType'] = IndustryId;subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==IndustryId)?.CodeDesc}
            obj.SectionList.push(subEntry);
          }
          if(entry.AdditionalClaimsPreparationCosts!='0' && entry.AdditionalClaimsPreparationCosts!=null && entry.AdditionalClaimsPreparationCosts!=''){
            let subEntry= {
              "SectionId": "220",
              "SectionName":"theft",
              "CoverId":"372",
              "SumInsured": ClaimCostList.find(ele=>ele.Code==entry.AdditionalClaimsPreparationCosts)?.CodeDesc?.replaceAll(',',''),
              "CategoryId": entry.AdditionalClaimsPreparationCosts,
            }
            if(IndustryId){subEntry['IndustryType'] = IndustryId;subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==IndustryId)?.CodeDesc}
            obj.SectionList.push(subEntry);
          }
        return obj;
    }
  fields:FormlyFieldConfig;
      
}