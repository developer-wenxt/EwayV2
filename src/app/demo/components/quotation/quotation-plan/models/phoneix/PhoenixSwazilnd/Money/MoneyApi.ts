import { FormlyFieldConfig } from "@ngx-formly/core";
import { ForceLengthValidators } from "../../../../personal-quote-details/personal-quote-details.component";

export class MoneyApiSwaziland {
  customerDetails: any;
  commonDetails: any[] = [];
  endorsementSection: boolean = false; subuserType: any = null;
  enableFieldsList: any[] = []; finalizeYN: any = 'N';
  policyfields: FormlyFieldConfig;fields: FormlyFieldConfig;
  policyfields1: FormlyFieldConfig;extendsfields: FormlyFieldConfig;
  constructor() {

  }
  getEditDetails(subDetails, obj) {
      let Money  = subDetails.filter(ele=>ele['SectionId']=='42');
      if(Money.length!=0){
          let majorMoney = Money.filter(ele=>ele.CoverId==424 || ele.CoverId=='424')
          if(majorMoney.length!=0){obj['MajorMoneyLimit']=majorMoney[0].SumInsured;obj['SafeLockerGrade']=majorMoney[0].CategoryId;obj['IndustryType']=null;if(majorMoney[0]?.IndustryType!='0')obj['IndustryType']=majorMoney[0].IndustryType;}
          let seasonalIncrease = Money.filter(ele=>ele.CoverId==425 || ele.CoverId=='425')
          if(seasonalIncrease.length!=0){obj['SeasonalIncrease']=seasonalIncrease[0].SumInsured;obj['IndustryType']=null;if(seasonalIncrease[0]?.IndustryType!='0')obj['IndustryType']=seasonalIncrease[0].IndustryType;obj['SafeLockerGrade']=seasonalIncrease[0].CategoryId;}
          let LocksKeysofReceptacle = Money.filter(ele=>ele.CoverId==422 || ele.CoverId=='422')
          if(LocksKeysofReceptacle.length!=0){obj['LocksKeysofReceptacle']=LocksKeysofReceptacle[0].SumInsured;obj['IndustryType']=null;if(LocksKeysofReceptacle[0]?.IndustryType!='0')obj['IndustryType']=LocksKeysofReceptacle[0].IndustryType;}
          let ClothingPersonalEffectsofEmployees = Money.filter(ele=>ele.CoverId==427 || ele.CoverId=='427')
          if(ClothingPersonalEffectsofEmployees.length!=0){obj['ClothingPersonalEffectsofEmployees']=ClothingPersonalEffectsofEmployees[0].SumInsured;obj['IndustryType']=null;if(ClothingPersonalEffectsofEmployees[0]?.IndustryType!='0')obj['IndustryType']=ClothingPersonalEffectsofEmployees[0].IndustryType;}
          let Receptaclesinexcessofpolicylimit = Money.filter(ele=>ele.CoverId==426 || ele.CoverId=='426')
          if(Receptaclesinexcessofpolicylimit.length!=0){obj['Receptaclesinexcessofpolicylimit']=Receptaclesinexcessofpolicylimit[0].SumInsured;obj['IndustryType']=null;if(Receptaclesinexcessofpolicylimit[0]?.IndustryType!='0')obj['IndustryType']=Receptaclesinexcessofpolicylimit[0].IndustryType;}
          return obj
      }
  }
  getSaveDetails(entry, industryTypeList, obj) {
      if(entry.SafeLockerGrade!=null && entry.SafeLockerGrade!='' && entry.MajorMoneyLimit!='0' && entry.MajorMoneyLimit!=null && entry.MajorMoneyLimit!=''){
          let subEntry= {
            "SectionId": "42",
            "SectionName":"Money",
            "CoverId":"424",
            "SumInsured": entry.MajorMoneyLimit,
            "CategoryId": entry.SafeLockerGrade,
            "Status": "Y"
          }
          if(entry['IndustryType']){subEntry['IndustryType'] = entry['IndustryType'];subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==entry['IndustryType'])?.CodeDesc}
          obj.SectionList.push(subEntry);
        }
        if(entry.SafeLockerGrade!=null && entry.SafeLockerGrade!='' && entry.SeasonalIncrease!='0' && entry.SeasonalIncrease!=null && entry.SeasonalIncrease!=''){
          let subEntry= {
            "SectionId": "42",
            "SectionName":"Money",
            "CoverId":"425",
            "SumInsured": entry.SeasonalIncrease,
            "Status": "Y",
            "CategoryId": entry.SafeLockerGrade
          }
          if(entry['IndustryType']){subEntry['IndustryType'] = entry['IndustryType'];subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==entry['IndustryType'])?.CodeDesc}
          obj.SectionList.push(subEntry);
        }
        if(entry.Receptaclesinexcessofpolicylimit!='0' && entry.Receptaclesinexcessofpolicylimit!=null && entry.Receptaclesinexcessofpolicylimit!=''){
          let subEntry= {
            "SectionId": "42",
            "SectionName":"Money",
            "CoverId":"426",
            "SumInsured": entry.Receptaclesinexcessofpolicylimit,
            "Status": "Y"
          }
          if(entry['IndustryType']){subEntry['IndustryType'] = entry['IndustryType'];subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==entry['IndustryType'])?.CodeDesc}
          obj.SectionList.push(subEntry);
        }
        if(entry.ClothingPersonalEffectsofEmployees!='0' && entry.ClothingPersonalEffectsofEmployees!=null && entry.ClothingPersonalEffectsofEmployees!=''){
          let subEntry= {
            "SectionId": "42",
            "SectionName":"Money",
            "CoverId":"427",
            "SumInsured": entry.ClothingPersonalEffectsofEmployees,
            "Status": "Y"
          }
          if(entry['IndustryType']){subEntry['IndustryType'] = entry['IndustryType'];subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==entry['IndustryType'])?.CodeDesc}
          obj.SectionList.push(subEntry);
        }
        if(entry.LocksKeysofReceptacle!='0' && entry.LocksKeysofReceptacle!=null && entry.LocksKeysofReceptacle!=''){
          let subEntry= {
            "SectionId": "42",
            "SectionName":"Money",
            "CoverId":"422",
            "SumInsured": entry.LocksKeysofReceptacle,
            "Status": "Y"
          }
          if(entry['IndustryType']){subEntry['IndustryType'] = entry['IndustryType'];subEntry["IndustryTypeDesc"]= industryTypeList.find(ele=>ele.Code==entry['IndustryType'])?.CodeDesc}
          obj.SectionList.push(subEntry);
        }
          return obj;
  }
      

        

  }