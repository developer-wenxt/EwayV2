import { FormlyFieldConfig } from "@ngx-formly/core";

export class BondApiTanzaniya{
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
    getSaveDetails(entry,BondTypeList,industryTypeList,obj){    
        if(entry.BondSuminsured!='0' && entry.BondSuminsured!=null && entry.BondSuminsured!=''){
            let subEntry= {
              "BondType": entry.BondType,
              "SectionId": entry.BondType,
              "SectionName":BondTypeList.find(ele=>ele.Code==entry.BondType)?.CodeDesc,
              "CoverId": entry.BondType == 120 ? '258': entry.BondType == 118 ? '256' : entry.BondType == 117 ? '255' :  '257' ,
              "SumInsured": entry.BondSuminsured,
              "CoveringDetails":entry.CoveringDetails,
              "DescriptionOfRisk":entry.DescriptionOfRisk,
              "CategoryId":entry.BondYear,
              "BondYear":entry.BondYear,
              "IndustryType":entry.IndustryType,
              "IndustryTypeDesc":industryTypeList.find(ele=>ele.Code==entry.IndustryType)?.CodeDesc
            }
            
            obj.SectionList.push(subEntry);
          }
        return obj;
    }
  fields:FormlyFieldConfig;
      
}