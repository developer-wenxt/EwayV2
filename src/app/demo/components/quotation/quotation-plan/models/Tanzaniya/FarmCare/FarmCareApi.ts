import { FormlyFieldConfig } from "@ngx-formly/core";

export class FarmCareApiTanzaniya{
    customerDetails: any;
    commonDetails: any[]=[];
    endorsementSection: boolean=false;subuserType:any=null;
    enableFieldsList: any[]=[];finalizeYN:any='N';
    constructor() {
      
    }
       getEditDetails(subDetails,obj){
      let farmCareSection  = subDetails.filter(ele=>ele['SectionId']=='243');
      if(farmCareSection.length!=0){
        obj['DistributorCode']=farmCareSection[0].ContentId;
        obj['DistributorName']=farmCareSection[0].ContentDesc;
        obj['CoverageID']=farmCareSection[0].CategoryId;
        obj['RegionCode']=farmCareSection[0].RegionCode;
        obj['DistrictCode']=farmCareSection[0].DistrictCode;
        obj['YaraPackageYN']=farmCareSection[0].CollateralYn;
        obj['Crop']=farmCareSection[0].BuildingUsageId;
        obj['NoOfAcres']=farmCareSection[0].BuildingFloors;
        obj['farmCareSumInsured']=farmCareSection[0].SumInsured;
        return obj
      }
}
    getSaveDetails(entry,obj){
          let sumInsured = null;
          if(entry.YaraPackageYN =='Y'){
              if(entry.Crop=="1" || entry.Crop==1){
                if(entry.NoOfAcres){sumInsured = Number(entry.NoOfAcres)*2400000}
              }
              else if(entry.Crop=="2" || entry.Crop==2){
                if(entry.NoOfAcres){sumInsured = Number(entry.NoOfAcres)*1920000}
              }
          }
          else sumInsured = entry.farmCareSumInsured;
          let subEntry= {
              "SectionId": "243",
              "SectionName":"Farm Care",
              "CoverId":"572",
              "ContentId": entry.DistributorCode,
              "ContentDesc": entry.DistributorName,
              "CategoryId": entry.CoverageID,
              "RegionCode": entry.RegionCode,
              "DistrictCode": entry.DistrictCode,
              "CollateralYn": entry.YaraPackageYN,
              "BuildingUsageId": entry.Crop,
              "BuildingFloors": entry.NoOfAcres,
              "SumInsured": sumInsured
            }
            
            obj.SectionList.push(subEntry);
        
        
        return obj;
    }
  fields:FormlyFieldConfig;
      
}