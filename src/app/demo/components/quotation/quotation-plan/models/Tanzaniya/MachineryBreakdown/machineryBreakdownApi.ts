import { FormlyFieldConfig } from "@ngx-formly/core";

export class MachineryBreakdownApiTanzaniya{
    customerDetails: any;
    commonDetails: any[]=[];
    endorsementSection: boolean=false;subuserType:any=null;
    enableFieldsList: any[]=[];finalizeYN:any='N';
  policyfields:FormlyFieldConfig;
  policyfields1 :FormlyFieldConfig;
  extendsfields:FormlyFieldConfig
    constructor() {
      
    }
    getEditDetails(productItem,entry){
                  productItem.BondSI = entry.SectionList[0]['SumInsured'];
                  productItem.TypeOfBond = entry.SectionList[0].SectionId;
                  if(entry.SectionList[0].IndustryId) productItem.IndustryId = String(entry.SectionList[0].IndustryId);
                  else if(entry.SectionList[0].IndustryType) productItem.IndustryId = String(entry.SectionList[0].IndustryType);
                  productItem.NoOfYears = entry.SectionList[0].CategoryId;
                  productItem.CoveringDetails = entry.SectionList[0].CoveringDetails;
                  productItem.DescriptionOfRisk = entry.SectionList[0].DescriptionOfRisk;
        // let GlassSection  = subDetails.filter(ele=>ele['SectionId']=='222');
        //                     if(GlassSection.length!=0){
        //                       let glassReinstate = GlassSection.filter(ele=>ele.CoverId==429|| ele.CoverId=='429')
        //                       if(glassReinstate.length!=0){obj['SpecialReinstatement']=glassReinstate[0].SumInsured;obj['IndustryType']=null;if(glassReinstate[0]?.IndustryType!='0')obj['IndustryType']=glassReinstate[0].IndustryType;}
        //                       let glassInternal = GlassSection.filter(ele=>ele.CoverId==489|| ele.CoverId=='489')
        //                       if(glassInternal.length!=0){obj['InternalGlass']=glassInternal[0].SumInsured;obj['IndustryType']=null;if(glassInternal[0]?.IndustryType!='0')obj['IndustryType']=glassInternal[0].IndustryType;}
        //                       let glassExternal = GlassSection.filter(ele=>ele.CoverId==490|| ele.CoverId=='490')
        //                       if(glassExternal.length!=0){obj['ExternalGlass']=glassExternal[0].SumInsured;obj['IndustryType']=null;if(glassExternal[0]?.IndustryType!='0')obj['IndustryType']=glassExternal[0].IndustryType;}
        //                       let glassClaims = GlassSection.filter(ele=>ele.CoverId==372|| ele.CoverId=='372')
        //                       if(glassClaims.length!=0){obj['GlassClaimsPreparationCosts']=glassClaims[0].CategoryId;obj['IndustryType']=null;if(glassClaims[0]?.IndustryType!='0')obj['IndustryType']=glassClaims[0].IndustryType;} 
        //                       return obj
        //                     }
        return productItem;
    }
    getSaveDetails(productItem,entry,dropList,IndustryId,businessInterruptionList){    
        if(productItem.PowerPlantSi!=null && productItem.PowerPlantSi!='' && productItem.PowerPlantSi!='0'){
            let subEntry = {
              "SectionId": "41",
              "SectionName": "Machinery Breakdown",
              "SerialNo": productItem.SerialNo,
              "CoveringDetails": productItem.CoveringDetails,
              "DescriptionOfRisk": productItem.DescriptionOfRisk,
              "CategoryId": productItem.ContentId,
              "ContentId": productItem.ContentId,
              "ContentDesc": dropList.find(ele=>ele.value==productItem.ContentId)?.label,
              "MachinerySi": productItem.PowerPlantSi,
              "SumInsured": productItem.PowerPlantSi,
              'BusinessInterruption': productItem.BusinessName,
              "IndustryId": IndustryId,
              'BusinessNameDesc': this.getBusinessNameDesc(productItem.BusinessName,businessInterruptionList),
              'BuildingSumInsured': productItem.BusinessSI,
              
              "RiskId": null
            }
            entry.SectionList = [subEntry]
            if(subEntry.BusinessInterruption!=0 && subEntry.BusinessInterruption!='0'){
              let sectionName = dropList.find(ele=>ele.Code==productItem.BusinessName)?.CodeDesc;
              console.log("List",dropList)
              let subData = {
                "SectionId": productItem.BusinessName,
                "SectionName": sectionName,
                "SerialNo": productItem.SerialNo,
                "CoveringDetails": productItem.CoveringDetailsBI,
                "DescriptionOfRisk": productItem.DescriptionOfRiskBI,
                "CategoryId": productItem.ContentId,
                "ContentId": productItem.ContentId,
                "ContentDesc": dropList.find(ele=>ele.value==productItem.ContentId)?.label,
                "MachinerySi": productItem.PowerPlantSi,
                "SumInsured": productItem.BusinessSI,
                'BusinessInterruption': productItem.BusinessName,
                'BusinessNameDesc': this.getBusinessNameDesc(productItem.BusinessName,businessInterruptionList),
                'BuildingSumInsured': productItem.BusinessSI,
                "IndustryId": IndustryId,
                "RiskId": null
              }
              entry.SectionList.push(subData)
            }
            
          }
        return entry;
    }
  fields:FormlyFieldConfig;
  getBusinessNameDesc(val,businessInterruptionList){
    if(val!=null && val!='' && val!=undefined) return businessInterruptionList.find(ele=>ele.Code==val)?.CodeDesc;
    else return '';
}
}