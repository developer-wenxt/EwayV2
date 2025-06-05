import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/_services/shared.service';
import * as Mydatas from '../../../../../app-config.json';
import { ProductData } from '../models/product';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Burglarys } from '../newmodels/Buglarys';
import { HouseHoldContentsss } from '../newmodels/HouseHoldContents';
import { BussinessAllRisk } from '../newmodels/Bussinessallrisk';
import { ElectronicEquipment } from '../newmodels/ElectronicEquipment';
import { AllRiskss } from '../newmodels/AllRisk';
import { Buildingss } from '../newmodels/Building';
import { FormlyFieldTabs } from '../formlyTypes/tab.type';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { LocationDetails } from '../models/additionalDetails/locationdetails';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { ForceLengthValidators } from '../common-product-details/common-product-details.component';
import { BuildingPhoenix } from '../models/phoneix/PhoenixZambia/Building';
import { Content } from '../models/phoneix/PhoenixZambia/Content';
import { PlantAndMachinery } from '../models/phoneix/PhoenixZambia/PlantAndMachinery';
import { StockInTrade } from '../models/phoneix/PhoenixZambia/StockInTrade';
import { Miscellaneous } from '../models/phoneix/PhoenixZambia/Miscellaneous';
import { LeakageExtension } from '../models/phoneix/PhoenixZambia/LeakageExtension';
import { HailDamage } from '../models/phoneix/PhoenixZambia/HailDamage';
import { RentReceivable } from '../models/phoneix/PhoenixZambia/RentReceivable';
import { AdditonalInflationMargin } from '../models/phoneix/PhoenixZambia/AdditonalInflationMargin';
import { Geyser } from '../models/phoneix/PhoenixZambia/Geyser';
import { ClaimsPreparation } from '../models/phoneix/PhoenixZambia/ClaimsPreparation';
import { Liability } from '../models/phoneix/PhoenixZambia/Liability';
import { LiabilityLoss } from '../models/phoneix/PhoenixZambia/LiabilityLoss';
import { CommonFormly } from '../models/phoneix/CommonFormly';
import { FirePhoenix } from '../models/phoneix/PhoenixZambia/Fire/Fire';
import { GoodsInTransitPhoenix } from '../models/phoneix/PhoenixZambia/GoodsInTransit/GoodsInTransit';
import { BIPhoenix } from '../models/phoneix/PhoenixZambia/BusinessInterruption';
import { PublicLiabilityPhoenix } from '../models/phoneix/PhoenixZambia/publicLiability/PublicLiability';
import { MoneyPhoenix } from '../models/phoneix/PhoenixZambia/Money/Money';
import { PowerSurge } from '../models/phoneix/PhoenixZambia/PowerSurge';
import { policyFormConfig } from '../policyFormconfig';
import { FidelityPhoenix } from '../models/phoneix/PhoenixZambia/Fidelity/FidelityPhoneix';
import { GPAPhoenix } from '../models/phoneix/PhoenixZambia/GroupPersonalAccident/GPA';
import { GPAApiPhoenix } from '../models/phoneix/PhoenixZambia/GroupPersonalAccident/GPAApi';
import { MachineryBreakDownPhoenix } from '../models/phoneix/PhoenixZambia/MachineryBreakdown/MachineryBreakdown';
import { BuildingCombinedPhoenix } from '../models/phoneix/PhoenixZambia/BuildingCombined/BuildingCombined';
import { RepeatService } from './repeat.service';
import { HouseHoldersPhoenix } from '../models/phoneix/PhoenixZambia/HouseHolders/HouseHoldersPhoenix';
import { PublicLiabilityApiPhoenix } from '../models/phoneix/PhoenixZambia/publicLiability/PublicLiabilityApi';
import { AccidentalDamagePhoenix } from '../models/phoneix/PhoenixZambia/AccidentalDamage/AccidentalDamage';
import { AccidentalDamageApiPhoenix } from '../models/phoneix/PhoenixZambia/AccidentalDamage/AccidentalDamageApi';
import { BuildingCombinedApiPhoenix } from '../models/phoneix/PhoenixZambia/BuildingCombined/BuildingCombinedApi';
import { FireApiPhoenix } from '../models/phoneix/PhoenixZambia/Fire/FireApi';
import { HouseOwnerPhoenix } from '../models/phoneix/PhoenixZambia/HouseOwner/HouseOwnerPhoenix';
import { HouseOwnerApiPhoenix } from '../models/phoneix/PhoenixZambia/HouseOwner/HouseOwnerApi';
import { AccountsRecievableApiPhoenix } from '../models/phoneix/PhoenixZambia/AccountsRecievable/AccountsRecievableApi';
import { TheftApiPhoenix } from '../models/phoneix/PhoenixZambia/Theft/TheftApi';
import { GlassApiPhoenix } from '../models/phoneix/PhoenixZambia/Glass/GlassApi';
import { BusinessAllRiskApiPhoenix } from '../models/phoneix/PhoenixZambia/BusinessAllRisk/BusinessAllRiskApi';
import { EmployersLiabilityApiPhoenix } from '../models/phoneix/PhoenixZambia/EmployersLiability/EmployersliabilityApi';
import { DeteriorationOfStockApiPhoenix } from '../models/phoneix/PhoenixZambia/Deteroitation/DeteroitationApi';
import { OfficeContentsApiPhoenix } from '../models/phoneix/PhoenixZambia/OfficeContents/OfficeContentApi';
import { StatedBenefitsApi } from '../models/phoneix/PhoenixZambia/StatedBenefits/StatedBenefitsApi';
import { StateBenefitsPhoenix } from '../models/phoneix/PhoenixZambia/StatedBenefits/StateBenefits';
import { BusinessAllRiskPhoenix } from '../models/phoneix/PhoenixZambia/BusinessAllRisk/BusinessAllRisk';
import { DeteriorationOfStockPhoenix } from '../models/phoneix/PhoenixZambia/Deteroitation/Deteroitation';
import { OfficeContents } from '../models/phoneix/PhoenixZambia/OfficeContents/OfficeContent';
import { EmployersLiabilityPhoenix } from '../models/phoneix/PhoenixZambia/EmployersLiability/Employersliability';
import { MachineryBreakdownApi } from '../models/phoneix/PhoenixZambia/MachineryBreakdown/MachineryBreakdownApi';
import { ElectronicEquipmentApi } from '../models/phoneix/PhoenixZambia/ElectronicEquipment/ElectronicEquipmentApi';
import { ElectronicEquipmentPhoenix } from '../models/phoneix/PhoenixZambia/ElectronicEquipment/Electronicequipment';
import { MoneyApi } from '../models/phoneix/PhoenixZambia/Money/MoneyApi';
import { GoodsInTransitApiPhoenix } from '../models/phoneix/PhoenixZambia/GoodsInTransit/GoodsInTransitApi';
import { HouseHoldersContentsApiPhoenix } from '../models/phoneix/PhoenixZambia/HouseHolders/HouseHolderApi';
import { HouseHoldersContentsPhoenix } from '../models/phoneix/PhoenixZambia/HouseHolders/HouseHolder';
import { UmbrellaPhoenix } from '../models/phoneix/PhoenixZambia/Umbrella/Umbrella';
import { UmbrellaApi } from '../models/phoneix/PhoenixZambia/Umbrella/umbrellaApi';
import { AccidentalDamageMozambique } from '../models/phoneix/PhoenixMozambique/AccidentalDamage/AccidentalDamage';
import { AccidentalDamageMozambiqueApi } from '../models/phoneix/PhoenixMozambique/AccidentalDamage/AccidentalDamageApi';
import { AccountsRecievableMozambiqueApi } from '../models/phoneix/PhoenixMozambique/AccountsRecievable/AccountsRecievableApi';
import { AccountsRecievableMozambique } from '../models/phoneix/PhoenixMozambique/AccountsRecievable/AccountsRecievable';
import { BuildingCombinedMozambique } from '../models/phoneix/PhoenixMozambique/BuildingCombined/BuildingCombined';
import { FireMozambique } from '../models/phoneix/PhoenixMozambique/Fire/Fire';
import { FireMozambiqueApi } from '../models/phoneix/PhoenixMozambique/Fire/FireApi';
import { BuildingCombinedMozambiqueApi } from '../models/phoneix/PhoenixMozambique/BuildingCombined/BuildingCombinedApi';
import { BusinessAllRiskApiMozambique } from '../models/phoneix/PhoenixMozambique/BusinessAllRisk/BusinessAllRiskApi';
import { BusinessAllRiskMozambique } from '../models/phoneix/PhoenixMozambique/BusinessAllRisk/BusinessAllRisk';
import { DeteriorationOfStockMozambique } from '../models/phoneix/PhoenixMozambique/Deteroitation/Deteroitation';
import { DeteriorationOfStockApiMozambique } from '../models/phoneix/PhoenixMozambique/Deteroitation/DeteroitationApi';
import { ElectronicEquipmentMozambique } from '../models/phoneix/PhoenixMozambique/ElectronicEquipment/Electronicequipment';
import { ElectronicEquipmentApiMozambique } from '../models/phoneix/PhoenixMozambique/ElectronicEquipment/ElectronicEquipmentApi';
import { EmployersLiabilityMozambique } from '../models/phoneix/PhoenixMozambique/EmployersLiability/Employersliability';
import { EmployersLiabilityApiMozambique } from '../models/phoneix/PhoenixMozambique/EmployersLiability/EmployersliabilityApi';
import { HouseHoldersContentsApiMozambique } from '../models/phoneix/PhoenixMozambique/HouseHolders/HouseHolderApi';
import { HouseHoldersContentsMozambique } from '../models/phoneix/PhoenixMozambique/HouseHolders/HouseHolder';
import { HouseHoldersMozambique } from '../models/phoneix/PhoenixMozambique/HouseHolders/HouseHoldersPhoenix';
import { GlassPhoenix } from '../models/phoneix/PhoenixZambia/Glass/Glass';
import { GlassMozambique } from '../models/phoneix/PhoenixMozambique/Glass/Glass';
import { GlassApiMozambique } from '../models/phoneix/PhoenixMozambique/Glass/GlassApi';
import { TheftApiMozambique } from '../models/phoneix/PhoenixMozambique/Theft/TheftApi';
import { TheftMozambique } from '../models/phoneix/PhoenixMozambique/Theft/Theft';
import { FidelityMosambique } from '../models/phoneix/PhoenixMozambique/Fidelity/Fidelity';
import { OfficeContentsMozambique } from '../models/phoneix/PhoenixMozambique/OfficeContents/OfficeContent';
import { OfficeContentsApiMozambique } from '../models/phoneix/PhoenixMozambique/OfficeContents/OfficeContentApi';
import { UmbrellaApiMozambique } from '../models/phoneix/PhoenixMozambique/Umbrella/umbrellaApi';
import { UmbrellaMozambique } from '../models/phoneix/PhoenixMozambique/Umbrella/Umbrella';
import { GoodsInTransitMozambique } from '../models/phoneix/PhoenixMozambique/GoodsInTransit/GoodsInTransit';
import { GoodsInTransitApiMozambique } from '../models/phoneix/PhoenixMozambique/GoodsInTransit/GoodsInTransitApi';
import { MachineryBreakDownMozambique } from '../models/phoneix/PhoenixMozambique/MachineryBreakdown/MachineryBreakdown';
import { MachineryBreakdownApiMozambique } from '../models/phoneix/PhoenixMozambique/MachineryBreakdown/MachineryBreakdownApi';
import { HouseOwnerApiMozambique } from '../models/phoneix/PhoenixMozambique/HouseOwner/HouseOwnerApi';
import { HouseOwnerMozambique } from '../models/phoneix/PhoenixMozambique/HouseOwner/HouseOwnerPhoenix';
import { StatedBenefitsApiMozambique } from '../models/phoneix/PhoenixMozambique/StatedBenefits/StatedBenefitsApi';
import { PublicLiabilityMozambique } from '../models/phoneix/PhoenixMozambique/publicLiability/PublicLiability';
import { PublicLiabilityApiMozambique } from '../models/phoneix/PhoenixMozambique/publicLiability/PublicLiabilityApi';
import { MoneyMozambique } from '../models/phoneix/PhoenixMozambique/Money/Money';
import { MoneyApiMozambique } from '../models/phoneix/PhoenixMozambique/Money/MoneyApi';
import { GPAApiMozambique } from '../models/phoneix/PhoenixMozambique/GroupPersonalAccident/GPAApi';
import { ElectronicEquipmentBotswana } from '../models/phoneix/PhoenixBotswana/ElectronicEquipment/Electronicequipment';
import { AccidentalDamageBotswana } from '../models/phoneix/PhoenixBotswana/AccidentalDamage/AccidentalDamage';
import { AccountsRecievableBotswana } from '../models/phoneix/PhoenixBotswana/AccountsRecievable/AccountsRecievable';
import { TheftBotswana } from '../models/phoneix/PhoenixBotswana/Theft/Theft';
import { GlassBotswana } from '../models/phoneix/PhoenixBotswana/Glass/Glass';
import { HouseHoldersContentsBotswana } from '../models/phoneix/PhoenixBotswana/HouseHolders/HouseHolder';
import { HouseHoldersBotswana } from '../models/phoneix/PhoenixBotswana/HouseHolders/HouseHoldersPhoenix';
import { FidelityBotswana } from '../models/phoneix/PhoenixBotswana/Fidelity/Fidelity';
import { BusinessAllRiskBotswana } from '../models/phoneix/PhoenixBotswana/BusinessAllRisk/BusinessAllRisk';
import { DeteriorationOfStockBotswana } from '../models/phoneix/PhoenixBotswana/Deteroitation/Deteroitation';
import { OfficeContentsBotswana } from '../models/phoneix/PhoenixBotswana/OfficeContents/OfficeContent';
import { EmployersLiabilityBotswana } from '../models/phoneix/PhoenixBotswana/EmployersLiability/Employersliability';
import { HouseOwnerBotswana } from '../models/phoneix/PhoenixBotswana/HouseOwner/HouseOwnerPhoenix';
import { StateBenefitsMozambique } from '../models/phoneix/PhoenixMozambique/StatedBenefits/StateBenefits';
import { StateBenefitsBotswana } from '../models/phoneix/PhoenixBotswana/StatedBenefits/StateBenefits';
import { MachineryBreakDownBotswana } from '../models/phoneix/PhoenixBotswana/MachineryBreakdown/MachineryBreakdown';
import { UmbrellaBotswana } from '../models/phoneix/PhoenixBotswana/Umbrella/Umbrella';
import { GoodsInTransitBotswana } from '../models/phoneix/PhoenixBotswana/GoodsInTransit/GoodsInTransit';
import { FireBotswana } from '../models/phoneix/PhoenixBotswana/Fire/Fire';
import { BuildingCombinedBotswana } from '../models/phoneix/PhoenixBotswana/BuildingCombined/BuildingCombined';
import { PublicLiabilityBotswana } from '../models/phoneix/PhoenixBotswana/publicLiability/PublicLiability';
import { MoneyBotswana } from '../models/phoneix/PhoenixBotswana/Money/Money';
import { PublicLiabilityApiBotswana } from '../models/phoneix/PhoenixBotswana/publicLiability/PublicLiabilityApi';
import { AccidentalDamageBotswanaApi } from '../models/phoneix/PhoenixBotswana/AccidentalDamage/AccidentalDamageApi';
import { EmployersLiabilityApiBotswana } from '../models/phoneix/PhoenixBotswana/EmployersLiability/EmployersliabilityApi';
import { DeteriorationOfStockApiBotswana } from '../models/phoneix/PhoenixBotswana/Deteroitation/DeteroitationApi';
import { OfficeContentsApiBotswana } from '../models/phoneix/PhoenixBotswana/OfficeContents/OfficeContentApi';
import { StatedBenefitsApiBotswana } from '../models/phoneix/PhoenixBotswana/StatedBenefits/StatedBenefitsApi';
import { ElectronicEquipmentApiBotswana } from '../models/phoneix/PhoenixBotswana/ElectronicEquipment/ElectronicEquipmentApi';
import { MachineryBreakdownApiBotswana } from '../models/phoneix/PhoenixBotswana/MachineryBreakdown/MachineryBreakdownApi';
import { UmbrellaApiBotswana } from '../models/phoneix/PhoenixBotswana/Umbrella/umbrellaApi';
import { HouseOwnerApiBotswana } from '../models/phoneix/PhoenixBotswana/HouseOwner/HouseOwnerApi';
import { BuildingCombinedBotswanaApi } from '../models/phoneix/PhoenixBotswana/BuildingCombined/BuildingCombinedApi';
import { FireBotswanaApi } from '../models/phoneix/PhoenixBotswana/Fire/FireApi';
import { AccountsRecievableBotswanaApi } from '../models/phoneix/PhoenixBotswana/AccountsRecievable/AccountsRecievableApi';
import { TheftApiBotswana } from '../models/phoneix/PhoenixBotswana/Theft/TheftApi';
import { GlassApiBotswana } from '../models/phoneix/PhoenixBotswana/Glass/GlassApi';
import { BusinessAllRiskApiBotswana } from '../models/phoneix/PhoenixBotswana/BusinessAllRisk/BusinessAllRiskApi';
import { MoneyApiBotswana } from '../models/phoneix/PhoenixBotswana/Money/MoneyApi';
import { HouseHoldersContentsApiBotswana } from '../models/phoneix/PhoenixBotswana/HouseHolders/HouseHolderApi';
import { GoodsInTransitApiBotswana } from '../models/phoneix/PhoenixBotswana/GoodsInTransit/GoodsInTransitApi';
import { GPAApiBotswana } from '../models/phoneix/PhoenixBotswana/GroupPersonalAccident/GPAApi';
import { GPABotswana } from '../models/phoneix/PhoenixBotswana/GroupPersonalAccident/GPA';
import { GPAMozambique } from '../models/phoneix/PhoenixMozambique/GroupPersonalAccident/GPA';
import { ElectronicEquipmentNamibia } from '../models/phoneix/PhoenixNamibia/ElectronicEquipment/Electronicequipment';
import { ElectronicEquipmentSwaziland } from '../models/phoneix/PhoenixSwazilnd/ElectronicEquipment/Electronicequipment';
import { AccidentalDamageSwaziland } from '../models/phoneix/PhoenixSwazilnd/AccidentalDamage/AccidentalDamage';
import { AccidentalDamageNamibia } from '../models/phoneix/PhoenixNamibia/AccidentalDamage/AccidentalDamage';
import { AccountsRecievableSwaziland } from '../models/phoneix/PhoenixSwazilnd/AccountsRecievable/AccountsRecievable';
import { AccountsRecievableNamibia } from '../models/phoneix/PhoenixNamibia/AccountsRecievable/AccountsRecievable';
import { TheftSwaziland } from '../models/phoneix/PhoenixSwazilnd/Theft/Theft';
import { TheftNamibia } from '../models/phoneix/PhoenixNamibia/Theft/Theft';
import { GlassSwaziland } from '../models/phoneix/PhoenixSwazilnd/Glass/Glass';
import { GlassNamibia } from '../models/phoneix/PhoenixNamibia/Glass/Glass';
import { HouseHoldersContentsSwaziland } from '../models/phoneix/PhoenixSwazilnd/HouseHolders/HouseHolder';
import { HouseHoldersContentsNamibia } from '../models/phoneix/PhoenixNamibia/HouseHolders/HouseHolder';
import { HouseHoldersSwaziland } from '../models/phoneix/PhoenixSwazilnd/HouseHolders/HouseHoldersPhoenix';
import { HouseHoldersNamibia } from '../models/phoneix/PhoenixNamibia/HouseHolders/HouseHoldersPhoenix';
import { FidelitySwaziland } from '../models/phoneix/PhoenixSwazilnd/Fidelity/Fidelity';
import { FidelityNamibia } from '../models/phoneix/PhoenixNamibia/Fidelity/Fidelity';
import { BusinessAllRiskSwaziland } from '../models/phoneix/PhoenixSwazilnd/BusinessAllRisk/BusinessAllRisk';
import { BusinessAllRiskNamibia } from '../models/phoneix/PhoenixNamibia/BusinessAllRisk/BusinessAllRisk';
import { DeteriorationOfStockSwaziland } from '../models/phoneix/PhoenixSwazilnd/Deteroitation/Deteroitation';
import { DeteriorationOfStockNamibia } from '../models/phoneix/PhoenixNamibia/Deteroitation/Deteroitation';
import { OfficeContentsSwaziland } from '../models/phoneix/PhoenixSwazilnd/OfficeContents/OfficeContent';
import { OfficeContentsNamibia } from '../models/phoneix/PhoenixNamibia/OfficeContents/OfficeContent';
import { EmployersLiabilitySwaziland } from '../models/phoneix/PhoenixSwazilnd/EmployersLiability/Employersliability';
import { EmployersLiabilityNamibia } from '../models/phoneix/PhoenixNamibia/EmployersLiability/Employersliability';
import { HouseOwnerSwaziland } from '../models/phoneix/PhoenixSwazilnd/HouseOwner/HouseOwnerPhoenix';
import { HouseOwnerNamibia } from '../models/phoneix/PhoenixNamibia/HouseOwner/HouseOwnerPhoenix';
import { StateBenefitsSwaziland } from '../models/phoneix/PhoenixSwazilnd/StatedBenefits/StateBenefits';
import { StateBenefitsNamibia } from '../models/phoneix/PhoenixNamibia/StatedBenefits/StateBenefits';
import { MachineryBreakDownSwaziland } from '../models/phoneix/PhoenixSwazilnd/MachineryBreakdown/MachineryBreakdown';
import { MachineryBreakDownNamibia } from '../models/phoneix/PhoenixNamibia/MachineryBreakdown/MachineryBreakdown';
import { UmbrellaSwaziland } from '../models/phoneix/PhoenixSwazilnd/Umbrella/Umbrella';
import { UmbrellaNamibia } from '../models/phoneix/PhoenixNamibia/Umbrella/Umbrella';
import { GoodsInTransitSwaziland } from '../models/phoneix/PhoenixSwazilnd/GoodsInTransit/GoodsInTransit';
import { GoodsInTransitNamibia } from '../models/phoneix/PhoenixNamibia/GoodsInTransit/GoodsInTransit';
import { FireSwaziland } from '../models/phoneix/PhoenixSwazilnd/Fire/Fire';
import { FireNamibia } from '../models/phoneix/PhoenixNamibia/Fire/Fire';
import { BuildingCombinedSwaziland } from '../models/phoneix/PhoenixSwazilnd/BuildingCombined/BuildingCombined';
import { BuildingCombinedNamibia } from '../models/phoneix/PhoenixNamibia/BuildingCombined/BuildingCombined';
import { PublicLiabilitySwaziland } from '../models/phoneix/PhoenixSwazilnd/publicLiability/PublicLiability';
import { PublicLiabilityNamibia } from '../models/phoneix/PhoenixNamibia/publicLiability/PublicLiability';
import { MoneySwaziland } from '../models/phoneix/PhoenixSwazilnd/Money/Money';
import { MoneyNamibia } from '../models/phoneix/PhoenixNamibia/Money/Money';
import { PublicLiabilityApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/publicLiability/PublicLiabilityApi';
import { PublicLiabilityApiNamibia } from '../models/phoneix/PhoenixNamibia/publicLiability/PublicLiabilityApi';
import { AccidentalDamageSwazilandApi } from '../models/phoneix/PhoenixSwazilnd/AccidentalDamage/AccidentalDamageApi';
import { AccidentalDamageNamibiaApi } from '../models/phoneix/PhoenixNamibia/AccidentalDamage/AccidentalDamageApi';
import { EmployersLiabilityApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/EmployersLiability/EmployersliabilityApi';
import { EmployersLiabilityApiNamibia } from '../models/phoneix/PhoenixNamibia/EmployersLiability/EmployersliabilityApi';
import { DeteriorationOfStockApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/Deteroitation/DeteroitationApi';
import { DeteriorationOfStockApiNamibia } from '../models/phoneix/PhoenixNamibia/Deteroitation/DeteroitationApi';
import { OfficeContentsApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/OfficeContents/OfficeContentApi';
import { OfficeContentsApiNamibia } from '../models/phoneix/PhoenixNamibia/OfficeContents/OfficeContentApi';
import { StatedBenefitsApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/StatedBenefits/StatedBenefitsApi';
import { StatedBenefitsApiNamibia } from '../models/phoneix/PhoenixNamibia/StatedBenefits/StatedBenefitsApi';
import { ElectronicEquipmentApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/ElectronicEquipment/ElectronicEquipmentApi';
import { ElectronicEquipmentApiNamibia } from '../models/phoneix/PhoenixNamibia/ElectronicEquipment/ElectronicEquipmentApi';
import { MachineryBreakdownApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/MachineryBreakdown/MachineryBreakdownApi';
import { MachineryBreakdownApiNamibia } from '../models/phoneix/PhoenixNamibia/MachineryBreakdown/MachineryBreakdownApi';
import { UmbrellaApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/Umbrella/umbrellaApi';
import { UmbrellaApiNamibia } from '../models/phoneix/PhoenixNamibia/Umbrella/umbrellaApi';
import { HouseOwnerApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/HouseOwner/HouseOwnerApi';
import { HouseOwnerApiNamibia } from '../models/phoneix/PhoenixNamibia/HouseOwner/HouseOwnerApi';
import { BuildingCombinedSwazilandApi } from '../models/phoneix/PhoenixSwazilnd/BuildingCombined/BuildingCombinedApi';
import { BuildingCombinedNamibiaApi } from '../models/phoneix/PhoenixNamibia/BuildingCombined/BuildingCombinedApi';
import { FireSwazilandApi } from '../models/phoneix/PhoenixSwazilnd/Fire/FireApi';
import { FireNamibiaApi } from '../models/phoneix/PhoenixNamibia/Fire/FireApi';
import { AccountsRecievableSwazilandApi } from '../models/phoneix/PhoenixSwazilnd/AccountsRecievable/AccountsRecievableApi';
import { AccountsRecievableNamibiaApi } from '../models/phoneix/PhoenixNamibia/AccountsRecievable/AccountsRecievableApi';
import { TheftApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/Theft/TheftApi';
import { TheftApiNamibia } from '../models/phoneix/PhoenixNamibia/Theft/TheftApi';
import { GlassApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/Glass/GlassApi';
import { GlassApiNamibia } from '../models/phoneix/PhoenixNamibia/Glass/GlassApi';
import { BusinessAllRiskApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/BusinessAllRisk/BusinessAllRiskApi';
import { BusinessAllRiskApiNamibia } from '../models/phoneix/PhoenixNamibia/BusinessAllRisk/BusinessAllRiskApi';
import { MoneyApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/Money/MoneyApi';
import { MoneyApiNamibia } from '../models/phoneix/PhoenixNamibia/Money/MoneyApi';
import { HouseHoldersContentsApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/HouseHolders/HouseHolderApi';
import { HouseHoldersContentsApiNamibia } from '../models/phoneix/PhoenixNamibia/HouseHolders/HouseHolderApi';
import { GoodsInTransitApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/GoodsInTransit/GoodsInTransitApi';
import { GoodsInTransitApiNamibia } from '../models/phoneix/PhoenixNamibia/GoodsInTransit/GoodsInTransitApi';
import { GPAApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/GroupPersonalAccident/GPAApi';
import { GPAApiNamibia } from '../models/phoneix/PhoenixNamibia/GroupPersonalAccident/GPAApi';
import { GPASwaziland } from '../models/phoneix/PhoenixSwazilnd/GroupPersonalAccident/GPA';
import { GPANamibia } from '../models/phoneix/PhoenixNamibia/GroupPersonalAccident/GPA';
import { PersonalAllRiskPhoenix } from '../models/phoneix/PhoenixZambia/PersonalAllRisk/personalRisk';
import { PersonalAllRiskApiPhoenix } from '../models/phoneix/PhoenixZambia/PersonalAllRisk/personalRiskApi';
import { ProfessionalIndemnity } from '../models/Tanzaniya/ProfessionalIntermnity';
import { ContentProfessionalIndermity } from '../models/Tanzaniya/ContentProfessional';
import { GroupPersonalAccident } from '../models/Tanzaniya/GroupPersonalAccident';
import { StockAddOn } from '../models/Tanzaniya/StockAddOn';
import { GoodsInTransitCorporate } from '../models/Tanzaniya/GoodsInTransitCorporate';
import { WorkmenCompensationCorporate } from '../models/Tanzaniya/WorkmenCompensationCorporate';
import { AccountsRecievablePhoenix } from '../models/Tanzaniya/AccountsRecievable';
import { FireAddOn } from '../models/Tanzaniya/FireAddOn';
import { MoneyCorprate } from '../models/Tanzaniya/MoneyCorprate';
import { FireAlliedPerilsBICorporate } from '../models/Tanzaniya/FireAlliedPerilsBICorporate';
import { FireAlliedPerilsCorporate } from '../models/Tanzaniya/FireAlliedPerilsCorporate';
import { BurglaryCorporate } from '../models/Tanzaniya/BurglaryCorporate';
import { MachineryBreakDown } from '../models/Tanzaniya/MachineryBreakdown/machineryBreakdown'; 
import { DomesticServant } from '../models/Tanzaniya/DomesticServant';
import { PublicLiabilityCorporate } from '../models/Tanzaniya/PublicLiabilityCorporate';
import { StockCorporate } from '../models/Tanzaniya/StockCorporate';
import { OfficeContentsCorporate } from '../models/Tanzaniya/OfficeContentsCorporate';
import { PlatinumCorporate } from '../models/Tanzaniya/PlatinumCorporate';
import { AccidentalDamageCorporate } from '../models/Tanzaniya/AccidentalDamageCorporate';
import { PersonalLiability } from '../models/Tanzaniya/PersonalLiability';
import { PersonalAccident } from '../models/Tanzaniya/Domestic/PeronsalAccident/PersonalAccident';
import { PersonalAccidentCorporate } from '../models/Tanzaniya/PersonalAccidentCorporate';
import { GroupPersonalAccidentCorporate } from '../models/Tanzaniya/GroupPersonalAccidentCorporate';
import { BusinessAllRiskCorporates } from '../models/Tanzaniya/BusinessAllRiskCorporates';
import { AllRisk } from '../models/Tanzaniya/AllRisk';
import { ElectronicEquipmentNew } from '../models/Tanzaniya/ElectronicEquipmentNew';
import { HouseHoldContents } from '../models/Tanzaniya/HouseHoldContents';
import { Building } from '../models/Tanzaniya/Building';
import { HealthInsurance } from '../models/Tanzaniya/HealthInsurance';
import { TheftPhoenix } from '../models/phoneix/PhoenixZambia/Theft/Theft';
import { Fidelitytwo } from '../models/Tanzaniya/Fidelitytwo';
import { PublicLiability } from '../models/Tanzaniya/PublicLiablity';
import { FireAlliedPerils } from '../models/Tanzaniya/FireAlliedPerils';
import { EmployersLiabilitytwo } from '../models/Tanzaniya/Employeetwo';
import { Burglary } from '../models/Tanzaniya/Burglary';
import { Money } from '../models/Tanzaniya/Money';
import { BusinessInterruption } from '../models/Tanzaniya/BusinessInterruption';
import { GoodsInTransit } from '../models/Tanzaniya/GoodsInTransit';
import { ConstructionAllRiskPhoenix } from '../models/phoneix/PhoenixZambia/ConstructionAllRisk/constructionAllRisk';
import { EngineeringAllRiskPhoenix } from '../models/phoneix/PhoenixZambia/EngineeringAllRisk/engineeringAllRisk';
import { PersonalAllRiskApiBotswana } from '../models/phoneix/PhoenixBotswana/PersonalAllRisk/personalRiskApi';
import { PersonalAllRiskApiMozambique } from '../models/phoneix/PhoenixMozambique/PersonalAllRisk/personalRiskApi';
import { PersonalAllRiskApiSwaziland } from '../models/phoneix/PhoenixSwazilnd/PersonalAllRisk/personalRiskApi';
import { PersonalAllRiskApiNamibia } from '../models/phoneix/PhoenixNamibia/PersonalAllRisk/personalRiskApi';
import { PersonalAccidentApiPhoenix } from '../models/Tanzaniya/Domestic/PeronsalAccident/PersonalAccidentApi';
import { PersonalLiabilityPhoneix } from '../models/phoneix/PhoenixZambia/PersonalLiability/PersonalLiability';
import { PersonalLiabilityApiPhoenix } from '../models/phoneix/PhoenixZambia/PersonalLiability/PersonalLiabilityApi';
import { ConstructionAllRiskApiPhoenix } from '../models/phoneix/PhoenixZambia/ConstructionAllRisk/constructionAllRiskApi';
import { PackagePlusApiPhoenix } from '../models/Tanzaniya/PackagePlus/PackagePlusApi';
import { EngineeringAllRiskApiPhoenix } from '../models/phoneix/PhoenixZambia/EngineeringAllRisk/engineeringAllRiskApi';
import { ConstructionAllRiskUptoTanzaniya } from '../models/Tanzaniya/ConstructionAllRiskUpto/constructionAllRisk';
import { ConstructionAllRiskUptoApiTanzaniya } from '../models/Tanzaniya/ConstructionAllRiskUpto/constructionAllRiskApi';
import { ConstructionAllRiskAboveTanzaniya } from '../models/Tanzaniya/ConstructionAllRiskAbove/constructionAllRisk';
import { ConstructionAllRiskAboveApiTanzaniya } from '../models/Tanzaniya/ConstructionAllRiskAbove/constructionAllRiskApi';
import { FarmCarePhoenix } from '../models/phoneix/PhoenixZambia/FarmCare/FarmCare';
import { ProfessionalIndemnityPhoenix } from '../models/phoneix/PhoenixZambia/ProfessionalIndeminity/ProfessionalIndeminity';
import { AccidentalDamageCommercialNamibia } from '../models/namibia/CommercialPackagePlus/AccidentalDamage/AccidentalDamage';
import { AccidentalDamageCommercialNamibiaApi } from '../models/namibia/CommercialPackagePlus/AccidentalDamage/AccidentalDamageApi';
import { AccountsRecievableCommercialNamibia } from '../models/namibia/CommercialPackagePlus/AccountsRecievable/AccountsRecievable';
import { BusinessAllRiskCommercialNamibia } from '../models/namibia/CommercialPackagePlus/BusinessAllRisk/BusinessAllRisk';
import { BuildingCombinedCommercialNamibia } from '../models/namibia/CommercialPackagePlus/BuildingCombined/BuildingCombined';
@Component({
  selector: 'app-Riskdetails',
  templateUrl: './Riskdetails.component.html',
  styleUrls: ['./Riskdetails.component.scss']
})
export class RiskDetailsComponent {
  BuildingSuminsured: any = 10; tabIndex: any = 0;
  FireIndustry: any; yearList: any[] = [];
  NatureOfLossList: any[] = []; claimExperienceList: any[] = [];
  FidEmpSiList: any[] = []; sectionView6: boolean = false; columns2: any[] = [];
  sidebarVisible: boolean = false; Buildings: any; fields9: any[] = [];
  requestReferenceNo: any; fields8: any[] = []; fieldsGroupPa: any = null; currentRelationIndex: any;
  wallMaterialList: any[] = []; roofMaterialList: any[] = []; public productItem: ProductData = null
  loginId: any = null; machineries: any[] = []; fields: any[] = []; BuildingUsageList: any[] = [];
  userDetails: any = null; insuranceId: any = null; productId: any = null; TypeOfPropertyss: any[] = [];
  userType: any = null; branchCode: any = null; quoteNo: any = null; chassisNo: any = null; constructionTypes: any[] = [];buildingContactorTypes:any[] = [];
  quoteRefNo: any = null; Section: boolean = false; buildingDetailsSection: boolean = false; claimCostTypes: any[] = [];
  newten: boolean = false; minDate: any = null; maxDate: any = null; accessoriesType: any = null; endorsementCode: any = null;
  endorsementSection: boolean = false; orgPolicyNo: any = null; endorsementId: any = null; actualAssSI: any = null;
  enableFieldsList: any[] = []; enableAllSection: any = null; endorsePolicyNo: any = null; totalAccessoriesSI: any = '0';
  endorseCategory: any = null; endorsementName: any = null; newacc: any = null; serialNoDesc: any = null; sectionDetails: any = null;
  employeeOccupationList: any[] = []; actualAccessoriesSI: any = null; SumInsured: any = null; enableAccessoriesEditSection: boolean = false;
  accessoriesList: any[] = []; currentAccessoriesIndex: any = null; editAccessoriesSection: boolean = false; ChassisList: any[] = [];
  totalAccSIError: any = null; AccLists: any[] = []; CoverList: any[] = []; sumInsuredDetails: any = null; item: any[] = [];
  public AppConfig: any = (Mydatas as any).default; firstLossOptions: any[] = [];
  public ApiUrl1: any = this.AppConfig.ApiUrl1; firstLossPayeeList: any[] = []; filteredGPAList: any[] = [];
  public CommonApiUrl: any = this.AppConfig.CommonApiUrl; firstLossSection: boolean; PersonalLiabiltyPhoenix: boolean; fieldPersonalLiability: any[] = [];
  public motorApiUrl: any = this.AppConfig.MotorApiUrl; loopProductItem: any[] = []; fieldsEARPrimary: any[] = []; fieldsEARAdditional: any[] = []; fieldsEARExtensions: any[] = [];
  contentId: null; buildingSection: boolean = false; fieldsEmployee: any[] = []; fields1: any[] = []; fieldsBAR: any[] = [];
  fields2: any[] = []; fields3: any[] = []; fields4: any[] = []; orginalPolicyNo: any = null; exchangeRate: any = null; pAOccupationError: boolean = false;
  quoteDetails: any = null; Riskdetails: any = null; customerDetails: any; building: any[] = []; plOccupationId: any = ''; pAOccupationId: any = '';
  agencyCode: any = null; applicationId: any = null; issuerSection: boolean = false; customerName: any; plOccupationError: boolean = false;
  accessoriesSection: boolean = false; currentBuildingIndex: any = null; fieldsRisk: any[] = []; CyberItem: any[] = [];
  editBuildingSection: boolean = false; enableBuildingEditSection: boolean = false; fieldsDevice: any[] = []; fieldsElectronic: any[] = [];
  actualFidelitySI: any = null; actualMachinerySI: any = null; actualEmployeeSI: any = null; actualElectronicIntSI: any = null; actualPersonalIntSI: any = null; actualPersonalAccSI: any = null; EquipmentSi: any = null; actualAllRiskSI: any = null; actualContentSI: any = null; actualBuildingSI: any = null; liabilityOccupationId: any;
  liabilityOccupation: any = null; accidentOccupationId: any = null; accidentOccupation: any = null; currencyValue: any = null; showCARExtensions: boolean = false; showEARExtensions: boolean = false;showprofessionalExtensions: boolean = false;
  six: boolean = false; ElectronicList: any[] = []; allriskList: any[] = []; fieldsMachinery: any[] = []; CyperList: any[] = []; fieldsCARPrimary: any[] = []; fieldsCARAdditional: any[] = []; fieldsCARExtensions: any[] = [];
  formSection: boolean = false; viewSection: boolean = false; form: any; field: any[] = []; PersonalAllRiskPhoenix: boolean;
  cyberSectionId: any = null; ten: boolean = false; sumInsured: boolean = false; editContentSection: boolean; fieldsCAR: any[] = []; fieldsEAR: any[] = [];fieldsCARupto: any[] = [];fieldsCARPrimaryupto: any[] = [];
  fieldss: any[] = []; first: boolean = false; fieldsContent: any[] = []; eight: boolean = false; questionSection: boolean = false; ConstructionAllRiskPhoenix: boolean;
  EngineeringAllRiskPhoenix: boolean;ConstructionAllRiskUptoTanzaniya:boolean;ConstructionAllRiskAboveTanzaniya:boolean;
  fieldsPersonalAccident: any; second: boolean = false; third: boolean = false; fieldFEFields: any[] = [];
  contentRiskDesc: any = ''; dropList: any[] = []; endorsementDetails: any = null; countryList: any[] = [];
  fifth: boolean = false; seven: boolean = false; fieldsEmpFields: any[] = []; selectedTab: any = 0;
  promocode: any = null; customerCode: any = null; relationList: any[] = []; ElectronicEquipmentPhoenix: boolean = false;
  fieldsPersonalInd: any[] = []; monthList: any[] = []; employeeList: any[] = []; Cotentrisk: any[] = [];
  SectionId: any = null; fidelityList: any[] = []; originalFidelityList: any[]; contentRiskSection: boolean = false;
  currentContentIndex: number; enableContentEditSection: boolean = false; LocationId: any; contentSI: any = '0';
  nine: boolean = false; risk: any = null; originalEmployeeList: any[] = []; LocationList: any[] = []; fourth: boolean = false;
  fidelityOccupationList: any[] = []; occupationList: any[] = []; enableEmployeeUploadSection: boolean = false;
  subuserType: string; selectedIndex: number = 0; sectionView7: boolean = false; fieldEE: any[] = []; ExtensList: any[] = [];yesNoList: any[]=[];
  SIColumnHeader: any[] = []; IndemityRevenue: FormlyFieldConfig[]; EValue: any = 'N';yesNoValue: any = 'N'; GeneralLiabilityList: any[] = []; genaralField: FormlyFieldConfig[]; ExtendsFields: FormlyFieldConfig[]; LiabilityLegalList: any[] = [];
  ArrestList: any[] = []; ExtendsList: any[] = []; EmloyersLiabilityPhoenix: boolean = false;
  StateBenefits: FormlyFieldConfig[]; phonixWeeks: any[] = []; showAddForm: boolean = false;
  GroupPersonalForm: any; GPAList: any[] = []; GPAcolumns: string[] = [];
  endorsementDate: any = null; endorsementEffectiveDate: any = null; brokerCode: any = null;
  endorsementType: any = null; endorsementRemarks: any = null;
  endorsementTypeDesc: any = null; endtCategoryDesc: any = null;
  endtCount: any = null; endtPrevPolicyNo: any = null; isEditing: boolean = false; editingIndex: number = null;
  endtStatus: any = null; endtPrevQuoteNo: any = null; isFinanceEndt: any = null;
  IndustryId: string; policyStartDate: any; sectionDropdownList: any[] = [];
  policyEndDate: any; currencyCode: any; currentStatus: any = "Y"; GroupListNew: any[] = []; brokerbranchCode: any; tab: FormlyFieldTabs = new FormlyFieldTabs();
  commonDetails: any; uwQuestionList: any[] = []; listSectionGroup: boolean;
  listnGroup: boolean; CustomerReferenceNo: any; endorseEffectiveDate: any; endorseCoverModification: any = null;
  NewSection: any; dobminDate: Date; newselectedIndex: number; ProfessionalTypes: any[] = []; IndimnityTypes: any[] = [];
  nextslide: boolean = false; nextslide1: boolean = false; nextslide2: boolean = false; nextslide3: boolean = false;
  nextslide4: boolean = false; ProductCode: any = "68";
  showSection: boolean = false; showsection: boolean = false; Building: boolean = false; Content: boolean = false; AllRisk: boolean = false;
  Building1: boolean = false; PersonalAccident: boolean = false; personalIndemity: boolean = false; sectionCount: number; currentContentRowIndex = null;
  currentBuildingRowIndex = null; coversreuired: any; commonSectionList: any;
  noOfDays: number; visible: boolean = false; visibleBuilding: boolean = false; columnHeader: any; buildingEditSection: boolean = false;
  TableRow: any[]; Total: any; columnHeaderBuilding: string[]; TableRowBuilding: any[] = [];
  fieldsBuilding: FormlyFieldConfig<import("@ngx-formly/core").FormlyFieldProps & { [additionalProperties: string]: any; }>;
  columnHeaderAllRisk: string[]; TableRowAllRisk: any[] = []; visibleAllRisk: boolean = false;
  currentAllRiskRowIndex = null; getLocationName: any; LocationName: any[] = []; contentSection: boolean; buildingColumnHeader: any[];
  locationList: any[] = []; personalLiabilityDialog: boolean = false; LocationHeader: any[] = []
  columnHeaderPersonalLiability: any[] = []; currentPLRowIndex: any = 0; TableRowPL: any[] = [];
  personalAccidentDialog: boolean = false; columnHeaderPersonalAccident: any[] = [];
  TableRowPA: any[] = []; countryId: any = null; currentPARowIndex: any = 0; ElecEquipment: boolean = false;
  fields6: any[] = []; electronicEquipDialog: boolean = false; currentEERiskRowIndex: any = null;
  TableRowEE: any[] = []; DomesticServant: boolean = false; currentDSRowIndex: any = null; TableRowDS: any[] = [];
  fields7: any[] = []; locationIndex: any = 0; domesticServantDialog: boolean; bankList: any[] = [];
  servantTypeList: any[] = []; lang: any = null; columns: any[] = [];
  coversRequired: any = 'C'; BuildingOwnerYn: any = 'N'; GoodsTransitextentionsField: any;
  GoodsTransitFields: any;
  fields10: any[] = []; equipmentList: any[] = [];
  field1Build: any[] = []; fieldContent: any[] = []; fieldPlant: any[] = []; fieldTrade: any[] = []; fieldMiscellaneous: any[] = []; fieldPowerSurge: any[] = []; fieldLeakage: any[] = []; fieldHailDamage: any[] = []; fieldRent: any[] = []; fieldInflation: any[] = []; fieldGeyser: any[] = []; phonixWallType: any[] = []; phonixInfalation: any[] = []; phonixLeakage: any[] = [];
  fireCoverList: any[] = [];
  fields11: any[] = []; fields12: any[] = []; fields13: any[] = []; fields14: any[] = []; fields20: any[] = []; fields21: any[] = [];
  currentIndex: any; fields22: any[] = [];
  BuildingPhoenix: boolean = false; ContentPhoenix: boolean = false; GeyserPhoenix: boolean = false; HailPhoenix: boolean = false; LeakagePhoenix: boolean = false;
  MiscellaneousPhoenix: boolean = false; PlantMachineryPhoenix: boolean;
  PowerSurgePhoenix: boolean; RentRecievablePhoenix: boolean;
  StockInTradePhoenix: boolean; InflationPhoenix: boolean;
  fields1Build: any; ClaimsPreparationPhoenix: boolean;
  fieldClaimPreparation: any[] = []; fieldLiability: any[] = [];
  LiabilityPhoenix: boolean; ThirdAspectPhoenix: boolean; OfficeContentsPhoenix: boolean;
  WaterLeakagePhoenix: boolean; AdditionalClaimsPhoenix: boolean;
  LiabilityLossPhoenix: boolean; BuildingSIError: boolean = false;
  fieldOfficeContents: any[] = [];
  fieldThirdAspect: any[] = []; ModeOfTransportList: any[] = [];
  fieldLiabilityLoss: any[] = []; GoodsContentList: any[] = [];
  fieldAdditionalClaims: any[] = []; BIFireContentList: any[] = [];
  fieldWaterLeakage: any[] = []; fireCorpList: any[] = []; fireContentList: any[] = [];
  machineryContentList: any[] = []; coveringDetailsError: boolean = false; DescriptionRiskError: boolean = false;
  fidelityContentList: { label: string; value: any; Code: any; CodeDesc: string; }[];
  burglaryFirlossList: any; industryTypeList: any[] = []; fieldHouseHolders: any[] = [];
  BILossRatioList: any[] = []; publicLiabilityList: any[] = [];
  fields15: any[] = []; fields16: any[] = [];
  groupPeriodList: { label: string; value: any; Code: any; CodeDesc: string; }[];
  fields17: any[] = []; fields18: any[] = []; fields19: any[] = [];
  SectionSelectYn: any = 'FC';
  sectionView1: boolean = true; sectionView2: boolean = false;
  sectionView3: boolean = false; sectionView4: boolean = false;
  sectionView5: boolean = false; BIFireListError: boolean = false;
  CorpErrorMessage: any;
  BIFireListError1: boolean = false; isSumInsuredEnabled: boolean = false;
  BurglarySIError: boolean = false; isBurglarySIEnabled: boolean = false;
  FireIndustryList: any[] = []; industryOcupationList: any[] = [];
  fieldsStock: any[] = []; fieldsFireAddon: any[] = [];
  fieldsStockAddon: any[] = []; addOnCoverList: any[] = [];
  selectedCurrency: any; stockAddOnCoverList: any[] = [];
  PackageCategoryId: any; PackageIndustryType: any;
  IndustryError1: boolean = false; IndustryError2: boolean = false;
  AccidentalDamagePhoenix: boolean = false; TheftPhoenix: boolean = false;
  fieldAccidentalDamage: any[] = []; AccountsRecievablePhoenix: boolean = false;
  fieldAccountsRecievable: any[] = []; StateBenefitsPhoenix: boolean = false;
  GlassPhoenix: boolean; fieldGlass: any[] = []; PlateGlassType: any[] = [];
  GoodsUsageList: any[] = []; GoodsOccupationList: any[] = []; fieldUmbrella: any[] = [];
  fieldStateBenefits: any[] = []; fieldTheft: any[] = [];
  finalizeYN: any = null; AllRiskPhoenix: boolean = false;
  UmbrellaPhoenix: boolean = false;
  MoneyPhoenix: boolean = false;
  fieldMoney: any[] = [];
  fieldAllRisk: any[] = [];
  PublicLiabilityPhoenix: boolean = false;
  fieldPublicLiability: any[] = [];
  GroupPersonalPhoenix: boolean = false;
  fieldGroupPA: any[] = []; BIPhoenix: boolean; fieldBI: any[] = []; GoodsTransitPhoenix: boolean = false; fieldGoodsTransit: any[] = [];
  HouseHoldersPhoenix: boolean; FirePhoenix: boolean = false; MotorPhoenix: boolean = false; fieldFire: any[] = []; fieldMotor: any[] = [];
  categoryList: any[] = []; buildingUsageList: { CodeDesc: string; Code: any; }[];
  fieldEmployeePhoenix: any[] = []; EmployeePhoenix: boolean = false; FidelityPhoenix: boolean = false;
  fieldFidelityPhoenix: any[] = []; HouseOwnerPhoenix: boolean = false; fieldHouseOwnerPhoenix: any[] = [];
  DetoriationPhoenix: boolean = false; listIndex: number = 0;
  fieldDetoriationPhoenix: any[] = []; domesticMenus: any; currentDomestic: string; packageplusMenus: any; currentPackagePlus: string;
  count: any = 0; MachineryPhoenix: boolean = false; fieldMachineryPhoenix: any[] = [];commercialpackageplusMenus:any;
  geyserTypeList: any[] = []; inflationList: any[] = []; BusinessInteruptionList: any[] = [];currentCommercial:string;
  claimCostList: any[] = []; BusinessInteruptionValue: any = 'N';
  moneyLockerList: any[] = []; groupedFields: any[] = [];
  showInterruptions: boolean = false; interruptionfields: any[] = [];
  showExtensionToggle: boolean = false; BIValue: any = 'N';
  showExtensions: boolean = false; policyfields: FormlyFieldConfig[];
  primaryfields: any[] = []; fireLeakage: any[] = [];
  ExtensFields: any[] = []; extensionfields: any[] = [];
  extensionTablefields: any[] = []; policyItem: any; BIList: any[] = []; UtilitiesList: any[] = [];
  suppliersList: any[] = []; fieldEmployersLiailityPhoenix: any[] = [];
  HouseownerPhoenixTable: any[] = []; fidelityForm: FormGroup;ProfessionalIndeminityForm: FormGroup;
  fieldStateBenefitsPhoenix: any[] = [];allRiskForm: FormGroup;
  fieldMachineryBreakDownPhoenix: any[] = [];
  fieldHouseHoldersPhoenix: any[] = [];
  HouseHoldersPhoenixTable1: any[];
  StateBenefitsPhoenixTable: any[];
  MachineryBreakDownPhoenixTable: any[]; firstLossColumns: any[] = [];
  MachineryBreakDownPhoenix: boolean; industryError: boolean = false;
  BuildingCombinedPhoenix: boolean; BussinessAllRiskPhoenix: boolean = false; UmbrellaPhoenixTable: any
  @ViewChild('formDirective') ngForm;
  model = {
    contents: [{}] as any,
    employers: [{}] as any,
    indeminity: [{}] as any
  };
  fieldHouseHolderContents: any[] = [];
  options: FormlyFormOptions = {}; deteriorationOfStockError: boolean = false; deteriorationOfStockDescError: boolean = false;
  showMaxLimitError: boolean;showMaxLimitedError:boolean;showMonthsError:boolean;
  BurglarySiError: boolean;
  constructor(private router: Router, private datePipe: DatePipe, private translate: TranslateService, private fb: FormBuilder,
    private appComp: AppComponent, private sharedService: SharedService, public http: HttpClient, private repeatService: RepeatService) {
    let homeObj = JSON.parse(sessionStorage.getItem('homeCommonDetails') || null);
    this.coversreuired = sessionStorage.getItem('coversRequired');
    this.userDetails = JSON.parse(sessionStorage.getItem('Userdetails'));
    this.insuranceId = this.userDetails.Result.InsuranceId;
    this.loginId = this.userDetails.Result.LoginId;
    this.productId = this.userDetails.Result.ProductId;
    this.userType = this.userDetails?.Result?.UserType;
    this.branchCode = this.userDetails.Result.BranchCode;
    this.agencyCode = this.userDetails.Result.OaCode;
    this.countryId = this.userDetails.Result.CountryId;
    this.brokerbranchCode = this.userDetails.Result.BrokerBranchCode;
    this.branchCode = this.userDetails.Result.BranchCode;
    this.fidelityForm = this.fb.group({ fidelitys: this.fb.array([]) });
    this.allRiskForm = this.fb.group({ allRisk: this.fb.array([]) });
    this.ProfessionalIndeminityForm = this.fb.group({ ProfessionalIndeminity: this.fb.array([]) });
    if (homeObj != null) this.selectedCurrency = homeObj[0].Currency;
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    this.quoteNo = quoteNo;
    this.productItem = new ProductData();
    let referenceNo = sessionStorage.getItem('quoteReferenceNo');
    if (referenceNo) { this.quoteRefNo = referenceNo; this.Section = false; }
    if (this.productId == '5' || this.productId == '29') { this.buildingDetailsSection = false; }
    else if (this.productId != '43') { this.buildingDetailsSection = true; }
    if (this.productId == '43') { this.newten = true; }
    this.currencyCode = this.userDetails.Result.CurrencyId;
    let referenceo = sessionStorage.getItem('quoteReferenceNo');
    if (referenceo) {
      this.requestReferenceNo = referenceo;
    }
    this.buildingColumnHeader = ['Location', 'Address', 'Delete']
    this.LocationHeader = ['LocationName', 'Delete']
    this.SIColumnHeader = ['Location', 'Building SI', 'Content SI', 'All Risk SI', 'Personal Liability SI', 'Personal Accident SI', 'Domestic Servant SI']
    this.columns2 = ['Year', 'Nature Of Loss', 'Date Of Loss', 'Amount Claimed', 'Remarks', 'Delete'];
    this.firstLossOptions = [
      { "CodeDesc": "Yes", "Code": "Y" }, { "CodeDesc": "No", "Code": "N" }
    ];
    this.ModeOfTransportList = [
      { "Code": null, "CodeDesc": "--Select--" },
      { "Code": '1', "CodeDesc": "BY SEA" },
      { "Code": '2', "CodeDesc": "BY ROAD" },
    ]
    this.BusinessInteruptionList = [{ Code: 'N', CodeDesc: 'No' },
    { Code: 'Y', CodeDesc: 'Yes' },]
    this.ExtensList = [
      { Code: 'Y', CodeDesc: 'Yes' }, { Code: 'N', CodeDesc: 'No' },]
    this.yesNoList = [
      { Code: 'Y', CodeDesc: 'Yes' }, { Code: 'N', CodeDesc: 'No' },]
  }
  ngOnInit() {
    this.form = this.fb.group({
      rows: this.fb.array([])  // Initially empty array for rows
    });
    this.yearList = this.getYearList();
    sessionStorage.setItem('ApiCall', 'true')
    let referenceNo = sessionStorage.getItem('quoteReferenceNo');
    //this.fourth=false;
    if (referenceNo) {
      this.quoteRefNo = referenceNo;
      this.Section = false;
    }
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    this.minDate = new Date(year - 18, month, day - 1);
    //this.getdropList();
    this.getCountryList();
    this.contentSection = true; this.getAddInfo()
    this.GPAcolumns = ['Occupation', 'No of Employees', 'Annual Remuneration', 'Temporary Disablement', 'Coverage', 'Medical Expenses', 'Actions'];
    this.buildingColumnHeader = ['Location', 'Address', 'Delete']
    this.columnHeader = ['Location *', 'Content Type *', 'Serial No', 'Description', 'Sum Insured *', 'Edit', 'Delete']
    this.TableRow = [{
      LocationName: '',
      id: 1,
      ItemId: '',
      Content: '',
      SerialNoDesc: '',
      ContentRiskDesc: '',
      SumInsured: 0,
    }]
    this.columnHeaderPersonalLiability = ['Location *', 'Occupation *', 'Name *', 'Date Of Birth *', 'Salary *', 'Edit', 'Delete'];
    this.columnHeaderPersonalAccident = ['Location *', 'Occupation *', 'Name *', 'Date Of Birth *', 'Salary *', 'Edit', 'Delete'];
    this.columnHeaderBuilding = ['Construction (Wall)', 'Construction (Roof)', 'First Loss Payee', 'Sum Insured', 'Description']
    this.TableRowBuilding = [{
      id: 1,
      BuildingUsageId: '',
      BuildingBuildYear: '',
      BuildingAddress: '',
      FirstLossPayee: '',
      WallType: '',
      RoofType: '',
      BuildingSumInsured: 0,
      //LocationName: '',
    }]
    this.firstLossColumns = ['Payee Name']
    this.columnHeaderAllRisk = ['Location', 'Content Type', 'Serial No', 'Description', 'Sum Insured', 'Edit', 'Delete']
    this.TableRowAllRisk = [{
      id: 1,
      ItemId: '',
      Content: '',
      Serial: '',
      Description: '',
      SumInsured: 0,
    }];
    this.TableRowEE = [{
      id: 1,
      ItemId: '',
      Content: '',
      Serial: '',
      Description: '',
      SumInsured: 0,
    }];
    this.TableRowPL = [{
      id: 1,
      OccupationId: '',
      RiskId: '',
      Name: '',
      Nationality: this.countryId,
      Dob: '',
      SerialNo: '',
      SumInsured: 0,
    }]
    this.TableRowDS = [{
      id: 1,
      OccupationId: '',
      RiskId: '',
      Name: '',
      Nationality: this.countryId,
      Dob: '',
      SerialNo: '',
      SumInsured: 0,
    }]
    this.TableRowPA = [{
      id: 1,
      OccupationId: '',
      RiskId: '',
      Name: '',
      Nationality: this.countryId,
      Dob: '',
      SerialNo: '',
      SumInsured: 0,
    }]
    this.currentContentRowIndex = 0;
    this.currentBuildingRowIndex = 0;
    this.currentAllRiskRowIndex = 0;
    this.currentEERiskRowIndex = 0;
    this.currentDSRowIndex = 0;
    this.sumInsured = false;

    this.productItem = new ProductData();
    if(this.productId=='79' || this.productId=='84' || this.productId=='82' || this.productId=='83'){
      if(!this.requestReferenceNo){
        sessionStorage.removeItem('EngineerInfo');
      }
    }
    if (this.requestReferenceNo != null && (this.productId == '59' || this.productId == '19' || this.productId == '66' || this.productId == '67' || this.productId == '68' || this.productId == '69' || this.productId == '70' || this.productId == '71' || this.productId == '72' || this.productId == '75' || this.productId == '49' || this.productId == '14' || this.productId == '32' || this.productId == '39' || this.productId == '73' || this.productId == '74' || this.productId == '76' || this.productId == '25' || this.productId == '16' || this.productId == '26' || this.productId == '27' || this.productId == '57' || this.productId == '48' || this.productId == '78' || this.productId == '77' || this.productId == '80' || this.productId == '81' || this.productId=='79' || this.productId=='84' || this.productId=='82' || this.productId=='83')) {
      if (this.productId == '19') this.getAddOnCoverList();
      if (this.productId == '19') this.getStockAddOnCoverList();
      this.getLocationDetails();
      this.getFireIndustry();
    }
    else if (this.productId == '59') {
     
      let details = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
      if (details) {
        this.locationList = [{
          "LocationId": 1, "LocationName": "", "CoversRequired": "BC", "BuildingOwnerYn": "Y",
          "BuildingList": [{ "WallType": "", "RoofType": "", "FirstLossPayee": "", "BuildingSumInsured": "", "BuildingDescription": "" }], "BuildingAddress": "",
          "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }],
          "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }]
        }]
        this.editsections('Content'); this.editsections('Building'); this.editsections('ElectronicEquipment');
        this.editsections('AllRisk'); this.editsections('PersonalLiability'); this.editsections('PersonalAccident');
        this.editsections('DomesticServant'); this.editsections('Fidelity')
        // let sectionIDs:any[] = details[0].SectionId;
        // this.Content = sectionIDs.some(ele=>ele=='47');
        // if(this.Content) 
        // this.Building1 = sectionIDs.some(ele=>ele=='1');
        // if(this.Building1) 
        // this.ElecEquipment = sectionIDs.some(ele=>ele=='76');
        // if(this.ElecEquipment) 
        // this.AllRisk = sectionIDs.some(ele=>ele=='3');
        // if(this.AllRisk) 
        // this.personalIndemity = sectionIDs.some(ele=>ele=='35');
        // if(this.personalIndemity) 
        // this.PersonalAccident = sectionIDs.some(ele=>ele=='36');
        // if(this.PersonalAccident) 
        // this.DomesticServant = sectionIDs.some(ele=>ele=='106');
        // if(this.DomesticServant) 
      }
    }
    else if (this.productId == '19' && this.insuranceId !='100050') {


      let details = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
      if (details) {
        this.locationList = [
          {
            "LocationId": 1, "LocationName": '', "CoversRequired": 'BC', "BuildingOwnerYn": 'Y',
            "BuildingAddress": null, "BuildingList": [{ "WallType": null, "RoofType": null, "FirstLossPayee": null, "BuildingSumInsured": 0 }], "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ContentId': null, 'ContentDesc': null, 'SumInsured': null, 'SerialNo': null }], "WorkmenList": [{ 'OccupationId': null, 'SumInsured': null }],
            "LiabilityList": [{ 'CategoryId': null, 'SumInsured': null }], "StockAddOnList": [{ "CoverId": null, "SumInsured": 0 }], "FireAddOnList": [{ "CoverId": null, "SumInsured": 0 }], "FireList": [{ "BuildingUsageId": null, "WallType": null, "RoofType": null, "SumInsured": null }], "BIFireList": [{ "ContentId": null, "SumInsured": null, "IndemityPeriod": "", "IndemityPeriodDesc": null }], "GoodsTransitList": [{ "ContentId": null, "SumInsured": null, "ModeOfTransport": null }], "MachineryList": [{ 'ContentId': null, 'ContentDesc': null, 'CategoryId': null, 'SumInsured': null, 'SerialNo': null }],
            "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }],
            "FidelityList": [{ 'OccupationId': null, "FidEmpCount": null, 'SumInsured': null }], "GeyserList": [{ "BuildingUsageId": null, "SumInsured": 0 }],
            "TableRowAllRisk": [{ "ItemId": '', "Content": '', "Serial": '', "Description": '', "SumInsured": 0, }],
            "GPAList": [{ 'OccupationType': null, "Count": null, 'IndemnityTypeDesc': null, 'SumInsured': null }],
          }
        ]

        this.editsections('Content'); this.editsections('Building'); this.editsections('ElectronicEquipment'); this.editsections('GroupPersonalAccidentCorporate')
        this.editsections('AllRisk'); this.editsections('PublicLiabilityCorporate'); this.editsections('PersonalAccidentCorporate');
        this.editsections('DomesticServant'); this.editsections('MacineryBreakdown'); this.editsections('Burglary'); this.editsections('AccidentalDamageCorporate');
        this.editsections('Fire'); this.editsections('FireAddOn'); this.editsections('StockAddOn'); this.editsections('FireBI'); this.editsections('Money'); this.editsections('Fidelity'); this.editsections('OfficeContentsCorporate'); this.editsections('StockCorporate'); this.editsections('PlatinumCorporate');
        this.editsections('GoodsTransit'); this.editsections('WorkmensCompensation')
        // let sectionIDs:any[] = details[0].SectionId;
        // this.Content = sectionIDs.some(ele=>ele=='47');
        // if(this.Content) 
        // this.Building1 = sectionIDs.some(ele=>ele=='1');
        // if(this.Building1) 
        // this.ElecEquipment = sectionIDs.some(ele=>ele=='76');
        // if(this.ElecEquipment) 
        // this.AllRisk = sectionIDs.some(ele=>ele=='3');
        // if(this.AllRisk) 
        // this.personalIndemity = sectionIDs.some(ele=>ele=='35');
        // if(this.personalIndemity) 
        // this.PersonalAccident = sectionIDs.some(ele=>ele=='36');
        // if(this.PersonalAccident) 
        // this.DomesticServant = sectionIDs.some(ele=>ele=='106');
        // if(this.DomesticServant) 
      }
    }
    if (this.productId == '19' && this.insuranceId =='100050') {
      this.getFireIndustry();
      let details = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
      if (details) {
        this.locationList = [
          {
            "LocationId": 1, "LocationName": '', "CoversRequired": 'BC', "BuildingOwnerYn": 'Y',
            "BuildingAddress": null, "BuildingList": [{ "WallType": null, "RoofType": null, "FirstLossPayee": null, "BuildingSumInsured": 0 }], "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ContentId': null, 'ContentDesc': null, 'SumInsured': null, 'SerialNo': null }], "WorkmenList": [{ 'OccupationId': null, 'SumInsured': null }],
            "LiabilityList": [{ 'CategoryId': null, 'SumInsured': null }], "StockAddOnList": [{ "CoverId": null, "SumInsured": 0 }], "FireAddOnList": [{ "CoverId": null, "SumInsured": 0 }], "FireList": [{ "BuildingUsageId": null, "WallType": null, "RoofType": null, "SumInsured": null }], "BIFireList": [{ "ContentId": null, "SumInsured": null, "IndemityPeriod": "", "IndemityPeriodDesc": null }], "GoodsTransitList": [{ "ContentId": null, "SumInsured": null, "ModeOfTransport": null }], "MachineryList": [{ 'ContentId': null, 'ContentDesc': null, 'CategoryId': null, 'SumInsured': null, 'SerialNo': null }],
            "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }],
            "FidelityList": [{ 'OccupationId': null, "FidEmpCount": null, 'SumInsured': null }], "GeyserList": [{ "BuildingUsageId": null, "SumInsured": 0 }],
            "TableRowAllRisk": [{ "ItemId": '', "Content": '', "Serial": '', "Description": '', "SumInsured": 0, }],
            "GPAList": [{ 'OccupationType': null, "Count": null, 'IndemnityTypeDesc': null, 'SumInsured': null }],
          }
        ]

        this.editsections('AccidentalDamage'); this.editsections('Accounts Recievable');this.editsections('Business All Risk');
        this.editsections('BuildingCombined'); this.editsections('ElectronicEquipment'); this.editsections('GroupPersonalAccidentCorporate')
        // this.editsections('AllRisk'); this.editsections('PublicLiabilityCorporate'); this.editsections('PersonalAccidentCorporate');
        // this.editsections('DomesticServant'); this.editsections('MacineryBreakdown'); this.editsections('Burglary'); this.editsections('AccidentalDamageCorporate');
        // this.editsections('Fire'); this.editsections('FireAddOn'); this.editsections('StockAddOn'); this.editsections('FireBI'); this.editsections('Money'); this.editsections('Fidelity'); this.editsections('OfficeContentsCorporate'); this.editsections('StockCorporate'); this.editsections('PlatinumCorporate');
        // this.editsections('GoodsTransit'); this.editsections('WorkmensCompensation')
       
      }
    }
    if (this.insuranceId == '100046' || this.insuranceId == '100047' || this.insuranceId == '100048' || this.insuranceId == '100049' || (this.insuranceId == '100050' && this.productId !='19') || this.insuranceId == '100002') {
      this.getIndustryList();
    }
    if (this.productId == '63') {
      if (this.requestReferenceNo) {
        this.getLocationDetails();
      }
      else {
        this.LocationName = [
          {
            "OriginalRiskId": null, "LocationId": "1", "LocationName": "", "BuildingType": null, "BuildingSI": null, "ContentSI": null, 'AllRiskSI': null,
            "ServantList": [{ "ServantType": null, 'ServantCount': null, 'ServantSI': null }],
            "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }],
            "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }],
            'PersonalLiabilitySI': null, 'ServantType': null, 'ServantCount': null, 'ServantSI': null, 'RelationType': null, 'DeathSI': null
          }
        ]
      }
      if (this.productId != '78') this.getConstructionTypeList();
      this.getDomesticServantList();
      this.getRelationShipList();
    }
    if (this.productId == '24') {
      this.getCommonDetails();
      this.getSectionList(null);
      this.getContentDetails('Content');
      this.getAllRiskDetails('AllRisk');
    }

    if (this.productId == '57' && this.insuranceId != '100046' && this.insuranceId != '100047' && this.insuranceId != '100048' && this.insuranceId != '100049' && this.insuranceId != '100050') {
      //let fireData = new EmployersLiability();
      let fireData = new GroupPersonalAccident();
      let entry = [];
      let fields: any = fireData?.fields;
      console.log('Fieldssssssssss', fields);
      //fields[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = defaultObj.concat(this.occupationList);


      this.fieldsGroupPa = fields;
      let referenceNo = sessionStorage.getItem('quoteReferenceNo');
      if (referenceNo) {
        this.requestReferenceNo = referenceNo;
        this.getSectionList(null);
        this.setCommonFormValues();
        this.productItem = new ProductData();
      }
      else {
        this.getSectionList(null);
        this.productItem = new ProductData();
        this.formSection = true; this.viewSection = false;
      }
    }

    if (this.productId == '56') {
      let referenceNo = sessionStorage.getItem('quoteReferenceNo');
      if (referenceNo) {
        this.requestReferenceNo = referenceNo;
        this.getCommonnDetails();
        this.getSectionList(null);
        this.getCommonDetails();
      }
      else {

        this.AddNewFunc();
        this.getSectionList(null);
        this.getCommonDetails();
        // this.productItem.patientList = [
        //   {
        //     "CreatedBy": this.loginId,
        //     "RiskId": null,
        //     "RelationType": '1',
        //     "RelationTypeDesc": null,
        //     "DateOfBirth": null
        //   }
        // ]
        this.getRelationTypeList('direct');
        this.formSection = true; this.viewSection = false;
        this.showSection = true;
      }
    }
    if (this.productId == '60') {
      // this.getEditDetails();
      this.getCommonDetails();
      this.getdetails();
      this.getProfessional();

    }
    else if (((this.productId == '66' || this.productId == '67' || this.productId == '68' || this.productId == '69' || this.productId == '70') || this.productId == '71' || this.productId == '72' || this.productId == '75' || this.productId == '49' || this.productId == '14' || this.productId == '32' || this.productId == '39' || this.productId == '73' || this.productId == '74' || this.productId == '76' || this.productId == '25' || this.productId == '16' || this.productId == '26' || this.productId == '57' || this.productId == '48' || this.productId == '78' || this.productId == '27' || this.productId == '77' || this.productId == '80' || this.productId == '79' || this.productId == '84' || this.productId == '81' || this.productId =='82' || this.productId=='83' || this.productId=='59' || (this.productId=='19' && this.insuranceId=='100050')) && !this.quoteRefNo) {
      this.getSectionList(null);
      // this.editsections('Content');this.editsections('Building');this.editsections('Inflation');
      // this.editsections('Plant');this.editsections('Trade'); this.editsections('Miscellaneous');
      // this.editsections('Powersurge');this.editsections('Leakage'); this.editsections('HailDamage');
      // this.editsections('Rent');this.editsections('Geyser');
      this.productItem.InflationSumInsured = '0';
    }

    //this.editsections();


    this.Buildings = sessionStorage.getItem('Buildings');
    this.formSection = true; this.viewSection = false;
    if (this.productId != '14' && this.productId != '32')
      //   this.getOccupationList(null);
      //   this.getEditQuoteDetails();
      var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    this.minDate = new Date(year - 18, month, day - 1);
    this.maxDate = new Date();

    if (sessionStorage.getItem('endorsePolicyNo')) {
      this.endorsementSection = true;
      let endorseObj = JSON.parse(sessionStorage.getItem('endorseTypeId'))
      if (endorseObj) {
        this.orgPolicyNo = sessionStorage.getItem('endorsePolicyNo')
        this.endorsementId = endorseObj.EndtTypeId;
        this.endorsementCode = endorseObj.EndtShortCode;
        this.enableFieldsList = endorseObj.FieldsAllowed;
        let enableAllSection = this.enableFieldsList.some(ele => ele == 'domesticRiskDetails' || ele == 'AddCovers' || ele == 'AccessoriesSI');
        if (enableAllSection) this.enableAllSection = true;
        else this.enableAllSection = false;
        this.endorsePolicyNo = endorseObj?.PolicyNo;
        this.endorseCategory = endorseObj.Category;
        this.endorsementName = endorseObj?.EndtName;
        this.endorseCoverModification = endorseObj?.CoverModificationYn;
        this.endorseEffectiveDate = endorseObj?.EffectiveDate;
        // if(this.endorsementId!=42 && this.endorsementId!=842){
        //     this.enableFieldName = this.enableFieldsList.some(ele=>ele=='InsuranceType');
        // }
      }
    }
    this.appComp.getLanguage().subscribe((res: any) => {
      if (res) this.lang = res;
      else this.lang = 'en';
      this.translate.setDefaultLang(this.lang); this.checkFieldNames();
    });
    if (!this.lang) {
      if (sessionStorage.getItem('language')) this.lang = sessionStorage.getItem('language');
      else this.lang = 'en';
      sessionStorage.setItem('language', this.lang); this.checkFieldNames();
      this.translate.setDefaultLang(sessionStorage.getItem('language'));
    }
    this.getUWDetails();
    this.claimExperienceList = [
      {
        "CLHDateOfLoss": null,
        "CLHNatureOfLoss": null,
        "CLHClaimedAmount": null,
        "CLHClaimYear": null,
        "CLHRemarks": null
      }
    ];
    if (this.quoteRefNo) this.getAllClaimHistoryDetails();
    //this.getSumInsuredDetails();
    this.domesticMenus = [{ menu: 'BuildingDetails', filled: false }, { menu: 'ContentRisk', filled: false }, { menu: 'AllRisk', filled: false }, { menu: 'OwnersLiability', filled: false }, { menu: 'ElectronicEquipment', filled: false }, { menu: 'PersonalAccident', filled: false }]
    this.currentDomestic = this.domesticMenus[0].menu;
    this.packageplusMenus = [
      'Fire & Allied Perils',
      'Business Interruption (Fire & Allied Perils)',
      'BURGLARY/THEFT',
      'Money',
      'Office Contents',
      'Goods in Transit'
    ].map(menu => ({ menu, filled: false }));

    this.currentPackagePlus = this.packageplusMenus[0].menu;
    if(this.productId=='19' && this.insuranceId=='100050'){
         this.commercialpackageplusMenus = [
      'Accidental Damage',
      'Accounts Recievable',
      'BuildingCombined',
      'Business All Risk',
      'Deterioration',
      'Electronic Equipment',
      'Employers Liability',
      'Fidelity',
      'Fire',
      'Glass',
      'Goods In Transit',
      'Group Personal Accident',
      'HouseHolders',
      'HouseOwner',
      'Machinery Breakdown',
      'Money',
      'Office contents',
      'Public Liability',
      'Stated Benefits',
      'Theft',
      'Umberlla Liability'
    ].map(menu => ({ menu, filled: false }));
    this.currentCommercial = 'Accidental Damage';
    }
  }
  updatelistIndex(index) {
    this.listIndex = index;
  }

  listProceed(type,id) {
    console.log();
    
    if (type == 'Domestic') {
        if(id != undefined ){
        this.currentDomestic = this.domesticMenus[id].menu;
      }
      else {
      if (this.currentDomestic == 'BuildingDetails' || this.currentDomestic == 'ContentRisk') {
        let valid = this.checkTabValidation(this.currentDomestic);
        if (valid) {
          let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
          this.domesticMenus[index].filled = true;
           if(id) this.currentDomestic = this.domesticMenus[id].menu;
           else this.currentDomestic = this.domesticMenus[++index]?.menu;
           
        }
      }
      else {
        let filled = this.checkFilled(this.currentDomestic);
        console.log(filled);
        if (filled) {
          let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
          this.domesticMenus[index].filled = true;
        }
        let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
        this.currentDomestic = this.domesticMenus[++index]?.menu;
        console.log(this.currentDomestic);

        // if (!this.currentDomestic) this.onSubmitDomesticDetails('Submit');
      }
      }
    
    }
    else if (type == 'PackagePlus') {
      if(id != undefined){
        this.currentPackagePlus = this.packageplusMenus[id].menu;
      }
      else {
        let filled = this.checkFilled(this.currentPackagePlus);
        if (filled) {
        let index = this.packageplusMenus.findIndex(item => item.menu === this.currentPackagePlus);
        this.packageplusMenus[index].filled = true;
        if(id) this.currentPackagePlus = this.packageplusMenus[id].menu;
        else this.currentPackagePlus = this.packageplusMenus[++index]?.menu;
        console.log(this.currentPackagePlus);
      }
      } 
      
      // let index = this.packageplusMenus.findIndex(item => item.menu === this.currentPackagePlus);
    

      if (!this.currentPackagePlus) this.onSubmitDomesticDetails('Submit');
    }
    else if(type =='CommercialPackagePlus'){
        this.currentCommercial = this.commercialpackageplusMenus[id].menu;
        console.log(this.currentCommercial);
        
    }
  }
  naviagateToCover(index){
    console.log(index);
    this.currentPackagePlus = this.packageplusMenus[index].menu;
  }
  skip(type) {
    if (type == 'Domestic') {
      if (this.locationList[this.tabIndex].CoversRequired == 'BC') {
        if (this.currentDomestic == 'BuildingDetails' || this.currentDomestic == 'ContentRisk') {
          let buildingValid = this.checkTabValidation(this.currentDomestic);
          if (buildingValid) {
            let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
            this.currentDomestic = this.domesticMenus[++index]?.menu;
          }
        }
        else {
          let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
          this.currentDomestic = this.domesticMenus[++index]?.menu;
        }
      }
      else if (this.locationList[this.tabIndex].CoversRequired == 'B') {
        if (this.currentDomestic == 'BuildingDetails') {
          let buildingValid = this.checkTabValidation(this.currentDomestic);
          if (buildingValid) {
            let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
            this.currentDomestic = this.domesticMenus[++index]?.menu;
          }
        }
        else {
          let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
          this.currentDomestic = this.domesticMenus[++index]?.menu;
        }
      }
      else if (this.locationList[this.tabIndex].CoversRequired == 'C') {
        if (this.currentDomestic == 'ContentRisk') {
          let buildingValid = this.checkTabValidation(this.currentDomestic);
          if (buildingValid) {
            let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
            this.currentDomestic = this.domesticMenus[++index]?.menu;
          }
        }
        else {
          let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
          this.currentDomestic = this.domesticMenus[++index]?.menu;
        }
      }
    }
    else if (type == 'PackagePlus') {
      let index = this.packageplusMenus.findIndex(item => item.menu === this.currentPackagePlus);
        this.currentPackagePlus = this.packageplusMenus[++index]?.menu;

    }

  }
  checkTabValidation(index) {
    if (index == 'BuildingDetails') {
      let i = 0, j = 0;
      console.log(this.locationList);
      
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.BuildingList) {
              if (build.WallType == null || build.WallType == '') { build['WallTypeError'] = true; i += 1 } else { build['WallTypeError'] = false; }
              if (build.RoofType == null || build.RoofType == '') { build['RoofTypeError'] = true; i += 1 } else { build['RoofTypeError'] = false; }
              if (build.FirstLossPayee == null || build.FirstLossPayee == '') { build['FirstLossPayeeError'] = true; i += 1 } else { build['FirstLossPayeeError'] = false; }
              if (build.BuildingSumInsured == null || build.BuildingSumInsured == '' || build.BuildingSumInsured == 0) { build['SumInsuredError'] = true; i += 1 } else { build['SumInsuredError'] = false; }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    else if (index == 'ContentRisk') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'C' || entry.CoversRequired == 'BC') {
            if (j == this.tabIndex) { entry['ContentSuminsured'] = this.productItem.ContentSuminsured }
            if (entry.CoversRequired == 'C' || entry.CoversRequired == 'BC') { if (entry.ContentSuminsured == null || entry.ContentSuminsured == '' || entry.ContentSuminsured == 0 || entry.ContentSuminsured == undefined) { entry['ContentSuminsuredError'] = true; i += 1 } else { entry['ContentSuminsuredError'] = false; } }
            else { entry['ContentSuminsuredError'] = false; }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }

  }
  checkFilled(index) {
    console.log(index);
    console.log(this.locationList);
    if (index == 'AllRisk') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          if (j == this.tabIndex) {
            entry['AllriskSumInsured'] = this.productItem.AllriskSumInsured;
            entry['AllriskDescription'] = this.productItem.AllriskDescription;
          }
          if (entry.AllriskSumInsured == null || entry.AllriskSumInsured == '' || entry.AllriskSumInsured == 0 || entry.AllriskDescription == null || entry.AllriskDescription == '' || entry.AllriskDescription == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'OwnersLiability') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          if (j == this.tabIndex) {
            entry['EmpLiabilitySi'] = this.productItem.EmpLiabilitySi;
            entry['EmpDescription'] = this.productItem.EmpDescription;
          }
          if (entry.EmpLiabilitySi == null || entry.EmpLiabilitySi == '' || entry.EmpLiabilitySi == 0 || entry.EmpDescription == null || entry.EmpDescription == '' || entry.EmpDescription == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'ElectronicEquipment') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          if (j == this.tabIndex) {
            entry['ContentTypeId'] = this.productItem.ContentTypeId;
            entry['ElectronicEquipmentSI'] = this.productItem.ElectronicEquipmentSI;
            entry['ElectronicDescription'] = this.productItem.ElectronicDescription;
          }
          if (entry.ContentTypeId == null || entry.ContentTypeId == '' || entry.ContentTypeId == 0 || entry.ElectronicEquipmentSI == null || entry.ElectronicEquipmentSI == '' || entry.ElectronicEquipmentSI == 0 || entry.ElectronicDescription == null || entry.ElectronicDescription == '' || entry.ElectronicDescription == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'PersonalAccident') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          if (j == this.tabIndex) {
            entry['OccupationType'] = this.productItem.OccupationType;
            entry['PersonalDeath'] = this.productItem.PersonalDeath;
            entry['PersonalPermanent'] = this.productItem.PersonalPermanent;
            entry['PersonalTemporary'] = this.productItem.PersonalTemporary;
            entry['PersonalMedical'] = this.productItem.PersonalMedical;
          }
          if (entry.OccupationType == null || entry.OccupationType == '' || entry.OccupationType == 0 || entry.PersonalDeath == null || entry.PersonalDeath == '' || entry.PersonalDeath == 0 || entry.PersonalPermanent == null || entry.PersonalPermanent == '' || entry.PersonalPermanent == 0 || entry.PersonalTemporary == null || entry.PersonalTemporary == '' || entry.PersonalTemporary == 0 || entry.PersonalMedical == null || entry.PersonalMedical == '' || entry.PersonalMedical == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Fire & Allied Perils') {
      let i = 0, j = 0;
      
      
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.FireList) {
              if(build.BuildingUsageId == null || build.BuildingUsageId == '' || build.BuildingUsageId == 0)build.BuildingUsageIdError = true;
              else build.BuildingUsageIdError = false;
              if(build.WallType == null || build.WallType == '' || build.WallType == 0)build.WallTypeError = true;
              else build.WallTypeError = false;
              if(build.RoofType == null || build.RoofType == '' || build.RoofType == 0)build.RoofTypeError = true;
              else build.RoofTypeError = false;
              if(build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0)build.SumInsuredError = true;
              else build.SumInsuredError = false;
              if (build.BuildingUsageId == null || build.BuildingUsageId == '' || build.BuildingUsageId == 0 ||
                build.WallType == null || build.WallType == '' || build.WallType == 0 ||
                build.RoofType == null || build.RoofType == '' || build.RoofType == 0 ||
                build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0
              ) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Business Interruption (Fire & Allied Perils)') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.BIFireList) {
              if(build.IndemityPeriod == null || build.IndemityPeriod == '' || build.IndemityPeriod == 0)build.IndemityPeriodError = true;
              else build.IndemityPeriodError = false;
              if(build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0)build.SumInsuredError = true;
              else build.SumInsuredError = false;
              if (build.IndemityPeriod == null || build.IndemityPeriod == '' || build.IndemityPeriod == 0 ||
                build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0
              ) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'BURGLARY/THEFT') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          if (j == this.tabIndex) {
            entry['BurglarySi'] = this.productItem.BurglarySi;
            entry['FireSumInsured'] = this.productItem.FireSumInsured;
            entry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;
            if(this.productItem.BurglarySi == null || this.productItem.BurglarySi == '' || this.productItem.BurglarySi == 0)  {this.BurglarySiError = true;
              // field['templateOptions']['errors'] = true;
              // field['props']['errors'] = true;
              this.form.controls['BurglarySi'].errors = true;
              this.form.controls['BurglarySi'].touched = true;
            }
            else this.BurglarySiError = false;
            console.log(this.form);
            
          }
          if (entry.BurglarySi == null || entry.BurglarySi == '' || entry.BurglarySi == 0 || entry.FireSumInsured == null || entry.FireSumInsured == '' || entry.FireSumInsured == 0 || entry.DescriptionOfRisk == null || entry.DescriptionOfRisk == '' || entry.DescriptionOfRisk == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Money') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          // if (j == this.tabIndex) {
          //   entry['MoneyinTransit'] = this.productItem.MoneyinTransit;
          //   entry['MoneyCollector'] = this.productItem.MoneyCollector;
          //   entry['MoneySafeLimit'] = this.productItem.MoneySafeLimit;
          //   entry['MoneyOutofSafe'] = this.productItem.MoneyOutofSafe;
          //   entry['MoneyDirectorResidence'] = this.productItem.MoneyDirectorResidence;
          //   entry['MoneyInSafe'] = this.productItem.MoneyInSafe;
          //   entry['Estimatedannualcashcarryings'] = this.productItem.Estimatedannualcashcarryings;
          // }
          // if (entry.MoneyinTransit == null || entry.MoneyinTransit == '' || entry.MoneyinTransit == 0 || entry.MoneyCollector == null || entry.MoneyCollector == '' || entry.MoneyCollector == 0 || entry.MoneySafeLimit == null || entry.MoneySafeLimit == '' || entry.MoneySafeLimit == 0 || entry.MoneyOutofSafe == null || entry.MoneyOutofSafe == '' || entry.MoneyOutofSafe == 0 || entry.MoneyDirectorResidence == null || entry.MoneyDirectorResidence == '' || entry.MoneyDirectorResidence == 0 || entry.MoneyInSafe == null || entry.MoneyInSafe == '' || entry.MoneyInSafe == 0 || entry.Estimatedannualcashcarryings == null || entry.Estimatedannualcashcarryings == '' || entry.Estimatedannualcashcarryings == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Office Contents') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          if (j == this.tabIndex) {
            entry['OfficeContentsSumInsured'] = this.productItem.OfficeContentsSumInsured;
            entry['DescriptionOfice'] = this.productItem.DescriptionOfice;
          }
          if (entry.OfficeContentsSumInsured == null || entry.OfficeContentsSumInsured == '' || entry.OfficeContentsSumInsured == 0 || entry.DescriptionOfice == null || entry.DescriptionOfice == '' || entry.DescriptionOfice == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Goods in Transit') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          if (j == this.tabIndex) {
            entry['GoodsCategoryId'] = this.productItem.GoodsCategoryId;
            entry['GoodsBuildingUsage'] = this.productItem.GoodsBuildingUsage;
            entry['GoodsOccupationType'] = this.productItem.GoodsOccupationType;
            entry['GoodsSi'] = this.productItem.GoodsSi;
            entry['GoodsLimit'] = this.productItem.GoodsLimit;
          }
          if (entry.GoodsCategoryId == null || entry.GoodsCategoryId == '' || entry.GoodsCategoryId == 0 || entry.GoodsBuildingUsage == null || entry.GoodsBuildingUsage == '' || entry.GoodsBuildingUsage == 0 || entry.GoodsOccupationType == null || entry.GoodsOccupationType == '' || entry.GoodsOccupationType == 0 || entry.GoodsSi == null || entry.GoodsSi == '' || entry.GoodsSi == 0 || entry.GoodsLimit == null || entry.GoodsLimit == '' || entry.GoodsLimit == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Business All Risk') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.TableRowAllRisk) {

              if (build.ContentDesc == null || build.ContentDesc == '' || build.ContentDesc == 0 ||
                build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0
              ) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Plate Glass') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.PlateGlassList) {

              if (build.CategoryId == null || build.CategoryId == '' || build.CategoryId == 0 ||
                build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0
              ) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Machinery Breakdown') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.MachineryList) {

              if (build.ContentId == null || build.ContentId == '' || build.ContentId == 0 ||
                build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0
              ) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Electronic Equipment') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.ElecEquipList) {

              if (build.ContentId == null || build.ContentId == '' || build.ContentId == 0 ||
                build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0 ||
                build.ContentDesc == null || build.ContentDesc == '' || build.ContentDesc == 0
              ) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Accidental Damge') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          if (j == this.tabIndex) {
            entry['AccidentalSumInsured'] = this.productItem.AccidentalSumInsured;
            entry['DescriptionAcc'] = this.productItem.DescriptionAcc;

          }
          if (entry.AccidentalSumInsured == null || entry.AccidentalSumInsured == '' || entry.AccidentalSumInsured == 0 || entry.DescriptionAcc == null || entry.DescriptionAcc == '' || entry.DescriptionAcc == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Fidelity') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.FidelityList) {

              if (build.OccupationId == null || build.OccupationId == '' || build.OccupationId == 0 ||
                build.Count == null || build.Count == '' || build.Count == 0 ||
                build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0
              ) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Public Liability') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.LiabilityList) {

              if (build.CategoryId == null || build.CategoryId == '' || build.CategoryId == 0 ||
                build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0

              ) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Group Personal Accident') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }

          if (j == this.tabIndex) {
            entry['GroupOccupationType'] = this.productItem.GroupOccupationType;
            entry['TotalNoOfGroupMemeber'] = this.productItem.TotalNoOfGroupMemeber;
            entry['IndemnityType'] = this.productItem.IndemnityType;
            entry['GroupSumInsured'] = this.productItem.GroupSumInsured;
          }
          if (entry.GroupOccupationType == null || entry.GroupOccupationType == '' || entry.GroupOccupationType == 0 || entry.TotalNoOfGroupMemeber == null || entry.TotalNoOfGroupMemeber == '' || entry.TotalNoOfGroupMemeber == 0 || entry.IndemnityType == null || entry.IndemnityType == '' || entry.IndemnityType == 0 || entry.GroupSumInsured == null || entry.GroupSumInsured == '' || entry.GroupSumInsured == 0) { i += 1 }
        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Fire add on') {
      let i = 0, j = 0;
      console.log(this.addOnCoverList);
      
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {
          
            for (let build of entry.FireAddOnList) {  

              if (build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Stock add on') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.stockAddOnCoverList) {

              if (build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'Claim Experience Details') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {
           if(entry.claimExperienceList){
            for (let build of entry.claimExperienceList) {

              if (build.CLHClaimYear == null || build.CLHClaimYear == '' || build.CLHClaimYear == 0 ||
                build.CLHNatureOfLoss == null || build.CLHNatureOfLoss == '' || build.CLHNatureOfLoss == 0 ||
                build.CLHDateOfLoss == null || build.CLHDateOfLoss == '' || build.CLHDateOfLoss == 0 ||
                build.CLHClaimedAmount == null || build.CLHClaimedAmount == '' || build.CLHClaimedAmount == 0 ||
                build.CLHRemarks == null || build.CLHRemarks == '' || build.CLHRemarks == 0
              ) {
                i += 1
              }
            }
           }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'UnderWriter Questions') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.uwQuestionList) {

              if (build.Value == null || build.Value == '' || build.Value == 0

              ) {
                i += 1
              }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    if (index == 'BuildingDetails') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {

            for (let build of entry.BuildingList) {
              if (build.WallType == null || build.WallType == '') { build['WallTypeError'] = true; i += 1 } else { build['WallTypeError'] = false; }
              if (build.RoofType == null || build.RoofType == '') { build['RoofTypeError'] = true; i += 1 } else { build['RoofTypeError'] = false; }
              if (build.FirstLossPayee == null || build.FirstLossPayee == '') { build['FirstLossPayeeError'] = true; i += 1 } else { build['FirstLossPayeeError'] = false; }
              if (build.BuildingSumInsured == null || build.BuildingSumInsured == '' || build.BuildingSumInsured == 0) { build['SumInsuredError'] = true; i += 1 } else { build['SumInsuredError'] = false; }
            }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
    else if (index == 'ContentRisk') {
      let i = 0, j = 0;
      for (let entry of this.locationList) {
        if (j == this.tabIndex) {
          if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
          else { entry['LocationNameError'] = false; }
          if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
          else { entry['BuildingAddressError'] = false; }
          if (entry.CoversRequired == 'C' || entry.CoversRequired == 'BC') {
            if (j == this.tabIndex) { entry['ContentSuminsured'] = this.productItem.ContentSuminsured }
            if (entry.CoversRequired == 'C' || entry.CoversRequired == 'BC') { if (entry.ContentSuminsured == null || entry.ContentSuminsured == '' || entry.ContentSuminsured == 0 || entry.ContentSuminsured == undefined) { entry['ContentSuminsuredError'] = true; i += 1 } else { entry['ContentSuminsuredError'] = false; } }
            else { entry['ContentSuminsuredError'] = false; }
          }

        }
        j += 1;
        if (j == this.locationList.length) return i == 0;
      }
    }
  }
  previous(type) {
    if (type == 'Domestic') {
      let index = this.domesticMenus.findIndex(item => item.menu === this.currentDomestic);
      this.currentDomestic = this.domesticMenus[--index].menu;
    }
    else if (type == 'PackagePlus') {
      let index = this.packageplusMenus.findIndex(item => item.menu === this.currentPackagePlus);
      this.currentPackagePlus = this.packageplusMenus[--index].menu;
    }

  }
  menuSelection(id, type) {
    console.log(this.domesticMenus);

    if (type == 'Domestic') {
      if (id == 'B') {
        this.domesticMenus = this.domesticMenus.filter(e => e.menu !== 'ContentRisk');
        const isAlreadyPresent = this.domesticMenus.some(e => e.menu === 'BuildingDetails');
        if (!isAlreadyPresent) {
          this.domesticMenus.unshift({ menu: 'BuildingDetails', filled: false });
        }
        this.currentDomestic = this.domesticMenus[0].menu;
      }
      else if (id == 'C') {
        this.domesticMenus = this.domesticMenus.filter(e => e.menu !== 'BuildingDetails');
        const isAlreadyPresent = this.domesticMenus.some(e => e.menu === 'ContentRisk');
        if (!isAlreadyPresent) {
          this.domesticMenus.unshift({ menu: 'ContentRisk', filled: false });
        }
        this.currentDomestic = this.domesticMenus[0].menu;
      }
      else {
        const isBuildingPresent = this.domesticMenus.some(e => e.menu === 'BuildingDetails');
        if (!isBuildingPresent) {
          this.domesticMenus.unshift({ menu: 'BuildingDetails', filled: false });
        }
        const isContentPresent = this.domesticMenus.some(e => e.menu === 'ContentRisk');
        if (!isContentPresent) {
          this.domesticMenus.unshift({ menu: 'ContentRisk', filled: false });
        }
        this.currentDomestic = this.domesticMenus[0].menu;
      }
    }
    else if (type == 'PackagePlus') {

    }
  }
  getCurrentPackagePlusIndex(): number {
    return this.packageplusMenus.findIndex(menuObj => menuObj.menu === this.currentPackagePlus);
  }
  getCurrentDomesticIndex(): number {
    return this.domesticMenus.findIndex(menuObj => menuObj.menu === this.currentDomestic);
  }
  
  AddGPA() {
    this.GPAList.push({
      'NumberofEmployees': this.productItem.NumberofEmployees,
      'occupation': this.productItem.occupation,
      'AnnualRemuneration': this.productItem.AnnualRemuneration,
      'TemporaryDisablement': this.productItem.TemporaryDisablement,
      'Coverage': this.productItem.Coverage,
      'MedicalExpenses': this.productItem.MedicalExpenses,
      'LocationIndex': this.locationIndex
    });
    this.filterGPAList();
    this.showAddForm = !this.showAddForm;
    this.productItem = new ProductData();
    this.form.reset(); // Reset the form state
    this.options.resetModel();
  }
  filterGPAList() {
    this.filteredGPAList = this.GPAList.filter(item => item.LocationIndex == this.locationIndex);
  }
  editGPA(event, index) {

    this.showAddForm = true;
    this.productItem = { ...event };
    this.isEditing = true;
    this.editingIndex = index;
  }
  updateGPA() {
    if (this.editingIndex !== null) {
      this.GPAList[this.editingIndex] = { ...this.productItem };
      this.showAddForm = false;

    }
  }
  deleteGPA(rowIndex) {
    if (rowIndex !== null) {
      this.GPAList.splice(rowIndex, 1);

    }
  }
  get FidelityArray(): FormArray {
    return this.fidelityForm.get('fidelitys') as FormArray;
  }
  addFidelity() {
    const userGroup = this.fb.group({
      AdditionalClaimsPreparationCosts: [''],
      LimitOfIndemnity: ['']
    });
    this.FidelityArray.push(userGroup);
  }
  removeFidelity(index: number) {
    this.FidelityArray.removeAt(index);
  }
    get AllRiskArray(): FormArray {
    return this.allRiskForm.get('allRisk') as FormArray;
  }
  addAllRisk() {
    const userGroup = this.fb.group({
      AllriskSumInsured: [''],
      AllriskDescription: ['']
    });
    this.AllRiskArray.push(userGroup);
  }
  removeAllRisk(index: number) {
    this.AllRiskArray.removeAt(index);
  }
   get ProfessionalIndeminityArray(): FormArray {
    return this.ProfessionalIndeminityForm.get('ProfessionalIndeminity') as FormArray;
  }
  addProfessionalIndeminity() {
    const userGroup = this.fb.group({
      Name: [''],
      Profession: [''],
      NoOfYears: [''],
      SumInsured: ['']
    });
    this.ProfessionalIndeminityArray.push(userGroup);
  }
  removeProfessionalIndeminityArray(index: number) {
    this.ProfessionalIndeminityArray.removeAt(index);
  }
  getAllClaimHistoryDetails() {
    let urlLink = `${this.CommonApiUrl}api/getclaimhistoryinfo`;
    let ReqObj = {
      "CompanyId": this.insuranceId,
      "ProductId": this.productId,
      "RequestReferenceNo": this.requestReferenceNo,
      "QuoteNo": this.quoteNo
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          let list = data.Result.ClaimHistoryInfo, i = 0;
          if (list.length != 0) this.claimExperienceList = list;
        }
      });
  }
  checkFieldNames() {
    if (this.fields.length != 0 && this.insuranceId != '100046' && this.insuranceId != '100047' && this.insuranceId != '100048' && this.insuranceId != '100049' && this.insuranceId != '100050') {
      let fieldList = this.fields[0].fieldGroup[0].fieldGroup;
      let i = 0;
      for (let field of fieldList) {
        let key = null;
        if (field.id) key = field.id
        else key = field.key
        this.translate.get('MOTORQUOTE.' + key).subscribe((translation: string) => {
          if (field.props) {
            field.props.label = translation;
            if (field.props.options) {
              for (let entry of field.props.options) {
                if (entry.CodeDescLocal == null || entry.CodeDescLocal == undefined) {
                  entry['CodeDescLocal'] = 'Other';
                }
                if (this.lang == 'en') entry['label'] = entry.CodeDesc
                else entry['label'] = entry.CodeDescLocal
              }
            }
          }
          else if (field.templateOptions) {
            field.templateOptions.label = translation;
            // if(field.templateOptions.options){
            //   for(let entry of field.templateOptions.options){
            //     if(entry.CodeDescLocal==null || entry.CodeDescLocal==undefined){
            //       entry['CodeDescLocal'] = 'Other';
            //     }
            //     if(this.lang=='en') entry['label'] = entry.CodeDesc
            //     else entry['label'] = entry.CodeDescLocal
            //   }
            // }
          }
        });
        i += 1;
        if (i == fieldList.length) console.log('Final Field Lang', fieldList);
      }
    }
  }
  getLocationDetails() {
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo
    }
    let urlLink = `${this.motorApiUrl}api/slide/GetNonMotor`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          let details = data.Result;
          this.endorsementDetails = data.Result.EndorsementDetails;
          let startDate = details?.PolicyDetails?.PolicyStartDate, endDate = details?.PolicyDetails?.PolicyEndDate;
          let common = JSON.parse(sessionStorage.getItem('homeCommonDetails'))
          if (common) {
            startDate = common[0].PolicyStartDate;
            endDate = common[0].PolicyEndDate;
          }
          this.commonDetails = [
            {
              "PolicyStartDate": startDate,
              "PolicyEndDate": endDate,
              "Currency": details?.PolicyDetails?.Currency,
              "SectionId": details?.PolicyDetails?.SectionIds,
              "AcexecutiveId": "",
              "ExchangeRate": details?.PolicyDetails?.ExchangeRate,
              "StateExtent": "",
              "NoOfDays": details?.PolicyDetails?.NoOfDays,
              "HavePromoCode": details?.PolicyDetails?.Havepromocode,
              "PromoCode": details?.PolicyDetails?.Promocode,
              "SourceType": details?.BrokerDetails.SourceTypeId,
              "BrokerCode": details?.BrokerDetails?.BrokerCode,
              "BranchCode": details?.BrokerDetails?.BranchCode,
              "BrokerBranchCode": details?.BrokerDetails?.BrokerBranchCode,
              "CustomerCode": details?.BrokerDetails?.CustomerCode,
              "CustomerName": details?.PolicyDetails?.CustomerName,
              "LoginId": null,
              "IndustryName": null
            }
          ]
          sessionStorage.setItem('homeCommonDetails', JSON.stringify(this.commonDetails))
          let locationList = [], PolicyDetails;
          if (details.PolicyDetails) PolicyDetails = details.PolicyDetails;
          if (PolicyDetails) {
            this.selectedCurrency = PolicyDetails.Currency;
          }
          if (details.LocationList) locationList = details.LocationList;
          if (locationList.length != 0) {
            if(this.productId=='79' || this.productId=='84' || this.productId=='82'|| this.productId=='83'){
              let urlGetLink = `${this.motorApiUrl}api/getEngineerInfo?RequestReferenceno=${this.requestReferenceNo}`;
              let ReqGetObj = {
                "RequestReferenceNo": this.requestReferenceNo
              }
              this.sharedService.onPostMethodSync(urlGetLink,ReqGetObj).subscribe(
                (data: any) => {
                  sessionStorage.setItem('EngineerInfo',JSON.stringify(data.Result));
                })
            }
            if (this.productId == '63') {
              this.LocationName = [];
              let i = 0;
              for (let entry of locationList) {
                let obj = {
                  "LocationId": entry.LocationId, "LocationName": entry.LocationName,
                  "BuildingAddress": entry.Address, "GeyserList": [{ "BuildingUsageId": null, "SumInsured": 0 }],
                  "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }],
                  "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }]
                }
                let subDetails = entry.SectionList;
                // if(entry.AssesListDetails) subDetails = subDetails.concat(entry.AssesListDetails);
                // if(entry.HumanListDetails) subDetails = subDetails.concat(entry.HumanListDetails);
                let persAcc = subDetails.filter(ele => ele['SectionId'] == '138')
                let PAList = [];
                if (persAcc.length != 0) {
                  let i = 0;
                  for (let sub of persAcc) {
                    let subEntry = {
                      "DeathSI": sub['SumInsured'],
                      'RelationType': sub.RelationType
                    }
                    PAList.push(subEntry);
                    i += 1;
                    if (i == persAcc.length) obj['PAList'] = PAList;
                  }
                }
                else { PAList = [{ 'RelationType': null, 'DeathSI': null }]; obj['PAList'] = PAList; }
                let build = subDetails.filter(ele => ele['SectionId'] == '1')
                if (build.length != 0) {
                  if (build[0]['SumInsured']) { obj['BuildingSI'] = String(build[0]['SumInsured']); this.CommaFormatted(obj, 'Building'); }
                  obj['BuildingType'] = build[0]['OutbuildConstructType']; obj['OriginalRiskId'] = build[0].RiskId
                }
                else { obj['BuildingSI'] = null; obj['BuildingType'] = null; }
                let content = subDetails.filter(ele => ele['SectionId'] == '47')
                if (content.length != 0) { obj['ContentSI'] = String(content[0]['SumInsured']); this.CommaFormatted(obj, 'Content'); obj['OriginalRiskId'] = content[0].RiskId }
                else { obj['ContentSI'] = null; }
                let allRisk = subDetails.filter(ele => ele['SectionId'] == '3')
                if (allRisk.length != 0) { obj['AllRiskSI'] = String(allRisk[0]['SumInsured']); this.CommaFormatted(obj, 'AllRisk'); obj['OriginalRiskId'] = allRisk[0].RiskId }
                else { obj['AllRiskSI'] = null; }
                let domestic = subDetails.filter(ele => ele['SectionId'] == '106')
                let servantList = [];
                if (persAcc.length != 0) {
                  let i = 0;
                  for (let sub of domestic) {
                    let subEntry = {
                      "ServantType": sub.DomesticServantType,
                      "ServantCount": sub.Count,
                      "ServantSI": sub['SumInsured']
                    }
                    servantList.push(subEntry);
                    i += 1;
                    if (i == domestic.length) obj['ServantList'] = servantList;
                  }
                }
                else { servantList = [{ "ServantType": null, 'ServantCount': null, 'ServantSI': null }]; obj['ServantList'] = servantList; }
                let persLiab = subDetails.filter(ele => ele['SectionId'] == '139')
                if (persLiab.length != 0) { obj['PersonalLiabilitySI'] = String(persLiab[0]['SumInsured ']); this.CommaFormatted(obj, 'PL'); obj['OriginalRiskId'] = persLiab[0].RiskId }
                else { obj['PersonalLiabilitySI'] = null; }
                this.LocationName.push(obj);
                i += 1;
              }
            }
            else if (this.productId == '19') {
              this.editsections('Content'); this.editsections('Building'); this.editsections('ElectronicEquipment');
              this.editsections('AllRisk'); this.editsections('PublicLiabilityCorporate'); this.editsections('PersonalAccidentCorporate');
              this.editsections('DomesticServant'); this.editsections('MacineryBreakdown'); this.editsections('Burglary'); this.editsections('AccidentalDamageCorporate');
              this.editsections('Fire'); this.editsections('FireAddOn'); this.editsections('StockAddOn'); this.editsections('FireBI'); this.editsections('Money'); this.editsections('Fidelity'); this.editsections('OfficeContentsCorporate'); this.editsections('StockCorporate'); this.editsections('PlatinumCorporate');
              this.editsections('GoodsTransit'); this.editsections('WorkmenCompensation'); this.editsections('GroupPersonalAccidentCorporate')
              let i = 0; this.locationList = [];
              for (let entry of locationList) {
                let obj = {
                  "LocationId": entry.LocationId, "LocationName": entry.LocationName, "CoversRequired": entry?.CoversRequired, "BuildingOwnerYn": entry?.BuildingOwnerYn,
                  "BuildingAddress": entry.Address, "BuildingList": [{ "WallType": null, "RoofType": null, "FirstLossPayee": null, "BuildingSumInsured": 0 }], "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ContentId': null, 'ContentDesc': null, 'SumInsured': null, 'SerialNo': null }], "WorkmenList": [{ 'OccupationId': null, 'SumInsured': null }],
                  "LiabilityList": [{ 'CategoryId': null, 'SumInsured': null }], "StockAddOnList": [{ "CoverId": null, "SumInsured": 0 }], "FireAddOnList": [{ "CoverId": null, "SumInsured": 0 }], "FireList": [{ "BuildingUsageId": null, "WallType": null, "RoofType": null, "SumInsured": null, }], "BIFireList": [{ "ContentId": null, "SumInsured": null, "IndemityPeriod": "", "IndemityPeriodDesc": null }], "GoodsTransitList": [{ "ContentId": null, "SumInsured": null, "ModeOfTransport": null }], "MachineryList": [{ 'ContentId': null, 'ContentDesc': null, 'CategoryId': null, 'SumInsured': null, 'SerialNo': null }],
                  "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }],
                  "FidelityList": [{ 'OccupationId': null, "Count": null, 'SumInsured': null }], "GeyserList": [{ "BuildingUsageId": null, "CategoryId": null, "SumInsured": 0 }],
                  "TableRowAllRisk": [{ "ItemId": '', "Content": '', "Serial": '', "Description": '', "SumInsured": 0, }],
                  "GPAList": [{ 'OccupationType': null, "Count": null, 'IndemnityType': null, 'IndemnityTypeDesc': null, 'SumInsured': null }],
                };
                let subDetails = entry.SectionList;
                let TableRowAllRisk = subDetails.filter(ele => ele['SectionId'] == '69');
                if (TableRowAllRisk.length != 0) { obj['TableRowAllRisk'] = TableRowAllRisk; if (TableRowAllRisk[0].CoveringDetails) { obj['CoveringDetails'] = TableRowAllRisk[0].CoveringDetails; obj['DescriptionOfRisk'] = TableRowAllRisk[0].DescriptionOfRisk; } }
                let AccidentalDamageDetails = subDetails.filter(ele => ele['SectionId'] == '56');
                if (AccidentalDamageDetails.length != 0) { obj['DescriptionAcc'] = AccidentalDamageDetails[0].DescriptionOfRisk; obj['AccidentalSumInsured'] = AccidentalDamageDetails[0].SumInsured; if (AccidentalDamageDetails[0].CoveringDetails) { obj['CoveringDetails'] = AccidentalDamageDetails[0].CoveringDetails; obj['DescriptionOfRisk'] = AccidentalDamageDetails[0].DescriptionOfRisk; } }
                let OfficeContentsDetails = subDetails.filter(ele => ele['SectionId'] == '198');
                if (OfficeContentsDetails.length != 0) { obj['DescriptionOfice'] = OfficeContentsDetails[0].DescriptionOfRisk; obj['OfficeContentsSumInsured'] = OfficeContentsDetails[0].SumInsured; if (OfficeContentsDetails[0].CoveringDetails) { obj['CoveringDetails'] = OfficeContentsDetails[0].CoveringDetails; obj['DescriptionOfRisk'] = OfficeContentsDetails[0].DescriptionOfRisk; } }
                let StockDetails = subDetails.filter(ele => ele['SectionId'] == '216');
                if (StockDetails.length != 0) { obj['StockSumInsured'] = StockDetails[0].SumInsured; if (StockDetails[0].CoveringDetails) { obj['CoveringDetails'] = StockDetails[0].CoveringDetails; obj['DescriptionOfRisk'] = StockDetails[0].DescriptionOfRisk; } }
                let PlatinumDetails = subDetails.filter(ele => ele['SectionId'] == '53');
                if (PlatinumDetails.length != 0) { obj['PlateGlassList'] = PlatinumDetails; if (PlatinumDetails[0].CoveringDetails) { obj['CoveringDetails'] = PlatinumDetails[0].CoveringDetails; obj['DescriptionOfRisk'] = PlatinumDetails[0].DescriptionOfRisk; } }
                let PublicLiabilityDetails = subDetails.filter(ele => ele['SectionId'] == '54');
                if (PublicLiabilityDetails.length != 0) { obj['LiabilityList'] = PublicLiabilityDetails; if (PublicLiabilityDetails[0].CoveringDetails) { obj['CoveringDetails'] = PublicLiabilityDetails[0].CoveringDetails; obj['DescriptionOfRisk'] = PublicLiabilityDetails[0].DescriptionOfRisk; } }
                let GPADetails = subDetails.filter(ele => ele['SectionId'] == '182');
                if (GPADetails.length != 0) {
                  obj['GPAList'] = GPADetails;
                  obj['CoveringDetails'] = GPADetails[0].GPADetails;
                  obj['DescriptionOfRisk'] = GPADetails[0].DescriptionOfRisk;
                  // for(let item of GPADetails){
                  //   obj['OccupationType']=item.OccupationId
                  //   obj['Count']=item.OccupationId
                  //   obj['IndemnityType']=item.IndemnityTypeDesc
                  //   obj['SumInsured']=item.SumInsured
                  // }
                }
                let fireAddOns = subDetails.filter(ele => ele['SectionId'] == '217');
                if (fireAddOns.length != 0) { obj['FireAddOnList'] = fireAddOns; if (fireAddOns[0].CoveringDetails) { obj['CoveringDetails'] = fireAddOns[0].CoveringDetails; obj['DescriptionOfRisk'] = fireAddOns[0].DescriptionOfRisk; } }
                let stockAddOns = subDetails.filter(ele => ele['SectionId'] == '218');
                if (stockAddOns.length != 0) { obj['StockAddOnList'] = stockAddOns; if (stockAddOns[0].CoveringDetails) { obj['CoveringDetails'] = stockAddOns[0].CoveringDetails; obj['DescriptionOfRisk'] = stockAddOns[0].DescriptionOfRisk; } }
                let fireAllied = subDetails.filter(ele => ele['SectionId'] == '40');
                if (fireAllied.length != 0) { obj['FireList'] = fireAllied; this.PackageIndustryType = fireAllied[0].IndustryType; this.onChangeIndustry(this.PackageIndustryType); this.PackageCategoryId = fireAllied[0].CategoryId; if (fireAllied[0].CoveringDetails) { obj['CoveringDetails'] = fireAllied[0].CoveringDetails; obj['DescriptionOfRisk'] = fireAllied[0].DescriptionOfRisk; } }
                let MachineryList = subDetails.filter(ele => ele['SectionId'] == '41');
                if (MachineryList.length != 0) { obj['MachineryList'] = MachineryList; }
                let BIfireAllied = subDetails.filter(ele => ele['SectionId'] == '75');
                if (BIfireAllied.length != 0) { obj['BIFireList'] = BIfireAllied; if (BIfireAllied[0].CoveringDetails) { obj['CoveringDetails'] = BIfireAllied[0].CoveringDetails; obj['DescriptionOfRisk'] = BIfireAllied[0].DescriptionOfRisk; } }
                // let GoodsTransitList = subDetails.filter(ele=>ele['SectionId']=='46');
                // if(GoodsTransitList.length!=0){
                //   obj['GoodsLimit']=GoodsTransitList[0].ContentDesc;obj['GoodsCategoryId']=GoodsTransitList[0].CategoryId;obj['GoodsOccupationType']=GoodsTransitList[0].OccupationId;
                //   obj['GoodsBuildingUsage']=GoodsTransitList[0].BuildingUsageId;obj['GoodsSi']=GoodsTransitList[0].SumInsured;if(GoodsTransitList[0].CoveringDetails){obj['CoveringDetails']=GoodsTransitList[0].CoveringDetails;obj['DescriptionOfRisk']=GoodsTransitList[0].DescriptionOfRisk;}}
                let ElecEquipList = subDetails.filter(ele => ele['SectionId'] == '76');
                if (ElecEquipList.length != 0) { obj['ElecEquipList'] = ElecEquipList; if (ElecEquipList[0].CoveringDetails) { obj['CoveringDetails'] = ElecEquipList[0].CoveringDetails; obj['DescriptionOfRisk'] = ElecEquipList[0].DescriptionOfRisk; } }
                let WorkmenList = subDetails.filter(ele => ele['SectionId'] == '48');
                if (WorkmenList.length != 0) { obj['WorkmenList'] = WorkmenList; if (WorkmenList[0].CoveringDetails) { obj['CoveringDetails'] = WorkmenList[0].CoveringDetails; obj['DescriptionOfRisk'] = WorkmenList[0].DescriptionOfRisk; } }
                let MoneyDetails = subDetails.filter(ele => ele['SectionId'] == '42');
                if (MoneyDetails.length != 0) {
                  obj['MoneyAnnualEstimate'] = MoneyDetails[0].MoneyAnnualEstimate; obj['MoneyCollector'] = MoneyDetails[0].MoneyCollector; obj['MoneyDirectorResidence'] = MoneyDetails[0].MoneyDirectorResidence; obj['MoneySafeLimit'] = MoneyDetails[0].MoneySafeLimit; obj['StrongroomSi'] = MoneyDetails[0].StrongroomSi; obj['MoneyMajorLoss'] = MoneyDetails[0].MoneyMajorLoss; obj['MoneyOutofSafe'] = MoneyDetails[0].MoneyOutofSafe
                  if (MoneyDetails[0].CoveringDetails) { obj['CoveringDetails'] = MoneyDetails[0].CoveringDetails; obj['DescriptionOfRisk'] = MoneyDetails[0].DescriptionOfRisk; }
                }
                let FidelityDetails = subDetails.filter(ele => ele['SectionId'] == '43');
                if (FidelityDetails.length != 0) { obj['FidelityList'] = FidelityDetails; if (FidelityDetails[0].CoveringDetails) { obj['CoveringDetails'] = FidelityDetails[0].CoveringDetails; obj['DescriptionOfRisk'] = FidelityDetails[0].DescriptionOfRisk; } }
                let PADetails = subDetails.filter(ele => ele['SectionId'] == '35');
                if (PADetails.length != 0) { obj['PASumInsured'] = PADetails[0].SumInsured; obj['PAOccupationType'] = PADetails[0].OccupationType; if (PADetails[0].CoveringDetails) { obj['CoveringDetails'] = PADetails[0].CoveringDetails; obj['DescriptionOfRisk'] = PADetails[0].DescriptionOfRisk; } }
                let BurglaryDetails = subDetails.filter(ele => ele['SectionId'] == '52');
                if (BurglaryDetails.length != 0) { obj['BurglarySI'] = BurglaryDetails[0].SumInsured; obj['BurglaryLoss'] = BurglaryDetails[0].FirstLossPercentId; if (BurglaryDetails[0].DescriptionOfRisk) { obj['CoveringDetails'] = BurglaryDetails[0].CoveringDetails; obj['DescriptionOfRisk'] = BurglaryDetails[0].DescriptionOfRisk; } }
                this.locationList.push(obj);
                i += 1;
                if (i == this.locationList.length) { this.onEditDomestic(); }

              }
            }
            else if (this.productId == '59') {
              this.editsections('Content'); this.editsections('Building'); this.editsections('ElectronicEquipment');
              this.editsections('AllRisk'); this.editsections('PersonalLiability'); this.editsections('PersonalAccident');
              this.editsections('DomesticServant');
              let i = 0; this.locationList = [];
              for (let entry of locationList) {
                let obj = {
                  "LocationId": entry.LocationId, "LocationName": entry.LocationName, "BuildingOwnerYn": entry?.BuildingOwnerYn,
                  "BuildingList": [], "BuildingAddress": entry.Address,
                  "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }],
                  "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }]
                }
                let subDetails = entry.SectionList;
                let buildDetails = subDetails.filter(ele => ele['SectionId'] == '1');
                if (buildDetails.length != 0) {
                  obj['BuildingList'] = []
                  for (let build of buildDetails) {
                    let subEntry = { "WallType": build.WallType, "RoofType": build.RoofType, "FirstLossPayee": build.FirstLossPayee, "BuildingSumInsured": build.SumInsured, "BuildingDescription": build.DescriptionOfRisk }
                    obj.BuildingList.push(subEntry);
                  }
                }
                else { obj['BuildingList'] = [{ "WallType": null, "RoofType": null, "FirstLossPayee": null, "BuildingSumInsured": 0 }] }
                let contentDetails = subDetails.filter(ele => ele['SectionId'] == '47');
                if (contentDetails.length != 0) { obj['ContentSuminsured'] = contentDetails[0].SumInsured; obj['ContentDescription'] = contentDetails[0].DescriptionOfRisk; }
                let AllRiskDetails = subDetails.filter(ele => ele['SectionId'] == '3');
                console.log(AllRiskDetails);
                
                if (AllRiskDetails.length != 0) { obj['AllriskSuminsured'] = AllRiskDetails[0].SumInsured;obj['AllriskSumInsured'] = AllRiskDetails[0].SumInsured; obj['AllriskDescription'] = AllRiskDetails[0].DescriptionOfRisk; }
                let OwnersDetails = subDetails.filter(ele => ele['SectionId'] == '36');

                if (OwnersDetails.length != 0) { obj['EmpLiabilitySi'] = OwnersDetails[0].SumInsured; obj['EmpDescription'] = OwnersDetails[0].DescriptionOfRisk; }
                let ElecEquipment = subDetails.filter(ele => ele['SectionId'] == '76');
                if (ElecEquipment.length != 0) { obj['ElectronicEquipmentSI'] = ElecEquipment[0].SumInsured; obj['ContentTypeId'] = ElecEquipment[0].ContentId; obj['ElectronicDescription'] = ElecEquipment[0].DescriptionOfRisk; }
                let PADetails = subDetails.filter(ele => ele['SectionId'] == '35');

                if (PADetails.length != 0) { 
                  obj['SumInsured'] = PADetails[0].SumInsured; obj['OccupationType'] = PADetails[0].OccupationType; obj['PersonalDescription'] = PADetails[0].DescriptionOfRisk;
                  let deathEntry = PADetails.find(ele=>ele.CoverId=='5' || ele.CoverId==5);
                  if(deathEntry) obj['PersonalDeath'] = deathEntry.SumInsured;
                  let disablement = PADetails.find(ele=>ele.CoverId=='47' || ele.CoverId==47);
                  if(disablement) obj['PersonalPermanent'] = disablement.SumInsured;
                  let temporaryEntry = PADetails.find(ele=>ele.CoverId=='50' || ele.CoverId==50);
                  if(temporaryEntry) obj['PersonalTemporary'] = temporaryEntry.SumInsured;
                  let medicalEntry = PADetails.find(ele=>ele.CoverId=='48' || ele.CoverId==48);
                  if(medicalEntry) obj['PersonalMedical'] = medicalEntry.SumInsured;
                }
                this.locationList.push(obj);
               
                let AllRiskPhoenix = AllRiskDetails;
                console.log(AllRiskPhoenix);
                

                if (AllRiskPhoenix.length != 0) {
                 
                  if (AllRiskDetails) {
                    obj['entries'] = []; // Initialize an array to store multiple objects
                    let occupationMap = new Map(); // Map to group by OtherOccupation

                    for (let cover of AllRiskDetails) {
                      for (let entry of AllRiskPhoenix) {
                        if (String(entry.CoverId) === cover.CoverId) {
                          let coverName = cover.CoverName.replaceAll(" ", ""); // Format cover name
                          let occupation = entry.OtherOccupation || "Unknown"; // Use OtherOccupation as key

                          if (!occupationMap.has(occupation)) {
                            occupationMap.set(occupation, { OtherOccupation: occupation }); // Initialize object
                          }

                          // Add SumInsured under the respective cover name
                          occupationMap.get(occupation)[coverName] = entry.SumInsured;

                          // Assign IndustryType only if it's not '0'
                          if (entry?.IndustryType !== '0') {
                            occupationMap.get(occupation)['IndustryType'] = entry.IndustryType;
                          }
                        }
                      }
                    }

                    // Convert map values to array
                    obj['entries'] = Array.from(occupationMap.values());
                  }
                }
                
                i += 1;
                if (i == this.locationList.length) { this.onEditDomestic(); }
              }
            }
            else if (this.productId == '66' || this.productId == '67' || this.productId == '68' || this.productId == '69' || this.productId == '70' || this.productId == '71' || this.productId == '72' || this.productId == '75' || this.productId == '78' || this.productId == '77'
              || this.productId == '49' || this.productId == '14' || this.productId == '32' || this.productId == '39' || this.productId == '73' || this.productId == '74' || this.productId == '76' || this.productId == '25' || this.productId == '27' || this.productId == '16' || this.productId == '26' || this.productId == '48' || this.productId == '57' || this.productId == '80' || this.productId == '79' || this.productId == '84' || this.productId == '81' || this.productId=='82'|| this.productId=='83') {
              this.getSectionList(locationList);
              // this.editsections('Content');this.editsections('Building');this.editsections('Inflation');
              // this.editsections('Plant');this.editsections('Trade'); this.editsections('Miscellaneous');
              // this.editsections('Powersurge');this.editsections('Leakage'); this.editsections('HailDamage');
              // this.editsections('Rent');this.editsections('Geyser');

            }
          }
          else {
            if (this.productId == '63') this.LocationName = [
              {
                "OriginalRiskId": null, "LocationId": "1", "LocationName": "", "BuildingType": null, "BuildingSI": null, "ContentSI": null, 'AllRiskSI': null,
                "ServantList": [{ "ServantType": null, 'ServantCount': null, 'ServantSI': null }],
                "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }],
                "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }],
                'PersonalLiabilitySI': null, 'ServantType': null, 'ServantCount': null, 'ServantSI': null, 'RelationType': null, 'DeathSI': null
              }
            ]
          }
        }
        else {
          if (this.productId == '59') {
            this.locationList = [{
              "LocationId": 1, "LocationName": "", "CoversRequired": "BC", "BuildingOwnerYn": "Y",
              "BuildingList": [{ "WallType": "", "RoofType": "", "FirstLossPayee": "", "BuildingSumInsured": "" }], "BuildingAddress": "",
              "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }],
              "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }]
            }];
            this.editsections('Content'); this.editsections('Building'); this.editsections('ElectronicEquipment');
            this.editsections('AllRisk'); this.editsections('PersonalLiability'); this.editsections('PersonalAccident');
            this.editsections('DomesticServant'); this.editsections('Fidelity');
          }
          else if (this.productId == '63') this.LocationName = [{
            "OriginalRiskId": null, "LocationId": "1", "LocationName": "", "BuildingType": null, "BuildingSI": null, "ContentSI": null, 'AllRiskSI': null,
            "ServantList": [{ "ServantType": null, 'ServantCount': null, 'ServantSI': null }],
            "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }],
            "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }],
            'PersonalLiabilitySI': null, 'ServantType': null, 'ServantCount': null, 'ServantSI': null, 'RelationType': null, 'DeathSI': null
          }
          ];
          else if (this.productId == '19') {
            this.editsections('Content'); this.editsections('Building'); this.editsections('ElectronicEquipment');
            this.editsections('AllRisk'); this.editsections('PublicLiabilityCorporate'); this.editsections('PersonalAccidentCorporate');
            this.editsections('DomesticServant'); this.editsections('MacineryBreakdown'); this.editsections('Burglary'); this.editsections('AccidentalDamageCorporate');
            this.editsections('Fire'); this.editsections('FireAddOn'); this.editsections('StockAddOn'); this.editsections('FireBI'); this.editsections('Money'); this.editsections('Fidelity'); this.editsections('OfficeContentsCorporate'); this.editsections('StockCorporate'); this.editsections('PlatinumCorporate');
            this.editsections('GoodsTransit'); this.editsections('WorkmenCompensation'); this.editsections('GroupPersonalAccidentCorporate')
          }
        }

      })
    
  }
  onEditSetData() {
    let AccDamageSection = this.loopProductItem;
    let obj = {};
    if (AccDamageSection.length != 0) {
      let accPhysical = AccDamageSection.filter(ele => ele.CoverId == 417 || ele.CoverId == '417')
      if (accPhysical.length != 0) { obj['AccidentalPhysicalLossDamage'] = accPhysical[this.tabIndex].SumInsured; obj['IndustryType'] = null; if (accPhysical[0]?.IndustryType != '0') obj['IndustryType'] = accPhysical[0].IndustryType; }
      let accMaximum = AccDamageSection.filter(ele => ele.CoverId == 416 || ele.CoverId == '416')
      if (accMaximum.length != 0) { obj['MaximumLimitperOccurrence'] = accMaximum[this.tabIndex].SumInsured; obj['IndustryType'] = null; if (accMaximum[0]?.IndustryType != '0') obj['IndustryType'] = accMaximum[0].IndustryType; }
      let accAdditional = AccDamageSection.filter(ele => ele.CoverId == 367 || ele.CoverId == '367')
      if (accAdditional.length != 0) { obj['AdditionalclaimsPreparationCosts'] = accAdditional[this.tabIndex].SumInsured; obj['IndustryType'] = null; if (accAdditional[0]?.IndustryType != '0') obj['IndustryType'] = accAdditional[0].IndustryType; }
      let accAccidental = AccDamageSection.filter(ele => ele.CoverId == 491 || ele.CoverId == '491')
      if (accAccidental.length != 0) { obj['Accidentaloilandchemical'] = accAccidental[this.tabIndex].SumInsured; obj['IndustryType'] = null; if (accAccidental[0]?.IndustryType != '0') obj['IndustryType'] = accAccidental[0].IndustryType; }
      if (this.productId == '69') {
        let accOutstanding = AccDamageSection.filter(ele => ele.CoverId == 414 || ele.CoverId == '414')
        if (accOutstanding.length != 0) { obj['OutstandingDebitBalances'] = accOutstanding[0].SumInsured; obj['IndustryType'] = null; if (accOutstanding[0]?.IndustryType != '0') obj['IndustryType'] = accOutstanding[0].IndustryType; }
        let accTransit = AccDamageSection.filter(ele => ele.CoverId == 415 || ele.CoverId == '415')
        if (accTransit.length != 0) { obj['TransitExtension'] = accTransit[0].SumInsured; obj['IndustryType'] = null; if (accTransit[0]?.IndustryType != '0') obj['IndustryType'] = accTransit[0].IndustryType; }
        let accClaims = AccDamageSection.filter(ele => ele.CoverId == 367 || ele.CoverId == '367')
        if (accClaims.length != 0) { obj['ClaimsPreparationCosts'] = this.findDropdownValue(accClaims[0].SumInsured); obj['IndustryType'] = null; if (accClaims[0]?.IndustryType != '0') obj['IndustryType'] = accClaims[0].IndustryType; }
      }
    }
    if (!obj) this.locationList.push(obj);
    this.onEditfirePhoneix();
  }
  onEditfirePhoneix() {
    let entry = this.locationList[this.tabIndex];
    this.locationIndex = this.tabIndex
    this.model.contents = []; this.model.employers = [];
    this.model.contents = this.locationList[0].contents;
    this.IndustryId = entry?.IndustryType;
    this.productItem = new ProductData();
    if (entry.ContentSuminsured) this.productItem.ContentSuminsured = entry.ContentSuminsured;
    if (entry.BuildingSumInsured) this.productItem.BuildingSuminsured = entry.BuildingSumInsured;
    if (entry.WallType) this.productItem.WallType = entry.WallType;
    if (entry.ContentConstructionType) this.productItem.ContentConstructionType = entry.ContentConstructionType;
    if (entry.PlantConstructionType) this.productItem.PlantConstructionType = entry.PlantConstructionType;

    if (entry.PlantSumInsured) this.productItem.PlantSumInsured = entry.PlantSumInsured;
    if (entry.TradeConstructionType) this.productItem.TradeConstructionType = entry.TradeConstructionType;
    if (entry.TradeSumInsured) this.productItem.TradeSumInsured = entry.TradeSumInsured;
    if (entry.MiscellaneousSumInsured) this.productItem.MiscellaneousSumInsured = entry.MiscellaneousSumInsured;
    if (entry.MiscellaneousConstructionType) this.productItem.MiscellaneousConstructionType = entry.MiscellaneousConstructionType;

    if (entry.PowerSurgeSumInsured) this.productItem.PowerSurgeSumInsured = entry.PowerSurgeSumInsured;
    if (entry.FirstLossBasis) this.productItem.FirstLossBasis = entry.FirstLossBasis;
    if (entry.FirstLossBasisSumInsured) this.productItem.FirstLossBasisSumInsured = entry.FirstLossBasisSumInsured;
    if (entry.HailDamageSumInsured) this.productItem.HailDamageSumInsured = entry.HailDamageSumInsured;
    if (entry.RentSumInsured) this.productItem.RentSumInsured = entry.RentSumInsured;

    if (entry.ClothingAndPersonalEffectsPhoenix) this.productItem.ClothingAndPersonalEffectsPhoenix = entry.ClothingAndPersonalEffectsPhoenix;
    if (entry.ClothingAndPersonalEffectsPhoenixDesc) this.productItem.ClothingAndPersonalEffectsPhoenixDesc = entry.ClothingAndPersonalEffectsPhoenixDesc;
    if (entry.ArticlesKeptOnPremisesPhoenix) this.productItem.ArticlesKeptOnPremisesPhoenix = entry.ArticlesKeptOnPremisesPhoenix;
    if (entry.ArticlesKeptOnPremisesPhoenixDesc) this.productItem.ArticlesKeptOnPremisesPhoenixDesc = entry.ArticlesKeptOnPremisesPhoenixDesc;
    if (entry.ElectronicEquipmentPhoenix) this.productItem.ElectronicEquipmentPhoenix = entry.ElectronicEquipmentPhoenix;
    if (entry.ElectronicEquipmentPhoenixDesc) this.productItem.ElectronicEquipmentPhoenixDesc = entry.ElectronicEquipmentPhoenixDesc;
    if (entry.CellularPhonesPhoenix) this.productItem.CellularPhonesPhoenix = entry.CellularPhonesPhoenix;
    if (entry.CellularPhonesPhoenixDesc) this.productItem.CellularPhonesPhoenixDesc = entry.CellularPhonesPhoenixDesc;
    if (entry.CampingEquipmentPhoenix) this.productItem.CampingEquipmentPhoenix = entry.CampingEquipmentPhoenix;
    if (entry.CampingEquipmentPhoenixDesc) this.productItem.CampingEquipmentPhoenixDesc = entry.CampingEquipmentPhoenixDesc;
    if (entry.SportingEquipmentPhoenix) this.productItem.SportingEquipmentPhoenix = entry.SportingEquipmentPhoenix;
    if (entry.SportingEquipmentPhoenixDesc) this.productItem.SportingEquipmentPhoenixDesc = entry.SportingEquipmentPhoenixDesc;
    if (entry.JewelleryPhoenix) this.productItem.JewelleryPhoenix = entry.JewelleryPhoenix;
    if (entry.JewelleryPhoenixDesc) this.productItem.JewelleryPhoenixDesc = entry.JewelleryPhoenixDesc;
    if (entry.Mobilephone) this.productItem.Mobilephone = entry.Mobilephone;
    if (entry.MobilephoneDesc) this.productItem.MobilephoneDesc = entry.MobilephoneDesc;
    if (entry.InflationConstructionType) this.productItem.InflationConstructionType = entry.InflationConstructionType;
    if (entry.InflationSumInsured) this.productItem.InflationSumInsured = entry.InflationSumInsured;
    else this.productItem.InflationSumInsured = null;
    if (entry.GeyserSolarSumInsured) this.productItem.InSolar = entry.GeyserSolarSumInsured;
    if (entry.GeyserSolarDescription) this.productItem.InSolarDesc = entry.GeyserSolarDescription;
    if (entry.GeyserHouseSumInsured) this.productItem.InHouse = entry.GeyserHouseSumInsured;
    if (entry.GeyserHouseDescription) this.productItem.InHouseDesc = entry.GeyserHouseDescription;
    if (entry.GlassSumInsured) this.productItem.GlassSumInsured = entry.GlassSumInsured;
    if (entry.Escalation) this.form.controls['Escalation'].setValue(entry.Escalation);
    if (entry.StateBenefitsSumInsured) this.productItem.StateBenefitSumInsured = entry.StateBenefitsSumInsured;
    if (entry.ClaimsPreparationSumInsured) this.productItem.ClaimsPreparationCost = entry.ClaimsPreparationSumInsured;
    if (entry.LiabilitySumInsured) this.productItem.LiabilitySumInsured = entry.LiabilitySumInsured;
    if (entry.AccidentalDamageSumInsured) this.productItem.AccidentalDamageSumInsured = entry.AccidentalDamageSumInsured;
    if (entry.AccountsRecievableSumInsured) this.productItem.AccountsRecievableSumInsured = entry.AccountsRecievableSumInsured;
    if (entry.CategoryId) this.productItem.CategoryId = entry.CategoryId;
    if (entry.BuildingUsageId) this.productItem.BuildingUsageId = entry.BuildingUsageId;
    if (entry.MajorMoneyLimit) this.productItem.MajorMoneyLimit = entry.MajorMoneyLimit;
    if (entry.SafeLockerGrade) this.productItem.SafeLockerGrade = entry.SafeLockerGrade;
    if (entry.SeasonalIncrease) this.productItem.SeasonalIncrease = entry.SeasonalIncrease;
    if (entry.LocksKeysofReceptacle) this.productItem.LocksKeysofReceptacle = entry.LocksKeysofReceptacle;
    if (entry.ClothingPersonalEffectsofEmployees) this.productItem.ClothingPersonalEffectsofEmployees = entry.ClothingPersonalEffectsofEmployees;
    if (entry.Receptaclesinexcessofpolicylimit) this.productItem.Receptaclesinexcessofpolicylimit = entry.Receptaclesinexcessofpolicylimit;
    if (entry.AccidentalPhysicalLossDamage) this.productItem.AccidentalPhysicalLossDamage = entry.AccidentalPhysicalLossDamage;
    if (entry.Accidentaloilandchemical) this.productItem.Accidentaloilandchemical = entry.Accidentaloilandchemical;
    if (entry.MaximumLimitperOccurrence) this.productItem.MaximumLimitperOccurrence = entry.MaximumLimitperOccurrence;
    if (entry.AdditionalclaimsPreparationCosts) this.productItem.AdditionalclaimsPreparationCosts = entry.AdditionalclaimsPreparationCosts;
    if (entry.OutstandingDebitBalances) this.productItem.OutstandingDebitBalances = entry.OutstandingDebitBalances;
    if (entry.TransitExtension) this.productItem.TransitExtension = entry.TransitExtension;
    if (entry.ClaimsPreparationCosts) this.productItem.ClaimsPreparationCosts = entry.ClaimsPreparationCosts;
    if (entry.FirstLossLimit) this.productItem.FirstLossLimit = entry.FirstLossLimit;
    if (entry.VehiclesintheOpen) this.productItem.VehiclesintheOpen = entry.VehiclesintheOpen;
    if (entry.LocksandKeys) this.productItem.LocksandKeys = entry.LocksandKeys;
    if (entry.LossDamagetoPersonalEffects) this.productItem.LossDamagetoPersonalEffects = entry.LossDamagetoPersonalEffects;
    if (entry.FuelinAbovegroundtanks) this.productItem.FuelinAbovegroundtanks = entry.FuelinAbovegroundtanks;
    if (entry.FuelinUndergroundtanks) this.productItem.FuelinUndergroundtanks = entry.FuelinUndergroundtanks;
    if (entry.DamagetoBuildingscausedbyThieves) this.productItem.DamagetoBuildingscausedbyThieves = entry.DamagetoBuildingscausedbyThieves;
    if (entry.AdditionalClaimsPreparationCosts) this.productItem.AdditionalClaimsPreparationCosts = this.findDropdownValueWithRetry(entry.AdditionalClaimsPreparationCosts);
    if (entry.SpecialReinstatement) this.productItem.SpecialReinstatement = entry.SpecialReinstatement;
    if (entry.InternalGlass) this.productItem.InternalGlass = entry.InternalGlass;
    if (entry.ExternalGlass) this.productItem.ExternalGlass = entry.ExternalGlass;
    if (entry.GlassClaimsPreparationCosts) this.productItem.GlassClaimsPreparationCosts = entry.GlassClaimsPreparationCosts;
    if (this.productId != '32') {
      if (entry.LimitofIndeminity) this.productItem.LimitofIndeminity = entry.LimitofIndeminity;
      if (entry.FidelityClaimsPreparationCost) this.productItem.FidelityClaimsPreparationCost = entry.FidelityClaimsPreparationCost;
    }
    if (entry.ElectronicEquipment) this.productItem.ElectronicEquipment = entry.ElectronicEquipment;
    if (entry.VariousPortableEquipment) this.productItem.VariousPortableEquipment = entry.VariousPortableEquipment;
    if (entry.IncreasedCostofWorking) this.productItem.IncreasedCostofWorking = entry.IncreasedCostofWorking;
    if (entry.IncompatibilityCover) this.productItem.IncompatibilityCover = entry.IncompatibilityCover;
    if (entry.EEclaimsPreparationCosts) this.productItem.EEclaimsPreparationCosts = entry.EEclaimsPreparationCosts;
    if (entry.ElectronicEquipmentDesc) this.productItem.ElectronicEquipmentDesc = entry.ElectronicEquipmentDesc;
    if (entry.VariousPortableEquipmentDesc) this.productItem.VariousPortableEquipmentDesc = entry.VariousPortableEquipmentDesc;
    if (entry.IncreasedCostofWorkingDesc) this.productItem.IncreasedCostofWorkingDesc = entry.IncreasedCostofWorkingDesc;
    if (entry.IncompatibilityCoverDesc) this.productItem.IncompatibilityCoverDesc = entry.IncompatibilityCoverDesc;
    if (entry.EEclaimsPreparationCostsDesc) this.productItem.EEclaimsPreparationCostsDesc = entry.EEclaimsPreparationCostsDesc;
    if (this.productId != '72') {
      if (entry.BuildingSumInsuredFullcover) this.form.controls['BuildingSumInsuredFullcover'].setValue(entry['BuildingSumInsuredFullcover'])
      if (entry.HomeownersLiability) this.form.controls['HomeownersLiability'].setValue(entry['HomeownersLiability'])
      if (entry.AccidentalDamageToMachinery) this.form.controls['AccidentalDamageToMachinery'].setValue(entry['AccidentalDamageToMachinery'])
      if (entry.SolarGeyser) this.form.controls['SolarGeyser'].setValue(entry['SolarGeyser'])
      if (entry.InHouseGeyser) this.form.controls['InHouseGeyser'].setValue(entry['InHouseGeyser'])
      if (entry.Powersurge) this.form.controls['Powersurge'].setValue(entry['Powersurge'])
      if (entry.SubsidenceAndLandslip) this.form.controls['SubsidenceAndLandslip'].setValue(entry['SubsidenceAndLandslip'])
      if (entry.NoClaimBonus) this.form.controls['NoClaimBonus'].setValue(entry['NoClaimBonus'])
      if (entry.BuildingSumInsuredFullcoverDesc) this.form.controls['BuildingSumInsuredFullcoverDesc'].setValue(entry['BuildingSumInsuredFullcoverDesc'])
      if (entry.HomeownersLiabilityDesc) this.form.controls['HomeownersLiabilityDesc'].setValue(entry['HomeownersLiabilityDesc'])
      if (entry.AccidentalDamageToMachineryDesc) this.form.controls['AccidentalDamageToMachineryDesc'].setValue(entry['AccidentalDamageToMachineryDesc'])
      if (entry.SolarGeyserDesc) this.form.controls['SolarGeyserDesc'].setValue(entry['SolarGeyserDesc'])
      if (entry.InHouseGeyserDesc) this.form.controls['InHouseGeyserDesc'].setValue(entry['InHouseGeyserDesc'])
      if (this.productId == '74') {
        if (entry.MedicalExpenses) this.form.controls['MedicalExpenses'].setValue(entry['MedicalExpenses'])
        if (entry.Death) this.form.controls['Death'].setValue(entry['Death'])
        if (entry.TemporaryTotalDisability) this.form.controls['TemporaryTotalDisability'].setValue(entry['TemporaryTotalDisability'])
        if (entry.PermanentTotalDisability) this.form.controls['PermanentTotalDisability'].setValue(entry['PermanentTotalDisability'])
      }
      if (this.productId == '57') {

        this.GPAList = entry.list;

        if (this.GPAList) this.filteredGPAList = this.GPAList.filter(item => item.LocationIndex == this.locationIndex);
        else this.filteredGPAList = [];
      }
      if (entry.GrossProfit) this.form.controls['GrossProfit'].setValue(entry['GrossProfit'])
      if (entry.IncreasedCostOfWorking) this.form.controls['IncreasedCostOfWorking'].setValue(entry['IncreasedCostOfWorking'])
      if (entry.ClaimsPreparationCosts && this.productId != '70' && this.productId != '69') this.form.controls['ClaimsPreparationCosts'].setValue(entry['ClaimsPreparationCosts'])

    }
    if (this.productId == '59') {
      if (entry.PersonalDeath) this.productItem.PersonalDeath = entry.PersonalDeath;
      if (entry.PersonalPermanent) this.productItem.PersonalPermanent = entry.PersonalPermanent;
      if (entry.PersonalTemporary) this.productItem.PersonalTemporary = entry.PersonalTemporary;
      if (entry.PersonalMedical) this.productItem.PersonalMedical = entry.PersonalMedical;
    }
    if (this.productId == '27') {
      if ((entry.SpreadofFire != null && entry.SpreadofFire != undefined && entry.SpreadofFire != '') ||
        (entry.FoodandDrink != null && entry.FoodandDrink != undefined && entry.FoodandDrink != '') ||
        (entry.ForecourtServiceStationExtension != null && entry.ForecourtServiceStationExtension != undefined && entry.ForecourtServiceStationExtension != '') ||
        (entry.CarWashandValetExtension != null && entry.CarWashandValetExtension != undefined && entry.CarWashandValetExtension != '') ||
        (entry.AdditionalclaimsPreparationCosts != null && entry.AdditionalclaimsPreparationCosts != undefined && entry.AdditionalclaimsPreparationCosts != '')) {
        this.EValue = 'Y'
        this.showExtensions = true
      }
    }
    if (this.productId != '72') {
      if (entry.GeneralLiability) this.form.controls['GeneralLiability'].setValue(entry.GeneralLiability);
      if (entry.LegalDefenceCosts) this.form.controls['LegalDefenceCosts'].setValue(entry.LegalDefenceCosts);
      if (entry.WrongfulArrestandDefamation) this.form.controls['WrongfulArrestandDefamation'].setValue(entry.WrongfulArrestandDefamation);
      if (entry.SpreadofFire) this.form.controls['SpreadofFire'].setValue(entry.SpreadofFire);
      if (entry.FoodandDrink) this.form.controls['FoodandDrink'].setValue(entry.FoodandDrink);
      setTimeout(() => {
        if (entry.ProductsLiability) this.form.controls['ProductsLiability'].setValue(entry.ProductsLiability);
        if (entry.DefectiveWorkmanship) this.form.controls['DefectiveWorkmanship'].setValue(entry.DefectiveWorkmanship);
        if (entry.ProductsLiabilityRevenue) this.form.controls['ProductsLiabilityRevenue'].patchValue(entry.ProductsLiabilityRevenue);
        if (entry.DefectiveWorkmanshipRevenue) this.form.controls['DefectiveWorkmanshipRevenue'].patchValue(entry.DefectiveWorkmanshipRevenue);
      }, 100);
      if (entry.ForecourtServiceStationExtension) this.form.controls['ForecourtServiceStationExtension'].setValue(entry.ForecourtServiceStationExtension);
      if (entry.CarWashandValetExtension) this.form.controls['CarWashandValetExtension'].setValue(entry.CarWashandValetExtension);
      if (entry.AdditionalclaimsPreparationCosts) this.form.controls['AdditionalclaimsPreparationCosts']?.setValue(entry.AdditionalclaimsPreparationCosts);
    }
    // Construction All Risk
    if (this.productId == '79' || this.productId=='84' || this.productId=='82' || this.productId=='83') { 
      if (entry.CARTheft) this.form.controls['CARTheft'].setValue(this.CommaFormattedValue(entry.CARTheft));
      if (entry.CARInland) this.form.controls['CARInland'].setValue(this.CommaFormattedValue(entry.CARInland));
      if (entry.CAROffSite) this.form.controls['CAROffSite'].setValue(this.CommaFormattedValue(entry.CAROffSite));
      if (entry.CAROpentrench) this.form.controls['CAROpentrench'].setValue(this.CommaFormattedValue(entry.CAROpentrench));
      if (entry.CARFireBridge) this.form.controls['CARFireBridge'].setValue(this.CommaFormattedValue(entry.CARFireBridge));
      if (entry.CARDemolition) this.form.controls['CARDemolition'].setValue(this.CommaFormattedValue(entry.CARDemolition));
      if (entry.CARProfessional) this.form.controls['CARProfessional'].setValue(this.CommaFormattedValue(entry.CARProfessional));
      if (entry.CAREscalation) this.form.controls['CAREscalation'].setValue(this.CommaFormattedValue(entry.CAREscalation));
      if (entry.CARDevaluation) this.form.controls['CARDevaluation'].setValue(this.CommaFormattedValue(entry.CARDevaluation));
      if (entry.CARClaimPreparation) this.form.controls['CARClaimPreparation'].setValue(this.CommaFormattedValue(entry.CARClaimPreparation));
      if (entry.CARSurrounding) this.form.controls['CARSurrounding'].setValue(this.CommaFormattedValue(entry.CARSurrounding));
      if (entry.CAREstimated) this.form.controls['CAREstimated'].setValue(this.CommaFormattedValue(entry.CAREstimated));
      if (entry.CARAnnual) this.form.controls['CARAnnual'].setValue(this.CommaFormattedValue(entry.CARAnnual));
      if (entry.CarMaximumContract) this.form.controls['CarMaximumContract'].setValue(this.CommaFormattedValue(entry.CarMaximumContract));
      if (entry.ConstructionType) this.productItem.ConstructionType = entry.ConstructionType;
      if (entry.BuildingSumInsureds) this.productItem.BuildingSumInsureds = entry.BuildingSumInsureds;
      if (entry.CARDescription) this.form.controls['CARDescription'].setValue(entry.CARDescription);
      if (entry.CARAnnual) this.form.controls['CARAnnual'].setValue(entry.CARAnnual);
      if (entry.CARPrincipal) this.form.controls['CARPrincipal'].setValue(entry.CARPrincipal);
      if (entry.CARLocationName) this.form.controls['CARLocationName'].setValue(entry.CARLocationName);
      if (entry.CARStartDate) this.form.controls['CARStartDate'].setValue(entry.CARStartDate);
      if (entry.CARPeriodOfActivity) this.form.controls['CARPeriodOfActivity'].setValue(entry.CARPeriodOfActivity);
      if(entry.CARDescription || entry.CARAnnual || entry.CARPrincipal || entry.CARLocationName || entry.CARStartDate){
        this.EValue= 'Y';
        if(this.productId=='79')this.showCARExtensions =true;
        if(this.productId=='84')this.showEARExtensions = true;
      } 
      if (entry.CARuptoConstruction) this.form.controls['CARuptoConstruction'].setValue(entry.CARuptoConstruction);
      if (entry.CARuptoStoreys) this.form.controls['CARuptoStoreys'].setValue(entry.CARuptoStoreys);
      if (entry.CARuptoMonths) this.form.controls['CARuptoMonths'].setValue(entry.CARuptoMonths);
      if (entry.CARuptoSumInsured) this.form.controls['CARuptoSumInsured'].setValue(entry.CARuptoSumInsured);
    }
    //Deterioration Of Stock
    if (entry.DeteriorationOfStockDesc) this.productItem.DeteriorationOfStockDesc = entry.DeteriorationOfStockDesc;
    if (entry.DeteriorationOfStock) this.productItem.DeteriorationOfStock = entry.DeteriorationOfStock;
    if (this.productId == '49') {
      if (entry.CoverageType) this.productItem.CoverageType = entry.CoverageType;
      if (entry.DetoriationRemoval) this.productItem.DetoriationRemoval = entry.DetoriationRemoval;
      if (entry.ClaimPreparationCost) this.findDropdownValueWithRetry(entry.ClaimPreparationCost).then((value) => {
        this.productItem.ClaimPreparationCost = value;
        this.showExtensions = true;
        this.EValue = 'Y'
      });
      if (entry.FireExtingUserCharge) this.productItem.FireExtingUserCharge = entry.FireExtingUserCharge;
      if (entry.GoodsInTransitSumInsured) this.productItem.GoodsInTransitSumInsured = entry.GoodsInTransitSumInsured;
      if (entry.MaximumLimitTrips) this.productItem.MaximumLimitTrips = entry.MaximumLimitTrips;
      if (entry.TransitCoverage) this.productItem.TransitCoverage = entry.TransitCoverage;
      if (entry.TripsMonth) this.productItem.TripsMonth = entry.TripsMonth;
      if (entry.vehicleCount) this.productItem.vehicleCount = entry.vehicleCount;
      if (entry.Commodity) this.productItem.Commodity = entry.Commodity;
    }
    //FirePhoenix
    if (entry.fireBuildingSumInsured) this.productItem.fireBuildingSumInsured = entry.fireBuildingSumInsured
    if (entry.AdditonalInflation) this.productItem.AdditonalInflation = entry.AdditonalInflation
    if (entry.plantMachinery) this.form.controls['plantMachinery'].setValue(entry.plantMachinery);
    if (entry.stockInTrade) this.form.controls['stockInTrade'].setValue(entry.stockInTrade);
    if (entry.miscellaneous) this.form.controls['miscellaneous'].setValue(entry.miscellaneous);
    if (entry.powerSurge) this.form.controls['powerSurge'].setValue(entry.powerSurge);
    if (entry.hailDamage) this.form.controls['hailDamage'].setValue(entry.hailDamage);
    if (entry.rentReceivable) this.form.controls['rentReceivable'].setValue(entry.rentReceivable);
    if (entry.leakageExtension) this.form.controls['leakageExtension'].setValue(entry.leakageExtension);
    if (entry.leakageExtensionSumInsured) this.form.controls['leakageExtensionSumInsured'].setValue(entry.leakageExtensionSumInsured);
    if (entry.contents) this.form.controls['contents']?.setValue(entry?.contents);
    if (entry.GeyserInhouse) this.form.controls['GeyserInhouse'].setValue(entry.GeyserInhouse);
    if (entry.GeyserSolar) this.form.controls['GeyserSolar'].setValue(entry.GeyserSolar);
    if (entry.ConstructionType) this.productItem.ConstructionType = entry.ConstructionType
    //FireBIList
    if (entry.IndeminityPeriod) { this.productItem.IndeminityPeriod = entry.IndeminityPeriod; }
    if (entry.BISumInsured) this.productItem.BISumInsured = entry.BISumInsured;
    if (entry.Cover) { this.productItem.Cover = entry.Cover }
    if (entry.GrossRentals) this.productItem.GrossRentals = entry.GrossRentals;
    if (entry.AccidentalDamage) this.productItem.AccidentalSumInsured = entry.AccidentalDamage;
    if (entry.ClaimPreparationCost) this.productItem.ClaimPreparationCost = entry.ClaimPreparationCost;
    if (entry.UnspecifiedSupplier) this.productItem.UnspecifiedSupplier = entry.UnspecifiedSupplier;
    if (entry.PreventionofAccess) this.form.controls['PreventionofAccess'].setValue(entry.PreventionofAccess);
    if (entry.PublicTelecommuncationSI) this.form.controls['PublicTelecommuncationSI'].setValue(entry.PublicTelecommuncationSI);
    if (entry.PublicTelecommuncation) this.form.controls['PublicTelecommuncation'].setValue(entry.PublicTelecommuncation);

    if (entry.PublicUtilitiesSI) this.form.controls['PublicUtilitiesSI'].setValue(entry.PublicUtilitiesSI);
    if (entry.PublicUtilities) this.form.controls['PublicUtilities'].setValue(entry.PublicUtilities);
    if (entry.CustomerSupplierSI) this.form.controls['CustomerSupplierSI'].setValue(entry.CustomerSupplierSI);
    if (entry.CustomerSupplier) this.form.controls['CustomerSupplier'].setValue(entry.CustomerSupplier);
    if (entry.OfficeContents) this.productItem.OfficeContents = entry.OfficeContents;
    if (entry.OfficeContentsDesc) this.productItem.OfficeContentsDesc = entry.OfficeContentsDesc;
    if (entry.TheftAspect) this.productItem.TheftAspect = entry.TheftAspect;
    if (entry.WaterLeakage) this.productItem.WaterLeakage = entry.WaterLeakage;
    if (entry.PowerSurge) this.productItem.PowerSurge = entry.PowerSurge;
    if (entry.LiabilityForLossOfDocuments) this.productItem.LiabilityForLossOfDocuments = entry.LiabilityForLossOfDocuments;
    if (entry.OfficeClaimCosts) this.productItem.OfficeClaimCosts = entry.OfficeClaimCosts;
    //   if(entry.OfficeClaimCosts){ this.findDropdownValueWithRetry(entry.OfficeClaimCosts).then((value) => {
    //     this.productItem.OfficeClaimCosts = value;

    //   });
    // }
    // Umbrella
    if (entry.UmbrellasumInsured) this.form.controls['UmbrellasumInsured'].setValue(entry.UmbrellasumInsured);

    // HouseHolr contents
    if (entry.AccidentalDamage) this.productItem.HouseAccidentalDamage = entry['AccidentalDamage'];
    if (entry.AccidentalDamageDesc) this.productItem.HouseAccidentalDamageDesc = entry['AccidentalDamageDesc'];
    if (entry.PowerSurge) this.productItem.PowerSurge = entry['PowerSurge'];
    if (entry.PowerSurgeDesc) this.productItem.PowerSurgeDesc = entry['PowerSurgeDesc'];
    if (entry.HolderTheftDesc) this.productItem.HolderTheftDesc = entry['HolderTheftDesc'];
    if (entry.HolderTheft) this.productItem.HolderTheft = entry['HolderTheft'];
    if (entry.HolderBreakdownDesc) this.productItem.HolderBreakdownDesc = entry['HolderBreakdownDesc'];
    if (entry.HolderBreakdown) this.productItem.HolderBreakdown = entry['HolderBreakdown']
    if (this.productId == '81') {
      if (entry.PersonalAccidental) this.productItem.PersonalAccidental = entry['PersonalAccidental'];
      if (entry.PersonalWrongful) this.productItem.PersonalWrongful = entry['PersonalWrongful'];
    }
    if (this.productId == '32') {
      const fidelityArray = this.fidelityForm.get('fidelitys') as FormArray;
      console.log(entry['entries']);
      
      for (let i = 0; i < entry['entries'].length; i++) {
        fidelityArray.push(
          this.fb.group({
            AdditionalClaimsPreparationCosts: entry['entries'][i].AdditionalclaimsPreparationCosts,
            LimitOfIndemnity: entry['entries'][i].Limitofindemnity
          })
        );
        this.IndustryId = entry['entries'][0].IndustryType;
      }

    }
    // House Holders
    if (this.productId == '78' && this.model?.contents?.length == 0) {
      this.model.contents = [];
      console.log("EMp Edit", entry.contents)
      if (entry.contents) {
        const Array = (this.fieldHouseHolderContents[0]?.form?.get('contents') as FormArray);
        // Array.clear();
        // if(Array){Array.controls=[];}
        // this.form.reset();
        this.model.contents = entry.contents;

        // setTimeout(() => {
        //   while (Array.length !== 0) {Array.removeAt(0);}
        //   for (let index = 0; index < entry.contents.length; index++) {
        //     this.model.contents.push(entry.contents[index])
        //     if(index==entry.contents.length-1){
        //       this.model.contents = this.model.contents.filter(obj => Object.keys(obj).length > 0);
        //       Array.patchValue(this.model.contents)
        //     }       
        //   }
        // }, 100);      
      }
      else {
        this.form.reset();
        const Array = (this.fieldHouseHolderContents[0].form.get('contents') as FormArray);
        Array.controls = [];
        this.model.contents = [];
        setTimeout(() => {
          while (Array.length !== 0) { Array.removeAt(0); }
          // this.repeatService.requestAdd(); 
          this.repeatService.requestRemove();
          if (Array.length === 0) {
            this.repeatService.requestAdd();
          }
        }, 100);

      }
    }
    // employers laibility
    if (this.productId == '14' && this.model.employers.length == 0) {
      this.model.employers = [];
      if (entry.employers) {
        for (let index = 0; index < entry.employers.length; index++) {
          this.model.employers.push(entry.employers[index])
          if (index == entry.employers.length - 1) {
            this.model.employers = this.model.employers.filter(obj => Object.keys(obj).length > 0);
          }
        }
      }
      else {
        this.form.reset();
        const Array = (this.fieldEE[0].form.get('employers') as FormArray);
        setTimeout(() => {
          while (Array.length != 0) { Array.removeAt(0); }
          this.repeatService.requestAdd();
        }, 100);
        this.model.employers = [];
      }

    }
    //Receptaclesinexcessofpolicylimit,ClothingPersonalEffectsofEmployees,LocksKeysofReceptacle,MajorMoneyLimit,SeasonalIncrease,SafeLockerGrade
    for (let section of this.sectionDropdownList) {
      if (section.Code == '220' || section.Code == '222' || section.Code == '223' || section.Code == '225' || section.Code == '76' || section.Code == '75' || section.Code == '50' || section.Code == '4' || section.Code == '37'
        || section.Code == '224' || section.Code == '41' || section.Code == '228' || section.Code == '188' || section.Code == '201' || section.Code == '198' || section.Code == '199' || section.Code == '200' || section.Code == '202' || section.Code == '182' || section.Code == '46' || section.Code == '43') {
        for (let cover of section.CoverList) {
          this.productItem[cover.CoverName.replaceAll(" ", "")] = entry[cover.CoverName.replaceAll(" ", "")]
          if (section.Code == '223') this.productItem[cover.CoverName.replaceAll(" ", "") + 'Desc'] = entry[cover.CoverName.replaceAll(" ", "") + 'Desc']
        }
      }
    }
    if (this.endorsementSection && (this.endorsementCode == '850' || this.endorsementCode == 850 || this.endorsementCode == 851 || this.endorsementCode == '851')) {
      let fieldList = [],fieldList2=[],fieldList3=[],fieldList4=[],fieldList5=[];
      
      if (this.productId == '70') { fieldList = this.fieldAccidentalDamage[0].fieldGroup[0].fieldGroup;}
      if(this.productId=='69'){fieldList = this.fieldAccountsRecievable[0].fieldGroup[0].fieldGroup;}
      if(this.productId=='67'){
        console.log("Filtered Fields",this.fields,this.primaryfields,this.extensionfields,this.extensionTablefields,this.interruptionfields)
        fieldList = this.fields;
        fieldList2 = this.primaryfields[0].fieldGroup;
        fieldList3 = this.extensionfields[0].fieldGroup;
        fieldList4 = this.extensionTablefields[0].fieldGroup;
        fieldList5 = this.interruptionfields[0].fieldGroup;
        this.disableCheckFields(fieldList2);
        this.disableCheckFields(fieldList3);
        this.disableCheckFields(fieldList4);
        this.disableCheckFields(fieldList5);
      }
      this.disableCheckFields(fieldList);
    }
    this.getFirstLossPayeeListAlt();
  }
  disableCheckFields(fieldList){
    if(fieldList.length!=0){
      for (let field of fieldList) {
        if (this.productItem[field.key] == null || this.productItem[field.key] == '' || this.productItem[field.key] == '0') {
          if (this.endorsementCode == '850' || this.endorsementCode == 850) {
            if (field.templateOptions) field.templateOptions['disabled'] = true;
            if (field.props) field.props['disabled'] = true;
          }
          else if (this.endorsementCode == 851 || this.endorsementCode == '851') {
            if (field.templateOptions) field.templateOptions['disabled'] = false;
            if (field.props) field.props['disabled'] = false;
          }
        }
        else {
          if (this.endorsementCode == '850' || this.endorsementCode == 850) {
            if (field.templateOptions) field.templateOptions['disabled'] = false;
            if (field.props) field.props['disabled'] = false;
          }
          else if (this.endorsementCode == 851 || this.endorsementCode == '851') {
            if (field.templateOptions) field.templateOptions['disabled'] = true;
            if (field.props) field.props['disabled'] = true;
          }
        }
      }
    }
  }
  onAddRow(type, location) {
    if (type == 'servant') {
      let entry = { "ServantType": null, 'ServantCount': null, 'ServantSI': null };
      location.ServantList.push(entry);
    }
    else if (type == 'PA') {
      let entry = { 'RelationType': null, 'DeathSI': null };
      location.PAList.push(entry);
    }
    else if (type == 'EE' || type == 'MB') {
      let entry = { 'ContentDesc': null, 'ContentId': null, 'ItemId': null, 'SumInsured': null, 'SerialNo': null };
      if (type == 'EE') location.ElecEquipList.push(entry);
      else if (type == 'MB') location.MachineryList.push(entry);
    }
    else if (type == 'Fire') {
      let entry = { "BuildingUsageId": null, "WallType": null, "RoofType": null, "SumInsured": null };
      location.FireList.push(entry);
    }
    else if (type == 'BIFire') {
      let entry = { "ContentId": null, "SumInsured": null, "IndemnityPeriod": "6" };
      location.BIFireList.push(entry);
    }
    else if (type == 'GoodsInTransit') {
      let entry = { "ContentId": null, "SumInsured": null, "ModeOfTransport": null };
      location.GoodsTransitList.push(entry);
    }
    else if (type == 'Liability') {
      let entry = { 'CatgoryId': null, 'SumInsured': null };
      location.LiabilityList.push(entry)
    }
    else if (type == 'Fidelity') {
      let entry = { 'OccupationId': null, 'FidEmpCount': null, 'SumInsured': null };
      location.FidelityList.push(entry)
    }
    else if (type == 'GPAList') {
      let entry = { 'OccupationType': null, "Count": null, 'IndemnityTypeDesc': null, 'SumInsured': null };
      location.GPAList.push(entry)
    }
    else if (type == 'Cover') {
      let entry = { 'CoverId': null, 'SumInsured': 0 };
      location.FireAddOnList.push(entry)
    }
    else if (type == 'StockCover') {
      let entry = { 'CoverId': null, 'SumInsured': 0 };
      location.StockAddOnList.push(entry)
    }
    else if (type == 'AllRisk') {
      let entry = { "ItemId": '', "Content": '', "Serial": '', "Description": '', "SumInsured": 0, };
      location.TableRowAllRisk.push(entry)
    }
    if (this.productId != '19') this.getFirstLossPayeeListAlt();
  }
  deleteRow(location, index, type) {
    if (type == 'servant') { location.ServantList.splice(index, 1) }
    else if (type == 'PA') { location.PAList.splice(index, 1) }
    else if (type == 'Fire') { location.FireList.splice(index, 1) }
    else if (type == 'BIFire') { location.BIFireList.splice(index, 1) }
    else if (type == 'AllRisk') { location.TableRowAllRisk.splice(index, 1) }
    else if (type == 'GoodsInTransit') { location.GoodsTransitList.splice(index, 1) }
    else if (type == 'MB') { location.MachineryList.splice(index, 1) }
    else if (type == 'EE') { location.ElecEquipList.splice(index, 1) }
    else if (type == 'Liability') { location.LiabilityList.splice(index, 1) }
    else if (type == 'Fidelity') { location.FidelityList.splice(index, 1) }
    else if (type == 'GPAList') { location.GPAList.splice(index, 1) }
    else if (type == 'Cover') { location.FireAddOnList.splice(index, 1) }
    else if (type == 'StockCover') { location.StockAddOnList.splice(index, 1) }
    else if (type == 'Geyser') { location.GeyserList.splice(index, 1) }
    else if (type == 'PG') { location.PlateGlassList.splice(index, 1) }
  }
  onTabChange(k) {
    this.currentIndex = this.tabIndex;
    this.onEditDomestic()
  }
  onTabChange2(k) {
    this.tabIndex = this.locationIndex = k.index;
    console.log(this.productItem);
    if (this.productId == '57') {
      console.log(this.locationIndex);
      this.filterGPAList();
    }

    if (this.requestReferenceNo) {
      this.onEditSetData();
    }
    else {
      this.loopProductItem.push(this.productItem);
      this.productItem = new ProductData();
    }

  }
  onEditDomestic() {
    this.currentIndex = this.tabIndex;
    let entry = this.locationList[this.currentIndex];
    this.productItem = new ProductData();
    if (entry.CoversRequired == null || entry.CoversRequired == undefined) entry.CoversRequired = 'BC';
    if (entry.BuildingOwnerYn == null || entry.BuildingOwnerYn == undefined) entry.BuildingOwnerYn = 'Y';
    if (entry.ContentSuminsured) this.productItem.ContentSuminsured = entry.ContentSuminsured;
    if (entry.ContentDescription) this.productItem.ContentDescription = entry.ContentDescription;
    if (entry.AllriskSuminsured) this.productItem.AllriskSumInsured = entry.AllriskSuminsured;
    if (entry.AllriskSumInsured) this.productItem.AllriskSumInsured = entry.AllriskSumInsured;
    if (entry.AllriskDescription) this.productItem.AllriskDescription = entry.AllriskDescription;
    if (entry.AllRiskContentDesc) this.productItem.AllRiskContentDesc = entry.AllRiskContentDesc;
    if (entry.ElectronicEquipmentSI) this.productItem.ElectronicEquipmentSI = entry.ElectronicEquipmentSI;
    if (entry.ElectronicDescription) this.productItem.ElectronicDescription = entry.ElectronicDescription;
    if (entry.PersonalDescription) this.productItem.PersonalDescription = entry.PersonalDescription;
    if (entry.EmpLiabilitySi) { this.productItem.EmpLiabilitySi = entry.EmpLiabilitySi; this.productItem.ContentTypeId = entry.ContentTypeId }
    if (entry.EmpDescription) { this.productItem.EmpDescription = entry.EmpDescription; }
    if (entry.SumInsured) { this.productItem.SumInsured = entry.SumInsured; this.productItem.OccupationType = entry.OccupationType }
    if (entry.CoveringDetails) { this.productItem.CoveringDetails = entry.CoveringDetails; }
    if (entry.DescriptionOfRisk) { this.productItem.DescriptionOfRisk = entry.DescriptionOfRisk; }
    if (entry.DescriptionOfice) { this.productItem.DescriptionOfice = entry.DescriptionOfice; }
    if (entry.DescriptionAcc) { this.productItem.DescriptionAcc = entry.DescriptionAcc; }
    if (entry.GoodsLimit) { this.productItem.GoodsLimit = entry.GoodsLimit; }
    if (entry.PublicLiabilitySI) { this.productItem.EmpLiabilitySi = entry.PublicLiabilitySI }
    if (this.productId == '59') {
      if (entry.PersonalDeath) this.productItem.PersonalDeath = entry.PersonalDeath;
      if (entry.PersonalPermanent) this.productItem.PersonalPermanent = entry.PersonalPermanent;
      if (entry.PersonalTemporary) this.productItem.PersonalTemporary = entry.PersonalTemporary;
      if (entry.PersonalMedical) this.productItem.PersonalMedical = entry.PersonalMedical;
    }
    if (entry.BuildingList[0].BuildingSumInsured && this.productItem.ContentSuminsured) {
      this.domesticMenus = this.domesticMenus
      entry['CoversRequired'] = 'BC'
    }
    else if (entry.BuildingList[0].BuildingSumInsured && !this.productItem.ContentSuminsured) {
      entry['CoversRequired'] = 'B'
      this.domesticMenus = this.domesticMenus.filter(e => e.menu !== 'ContentRisk')
      this.currentDomestic = this.domesticMenus[0].menu;
    }
    else if (!entry.BuildingList[0].BuildingSumInsured && this.productItem.ContentSuminsured) {
      this.domesticMenus = this.domesticMenus.filter(e => e.menu !== 'BuildingDetails')
      this.currentDomestic = this.domesticMenus[0].menu;
      entry['CoversRequired'] = 'C'
    }
    if(this.productId=='59'){
      this.domesticMenus.forEach(element => {
         let valid = this.checkFilled(element.menu);
         if (valid) {
          let index = this.domesticMenus.findIndex(item => item.menu === element.menu);
          this.domesticMenus[index].filled = true;
        }
      });
      this.domesticMenus.sort((a, b) => {
        return (b.filled === true ? 1 : 0) - (a.filled === true ? 1 : 0);
      });
    }
    if (this.productId == '19') {
      if (entry.FireList.length != 0) {
        for (let item of entry.FireList) {
          item['SumInsured'] = this.CommaFormattedCorp(item, 'Fire')
        }
      }
      if (entry.FireAddOnList.length != 0) {
        for (let item of entry.FireAddOnList) {
          item['CoverId'] = String(item.CoverId)
        }
      }
      if (entry.StockAddOnList.length != 0) {
        for (let item of entry.StockAddOnList) {
          item['CoverId'] = String(item.CoverId)
        }
      }
      if (entry.BIFireList.length != 0) {
        for (let item of entry.BIFireList) {
          item['SumInsured'] = this.CommaFormattedCorp(item, 'BusinessFire')
        }
      }
      if (entry.MachineryList.length != 0) {
        for (let item of entry.MachineryList) {
          item['SumInsured'] = this.CommaFormattedCorp(item, 'MB')
        }
      }
      if (entry.ElecEquipList.length != 0) {
        for (let item of entry.ElecEquipList) {
          item['SumInsured'] = this.CommaFormattedCorp(item, 'EE')
        }
      }
      if (entry.LiabilityList.length != 0) {
        for (let item of entry.LiabilityList) {
          item['SumInsured'] = this.CommaFormattedCorp(item, 'Liability')
        }
      }
      if (entry.GPAList.length != 0) {
        for (let item of entry.GPAList) {
          item['SumInsured'] = this.CommaFormattedCorp(item, 'GPA')
        }
      }
      if (entry.MoneyAnnualEstimate) this.productItem.Estimatedannualcashcarryings = String(entry.MoneyAnnualEstimate);
      if (entry.MoneyCollector) this.productItem.MoneyCollector = entry.MoneyCollector;
      if (entry.MoneyDirectorResidence) this.productItem.MoneyDirectorResidence = entry.MoneyDirectorResidence;
      if (entry.MoneySafeLimit) this.productItem.MoneySafeLimit = entry.MoneySafeLimit;
      if (entry.StrongroomSi) this.productItem.MoneyInSafe = entry.StrongroomSi;
      if (entry.MoneyOutofSafe) this.productItem.MoneyOutofSafe = entry.MoneyOutofSafe;
      if (entry.MoneyMajorLoss) this.productItem.MoneyinTransit = entry.MoneyMajorLoss;
      if (entry.SumInsured) this.productItem.SumInsured = String(entry.SumInsured);
      if (entry.FidelityCount) this.productItem.FidEmpCount = entry.FidelityCount;
      if (entry.OccupationId) this.productItem.OccupationId = entry.OccupationId;
      if (entry.IndustryId) this.productItem.IndustryId = String(entry.IndustryId);
      if (entry.BurglarySI) this.productItem.BurglarySi = entry.BurglarySI;
      if (entry.BurglaryLoss) this.productItem.FireSumInsured = String(entry.BurglaryLoss)
      if (entry.PASumInsured) this.productItem.PASumInsured = String(entry.PASumInsured)
      if (entry.SumInsured) this.productItem.SumInsured = String(entry.SumInsured)
      if (entry.OccupationType) this.productItem.OccupationType = String(entry.OccupationType)
      if (entry.IndemnityPeriod) this.productItem.IndemnityPeriod = String(entry.IndemnityPeriod)
      if (entry.AccidentalSumInsured) this.productItem.AccidentalSumInsured = String(entry.AccidentalSumInsured)
      if (entry.OfficeContentsSumInsured) this.productItem.OfficeContentsSumInsured = String(entry.OfficeContentsSumInsured)
      if (entry.StockSumInsured) this.productItem.StockSumInsured = String(entry.StockSumInsured)
      if (entry.PlatinumSumInsured) this.productItem.PlatinumSumInsured = String(entry.PlatinumSumInsured)
      if (entry.PlateGlassType) this.productItem.PlateGlassType = String(entry.PlateGlassType)
      if (entry.GoodsSi) this.productItem.GoodsSi = String(entry.GoodsSi);
      if (entry.GoodsBuildingUsage) this.productItem.GoodsBuildingUsage = entry.GoodsBuildingUsage;
      if (entry.GoodsCategoryId) this.productItem.GoodsCategoryId = entry.GoodsCategoryId;
      if (entry.GoodsOccupationType) this.productItem.GoodsOccupationType = entry.GoodsOccupationType;
      if(this.insuranceId !='100050' && this.productId =='19'){
          this.packageplusMenus.forEach(element => {
        let valid = this.checkFilled(element.menu);
        if (valid) {
         let index = this.packageplusMenus.findIndex(item => item.menu === element.menu);
         this.packageplusMenus[index].filled = true;
       }
     });
     this.packageplusMenus.sort((a, b) => {
       return (b.filled === true ? 1 : 0) - (a.filled === true ? 1 : 0);
     });
      }
    }
     if (this.productId == '59') {
      const AllRiskArray = this.allRiskForm.get('allRisk') as FormArray;
      console.log(entry['entries']);
      
      for (let i = 0; i < entry['entries'].length; i++) {
        AllRiskArray.push(
          this.fb.group({
            AllriskSumInsured: entry['entries'][i].AllriskSumInsured,
            AllriskDescription: entry['entries'][i].AllriskDescription
          })
        );
        this.IndustryId = entry['entries'][0].IndustryType;
      }

    }
    this.getFirstLossPayeeListAlt();
  }
  checkLocationDetail() {
    if (this.LocationName.length != 0) {
      return (this.LocationName[0].LocationName != '');
    }
    else return true;
  }
  checkLocationDetailAlt() {
    console.log()
    if (this.locationList.length != 0) {
      return (this.locationList[0].LocationName != '' && this.locationList[0].BuildingAddress != '' && this.locationList[0].LocationName != null && this.locationList[0].LocationName != undefined && this.locationList[0].BuildingAddress != null);
    }
    else return false;
  }
  getGeyserTypeList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "House_owners"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.geyserTypeList = defaultObj.concat(data.Result);
      })
  }
  getConstructionTypeList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "wall_type"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.constructionTypes = defaultObj.concat(data.Result);
        if (this.productId == '76' || this.productId == '78' || this.productId == '66' || this.productId == '67' || this.productId == '79' || this.productId == '84' || this.productId=='82'|| this.productId=='83') {
          let i = 0
          for (let entry of this.constructionTypes) {
            entry['label'] = entry.CodeDesc; entry['value'] = entry.Code;
            i += 1;
            if (i == this.constructionTypes.length) {
              let fieldList = [];
              if (this.productId == '76') fieldList = this.fieldHouseOwnerPhoenix[0].fieldGroup[0].fieldGroup;
              if (this.productId == '78') fieldList = this.fieldHouseHoldersPhoenix[0]?.fieldGroup[0]?.fieldGroup;
              if (this.productId == '74') fieldList = this.fieldStateBenefitsPhoenix[0].fieldGroup[0].fieldGroup;
              if (this.productId == '39') fieldList = this.fieldMachineryBreakDownPhoenix[0].fieldGroup[0].fieldGroup;
              else if (this.productId == '66' || this.productId == '67') { fieldList = this.primaryfields[0].fieldGroup; }
              else fieldList = this.fieldHouseHolders[0]?.fieldGroup[0]?.fieldGroup;
              let fieldList2 = [], fieldList2Array = [];
              if (this.productId == '76') fieldList = this.fieldHouseOwnerPhoenix[0].fieldGroup[0].fieldGroup;
              if (this.productId == '78' || this.productId == 78) fieldList = this.fieldHouseHolderContents[0]?.fieldArray?.fieldGroup[0].fieldGroup;
              if (this.productId == '74') fieldList = this.fieldStateBenefitsPhoenix[0].fieldGroup[0].fieldGroup;
              if (this.productId == '39') fieldList = this.fieldMachineryBreakDownPhoenix[0].fieldGroup[0].fieldGroup;
              else if (this.productId == '66' || this.productId == '67') fieldList = this.primaryfields[0].fieldGroup;
              else {
                if (!this.requestReferenceNo) fieldList = this.fieldHouseHolderContents[0]?.fieldArray?.fieldGroup[0].fieldGroup;
                else {
                  for (let i = 0; i < this.fieldHouseHolderContents[0]?.fieldGroup?.length; i++) {
                    let fieldList2 = this.fieldHouseHolderContents[0]?.fieldGroup[i]?.fieldGroup?.[0]?.fieldGroup;
                    if (fieldList2?.length) {
                      fieldList2Array.push(fieldList2);
                    }
                  }
                }
              }
              if (this.productId == '79') fieldList = this.fieldsCARPrimary[0].fieldGroup;
              if (this.productId == '84') fieldList = this.fieldsEARPrimary[0].fieldGroup;
              console.log("final arrays", this.fieldHouseHolderContents[0])
              if (this.constructionTypes?.length > 0 && fieldList) {
                for (let field of fieldList) {
                  if (field.key == 'CategoryId') {
                    field.templateOptions.options = [...this.constructionTypes];
                  } else if (field.key == 'ConstructionType' || field.key == 'ContentsType') {
                    field.props.options = this.constructionTypes;

                  }
                }
                // if(fieldList2?.length!=0){
                //   for (let field of fieldList2) {
                //     if (field.key == 'CategoryId') {
                //       field.templateOptions.options = [...this.constructionTypes];  
                //     } else if (['ConstructionType', 'ContentsType'].includes(field.key)) {
                //       field.props.options=this.constructionTypes;

                //     }
                //   }
                // }
                for (let fieldList2 of fieldList2Array) {
                  for (let field of fieldList2) {
                    if (field.key == 'CategoryId') {
                      field.templateOptions.options = [...this.constructionTypes];
                    } else if (['ConstructionType', 'ContentsType'].includes(field.key)) {
                      field.props.options = this.constructionTypes;
                    }
                  }
                }
                //this.cdr.detectChanges();  
              }
            }
          }
        }
      });
  }
  buildingContractorsList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "BUILDING_TYPE_CONTRACTORS"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.buildingContactorTypes = defaultObj.concat(data.Result);
        if (this.productId=='82' || this.productId=='83') {
          let i = 0
          for (let entry of this.buildingContactorTypes) {
            entry['label'] = entry.CodeDesc; entry['value'] = entry.Code;
            i += 1;
            if (i == this.buildingContactorTypes.length) {
              let fieldList = [];
              if(this.productId == '82'|| this.productId=='83') fieldList = this.fieldsCARPrimaryupto[0];
              if (this.buildingContactorTypes?.length > 0 && fieldList) {
                for (let field of fieldList) { 
                  if (field.key == 'CategoryId') {
                    field.templateOptions.options = [...this.constructionTypes];
                  } else if (field.key == 'CARuptoConstruction' || field.key == 'ContentsType') {
                    field.props.options = this.buildingContactorTypes;

                  }
                }
                // if(fieldList2?.length!=0){
                //   for (let field of fieldList2) {
                //     if (field.key == 'CategoryId') {
                //       field.templateOptions.options = [...this.constructionTypes];  
                //     } else if (['ConstructionType', 'ContentsType'].includes(field.key)) {
                //       field.props.options=this.constructionTypes;

                //     }
                //   }
                // }
                // for (let fieldList2 of fieldList2Array) {
                //   for (let field of fieldList2) {
                //     if (field.key == 'CategoryId') {
                //       field.templateOptions.options = [...this.constructionTypes];
                //     } else if (['ConstructionType', 'ContentsType'].includes(field.key)) {
                //       field.props.options = this.constructionTypes;
                //     }
                //   }
                // }
                //this.cdr.detectChanges();  
              }
            }
          }
        }
      });
  }
  getDomesticServantList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "Servant TYPE"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.servantTypeList = defaultObj.concat(data.Result);
      })
  }
  getRelationShipList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "RELATION_TYPE_HOME"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.relationList = defaultObj.concat(data.Result);
      })
  }
  // getPLTotal(){
  //   this.Total = 0;let i=0;
  //   if(this.TableRowPL.length!=0){
  //     for(let tot of this.TableRowPL){
  //       if(tot.SumInsured!=null && tot.SumInsured!='' && tot.SumInsured!=undefined) this.Total=this.Total+Number(tot.SumInsured);
  //       i+=1;
  //       if(i==this.TableRowPL.length){
  //         this.productItem.EmpLiabilitySi = this.Total;
  //         if(this.fields3.length!=0){
  //           let fieldList = this.fields3[0].fieldGroup[0].fieldGroup;
  //           for(let field of fieldList){
  //             if(field.key=='EmpLiabilitySi'){
  //               //field.props.disabled = false;
  //               if(field.formControl) field.formControl.setValue(this.Total);
  //              // field.props.disabled = true;
  //             }
  //             else if(field.key=='LiabilityOccupationId'){
  //               if(field.formControl) field.formControl.setValue(this.plOccupationId);
  //             }
  //           }
  //         }
  //         return this.Total;
  //       }
  //     }
  //   }
  //   else return 0;
  // }
  // getDSTotal(){
  //   this.Total = 0;let i=0;
  //   if(this.TableRowDS.length!=0){
  //     for(let tot of this.TableRowDS){
  //       if(tot.SumInsured!=null && tot.SumInsured!='' && tot.SumInsured!=undefined) this.Total=this.Total+Number(tot.SumInsured);
  //       i+=1;
  //       if(i==this.TableRowDS.length){
  //         this.productItem.DomesticServantSi = this.Total;
  //         if(this.fields7.length!=0){
  //           let fieldList = this.fields7[0].fieldGroup[0].fieldGroup;
  //           for(let field of fieldList){
  //             if(field.key=='DomesticServantSi'){
  //               field.props.disabled = false;
  //               if(field.formControl) field.formControl.setValue(this.Total);
  //               field.props.disabled = true;
  //             }
  //             // else if(field.key=='LiabilityOccupationId'){
  //             //   if(field.formControl) field.formControl.setValue(this.plOccupationId);
  //             // }
  //           }
  //         }
  //         return this.Total;
  //       }
  //     }
  //   }
  //   else return 0;
  // }
  // getPATotal(){
  //   this.Total = 0;let i=0;
  //   if(this.TableRowPA.length!=0){
  //     for(let tot of this.TableRowPA){
  //       if(tot.SumInsured!=null && tot.SumInsured!='' && tot.SumInsured!=undefined) this.Total=this.Total+Number(tot.SumInsured);
  //       i+=1;
  //       if(i==this.TableRowPA.length){
  //         this.productItem.PersonalAccidentSuminsured = this.Total;
  //         if(this.fields4.length!=0){
  //           let fieldList = this.fields4[0].fieldGroup[0].fieldGroup;
  //           for(let field of fieldList){
  //             if(field.key=='PersonalAccidentSuminsured'){
  //                 field.props.disabled = false;
  //                 if(field.formControl) field.formControl.setValue(this.Total);
  //                 field.props.disabled = true;
  //             }
  //             else if(field.key=='OccupationType'){
  //               if(field.formControl) field.formControl.setValue(this.pAOccupationId);
  //             }
  //           }
  //         }
  //         return this.Total;
  //       }
  //     }
  //   }
  //   else return 0;
  // }
  getProductLocation(entry) {
    if (entry != '' && entry != null) return this.locationList.find(ele => ele.RiskId == entry.RiskId)?.LocationName
    else return '';
  }
  onEditBuilding(index) {
    this.currentBuildingIndex = index;
    this.editBuildingSection = true;
    this.enableBuildingEditSection = true;
    this.productItem.LocationAddress = this.building[index].BuildingAddress;
    this.productItem.LocationNameBuilding = this.building[index].LocationName;
    this.productItem.BuildingSumInsureds = this.building[index].BuildingSuminsured;
    // this.LocationName = this.building[index].LocationName;
    // this.BuildingAddress = this.building[index].BuildingAddress;
    // this.BuildingSuminsured = this.building[index].BuildingSuminsured;
    this.individualCommaFormatted('building');
  }
  checkBuildingDetails() {
    if (this.TableRowBuilding.length != 0) {
      if ((this.coversreuired == 'B' || this.coversreuired == 'BC') && this.Building1) return this.TableRowBuilding.some(ele => ele.RoofType == null || ele.RoofType == '' || ele.RoofType == undefined || ele.LocationName == undefined || ele.LocationName == '' || ele.LocationName == null);
      else
        return !this.TableRowBuilding.some(ele => ele.RiskId == null || ele.RiskId == '' || ele.RiskId == undefined || ele.LocationName == undefined || ele.LocationName == '' || ele.LocationName == null);
    }
    else return false;
  }
  checkLocationDetails() {
    if (this.locationList.length == 1) { return this.locationList.some(ele => ele.BuildingAddress == null || ele.BuildingAddress == '' || ele.BuildingAddress == undefined || ele.LocationName == undefined || ele.LocationName == '' || ele.LocationName == null); }
    else return !(this.locationList.length > 1)
  }
  showDialog() {
    console.log("Building", this.TableRowBuilding)

    if (!((this.coversreuired == 'B' || this.coversreuired == 'BC') && this.Building1)) {
      if (this.locationList.length == 0 || this.checkLocationDetails()) {
        Swal.fire({
          title: '<strong>Error</strong>',
          icon: 'info',
          html:
            `<ul class="list-group errorlist">
                      <li>Please Add Location Details First</li>
                  </ul>`,
          showCloseButton: false,
          //focusConfirm: false,
          // showCancelButton:true,

          //confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Ok',
        })
      }
      else {
        this.visible = true;
        this.getContentDetail();
      }
    }
    else if (!this.checkBuildingDetails()) {
      this.visible = true;
      this.getContentDetail();
    }

  }
  showDialogBuilding() {
    if ((this.coversreuired == 'B' || this.coversreuired == 'BC') && this.Building1) {
      if (this.locationList.length == 0 || this.checkLocationDetails()) {
        Swal.fire({
          title: '<strong>Error</strong>',
          icon: 'info',
          html:
            `<ul class="list-group errorlist">
                  <li>Please Add Location Details First</li>
              </ul>`,
          showCloseButton: false,
          //focusConfirm: false,
          // showCancelButton:true,

          //confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Ok',
        })
      }
      else {
        this.getBuildingDetails('direct');
        this.visibleBuilding = true;
      }
    }
    else if (this.TableRowBuilding.length != 0 && !this.checkBuildingDetails()) {
      this.visibleBuilding = true;
      this.getBuildingDetails('direct');
    }

  }
  addLocation() {
    let entry = {
      "LocationId": null, "LocationName": "", "BuildingType": null, "BuildingSI": null, "ContentSI": null, 'AllRiskSI': null,
      'PersonalLiabilitySI': null, 'ServantType': null, 'ServantCount': null, 'ServantSI': null, 'RelationType': null, 'DeathSI': null
    };
    this.LocationName.push(entry);

  }
  onDeleteLocation(index) {
    this.LocationName.splice(index, 1);
  }
  onEditLocationDetails(listData) {
    if (listData.length != 0) {
      this.locationList = listData;
      if (this.locationList.some(ele => ele.LocationName == null || ele.LocationName == undefined)) this.buildingEditSection = true;
      else this.buildingEditSection = false;
      this.locationIndex = null;
    }
    else { this.buildingEditSection = true; if (this.locationList.length == 0) this.onAddLocationDetails(); }
  }
  deleteLocation(index) { this.locationList.splice(index, 1); if (this.locationList.length == 0) this.onAddLocationDetails() }
  onAddLocationDetails() {
    if (this.productId == '59') {
      this.locationList.push({
        "RiskId": String(this.locationList.length + 1), "LocationName": null, "BuildingAddress": null, "CoversRequired": 'BC', "BuildingOwnerYn": 'Y', "WallType": null, "BuildingSumInsured": 0, "SumInsured": 0, "CategoryId": '',
        "BuildingList": [{ "WallType": "", "RoofType": "", "FirstLossPayee": "", "BuildingSumInsured": "", "BuildingDescription": "" }],
        "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }],
        "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }]
      });

    }
    // else if(this.productId=='66'){
    //   this.locationList.push({"RiskId":String(this.locationList.length+1),"LocationName":null,"BuildingAddress":null,"CoversRequired":'B',"BuildingOwnerYn":'N',"WallType":null,"BuildingSumInsured":0,
    //                       "MachineryList":[{'ItemId':null,'SumInsured':null,'SerialNo':null}]});
    // }
    else if (this.productId == '19') {
      this.locationList.push({
        "RiskId": String(this.locationList.length + 1), "LocationName": null, "BuildingAddress": null, "CoversRequired": 'B', "BuildingOwnerYn": 'Y', "BuildingList": [{ "WallType": null, "RoofType": null, "FirstLossPayee": null, "BuildingSumInsured": 0 }], "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ContentId': null, 'ContentDesc': null, 'SumInsured': null, 'SerialNo': null }],
        "LiabilityList": [{ 'CategoryId': null, 'SumInsured': null, 'SerialNo': null }], "FireList": [{ "BuildingUsageId": null, "WallType": null, "RoofType": null, "SumInsured": null }], "BIFireList": [{ "ContentId": null, "IndemityPeriod": "", "SumInsured": null }], "GoodsTransitList": [{ "ContentId": null, "SumInsured": null, "ModeOfTransport": null }], "MachineryList": [{ 'ContentId': null, 'ContentDesc': null, 'CategoryId': null, 'SumInsured': null, 'SerialNo': null }],
        "WorkmenList": [{ 'OccupationId': null, 'SumInsured': null }], "FireAddOnList": [{ "CoverId": null, "SumInsured": 0 }], "StockAddOnList": [{ "CoverId": null, "SumInsured": 0 }],
        "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }],
        "FidelityList": [{ 'OccupationId': null, "FidEmpCount": null, 'SumInsured': null }], "GeyserList": [{ "BuildingUsageId": null, "SumInsured": 0 }],
        "TableRowAllRisk": [{ "ItemId": '', "Content": '', "Serial": '', "Description": '', "SumInsured": 0, }],
        "GPAList": [{ 'OccupationType': null, "Count": null, 'IndemnityTypeDesc': null, 'SumInsured': null }],
      });
    }
    else {
      this.locationList.push({
        "RiskId": String(this.locationList.length + 1), "LocationName": null, "BuildingAddress": null, "CoversRequired": 'B', "BuildingOwnerYn": 'Y', "BuildingList": [{ "WallType": null, "RoofType": null, "FirstLossPayee": null, "BuildingSumInsured": 0 }], "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }],
        "FireList": [{ "BuildingUsageId": null, "WallType": null, "RoofType": null, "SumInsured": null }], "FireAddOnList": [{ "CoverId": null, "SumInsured": 0 }], "StockAddOnList": [{ "CoverId": null, "SumInsured": 0 }],
        // "TableRowAllRisk":[{"ItemId":'',"Content": '', "Serial" : '', "Description": '',"SumInsured": 0,}],
        "GeyserList": [{ "BuildingUsageId": null, "SumInsured": 0 }], "BIFireList": [{ "ContentId": null, "IndemityPeriod": "", "SumInsured": null, "IndemityPeriodDesc": null }], "GoodsTransitList": [{ "ContentId": null, "SumInsured": null, "ModeOfTransport": null }], "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }]
        , "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }]
      });
      this.locationIndex = this.locationList.length - 1;

    }
    console.log(this.locationList);


  }
  onSaveLocationDetails() {
    if (this.locationList.length != 0) {
      let i = 0, j = 0, reqList = [];
      for (let entry of this.locationList) {
        if (entry.LocationName == null || entry.LocationName == '' || entry.LocationName == undefined) { j += 1; entry['LocationNameError'] = true; }
        else { entry['LocationNameError'] = false }
        if (entry.BuildingAddress == null || entry.BuildingAddress == '' || entry.BuildingAddress == undefined) { j += 1; entry['BuildingAddressError'] = true; }
        else { entry['BuildingAddressError'] = false }
        let quoteNo = null;
        if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
        let Obj = {
          "BuildingSuminsured": '0',
          "BuildingAddress": entry.BuildingAddress,
          "Createdby": this.loginId,
          "RiskId": entry.RiskId,
          "InbuildConstructType": "W",
          "QuoteNo": quoteNo,
          "RequestReferenceNo": this.quoteRefNo,
          "SectionId": '1',
          "LocationName": entry.LocationName,
        }
        reqList.push(Obj)
        i += 1;
        if (i == this.locationList.length && j == 0) {
          let urlLink = `${this.motorApiUrl}api/buildingdetails`;
          this.sharedService.onPostMethodSync(urlLink, reqList).subscribe(
            (data: any) => {
              console.log(data);
              let res: any = data;
              if (data.ErrorMessage.length != 0) {
              }
              else { this.buildingEditSection = false; this.locationIndex = null }
            });
        }
      }
    }
  }
  onCancelLocation(type) {
    if (this.TableRowBuilding.length != 0) { this.buildingEditSection = !this.buildingEditSection; this.locationList = this.TableRowBuilding }
    else if (type == 'content') { this.visible = false; }
  }
  showFinalDialogAllRisk(type) {
    if (type == 'AR') {
      this.visibleAllRisk = true;
      this.getallriskDetailsData();
    }
    else if (type == 'PL') {
      this.personalLiabilityDialog = true;
      this.plOccupationError = false;
      this.getPersonalLiabilityDetails('PersonalLiability');
    }
    else if (type == 'PA') {
      this.personalAccidentDialog = true;
      this.getPersonalAccidentDetails('PersonalAccident');
    }
    else if (type == 'EE') {
      this.electronicEquipDialog = true;
      this.getElectronicEquipDetails('ElectronicEquipment');
    }
    else if (type == 'DS') {
      this.domesticServantDialog = true;
      this.getDomesticServantDetails('DomesticServant');
    }
  }
  showDialogAllRisk(type) {
    if (((this.coversreuired == 'B' || this.coversreuired == 'BC') && this.Building1) && this.checkBuildingDetails()) {
      Swal.fire({
        title: '<strong>Error</strong>',
        icon: 'info',
        html:
          `<ul class="list-group errorlist">
              <li>Please Add Building Details First</li>
          </ul>`,
        showCloseButton: false,
        cancelButtonColor: '#d33',
        cancelButtonText: 'Ok',
      })
    }
    else if (!((this.coversreuired == 'B' || this.coversreuired == 'BC') && this.Building1)) {
      if (this.locationList.length == 0 || this.checkLocationDetails()) {
        Swal.fire({
          title: '<strong>Error</strong>',
          icon: 'info',
          html:
            `<ul class="list-group errorlist">
                <li>Please Add Location Details First</li>
            </ul>`,
          showCloseButton: false,
          //focusConfirm: false,
          // showCancelButton:true,

          //confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Ok',
        })
      }
      else this.showFinalDialogAllRisk(type);
    }
    else {
      this.showFinalDialogAllRisk(type);
    }
  }
  addRow() {
    const newItem = { id: this.TableRow.length + 1, RiskId: '', Content: '', SerialNoDesc: '', ContentRiskDesc: '', SumInsured: 0, LocationName: '' };
    this.TableRow.push(newItem);
    this.currentContentRowIndex = this.TableRow.length - 1;
  }
  onChangeContentLocation(entry) {
    if (entry.RiskId) entry['LocationName'] = this.locationList.find(ele => ele.RiskId == entry.RiskId)?.LocationName;
  }
  onChangeFirstLoss(entry) {
  }
  getOccupationName(entry) {
    if (entry?.OccupationId) { return this.occupationList.find(ele => ele.Code == entry.OccupationId)?.CodeDesc }
    else return '';
  }
  getNationalityDesc(entry) {
    if (entry?.Nationality) { return this.countryList.find(ele => ele.Code == entry.Nationality)?.CodeDesc }
    else return '';
  }
  deleteProduct(index) {
    this.TableRow.splice(index, 1);
    if (this.TableRow.length == 0) {
      this.onSaveContentRisk('deleteSave');
    }
  }
  addRowPL() {
    const newItem = { id: this.TableRowPL.length + 1, RiskId: '', Name: '', Nationality: this.countryId, Dob: '', SerialNo: '', SumInsured: 0 };
    this.TableRowPL.push(newItem);
    this.currentPLRowIndex = this.TableRowPL.length - 1;
  }
  addRowDS() {
    const newItem = { id: this.TableRowDS.length + 1, RiskId: '', Name: '', Nationality: this.countryId, Dob: '', SerialNo: '', SumInsured: 0 };
    this.TableRowDS.push(newItem);
    this.currentDSRowIndex = this.TableRowDS.length - 1;
  }
  deleteProductPL(index) {
    this.TableRowPL.splice(index, 1);
    if (this.TableRowPL.length == 0) {
      this.onSavePL('deleteSave', 'PL');
    }
  }
  deleteProductDS(index) {
    this.TableRowDS.splice(index, 1);
    if (this.TableRowDS.length == 0) {
      this.onSavePL('deleteSave', 'DS');
    }
  }
  addRowPA() {
    const newItem = { id: this.TableRowPA.length + 1, RiskId: '', Name: '', Nationality: this.countryId, Dob: '', SerialNo: '', SumInsured: 0 };
    this.TableRowPA.push(newItem);
    this.currentPARowIndex = this.TableRowPA.length - 1;
  }
  addRowPG(location) {
    const newItem = { "": null, SumInsured: 0 };
    location.PlateGlassList.push(newItem);
  }
  addRowGeyser(location) {
    const newItem = { "CategoryId": null, SumInsured: 0 };
    location.GeyserList.push(newItem);
  }
  deleteRowGeyser(location, index) { location.GeyserList.splice(index, 1) }
  deleteProductPA(index) {
    this.TableRowPA.splice(index, 1);
    if (this.TableRowPA.length == 0) {
      this.onSavePA('deleteSave');
    }
  }
  addRowAllRisk() {
    const newItem = { id: this.TableRowAllRisk.length + 1, RiskId: '', ItemId: '', Content: '', Serial: '', Description: '', SumInsured: 0, };
    this.TableRowAllRisk.push(newItem);
    this.currentAllRiskRowIndex = this.TableRowAllRisk.length - 1;
  }
  deleteProductAllRisk(index) {
    this.TableRowAllRisk.splice(index, 1);
    if (this.TableRowAllRisk.length == 0) {
      this.onSaveAllRisk('deleteSave');
    }
  }
  addRowEE() {
    const newItem = { id: this.TableRowEE.length + 1, RiskId: '', ItemId: '', Content: '', Serial: '', Description: '', SumInsured: 0, };
    this.TableRowEE.push(newItem);
    this.currentEERiskRowIndex = this.TableRowEE.length - 1;
  }
  deleteProductEE(index) {
    this.TableRowEE.splice(index, 1);
    if (this.TableRowEE.length == 0) {
      this.onSaveElectronicEquipment('deleteSave');
    }
  }
  getProductDob(entry) {
    if (entry.Dob != null && entry.Dob != '') {
      if (String(entry.Dob).split('/').length > 1) return entry.Dob
      else return String(this.datePipe.transform(entry.Dob, 'dd/MM/yyyy'));
    }
    else return '';
  }
  onSavePL(type, section) {
    let entryList = [];
    if (section == 'PL') entryList = this.TableRowPL;
    else entryList = this.TableRowDS;
    if (entryList.length != 0) {
      let i = 0, j = 0, reqList = [];
      for (let entry of entryList) {
        if (entry.RiskId != null && entry.RiskId != '' && entry.RiskId != undefined) entry['LocationNameError'] = false;
        else { j += 1; entry['LocationNameError'] = true; }
        if (entry.Name != null && entry.Name != '' && entry.Name != undefined) entry['NameError'] = false;
        else { j += 1; entry['NameError'] = true; }
        if (entry.Dob != null && entry.Dob != '' && entry.Dob != undefined) entry['DobError'] = false;
        else { j += 1; entry['DobError'] = true; }
        if (entry.SumInsured != null && entry.SumInsured != undefined && entry.SumInsured != 0 && entry.SumInsured != '0') { entry['SumInsuredError'] = false; }
        else { j += 1; entry['SumInsuredError'] = true; }
        if (entry.OccupationId != null && entry.OccupationId != undefined && entry.OccupationId != '') { entry['OccupationError'] = false; }
        else { j += 1; entry['OccupationError'] = true; }
        if (entry.Nationality != null && entry.Nationality != undefined && entry.Nationality != '') { entry['NationalityError'] = false; }
        else { j += 1; entry['NationalityError'] = true; }
        if (entry.ItemId != null && entry.ItemId != '' && entry.ItemId != undefined) entry['Content'] = this.allriskList.find(ele => ele.Code == entry.ItemId)?.CodeDesc
        let data = {
          "Dob": this.getProductDob(entry),
          "Height": null,
          "OccupationId": entry.OccupationId,
          "PersonName": entry.Name,
          "NationalityId": entry.Nationality,
          "Salary": entry.SumInsured,
          "Weight": entry.Weight,
          "RiskId": entry.RiskId,
          "LocationName": entry.LocationName,
          "SerialNo": null
        }
        reqList.push(data);
        i += 1;
        if (i == entryList.length && j == 0) {
          this.onFinalSavePL(reqList, type, section)
        }
      }
    }
    else this.onFinalSavePL([], type, section)
  }
  onFinalSavePL(reqList, type, section) {
    let sectionID = null;
    if (section == 'PL') sectionID = '36';
    else sectionID = '106';
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "CreatedBy": this.loginId,
      "QuoteNo": quoteNo,
      "RequestReferenceNo": this.quoteRefNo,
      "SectionId": sectionID,
      "Description": "Accident Details",
      "Type": 'PI',
      "PersonalDetails": reqList
    }
    let urlLink = `${this.motorApiUrl}api/savepersonalaccident`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;
        if (data.ErrorMessage.length != 0) {
          if (res.ErrorMessage) {
            if (section == 'PL') {
              if (this.TableRowPL.length != 0) {
                if (this.TableRowPL.length > 1 || (this.TableRowPL[0].SumInsured != null && this.TableRowPL[0].SumInsured != 0)) this.currentPLRowIndex = null;
              }
            }
            else {
              if (this.TableRowDS.length != 0) {
                if (this.TableRowDS.length > 1 || (this.TableRowDS[0].SumInsured != null && this.TableRowDS[0].SumInsured != 0)) this.currentDSRowIndex = null;
              }
            }
          }
        }
        else {
          if (section == 'PL') {
            if (type == 'direct') { this.personalLiabilityDialog = false; this.currentPLRowIndex = null; }
            else {
              this.TableRowPL = [{
                id: 1,
                OccupationId: '',
                RiskId: '',
                Name: '',
                Nationality: this.countryId,
                Dob: '',
                SerialNo: '',
                SumInsured: 0,
              }]
              this.currentPLRowIndex = this.TableRowPL.length - 1;
            }
          }
          else {
            if (type == 'direct') { this.domesticServantDialog = false; this.currentDSRowIndex = null; }
            else {
              this.TableRowDS = [{
                id: 1,
                OccupationId: '',
                RiskId: '',
                Name: '',
                Nationality: this.countryId,
                Dob: '',
                SerialNo: '',
                SumInsured: 0,
              }]
              this.currentDSRowIndex = this.TableRowDS.length - 1;
            }
          }
        }
      },
      (err) => { },
    );
  }
  onSavePA(type) {
    if (this.TableRowPA.length != 0) {
      let i = 0, j = 0, reqList = [];
      for (let entry of this.TableRowPA) {
        if (entry.RiskId != null && entry.RiskId != '' && entry.RiskId != undefined) entry['LocationNameError'] = false;
        else { j += 1; entry['LocationNameError'] = true; }
        if (entry.Name != null && entry.Name != '' && entry.Name != undefined) entry['NameError'] = false;
        else { j += 1; entry['NameError'] = true; }
        if (entry.Dob != null && entry.Dob != '' && entry.Dob != undefined) entry['DobError'] = false;
        else { j += 1; entry['DobError'] = true; }
        if (entry.SumInsured != null && entry.SumInsured != undefined && entry.SumInsured != 0 && entry.SumInsured != '0') { entry['SumInsuredError'] = false; }
        else { j += 1; entry['SumInsuredError'] = true; }
        if (entry.OccupationId != null && entry.OccupationId != undefined && entry.OccupationId != '') { entry['OccupationError'] = false; }
        else { j += 1; entry['OccupationError'] = true; }
        if (entry.Nationality != null && entry.Nationality != undefined && entry.Nationality != '') { entry['NationalityError'] = false; }
        else { j += 1; entry['NationalityError'] = true; }
        if (entry.ItemId != null && entry.ItemId != '' && entry.ItemId != undefined) entry['Content'] = this.allriskList.find(ele => ele.Code == entry.ItemId)?.CodeDesc

        let data = {
          "Dob": this.getProductDob(entry),
          "Height": null,
          "OccupationId": entry.OccupationId,
          "PersonName": entry.Name,
          "NationalityId": entry.Nationality,
          "Salary": entry.SumInsured,
          "Weight": entry.Weight,
          "RiskId": entry.RiskId,
          "LocationName": entry.LocationName,
          "SerialNo": null
        }
        reqList.push(data);
        i += 1;
        if (i == this.TableRowPA.length && j == 0) {
          this.onFinalSavePA(reqList, type);
        }
      }
    }
    else this.onFinalSavePA([], type);
  }
  onFinalSavePA(reqList, type) {
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "CreatedBy": this.loginId,
      "QuoteNo": quoteNo,
      "RequestReferenceNo": this.quoteRefNo,
      "SectionId": "35",
      "Description": "Accident Details",
      "Type": 'PI',
      "PersonalDetails": reqList
    }
    let urlLink = `${this.motorApiUrl}api/savepersonalaccident`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let res: any = data;
        if (data.ErrorMessage.length != 0) {
          if (res.ErrorMessage) {
            if (this.TableRowPA.length != 0) {
              if (this.TableRowPA.length > 1 || (this.TableRowPA[0].SumInsured != null && this.TableRowPA[0].SumInsured != 0)) this.currentPARowIndex = null;
            }
          }
        }
        else {
          if (type == 'direct') { this.personalAccidentDialog = false; this.currentPARowIndex = null; }
          else {
            this.TableRowPA = [{
              id: 1,
              OccupationId: '',
              RiskId: '',
              Name: '',
              Nationality: this.countryId,
              Dob: '',
              SerialNo: '',
              SumInsured: 0,
            }];
            this.currentPARowIndex = this.TableRowPA.length - 1;
          }
        }
      },
      (err) => { },
    );
  }
  getallriskDetailsData() {
    let urlLink = `${this.motorApiUrl}api/getallcontentrisk`;
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "RequestReferenceNO": this.quoteRefNo,
      "QuoteNo": quoteNo,
      "SectionId": "3"
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        // let res: any = data;
        if (data.Result.ContentRiskDetails) {
          this.TableRowAllRisk = data?.Result?.ContentRiskDetails;
          if (this.TableRowAllRisk.length != 0) {
            if (this.TableRowAllRisk.length > 1 || (this.TableRowAllRisk[0].SumInsured != null && this.TableRowAllRisk[0].SumInsured != 0)) this.currentAllRiskRowIndex = null;
          }
          if (this.TableRowAllRisk.length != 0) {
            for (let entry of this.TableRowAllRisk) {
              this.onChangeContentLocation(entry);
              entry['Content'] = entry?.ItemValue;
              entry['Serial'] = entry?.SerialNo;
              entry['Description'] = entry?.SerialNoDesc;
            }
          }
        }
        else {
          this.TableRowAllRisk = [{
            id: 1,
            ItemId: '',
            Content: '',
            Serial: '',
            Description: '',
            SumInsured: 0,
          }];
        }
      })
  }
  getTotalAllRisk() {
    this.Total = 0; let i = 0;
    if (this.TableRowAllRisk.length != 0) {
      for (let tot of this.TableRowAllRisk) {
        if (tot.SumInsured != null && tot.SumInsured != '' && tot.SumInsured != undefined) tot.SumInsured = Number(tot.SumInsured);
        this.Total = this.Total + tot.SumInsured;
        i += 1;
        if (i == this.TableRowAllRisk.length) {
          this.productItem.AllriskSumInsured = this.Total;
          if (this.fields2.length != 0) {
            let fieldList = this.fields2[0].fieldGroup[0].fieldGroup;
            //console.log("Field Lsit",fieldList)
            for (let field of fieldList) {
              // if(field.key=='BuildingBuildYear' && this.insuranceId=='100004'){
              //   field.props.options = this.getYearList();
              //   console.log("Building JSON",this.fields)
              // }
              if (field.key == 'AllriskSumInsured') {
                field.templateOptions.disabled = false;
                if (field.formControl) field.formControl.setValue(this.Total);
                field.templateOptions.disabled = false;
              }
            }
          }
          return this.Total;
        }
      }
    }
    else { this.productItem.SumInsured = 0; return 0; }
  }
  getTotalEE() {
    this.Total = 0; let i = 0;
    if (this.TableRowEE.length != 0) {
      for (let tot of this.TableRowEE) {
        if (tot.SumInsured != null && tot.SumInsured != '' && tot.SumInsured != undefined) tot.SumInsured = Number(tot.SumInsured);
        this.Total = this.Total + tot.SumInsured;
        i += 1;
        if (i == this.TableRowEE.length) {
          this.productItem.ElectronicEquipmentSI = this.Total;
          if (this.fields6.length != 0) {
            let fieldList = this.fields6[0].fieldGroup[0].fieldGroup;
            //console.log("Field Lsit",fieldList)
            for (let field of fieldList) {
              // if(field.key=='BuildingBuildYear' && this.insuranceId=='100004'){
              //   field.props.options = this.getYearList();
              //   console.log("Building JSON",this.fields)
              // }
              if (field.key == 'ElectronicEquipmentSI') {
                field.templateOptions.disabled = false;
                if (field.formControl) field.formControl.setValue(this.Total);
                field.templateOptions.disabled = false;
              }
            }
          }
          return this.Total;
        }
      }
    }
    else { this.productItem.SumInsured = 0; return 0; }
  }
  addRowBuilding() {
    const newItem = {
      id: this.TableRowBuilding.length + 1, BuildingUsageId: '', BuildingBuildYear: '', FirstLossPayee: '', SavedYN: 'N',
      WallType: '', RoofType: '', BuildingSumInsured: 0, LocationName: '', RiskId: this.TableRowBuilding.length + 1
    };
    this.TableRowBuilding.push(newItem);
    this.currentBuildingRowIndex = this.TableRowBuilding.length - 1;
    console.log("Final Table Row", this.TableRowBuilding)
  }
  onDeleteBuilding(index) {
    // if(this.TableRowBuilding[index].SavedYN=='Y'){
    //   Swal.fire({
    //     title: '<strong><i class="fa fa-trash"></i>&nbsp;Delete</strong>',
    //     icon: 'error',
    //     html:
    //       `<ul class="list-group errorlist">
    //        <li>Are You Sure Want to Remove All Details Regarding to this Building?</li>
    //    </ul>`,
    //     showCloseButton: false,
    //     focusConfirm: false,
    //     showCancelButton:true,

    //    confirmButtonColor: '#3085d6',
    //    cancelButtonColor: '#d33',
    //    confirmButtonText:"Yes! Delete it",
    //    cancelButtonText: 'No',
    //   }).then((result) => {
    //     if (result.isConfirmed) {

    //     } 
    //     else{

    //     }
    //   })
    // }
    // else this.TableRowBuilding.splice(index,1);
    this.TableRowBuilding.splice(index, 1);
    if (this.TableRowBuilding.length == 0) {
      this.onSaveBuildingList();
    }
  }
  getTotal() {
    this.Total = 0; let i = 0;
    if (this.TableRow.length != 0) {
      for (let tot of this.TableRow) {
        if (tot.SumInsured != null && tot.SumInsured != '' && tot.SumInsured != undefined) this.Total = this.Total + Number(tot.SumInsured);
        i += 1;
        if (i == this.TableRow.length) {
          this.productItem.ContentSuminsured = this.Total;
          if (this.fields1.length != 0) {
            let fieldList = this.fields1[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) {
              if (field.key == 'ContentSuminsured') {
                field.props.disabled = false;
                if (field.formControl) field.formControl.setValue(this.Total);
                field.props.disabled = false;
              }
            }
          }
          return this.Total;
        }
      }
    }
    else return 0;

  }
  getTotalBuilding() {
    this.Total = 0; let i = 0;
    if (this.TableRowBuilding.length != 0 && ((this.coversreuired == 'B' || this.coversreuired == 'BC') && this.Building1)) {
      for (let tot of this.TableRowBuilding) {
        if (tot.BuildingSumInsured != null && tot.BuildingSumInsured != '' && tot.BuildingSumInsured != undefined) tot.BuildingSumInsured = Number(tot.BuildingSumInsured);
        this.Total = this.Total + tot.BuildingSumInsured;
        i += 1;
        if (i == this.TableRowBuilding.length) {

          this.productItem.BuildingSuminsured = this.Total;
          if (this.fields.length != 0) {
            let fieldList = this.fields[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) {
              if (field.key == 'BuildingBuildYear' && this.insuranceId == '100004') {
                field.props.options = this.getYearList();
              }
              if (field.key == 'BuildingSuminsured') {
                field.templateOptions.disabled = false;
                field.formControl.setValue(this.Total);
                field.templateOptions.disabled = false;
              }
            }
          }
          return this.Total;
        }
      }
    }
    else { this.productItem.BuildingSuminsured = 0; return 0; }

  }
  onSaveElectronicEquipment(type) {
    if (this.TableRowEE.length != 0) {
      let i = 0, j = 0, reqList = [];
      for (let entry of this.TableRowEE) {
        if (entry.RiskId != null && entry.RiskId != '' && entry.RiskId != undefined) entry['LocationNameError'] = false;
        else { j += 1; entry['LocationNameError'] = true; }
        if (entry.ItemId != null && entry.ItemId != '' && entry.ItemId != undefined) entry['ContentRiskDescError'] = false;
        else { j += 1; entry['ContentRiskDescError'] = true; }
        if (entry.SumInsured != null && entry.SumInsured != undefined && entry.SumInsured != 0 && entry.SumInsured != '0') { entry['SumInsuredError'] = false; }
        else { j += 1; entry['SumInsuredError'] = true; }
        if (entry.ItemId != null && entry.ItemId != '' && entry.ItemId != undefined) entry['Content'] = this.allriskList.find(ele => ele.Code == entry.ItemId)?.CodeDesc
        let data = {
          "ItemId": entry.ItemId,
          "RiskId": entry.RiskId,
          "ContentRiskDesc": entry.Content,
          "SerialNoDesc": entry.Description,
          "MakeAndModel": "TN123",
          "SerialNo": entry.Serial,
          "ItemValue": entry.Content,
          "SumInsured": entry.SumInsured
        }
        reqList.push(data);
        i += 1;
        if (i == this.TableRowEE.length && j == 0) {
          this.onFinalSaveAllRisk(reqList, type, '76');
        }
      }
    }
    else this.onFinalSaveAllRisk([], type, '76')
  }
  onSaveAllRisk(type) {
    if (this.TableRowAllRisk.length != 0) {
      let i = 0, j = 0, reqList = [];
      for (let entry of this.TableRowAllRisk) {
        if (entry.RiskId != null && entry.RiskId != '' && entry.RiskId != undefined) entry['LocationNameError'] = false;
        else { j += 1; entry['LocationNameError'] = true; }
        if (entry.ItemId != null && entry.ItemId != '' && entry.ItemId != undefined) entry['ContentRiskDescError'] = false;
        else { j += 1; entry['ContentRiskDescError'] = true; }
        if (entry.SumInsured != null && entry.SumInsured != undefined && entry.SumInsured != 0 && entry.SumInsured != '0') { entry['SumInsuredError'] = false; }
        else { j += 1; entry['SumInsuredError'] = true; }
        if (entry.ItemId != null && entry.ItemId != '' && entry.ItemId != undefined) entry['Content'] = this.allriskList.find(ele => ele.Code == entry.ItemId)?.CodeDesc
        let data = {
          "ItemId": entry.ItemId,
          "RiskId": entry.RiskId,
          "ContentRiskDesc": entry.Content,
          "SerialNoDesc": entry.Description,
          "MakeAndModel": "TN123",
          "SerialNo": entry.Serial,
          "ItemValue": entry.Content,

          "SumInsured": entry.SumInsured
        }
        reqList.push(data);
        i += 1;
        if (i == this.TableRowAllRisk.length && j == 0) {
          this.onFinalSaveAllRisk(reqList, type, '3');
        }
      }
    }
    else this.onFinalSaveAllRisk([], type, '3')
  }
  onFinalSaveAllRisk(reqList, Type, sectionId) {
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "CreatedBy": this.loginId,
      "QuoteNo": quoteNo,
      "RequestReferenceNo": this.quoteRefNo,
      "BranchCode": this.branchCode,
      "SectionId": sectionId,
      "Type": 'A',
      "ContentRiskDetails": reqList,
      "Companyid": this.insuranceId,
      "ProductId": this.productId
    }
    let urlLink = `${this.motorApiUrl}api/savecontentrisk`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;
        if (data.ErrorMessage.length != 0) {
          if (res.ErrorMessage) {
            if (this.TableRowAllRisk.length != 0 && sectionId == '3') {
              if (this.TableRowAllRisk.length > 1 || (this.TableRowAllRisk[0].SumInsured != null && this.TableRowAllRisk[0].SumInsured != 0)) this.currentAllRiskRowIndex = null;
            }
            else if (this.TableRowEE.length != 0 && sectionId == '76') {
              if (this.TableRowEE.length > 1 || (this.TableRowEE[0].SumInsured != null && this.TableRowEE[0].SumInsured != 0)) this.currentEERiskRowIndex = null;
            }
          }
        }
        else {
          if (sectionId == '3') {
            if (Type == 'direct') this.visibleAllRisk = false;
            else {
              this.TableRowAllRisk = [{
                id: 1,
                ItemId: '',
                Content: '',
                Serial: '',
                Description: '',
                SumInsured: 0,
              }];
              this.currentAllRiskRowIndex = this.TableRowAllRisk.length - 1;
            }
          }
          else {
            if (Type == 'direct') this.electronicEquipDialog = false;
            else {
              this.TableRowEE = [{
                id: 1,
                ItemId: '',
                Content: '',
                Serial: '',
                Description: '',
                SumInsured: 0,
              }];
              this.currentEERiskRowIndex = this.TableRowEE.length - 1;
            }
          }
        }
      },
      (err) => { },
    );
  }
  onSaveContentRisk(type) {
    if (this.TableRow.length != 0) {
      console.log("Final Table Row", this.TableRow)
      let i = 0, reqList = [], j = 0;
      for (let entry of this.TableRow) {
        if (entry.RiskId != null && entry.RiskId != '' && entry.RiskId != undefined) entry['LocationNameError'] = false;
        else { j += 1; entry['LocationNameError'] = true; }
        if (entry.ItemId != null && entry.ItemId != '' && entry.ItemId != undefined) entry['ContentTypeError'] = false;
        else { j += 1; entry['ContentTypeError'] = true; }
        if (entry.SumInsured != null && entry.SumInsured != '' && entry.SumInsured != undefined && entry.SumInsured != 0 && entry.SumInsured != '0') { entry['SumInsuredError'] = false; }
        else { j += 1; entry['SumInsuredError'] = true; }
        if (entry.ItemId != null && entry.ItemId != '' && entry.ItemId != undefined) entry['Content'] = this.dropList.find(ele => ele.Code == entry.ItemId)?.CodeDesc
        let data = {
          "ItemId": entry.ItemId,
          "RiskId": entry.RiskId,
          "ContentRiskDesc": entry.ContentRiskDesc,
          "SerialNoDesc": entry.SerialNoDesc,
          "MakeAndModel": "TN123",
          "SerialNo": entry.SerialNoDesc,
          "ItemValue": entry.Content,
          "SumInsured": entry.SumInsured,
          "LocationName": entry.LocationName
        }
        /*if(data.Dob!=null){
            data.Dob = this.datePipe.transform(data.Dob, "dd/MM/yyyy")
        }*/
        reqList.push(data);
        i += 1;

        if (i == this.TableRow.length && j == 0) {
          this.finalSaveRiskDetails(reqList, 'C', type);
        }
      }

    }
    else { this.finalSaveRiskDetails([], 'C', type); }
  }
  getdetails() {
    let contentData: any; let newcontent: any;
    contentData = new ProfessionalIndemnity();
    newcontent = new ContentProfessionalIndermity();
    this.fields8[0] = contentData?.fields;
    this.fields9[0] = newcontent?.fields;
    // this.professionaltype();
    this.Indemitytype();
    this.getOccupationList('106', 'ProfessionalIntermidity');
  }
  getEditDetails() {
    let ReqObj = {
      "InsuranceId": "100020",
      "ProductId": "56",
      "SectionLevelReq": [
        {
          "RequestReferenceNo": "FAK-POI-05046",
          "RiskId": "53",
          "SectionId": "106"
        },
      ]
    }
    let urlLink = `${this.CommonApiUrl}dropdown/professionaltype`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {

        }
      },
      (err) => { },
    );
  }

  professionaltype() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "SectionId": "105",
      "BranchCode": "99999"
    }
    let urlLink = `${this.CommonApiUrl}dropdown/professionaltype`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.ProfessionalTypes = data.Result;
          let defaultObj = [{ 'label': '-Select-', 'value': '' }]
          for (let i = 0; i < this.ProfessionalTypes.length; i++) {
            this.ProfessionalTypes[i].label = this.ProfessionalTypes[i]['CodeDesc'];
            this.ProfessionalTypes[i].value = this.ProfessionalTypes[i]['Code'];
            delete this.ProfessionalTypes[i].CodeDesc;
            if (i == this.ProfessionalTypes.length - 1) {
              this.fields8[0].fieldGroup[0].fieldGroup[4].props.options = defaultObj.concat(this.ProfessionalTypes);
            }
          }
        }
      },
      (err) => { },
    );
  }


  getRelationTypeList(type) {
    let ReqObj = {
      "InsuranceId": this.insuranceId
    }
    let urlLink = `${this.CommonApiUrl}dropdown/ratingrelationtypes`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          let defaultObj = [{ 'label': '-Select-', 'value': '' }]
          this.relationList = data.Result;
          if (this.relationList.length != 0) {
            for (let i = 0; i < this.relationList.length; i++) {
              this.relationList[i].label = this.relationList[i]['CodeDesc'];
              this.relationList[i].value = this.relationList[i]['Code'];
              delete this.relationList[i].CodeDesc;
              if (i == this.relationList.length - 1) {
                // this.fields[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = defaultObj.concat(this.relationList);
                this.fields[0].fieldGroup[0].fieldGroup[0].fieldArray.fieldGroup[0].fieldGroup[0].props.options = defaultObj.concat(this.relationList);

              }
              // console.log('FFFF',this.fields[0].fieldGroup[0].fieldGroup[0].fieldGroup[i].fieldGroup[0].fieldGroup[0].props.options )
              //this.fields[0].fieldGroup[0].fieldGroup[0].fieldGroup[i].fieldGroup[0].fieldGroup[0].props.options = defaultObj.concat(this.relationList);

              for (let x of this.fields) {
                let vars = x.fieldGroup[0].fieldGroup[0];
                let j = 0;
                for (let n of vars.fieldGroup) {
                  console.log('HHHHHHHHHHHHH', n);
                  this.fields[0].fieldGroup[0].fieldGroup[0].fieldGroup[j].fieldGroup[0].fieldGroup[0].props.options = defaultObj.concat(this.relationList);

                  j += 1;
                }
              }

            }
          }
        }
      });
  }

  Indemitytype() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "SectionId": "105",
      "BranchCode": "99999"
    }
    let urlLink = `${this.CommonApiUrl}dropdown/indemnitytype`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.IndimnityTypes = data.Result;
          let defaultObj = [{ 'label': '-Select-', 'value': '' }]
          //   for (let i = 0; i < this.IndimnityTypes.length; i++) {
          //     this.IndimnityTypes[i].label = this.IndimnityTypes[i]['CodeDesc'];
          //     this.IndimnityTypes[i].value = this.IndimnityTypes[i]['Code'];
          //     delete this.IndimnityTypes[i].CodeDesc;
          //     if (i == this.IndimnityTypes.length - 1) {
          //         this.fields8[0].fieldGroup[0].fieldGroup[3].props.options = defaultObj.concat(this.IndimnityTypes);
          //   }
          // }
        }
      },
      (err) => { },
    );
  }
  AddnewCovers() {
    let entry3 = {
      "CreatedBy": this.loginId,
      "RiskId": null,
      "RelationType": '3',
      "RelationTypeDesc": null,
      "DateOfBirth": null
    }
    this.productItem.patientList.push(entry3);
    let fieldGroup = [
      {
        fieldGroupClassName: 'grid',
        key: 'patientList',
        fieldGroup: [
          {
            className: 'w-full md:mt-0 mt-5 mdw-5 ml-4 mr-4',
            type: 'ngselect',
            key: 'RelationType',
            defaultValue: '',
            props: {
              label: 'Relation Type',
              required: true,
              options: [
              ],
            },

            expressions: {

            },
          },
          {
            className: 'w-full md:mt-0 mt-5 mdw-5 ml-4 mr-4',
            type: 'input',
            key: 'NickName',
            props: {
              label: 'Nick Name',
              required: false,
              options: [
              ],
            },
            expressions: {

            },
          },
          {
            className: 'w-full md:mt-0 mt-3 md:w-1/3 ml-4 mr-4',
            type: 'datepicker',
            key: 'DateOfBirth',
            defaultValue: '',
            templateOptions: {
              defaultValue: '',
            },
            props: {
              label: 'Date Of Birth',
              required: true,
              type: 'date',
              datepickerOptions: {
                defaultValue: '',
                max: ''
              },
            },
          }
        ]
      }
    ];
    let fire: any = this.fields[0].fieldGroup[0].fieldGroup;
    console.log('MMMMMMMMM', fire)
    fire = fire.concat(fieldGroup)
    console.log('RRRRRRRRRR', fire);
    this.fields[0] = {
      "fieldGroup": [
        {
          "props": { label: 'Health Insurance' },
          "fieldGroup": fire
        }
      ]
    };
    this.getRelationTypeList('change');
  }
  onTabClicked(event, header) {
    console.log("Source Event", event, header);
    if (event.index != 0) {
      if (this.productId != '19' && this.selectedTab != 1 && this.LocationList.length == 0) this.onSave(event.tab.textLabel)
    }

    console.log('Tab event', event);
  }
  getSumInsuredDetails() {
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "QuoteNo": quoteNo,
      "ProductId": this.productId
    }
    let urlLink = `${this.CommonApiUrl}quote/productsuminsureddetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.sumInsuredDetails = data.Result;
          this.item = this.sumInsuredDetails?.ProductSuminsuredDetails?.SectionId;
          // if(this.productId!='19' && this.productId!='59'){
          //   this.setTabSections();
          //   this.getContentList();
          // }
          // else{
          this.newjsonfile();

          //this.setTabSections();
          //}

          if (this.six) {
            this.Electronic();
          }
          if (this.productId == '21' || this.productId == '26') {
            this.getallriskLists();
          }
          if (this.productId == '5' || this.productId == '29') {
            this.getAccesroies();
            this.getchassisAcc();
          }
          // else if(this.productId=='26'){
          //   this.getallriskListsplant();
          // }
          else if (this.productId == '39') {
            this.getallriskMachinery();
          }
          else if (this.productId == '42') {
            this.getcontenttype();
            this.getCyberDetails();
          }
          else {
            //this.getallriskList();
          }

          if (this.sumInsuredDetails) {
            // if(this.first) this.contentSumInsured = this.sumInsuredDetails.ProductSuminsuredDetails.ContentSuminsured;
            // if(this.second) this.pASumInsured = this.sumInsuredDetails.ProductSuminsuredDetails.ContentSuminsured;
            // if(this.third) this.pASumInsured = this.sumInsuredDetails.ProductSuminsuredDetails.ContentSuminsured;
            // if(this.fifth) this.pASumInsured = this.sumInsuredDetails.ProductSuminsuredDetails.ContentSuminsured;
            this.currencyValue = this.sumInsuredDetails.ProductSuminsuredDetails.CurrencyId;
            if (this.productId == '5' || this.productId == '29') {
              this.currencyValue = this.sumInsuredDetails.ProductSuminsuredDetails.Currency;
            }
            this.accidentOccupation = this.sumInsuredDetails.ProductSuminsuredDetails.OccupationTypeDesc;
            this.accidentOccupationId = this.sumInsuredDetails.ProductSuminsuredDetails.OccupationType;
            this.liabilityOccupation = this.sumInsuredDetails.ProductSuminsuredDetails.LiabilityOccupationDesc;
            this.liabilityOccupationId = this.sumInsuredDetails.ProductSuminsuredDetails.LiabilityOccupationId
            let buildingSI = this.sumInsuredDetails.ProductSuminsuredDetails.BuildingSuminsured;
            if (buildingSI != '' && buildingSI != null && buildingSI != undefined) {
              this.actualBuildingSI = buildingSI;
              console.log('LLLLLLLLLL', this.actualBuildingSI);
            }
            else this.actualBuildingSI = 0;
            let contentSI = this.sumInsuredDetails.ProductSuminsuredDetails.ContentSuminsured;
            if (contentSI != '' && contentSI != null && contentSI != undefined) {
              this.actualContentSI = contentSI;
            }
            else this.actualContentSI = 0;
            let allRiskSI = this.sumInsuredDetails.ProductSuminsuredDetails.AllriskSumInsured;
            if (allRiskSI != '' && allRiskSI != null && allRiskSI != undefined) {
              this.actualAllRiskSI = allRiskSI;
              console.log('KKKKKKKKKKK', this.actualAllRiskSI);
            }
            else this.actualAllRiskSI = 0;

            let AccSI = this.sumInsuredDetails.ProductSuminsuredDetails.AccessoriesSuminsured;
            if (AccSI != '' && AccSI != null && AccSI != undefined) {
              this.actualAssSI = AccSI;
            }
            else this.actualAssSI = 0;

            let EquipmentSi = this.sumInsuredDetails.ProductSuminsuredDetails.EquipmentSi;
            if (EquipmentSi != '' && EquipmentSi != null && EquipmentSi != undefined) {
              this.EquipmentSi = EquipmentSi;
            }
            else this.EquipmentSi = 0;
            let pAccSI = this.sumInsuredDetails.ProductSuminsuredDetails.PersonalAccSuminsured;
            if (pAccSI != '' && pAccSI != null && pAccSI != undefined) {
              this.actualPersonalAccSI = pAccSI;
            }
            else this.actualPersonalAccSI = 0;
            let pASI = this.sumInsuredDetails.ProductSuminsuredDetails.PersonalIntermediarySuminsured;
            if (pASI != '' && pASI != null && pASI != undefined) {
              this.actualPersonalIntSI = pASI;
            }
            else this.actualPersonalIntSI = 0;
            let electr = this.sumInsuredDetails.ProductSuminsuredDetails.ElecEquipSuminsured;
            if (electr != '' && electr != null && electr != undefined) {
              this.actualElectronicIntSI = electr;
            }
            else this.actualElectronicIntSI = 0;
            if (this.productId != '57') {
              let empSI = this.sumInsuredDetails.ProductSuminsuredDetails.EmpLiabilitySi;
              if (empSI != '' && empSI != null && empSI != undefined) {
                this.actualEmployeeSI = empSI;
              }
              else this.actualEmployeeSI = 0;
            }
            else {
              let empSI = this.sumInsuredDetails.ProductSuminsuredDetails.SumInsured;
              if (empSI != '' && empSI != null && empSI != undefined) {
                this.actualEmployeeSI = empSI;
              }
              else this.actualEmployeeSI = 0;
            }
            let MachinerySI = this.sumInsuredDetails.ProductSuminsuredDetails.MachinerySi;
            if (MachinerySI != '' && MachinerySI != null && MachinerySI != undefined) {
              this.actualMachinerySI = MachinerySI;
            }
            else this.actualMachinerySI = 0;
            let FidEmpSi = this.sumInsuredDetails.ProductSuminsuredDetails.FidEmpSi;
            if (FidEmpSi != '' && FidEmpSi != null && FidEmpSi != undefined) {
              this.actualFidelitySI = FidEmpSi;
            }
            else this.actualFidelitySI = 0;
            console.log("SI Rec", this.sumInsuredDetails);
          }
          if (this.productId != '19') {
            this.getbuilding();
          }
          if (this.productId == '5' || this.productId == '29') {
            this.getAccessories();
          }
        }
      },
      (err) => { },
    );
  }
  onFormSubmit() {
    if (this.productId == '5') this.onSaveAccessories();

  }

  onSave(type) {
    if (this.building.length != 0) {
      console.log("Building Details", this.building);
      let i = 0, buildReqList: any[] = [];
      for (let build of this.building) {
        if (i == 0) {
          this.LocationList = [];
        }
        let sumInsured = null;
        if (this.sumInsured == true) {
          if (build.BuildingSuminsured == undefined || build.BuildingSuminsured == null) sumInsured = null;
          // else if(build.BuildingSuminsured.includes(',')){ sumInsured = build.BuildingSuminsured.replace(/,/g, '') }
          else sumInsured = build.BuildingSuminsured;
        }
        else {
          sumInsured = 0;
        }
        this.LocationList.push({ "Code": String(i + 1), "CodeDesc": build.LocationName })
        let quoteNo = null;
        if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
        let ReqObj = {
          "BuildingSuminsured": sumInsured,
          "BuildingAddress": build.BuildingAddress,
          "Createdby": this.loginId,
          "InbuildConstructType": "W",
          "QuoteNo": quoteNo,
          "RequestReferenceNo": this.quoteRefNo,
          "SectionId": build.SectionId,
          "LocationName": build.LocationName
        }
        buildReqList.push(ReqObj);
        i += 1;
        if (i == this.building.length) {
          this.saveBuildingDetails(buildReqList, type);
        }
      }
      console.log('TTTTTTTTTTTTTTTT', this.LocationList)
      if (this.first || this.second || this.fifth || this.ten || this.third || this.nine || this.seven || this.eight || this.six) {
        if (this.LocationList.length != 0) {
          for (let j = 0; j < this.LocationList.length; j++) {
            this.LocationList[j].label = this.LocationList[j]['CodeDesc'];
            this.LocationList[j].value = this.LocationList[j]['Code'];
            delete this.LocationList[j].CodeDesc;
            if (j == this.LocationList.length - 1) {
              if (this.first) {
                this.fieldsContent[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
              }
              if (this.second) {
                this.fieldsPersonalAccident[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
              }
              if (this.fifth) {
                this.fieldsPersonalInd[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
              }
              if (this.six) {
                this.fieldsElectronic[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
              }
              if (this.ten) {
                this.fieldsDevice[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
              }
              if (this.third) {
                this.fieldsRisk[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
              }
              if (this.nine) {
                this.fieldsMachinery[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
              }
              if (this.seven) {
                if (this.productId == '57' && this.sectionDetails.find((ele) => ele.SectionId == 45)) this.fieldsEmpFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[3].props.options = this.LocationList;
                else this.fieldsEmpFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[7].props.options = this.LocationList;
              }
              if (this.eight) {

                this.fieldFEFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[7].props.options = this.LocationList;
              }
            }
          }
        }
      }
    }

    //this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);

  }
  getcontenttype() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/cybercontents`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.CyperList = data.Result;
          for (let i = 0; i < this.CyperList.length; i++) {
            this.CyperList[i].label = this.CyperList[i]['CodeDesc'];
            this.CyperList[i].value = this.CyperList[i]['Code'];
            delete this.CyperList[i].CodeDesc;
            if (i == this.CyperList.length - 1) {
              this.fieldsDevice[0].fieldGroup[0].fieldGroup[0].fieldGroup[1].props.options = this.CyperList;
            }
          }
          console.log('CyberContent List', this.CyperList);
        }
      },
      (err) => { },
    );
  }
  onSaveLocation() {
    if (this.currentBuildingIndex != null) {
      this.building[this.currentBuildingIndex].BuildingAddress = this.productItem.LocationAddress;
      this.building[this.currentBuildingIndex].LocationName = this.productItem.LocationNameBuilding;
      this.building[this.currentBuildingIndex].BuildingSuminsured = this.productItem.BuildingSumInsureds;
      this.productItem.LocationAddress = null;
      this.productItem.LocationNameBuilding = null;
      this.productItem.BuildingSumInsureds = null;
    }
    else {
      let entry = {
        "BuildingAddress": this.productItem.LocationAddress,
        "BuildingBuildYear": null,
        "BuildingFloors": null,
        "InbuildConstructType": null,
        "BuildingSuminsured": this.productItem.BuildingSumInsureds,
        "RiskId": null,
        "LocationName": this.productItem.LocationNameBuilding,
        "SectionId": "1"
      }
      this.building.push(entry);
      this.productItem.LocationAddress = null;
      this.productItem.LocationNameBuilding = null;
      this.productItem.BuildingSumInsureds = null;
    }
  }
  getallriskMachinery() {
    console.log('QQQQQQQQQQ333333333', this.quoteNo);
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode,
      "QuoteNo": this.quoteNo
    }
    let urlLink = `${this.CommonApiUrl}dropdown/machinerycontent`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.allriskList = data.Result.ContentTypeRes;
          for (let i = 0; i < this.allriskList.length; i++) {
            this.allriskList[i].label = this.allriskList[i]['CodeDesc'];
            this.allriskList[i].value = this.allriskList[i]['Code'];
            delete this.allriskList[i].CodeDesc;
            if (i == this.allriskList.length - 1) {
              this.fieldsMachinery[0].fieldGroup[0].fieldGroup[0].fieldGroup[3].props.options = this.allriskList;
            }
          }
          //this.getOccupationList()
        }
      },
      (err) => { },
    );
  }
  getallriskLists() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/businessallrisk`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.allriskList = data.Result;
          for (let i = 0; i < this.allriskList.length; i++) {
            this.allriskList[i].label = this.allriskList[i]['CodeDesc'];
            this.allriskList[i].value = this.allriskList[i]['Code'];
            delete this.allriskList[i].CodeDesc;
            if (i == this.allriskList.length - 1) {
              this.fieldsRisk[0].fieldGroup[0].fieldGroup[0].fieldGroup[1].props.options = this.allriskList;
            }
          }
          //this.getOccupationList();

        }
      },
      (err) => { },
    );
  }
  Electronic() {
    let ReqObj = {
      "BranchCode": this.branchCode,
      "InsuranceId": this.insuranceId,
    }
    let urlLink = `${this.CommonApiUrl}dropdown/electronicitems`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.ElectronicList = data?.Result;
          console.log('RRRRRRRRRRRRRRRRRRR', this.ElectronicList);
          for (let j = 0; j < this.ElectronicList.length; j++) {
            this.ElectronicList[j].label = this.ElectronicList[j]['CodeDesc'];
            this.ElectronicList[j].value = this.ElectronicList[j]['Code'];
            delete this.ElectronicList[j].CodeDesc;
            if (j == this.ElectronicList.length - 1) {
              console.log('LLLLLLLLLLLLLLLLLL', this.ElectronicList);
              this.fieldsElectronic[0].fieldGroup[0].fieldGroup[0].fieldGroup[1].props.options = this.ElectronicList;
            }
          }
        }
      },
      (err) => { },
    );
  }
  getCyberDetails() {
    let urlLink = `${this.motorApiUrl}api/getallcontentrisk`;
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "QuoteNo": quoteNo,
      "SectionId": this.item[0]
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;
        if (res.Result) {
          if (res.Result.ContentRiskDetails) {
            if (res.Result.ContentRiskDetails.length != 0) {
              this.CyberItem = res.Result.ContentRiskDetails;

            }
          }
        }
      })
  }
  getchassisAcc() {
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "QuoteNo": quoteNo
    }
    let urlLink = `${this.CommonApiUrl}dropdown/motorWithaccessories`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          let defaultObj = [{ "Code": '', "CodeDesc": "---Select---" }]
          this.ChassisList = defaultObj.concat(data.Result);
          if (this.ChassisList.length == 2) { this.productItem.AccessoriesChassisNo = this.ChassisList[1].Code; }
        }
      },
      (err) => { },
    );
  }
  getAccesroies() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/motorcontent`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          let defaultObj = [{ "Code": '', "CodeDesc": "---Select---" }]
          this.AccLists = defaultObj.concat(data.Result);
        }
      },
      (err) => { },
    );
  }
  getAccessories() {
    let urlLink = `${this.motorApiUrl}api/getallcontentrisk`;
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "QuoteNo": quoteNo,
      "SectionId": "99999"
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;
        if (res.Result) {
          if (res.Result.ContentRiskDetails) {
            if (res.Result.ContentRiskDetails.length != 0) {
              if (this.endorsementSection) {
                console.log('Acessories Section', this.enableFieldsList)
                this.accessoriesSection = !this.enableFieldsList.some(ele => ele == 'AccessoriesSuminsured');
              }
              //else this.contentRiskSection = true;
              else this.accessoriesSection = true;
              this.accessoriesList = res.Result.ContentRiskDetails;
              console.log('Get details of Accessories', this.accessoriesList);
              this.getTotalSICost('Accessories');
            }
            else {

            }
          }

        }
      })
  }
  onEditAccessories(index, rowdata) {
    let edit = this.accessoriesList.findIndex(ele => ele.SerialNoDesc == rowdata.SerialNoDesc);
    console.log('LLLL', rowdata.ItemId);
    this.currentAccessoriesIndex = edit;
    this.enableAccessoriesEditSection = true;
    this.editAccessoriesSection = true;

    this.productItem.AccessoriesType = rowdata.ItemId;
    this.productItem.AccessoriesSerialNo = rowdata.SerialNoDesc;//this.serialNoDesc
    this.productItem.AccessoriesChassisNo = rowdata.RiskId; //this.MachineryName // this.MiSumInsured
    this.productItem.AccessoriesSI = rowdata.SumInsured;
    //this.machineryItemId = this.machineries[index].ItemId;
    this.individualCommaFormatted('accessories');
  }
  newjsonfile() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "OptedSectionIds": this.item
    }
    let urlLink = `${this.CommonApiUrl}master/getoptedsectionadditionalinfo`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Result) {
          this.sectionDetails = data.Result;
          this.setTabSections();
          this.getbuilding();
        }
      });
  }
  setTabSections() {


    //if(this.productId=='19' || this.productId=='59'){
    if (this.sectionDetails.length != 0) {
      let items = this.sectionDetails.find((ele) => ele.SectionId == 1 || (this.productId == '19' && ele.SectionId == 40));
      if (items) {
        if (items?.AddDetailYn == 'Y') {
          this.sumInsured = true;
          let fireData = new LocationDetails();
          let entry = [];
          this.field = [
            {
              fieldGroupClassName: 'row buildingsuminsureds',
              fieldGroup: [
                {
                  type: 'commaSeparator',
                  key: 'BuildingSumInsureds',
                  className: 'col-sm-5 offset-lg-1 offset-md-1',
                  props: {
                    maxLength: 15,
                    label: `Sum Insured`,
                  },

                  hooks: {
                    onInit: (field: FormlyFieldConfig) => {
                      field.formControl.valueChanges.subscribe(() => {
                        this.individualCommaFormatted('building');
                      });
                    },
                  },
                  expressions: {
                  },
                },

              ]
            }
          ];
          this.fieldss = fireData?.fields.concat(this.field);
          this.productItem = new ProductData();
          this.formSection = true; this.viewSection = false;
        }
        else {
          this.sumInsured = false;
          let fireData = new LocationDetails();
          this.fieldss = fireData?.fields;
          this.productItem = new ProductData();
          this.formSection = true; this.viewSection = false;
        }
      }
      else {
        this.sumInsured = false;
        let fireData = new LocationDetails();
        this.fieldss = fireData?.fields;
        this.productItem = new ProductData();
        this.formSection = true; this.viewSection = false;
      }
      let first = this.sectionDetails.find((ele) => (ele.SectionId == 47));

      const second = this.sectionDetails.find((ele) => ele.SectionId == 35);
      if (second) {
        if (second?.AddDetailYn == 'Y') {
          this.second = true;
          let fireData = new PersonalAccident();
          let entry = [];
          this.fieldsPersonalAccident = fireData?.fields;

          console.log('Second', this.fieldsPersonalAccident);

          let regionHooks = {
            onInit: (field: FormlyFieldConfig) => {
              field.formControl.valueChanges.subscribe(() => {
                this.individualCommaFormatted('PersonalAccident');
              });
            }
          }
          this.fieldsPersonalAccident[0].fieldGroup[0].fieldGroup[0].fieldGroup[3].hooks = regionHooks;
        }
        else {
          this.second = false;
        }
      }
      else this.second = false;
      const third = this.sectionDetails.find((ele) => ele.SectionId == 3);
      const six = this.sectionDetails.find((ele) => ele.SectionId == 39);
      const nine = this.sectionDetails.find((ele) => ele.SectionId == 41);
    }
    else {
      this.sumInsured = false;
      let fireData = new LocationDetails();
      this.fieldss = fireData?.fields;
      this.productItem = new ProductData();
      this.formSection = true; this.viewSection = false;
    }
    // }
    // else if(this.item){
    //     let items = this.item.find((Code) => Code == '1' || Code=='40');
    //     if (items) {
    //       this.sumInsured=true;
    //       let fireData = new LocationDetails();
    //       let entry = [];
    //       this.field = [
    //         {
    //               fieldGroupClassName: 'row buildingsuminsureds',
    //               fieldGroup: [
    //                     {
    //                       type: 'commaSeparator',
    //                       key: 'BuildingSumInsureds',
    //                       className: 'col-sm-5 offset-lg-1 offset-md-1',
    //                       props: {
    //                         label: `Sum Insured`,
    //                       },
    //                       validators: {
    //                         validation: [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
    //                       },
    //                       hooks: {
    //                         onInit: (field: FormlyFieldConfig) => {
    //                           field.formControl.valueChanges.subscribe(() => {
    //                             this.individualCommaFormatted('building');
    //                           });
    //                         },
    //                       },
    //                       expressions: {
    //                       },
    //                     },

    //               ]
    //         }
    //       ];
    //       this.fieldss = fireData?.fields.concat(this.field);  
    //       this.productItem = new ProductData();
    //       this.formSection = true; this.viewSection = false;
    //       console.log('GGGGGGGGGGGGGGGG')    
    //     }
    //     else {
    //       this.sumInsured =false;
    //       let fireData = new LocationDetails();
    //       this.fieldss = fireData?.fields;  
    //       console.log('dddddddddddddddddd')
    //       this.productItem = new ProductData();
    //       this.formSection = true; this.viewSection = false;      
    //     }
    //     let first = this.item.find((Code) => Code == '47' || Code=='40');
    //     if (first && this.productId!='6' && this.productId!='19') {
    //       this.first=true;
    //       let fireData = new ContentRisk();
    //       let entry = [];
    //       this.fieldsContent = fireData?.fields;
    //       let regionHooks ={ onInit: (field: FormlyFieldConfig) => {
    //         field.formControl.valueChanges.subscribe(() => {
    //           this.individualCommaFormatted('content')
    //         });
    //       } }
    //       //this.fields[0].fieldGroup[1].fieldGroup[0].fieldGroup[1].hooks = regionHooks;
    //       this.fieldsContent[0].fieldGroup[0].fieldGroup[0].fieldGroup[4].hooks = regionHooks;
    //       // this.getMedicalDetails();
    //     }
    //     else {
    //       this.first =false;
    //     }
    //   const second = this.item.find((Code) => Code == '35');
    //   if (second && this.productId!='19') {
    //     this.second = true;
    //     let fireData = new PersonalAccident();
    //     let entry = [];
    //     this.fieldsPersonalAccident = fireData?.fields;

    //     console.log('Second',this.fieldsPersonalAccident);

    //     let regionHooks ={ onInit: (field: FormlyFieldConfig) => {
    //       field.formControl.valueChanges.subscribe(() => {
    //         this.individualCommaFormatted('PersonalAccident');
    //       });
    //     } }
    //     this.fieldsPersonalAccident[0].fieldGroup[0].fieldGroup[0].fieldGroup[3].hooks = regionHooks;
    //     // this.productItem.AccOccupation = this.accidentOccupation;
    //   }
    //   else {
    //     this.second = false;
    //   }
    //   const third = this.item.find((Code) => Code == '3');
    //   if (third && this.productId!='21' && this.productId!='19') {
    //     this.third = true;
    //     let fireData = new AllRisks();
    //     let entry = [];
    //     this.fieldsRisk = fireData?.fields;

    //     console.log('third',this.fieldsRisk);

    //     let regionHooks ={ onInit: (field: FormlyFieldConfig) => {
    //       field.formControl.valueChanges.subscribe(() => {
    //         this.individualCommaFormatted('AllRisk');
    //       });
    //     } }
    //     this.fieldsRisk[0].fieldGroup[0].fieldGroup[0].fieldGroup[4].hooks = regionHooks;
    //     this.getallriskList();
    //   }
    //   else {
    //     this.third = false;
    //   }
    //   const fifth = this.item.find((Code) => Code == '36');
    //   if (fifth && this.productId!='19') {

    //     this.fifth = true;


    //     let fireData = new PersonalIndemenitys();
    //     let entry = [];
    //     this.fieldsPersonalInd = fireData?.fields;
    //     this.form = new FormGroup({});
    //     this.productItem = new ProductData();
    //     console.log('fifth',this.fieldsPersonalInd);

    //     let regionHooks ={ onInit: (field: FormlyFieldConfig) => {
    //       field.formControl.valueChanges.subscribe(() => {
    //         this.individualCommaFormatted('PersonalInd');
    //       });
    //     } }
    //     this.fieldsPersonalInd[0].fieldGroup[0].fieldGroup[0].fieldGroup[3].hooks = regionHooks;
    //   }
    //   else {
    //     this.fifth = false;
    //   }
    //   const six = this.item.find((Code) => Code == '39');
    //   if (six && this.productId!='19') {
    //     this.six = true;
    //     let fireData = new ElectronicEquip();
    //     let entry = [];
    //     this.fieldsElectronic = fireData?.fields;
    //     this.form = new FormGroup({});
    //     this.productItem = new ProductData();
    //     console.log('sssssssssiiiiiiiiiixxxxxxxx',this.fieldsElectronic);

    //     let regionHooks ={ onInit: (field: FormlyFieldConfig) => {
    //       field.formControl.valueChanges.subscribe(() => {
    //         this.individualCommaFormatted('Electronicequip');
    //       });
    //     } }
    //     this.fieldsElectronic[0].fieldGroup[0].fieldGroup[0].fieldGroup[5].hooks = regionHooks;
    //     this.monthList = [
    //       {"Code":"01","CodeDesc":"January"},
    //       {"Code":"02","CodeDesc":"February"},
    //       {"Code":"03","CodeDesc":"March"},
    //       {"Code":"04","CodeDesc":"April"},
    //       {"Code":"05","CodeDesc":"May"},
    //       {"Code":"06","CodeDesc":"June"},
    //       {"Code":"07","CodeDesc":"July"},
    //       {"Code":"08","CodeDesc":"August"},
    //       {"Code":"09","CodeDesc":"September"},
    //       {"Code":"10","CodeDesc":"October"},
    //       {"Code":"11","CodeDesc":"November"},
    //       {"Code":"12","CodeDesc":"December"},
    //     ]
    //       for (let i = 0; i < this.monthList.length; i++) {
    //         this.monthList[i].label = this.monthList[i]['CodeDesc'];
    //         this.monthList[i].value = this.monthList[i]['Code'];
    //         delete this.monthList[i].CodeDesc;
    //         if (i == this.monthList.length - 1) {
    //           this.fieldsElectronic[0].fieldGroup[0].fieldGroup[0].fieldGroup[2].props.options= this.monthList;
    //         }
    //       }
    //   }
    //   else {
    //     this.six = false;
    //   }
    //   const seven = this.item.find((Code) =>Code =='37' || Code == '38' || Code == '45');
    //   if(seven && this.productId!='19'){
    //     this.seven = true;
    //     this.getEmployeeDetails();
    //     this.getOccupationList(seven);

    //     let fireData = new EmployeeLiablityss();
    //     let entry = [];
    //     this.fieldsEmpFields = fireData?.fields;
    //     this.form = new FormGroup({});
    //     this.productItem = new ProductData();
    //     console.log('Seven',this.fieldsEmpFields);

    //     let regionHooks ={ onInit: (field: FormlyFieldConfig) => {
    //       field.formControl.valueChanges.subscribe(() => {
    //         this.individualCommaFormatted('employee');
    //       });
    //     } }
    //     this.fieldsEmpFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[8].hooks = regionHooks;
    //     this.monthList = [
    //       {"Code":"01","CodeDesc":"January"},
    //       {"Code":"02","CodeDesc":"February"},
    //       {"Code":"03","CodeDesc":"March"},
    //       {"Code":"04","CodeDesc":"April"},
    //       {"Code":"05","CodeDesc":"May"},
    //       {"Code":"06","CodeDesc":"June"},
    //       {"Code":"07","CodeDesc":"July"},
    //       {"Code":"08","CodeDesc":"August"},
    //       {"Code":"09","CodeDesc":"September"},
    //       {"Code":"10","CodeDesc":"October"},
    //       {"Code":"11","CodeDesc":"November"},
    //       {"Code":"12","CodeDesc":"December"},
    //     ]
    //       for (let i = 0; i < this.monthList.length; i++) {
    //         this.monthList[i].label = this.monthList[i]['CodeDesc'];
    //         this.monthList[i].value = this.monthList[i]['Code'];
    //         delete this.monthList[i].CodeDesc;
    //         if (i == this.monthList.length - 1) {
    //           this.fieldsEmpFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[5].props.options = this.monthList;
    //         }
    //       }
    //    } 
    //    else this.seven = false;
    //    const eight = this.item.find((Code) => Code == '43');
    //     if(eight && this.productId!='19'){
    //     this.eight = true;
    //     this.getFidelityDetails();
    //     this.getOccupationList(eight);
    //     let fireData = new Fedilitis();
    //     let entry = [];
    //     this.fieldFEFields = fireData?.fields;
    //     this.form = new FormGroup({});
    //     this.productItem = new ProductData();
    //     console.log('eight',this.fieldFEFields);

    //     let regionHooks ={ onInit: (field: FormlyFieldConfig) => {
    //       field.formControl.valueChanges.subscribe(() => {
    //         this.individualCommaFormatted('fidelity');
    //       });
    //     } }
    //     this.fieldFEFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[8].hooks = regionHooks;
    //     this.monthList = [
    //       {"Code":"01","CodeDesc":"January"},
    //       {"Code":"02","CodeDesc":"February"},
    //       {"Code":"03","CodeDesc":"March"},
    //       {"Code":"04","CodeDesc":"April"},
    //       {"Code":"05","CodeDesc":"May"},
    //       {"Code":"06","CodeDesc":"June"},
    //       {"Code":"07","CodeDesc":"July"},
    //       {"Code":"08","CodeDesc":"August"},
    //       {"Code":"09","CodeDesc":"September"},
    //       {"Code":"10","CodeDesc":"October"},
    //       {"Code":"11","CodeDesc":"November"},
    //       {"Code":"12","CodeDesc":"December"},
    //     ]
    //       for (let i = 0; i < this.monthList.length; i++) {
    //         this.monthList[i].label = this.monthList[i]['CodeDesc'];
    //         this.monthList[i].value = this.monthList[i]['Code'];
    //         delete this.monthList[i].CodeDesc;
    //         if (i == this.monthList.length - 1) {
    //           this.fieldFEFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[5].props.options = this.monthList;
    //         }
    //       }
    //     } 
    //     else this.eight = false;
    //    const nine = this.item.find((Code) => Code == '41');
    //     if (nine && this.productId!='16' && this.productId!='19') {
    //       this.nine = true;
    //       let fireData = new Machineryss();
    //       let entry = [];
    //       this.fieldsMachinery = fireData?.fields;
    //       this.form = new FormGroup({});
    //       this.productItem = new ProductData();
    //       console.log('nine',this.fieldsMachinery);

    //       let regionHooks ={ onInit: (field: FormlyFieldConfig) => {
    //         field.formControl.valueChanges.subscribe(() => {
    //           this.individualCommaFormatted('machinery');
    //         });
    //       } }
    //       this.fieldsMachinery[0].fieldGroup[0].fieldGroup[0].fieldGroup[6].hooks = regionHooks;
    //       this.getallriskMachinery();
    //       this.getMachineryRisk();
    //     }
    //     else {
    //       this.nine = false;
    //     }
    // }



  }
  getMachineryRisk() {

    let urlLink = `${this.motorApiUrl}api/getallcontentrisk`;
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "QuoteNo": quoteNo,
      "SectionId": "41"
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;
        if (res.Result) {
          if (res.Result.ContentRiskDetails) {
            if (res.Result.ContentRiskDetails.length != 0) {
              // if(this.endorsementSection){
              //   this.electronicEquipSection = !this.enableFieldsList.some(ele=>ele=='MachineryBreakDown');
              // }
              // else 
              //this.enableMachineryEditSection= true;
              this.machineries = res.Result.ContentRiskDetails;
              console.log('PPPPPPPPPPPPPPPPPPPPPPPPPPPP', this.machineries);
              this.getTotalSICost('Machinery');
            }
            else {
              //  this.machineries = [{
              //    "ItemId":null,
              //    "RiskId":null,
              //    "MakeAndModel":null,
              //   //  "ContentRiskDesc":null,
              //   "SerialNoDesc": null,
              //    "SerialNo":null,
              //    "ItemValue":null,
              //    "SumInsured":null,
              //  }]
            }
          }

        }

        else {
          this.machineries = [{
            "ItemId": null,
            "RiskId": null,
            "MakeAndModel": null,
            // "ContentRiskDesc":null,
            "SerialNoDesc": null,
            "SerialNo": null,
            "ItemValue": null,
            "SumInsured": null,
          }]
        }
      })
  }
  getEmployeeDetails() {
    let SectionId = null;
    if (this.productId == '14' || this.productId == '19' || this.productId == '57') SectionId = '45';
    if (this.productId == '32') SectionId = '43';
    let ReqObj = {
      "QuoteNo": this.quoteNo,
      //"RiskId": "1",
      "SectionId": SectionId
    }
    let urlLink = `${this.motorApiUrl}api/getallactiveemployees`;
    //let urlLink = `${this.motorApiUrl}api/getallproductemployees`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Result) {
          console.log('SectionId', this.SectionId);
          if (this.productId !== '32') {
            this.employeeList = data?.Result;
            console.log('OOOOO', this.employeeList);
          }
          else if (this.productId == '32') {
            this.fidelityList = data?.Result;
            console.log('Ferdility Lists', this.fidelityList);
          }
          else if (this.productId == '59') {
            this.risk = data?.Result;
            console.log('Ferdility Lists', this.risk);
          }
          this.originalEmployeeList = new Array().concat(data?.Result);
          if (this.employeeList.length != 0 && this.productId !== '32') {
            this.getTotalSICost('Employee');
          }
          else if (this.productId == '32' && this.fidelityList.length != 0) {
            this.getTotalSICost('Fidelity');
          }
          else if (this.productId == '59' && this.risk.length != 0) {
            //this.getTotalSICost('Fidelity');
          }
        }
      });
  }
  getFidelityDetails() {
    let SectionId = null;
    if (this.productId == '32' || this.productId == '19') SectionId = '43';
    let ReqObj = {
      "QuoteNo": this.quoteNo,
      "RiskId": "1",
      "SectionId": SectionId
    }
    let urlLink = `${this.motorApiUrl}api/getallactiveemployees`;//api/getallproductemployees`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Result) {
          this.fidelityList = data?.Result;
          this.originalFidelityList = new Array().concat(data?.Result);
          if (this.fidelityList.length != 0) {
            this.getTotalSICost('Fidelity');
          }
        }
      });
  }
  // getbuilding() {
  //   let urlLink = `${this.motorApiUrl}api/getallbuildingdetails`;
  //   let ReqObj = {
  //     "QuoteNo": sessionStorage.getItem('quoteNo'),
  //   }
  //   this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       let res: any = data;
  //       if (res.Result.length != 0) {
  //       }
  //       else {
  //       }
  //     })
  // }
  getbuilding() {
    let urlLink = `${this.motorApiUrl}api/getallbuildingdetails`;
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "QuoteNo": quoteNo,
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;
        if (res.Result.length != 0) {
          if (this.endorsementSection) {
            console.log('Enable Building Suminsureds', this.enableFieldsList);
            //this.buildingSection = !this.enableFieldsList.some(ele=>ele=='BuildingSuminsured');
            this.buildingSection = this.enableFieldsList.some(ele => ele == 'BuildingSuminsured');
          }
          else this.buildingSection = false;
          //else this.buildingSection = false;
          this.building = res.Result;
          // let i=0;
          // for(let entry of this.building){
          //   if (i == 0) {
          //     this.LocationList = [];
          //   }
          //   this.LocationList.push({ "Code": String(this.LocationList.length+1), "CodeDesc": entry.LocationName })
          //   i+=1;
          // }

          if (this.first || this.second || this.fifth || this.ten || this.third || this.nine || this.seven || this.eight || this.six) {
            if (this.LocationList.length != 0) {
              for (let j = 0; j < this.LocationList.length; j++) {
                this.LocationList[j].label = this.LocationList[j]['CodeDesc'];
                this.LocationList[j].value = this.LocationList[j]['Code'];
                delete this.LocationList[j].CodeDesc;
                if (j == this.LocationList.length - 1) {
                  if (this.first) {
                    this.fieldsContent[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
                  }
                  if (this.six) {
                    this.fieldsElectronic[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
                  }
                  if (this.second) {
                    this.fieldsPersonalAccident[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
                  }
                  if (this.fifth) {
                    this.fieldsPersonalInd[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
                  }
                  if (this.ten) {
                    this.fieldsDevice[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
                  }
                  if (this.third) {
                    this.fieldsRisk[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
                  }
                  if (this.nine) {
                    this.fieldsMachinery[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = this.LocationList;
                  }
                  if (this.seven) {
                    this.fieldsEmpFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[7].props.options = this.LocationList;
                  }
                  if (this.eight) {
                    this.fieldFEFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[7].props.options = this.LocationList;
                  }
                }
              }
            }
          }


          this.fourth = true;
          this.getTotalSICost('building');
        }
        else {
          this.building = [];
          this.AddNew();
          // this.building = [
          //   {
          //     "BuildingAddress": null,
          //     "BuildingBuildYear": null,
          //     "BuildingFloors": null,
          //     "InbuildConstructType": null,
          //     "BuildingSuminsured": null,
          //     "RiskId": null,
          //     SectionId: "1"
          //   }
          // ]
        }
        if (this.first) {
          this.getdropList();

        }
        else if (this.second) {
          //this.getPersonalAccidentDetails();
        }
        else if (this.third) {
          //this.getallriskDetails();
        }
        else if (this.fifth) {
          //this.getPersonalIntermediaryDetails();
        }
        else if (this.six) {
          //this.getElectronicEquipment();
        }
        else if (this.nine) {
          //this.getMachineryRisk();
        }
      })
  }
  getdropListAlt() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/electronicitems`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          let defaultObj = [{ 'label': '-Select-', 'value': null }]
          this.dropList = data.Result;
          for (let i = 0; i < this.dropList.length; i++) {
            this.dropList[i].label = this.dropList[i]['CodeDesc'];
            this.dropList[i].value = this.dropList[i]['Code'];
            if (i == this.dropList.length - 1) {
              if (this.fields6.length != 0) {
                console.log(this.fields6)
                let fieldList = this.fields6[0]?.fieldGroup[0]?.fieldGroup;
                for (let field of fieldList) {
                  if (field.key == 'ContentTypeId') { console.log("Fields", field); field.templateOptions['options'] = defaultObj.concat(this.dropList); }
                }
              }
            }
          }


          //this.getOccupationList();
        }
      },
      (err) => { },
    );
  }
  getdropList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/content`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          let defaultObj = [{ 'label': '-Select-', 'value': null }]
          this.dropList = data.Result;
          // for (let i = 0; i < this.dropList.length; i++) {
          //   this.dropList[i].label = this.dropList[i]['CodeDesc'];
          //   this.dropList[i].value = this.dropList[i]['Code'];
          //   if (i == this.dropList.length - 1) {
          //     if(this.fields6.length!=0){
          //       console.log(this.fields6)
          //       let fieldList = this.fields6[0]?.fieldGroup[0]?.fieldGroup;
          //       for(let field of fieldList){
          //         if(field.key=='ContentTypeId')  field.props['options'] = defaultObj.concat(this.dropList);
          //       } 
          //     }
          //   }
          // }


          //this.getOccupationList();
        }
      },
      (err) => { },
    );
  }
  getCountryList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/country`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.countryList = data.Result;
          let defaultRow = [{ 'CodeDesc': '- Select - ', 'Code': '' }]
          this.countryList = defaultRow.concat(this.countryList);
        }
      });
  }
  AddNewFunc() {
    this.productItem = new ProductData();
    //      let entry = {
    //       "CreatedBy": this.loginId,
    //       "RiskId": null,
    //       "RelationType": '1',
    //       "RelationTypeDesc": null,
    //       "DateOfBirth": null
    // }
    // this.productItem.patientList.push(entry);
    //  let entry1 = {
    //       "CreatedBy": this.loginId,
    //       "RiskId": null,
    //       "RelationType": '2',
    //       "RelationTypeDesc": null,
    //       "DateOfBirth": null
    // }
    // this.productItem.patientList.push(entry1);
    console.log('Patients Listsssssssss', this.productItem?.patientList)

    // for(let i=0;i<2;i++){
    let entry = {
      "CreatedBy": this.loginId,
      "RiskId": null,
      "RelationType": '1',
      "RelationTypeDesc": null,
      "DateOfBirth": null
    }
    this.productItem.patientList.push(entry);
    let entry1 = {
      "CreatedBy": this.loginId,
      "RiskId": null,
      "RelationType": '2',
      "RelationTypeDesc": null,
      "DateOfBirth": null
    }
    //     let entry1 = {
    //       "CreatedBy": this.loginId,
    //       "RiskId": null,
    //       "RelationType": '2',
    //       "RelationTypeDesc": null,
    //       "DateOfBirth": null
    // }
    this.productItem.patientList.push(entry1);
    console.log('ENNNNNNN', this.productItem.patientList)
    // }
    let fireData = new HealthInsurance();


    this.fields[0] = fireData.fields[0];
    console.log('HHHHHHHHHHH', this.fields[0])
    if (this.fields[0]) {
      this.showsection = true;
    }
    let modelHooks = {
      onInit: (field: FormlyFieldConfig) => {
        field.formControl.valueChanges.subscribe(() => {
          this.onoccChange();
        });
      }
    }
    // this.fields[0].fieldGroup[0].fieldGroup[1].hooks = modelHooks;
    // console.log("Final Fields",this.fields[0].fieldGroup[0])
  }
  onoccChange() {
    console.log('HHHHHH', this.productItem);
  }
  onChange(type) {
    console.log("YYYYYYYYYYYYYY", type)
  }
  getEditQuoteDetails() {
    let ReqObj = {
      "QuoteNo": this.quoteNo
    }
    let urlLink = `${this.CommonApiUrl}quote/viewquotedetails`;
    // let ReqObj = {
    //   "ProductId": this.productId,
    //   "RequestReferenceNo": this.quoteRefNo
    // }
    // let urlLink = `${this.CommonApiUrl}api/view/calc`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Result) {
          console.log("Data**", data?.Result);
          this.quoteDetails = data?.Result?.QuoteDetails;
          this.Riskdetails = data?.Result?.RiskDetails;
          this.customerDetails = data?.Result?.CustomerDetails;
          if (this.Riskdetails[0].AcccessoriesSumInsured != null)
            this.actualAccessoriesSI = String(this.Riskdetails[0].AcccessoriesSumInsured);

          if (this.Riskdetails.length == 1) {
            this.newacc = true;
            //this.fields[0].fieldGroup[1].fieldGroup[0].fieldGroup[1].hooks = regionHooks;
            this.productItem = new ProductData();
          }
          else {
            this.newacc = false;
            this.productItem = new ProductData();
          }
          for (let cover of this.Riskdetails) {
            let j = 0;
            for (let section of cover?.SectionDetails) {
              let CoverData = section.Covers;
              for (let subsectioncover of section?.Covers) {
                if (cover?.totalPremium) {
                  cover['totalLcPremium'] = cover['totalLcPremium'] + subsectioncover?.PremiumIncludedTaxLC;
                  cover['totalPremium'] = cover['totalPremium'] + subsectioncover?.PremiumIncludedTax;
                }
                else {
                  cover['totalLcPremium'] = subsectioncover?.PremiumIncludedTaxLC;
                  cover['totalPremium'] = subsectioncover?.PremiumIncludedTax;

                }
                let baseCovers = [], otherCovers = [];
                baseCovers = CoverData.filter(ele => ele.CoverageType == 'B');
                otherCovers = CoverData.filter(ele => ele.CoverageType != 'B');
                section.Covers = baseCovers.concat(otherCovers);
                this.CoverList.push(cover);
                if (j == cover?.SectionDetails) {
                  this.CoverList.push(cover);
                  console.log("vehicleList", this.CoverList);
                }
                else j += 1;
              }
            }
          }
        }
      },
      (err) => { },
    );
  }
  getYearList() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    const currentYear = new Date().getFullYear() - 20, years = [];
    while (year >= currentYear) {
      let yearEntry = year--
      years.push({ "Code": String(yearEntry), "CodeDesc": String(yearEntry), "label": String(yearEntry), "value": String(yearEntry) });
    }
    return [{ "label": "---Select---", "value": null, "Code": "---Select---", "CodeDesc": "" }].concat(years);
  }
  getallriskList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/allrisk`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.allriskList = data.Result;
          // for (let i = 0; i < this.allriskList.length; i++) {
          //   this.allriskList[i].label = this.allriskList[i]['CodeDesc'];
          //   this.allriskList[i].value = this.allriskList[i]['Code'];
          //   delete this.allriskList[i].CodeDesc;
          //   if (i == this.allriskList.length - 1) {
          //     if(this.third)
          //     this.fieldsRisk[0].fieldGroup[0].fieldGroup[0].fieldGroup[1].props.options = this.allriskList;
          //   }
          // }

        }
      },
      (err) => { },
    );
  }
  onAccessoriesSubmit() {
    // this.chassisNoError = false;this.accessoriesTypeError = false;this.serialNoError = false;this.sumInsuredError = false;
    // this.totalAccSIError = false;
    // if(i==0){
    //   this.Cotentrisk[this.currentContentIndex]['SumInsured'] = this.productItem.ContentSI//this.contentSI;
    //   this.Cotentrisk[this.currentContentIndex]['RiskId'] = this.productItem.ContentLocation;
    //   this.Cotentrisk[this.currentContentIndex]['SerialNoDesc'] = this.productItem.ContentSerialNo;//this.serialNoDesc
    //   this.Cotentrisk[this.currentContentIndex]['ContentRiskDesc'] =this.productItem.ContentDesc; //this.contentRiskDesc;
    //   this.Cotentrisk[this.currentContentIndex]['ItemId'] = this.productItem.ContentType//this.contentId;
    //   this.Cotentrisk[this.currentContentIndex]['LocationName'] = this.LocationList.find(ele=>ele.Code==this.productItem.ContentLocation).CodeDesc;
    //   this.productItem.ContentSI=null; this.productItem.ContentLocation=null;this.productItem.ContentSerialNo=null;
    //   this.productItem.ContentDesc=null;this.productItem.ContentType=null;this.currentContentIndex=null;
    //   this.editContentSection = false;
    //   this.enableContentEditSection = false;
    // } 
    if (this.Riskdetails.length == 1) {
      this.productItem.AccessoriesChassisNo = 1;
    }
    let i = 0;
    if (this.productItem.AccessoriesChassisNo == null || this.productItem.AccessoriesChassisNo == '') {
      i += 1;
    }
    if (this.productItem.AccessoriesType == null || this.productItem.AccessoriesType == '') {
      i += 1;
    }
    if (this.productItem.AccessoriesSerialNo == null || this.productItem.AccessoriesSerialNo == '') {
      i += 1;
    }
    if (this.productItem.AccessoriesSI == null || this.productItem.AccessoriesSI == '0' || this.productItem.AccessoriesSI == '') {
      i += 1;
    }
    else if (this.totalAccessoriesSI > this.actualAccessoriesSI) {
      i += 1;
      this.totalAccSIError = true;
      this.onsubmitAccessories()
    }
    if (i == 0) {

      if (!this.editAccessoriesSection && this.currentAccessoriesIndex == null) {
        this.currentAccessoriesIndex = this.accessoriesList.length;
      }
      if (this.accessoriesList[this.currentAccessoriesIndex] == undefined) {
        this.accessoriesList.push({
          "ItemId": null,
          "RiskId": null,
          "MakeAndModel": null,
          "ContentRiskDesc": null,
          "SerialNoDesc": null,
          "SerialNo": null,
          "ItemValue": null,
          "SumInsured": null,
        });
      }

      this.accessoriesList[this.currentAccessoriesIndex]['SumInsured'] = this.productItem.AccessoriesSI//this.contentSI;
      this.accessoriesList[this.currentAccessoriesIndex]['RiskId'] = this.productItem.AccessoriesChassisNo;
      this.accessoriesList[this.currentAccessoriesIndex]['SerialNoDesc'] = this.productItem.AccessoriesSerialNo;//this.serialNoDesc
      this.accessoriesList[this.currentAccessoriesIndex]['ItemId'] = this.productItem.AccessoriesType//this.contentId;
      this.accessoriesList[this.currentAccessoriesIndex]['LocationId'] = this.productItem.AccessoriesChassisNo;
      this.accessoriesList[this.currentAccessoriesIndex]['ContentRiskDesc'] = this.AccLists.find(ele => ele.Code == this.productItem.AccessoriesType).label;
      this.currentAccessoriesIndex = null;
      this.editAccessoriesSection = false;
      this.enableAccessoriesEditSection = false;
      this.productItem = new ProductData();
      if (this.ChassisList.length == 2) { this.productItem.AccessoriesChassisNo = this.ChassisList[1].Code; }
    }

  }
  getBuildingUsageId(BuildingUsageId) {
    let entry = this.BuildingUsageList.find(ele => ele.Code == BuildingUsageId);
    if (entry) {
      return entry.CodeDesc;
    }
    else return '';
  }
  getRoofTypeDescription(RoofType) {
    let entry = this.roofMaterialList.find(ele => ele.Code == RoofType);
    if (entry) {
      return entry.CodeDesc;
    }
    else return '';
  }
  getContentTypeDescription(Content) {
    let entry = this.dropList.find(ele => ele.Code == Content);
    if (entry) {
      return entry.CodeDesc;
    }
    else return '';
  }
  getAllContentTypeDescription(Content) {
    let entry = this.allriskList.find(ele => ele.Code == Content);
    if (entry) {
      return entry.CodeDesc;
    }
    else return '';
  }
  getwallTypeDescription(WallType) {
    let entry = this.wallMaterialList.find(ele => ele.Code == WallType);
    if (entry) {
      return entry.CodeDesc;
    }
    else return '';
  }
  getFirstLossDesc(rowData) {
    let entry = this.bankList.find(ele => ele.Code == rowData.FirstLossPayee);
    if (entry) {
      return entry.CodeDesc;
    }
    else return '';
  }
  getAssName(Id) {
    let entry = this.ChassisList.find(ele => ele.Code == Id);
    if (entry) {
      return entry.CodeDesc;
    }
    else return '';
  }
  getAssCont(ItemId) {
    let entry = this.AccLists.find(ele => ele.Code == ItemId);
    if (entry) return entry.CodeDesc;
    else return '';
  }
  AccessoriesDelete(rows: any) {
    const index = this.accessoriesList.indexOf(rows);
    this.accessoriesList.splice(index, 1);
    this.getTotalSICost('Accessories');
  }
  delete(row: any) {
    const index = this.building.indexOf(row);

    this.building.splice(index, 1);
    this.LocationList.splice(index, 1);
    this.getTotalSICost('building');
    console.log("Locations", this.LocationList);
    //this.Section=false;
  }
  onsubmitAccessories() {
    if (this.totalAccessoriesSI > this.actualAccessoriesSI) {
      Swal.fire({
        title: '<strong>Error</strong>',
        icon: 'info',
        html:
          `<ul class="list-group errorlist">
                 <li>Entered SumInsured Amount Greater than Actual Total SumInsured</li>
             </ul>`,
        showCloseButton: false,
        //focusConfirm: false,
        // showCancelButton:true,

        //confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Ok',
      })
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //         this.onProceedUpload('Merge')
      //   }
      //   else{
      //     this.onProceedUpload('Add')
      //   }
      // })
    }
    // else{
    //   this.editEmployeeSection = false;this.enableEmployeeEditSection = false;this.currentEmployeeIndex=null;
    //   this.productItem=new ProductData();
    // }
  }
  onAccessoriesCancel() {
    if (!this.editAccessoriesSection) this.accessoriesList.splice(this.currentAccessoriesIndex, 1);
    this.chassisNo = null; this.accessoriesType = null; this.serialNoDesc = null; this.SumInsured = null;
    this.currentAccessoriesIndex = null;
    this.enableAccessoriesEditSection = false;
  }
  onPreviousTab() {
    this.tabIndex -= 1; this.productItem = new ProductData(); if (this.productId == '59') this.onEditDomestic();
    if (this.productId == '66' || this.productId == '67' || this.productId == '68' || this.productId == '69' || this.productId == '70' || this.productId == '71' || this.productId == '72' || this.productId == '75' || this.productId == '49' || this.productId == '14' || this.productId == '32' || this.productId == '39' || this.productId == '73' || this.productId == '74' || this.productId == '76' || this.productId == '25' || this.productId == '16' || this.productId == '26' || this.productId == '27' || this.productId == '57' || this.productId == '48' || this.productId == '78' || this.productId == '77' || this.productId=='79' || this.productId=='84' || this.productId=='82'|| this.productId=='83') { this.onEditfirePhoneix() }
  }
  onSubmit(type) {
    if (this.productId != '19') {
      let commonDetals: any = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
      let appId = "1", loginId = "", brokerbranchCode = "", createdBy = "";
      let quoteStatus = sessionStorage.getItem('QuoteStatus');
      let referenceNo = sessionStorage.getItem('quoteReferenceNo');
      if (referenceNo) {
        this.quoteRefNo = referenceNo;
      }
      else this.quoteRefNo = null;
      if (quoteStatus == 'AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRR') {
      }
      else {
        createdBy = this.loginId;
        if (this.userType != 'Issuer') {
          this.brokerCode = this.agencyCode;
          appId = "1"; loginId = this.loginId;
        }
        else {
          appId = this.loginId;
          brokerbranchCode = null;
          if (commonDetals[0].CustomerName) loginId = commonDetals[0].CustomerName;
        }
      }
      this.applicationId = appId;
      let havePromoYN = 'N'
      if (commonDetals[0].PromoCode != null && commonDetals[0].PromoCode != '' && commonDetals[0].PromoCode != undefined) havePromoYN = 'Y'
      let startDate = null, endDate = null;
      let startDateList = String(commonDetals[0].PolicyStartDate).split('/');
      if (startDateList.length > 1) startDate = commonDetals[0].PolicyStartDate
      else startDate = this.datePipe.transform(commonDetals[0].PolicyStartDate, 'dd/MM/yyyy');
      let endDateList = String(commonDetals[0].PolicyEndDate).split('/');
      if (endDateList.length > 1) endDate = commonDetals[0].PolicyEndDate
      else endDate = this.datePipe.transform(commonDetals[0].PolicyEndDate, 'dd/MM/yyyy');
      this.policyStartDate = startDate; this.policyEndDate = endDate;
      let quoteNo = null;
      if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
      let ReqObj = {
        "PolicyDetails": {
          "SaveOrSubmit": type,
          "AcexecutiveId": "",
          "ProductType": null,
          "TiraCoverNoteNo": null,
          "CustomerReferenceNo": sessionStorage.getItem('customerReferenceNo'),
          "RequestReferenceNo": this.quoteRefNo,
          "QuoteNo": quoteNo,
          "BuildingOwnerYn": "N",
          "Createdby": this.loginId,
          "Currency": commonDetals[0].Currency,
          "ExchangeRate": commonDetals[0].ExchangeRate,
          "Havepromocode": havePromoYN,
          "PolicyEndDate": endDate,
          "PolicyStartDate": startDate,
          "IndustryId": "99999",
          "InsuranceId": this.insuranceId,
          "ProductId": this.productId,
          "BranchCode": this.branchCode,
        },
        "BrokerDetails": {
          "CustomerCode": commonDetals[0]?.CustomerCode,
          "CustomerName": commonDetals[0]?.CustomerName,
          "BdmCode": commonDetals[0]?.CustomerCode,
          "BrokerCode": commonDetals[0]?.BrokerCode,
          "LoginId": loginId,
          "ApplicationId": appId,
          "AgencyCode": this.agencyCode,
          "BrokerBranchCode": this.brokerbranchCode,
          "SourceTypeId": commonDetals[0].SourceType,
          "UserType": "Broker"
        },
        "LocationList": []
      }
      if (this.endorsementSection) {
        if (this.endorsementDetails.PolicyNo == null || this.endorsementDetails.PolicyNo == undefined) {
          this.endorsementDetails['PolicyNo'] = this.endorsePolicyNo;
        }
        ReqObj['EndorsementDetails'] = this.endorsementDetails
      }
      else {
        ReqObj["EndorsementDetails"] = {
          "EndorsementDate": null,
          "EndorsementEffectiveDate": null,
          "EndorsementRemarks": null,
          "EndorsementType": null,
          "EndorsementTypeDesc": null,
          "EndtCategoryDesc": null,
          "EndtCount": null,
          "EndtPrevPolicyNo": null,
          "EndtPrevQuoteNo": null,
          "EndtStatus": null,
          "IsFinanceEndt": null,
          "OrginalPolicyNo": null,
          "PolicyNo": null,
        }
      }
      let locationList = [], locationCurrentList = [], i = 0;
      for (let entry of this.LocationName) {
        let obj = {
          "LocationId": i + 1,
          "LocationName": entry.LocationName,
          "SectionList": []
        }
        if (entry.BuildingType != null && entry.BuildingType != '' && entry.BuildingSI != null && entry.BuildingSI != '' && entry.BuildingSI != '0') {
          let subEntry = {
            "SectionId": "1",
            "RiskId": null,
            //"BuildingSumInsured": String(entry.BuildingSI).replaceAll(',',''),
            "SumInsured": String(entry.BuildingSI).replaceAll(',', ''),
            "OutbuildConstructType": entry.BuildingType
          }
          //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
          obj.SectionList.push(subEntry);
        }
        if (entry.ContentSI != null && entry.ContentSI != '' && entry.ContentSI != '0') {
          let subEntry = {
            "SectionId": "47",
            "RiskId": null,
            //"ContentSuminsured": String(entry.ContentSI).replaceAll(',',''),
            "SumInsured": String(entry.ContentSI).replaceAll(',', '')
          }
          //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
          obj.SectionList.push(subEntry);
        }
        if (entry.AllRiskSI != null && entry.AllRiskSI != '' && entry.AllRiskSI != '0') {
          let subEntry = {
            "SectionId": "3",
            "RiskId": null,
            //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
            "SumInsured": String(entry.AllRiskSI).replaceAll(',', '')
          }
          if (this.productId == '19') { subEntry['CoveringDetails'] = this.productItem.CoveringDetails; subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk; }
          //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
          obj.SectionList.push(subEntry);
        }
        if (entry.PersonalLiabilitySI != null && entry.PersonalLiabilitySI != '' && entry.PersonalLiabilitySI != '0') {
          let subEntry = {
            "SectionId": "139",
            //"PersonalLiabilitySi": String(entry.PersonalLiabilitySI).replaceAll(',',''),
            "SumInsured": String(entry.PersonalLiabilitySI).replaceAll(',', '')
          }
          //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
          obj.SectionList.push(subEntry);
        }
        if (entry.ServantList.length != 0) {
          for (let ser of entry.ServantList) {
            let subEntry = {
              "SectionId": "106",
              "RiskId": null,
              "DomesticServantType": ser.ServantType,
              "Count": ser.ServantCount,
              //"DomesticServentSi": String(ser.ServantSI).replaceAll(',',''),
              "SumInsured": String(ser.ServantSI).replaceAll(',', '')
            }
            obj.SectionList.push(subEntry);
          }
        }
        if (entry.PAList.length != 0) {
          for (let ser of entry.PAList) {
            let subEntry = {
              "SectionId": "138",
              "RiskId": null,
              "RelationType": ser.RelationType,
              //"PersonalAccidentSi":String(ser.DeathSI).replaceAll(',',''),
              "SumInsured": String(ser.DeathSI).replaceAll(',', ''),
            }
            //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
            obj.SectionList.push(subEntry);
          }
        }
        // if(entry.ServantType!=null && entry.ServantType!='' && entry.ServantCount!=null && entry.ServantCount!='' && entry.ServantSI!=null && entry.ServantSI!=''){
        //   let subEntry = {
        //     "SectionId": "106",
        //     "RiskId": null,
        //     "DomesticServantType":entry.ServantType,
        //     "Count":entry.ServantCount,
        //     "DomesticServentSi": String(entry.ServantSI).replaceAll(',',''),
        //     "SumInsured": String(entry.ServantSI).replaceAll(',',''),
        //   }
        //   //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
        //   obj.SectionList.push(subEntry);
        // }
        // if(entry.RelationType!=null && entry.RelationType!='' && entry.DeathSI!=null && entry.DeathSI!=''){
        //   let subEntry = {
        //     "SectionId": "138",
        //     "RiskId": null,
        //     "RelationType": entry.RelationType,
        //     "PersonalAccidentSi":String(entry.DeathSI).replaceAll(',',''),
        //     "SumInsured": String(entry.DeathSI).replaceAll(',',''),
        //   }
        //   //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
        //   obj.SectionList.push(subEntry);
        // }

        if (obj.SectionList.length == 0) {
          obj['CommonError'] = true
        }
        else {
          obj['CommonError'] = false;
        }
        i += 1;
        if (obj.SectionList.length != 0) locationList.push(obj);

        if (i == this.LocationName.length) {
          ReqObj.LocationList = locationList;
          this.onFinalSubmit(ReqObj, type);
        }
      }
    }
    else this.onSubmitCorporate(type);
  }
  onSubmitCorporate(type) {
    let error = 0;
    this.coveringDetailsError = false; this.DescriptionRiskError = false; this.BuildingSIError = false;
    this.IndustryError1 = false; this.IndustryError2 = false;
    let k = 0;
    // if(this.productItem.CoveringDetails==null || this.productItem.CoveringDetails==''){k+=1; this.coveringDetailsError = true;}
    // if(this.productItem.DescriptionOfRisk==null || this.productItem.DescriptionOfRisk==''){k+=1; this.DescriptionRiskError = true;}
    let entry = this.locationList[this.tabIndex]?.FireList;
    if (!entry.some(ele => ele.BuildingUsageId == '1')) { k += 1; this.BuildingSIError = true; }
    if (this.PackageIndustryType == '' || this.PackageIndustryType == null) { k += 1; this.IndustryError1 = true; }
    if (this.PackageCategoryId == '' || this.PackageCategoryId == null) { k += 1; this.IndustryError2 = true; }
    if (k == 0) {
      let commonDetals: any = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
      if (commonDetals == null) commonDetals = this.commonDetails;
      let appId = "1", loginId = "", brokerbranchCode = "", createdBy = "";
      let quoteStatus = sessionStorage.getItem('QuoteStatus');
      let referenceNo = sessionStorage.getItem('quoteReferenceNo');
      if (referenceNo) {
        this.quoteRefNo = referenceNo;
      }
      else this.quoteRefNo = null;
      if (quoteStatus == 'AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRR') {
      }
      else {
        createdBy = this.loginId;
        if (this.userType != 'Issuer') {
          this.brokerCode = this.agencyCode;
          appId = "1"; loginId = this.loginId;
        }
        else {
          appId = this.loginId;
          brokerbranchCode = null;
          loginId = commonDetals[0].CustomerName;
        }
      }
      this.applicationId = appId;
      let havePromoYN = 'N'
      if (commonDetals[0].PromoCode != null && commonDetals[0].PromoCode != '' && commonDetals[0].PromoCode != undefined) havePromoYN = 'Y'
      let startDate = null, endDate = null;
      let startDateList = String(commonDetals[0].PolicyStartDate).split('/');
      if (startDateList.length > 1) startDate = commonDetals[0].PolicyStartDate
      else startDate = this.datePipe.transform(commonDetals[0].PolicyStartDate, 'dd/MM/yyyy');
      let endDateList = String(commonDetals[0].PolicyEndDate).split('/');
      if (endDateList.length > 1) endDate = commonDetals[0].PolicyEndDate
      else endDate = this.datePipe.transform(commonDetals[0].PolicyEndDate, 'dd/MM/yyyy');
      this.policyStartDate = startDate; this.policyEndDate = endDate;
      let quoteNo = null;
      if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
      let ReqObj = {
        "PolicyDetails": {
          "SaveOrSubmit": type,
          "AcexecutiveId": "",
          "ProductType": null,
          "TiraCoverNoteNo": null,
          "CustomerReferenceNo": sessionStorage.getItem('customerReferenceNo'),
          "RequestReferenceNo": this.quoteRefNo,
          "QuoteNo": quoteNo,
          "BuildingOwnerYn": "N",
          "Createdby": this.loginId,
          "Currency": commonDetals[0].Currency,
          "ExchangeRate": commonDetals[0].ExchangeRate,
          "Havepromocode": havePromoYN,
          "PolicyEndDate": endDate,
          "PolicyStartDate": startDate,
          "IndustryId": "99999",
          "InsuranceId": this.insuranceId,
          "ProductId": this.productId,
          "BranchCode": this.branchCode,
        },
        "BrokerDetails": {
          "CustomerCode": commonDetals[0]?.CustomerCode,
          "CustomerName": commonDetals[0]?.CustomerName,
          "BdmCode": commonDetals[0]?.CustomerCode,
          "BrokerCode": commonDetals[0]?.BrokerCode,
          "LoginId": loginId,
          "ApplicationId": appId,
          "AgencyCode": this.agencyCode,
          "BrokerBranchCode": this.brokerbranchCode,
          "SourceTypeId": commonDetals[0].SourceType,
          "UserType": "Broker"
        },
        "LocationList": []
      }
      if (this.endorsementSection) {
        if (this.endorsementDetails.PolicyNo == null || this.endorsementDetails.PolicyNo == undefined) {
          this.endorsementDetails['PolicyNo'] = this.endorsePolicyNo;
        }
        ReqObj['EndorsementDetails'] = this.endorsementDetails
      }
      else {
        ReqObj["EndorsementDetails"] = {
          "EndorsementDate": null,
          "EndorsementEffectiveDate": null,
          "EndorsementRemarks": null,
          "EndorsementType": null,
          "EndorsementTypeDesc": null,
          "EndtCategoryDesc": null,
          "EndtCount": null,
          "EndtPrevPolicyNo": null,
          "EndtPrevQuoteNo": null,
          "EndtStatus": null,
          "IsFinanceEndt": null,
          "OrginalPolicyNo": null,
          "PolicyNo": null,
        }
      }
      let locationList = [], locationCurrentList = [], i = 0;
      for (let entry of this.locationList) {
        if (entry.BuildingOwnerYn == null) entry.BuildingOwnerYn = 'Y';
        if (entry.CoversRequired == null) entry.CoversRequired = 'BC';
        let obj = {
          "LocationId": i + 1,
          "LocationName": entry.LocationName,
          "CoversRequired": entry.CoversRequired,
          "BuildingOwnerYn": entry.BuildingOwnerYn,
          "Address": entry.BuildingAddress,
          "SectionList": []
        }
        if (i == this.tabIndex) {
          entry['AllriskSumInsured'] = this.productItem.AllriskSumInsured;
          entry['AllRiskContentDesc'] = this.productItem.AllRiskContentDesc;
          entry['PublicLiabilitySumInsured'] = this.productItem.EmpLiabilitySi;
          entry['MoneyinTransit'] = this.productItem.MoneyinTransit;
          entry['MoneyCollector'] = this.productItem.MoneyCollector;
          entry['MoneyInSafe'] = this.productItem.MoneyInSafe;
          entry['MoneySafeLimit'] = this.productItem.MoneySafeLimit;
          entry['MoneyOutofSafe'] = this.productItem.MoneyOutofSafe;
          entry['MoneyDirectorResidence'] = this.productItem.MoneyDirectorResidence;
          entry['MoneyAnnualEstimate'] = this.productItem.Estimatedannualcashcarryings;
          entry['SumInsured'] = this.productItem.SumInsured;
          entry['FidelityCount'] = this.productItem.FidEmpCount;
          entry['IndustryId'] = this.productItem.IndustryId;
          entry['BurglaryLoss'] = this.productItem.FireSumInsured;
          entry['BurglarySI'] = this.productItem.BurglarySi;
          entry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;
          entry['OccupationId'] = this.productItem.OccupationId;
          entry['PASumInsured'] = this.productItem.PASumInsured;
          entry['SumInsured'] = this.productItem.SumInsured;
          entry['PAOccupationType'] = this.productItem.PAOccupationType;
          entry['OccupationType'] = this.productItem.OccupationType;
          entry['IndemnityPeriod'] = this.productItem.IndemnityPeriod;
          entry['AccidentalSumInsured'] = this.productItem.AccidentalSumInsured;
          entry['PlatinumSumInsured'] = this.productItem.PlatinumSumInsured;
          entry['OfficeContentsSumInsured'] = this.productItem.OfficeContentsSumInsured;
          entry['StockSumInsured'] = this.productItem.StockSumInsured;
          entry['GoodsCategoryId'] = this.productItem.GoodsCategoryId;
          entry['GoodsBuildingUsage'] = this.productItem.GoodsBuildingUsage;
          entry['GoodsOccupationType'] = this.productItem.GoodsOccupationType;
          entry['GoodsSi'] = this.productItem.GoodsSi;
          entry['PlateGlassType'] = this.productItem.PlateGlassType;
          entry['DescriptionOfice'] = this.productItem.DescriptionOfice;
          entry['DescriptionAcc'] = this.productItem.DescriptionAcc;
        }
        // if(entry.AccidentalSumInsured!=null && entry.AccidentalSumInsured!='' && entry.AccidentalSumInsured!='0'){
        //     let subEntry = {
        //       "SectionId": "56","SectionName": "Accidental Damage",
        //       "DescriptionOfRisk":entry.DescriptionAcc,
        //       "RiskId": null,
        //       //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
        //       "SumInsured": String(entry.AccidentalSumInsured).replaceAll(',','')
        //     }
        //     // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //     //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
        //     obj.SectionList.push(subEntry);
        //   }
        let x = 0;
        if (entry.GoodsSi != null && entry.GoodsSi != '0' && entry.GoodsSi != '' && this.productItem.GoodsLimit != '' && this.productItem.GoodsLimit != null && this.productItem.GoodsLimit != '0') {
          // if(this.productItem.GoodsLimit <=  entry.GoodsSi){
          //   x+=1;
          //   Swal.fire({
          //     title: '<strong>Error</strong>',
          //     icon: 'info',
          //     html:'<ul class="list-group errorlist"><li>Goods In Transit SumInsured should not be greater than Goods Limit</li></ul>',
          //     showCloseButton: false,
          //     cancelButtonColor: '#d33',
          //     cancelButtonText: 'Ok',

          //   })
          // }

          // if(entry.GoodsCategoryId!=null && entry.GoodsCategoryId!='' && entry.GoodsBuildingUsage!=null && entry.GoodsBuildingUsage!='' && 
          //   entry.GoodsOccupationType!=null && entry.GoodsOccupationType!='' && entry.GoodsSi!=null && entry.GoodsSi!='0' && entry.GoodsSi!='' && x==0){
          //     let subEntry = {
          //       "SectionId": "46",
          //       "SectionName": "Goods In Transit",
          //       "ContentDesc": this.productItem.GoodsLimit,
          //       "RiskId": null,
          //       "CategoryId":entry.GoodsCategoryId,"OccupationId":entry.GoodsOccupationType,
          //       "CategoryDesc": this.GoodsUsageList.find(ele=>ele.Code==entry.GoodsCategoryId)?.CodeDesc,
          //       "OccupationDesc": this.GoodsContentList.find(ele=>ele.Code==entry.GoodsOccupationType)?.CodeDesc,
          //       "BuildingUsageId": entry.GoodsBuildingUsage,
          //       "BuildingUsageDesc": this.GoodsOccupationList.find(ele=>ele.Code==entry.GoodsBuildingUsage)?.CodeDesc,
          //       //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
          //       "SumInsured": String(entry.GoodsSi).replaceAll(',','')
          //     }
          //     // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
          //       obj.SectionList.push(subEntry);
          //   }
        }
        // if(entry.OfficeContentsSumInsured!=null && entry.OfficeContentsSumInsured!='' && entry.OfficeContentsSumInsured!='0' && this.productId!='71'){
        //   let subEntry = {
        //     "SectionId": "198","SectionName": "Office Contents",
        //     "RiskId": null,
        //     //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
        //     "SumInsured": String(entry.OfficeContentsSumInsured).replaceAll(',',''),
        //     "DescriptionOfRisk": entry.DescriptionOfice
        //   }
        //   // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //   //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
        //   obj.SectionList.push(subEntry);
        // }
        if (entry.StockSumInsured != null && entry.StockSumInsured != '' && entry.StockSumInsured != '0') {
          let subEntry = {
            "SectionId": "216", "SectionName": "On Stock",
            "RiskId": null,
            //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
            "SumInsured": String(entry.StockSumInsured).replaceAll(',', '')
          }
          // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
          //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
          obj.SectionList.push(subEntry);
        }
        // if(entry.TableRowAllRisk[0].SumInsured!=null && entry.TableRowAllRisk[0].SumInsured!='' && entry.TableRowAllRisk[0].SumInsured!='0' && entry.TableRowAllRisk[0].ContentDesc!='' && entry.TableRowAllRisk[0].ContentDesc!=null){
        //   if(entry.TableRowAllRisk.length!=0){
        //     for(let item of entry.TableRowAllRisk){                
        //       let subEntry = {
        //     "SectionId": "69","SectionName": "Business All Risk",
        //     "RiskId": null,
        //     "ContentDesc": item.ContentDesc,
        //     //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
        //     "SumInsured": String(item.SumInsured).replaceAll(',','')
        //   }
        //   // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //   //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
        //   obj.SectionList.push(subEntry);
        //   }
        //   }
        // }
        // if((entry.MoneyinTransit!=null && entry.MoneyinTransit!='' && entry.MoneyinTransit!='0') || 
        // (entry.MoneyDirectorResidence!=null && entry.MoneyDirectorResidence!='' && entry.MoneyDirectorResidence!='0') || 
        // (entry.MoneyCollector!=null && entry.MoneyCollector!='' && entry.MoneyCollector!='0') || 
        // (entry.MoneyInSafe!=null && entry.MoneyInSafe!='' && entry.MoneyInSafe!='0') || 
        // (entry.MoneySafeLimit!=null && entry.MoneySafeLimit!='' && entry.MoneySafeLimit!='0') || 
        // (entry.MoneyOutofSafe!=null && entry.MoneyOutofSafe!='' && entry.MoneyOutofSafe!='0') || 
        // (entry.MoneyAnnualEstimate!=null && entry.MoneyAnnualEstimate!='' && entry.MoneyAnnualEstimate!='0')){
        //   let subEntry = {
        //     "SectionId": "42",
        //     "SectionName": "Money",
        //     "MoneyinTransit": 0,
        //     "MoneyAnnualEstimate": entry.MoneyAnnualEstimate,
        //     "MoneyCollector": entry.MoneyCollector,
        //     "MoneyDirectorResidence": entry.MoneyDirectorResidence,
        //     "MoneyMajorLoss": entry.MoneyinTransit,
        //     "MoneyInSafe": 0,
        //     "MoneyOutofSafe": entry.MoneyOutofSafe,
        //     "MoneySafeLimit": entry.MoneySafeLimit,
        //     "StrongroomSi": entry.MoneyInSafe
        //   }
        //   // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //   //if(entry['OriginalRiskId']!=null && entry['OriginalRiskId']!=undefined) subEntry['RiskId']=entry['OriginalRiskId']
        //   obj.SectionList.push(subEntry);
        // }

        // if(entry.BurglaryLoss!=null && entry.BurglarySI!='' && entry.BurglarySI!=null && entry.BurglarySI!='0'){
        //   let j=0;
        //       if(entry.BurglaryLoss!=null){

        //         if(!entry.BurglarySI){
        //           j+=1;error+=1;this.BurglarySIError=true;this.CorpErrorMessage="Enter Sum Insured"
        //         }
        //       }
        //   let subEntry = {
        //     "SectionId": "52",
        //     "SectionName": "Burglary / Theft",
        //     "SumInsured": entry.BurglarySI,
        //     "FirstLossPercentId":entry.BurglaryLoss,
        //     "DescriptionOfRisk": entry.DescriptionOfRisk,
        //   }
        //   // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //   obj.SectionList.push(subEntry);
        // }
        // if(entry.GPAList[0].SumInsured !='' && entry.GPAList[0].SumInsured !=null && entry.GPAList[0].SumInsured !=0 && entry.GPAList[0].SumInsured !=undefined){
        //   if(entry.GPAList.length!=0){
        //   for(let item of entry.GPAList){
        //       let subEntry = {
        //         "SectionId": "182",
        //         "SectionName": "Group Personal Accident",
        //         "Count":item.Count,
        //         "IndemnityType":item.IndemnityType,
        //         "IndemnityTypeDesc": this.groupPeriodList.find(ele=>ele.Code==item.IndemnityType)?.CodeDesc,
        //         "SumInsured": String(item.SumInsured).replaceAll(',',''),
        //         "CategoryId": this.occupationList.find(ele=>ele.Code==item.OccupationType)?.CategoryId,
        //         "CategoryDesc": this.occupationList.find(ele=>ele.Code==item.OccupationType)?.CategoryDesc,
        //         "OccupationId": item.OccupationType,
        //         "OccupationDesc":this.fidelityOccupationList.find(ele=>ele.Code==item.OccupationType)?.CodeDesc
        //       }
        //       // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //       obj.SectionList.push(subEntry);
        //     }

        //   }

        //}
        if (entry.PAOccupationType != null && entry.PASumInsured != null && entry.PASumInsured != '') {
          let subEntry = {
            "SectionId": "35",
            "SectionName": "Personal Accident",
            "CoverId": "5",
            "SumInsured": String(entry.PASumInsured).replaceAll(',', ''),
            "CategoryId": this.occupationList.find(ele => ele.Code == entry.PAOccupationType)?.CategoryId,
            "CategoryDesc": this.occupationList.find(ele => ele.Code == entry.PAOccupationType)?.CategoryDesc,
            "OccupationId": entry.PAOccupationType
          }
          // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
          obj.SectionList.push(subEntry);
        }
        // if(entry.PlateGlassList.length!=0){
        //   for(let plate of entry.PlateGlassList){
        //     if(plate.CategoryId!=null && plate.CategoryId!='' && plate.SumInsured!=0 && plate.SumInsured!=null){
        //       let subEntry = {
        //         "SectionId": "53","SectionName": "Plate Glass",
        //         "RiskId": null,
        //         "CategoryId": plate.CategoryId,
        //         "CategoryDesc": this.PlateGlassType.find(ele=>ele.Code==plate.CategoryId)?.CodeDesc,
        //         //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
        //         "SumInsured": String(plate.SumInsured).replaceAll(',','')
        //       }
        //       obj.SectionList.push(subEntry);
        //     }
        //   }
        // }
        // if(entry.FidelityList[0].SumInsured != '' && entry.FidelityList[0].SumInsured != null &&  entry.FidelityList[0].SumInsured !=0){
        //   if(entry.FidelityList.length!=0 ){
        //     for(let item of entry.FidelityList){

        //       let subEntry = {
        //         "SectionId": "43",
        //         "SectionName": "Fidelity",
        //         "SumInsured": this.fidelityContentList.find(ele=>ele.Code==item.SumInsured)?.Code,
        //         "CategoryId": this.fidelityOccupationList.find(ele=>ele.Code==item.OccupationId)?.CategoryId,
        //         "CategoryDesc": this.fidelityOccupationList.find(ele=>ele.Code==item.OccupationId)?.CategoryDesc,
        //         "OccupationId": item.OccupationId,
        //         "OccupationDesc":this.fidelityOccupationList.find(ele=>ele.Code==item.OccupationId)?.CodeDesc,
        //         "Count": item.Count,
        //       }
        //       // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //       obj.SectionList.push(subEntry);
        //     }
        //   }
        // }
        if (entry.WorkmenList.length != 0) {
          for (let fire of entry.WorkmenList) {
            if (fire.OccupationId != null && fire.SumInsured != null) {
              let subEntry = {
                "SectionId": "48",
                "SectionName": "Workmen Compensation",
                "SumInsured": String(entry.FidelitySumInsured).replaceAll(',', ''),
                "CategoryId": this.occupationList.find(ele => ele.Code == entry.OccupationId)?.CategoryId,
                "CategoryDesc": this.occupationList.find(ele => ele.Code == entry.OccupationId)?.CategoryDesc,
                "OccupationId": fire.OccupationId,
                "FidEmpCount": fire.FidelityCount,
              }
              //   if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
              obj.SectionList.push(subEntry);
            }
          }
        }
        let packagePlusApi = null;
        if (this.insuranceId == '100002') packagePlusApi = new PackagePlusApiPhoenix()
        let packagePlusList = packagePlusApi.getSaveDetails(entry, this.fireContentList, this.PackageIndustryType, this.FireIndustryList,
          this.PackageCategoryId, this.industryOcupationList, this.BILossRatioList, this.productItem,
          this.GoodsUsageList, this.GoodsContentList, this.GoodsOccupationList, this.PlateGlassType,
          this.machineryContentList, this.equipmentList, this.fidelityContentList, this.fidelityOccupationList,
          this.publicLiabilityList, this.groupPeriodList, this.occupationList, this.stockAddOnCoverList,
          this.addOnCoverList, obj)
        if (packagePlusList) {
          obj = packagePlusList;
        }
        // if(entry.FireList.length!=0){
        //   for(let fire of entry.FireList){
        //     if(fire.BuildingUsageId && fire.WallType!=null && fire.RoofType!=null && fire.SumInsured!=null){
        //       let subEntry = {
        //         "SectionId": "40","SectionName": "Fire And Allied Perills",
        //         "RiskId": null,
        //         "BuildingUsageId":fire.BuildingUsageId,
        //         "BuildingUsageDesc": this.fireContentList.find(ele=>ele.Code==fire.BuildingUsageId)?.CodeDesc,
        //         "IndustryType":this.PackageIndustryType,
        //         "IndustryTypeDesc":this.FireIndustryList.find(ele=>ele.Code==this.PackageIndustryType)?.CodeDesc,
        //         "CategoryId":this.PackageCategoryId,
        //         "CategoryDesc":this.industryOcupationList.find(ele=>ele.Code==this.PackageCategoryId)?.CodeDesc,
        //         "WallType":fire.WallType,"RoofType":fire.RoofType,
        //         //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
        //         "SumInsured": String(fire.SumInsured).replaceAll(',',''),
        //         "DescriptionOfRisk":fire.DescriptionOfRisk,
        //       }
        //       // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //       obj.SectionList.push(subEntry);
        //     }
        //   }
        // }
        // if(this.addOnCoverList.length!=0){
        //   for(let fire of this.addOnCoverList){
        //     if(fire.CoverId!=null && fire.SumInsured!=null && fire.CoverId!='' && fire.SumInsured!='' && fire.SumInsured!='0' && fire.SumInsured!=0){
        //       let subEntry = {
        //         "SectionId": "217",
        //         "SectionName": "Fire Add On",
        //         "RiskId": null,
        //         "IndustryType":this.PackageIndustryType,
        //         "IndustryTypeDesc":this.FireIndustryList.find(ele=>ele.Code==this.PackageIndustryType)?.CodeDesc,
        //         "CategoryId":this.PackageCategoryId,
        //         "CategoryDesc":this.industryOcupationList.find(ele=>ele.Code==this.PackageCategoryId)?.CodeDesc,
        //         "CoverId":fire.CoverId,
        //         "SumInsured": String(fire.SumInsured).replaceAll(',',''),
        //       }
        //       // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //       obj.SectionList.push(subEntry);
        //     }
        //   }
        // }
        // if(this.stockAddOnCoverList.length!=0){
        //   for(let fire of this.stockAddOnCoverList){
        //     if(fire.CoverId!=null && fire.SumInsured!=null && fire.CoverId!='' && fire.SumInsured!='' && fire.SumInsured!='0' && fire.SumInsured!=0){
        //       let subEntry = {
        //         "SectionId": "218",
        //         "SectionName": "Stock Add On",
        //         "RiskId": null,
        //         "IndustryType":this.PackageIndustryType,
        //         "IndustryTypeDesc":this.FireIndustryList.find(ele=>ele.Code==this.PackageIndustryType)?.CodeDesc,
        //         "CategoryId":this.PackageCategoryId,
        //         "CategoryDesc":this.industryOcupationList.find(ele=>ele.Code==this.PackageCategoryId)?.CodeDesc,
        //         "CoverId":fire.CoverId,
        //         "SumInsured": String(fire.SumInsured).replaceAll(',',''),
        //       }
        //       // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //       obj.SectionList.push(subEntry);
        //     }
        //   }
        // }
        // if(entry.LiabilityList.length!=0){
        //   for(let liability of entry.LiabilityList){
        //     if(liability.CategoryId!=null && liability.SumInsured!=null){
        //       let subEntry = {
        //         "SectionId": "54", "SectionName": "Public Liabilty",
        //         "RiskId": null,"CategoryId":liability.CategoryId,
        //         "CategoryDesc": this.publicLiabilityList.find(ele=>ele.Code==liability.CategoryId)?.CodeDesc,
        //         //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
        //         "SumInsured": String(liability.SumInsured).replaceAll(',','')
        //       }
        //       // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //       obj.SectionList.push(subEntry);
        //     }
        //   }
        // }
        // if(entry.BIFireList.length!=0){
        //   let IndemityPeriodDesc;
        //   this.BIFireListError = false;
        //   for(let fire of entry.BIFireList){
        //     let j=0;
        //       console.log(entry,"entry");
        //       this.BIFireListError=false;this.BIFireListError1=false;
        //       // if(entry.IndemityPeriod!=undefined ||entry.IndemityPeriod!=null || entry.SumInsured!=0 || entry.SumInsured!='0' || entry.SumInsured!=null || entry.SumInsured!=undefined){
        //       //   if(entry.IndemityPeriod==null){j+=1;error+=1;this.BIFireListError=true;this.CorpErrorMessage="Select Indemnity Period"}
        //       //   else if(entry.SumInsured==0 || entry.SumInsured=='0' || entry.SumInsured==null || entry.SumInsured==undefined){j+=1;error+=1;this.BIFireListError=false;this.CorpErrorMessage="Enter Sum Insured"}
        //       // }
        //       // if(!this.isSumInsuredEnabled || !)
        //       if(fire.IndemityPeriod!=null){
        //          IndemityPeriodDesc = this.BILossRatioList.find(ele=>ele.Code==fire.IndemityPeriod)?.CodeDesc;
        //         if(!fire.sumInsured && IndemityPeriodDesc){
        //           j+=1;error+=1;this.BIFireListError=true;this.CorpErrorMessage="Enter Sum Insured"
        //         } 
        //         }
        //       if(fire.SumInsured!=null && fire.IndemityPeriod!=null ){
        //         this.BIFireListError=false;this.BIFireListError1=false;
        //         j=0;error=0
        //         let subEntry = {
        //           "SectionId": "75","SectionName": "Business Interruption",
        //           "RiskId": null,
        //           "IndemityPeriod":fire.IndemityPeriod,
        //           "IndemnityTypeDesc":IndemityPeriodDesc,
        //           "SumInsured": String(fire.SumInsured).replaceAll(',','')
        //         }
        //         // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //         obj.SectionList.push(subEntry);
        //     }


        //   }
        // }
        // if(entry.ElecEquipList.length!=0){
        //   for(let elec of entry.ElecEquipList){
        //     console.log("Entered Entry",elec,entry)
        //     let CategoryDesc=null;
        //     if(elec.ContentId!=null && elec.ContentId!='7'){
        //       CategoryDesc = this.equipmentList.find(ele=>ele.Code==elec.ContentId).CodeDesc;
        //     }
        //     else CategoryDesc = elec.ContentDesc;
        //     if(elec.ContentId!=null && elec.SumInsured!=null && CategoryDesc!=null){
        //       let subEntry = {
        //         "SectionId": "76","SectionName": "Electronic Equipment",
        //         "RiskId": null,"ContentId":elec.ContentId,
        //         "ContentDesc": CategoryDesc,
        //         //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
        //         "SumInsured": String(elec.SumInsured).replaceAll(',','')
        //       }
        //       // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
        //       obj.SectionList.push(subEntry);
        //     }
        //   }
        // }
        if (entry.MachineryList.length != 0) {
          let CategoryDesc = null;
          for (let elec of entry.MachineryList) {
            if (elec.ContentId != null && elec.ContentId != '8') {
              CategoryDesc = this.machineryContentList.find(ele => ele.Code == elec.ContentId).CodeDesc;
            }
            else { CategoryDesc = elec.ContentDesc; }
            if (elec.ContentId != null && elec.SumInsured != null && CategoryDesc != null) {

              let subEntry = {
                "SectionId": "41", "SectionName": "Machinery Breakdown",
                "RiskId": null, "ContentId": elec.ContentId, "ContentDesc": CategoryDesc,
                //"AllriskSumInsured": String(entry.AllRiskSI).replaceAll(',',''),
                "SumInsured": String(elec.SumInsured).replaceAll(',', '')
              }
              // if(this.productId=='19'){ subEntry['CoveringDetails'] = this.productItem.CoveringDetails;subEntry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;}
              obj.SectionList.push(subEntry);
            }
          }
        }

        if (obj.SectionList.length == 0) {
          obj['CommonError'] = true
        }
        else {
          obj['CommonError'] = false;
        }
        i += 1;
        if (obj.SectionList.length != 0) locationList.push(obj);
        if (i == this.locationList.length && error == 0 && x == 0) {
          ReqObj.LocationList = locationList;
          this.onFinalSubmit(ReqObj, type);
        }
      }
    }
  }
  // onIndemnityPeriodChange(): void {
  //   for(let entry of this.locationList){
  //     for(let item of entry.BIFireList){

  //       this.isSumInsuredEnabled = item.IndemityPeriod !== '';
  //     }
  //   }

  //   // Enable Sum Insured field only when a valid Indemnity Period is selected
  // }
  onFinalSubmit(ReqObj, type) {
    //if(this.productId=='19' && this.SectionSelectYn!='ClaimExperience' && this.SectionSelectYn!='UWQues' && this.SectionSelectYn!=''){sessionStorage.setItem('loadingType','true')}
    //else sessionStorage.removeItem('loadingType')
    let saveDetails = sessionStorage.getItem('ApiCall');
    if ((this.productId == '19' && saveDetails) || this.productId != '19' || (this.productId=='19' || this.insuranceId=='100050')) {
      console.log(this.productId,this.SectionSelectYn);
      if(this.productId=='19' && this.SectionSelectYn != 'UWQues' && this.uwQuestionList.length != 0){
        this.packageplusMenus = [
        'UnderWriter Questions'
      ].map(menu => ({ menu, filled: false }));
          this.currentPackagePlus = this.packageplusMenus[0]?.menu;
          this.SectionSelectYn = 'UWQues'
      }
      else if ((this.productId == '19' && (this.SectionSelectYn == 'UWQues' || this.SectionSelectYn == '')) || this.productId != '19' || (this.productId=='19' || this.insuranceId=='100050')) {
        let urlLink = `${this.motorApiUrl}api/slide/nonmotorsave`
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if (data.Result) {
              if (data?.Result.length != 0) {
                this.IndustryId = null;
                this.industryError = false;
                this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
                sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
                if ((type == 'Save' && this.LocationName.length == (this.tabIndex + 1) && this.insuranceId != '59' && this.insuranceId != '19') || (type == 'Save' && this.locationList.length == (this.currentIndex + 1) && this.insuranceId != '59' && this.insuranceId != '19') || type == 'Submit') {
                  if (this.uwQuestionList.length != 0) {
                    let k = 0;
                    let uwList: any[] = new Array();
                    console.log("Final Lis UW", this.uwQuestionList)
                    for (let obj of this.uwQuestionList) {
                      let i = 0;
                      for (let ques of obj.UWQuestionsList) {
                        ques['BranchCode'] = this.branchCode;
                        let createdBy = "";
                        let quoteStatus = sessionStorage.getItem('QuoteStatus');
                        if (quoteStatus == 'AdminRP') {
                          createdBy = this.loginId;
                        }
                        else {
                          createdBy = this.loginId;
                        }
                        let status = null, loading = null;
                        if ((ques.Value == null || ques.Value == '' || ques.Value == 'N')) ques.Value = 'No';
                        if ((ques.Value == 'Y')) ques.Value = 'Yes';
                        if (ques.QuestionType == '01' && ques.Value != null && ques.Value != '' && ques.Options != null) {
                          let obj = ques.Options.find(ele => ele.UwQuesOptionDesc == ques.Value);
                          if (obj) {
                            loading = obj.LoadingPercent
                            if (obj.ReferralYn == 'Y') status = 'R';
                            else status = 'Y';
                          }
                          else status = 'Y';
                        }
                        else status = ques.Status;
                        let entry = {
                          "InsuranceId": this.insuranceId,
                          "ProductId": this.productId,
                          "UwQuestionId": ques.UwQuestionId,
                          "UwQuestionDesc": ques.UwQuestionDesc,
                          "QuestionType": ques.QuestionType,
                          "QuestionCategory": ques.QuestionCategory,
                          "QuestionCategoryDesc": ques.questionCategoryDesc,
                          "questionCategoryDesc": ques.questionCategoryDesc,
                          "EffectiveDateStart": ques.EffectiveDateStart,
                          "SectionId": ques.SectionId,
                          "LocationId": String(this.tabIndex + 1),
                          "Status": status,
                          "LoadingPercent": loading,
                          "MandatoryYn": ques.MandatoryYn,
                          "DataType": ques.DataType,
                          "CreatedBy": createdBy,
                          "UpdatedBy": this.loginId,
                          "Value": ques.Value,
                          "BranchCode": this.branchCode,
                          "RequestReferenceNo": this.requestReferenceNo,
                          "VehicleId": String(this.tabIndex + 1)
                        }
                        uwList.push(entry);
                        i += 1;
                        if (i == obj.UWQuestionsList.length) { k += 1; if (k == this.uwQuestionList.length) this.onSaveUWQues(uwList, data.Result, type); }
                      }
                    }

                  }
                  else {
                    this.IndustryId = null;
                    this.industryError = false;
                    if (this.productItem.FirstLossPayeeYN == 'Y') {
                      let list = this.firstLossPayeeList.filter(ele => ele.FirstLossPayeeDesc != '' && ele.FirstLossPayeeDesc != null);
                      if (list.length != 0 && ((this.SectionSelectYn == 'UWQues' || this.SectionSelectYn == '') || this.productId != '19')) { this.onSaveFirstLossList(data.Result, type) }
                      else if ((list.length != 0 && this.productId == '19' && (this.SectionSelectYn == 'UWQues' || this.SectionSelectYn == '') || this.productId != '19')) {
                        if (this.tabIndex + 1 != this.locationList.length) {
                          this.tabIndex += 1; this.SectionSelectYn = 'FC'; this.sectionView1 = true; this.sectionView4 = false;
                          this.productItem = new ProductData();
                          this.IndustryId = null;
                          this.industryError = false;
                          if (this.productId == '59' || this.productId == '19') this.onEditDomestic()
                        }
                        else this.onCalculate(data.Result, type);
                      }
                    }
                    else {
                      if (this.productId == '19') {
                        this.onCalculate(data.Result, type);
                        //if(!sessionStorage.getItem('loadingType')) this.sectionNext(data.Result,type);
                        // let i=0;

                        // if(this.SectionSelectYn=='FC'){this.sectionView1=false;this.sectionView2=true;this.SectionSelectYn='EC';i+=1}
                        // else if(this.SectionSelectYn=='EC'){this.sectionView2=false;this.sectionView3=true; this.SectionSelectYn='EL';i+=1}
                        // else if(this.SectionSelectYn=='EL'){this.sectionView3=false;this.sectionView4=true; this.SectionSelectYn='FAO';i+=1}
                        // else if(this.SectionSelectYn=='FAO'){this.sectionView4=false;this.sectionView5=true; this.SectionSelectYn='SAO';i+=1}
                        // else if(this.SectionSelectYn=='SAO'){this.SectionSelectYn='';i+=2}
                        // if(i==2){
                        //   this.onCalculate(data.Result,type);
                        // }
                      }
                      else {
                        this.onCalculate(data.Result, type);
                      }
                    }
                  }
                }
                else {
                  this.IndustryId = null;
                  this.industryError = false;
                  if (this.uwQuestionList.length != 0) {
                    let i = 0, k = 0;
                    let uwList: any[] = new Array();
                    for (let obj of this.uwQuestionList) {
                      for (let ques of obj.UWQuestionsList) {
                        ques['BranchCode'] = this.branchCode;
                        let createdBy = "";
                        let quoteStatus = sessionStorage.getItem('QuoteStatus');
                        if (quoteStatus == 'AdminRP') {
                          createdBy = this.loginId;
                        }
                        else {
                          createdBy = this.loginId;
                        }
                        let status = null, loading = null;
                        if ((ques.Value == null || ques.Value == '' || ques.Value == 'N')) ques.Value = 'No';
                        if ((ques.Value == 'Y')) ques.Value = 'Yes';
                        if (ques.QuestionType == '01' && ques.Value != null && ques.Value != '' && ques.Options != null) {
                          let obj = ques.Options.find(ele => ele.UwQuesOptionDesc == ques.Value);
                          if (obj) {
                            loading = obj.LoadingPercent
                            if (obj.ReferralYn == 'Y') status = 'R';
                            else status = 'Y';
                          }
                          else status = 'Y';
                        }
                        else status = ques.Status;

                        let entry = {
                          "InsuranceId": this.insuranceId,
                          "ProductId": this.productId,
                          "UwQuestionId": ques.UwQuestionId,
                          "UwQuestionDesc": ques.UwQuestionDesc,
                          "QuestionType": ques.QuestionType,
                          "QuestionCategory": ques.QuestionCategory,
                          "QuestionCategoryDesc": ques.questionCategoryDesc,
                          "questionCategoryDesc": ques.questionCategoryDesc,
                          "EffectiveDateStart": ques.EffectiveDateStart,
                          "SectionId": ques.SectionId,
                          "Status": status,
                          "LoadingPercent": loading,
                          "MandatoryYn": ques.MandatoryYn,
                          "DataType": ques.DataType,
                          "CreatedBy": createdBy,
                          "UpdatedBy": this.loginId,
                          "Value": ques.Value,
                          "BranchCode": this.branchCode,
                          "RequestReferenceNo": this.requestReferenceNo,
                          "VehicleId": String(this.tabIndex + 1),
                          "LocationId": String(this.tabIndex + 1)
                        }
                        uwList.push(entry);
                        i += 1;
                        if (i == obj.UWQuestionsList.length) { k += 1; if (k == this.uwQuestionList.length) this.onSaveUWQues(uwList, data.Result, type); }
                      }
                    }

                  }
                  else if ((this.productId == '59' || this.productId == '19') && this.productItem.FirstLossPayeeYN == 'Y') {
                    let list = this.firstLossPayeeList.filter(ele => ele.FirstLossPayeeDesc != '' && ele.FirstLossPayeeDesc != null);
                    if (list.length != 0) { this.onSaveFirstLossList(data.Result, type) }
                    else { if (this.tabIndex+1 != this.locationList.length) { this.tabIndex += 1; this.SectionSelectYn = 'FC'; this.sectionView1 = true; this.sectionView4 = false; } this.productItem = new ProductData(); if (this.productId == '59' || this.productId == '19') this.onEditDomestic() }
                  }
                  else if (this.productId == '66' || this.productId == '67' || this.productId == '68' || this.productId == '69' || this.productId == '70' || this.productId == '71' || this.productId == '72' || this.productId == '75' || this.productId == '49' || this.productId == '14' || this.productId == '32' || this.productId == '39' || this.productId == '73' || this.productId == '74' || this.productId == '76' || this.productId == '26' || this.productId == '27' || this.productId == '16' || this.productId == '57' || this.productId == '48' || this.productId == '78' || this.productId == '77' || this.productId == '25' ||this.productId == '79' ||this.productId == '84' || this.productId=='82'|| this.productId=='83' || this.productId=='59') {
                    this.tabIndex += 1; this.productItem = new ProductData();
                    if (this.productId == '32') { this.fidelityForm.controls['fidelitys'].setValue([{ "AdditionalClaimsPreparationCosts": null, "LimitOfIndemnity": null }]) }
                    if (this.productId == '59') { this.fidelityForm.controls['allRisk'].setValue([{ "AllriskSumInsured": null, "AllriskDescription": null }]) }
                    if (this.productId == '39') {
                      this.form.controls['GrossProfit']?.setValue('0'); this.form.controls['IncreasedCostOfWorking']?.setValue('0');
                      this.form.controls['ClaimsPreparationCosts']?.setValue(null)
                    }
                    if (this.productId == '14') {
                      const Array = (this.fieldEE[0].form.get('employers') as FormArray);
                      setTimeout(() => {
                        while (Array.length != 0) { Array.clear(); }
                        this.repeatService.requestAdd();
                      }, 50);
                      this.model.employers = [];
                    }
                    if (this.productId == '66' || this.productId == '67' || this.productId == '78') {
                      this.form.reset();
                      this.productItem = new ProductData();
                    }
                    this.onEditfirePhoneix()

                  }
                  else { if (this.tabIndex+1 != this.locationList.length) { this.tabIndex += 1; this.SectionSelectYn = 'FC'; this.sectionView1 = true; this.sectionView4 = false; } this.productItem = new ProductData(); if (this.productId == '59' || this.productId == '19'){
                      let m=0,menus=[];
                      if(this.productId=='59') menus=this.domesticMenus
                      else if (this.productId == '19'){ menus = this.packageplusMenus[0].menu
                        this.currentPackagePlus = this.packageplusMenus[0].menu;
                      }
                      for(let entry of menus){
                        entry.filled=false;m+=1;
                        if(m==menus.length)this.onEditDomestic()
                      }
                  }
                  }
                }
              
              }
              
            }
          });
      }
      else { this.onTemporarySave(ReqObj, type, 'change') }
    }
    else { this.onFinalSubmit(ReqObj, type) }
  }
  onTemporarySave(ReqObj, type, callType) {
    let saveDetails = sessionStorage.getItem('ApiCall');
    if (saveDetails) {
      sessionStorage.removeItem('ApiCall');
      let urlLink = `${this.motorApiUrl}api/slide/nonmotorsave`
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          if (data.Result) {
            this.IndustryId = null;
            this.industryError = false;
            this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
            sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
            if (this.SectionSelectYn == 'UWQues') {
              let claimList = this.claimExperienceList.filter(ele => ele.CLHClaimYear != null && ele.CLHNatureOfLoss != null && ele.CLHNatureOfLoss != '' && ele.CLHDateOfLoss != null && ele.CLHDateOfLoss != '' &&
                ele.CLHClaimedAmount != '' && ele.CLHClaimedAmount != null && ele.CLHRemarks != '' && ele.CLHRemarks != null);
              if (claimList.length != 0) {
                this.onSaveClaimList(claimList)
              }
            }
          }
          sessionStorage.setItem('ApiCall', 'true')
        })
    }
    else { this.onTemporarySave(ReqObj, type, 'direct') }
    if (this.productId == '19' && this.SectionSelectYn != 'UWQues' && this.SectionSelectYn != '' && callType == 'change') { this.sectionNext(null, type); }
  }
  sectionNext(data, type) {
    if (this.productId == '19') {
      let i = 0;
      if (this.SectionSelectYn == 'FC') { this.sectionView1 = false; this.sectionView2 = true; this.SectionSelectYn = 'EC'; this.sectionView6 = false; this.sectionView7 = false; i += 1 }
      else if (this.SectionSelectYn == 'EC') { this.sectionView2 = false; this.sectionView3 = true; this.SectionSelectYn = 'EL'; this.sectionView6 = false; this.sectionView7 = false; i += 1 }
      else if (this.SectionSelectYn == 'EL') { this.sectionView3 = false; this.sectionView4 = true; this.SectionSelectYn = 'FAO'; this.sectionView6 = false; this.sectionView7 = false; i += 1 }
      else if (this.SectionSelectYn == 'FAO') { this.sectionView1 = false; this.sectionView2 = false; this.sectionView3 = false; this.sectionView4 = false; this.sectionView6 = true; this.sectionView7 = false; this.SectionSelectYn = 'ClaimExperience'; i += 1 }
      else if (this.SectionSelectYn == 'ClaimExperience') { this.sectionView1 = false; this.sectionView2 = false; this.sectionView3 = false; this.sectionView4 = false; this.sectionView6 = false; this.sectionView7 = true; this.SectionSelectYn = 'UWQues'; i += 1 }
      else if (this.SectionSelectYn == 'UWQues') { this.SectionSelectYn = ''; i += 2 }
      if (i == 2) {
        this.onCalculate(data, type);
      }
    }
  }
  onSaveClaimList(claimList) {
    let list = [], i = 0;
    for (let ins of claimList) {
      let dateValue = null, dateList = [];
      dateList = String(ins.CLHDateOfLoss).split('/');
      if (dateList.length > 1) dateValue = ins.CLHDateOfLoss
      else dateValue = this.datePipe.transform(ins.CLHDateOfLoss, 'dd/MM/yyyy');
      let entry = {
        "CLHSlNo": i + 1,
        "CLHDateOfLoss": dateValue,
        "CLHNatureOfLoss": ins.CLHNatureOfLoss,
        "CLHClaimedAmount": ins.CLHClaimedAmount,
        "CLHClaimYear": ins.CLHClaimYear,
        "CLHRemarks": ins.CLHRemarks
      }
      list.push(entry);
      i += 1;
      if (i == claimList.length) {
        let ReqObj = {
          "CompanyId": this.insuranceId,
          "ProductId": this.productId,
          "RequestReferenceNo": this.quoteRefNo,
          "QuoteNo": this.quoteNo,
          "ClaimHistoryInfo": list
        }
        let urlLink = `${this.CommonApiUrl}api/saveclaimhistoryinfo`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if (data.Result) {

            }
          });
      }
    }
  }
  onSaveFirstLossList(buildDetails, type) {
    let list = this.firstLossPayeeList.filter(ele => ele.FirstLossPayeeDesc != '' && ele.FirstLossPayeeDesc != null);
    if (list.length != 0) {
      let sectionId = null;
      if (this.productId == '6') sectionId = this.productItem.Section;
      else if (this.productId == '59') {
        let entry = this.locationList[this.tabIndex];
        if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') sectionId = '1';
        else sectionId = '47';
      }
      else if (this.productId == '19') sectionId = "40";
      else sectionId = '99999'
      let mainObj = this.locationList[this.tabIndex], finalList = [], i = 0
      for (let obj of list) {
        let entry = {
          "RequestReferenceNo": this.requestReferenceNo,
          "FirstLossPayeeId": i + 1,
          "FirstLossPayeeDesc": obj.FirstLossPayeeDesc,
          "SectionId": sectionId,
          "ProductId": this.productId,
          "LocationId": String(this.tabIndex + 1),
          "LocationName": mainObj.LocationName,
          "CompanyId": this.insuranceId,
          "CreatedBy": this.loginId,
          "Status": "Y",
          "BranchCode": this.branchCode
        }
        finalList.push(entry);
        i += 1;
        if (i == list.length) this.onFinalLossSubmit(finalList, buildDetails, type)
      }
    }
    else this.onCalculate(buildDetails, type)
  }
  onFinalLossSubmit(finalList, buildDetails, type) {
    let urlLink = `${this.motorApiUrl}api/savefirstlosspayee`;
    this.sharedService.onPostMethodSync(urlLink, finalList).subscribe(
      (data: any) => {
        if (data.Result) { this.onCalculate(buildDetails, type) }
      });
  }
  onOptionSelect(rowData, value) {
    rowData.Value = value;
  }
  getUWDesc(ques) {
    if (ques.ReferralYn == 'Y') return `<i class="pi pi-bookmark-fill customReferralBorder"></i>&nbsp; ${ques.UwQuesOptionDesc}`
    else return ques.UwQuesOptionDesc;
  }
  getOccupationList(sectionId, type) {
    let ReqObj = {}, urlLink: any = ''; this.occupationList = [];
    if (this.productId != '14' && this.productId != '32') {
      ReqObj = {
        "InsuranceId": this.insuranceId,
        "BranchCode": this.branchCode,
        "ProductId": this.productId
      }
      urlLink = `${this.CommonApiUrl}master/dropdown/occupation`;
    }
    else {
      ReqObj = {
        "SectionId": sectionId,
        "ProductId": this.productId,
        "QuoteNo": this.quoteNo
      }
      urlLink = `${this.CommonApiUrl}dropdown/occupations`;
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          this.occupationList = [];
          this.occupationList = data.Result;
          let defaultObj = [{ 'label': '-Select-', 'value': '' }]
          if (this.productId == '14' || sectionId == '45') {
            this.employeeOccupationList = data.Result;
            for (let i = 0; i < this.employeeOccupationList.length; i++) {
              this.employeeOccupationList[i].label = this.employeeOccupationList[i]['CodeDesc'];
              this.employeeOccupationList[i].value = this.employeeOccupationList[i]['Code'];
              if (i == this.employeeOccupationList.length - 1) {
                console.log('Itemsss', this.fieldsGroupPa[0].fieldGroup[0])
                this.fieldsGroupPa[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].props.options = defaultObj.concat(this.employeeOccupationList);
              }
            }
          }
          else if (this.productId == '32' || sectionId == '43' || sectionId == '182') {
            let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': '' }]
            this.fidelityOccupationList = defaultObj.concat(data.Result);
            for (let i = 0; i < this.fidelityOccupationList.length; i++) {
              this.fidelityOccupationList[i].label = this.fidelityOccupationList[i]['CodeDesc'];
              this.fidelityOccupationList[i].value = this.fidelityOccupationList[i]['Code'];
              if (i == this.fidelityOccupationList.length - 1) {
                if (this.productId != '19') this.fieldFEFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[1].props.options = this.fidelityOccupationList;
                else {
                  let defaultObj = [{ 'label': '-Select-', 'value': '' }]; let fieldList = [];
                  if (sectionId == '43') fieldList = this.fields13[0].fieldGroup[0].fieldGroup;
                  else if (sectionId == '182') fieldList = this.fields16[0].fieldGroup[0].fieldGroup;
                  for (let field of fieldList) {
                    if (field.key == 'OccupationId' || field.key == 'OccupationType' || field.key == 'OccupationType' || field.key == 'PAOccupationType') { field.templateOptions.options = this.fidelityOccupationList; if (field.options) field.props.options = this.fidelityOccupationList }
                  }
                }
              }
              // console.log('JJJJJJJJJJJJJJJJJJJ',this.fieldFEFields[0].fieldGroup[0].fieldGroup[0].fieldGroup[1].props.options)
            }
          }
          else {
            this.occupationList = data.Result;
            let defaultObj = [{ 'label': '-Select-', 'value': '' }]
            for (let i = 0; i < this.occupationList.length; i++) {
              this.occupationList[i].label = this.occupationList[i]['CodeDesc'];
              this.occupationList[i].value = this.occupationList[i]['Code'];
              if (i == this.occupationList.length - 1) {
                if ((this.productId == '59' || sectionId == '35')) {
                  let fieldList = this.fields4[0].fieldGroup[0].fieldGroup;
                  for (let field of fieldList) {
                    if (field.key == 'OccupationId' || field.key == 'OccupationType' || field.key == 'OccupationType' || field.key == 'PAOccupationType') field.templateOptions.options = defaultObj.concat(this.occupationList);
                  }
                }
                else if (this.productId == '19' && sectionId == '43') {
                  let fieldList = this.fields13[0].fieldGroup[0].fieldGroup;
                  for (let field of fieldList) {
                    if (field.key == 'OccupationId' || field.key == 'OccupationType' || field.key == 'OccupationType' || field.key == 'PAOccupationType') field.templateOptions.options = defaultObj.concat(this.occupationList);
                  }
                }

              }
            }
          }
        }
      },
      (err) => { },
    );
  }
  individualCommaFormatted(type) {
    if (type == 'accessories') {
      let entry = this.productItem.AccessoriesSI;
      if (entry) {
        //if(this.SumInsured.includes('.')) this.SumInsured = this.SumInsured.split('.')[0];
        // let value = this.SumInsured.replace(/\D/g, "")
        // .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (!this.editAccessoriesSection && this.currentAccessoriesIndex == null) {
          this.currentAccessoriesIndex = this.accessoriesList.length;
        }
        if (this.accessoriesList[this.currentAccessoriesIndex] == undefined) {
          this.accessoriesList.push({
            "ItemId": null,
            "RiskId": null,
            "MakeAndModel": null,
            "ContentRiskDesc": null,
            "SerialNoDesc": null,
            "SerialNo": null,
            "ItemValue": null,
            "SumInsured": null,
          });
          console.log("Final Accessories", this.accessoriesList, this.accessoriesList[this.currentAccessoriesIndex], this.currentAccessoriesIndex)
          this.accessoriesList[this.currentAccessoriesIndex]['SumInsured'] = entry;
          this.productItem.AccessoriesSI = entry;
          this.getTotalSICost('Accessories');
        }
        else {
          this.accessoriesList[this.currentAccessoriesIndex]['SumInsured'] = entry;
          this.productItem.AccessoriesSI = entry;
          this.getTotalSICost('Accessories');
        }
      }
    }
  }
  getTotalSICost(type) {
    if (type == 'Accessories') {
      this.totalAccessoriesSI = 0;
      if (this.accessoriesList.length != 0) {
        for (let emp of this.accessoriesList) {
          let SI = emp.SumInsured, entry = 0;
          //if(emp?.EmployeeId) delete emp['EmployeeId'];
          if (SI == undefined || SI == '' || SI == null) SI = 0;
          // else if(SI.includes(',')){ entry = SI.replace(/,/g, '') }
          else entry = SI
          this.totalAccessoriesSI = Number(entry) + this.totalAccessoriesSI
        }
      }
    }
  }
  onSaveAccessories() {
    if (this.accessoriesList.length != 0) {
      let i = 0, reqList = [];
      for (let entry of this.accessoriesList) {
        let sumInsured;
        if (entry.SumInsured == undefined || entry.SumInsured == null) sumInsured = null;
        // else if(entry.SumInsured.includes(',')){ sumInsured = entry.SumInsured.replace(/,/g, '') }
        else sumInsured = entry.SumInsured;
        let data = {
          "ItemId": entry.ItemId,
          "RiskId": '1',
          "ContentRiskDesc": entry.ContentRiskDesc,
          "SerialNoDesc": entry.SerialNoDesc,
          "MakeAndModel": "TN123",
          "SerialNo": "155685",
          "ItemValue": "26534556",
          "SumInsured": sumInsured
        }
        reqList.push(data);
        i += 1;
        if (i == this.accessoriesList.length) {
          this.finalSaveRiskDetails(reqList, 'EA', null);
        }
      }

    }
  }
  finalSaveRiskDetails(reqList, type, SaveType) {
    let ReqObj; let urlLink;
    if (type == 'SB') {
    }
    if (type == 'EA' && (this.productId == '5' || this.productId == '29')) {
      ReqObj = {
        "CreatedBy": this.loginId,
        "QuoteNo": sessionStorage.getItem('quoteNo'),
        "RequestReferenceNo": this.quoteRefNo,
        "SectionId": "99999",
        "Type": type,
        "ContentRiskDetails": reqList
      }
      urlLink = `${this.motorApiUrl}api/savecontentrisk`;
    }
    if (type == 'C') {
      ReqObj = {
        "CreatedBy": this.loginId,
        // sessionStorage.getItem('quoteNo')
        "QuoteNo": null,
        "RequestReferenceNo": this.quoteRefNo,
        "Companyid": this.insuranceId,
        "ProductId": this.productId,
        "SectionId": "47",
        "BranchCode": this.branchCode,
        "Type": type,
        "ContentRiskDetails": reqList,
      }
      urlLink = `${this.motorApiUrl}api/savecontentrisk`;
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;
        if (data.ErrorMessage.length != 0) {
          if (res.ErrorMessage) {
            // for(let entry of res.ErrorMessage){
            //   let type: NbComponentStatus = 'danger';
            //   const config = {
            //     status: type,
            //     destroyByClick: true,
            //     duration: 4000,
            //     hasIcon: true,
            //     position: NbGlobalPhysicalPosition.TOP_RIGHT,
            //     preventDuplicates: false,
            //   };
            //   this.toastrService.show(
            //     entry.Field,
            //     entry.Message,
            //     config);
            // }
          }
        }
        else {
          if (type == 'C') {
            if (SaveType == 'direct') {
              this.visible = false;
              this.currentContentRowIndex = null;
            }
            else {
              this.TableRow = [{
                LocationName: '',
                id: 1,
                ItemId: '',
                Content: '',
                SerialNoDesc: '',
                ContentRiskDesc: '',
                SumInsured: 0,
              }]
              this.currentContentRowIndex = this.TableRow.length - 1;
            }
          }
          console.log('First Fields');
          // this.toastrService.show(
          //   'Building Details',
          //   'Building Details Inserted/Updated Successfully',
          //   config)
          if (type == 'MA' || type == 'PI' || type == 'E' || type == 'EA') this.checkValidation();

        }

      },

      (err) => { },
    );
  }
  checkValidation() {
    let ReqObj = {
      "QuoteNo": this.quoteNo
    }
    let urlLink = `${this.motorApiUrl}api/additionalinfovali`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Message == 'Success') {
          this.saveFleetDetails();
          //this.router.navigate(['/quotation/plan/premium-details']);
          //this.router.navigate(['/quotation/plan/main/document-info'])
        }
      },
      (err) => { },
    );
  }
  showSidebar() {
    this.sidebarVisible = true;
  }

  getBack(type) {
    if (this.endorsementSection) {
      if (type == 'Building') {
        this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount'])
      }
      else if (type == 'Health Insurance') {
        this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);
        // this.fourth = true;
        // this.selectedTab -=1; 
      }
      else if (type == 'Content Risk') {
        this.fourth = true;
        //this.getContentDetails();
        this.selectedTab -= 1;

      }
      else if (type == 'Personal Accident') {
        this.fourth = true;
        //this.getPersonalAccidentDetails();
        this.selectedTab -= 1;
      }
      else if (type == 'All Risk') {
        this.fourth = true;
        //this.getallriskDetails();
        this.selectedTab -= 1;
      }
      else if (type == 'Personal Indemenity') {
        this.fourth = true;
        //this.getPersonalIntermediaryDetails();
        this.selectedTab -= 1;
      }
      else if (type == 'ElectricalEquipment') {
        this.fourth = true;
        //this.getElectronicEquipment();
        this.selectedTab -= 1;
      }
      else if (type == 'Machinery Breakdown') {
        this.nine = true;
        this.getMachineryRisk();
        this.selectedTab -= 1;
      }
      else if (type == 'employers') {
        this.selectedTab -= 1;
      }
      else if (type == 'Fedility') {
        this.selectedTab -= 1;
      }
      else if (type == 'Accessories') {
        this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount'])
      }
      else if (type == 'Device Details') {
        this.selectedTab -= 1;
      }
    }
    else if (!this.endorsementSection) {
      if (type == 'Building') {
        this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount'])
      }
      else if (type == 'Health Insurance') {
        this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);
      }
      if (type == 'Content Risk') {
        this.fourth = true;
        //this.getContentDetails();
        this.selectedTab -= 1;

      }
      else if (type == 'Personal Accident') {
        this.fourth = true;
        //this.getPersonalAccidentDetails();
        this.selectedTab -= 1;
      }
      else if (type == 'All Risk') {
        this.fourth = true;
        //this.getallriskDetails();
        this.selectedTab -= 1;
      }
      else if (type == 'Personal Indemenity') {
        this.fourth = true;
        //this.getPersonalIntermediaryDetails();
        this.selectedTab -= 1;
      }
      else if (type == 'ElectricalEquipment') {
        this.fourth = true;
        //this.getElectronicEquipment();
        this.selectedTab -= 1;
      }
      else if (type == 'Machinery Breakdown') {
        this.nine = true;
        this.getMachineryRisk();
        this.selectedTab -= 1;
      }
      else if (type == 'employers') {
        this.selectedTab -= 1;
      }
      else if (type == 'Fedility') {
        this.selectedTab -= 1;
      }
      else if (type == 'Accessories') {
        this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount'])
      }
      else if (type == 'Device Details') {
        this.selectedTab -= 1;
      }
      else if (type == 'Medical') {
        this.selectedTab -= 1;
      }
    }


  }
  getBackAlt() {
    let commonDetals: any = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
    if (commonDetals == null || commonDetals == undefined) sessionStorage.setItem('homeCommonDetails', JSON.stringify(this.commonDetails));
    this.router.navigate(['/quotation/plan/quote-details'])
  }
  onSaveEmployeeDetails(type) {

    let urlLink = null;
    if (type == 'save') urlLink = `${this.motorApiUrl}api/saveemployees`;
    else urlLink = `${this.motorApiUrl}api/proceedemployees`;
    if (this.employeeList.length != 0) {
      let empList = [], i = 0;
      for (let emp of this.employeeList) {
        let entry = emp;
        if (entry.DateOfBirth != null) {
          if (!entry.DateOfBirth.includes('/')) entry['DateOfBirth'] = this.datePipe.transform(entry.DateOfBirth, "dd/MM/yyyy");
        }
        if (emp.LocationName == undefined) emp['LocationName'] = this.LocationList.find(ele => ele.Code == emp['LocationId']).CodeDesc;
        if (entry['EmployeeId'] == null || entry['EmployeeId'] == undefined || entry['EmployeeId'] == '') entry['EmployeeId'] = null;
        else entry['EmployeeId'] = String(entry.EmployeeId);
        empList.push(entry);
        i += 1;
        if (i == this.employeeList.length) {
          let SectionId = null;
          if (this.productId == '14' || this.productId == '19' || this.productId == '57') SectionId = '45';
          let validYN = 'N';
          if (type == 'alter') validYN = 'Y';
          let ReqObj = {
            "Createdby": this.loginId,
            "SectionId": SectionId,
            "ProductId": this.productId,
            "InsuranceId": this.insuranceId,
            "ProductEmployeeSaveReq": empList,
            "QuoteNo": this.quoteNo,
            // "EmpcountSIvalidYN": validYN,
            // "ExcelUploadYN": "N",
            // "RequestReferenceNo": this.quoteRefNo
          }
          //let urlLink = `${this.motorApiUrl}api/saveproductemployees`;
          this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
            (data: any) => {
              console.log(data);
              let res: any = data;
              if (data.ErrorMessage.length != 0) {
                if (res.ErrorMessage) {
                  let entry = res.ErrorMessage.some(ele => ele.Code == '333' || ele.Code == '111' || ele.Code == '222');
                  if (entry) {
                    let ulList = '';
                    for (let index = 0; index < res.ErrorMessage.length; index++) {
                      const element = res.ErrorMessage[index];

                      ulList += `<li class="list-group-login-field">
                                <div style="color: darkgreen;">Field<span class="mx-2">:</span>${element?.Field}</div>
                                <div style="color: red;">Message<span class="mx-2">:</span>${element?.Message}</div>
                              </li>`

                    }

                  }

                }
              }
              else {
                if (this.productId == '19' && this.eight) this.selectedTab += 1;
                else if (this.productId == '19' && this.nine) this.selectedTab += 1;
                else this.checkValidation();
              }
            },
            (err) => { },
          );
        }
      }
    }
    else { alert("No Employees Found") }
  }

  saveBuildingDetails(ReqObj, type) {
    let urlLink = `${this.motorApiUrl}api/buildingdetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;
        if (data.ErrorMessage.length != 0) {
          if (res.ErrorMessage) {

          }
        }
        else {
          if (data.Result) {
            console.log('PPPPPPPPP', data.Result);
            console.log('SSSSSSSSSSSS', type);
            //this.first=true;
            if (type == 'Content Risk') {
              this.fourth = true;
              //this.getContentDetails();
              this.selectedTab = 1;
            }
            else if (type == 'Personal Accident') {
              this.fourth = true;
              // this.getPersonalAccidentDetails();
            }
            else if (type == 'All Risk') {
              this.fourth = true;
              // this.getallriskDetails();
            }
            else if (type == 'Personal Indemenity') {
              this.fourth = true;
              //this.getPersonalIntermediaryDetails();
            }
            else if (type == 'ElectricalEquipment') {
              this.fourth = true;
              //this.getElectronicEquipment();
            }
            else if (type == 'Machinery Breakdown') {
              this.nine = true;
              this.getMachineryRisk();
            }
            else if (this.first || this.second || this.third || this.fifth || this.six || this.seven || this.eight || this.nine) {
              this.fourth = true;
              if (this.first) {
                //this.getContentDetails();
              }
              else if (this.second) {
                //this.getPersonalAccidentDetails();
              }
              else if (this.third) {
                //this.getallriskDetails();
              }
              else if (this.fifth) {
                //this.getPersonalIntermediaryDetails();
              }
              else if (this.six) {
                //this.getElectronicEquipment();
              }
              else if (this.nine) {
                this.getMachineryRisk();
              }
              this.selectedTab = 1;
            }
            else if (this.productId == '42') this.selectedTab = 1;
            else if (this.productId == '56') this.selectedTab = 1;
            else {
              this.checkValidation();
            }
          }
        }

      },
      (err) => { },
    );
  }
  editsections(types) {
    let contentData
    if (this.productId == '19' && this.insuranceId == '100002') { this.getFidelitySIList(); }
    if (types == 'Building') {
      if (this.insuranceId == '100004') { contentData = new Buildingss(); }
      else { contentData = new Building(); }
      //this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData?.fields]);
      this.fields[0] = contentData?.fields;
      let fieldList = this.fields[0].fieldGroup[0].fieldGroup;
      for (let field of fieldList) {
        if (field.key == 'BuildingBuildYear' && this.insuranceId == '100004') {
          field.props.options = this.getYearList();
        }
        if (field.key == 'BuildingSuminsured') {
          field.templateOptions.disabled = true;
        }
      }
      if (this.productId != '19') {
        if (this.productId != '25' && this.productId != '16' && this.productId != '26' && this.productId != '27' && this.productId != '57') this.getWallMaterialList();
        if (this.productId != '25' && this.productId != '16' && this.productId != '26' && this.productId != '27' && this.productId != '57') this.getRoofMaterialList();
        if (this.productId != '25' && this.productId != '16' && this.productId != '26' && this.productId != '27' && this.productId != '57') this.getbuildingpurposeList();
        this.getFirstLossPayeeList();
      }


      if (this.insuranceId == '100004') {
        this.getTypeOfProperty();
      }
    }
    if(types == 'BuildingCombined'){
          let fireData = null;
          if (this.insuranceId == '100050') fireData = new BuildingCombinedCommercialNamibia();
          this.fields = fireData.policyfields.fieldGroup;
          this.primaryfields = fireData.primaryfields.fieldGroup;
          this.extensionfields = fireData.extensionfields.fieldGroup;
          this.extensionTablefields = fireData.extensionTablefields.fieldGroup;
          this.interruptionfields = fireData.interruptionfields.fieldGroup;

          let j = 0
          for (let field of this.fields) {
            if (field?.key) {
              this.form.addControl(field.key, new FormControl(''));
            }
            j += 1; if (j == this.fields.length) {
             
              this.productItem = new ProductData();
              this.addControlsToFormFire();
              this.setConfirm();
              this.setExtensions();
              this.setLeakageExtensionOptions();
              this.groupedFields = this.groupFields(this.fields);
              this.getConstructionTypeList();
              this.getPublicUtiltiesList();
              this.getInfalationPhonix();
              this.getCommonSuppliersList(); this.getLeakageFire();
              this.getIndeminityPhonix(); this.getCoverListFire()
             
            }
          }
        
    }
    if (types == 'Content') {
      if (this.insuranceId == '100004' && this.productId == '59') {
        //let contentData1 = new HouseHoldContentsss();
        let contentData1 = new HouseHoldContents();
        this.fields1[0] = contentData1?.fields;
      }
      else {
        let contentData1 = new HouseHoldContents();
        this.fields1[0] = contentData1?.fields;
      }
    }
    if (types == 'ElectronicEquipment') {
      if (this.insuranceId == '100002') {
        let contentData6 = new ElectronicEquipmentNew();
        this.fields6[0] = contentData6?.fields;
        if (this.productId != '19') this.getdropListAlt();
        else this.getEquipmentList();
      }

    }
    if (types == 'AllRisk') {
      let contentData3
      if (this.insuranceId == '100004') {
        contentData3 = new AllRiskss();
      }
      else {
        if (this.productId != '19') contentData3 = new AllRisk();
        else contentData3 = new BusinessAllRiskCorporates();
      }
      this.fields2[0] = contentData3?.fields;
      if(this.productId !='19') {if (!this.requestReferenceNo) this.addAllRisk();}
    }
    if (types == 'GroupPersonalAccidentCorporate') {
      let contentData5: any;
      contentData5 = new GroupPersonalAccidentCorporate();
      this.fields16[0] = contentData5?.fields;
      this.getOccupationList('182', 'PersonalAccident');
      this.getGroupPeriodList();
    }
    if (types == 'PersonalAccidentCorporate') {
      let contentData5: any;
      contentData5 = new PersonalAccidentCorporate();
      this.fields4[0] = contentData5?.fields;
      this.getOccupationList('35', 'PersonalAccident');
    }
    if (types == 'PersonalAccident') {
      let contentData5: any;
      contentData5 = new PersonalAccident();
      this.fields4[0] = contentData5?.fields;
      this.getOccupationList('35', 'PersonalAccident');
    }
    if (types == 'PersonalLiability') {
      let contentData4: any;
      contentData4 = new PersonalLiability();
      this.fields3[0] = contentData4?.fields;
    }
    if (types == 'AccidentalDamageCorporate') {
      let contentData4: any;
      contentData4 = new AccidentalDamageCorporate();
      this.fields17[0] = contentData4?.fields;
    }
    if (types == 'PersonalLiability') {
      let contentData4: any;
      contentData4 = new PersonalLiabilityPhoneix();
      this.fieldPersonalLiability[0] = contentData4?.fields;
    }
    if (types == 'PlatinumCorporate') {
      let contentData4: any;
      contentData4 = new PlatinumCorporate();
      this.fields18[0] = contentData4?.fields;
      this.getPlateGlassType();
    }
    if (types == 'OfficeContentsCorporate') {
      let contentData4: any;
      contentData4 = new OfficeContentsCorporate();
      this.fields19[0] = contentData4?.fields;
    }
    if (types == 'StockCorporate') {
      let contentData4: any;
      contentData4 = new StockCorporate();
      this.fieldsStock[0] = contentData4?.fields;
    }
    if (types == 'PublicLiabilityCorporate') {
      let contentData4: any;
      contentData4 = new PublicLiabilityCorporate();
      this.fields3[0] = contentData4?.fields;
      this.getPublicLiabilityList();
    }
    if (types == 'DomesticServant') {
      let contentData4: any;
      contentData4 = new DomesticServant();
      this.fields7[0] = contentData4?.fields;
    }
    if (types == 'PersonalAllRisk') {
      let contentData4: any;
      contentData4 = new PersonalAllRiskPhoenix();
      this.fieldsBAR[0] = contentData4?.fields;
    }
    if (types == 'MacineryBreakdown') {
      let contentData4: any;
      contentData4 = new MachineryBreakDown();
      this.fields8[0] = contentData4?.fields;
      this.getMachineryContentList();
    }
    if (types == 'Burglary') {
      let contentData4: any;
      contentData4 = new BurglaryCorporate();
      this.fields9[0] = contentData4?.fields;
      this.getBurglaryFirstLossList();
    }
    if (types == 'Fire') {
      let contentData4: any;
      contentData4 = new FireAlliedPerilsCorporate();
      this.fields10 = contentData4?.fields;
      this.getWallMaterialList();
      this.getRoofMaterialList();
      this.getFireContentList();
      this.getFireIndustry();
      this.getAddOnCoverList();
      //this.getPlateGlassType();
      this.getStockAddOnCoverList();
      this.onChangeIndustry(null);
    }
    if (types == 'FireBI') {
      let contentData4: any;
      contentData4 = new FireAlliedPerilsBICorporate();
      this.fields11 = contentData4?.fields;
      //this.getBIFireContentList();
      this.getBusinessLossRatioList();
    }
    if (types == 'Money') {
      let contentData4: any;
      contentData4 = new MoneyCorprate();
      this.fields12 = contentData4?.fields;
    }
    if (types == 'FireAddOn') {
      let contentData4: any;
      contentData4 = new FireAddOn();
      this.fieldsFireAddon = contentData4?.fields;
      // console.log("Final Fields Fidelity",this.fields13)

      // this.getOccupationList('43','Fidelity');
    }
    if (types == 'StockAddOn') {
      let contentData4: any;
      contentData4 = new StockAddOn();
      this.fieldsStockAddon = contentData4?.fields;
      // console.log("Final Fields Fidelity",this.fields13)

      // this.getOccupationList('43','Fidelity');
    }
    if (types == 'GoodsTransit') {
      let contentData4: any;
      contentData4 = new GoodsInTransitCorporate();
      this.fields14 = contentData4?.fields;
      console.log("Final Fields", this.fields14)
      this.getGoodsContentList(); this.getGoodsCommodityList(); this.getGoodsCargoList();
    }
    if (types == 'WorkmensCompensation') {
      let contentData4: any;
      contentData4 = new WorkmenCompensationCorporate();
      this.fields15 = contentData4?.fields;
      console.log("Final Fields", this.fields14)
    }
    if (this.insuranceId == "100046" || this.insuranceId == '100047' || this.insuranceId == '100048' || this.insuranceId == '100049' || this.insuranceId == '100050') {
      let data;
      if (types == 'ElectronicEquipment') {
        let contentData4: any;
        if (this.insuranceId == "100046") contentData4 = new ElectronicEquipmentPhoenix();
        else if (this.insuranceId == '100047') contentData4 = new ElectronicEquipmentBotswana();
        else if (this.insuranceId == '100048') contentData4 = new ElectronicEquipmentMozambique();
        else if (this.insuranceId == '100049') contentData4 = new ElectronicEquipmentSwaziland();
        else if (this.insuranceId == '100050') contentData4 = new ElectronicEquipmentNamibia();
        this.fieldEE[0] = contentData4?.fields;
      }
      if (types == 'AccidentalDamage') {
        let contentData4: any;
        // if (this.insuranceId == "100046") contentData4 = new AccidentalDamagePhoenix();
        // if (this.insuranceId == "100046") contentData4 = new FarmCarePhoenix();
        if (this.insuranceId == "100046") contentData4 = new ProfessionalIndemnityPhoenix();
        else if (this.insuranceId == '100047') contentData4 = new AccidentalDamageBotswana();
        else if (this.insuranceId == '100048') contentData4 = new AccidentalDamageMozambique();
        else if (this.insuranceId == '100049') contentData4 = new AccidentalDamageSwaziland();
        else if (this.insuranceId == '100050' && this.productId!='19') contentData4 = new AccidentalDamageNamibia();
        else if (this.insuranceId == '100050' && this.productId=='19') contentData4 = new AccidentalDamageCommercialNamibia();
        this.fieldAccidentalDamage[0] = contentData4?.fields;
        console.log(this.fieldAccidentalDamage[0]);
        this.getClaimPreparationList();
      }
      if (types == 'Accounts Recievable') {
        let contentData4: any;
        if (this.insuranceId == "100046") contentData4 = new AccountsRecievablePhoenix();
        else if (this.insuranceId == '100047') contentData4 = new AccountsRecievableBotswana()
        else if (this.insuranceId == '100048') contentData4 = new AccountsRecievableMozambique()
        else if (this.insuranceId == '100049') contentData4 = new AccountsRecievableSwaziland()
        else if (this.insuranceId == '100050' && this.productId!='19') contentData4 = new AccountsRecievableNamibia()
        else if (this.insuranceId == '100050' && this.productId=='19') contentData4 = new AccountsRecievableCommercialNamibia();
        this.fieldAccountsRecievable[0] = contentData4?.fields;


      }
      if(types == 'Business All Risk'){
        let contentData4: any;
        if (this.insuranceId == "100050" && this.productId=='19') contentData4 = new BusinessAllRiskCommercialNamibia();
        this.fieldEE[0] = contentData4.fields;
      }
      if (types == 'Theft') {
        let contentData4: any;
        if (this.insuranceId == '100046') contentData4 = new TheftPhoenix();
        else if (this.insuranceId == '100047') contentData4 = new TheftBotswana();
        else if (this.insuranceId == '100048') contentData4 = new TheftMozambique();
        else if (this.insuranceId == '100049') contentData4 = new TheftSwaziland();
        else if (this.insuranceId == '100050') contentData4 = new TheftNamibia();
        this.fieldTheft[0] = contentData4?.fields;
        console.log(this.fieldTheft[0]);

        this.getClaimPreparationList();
      }
      if (types == 'Glass') {
        let contentData4: any;
        if (this.insuranceId == '100046') contentData4 = new GlassPhoenix();
        else if (this.insuranceId == '100047') contentData4 = new GlassBotswana();
        else if (this.insuranceId == '100048') contentData4 = new GlassMozambique();
        else if (this.insuranceId == '100049') contentData4 = new GlassSwaziland();
        else if (this.insuranceId == '100050') contentData4 = new GlassNamibia();
        this.fieldGlass[0] = contentData4?.fields;
      }
      if (types == 'HouseHoldersPhoenix') {
        let fireData: any;
        if (this.insuranceId == '100046') fireData = new HouseHoldersContentsPhoenix();
        else if (this.insuranceId == '100047') fireData = new HouseHoldersContentsBotswana();
        else if (this.insuranceId == '100048') fireData = new HouseHoldersContentsMozambique();
        else if (this.insuranceId == '100049') fireData = new HouseHoldersContentsSwaziland();
        else if (this.insuranceId == '100050') fireData = new HouseHoldersContentsNamibia();
        this.fieldHouseHolderContents = fireData?.fields;
        let contentData4: any;
        if (this.insuranceId == '100046') contentData4 = new HouseHoldersPhoenix();
        else if (this.insuranceId == '100047') contentData4 = new HouseHoldersBotswana();
        else if (this.insuranceId == '100048') contentData4 = new HouseHoldersMozambique();
        else if (this.insuranceId == '100049') contentData4 = new HouseHoldersSwaziland();
        else if (this.insuranceId == '100050') contentData4 = new HouseHoldersNamibia();
        this.fieldHouseHolders[0] = contentData4?.policyfields1;
        console.log(this.fieldHouseHolders);
        this.getConstructionTypeList();
      }
      if (types == 'FidelityPhoenix') {
        // let contentData4: any;
        // contentData4 = new FidelityPhoenix();
        // this.fieldFidelityPhoenix[0] = contentData4?.fields;
        let contentData4: any;
        if (this.insuranceId == '100046') contentData4 = new FidelityPhoenix();
        else if (this.insuranceId == '100047') contentData4 = new FidelityBotswana();
        else if (this.insuranceId == '100048') contentData4 = new FidelityMosambique();
        else if (this.insuranceId == '100049') contentData4 = new FidelitySwaziland();
        else if (this.insuranceId == '100050') contentData4 = new FidelityNamibia();
        this.fieldFidelityPhoenix[0] = contentData4?.policyfields1;
        this.getConstructionTypeList();
        this.addContent();
        if (!this.requestReferenceNo) this.addFidelity();
        // contentData4 = new FidelityCorporate();
        // this.fields13 = contentData4?.fields;
        // console.log("Final Fields Fidelity",this.fields13)
        // this.getFidelitySIList();
        // this.getOccupationList('43','Fidelity');
      }
      if (types == 'Inflation') {
        data = new AdditonalInflationMargin();
        this.fieldInflation[0] = data?.fields;
        let InflationSumInsured = {
          onInit: (field: FormlyFieldConfig) => {
            field.formControl.valueChanges.subscribe(() => {
              this.onKeyPressInflation();
            });
          }
        }
        let fields = this.fieldInflation[0].fieldGroup[0].fieldGroup;
        for (let field of fields) {
          if (field.key == 'InflationConstructionType') {
            field.hooks = InflationSumInsured
          }
        }
      }
      if (types == 'Building') {
        data = new BuildingPhoenix();
        this.field1Build[0] = data?.fields;
        let modelHooks3 = {
          onInit: (field: FormlyFieldConfig) => {
            field.formControl.valueChanges.subscribe(() => {
              this.onChangeBusiness();
            });
          }
        }
        let fields = this.field1Build[0].fieldGroup[0].fieldGroup;
        for (let field of fields) {
          if (field.key == 'WallType') {
            field.hooks = modelHooks3;
          }
        }
        this.getConstructionTypePhonix();
        this.getAdditionalInflationList();
      }
      if (types == 'Content') {
        data = new Content();
        this.fieldContent[0] = data?.fields;
        let modelHooks3 = {
          onInit: (field: FormlyFieldConfig) => {
            field.formControl.valueChanges.subscribe(() => {
              this.onKeyPressContent();
            });
          }
        }
        let fields = this.fieldContent[0].fieldGroup[0].fieldGroup;
        for (let field of fields) {
          if (field.key == 'ContentConstructionType') {
            field.hooks = modelHooks3
          }
        }
      }
      if (types == 'Plant') {
        data = new PlantAndMachinery();
        this.fieldPlant[0] = data?.fields;
        let modelHooks3 = {
          onInit: (field: FormlyFieldConfig) => {
            field.formControl.valueChanges.subscribe(() => {
              this.onKeyPressPlant();
            });
          }
        }
        let fields = this.fieldPlant[0].fieldGroup[0].fieldGroup;
        for (let field of fields) {
          if (field.key == 'PlantConstructionType') {
            field.hooks = modelHooks3
          }
        }
      }
      if (types == 'Trade') {
        data = new StockInTrade();
        this.fieldTrade[0] = data?.fields;
        let TradeSumInsured = {
          onInit: (field: FormlyFieldConfig) => {
            field.formControl.valueChanges.subscribe(() => {
              this.onKeyPressTrade();
            });
          }
        }

        let fields = this.fieldTrade[0].fieldGroup[0].fieldGroup;
        for (let field of fields) {
          if (field.key == 'TradeConstructionType') {
            field.hooks = TradeSumInsured
          }
        }
      }
      if (types == 'Miscellaneous') {
        data = new Miscellaneous();
        this.fieldMiscellaneous[0] = data?.fields;
        let MiscellaneousSumInsured = {
          onInit: (field: FormlyFieldConfig) => {
            field.formControl.valueChanges.subscribe(() => {
              this.onKeyPressMiscellaneous();
            });
          }
        }
        let fields = this.fieldMiscellaneous[0].fieldGroup[0].fieldGroup;
        for (let field of fields) {
          if (field.key == 'MiscellaneousConstructionType') {
            field.hooks = MiscellaneousSumInsured
          }
        }
      }
      if (types == 'Leakage') {
        data = new LeakageExtension();
        this.fieldLeakage[0] = data?.fields;
        let FirstLossBasisSumInsured = {
          onInit: (field: FormlyFieldConfig) => {
            field.formControl.valueChanges.subscribe(() => {
              this.onKeyPressLeakage();
            });
          }
        }
        let fields = this.fieldLeakage[0].fieldGroup[0].fieldGroup;
        for (let field of fields) {
          if (field.key == 'FirstLossBasis') {
            field.hooks = FirstLossBasisSumInsured
          }
        }
      }
      if (types == 'HailDamage') {
        data = new HailDamage();
        this.fieldHailDamage[0] = data?.fields;
      }
      if (types == 'Rent') {
        data = new RentReceivable();
        this.fieldRent[0] = data?.fields;
      }

      if (types == 'Geyser') {
        data = new Geyser();
        this.fieldGeyser[0] = data?.fields;
      }
      if (types == 'ClaimsPreparation') {
        data = new ClaimsPreparation();
        this.fieldClaimPreparation[0] = data?.fields;
        this.getClaimPreparationList();
      }
      if (types == 'Liability') {
        data = new Liability();
        this.fieldLiability[0] = data?.fields;
      }
      if (types == 'LiabilityLoss') {
        data = new LiabilityLoss();
        this.fieldLiabilityLoss[0] = data?.fields;
      }
      if (types == 'AllRiskPhoenix') {
        let contentData4 = null;
        if (this.insuranceId == '100046') contentData4 = new BusinessAllRiskPhoenix();
        else if (this.insuranceId == '100047') contentData4 = new BusinessAllRiskBotswana();
        else if (this.insuranceId == '100048') contentData4 = new BusinessAllRiskMozambique();
        else if (this.insuranceId == '100049') contentData4 = new BusinessAllRiskSwaziland();
        else if (this.insuranceId == '100050') contentData4 = new BusinessAllRiskNamibia();
        this.fieldEE[0] = contentData4?.fields;

      }
      if (types == 'DetoriationPhoenix') {
        let contentData4 = null;
        if (this.insuranceId == '100046') contentData4 = new DeteriorationOfStockPhoenix();
        else if (this.insuranceId == '100047') contentData4 = new DeteriorationOfStockBotswana();
        else if (this.insuranceId == '100048') contentData4 = new DeteriorationOfStockMozambique();
        else if (this.insuranceId == '100049') contentData4 = new DeteriorationOfStockSwaziland();
        else if (this.insuranceId == '100050') contentData4 = new DeteriorationOfStockNamibia();
        this.fieldEE[0] = contentData4?.fields;
      }
      if (types == 'OfficeContents') {
        let contentData4 = null;
        if (this.insuranceId == '100046') contentData4 = new OfficeContents();
        else if (this.insuranceId == '100047') contentData4 = new OfficeContentsBotswana();
        else if (this.insuranceId == '100048') contentData4 = new OfficeContentsMozambique();
        else if (this.insuranceId == '100049') contentData4 = new OfficeContentsSwaziland();
        else if (this.insuranceId == '100050') contentData4 = new OfficeContentsNamibia();
        this.fieldEE[0] = contentData4?.fields;
        this.getClaimPreparationList();
      }
      if (types == 'EmployeePhoenix') {
        // let contentData4
        // contentData4 = new EmployersLiabilityPhoenix()
        // this.fieldEE[0] = contentData4?.fields;
        let contentData4 = null;
        if (this.insuranceId == '100046') contentData4 = new EmployersLiabilityPhoenix();
        else if (this.insuranceId == '100047') contentData4 = new EmployersLiabilityBotswana();
        else if (this.insuranceId == '100048') contentData4 = new EmployersLiabilityMozambique();
        else if (this.insuranceId == '100049') contentData4 = new EmployersLiabilitySwaziland();
        else if (this.insuranceId == '100050') contentData4 = new EmployersLiabilityNamibia();
        this.fieldEE = contentData4?.policyfields1;
        this.getConstructionTypeList();
        // let EmployersForm = this.fieldEE[0]?.form.controls['employers'].value;
        // if(EmployersForm) {
        //   if(EmployersForm.length==0){
        //     this.fieldEE[0]?.form.controls['employers'].setValue([{
        //       "OccupationType":'',
        //       "NoEmployees":'',
        //       "EmpSumInsured": ''
        //     }])
        //   }            
        // }

      }
      if (types == 'HouseOwnerPhoenix') {
        if (this.insuranceId == "100046") data = new HouseOwnerPhoenix();
        else if (this.insuranceId == '100047') data = new HouseOwnerBotswana();
        else if (this.insuranceId == '100048') data = new HouseOwnerMozambique();
        else if (this.insuranceId == '100049') data = new HouseOwnerSwaziland();
        else if (this.insuranceId == '100050') data = new HouseOwnerNamibia();
        this.HouseownerPhoenixTable = data?.policyfields1.fieldGroup;
        this.addControlsToForm(this.HouseownerPhoenixTable);
        this.getPhoenixListItem("NO_CLAIMS_BONUS", 'HouseHoldOwner');
        // for (let field of this.HouseownerPhoenixTable) {
        //   if (field.key == 'NoClaimBonus') { field.props.options = data.getPhoenixListItem("NO_CLAIMS_BONUS", 'HouseHoldOwner'); }
        // }
      }
      if (types == 'StateBenefitsPhoenix') {
        if (this.insuranceId == "100046") data = new StateBenefitsPhoenix();
        else if (this.insuranceId == '100047') data = new StateBenefitsBotswana();
        else if (this.insuranceId == '100048') data = new StateBenefitsMozambique();
        else if (this.insuranceId == '100049') data = new StateBenefitsSwaziland();
        else if (this.insuranceId == '100050') data = new StateBenefitsNamibia();
        this.StateBenefitsPhoenixTable = data?.policyfields1.fieldGroup;
        this.addControlsToForm(this.StateBenefitsPhoenixTable);
        this.getPhoenixListItem("NO_OF_WEEKS", 'StateBenefits');
      }
      if (types == 'MachineryBreakDownPhoenix') {
        if (this.insuranceId == '100046') data = new MachineryBreakDownPhoenix(this.sharedService)
        else if (this.insuranceId == '100047') data = new MachineryBreakDownBotswana(this.sharedService)
        else if (this.insuranceId == '100048') data = new MachineryBreakDownMozambique(this.sharedService)
        else if (this.insuranceId == '100049') data = new MachineryBreakDownSwaziland(this.sharedService)
        else if (this.insuranceId == '100050') data = new MachineryBreakDownNamibia(this.sharedService)
        this.MachineryBreakDownPhoenixTable = data?.policyfields1.fieldGroup;
        this.addControlsToForm(this.MachineryBreakDownPhoenixTable);
      }
      if (types == 'UmbrellaPhoenix') {
        if (this.insuranceId == '100046') data = new UmbrellaPhoenix(this.sharedService)
        else if (this.insuranceId == '100047') data = new UmbrellaBotswana(this.sharedService)
        else if (this.insuranceId == '100048') data = new UmbrellaMozambique(this.sharedService)
        else if (this.insuranceId == '100049') data = new UmbrellaSwaziland(this.sharedService)
        else if (this.insuranceId == '100050') data = new UmbrellaNamibia(this.sharedService)
        this.UmbrellaPhoenixTable = data?.policyfields1.fieldGroup;
        this.addControlsToForm(this.UmbrellaPhoenixTable);
      }
      if (types == 'GoodsTransitPhoenix') {
        if (this.insuranceId == '100046') data = new GoodsInTransitPhoenix()
        else if (this.insuranceId == '100047') data = new GoodsInTransitBotswana()
        else if (this.insuranceId == '100048') data = new GoodsInTransitMozambique()
        else if (this.insuranceId == '100049') data = new GoodsInTransitSwaziland()
        else if (this.insuranceId == '100050') data = new GoodsInTransitNamibia()
        this.getFactorList(data, null, null, [], types)
        this.GoodsTransitextentionsField = data?.ExtensionFields.fieldGroup;
        this.GoodsTransitFields = data?.fields.fieldGroup[0].fieldGroup;
        this.addControlsToForm(this.GoodsTransitextentionsField);
        this.getPhoenixListItem("GOODS_IN_TRANSIT_TYPE", 'GoodsInTransit');
        this.getPhoenixListItem("GOODS_IN_TRANSIT", 'GoodsInTransit');
        this.getClaimPreparationList();
      }
      // if(types=='AccountsRecievable' || types=='AccidentalDamage' || types=='Glass' || types=='Theft' || types=='StateBenefits' || types=='Umbrella' || types=='ElectronicEquipment' || types=='Money'  || types=='GroupPersonalPhoenix' || types=='GoodsTransitPhoenix' || types=='FirePhoenix' || types=='MotorPhoenix' || types=='HouseOwnerPhoenix' || types=='DetoriationPhoenix'
      //   || types=='AllRiskPhoenix' || types=='AdditionalClaims' || types=='Powersurge' || types=='OfficeContents' || types=='ThirdAspect' || types=='WaterLeakage' || types=='LiabilityLoss' || types=='PublicLiabilityPhoenix' || types=='BIPhoenix' || types=='HouseHoldersPhoenix' || types=='EmployeePhoenix' || types=='FidelityPhoenix'){
      let coverList = [];
      //if(types=='AccountsRecievable') coverList = this.sectionDropdownList.find(ele=>ele.Code=='219')?.CoverList;
      //else if(types=='AccidentalDamage')  coverList = this.sectionDropdownList.find(ele=>ele.Code=='56')?.CoverList;
      // else if(types=='Glass')  coverList = this.sectionDropdownList.find(ele=>ele.Code=='222')?.CoverList;
      if (types == 'AccountsRecievable') coverList = this.sectionDropdownList.find(ele => ele.Code == '219')?.CoverList;
      if (types == 'Theft') coverList = this.sectionDropdownList.find(ele => ele.Code == '220')?.CoverList;
      else if (types == 'Umbrella') coverList = this.sectionDropdownList.find(ele => ele.Code == '224')?.CoverList;
      else if (types == 'AdditionalClaims') coverList = this.sectionDropdownList.find(ele => ele.Code == '201')?.CoverList;
      else if (types == 'Powersurge') coverList = this.sectionDropdownList.find(ele => ele.Code == '188')?.CoverList;
      else if (types == 'OfficeContents') coverList = this.sectionDropdownList.find(ele => ele.Code == '198')?.CoverList;
      else if (types == 'ThirdAspect') coverList = this.sectionDropdownList.find(ele => ele.Code == '199')?.CoverList;
      else if (types == 'WaterLeakage') coverList = this.sectionDropdownList.find(ele => ele.Code == '200')?.CoverList;
      else if (types == 'LiabilityLoss') coverList = this.sectionDropdownList.find(ele => ele.Code == '202')?.CoverList;
      // else if(types=='ElectronicEquipment') coverList = this.sectionDropdownList.find(ele=>ele.Code=='76')?.CoverList;
      else if (types == 'Money') coverList = this.sectionDropdownList.find(ele => ele.Code == '42')?.CoverList;
      else if (types == 'AllRiskPhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '223')?.CoverList;
      else if (types == 'PublicLiabilityPhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '54')?.CoverList;
      else if (types == 'GroupPersonalPhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '182')?.CoverList;
      else if (types == 'BIPhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '75')?.CoverList;
      // else if(types=='GoodsTransitPhoenix'){ coverList = this.sectionDropdownList.find(ele=>ele.Code=='46')?.CoverList;}
      //else if(types=='HouseHoldersPhoenix') coverList = this.sectionDropdownList.find(ele=>ele.Code=='228')?.CoverList;
      else if (types == 'FirePhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '4')?.CoverList;
      else if (types == 'MotorPhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '50')?.CoverList;
      else if (types == 'EmployeePhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '37')?.CoverList;
      else if (types == 'FidelityPhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '43')?.CoverList;
      //else if(types=='HouseOwnerPhoenix') coverList = this.sectionDropdownList.find(ele=>ele.Code=='227')?.CoverList;
      else if (types == 'DetoriationPhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '226')?.CoverList;
      else if (types == 'StateBenefitsPhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '225')?.CoverList;
      else if (types == 'MachineryBreakDownPhoenix') coverList = this.sectionDropdownList.find(ele => ele.Code == '41')?.CoverList;


      if ((coverList?.length != 0 || types == 'GoodsTransitPhoenix' || types == 'BuildingCombinedPhoenix')) {
        let i = 0;
        if (types == 'FirePhoenix' && this.productId == '66' && this.productId != '67') {
          let fireData = null;
          if (this.insuranceId == '100046') fireData = new FirePhoenix();
          else if (this.insuranceId == '100047') fireData = new FireBotswana();
          else if (this.insuranceId == '100048') fireData = new FireMozambique();
          else if (this.insuranceId == '100049') fireData = new FireSwaziland();
          else if (this.insuranceId == '100050') fireData = new FireNamibia();
          this.fields = fireData.policyfields.fieldGroup;
          this.primaryfields = fireData.primaryfields.fieldGroup;
          this.extensionfields = fireData.extensionfields.fieldGroup;
          this.extensionTablefields = fireData.extensionTablefields.fieldGroup;
          this.interruptionfields = fireData.interruptionfields.fieldGroup;

          this.productItem = new ProductData();
          this.addControlsToFormFire();
          this.setConfirm();
          this.setExtensions();
          this.setLeakageExtensionOptions();
          this.getLeakageFire();
          this.groupedFields = this.groupFields(this.fields);
          this.getConstructionTypeList();
          this.getPublicUtiltiesList();
          this.getCommonSuppliersList()
        }
        else if (types == 'BuildingCombinedPhoenix' && this.productId != '66' && this.productId == '67') {
          let fireData = null;
          if (this.insuranceId == '100046') fireData = new BuildingCombinedPhoenix();
          else if (this.insuranceId == '100047') fireData = new BuildingCombinedBotswana();
          else if (this.insuranceId == '100048') fireData = new BuildingCombinedMozambique();
          else if (this.insuranceId == '100049') fireData = new BuildingCombinedSwaziland();
          else if (this.insuranceId == '100050') fireData = new BuildingCombinedNamibia();
          this.fields = fireData.policyfields.fieldGroup;
          this.primaryfields = fireData.primaryfields.fieldGroup;
          this.extensionfields = fireData.extensionfields.fieldGroup;
          this.extensionTablefields = fireData.extensionTablefields.fieldGroup;
          this.interruptionfields = fireData.interruptionfields.fieldGroup;
          //  this.form.addControl('PreventionofAccess', new FormControl(''));
          //  this.form.addControl('PublicTelecommuncationSI', new FormControl(''));
          //  this.form.addControl('PublicTelecommuncation', new FormControl(''));
          //  this.form.addControl('PublicUtilities', new FormControl(''));
          //  this.form.addControl('PublicUtilitiesSI', new FormControl(''));
          //  this.form.addControl('CustomerSupplier', new FormControl(''));
          //  this.form.addControl('CustomerSupplierSI', new FormControl(''));
          let j = 0
          for (let field of this.fields) {
            if (field?.key) {
              this.form.addControl(field.key, new FormControl(''));
            }
            j += 1; if (j == this.fields.length) {
              // let k=0
              // for(let field1 of this.primaryfields){
              //   if (field1?.key) {
              //     this.form.addControl(field1.key, new FormControl(''));
              //   }
              //   k+=1;
              //   if(k==this.primaryfields.length){
              this.productItem = new ProductData();
              this.addControlsToFormFire();
              this.setConfirm();
              this.setExtensions();
              this.setLeakageExtensionOptions();
              this.groupedFields = this.groupFields(this.fields);
              this.getConstructionTypeList();
              this.getPublicUtiltiesList();
              this.getInfalationPhonix();
              this.getCommonSuppliersList(); this.getLeakageFire();
              this.getIndeminityPhonix(); this.getCoverListFire()
              //     }
              //   }
            }
          }
        }
        if (types == 'GoodsTransitPhoenix') {
          if (this.insuranceId == '100046') data = new GoodsInTransitPhoenix()
          else if (this.insuranceId == '100047') data = new GoodsInTransitBotswana()
          else if (this.insuranceId == '100048') data = new GoodsInTransitMozambique()
          else if (this.insuranceId == '100049') data = new GoodsInTransitSwaziland()
          else if (this.insuranceId == '100050') data = new GoodsInTransitNamibia()
        }
        else if (types == 'BIPhoenix') { data = new BIPhoenix() }
        else if (types == 'HouseHoldersPhoenix') {
          if (this.insuranceId == "100046") data = new HouseOwnerPhoenix();
          else if (this.insuranceId == '100047') data = new HouseOwnerBotswana();
          else if (this.insuranceId == '100048') data = new HouseOwnerMozambique();
          else if (this.insuranceId == '100049') data = new HouseOwnerSwaziland();
          else if (this.insuranceId == '100050') data = new HouseOwnerNamibia();
        }
        else if (types == 'PublicLiabilityPhoenix') {
          if (this.insuranceId == '100046') data = new PublicLiabilityPhoenix();
          else if (this.insuranceId == '100047') data = new PublicLiabilityBotswana();
          else if (this.insuranceId == '100048') data = new PublicLiabilityMozambique();
          else if (this.insuranceId == '100049') data = new PublicLiabilitySwaziland();
          else if (this.insuranceId == '100050') data = new PublicLiabilityNamibia();
        }
        else if (types == 'Glass') {
          if (this.insuranceId == '100046') data = new GlassPhoenix();
          else if (this.insuranceId == '100047') data = new GlassBotswana();
          else if (this.insuranceId == '100048') data = new GlassMozambique();
          else if (this.insuranceId == '100049') data = new GlassSwaziland();
          else if (this.insuranceId == '100050') data = new GlassNamibia();
        }
        else if (types == 'ClaimsPreparation') { data = new ClaimsPreparation(); }
        else if (types == 'Money') {
          if (this.insuranceId == '100046') data = new MoneyPhoenix();
          else if (this.insuranceId == '100047') data = new MoneyBotswana();
          else if (this.insuranceId == '100048') data = new MoneyMozambique();
          else if (this.insuranceId == '100049') data = new MoneySwaziland();
          else if (this.insuranceId == '100050') data = new MoneyNamibia();

        }

        //else if(types=='AccidentalDamage'){data = new AccidentalDamagePhoenix();}
        else if (types == 'Powersurge') { data = new PowerSurge(); }
        else if (types == 'OfficeContents') {
          if (this.insuranceId == '100046') data = new OfficeContents();
          else if (this.insuranceId == '100047') data = new OfficeContentsBotswana();
          else if (this.insuranceId == '100048') data = new OfficeContentsMozambique();
          else if (this.insuranceId == '100049') data = new OfficeContentsSwaziland();
          else if (this.insuranceId == '100050') data = new OfficeContentsNamibia();
        }

        else if (types != 'StateBenefitsPhoenix') data = new CommonFormly();
        if (types != 'Glass' && types != 'BIPhoenix' && types != 'Money' && types != 'AccidentalDamage' && types != 'Accounts Receivable' && types != 'ClaimsPreparation' && types != 'AllRiskPhoenix'
          && types != 'Powersurge' && types != 'FirePhoenix' && types != 'HouseOwnerPhoenix' && types != 'StateBenefitsPhoenix' && types != 'MachineryBreakDownPhoenix' && types != 'HouseHoldersPhoenix') {
          for (let cover of coverList) {
            let obj = [];
            if ((types == 'HouseHoldersPhoenix' && cover.CoverId == '479')) {
              obj = [
                {
                  className: 'col-12 md:col-4 lg:col-4 p-2',
                  type: 'displays',

                  templateOptions: {
                    label: cover.CoverName,
                    required: true,

                  },
                },
                {
                  type: 'ngselect',
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  key: 'BuildingUsageId',
                  defaultValue: '0',
                  templateOptions: {
                    label: '',
                    maxLength: 15,
                    disabled: this.checkDisable('CategoryId'),
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
                  className: 'col-12 md:col-4 lg:col-4 p-2',
                  type: 'displays',

                  templateOptions: {
                    label: ''

                  },
                },
              ]
            }
            else if ((types == 'PublicLiabilityPhoenix' && cover.CoverId != '5') || (types != 'PublicLiabilityPhoenix' && types != 'Accounts Receivable' && types != 'MachineryBreakDownPhoenix' && types != 'HouseOwnerPhoenix' && types != 'HouseHoldersPhoenix' && types != 'AllRiskPhoenix') || (types != 'HouseHoldersPhoenix' && types != 'MachineryBreakDownPhoenix' && types != 'HouseOwnerPhoenix' && types != 'StateBenefitsPhoenix' && cover.CoverId != '364' && cover.CoverId != '488')) {
              obj = [
                {
                  className: 'col-12 md:col-4 lg:col-4 p-2',
                  type: 'displays',

                  templateOptions: {
                    label: cover.CoverName,
                    required: true,

                  },
                },
                {
                  type: 'commaSeparator',
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  key: cover.CoverName.replaceAll(" ", ''),
                  defaultValue: '0',
                  templateOptions: {
                    label: '',
                    maxLength: 15,
                    disabled: this.checkDisable(cover.CoverName.replaceAll(" ", '')),
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
                  className: 'col-12 md:col-4 lg:col-4 p-2',
                  type: 'displays',

                  templateOptions: {
                    label: '',
                    required: true,

                  },
                },
              ]
            }
            else if (types == 'AllRiskPhoenix') {
              obj = [
                {
                  className: 'col-12 md:col-4 lg:col-4 p-2',
                  type: 'displays',

                  templateOptions: {
                    label: cover.CoverName,
                    required: true,

                  },
                },
                {
                  type: 'primeTextArea',
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  key: cover.CoverName.replaceAll(" ", '') + 'Desc',
                  defaultValue: null,
                  templateOptions: {
                    label: 'Description',
                    maxLength: 15,
                    cols: 40,
                    rows: 1,
                    disabled: this.checkDisable(cover.CoverName.replaceAll(" ", '')),
                    required: true,
                    options: [
                    ],

                  },
                  validators: {
                    validation: [ForceLengthValidators.maxLength(200), ForceLengthValidators.min(1)]
                  },
                  hooks: {
                  },
                  expressions: {
                  },
                },
                {
                  type: 'commaSeparator',
                  className: ' col-12 lg:col-4 md:col-4 xl:col-4',
                  key: cover.CoverName.replaceAll(" ", ''),
                  defaultValue: '0',
                  templateOptions: {
                    label: 'SumInsured',
                    maxLength: 15,
                    disabled: this.checkDisable(cover.CoverName.replaceAll(" ", '')),
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
              ]
            }
            if (this.productItem[cover.CoverName.replaceAll(" ", '')] == null || this.productItem[cover.CoverName.replaceAll(" ", '')] == undefined) this.productItem[cover.CoverName.replaceAll(" ", '')] = '';
            data.fields.fieldGroup[0].fieldGroup = data.fields.fieldGroup[0].fieldGroup.concat(obj);
            i += 1;
            if (i == coverList.length) {
              if (types == 'HouseOwnerPhoenix') { }
              else this.getFactorList(data, i, cover, coverList, types);
            }
          }
        }
        else { this.getFactorList(data, i, null, coverList, types); }
      }
      else if (this.productId != '70' && this.productId != '71' && this.productId != '72' && this.productId != '75' && this.productId != '49' && this.productId != '14' && this.productId != '32' && this.productId != '39' && this.productId != '73' && this.productId != '69' && this.productId != '68' && this.productId != '25' && this.productId != '16' && this.productId != '26' && this.productId != '27'
        && this.productId != '57' && this.productId != '48' && this.productId != '78' && this.productId != '77' && this.productId != '67') {
        if (this.count == 0) {
          this.getConstructionTypePhonix();
          if (this.productId != '67') this.getLeakagePhonix();
          this.getInfalationPhonix();
          this.getIndeminityPhonix()
          this.count += 1;
        }
      }
    }
    //this.productItem = new ProductData();

    //this.getOccupationList();
  }
  getFactorList(rowData, i, cover, coverList, types) {
    // let sectionDetails = this.sectionDropdownList.find(ele=>ele.Code==cover.SectionId);
    // console.log("Filtered Section",sectionDetails)
    // let ReqObj = {
    //   "InsuranceId":this.insuranceId,
    //   "ProductId": this.productId
    // }
    // let urlLink = `${this.ApiUrl1}master/dropdown/factortype`;
    // this.sharedService.onPostMethodSync(urlLink,ReqObj).subscribe(
    //   (data: any) => {
    //       if(data.Result){
    //         sectionDetails['FactorList'] = data.Result;
    //         if(data.Result.length!=0){
    //             let j=0;
    //             for(let entry of data.Result){
    //               let obj =  [
    //                 {
    //                   className: 'col-12 md:col-4 lg:col-4 p-2',
    //                   type: 'displays',

    //                   templateOptions: {
    //                     label: entry.CodeDesc,
    //                     required: true,

    //                   },
    //                 },
    //                 {
    //                   type: 'input',
    //                   className: ' col-12 lg:col-4 md:col-4 xl:col-4',
    //                   key: 'CategoryId',
    //                   id: 'CategoryId',
    //                   defaultValue: '',
    //                   templateOptions: {
    //                     label: '',
    //                     maxLength: 15,
    //                     required:true,
    //                     options: [
    //                     ],

    //                   },
    //                   validators: {
    //                     validation: [ForceLengthValidators.maxLength(20), ForceLengthValidators.min(1)]
    //                   },
    //                   hooks: {
    //                   },
    //                   expressions: {
    //                   },
    //                 },
    //                 {
    //                   className: 'col-12 md:col-4 lg:col-4 p-2',
    //                   type: 'displays',

    //                   templateOptions: {
    //                     label:'',
    //                     required: true,

    //                   },
    //                 },
    //               ]
    //               rowData.fields.fieldGroup[0].fieldGroup = obj.concat(rowData.fields.fieldGroup[0].fieldGroup)
    //               j+=1;
    //               if(j==data.Result.length){
    //                 this.finalRendering(rowData,types);
    //               }
    //             }
    //         }
    //         else{
    this.finalRendering(rowData, types);
    //        }
    //      }
    //     console.log("Fields",this.fieldTheft)
    // });call
  }
  finalRendering(rowData, types) {
    console.log(rowData?.fields, types);
    if (types == 'AccidentalDamage') this.fieldAccidentalDamage[0] = rowData?.fields;
    // else if(types=='Glass')  this.fieldGlass[0] = rowData?.fields;
    // else if(types=='Theft') {this.fieldTheft[0] = rowData?.fields;}
    //else if(types=='StateBenefits')  this.fieldStateBenefits[0] = rowData?.fields;
    // else if(types=='Umbrella')  this.fieldUmbrella[0] = rowData?.fields;
    else if (types == 'AdditionalClaims') this.fieldAdditionalClaims[0] = rowData?.fields;
    else if (types == 'Powersurge') this.fieldPowerSurge[0] = rowData?.fields;
    else if (types == 'OfficeContents') this.fieldOfficeContents[0] = rowData?.fields;
    else if (types == 'ThirdAspect') this.fieldThirdAspect[0] = rowData?.fields;
    else if (types == 'WaterLeakage') this.fieldWaterLeakage[0] = rowData?.fields;
    else if (types == 'LiabilityLoss') this.fieldLiabilityLoss[0] = rowData?.fields;
    // else if(types=='ElectronicEquipment') this.fieldEE[0] = rowData?.fields;
    else if (types == 'Money') { this.fieldMoney[0] = rowData?.fields; this.getSafeLockerList(); }
    else if (types == 'AllRiskPhoenix') this.fieldAllRisk[0] = rowData?.fields;
    else if (types == 'PublicLiabilityPhoenix') { this.fieldPublicLiability[0] = rowData?.fields; this.getPhoenixListItem("PUBLIC_LIABILITY", 'PublicLiability'); }
    else if (types == 'GroupPersonalPhoenix') this.fieldGroupPA[0] = rowData?.fields;
    else if (types == 'BIPhoenix') { this.fieldBI[0] = rowData?.fields; this.getPhoenixListItem("Indemnity_Period", 'BusinessInterruption'); }
    else if (types == 'GoodsTransitPhoenix') { this.fieldGoodsTransit[0] = rowData?.fields; }
    //else if(types=='HouseHoldersPhoenix'){this.fieldHouseHolders[0] = rowData?.fields;this.getPhoenixListItem("NO_CLAIMS_BONUS",'HouseHold');}
    //else if(types=='FirePhoenix'){this.fieldFire[0] = rowData?.fields;this.getPhoenixListItem("BUSINESS_INTRUPTION",'Fire');this.getPhoenixListItem("NASRIA_FIRE",'Fire');}
    else if (types == 'MotorPhoenix') this.fieldMotor[0] = rowData?.fields;
    else if (types == 'EmployeePhoenix') { this.fieldEmployeePhoenix[0] = rowData?.fields; this.getOccupationEmployers() }
    // else if(types=='FidelityPhoenix') this.fieldFidelityPhoenix[0] = rowData?.fields;
    else if (types == 'HouseOwnerPhoenix') this.fieldHouseOwnerPhoenix[0] = rowData?.fields;
    else if (types == 'StateBenefitsPhoenix') this.fieldStateBenefitsPhoenix[0] = rowData?.fields;
    else if (types == 'MachineryBreakDownPhoenix') this.fieldMachineryBreakDownPhoenix[0] = rowData?.fields;

    //else if (types == 'HouseHoldersPhoenix') this.fieldHouseHoldersPhoenix[0] = rowData?.fields;
    else if (types == 'DetoriationPhoenix') this.fieldDetoriationPhoenix[0] = rowData?.fields;
    else if (types == 'MachineryPhoenix') this.fieldMachineryPhoenix[0] = rowData?.fields;
    if (this.productId == '76' || this.productId == '78') {
      this.getConstructionTypeList();
      if (this.productId == '76') this.getGeyserTypeList();
    }
    if (this.productId != '70' && this.productId != '71' && this.productId != '72' && this.productId != '75' && this.productId != '49' && this.productId != '14' && this.productId != '32' && this.productId != '39' && this.productId != '73'
      && this.productId != '69' && this.productId != '68' && this.productId != '25' && this.productId != '16' && this.productId != '26' && this.productId != '27' && this.productId != '57' && this.productId != '48' && this.productId != '78' && this.productId != '77') {
      this.getConstructionTypePhonix();
      this.getLeakagePhonix();
      this.getInfalationPhonix();
      this.getIndeminityPhonix()
      if (this.productId == '66') { this.getCoverListFire() }
    }
  }
  checkDisable(fieldName) {
    this.finalizeYN = sessionStorage.getItem('FinalizeYN');
    if (this.endorsementSection) {
      let entry = this.enableFieldsList.some(ele => ele == fieldName);
      return !entry;
    }
    else if (this.subuserType == 'low') return this.finalizeYN == 'Y';
    else return false;

  }
  getSafeLockerList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "Safe_Locker_Grade"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.moneyLockerList = defaultObj.concat(data.Result);
        let i = 0
        for (let entry of this.moneyLockerList) {
          entry['label'] = entry.CodeDesc; entry['value'] = entry.Code;
          i += 1;
          if (i == this.moneyLockerList.length) {
            let fieldList = [];
            if (this.productId == '76') fieldList = this.fieldHouseOwnerPhoenix[0].fieldGroup[0].fieldGroup;
            if (this.productId == '74') fieldList = this.fieldStateBenefitsPhoenix[0].fieldGroup[0].fieldGroup;
            if (this.productId == '78') fieldList = this.fieldHouseHoldersPhoenix[0].fieldGroup[0].fieldGroup;
            if (this.productId == '39') fieldList = this.fieldMachineryBreakDownPhoenix[0].fieldGroup[0].fieldGroup;
            else fieldList = this.fieldMoney[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) {
              if (field.key == 'SafeLockerGrade') { field.templateOptions.options = this.moneyLockerList }
            }
          }
        }
      })

  }
  getPhoenixListItem(type, sectionType) {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": type
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        let list = [];
        if (type == "BUSINESS_INTRUPTION" || type == "LIMIT_OF_INDEMNITY" || type == "GOODS_IN_TRANSIT" || type == "GOODS_IN_TRANSIT_TYPE" || type == 'PUBLIC_LIABILITY') { this.categoryList = list = defaultObj.concat(data.Result); }
        if (type == "NASRIA_FIRE" || type == 'Indemnity_Period' || type == 'NO_CLAIMS_BONUS' || type == 'NO_OF_WEEKS' || type == 'WALL_TYPE') { this.buildingUsageList = list = defaultObj.concat(data.Result); }
        for (let i = 0; i < list.length; i++) {
          list[i].label = list[i]['CodeDesc'];
          list[i].value = list[i]['Code'];
          // delete this.roofMaterialList[i].CodeDesc;
          if (i == list.length - 1) {
            let fields = [];
            if (sectionType == 'Fire') fields = this.fieldFire[0].fieldGroup[0].fieldGroup;
            else if (sectionType == 'GoodsInTransit') fields = this.GoodsTransitFields;
            else if (sectionType == 'BusinessInterruption') fields = this.fieldBI[0].fieldGroup[0].fieldGroup;
            else if (sectionType == 'HouseHolders') fields = this.HouseHoldersPhoenixTable1;
            else if (sectionType == 'HouseHoldOwner') fields = this.HouseownerPhoenixTable;
            // else if (sectionType == 'StateBenefits') fields = this.HouseownerPhoenixTable;
            else if (sectionType == 'EmployeePhoenix') fields = this.fieldEE[0].fieldGroup[0].fieldArray.fieldGroup[0].fieldGroup;
            else if (sectionType == 'StateBenefits') fields = this.StateBenefitsPhoenixTable;
            else if (sectionType == 'MachineryBreakDown') fields = this.MachineryBreakDownPhoenixTable;
            else if (sectionType == 'Umbrella') fields = this.UmbrellaPhoenixTable;
            else if (sectionType == 'PublicLiability') fields = this.fieldPublicLiability[0].fieldGroup[0].fieldGroup;
            console.log("Final Fields", fields)
            for (let field of fields) {
              if (field.key == 'CategoryId' && (type == "BUSINESS_INTRUPTION" || type == 'PUBLIC_LIABILITY')) {
                if (field.props) field.props.options = list;
                else if (field.templateOptions) field.templateOptions.options = list;
              }
              if ((field.key == 'BuildingUsageId' || field.key == 'NoClaimBonus' || field.key == 'TemporaryTotalDisability' || field.key == 'Contant') && (type == "NASRIA_FIRE" || type == 'NO_CLAIMS_BONUS' || type == 'NO_OF_WEEKS' || type == 'WALL_TYPE' || type == 'GOODS_IN_TRANSIT' || type == 'Indemnity_Period')) {
                console.log("Error Field", field);

                if (field.props) field.props.options = list;
                else if (field.templateOptions) field.templateOptions.options = list;
              }
              if (field.key == 'TransitCoverage' && type == "GOODS_IN_TRANSIT") {

                if (field.props) field.props.options = list;
              }

              if (field.key == 'CoverageType' && type == 'GOODS_IN_TRANSIT_TYPE') {
                field.props.options = list;
              }
              if (field.key == 'OccupationType' && type == 'LIMIT_OF_INDEMNITY') {
                field.props.options = list;
              }
            }
          }
        }
      });
  }
  getAdditionalInflationList() {
    if (this.productId != '74') {
      let ReqObj = {
        "InsuranceId": this.insuranceId,
        "ItemType": "ADDITIONAL_INFLATION"
      }
      let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
          this.inflationList = defaultObj.concat(data.Result);
          for (let i = 0; i < this.inflationList.length; i++) {
            this.inflationList[i].label = this.inflationList[i]['CodeDesc'];
            this.inflationList[i].value = this.inflationList[i]['Code'];
            // delete this.roofMaterialList[i].CodeDesc;
            if (i == this.inflationList.length - 1) {
              let fields = this.field1Build[0].fieldGroup[0].fieldGroup;
              if (fields) {
                for (let field of fields) { if (field.key == 'CategoryId') { field.props.options = this.inflationList; console.log("Final Field Building", this.field1Build) } }
              }
              let fields2 = this.fieldInflation[0]?.fieldGroup[0]?.fieldGroup;
              if (fields2) {
                for (let field of fields2) { if (field.key == 'InflationConstructionType') { field.props.options = this.inflationList; console.log("Final Field Building", this.field1Build) } }
              }
            }
          }
        })
    }
  }
  getClaimPreparationList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "CLAIM_COST"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.claimCostList = defaultObj.concat(data.Result);
        console.log(this.claimCostList);

        for (let i = 0; i < this.claimCostList.length; i++) {
          this.claimCostList[i].label = this.claimCostList[i]['CodeDesc'];
          this.claimCostList[i].value = this.claimCostList[i]['Code'];
          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.claimCostList.length - 1) {
            let field6 = this.fieldAccidentalDamage[0]?.fieldGroup[0]?.fieldGroup;
            if (field6) {
              for (let field of field6) {
                if (field.key == 'AdditionalclaimsPreparationCosts') field.templateOptions.options = this.claimCostList;
              }
            }

            let field7 = this.fieldAccountsRecievable[0]?.fieldGroup[0]?.fieldGroup;
            if (field7) {
              for (let field of field7) {
                if (field.key == 'ClaimsPreparationCosts') field.templateOptions.options = this.claimCostList;
              }
            }

            let field8 = this.fieldTheft[0]?.fieldGroup[0]?.fieldGroup;
            if (field8) {
              for (let field of field8) {
                if (field.key == 'AdditionalClaimsPreparationCosts') field.templateOptions.options = this.claimCostList;
              }
            }

            let field9 = this.fieldGlass[0]?.fieldGroup[0]?.fieldGroup;
            if (field9) {
              for (let field of field9) {
                if (field.key == 'GlassClaimsPreparationCosts') field.templateOptions.options = this.claimCostList;
              }
            }
            if (this.productId != '68') {
              let field4 = this.fieldEE[0]?.fieldGroup[0]?.fieldGroup;
              if (field4) {
                for (let field of field4) { if (field.key == 'AdditionalClaimsPreparationCosts') { field.templateOptions.options = this.claimCostList; console.log("Final Field Building", this.fieldTheft) } }
              }
            }
            let field5 = this.fieldEE[0]?.fieldGroup[0]?.fieldGroup[0]?.fieldGroup[1]?.fieldGroup;
            if (field5) {
              for (let field of field5) {
                for (let field1 of field.fieldGroup)
                  if (field1.key == 'EEclaimsPreparationCosts') { field1.templateOptions.options = this.claimCostList; console.log("Final Field Building", this.fieldTheft) }
              }
            }
            if (this.productId == '49') {
              let field10 = this.GoodsTransitextentionsField[0]?.fieldGroup;
              console.log(field10);

              if (field10) {
                if (field10[2].key == 'ClaimPreparationCost') { field10[2].props.options = this.claimCostList }

              }
            }
            if (this.productId == '68') {
              let field11 = this.fieldEE[0].fieldGroup[0].fieldGroup[0].fieldGroup[1].fieldGroup;
              if (field11) {
                for (let i = 0; i < field11.length; i++) {
                  for (let j = 0; j < field11[i].fieldGroup.length; j++) {
                    if (field11[i].fieldGroup[j].key == 'OfficeClaimCosts') { field11[i].fieldGroup[j].templateOptions.options = this.claimCostList; }
                  }
                }
              }
              console.log(field11);

            }
            if (this.productId == '39') {
              console.log("Table", this.MachineryBreakDownPhoenixTable)
              for (let field of this.MachineryBreakDownPhoenixTable) {
                if (field.key == 'ClaimsPreparationCosts') { field.props.options = this.claimCostList; }
              }
            }
          }
        }
      })
  }
  getConstructionTypePhonix() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "WALL_TYPE"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.phonixWallType = defaultObj.concat(data.Result);
        for (let i = 0; i < this.phonixWallType.length; i++) {
          this.phonixWallType[i].label = this.phonixWallType[i]['CodeDesc'];
          this.phonixWallType[i].value = this.phonixWallType[i]['Code'];
          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.phonixWallType.length - 1) {
            if (this.field1Build.length != 0) {
              let fields = this.field1Build[0].fieldGroup[0].fieldGroup;
              for (let field of fields) { if (field.key == 'WallType') { field.props.options = this.phonixWallType; console.log("Final Field Building", this.field1Build) } }
            }
            if (this.fieldContent.length != 0) {
              let fieldContent = this.fieldContent[0].fieldGroup[0].fieldGroup;
              for (let field of fieldContent) { if (field.key == 'ContentConstructionType') { field.props.options = this.phonixWallType; } }
            }
            if (this.fieldPlant.length != 0) {
              let fieldPlant = this.fieldPlant[0].fieldGroup[0].fieldGroup;
              for (let field of fieldPlant) { if (field.key == 'PlantConstructionType') { field.props.options = this.phonixWallType; } }
            }
            if (this.fieldTrade.length != 0) {
              let fieldTrade = this.fieldTrade[0].fieldGroup[0].fieldGroup;
              for (let field of fieldTrade) { if (field.key == 'TradeConstructionType') { field.props.options = this.phonixWallType; } }
            }
            if (this.fieldMiscellaneous.length != 0) {
              let fieldMiscellaneous = this.fieldMiscellaneous[0].fieldGroup[0].fieldGroup;
              for (let field of fieldMiscellaneous) { if (field.key == 'MiscellaneousConstructionType') { field.props.options = this.phonixWallType; } }
            }
            // let fieldLeakage = this.fieldLeakage[0].fieldGroup[0].fieldGroup;
            // let fieldInflation = this.fieldInflation[0].fieldGroup[0].fieldGroup;
            //  for(let field of fieldLeakage){
            //   if(field.key=='FirstLossBasis'){
            //     field.props.options = this.roofMaterialList;
            //   }
            //  }
            //  for(let field of fieldInflation){
            //   if(field.key=='InflationConstructionType'){
            //     field.props.options = this.roofMaterialList;
            //   }
            //  }
          }
        }
      })
  }
  getInfalationPhonix() {
    if (this.productId != '74') {
      let ReqObj = {
        "InsuranceId": this.insuranceId,
        "ItemType": "ADDITIONAL_INFLATION"
      }
      let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
          this.phonixInfalation = defaultObj.concat(data.Result);
          for (let i = 0; i < this.phonixInfalation.length; i++) {
            this.phonixInfalation[i].label = this.phonixInfalation[i]['CodeDesc'];
            this.phonixInfalation[i].value = this.phonixInfalation[i]['Code'];
            // delete this.roofMaterialList[i].CodeDesc;
            if (i == this.phonixInfalation.length - 1) {
              let fields3 = this.primaryfields[0]?.fieldGroup
              if (fields3) {
                for (let field of fields3) {
                  if (field.key == 'AdditonalInflation') { field.props.options = this.phonixInfalation; }
                }
              }//let fieldLeakage = this.fieldLeakage[0].fieldGroup[0].fieldGroup;

              //  for(let field of fieldLeakage){
              //   if(field.key=='FirstLossBasis'){
              //     field.props.options = this.roofMaterialList;
              //   }
              //  }

            }
          }
        })
    }

  }
  getNoOfWeeks() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "NO_OF_WEEKS"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null, label: "-Select-", "value": null }]
        this.phonixWeeks = data.Result;
        for (let i = 0; i < this.phonixWeeks.length; i++) {
          this.phonixWeeks[i].label = this.phonixWeeks[i]['CodeDesc'];
          this.phonixWeeks[i].value = this.phonixWeeks[i]['Code'];
          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.phonixWeeks.length - 1) {
            if (this.productId == '57') {
              console.log(this.GroupPersonalForm);
              let fieldList = this.GroupPersonalForm[0].fieldGroup[0].fieldGroup;
              for (let field of fieldList) {
                if (field.key == 'Coverage') {
                  field.props.options = defaultObj.concat(this.phonixWeeks);
                  this.checkFieldNames()
                }
              }
            }

          }
        }
      })
  }
  getCodeDesc(coverage: string, list: any): string {
    if (list == 'phonixWeeks') return this.phonixWeeks?.find(item => item.Code === coverage)?.CodeDesc || 'N/A';
    if (list == 'occupation') return this.occupationList?.find(item => item.Code === coverage)?.CodeDesc || 'N/A';

  }

  getCoverListFire() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "COVER_DETAILS"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.fireCoverList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.fireCoverList.length; i++) {
          this.fireCoverList[i].label = this.fireCoverList[i]['CodeDesc'];
          this.fireCoverList[i].value = this.fireCoverList[i]['Code'];
          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.fireCoverList.length - 1) {
            let fields3 = this.interruptionfields[0]?.fieldGroup
            if (fields3) { for (let field of fields3) { if (field.key == 'Cover') { field.props.options = this.fireCoverList; } } }
          }
        }
      })
  }
  getIndeminityPhonix() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "Indeminity_Period"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.phonixInfalation = defaultObj.concat(data.Result);
        if (this.productId != '74') {
          for (let i = 0; i < this.phonixInfalation.length; i++) {
            this.phonixInfalation[i].label = this.phonixInfalation[i]['CodeDesc'];
            this.phonixInfalation[i].value = this.phonixInfalation[i]['Code'];
            // delete this.roofMaterialList[i].CodeDesc;
            if (i == this.phonixInfalation.length - 1) {
              let fields3 = this.interruptionfields[0]?.fieldGroup
              if (fields3) {
                for (let field of fields3) {
                  if (field.key == 'IndeminityPeriod') { field.props.options = this.phonixInfalation; }
                }
              }//let fieldLeakage = this.fieldLeakage[0].fieldGroup[0].fieldGroup;

              //  for(let field of fieldLeakage){
              //   if(field.key=='FirstLossBasis'){
              //     field.props.options = this.roofMaterialList;
              //   }
              //  }

            }
          }
        }

      })
  }
  getLeakagePhonix() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "LEAKAGE_TYPE"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.phonixLeakage = defaultObj.concat(data.Result);
        for (let i = 0; i < this.phonixLeakage.length; i++) {
          this.phonixLeakage[i].label = this.phonixLeakage[i]['CodeDesc'];
          this.phonixLeakage[i].value = this.phonixLeakage[i]['Code'];
          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.phonixLeakage.length - 1) {
            let fieldLeakage = this.groupedFields[0]?.fieldGroup;
            if (fieldLeakage) {
              for (let field of fieldLeakage) { if (field.key == 'leakageExtension') { field.props.options = this.phonixLeakage; } }
            }
          }
        }
      })
  }
  getLeakageFire() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "LEAKAGE_TYPE"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.fireLeakage = defaultObj.concat(data.Result);
        for (let i = 0; i < this.fireLeakage.length; i++) {
          this.fireLeakage[i].label = this.fireLeakage[i]['CodeDesc'];
          this.fireLeakage[i].value = this.fireLeakage[i]['Code'];

          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.fireLeakage.length - 1) {
            if (this.productId == '67' || this.productId == '66') {
              let fieldLeakage = this.groupedFields[5];
              console.log("Final Fields", fieldLeakage)
              if (fieldLeakage) {
                for (let field of fieldLeakage) { if (field.key == 'leakageExtension') { field.props.options = this.fireLeakage; } }
              }
            }
            else {
              let fieldLeakage = this.primaryfields[0].fieldGroup;
              for (let field of fieldLeakage) { if (field.key == 'leakageExtension') { field.props.options = this.fireLeakage; } }
            }
          }
        }
      })
    console.log(this.primaryfields);

  }
  getPublicUtiltiesList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "Public Telecommunications"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.UtilitiesList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.UtilitiesList.length; i++) {
          this.UtilitiesList[i].label = this.UtilitiesList[i]['CodeDesc'];
          this.UtilitiesList[i].value = this.UtilitiesList[i]['Code'];

          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.UtilitiesList.length - 1) {
            if (this.productId == '66' || this.productId == '67') {
              console.log("Extension Table Fields", this.extensionTablefields)
              let fieldLeakage = this.extensionTablefields;
              for (let field of fieldLeakage) { if (field.key == 'PublicTelecommuncation' || field.key == 'PublicUtilities') { field.props.options = this.UtilitiesList; } }
            }
          }
        }
      })
  }
  getCommonSuppliersList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "CUSTOMER_SUPPILER_SUBCONTRACTORS"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.suppliersList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.suppliersList.length; i++) {
          this.suppliersList[i].label = this.suppliersList[i]['CodeDesc'];
          this.suppliersList[i].value = this.suppliersList[i]['Code'];

          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.suppliersList.length - 1) {
            if (this.productId == '66' || this.productId == '67') {
              let fieldLeakage = this.extensionTablefields;
              for (let field of fieldLeakage) { if (field.key == 'CustomerSupplier') { field.props.options = this.suppliersList; } }
            }
          }
        }
      })
  }
  checkMachineryYNChanges() {
    console.log("Form", this.productItem, this.fields)
    if (this.productId == '19' || this.productId == '24') {
      let fields = this.fields[0].fieldGroup;
    }
    console.log("Fields in Field", this.fields10)
    if (this.productId == '19') {
      for (let i = 0; i < this.wallMaterialList.length; i++) {
        this.wallMaterialList[i].label = this.wallMaterialList[i]['CodeDesc'];
        this.wallMaterialList[i].value = this.wallMaterialList[i]['Code'];
        if (i == this.wallMaterialList.length - 1) {
          let fieldList = this.fields10[0].fieldGroup[0].fieldGroup;
          console.log("Field List in Fire", fieldList)
          for (let field of fieldList) { if (field.key == 'WallType') { field.props.options = this.wallMaterialList } }
        }
      }
    }
  }
  getFirstLossPayeeListAlt() {
    this.firstLossPayeeList = [];
    let branchCode = '';
    let sectionId = null;
    if (this.productId == '6') sectionId = this.productItem.Section;
    else if (this.productId == '59') {
      let entry = this.locationList[this.tabIndex];
      if (entry.CoversRequired == 'BC' || entry.CoversRequired == 'B') sectionId = '1';
      else sectionId = '47'
    }
    else if (this.productId == '19') sectionId = '40';
    else sectionId = '99999';
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "SectionId": sectionId,
      "LocationId": this.tabIndex + 1
    }
    let urlLink = `${this.motorApiUrl}api/getfirstlosspayee`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          if (data.Result.length != 0) {
            this.firstLossPayeeList = data.Result;
            this.productItem.FirstLossPayeeYN = 'Y';
          }
          else this.productItem.FirstLossPayeeYN = 'N';
        } else this.productItem.FirstLossPayeeYN = 'N';
        this.onFirstLossPayeeYNChange();
      })

  }
  addFirstLossPayee() {
    let obj = { "FirstLossPayeeDesc": null };
    this.firstLossPayeeList.push(obj);
  }
  onDeleteFistLoss(index) { this.firstLossPayeeList.splice(index, 1) }
  onFirstLossPayeeYNChange() {
    if (this.productItem.FirstLossPayeeYN == 'Y') {
      this.firstLossSection = true;
      if (this.firstLossPayeeList.length == 0) this.addFirstLossPayee();
    }
    else this.firstLossSection = false;
  }
  getWallMaterialList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/walltypes`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let res: any = data.Result;
        if (res.length != 0) {
          let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': '' }]
          this.wallMaterialList = defaultObj.concat(data.Result);

        }
      },
      (err) => { },
    );
  }
  getFireContentList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "FIRE_SUMINSURED_TYPE"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.fireContentList = defaultObj.concat(data.Result);

      })
  }
  getBusinessLossRatioList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "BUSINESS_INTERRUPTION"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.BILossRatioList = defaultObj.concat(data.Result);

      })
  }
  getBIFireContentList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "BUSINESS_INTERRUPTION_TYPE"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.BIFireContentList = defaultObj.concat(data.Result);

      })
  }
  getFireIndustry() {
    let ReqObj = {
      "CategoryId": null,
      "BranchCode": this.branchCode,
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/industry`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': '', 'CodeDescLocal': '--Sélectionner--' }]
        this.FireIndustryList = defaultObj.concat(data.Result);
        console.log(this.FireIndustryList);
        
      })
  }

  getAddOnCoverList() {
    let ReqObj = {
      "Limit": "",
      "Offset": "100",
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "SectionId": "217"
    }
    let urlLink = `${this.ApiUrl1}master/getallsectioncoverdetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        // let defaultObj = [{ 'CoverDesc': '-Select-', 'CoverId': '', 'CodeDescLocal': '--Sélectionner--' }]
        this.addOnCoverList = data.Result;
      })
  }
  getStockAddOnCoverList() {
    let ReqObj = {
      "Limit": "",
      "Offset": "100",
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "SectionId": "218"
    }
    let urlLink = `${this.ApiUrl1}master/getallsectioncoverdetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        // let defaultObj = [{ 'CoverDesc': '-Select-', 'CoverId': '', 'CodeDescLocal': '--Sélectionner--' }]
        this.stockAddOnCoverList = data.Result;
      })
  }
  getGoodsContentList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "COMMODITY"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.GoodsContentList = defaultObj.concat(data.Result);
        let List: any[] = defaultObj.concat(data.Result);
        for (let i = 0; i < List.length; i++) {
          List[i].label = List[i]['CodeDesc'];
          List[i].value = List[i]['Code'];
          if (i == List.length - 1) {

            console.log("Fields on Goods", this.fields14);
            let fieldList = this.fields14[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) {
              if (field.key == 'GoodsOccupationType') {
                if (field.props) field.props.options = List
              }
            }
          }
        }
      })
  }
  getGoodsCommodityList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "GOODS_PACKAGE"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        let List: any[] = defaultObj.concat(data.Result);
        this.GoodsUsageList = defaultObj.concat(data.Result);
        for (let i = 0; i < List.length; i++) {
          List[i].label = List[i]['CodeDesc'];
          List[i].value = List[i]['Code'];
          if (i == List.length - 1) {
            let fieldList = this.fields14[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) {
              if (field.key == 'GoodsCategoryId') {
                //if(field.templateOptions)field.templateOptions.options=List;
                if (field.props) field.props.options = List
              }
            }
          }
        }

      })
  }
  getGoodsCargoList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "GOODS_COVER_TYPE"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        let List: any[] = defaultObj.concat(data.Result);
        this.GoodsOccupationList = defaultObj.concat(data.Result);
        for (let i = 0; i < List.length; i++) {
          List[i].label = List[i]['CodeDesc'];
          List[i].value = List[i]['Code'];
          if (i == List.length - 1) {
            let fieldList = this.fields14[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) {
              if (field.key == 'GoodsBuildingUsage') {
                //if(field.templateOptions)field.templateOptions.options=List;
                if (field.props) { console.log("Fields", field); field.props.options = List }
              }
            }
          }
        }
      })
  }
  getMachineryContentList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "MACHINERY_BREAKDOWN"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'label': '-Select-', 'value': null, "Code": null, "CodeDesc": "-Select-" }]
        this.machineryContentList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.machineryContentList.length; i++) {
          this.machineryContentList[i].label = this.machineryContentList[i]['CodeDesc'];
          this.machineryContentList[i].value = this.machineryContentList[i]['Code'];
        }
      })
  }
  getPublicLiabilityList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "PUBLIC LIABILITY"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'label': '-Select-', 'value': null, "Code": null, "CodeDesc": "-Select-" }]
        this.publicLiabilityList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.publicLiabilityList.length; i++) {
          this.publicLiabilityList[i].label = this.publicLiabilityList[i]['CodeDesc'];
          this.publicLiabilityList[i].value = this.publicLiabilityList[i]['Code'];
          if (i == this.publicLiabilityList.length - 1) {
            let fieldList = this.fields3[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) { if (field.key == 'ContentId') { field.templateOptions.options = this.publicLiabilityList; if (field.options) field.props.options = this.publicLiabilityList } }
          }
        }
      })
  }
  onChangeLiability(rowData) {
    console.log("RowData", rowData)
  }
  getFidelitySIList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "FIDELITY_SI"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'label': '-Select-', 'value': null, "Code": null, "CodeDesc": "-Select-" }]
        this.fidelityContentList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.fidelityContentList.length; i++) {
          this.fidelityContentList[i].label = this.fidelityContentList[i]['CodeDesc'];
          this.fidelityContentList[i].value = this.fidelityContentList[i]['Code'];
          if (this.productId != '19' && this.insuranceId != '100002') {
            if (i == this.fidelityContentList.length - 1) {
              let fieldList = this.fields13[0].fieldGroup[0].fieldGroup;
              for (let field of fieldList) { if (field.key == 'FidEmpSi') { field.templateOptions.options = this.fidelityContentList; if (field.options) field.props.options = this.fidelityContentList } }
            }
          }
        }
      })
  }
  getIndustryList() {
    let ReqObj = {
      "ProductId": this.productId,
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/industry`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'label': '-Select-', 'value': '', 'CodeDesc': '-Select-', 'Code': null }]
        let altObj = [{ 'CodeDesc': '-Select-', 'Code': '' }]
        this.industryTypeList = data.Result;
        console.log(data.Result);
        
        if (this.fields13.length != 0) {
          for (let i = 0; i < this.industryTypeList.length; i++) {
            this.industryTypeList[i].label = this.industryTypeList[i]['CodeDesc'];
            this.industryTypeList[i].value = this.industryTypeList[i]['Code'];
            //delete this.industryTypeList[i].CodeDesc;

            if (i == this.industryTypeList.length - 1) {
              let fieldList = this.fields13[0].fieldGroup[0].fieldGroup;
              for (let field of fieldList) {
                if (field.key == 'IndustryId') { field.templateOptions.options = defaultObj.concat(this.industryTypeList); if (field.options) field.props.options = defaultObj.concat(this.industryTypeList) }
              }
            }
          }
        }
        else this.industryTypeList = defaultObj.concat(data.Result);

      },
      (err) => { },
    );
  }
  getBurglaryFirstLossList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "BURGLARY_FIRST_LOSS"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'label': '-Select-', 'value': null, "Code": null, "CodeDesc": "-Select-" }]
        this.burglaryFirlossList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.burglaryFirlossList.length; i++) {
          this.burglaryFirlossList[i].label = this.burglaryFirlossList[i]['CodeDesc'];
          this.burglaryFirlossList[i].value = this.burglaryFirlossList[i]['Code'];
          if (i == this.burglaryFirlossList.length - 1) {
            let fieldList = this.fields9[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) { if (field.key == 'FireSumInsured') { field.templateOptions.options = this.burglaryFirlossList; if (field.options) field.props.options = this.burglaryFirlossList } }
          }
        }
      })
  }
  getGroupPeriodList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "GPA_PERIOD"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'label': '-Select-', 'value': null, "Code": null, "CodeDesc": "-Select-" }]
        this.groupPeriodList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.groupPeriodList.length; i++) {
          this.groupPeriodList[i].label = this.groupPeriodList[i]['CodeDesc'];
          this.groupPeriodList[i].value = this.groupPeriodList[i]['Code'];
          if (i == this.groupPeriodList.length - 1) {
            let fieldList = this.fields16[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) { if (field.key == 'IndemnityType') { field.templateOptions.options = this.groupPeriodList; if (field.options) field.props.options = this.groupPeriodList } }
          }
        }
      })
  }
  getEquipmentList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/electronicitems`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          let defaultObj = [{ 'label': '-Select-', 'value': null, "Code": null, "CodeDesc": "-Select-" }]
          this.equipmentList = defaultObj.concat(data.Result);
        }
      })
  }
  getFirstLossPayeeList() {
    let branchCode = '';
    if ((this.userType != 'Broker' && this.userType != 'User')) {
      branchCode = this.branchCode
    }
    else {
      branchCode = this.brokerbranchCode
    }
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": branchCode
    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/bankmaster`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let obj = [{ "Code": "None", CodeDesc: "None" }]
        this.bankList = obj.concat(data.Result);
      })

  }
  getRoofMaterialList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/rooftypes`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let res: any = data.Result;
        if (res.length != 0) {
          if (res.length != 0) {
            let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': '' }]
            this.roofMaterialList = defaultObj.concat(data.Result);
            if (this.productId == '19') {
              for (let i = 0; i < this.roofMaterialList.length; i++) {
                this.roofMaterialList[i].label = this.roofMaterialList[i]['CodeDesc'];
                this.roofMaterialList[i].value = this.roofMaterialList[i]['Code'];
                if (i == this.roofMaterialList.length - 1) {
                  let fieldList = this.fields10[0].fieldGroup[0].fieldGroup;
                  console.log("Field List in Fire", fieldList)
                  for (let field of fieldList) { if (field.key == 'RoofType') { field.props.options = this.roofMaterialList } }
                }
              }
            }
            // for (let i = 0; i < this.roofMaterialList.length; i++) {
            //   this.roofMaterialList[i].label = this.roofMaterialList[i]['CodeDesc'];
            //   this.roofMaterialList[i].value = this.roofMaterialList[i]['Code'];
            //   delete this.roofMaterialList[i].CodeDesc;
            //   if (i == this.roofMaterialList.length - 1) {
            //     if (this.productId == '1') {
            //       this.fields[0].fieldGroup[0].fieldGroup[0].fieldGroup[7].props.options = defaultObj.concat(this.roofMaterialList);
            //     }
            //     else if(this.productId=='59'){
            //       let fieldList = this.fields[0].fieldGroup[0].fieldGroup;
            //       for(let field of fieldList){if(field.key=='RoofType') field.props.options = defaultObj.concat(this.roofMaterialList);}
            //       // field.fieldGroup[0].fieldGroup[3].props.options = defaultObj.concat(this.roofMaterialList);
            //     }
            //     else if(this.productId!='19' && this.productId!='59') {console.log('FFFFFFFF',this.fields[0].fieldGroup[0].fieldGroup[3]); this.fields[0].fieldGroup[0].fieldGroup[3].props.options = defaultObj.concat(this.roofMaterialList);}
            //     //this.fields[0].fieldGroup[0].fieldGroup[3]
            //     //this.fields[0].fieldGroup[0].fieldGroup[0].fieldGroup[3].props.options = defaultObj.concat(this.roofMaterialList);
            //     else{
            //       let fields = this.fields[0].fieldGroup;
            //       for(let field of fields){
            //         if(field.props.label=='Burglary'){
            //             field.fieldGroup[0].fieldGroup[0].fieldGroup[0].fieldGroup[7].props.options = defaultObj.concat(this.roofMaterialList);
            //         }
            //         else if(field.props.label=='Building Details'){
            //           field.fieldGroup[0].fieldGroup[3].props.options = defaultObj.concat(this.roofMaterialList);
            //         }
            //       }
            //     } 
            //   }
            // }
          }
        }
      },
      (err) => { },
    );
  }
  getTypeOfProperty() {
    console.log('Types of Propertyss');
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode
    }
    let urlLink = `${this.CommonApiUrl}dropdown/buildingpropertytypes`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let res: any = data.Result;
        if (res.length != 0) {
          if (res.length != 0) {
            let defaultObj = [{ 'label': '-Select-', 'value': '' }]
            this.TypeOfPropertyss = data.Result;
            for (let i = 0; i < this.TypeOfPropertyss.length; i++) {
              this.TypeOfPropertyss[i].label = this.TypeOfPropertyss[i]['CodeDesc'];
              this.TypeOfPropertyss[i].value = this.TypeOfPropertyss[i]['Code'];
              delete this.TypeOfPropertyss[i].CodeDesc;
              if (i == this.TypeOfPropertyss.length - 1) {
                if (this.productId == '1') {

                  this.fields[0].fieldGroup[0].fieldGroup[0].fieldGroup[7].props.options = defaultObj.concat(this.roofMaterialList);
                }
                else if (this.productId != '19' && this.productId != '59' && this.productId != '59') { }

                else {
                  let fields = this.fields[0].fieldGroup;
                  for (let field of fields) {
                    field.fieldGroup[4].props.options = defaultObj.concat(this.TypeOfPropertyss);
                  }
                }
              }
            }
          }
        }
      },
      (err) => { },
    );
  }
  getbuildingpurposeList() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode,
    }
    let urlLink = `${this.CommonApiUrl}dropdown/buildingusage`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;
        if (res.Result) {
          let defaultObj = [{ 'label': '-Select-', 'value': '' }]
          this.BuildingUsageList = data.Result;
          // for (let i = 0; i < this.BuildingUsageList.length; i++) {
          //   this.BuildingUsageList[i].label = this.BuildingUsageList[i]['CodeDesc'];
          //   this.BuildingUsageList[i].value = this.BuildingUsageList[i]['Code'];
          //   delete this.BuildingUsageList[i].CodeDesc;
          //   if (i == this.BuildingUsageList.length - 1) {
          //     let fields = this.fields[0].fieldGroup;
          //       console.log('fieldsss',this.fields[0]);
          //       this.fields[0].fieldGroup[0].fieldGroup[0].props.options = defaultObj.concat(this.BuildingUsageList);
          //   }
          // }
        }
      },
      (err) => { },
    );
  }

  // onNextProceed(){
  //   this.router.navigate(['/quotation/plan/premium-details']);
  // }
  getContentDetail() {
    let sectionId = null;
    if (this.productId == '19') sectionId = '47';
    else sectionId = '47';
    let urlLink = `${this.motorApiUrl}api/getallcontentrisk`;
    let quoteNo = null;
    if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
    let ReqObj = {
      "RequestReferenceNO": this.quoteRefNo,
      "QuoteNo": quoteNo,
      "SectionId": sectionId
    }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        let res: any = data;

        if (res.Result?.ContentRiskDetails) {
          if (res.Result.ContentRiskDetails.length != 0) {
            this.currentContentRowIndex = null;
            if (this.endorsementSection) {
              this.contentRiskSection = !this.enableFieldsList.some(ele => ele == 'ContentSuminsured');
            }
            else this.contentRiskSection = true;
            let list = res.Result.ContentRiskDetails;
            let i = 0;
            for (let content of list) {
              if (content.ItemId != null) content['Content'] = list?.ItemValue;
              if (content.RiskId != null && content.RiskId != undefined && content.RiskId != '') {
                content['LocationName'] = this.TableRowBuilding.find(ele => ele.RiskId == content.RiskId)?.LocationName;
              }
              this.TableRow.push(content);
            }
            this.TableRow = res.Result.ContentRiskDetails;
            this.currentContentIndex = this.TableRow.length;
            if (this.TableRow.length != 0) {

              if (this.TableRow.length > 1 || (this.TableRow[0].SumInsured != null && this.TableRow[0].SumInsured != 0)) this.currentContentRowIndex = null;
            }
            this.getTotal();
          }
        }
      })
  }

  getContentDetails(type) {
    let sectionId = null;
    if (this.productId == '24') sectionId = '47';
    else sectionId = '47';
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "SectionId": sectionId
    }
    let urlLink = `${this.motorApiUrl}api/slide5/getcontent`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          this.productItem.ContentSuminsured = data?.Result?.ContentSuminsured;
          if (this.insuranceId == '100004') {
            this.productItem.CarpetsSi = data?.Result?.CarpetsSi;
            this.productItem.JewellerySi = data?.Result?.JewellerySi;
            this.productItem.PaitingsSi = data?.Result?.PaitingsSi;
            this.productItem.EquipmentSis = data?.Result?.EquipmentSi;

          }
          let entry = data?.Result;
          // if(entry.EndorsementDate){
          //   this.endorsementDate = entry?.EndorsementDate;
          //   this.endorsementEffectiveDate = entry?.EndorsementEffectiveDate;
          //   this.endorsementRemarks = entry?.EndorsementRemarks;
          //   this.endorsementType = entry?.EndorsementType;
          //   this.endorsementTypeDesc = entry?.EndorsementTypeDesc;
          //   this.endtCategoryDesc = entry?.EndtCategoryDesc;
          //   this.endtCount = entry?.EndtCount;
          //   this.endtPrevPolicyNo = entry?.EndtPrevPolicyNo;
          //   this.endtPrevQuoteNo = entry?.EndtPrevQuoteNo;
          //   this.endtStatus = entry?.EndtStatus;
          //   this.isFinanceEndt = entry?.IsFinanceEndt;
          //   this.orginalPolicyNo = entry?.OrginalPolicyNo;
          // }
          // this.sectionCount +=1;
          // if(sections.length==this.sectionCount){
          //   this.formSection = true; this.viewSection = false;
          // }
          console.log("Products", this.productItem)
        }
        this.editsections('Content');
      },
      (err) => { },
    );
  }
  onSaveContentRiskDetails() {
    let sectionId = null;
    if (this.productId == '24') sectionId = '47';
    else sectionId = '47';
    let ReqObj = {
      "CreatedBy": this.loginId,
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "SectionId": sectionId,
      "ContentSuminsured": this.productItem?.ContentSuminsured,
      "EndorsementDate": null,
      "EndorsementEffectiveDate": null,
      "EndorsementRemarks": null,
      "EndorsementType": null,
      "EndorsementTypeDesc": null,
      "EndtCategoryDesc": null,
      "EndtCount": null,
      "EndtPrevPolicyNo": null,
      "EndtPrevQuoteNo": null,
      "EndtStatus": null,
      "IsFinanceEndt": null,
      "OrginalPolicyNo": null,
      // "PolicyNo": this.endorsePolicyNo,
      "JewellerySi": this.productItem?.JewellerySi,
      "PaitingsSi": this.productItem?.PaitingsSi,
      "CarpetsSi": this.productItem?.CarpetsSi,
      "EquipmentSi": this.productItem?.EquipmentSis,
    }
    if (this.endorsementSection) {
      if (this.productItem?.Status == undefined || this.productItem?.Status == null || this.productItem?.Status == 'Y') {
        ReqObj['Status'] = 'E';
      }
      else {
        ReqObj['Status'] = this.productItem?.Status;
      }
      ReqObj['PolicyNo'] = this.endorsePolicyNo
    }
    else {
      ReqObj['Status'] = 'Y';
    }
    let urlLink = `${this.motorApiUrl}api/slide5/savecontent`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Result) {
          this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
          //this.updateComponent.quoteRefNo = data?.Result[0]?.RequestReferenceNo;
          sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
          if (this.commonDetails) {
            if (this.commonDetails[0].SectionId != null && this.commonDetails[0].SectionId.length != 0) {
              if (this.productId == '24') {
                if (!this.commonDetails[0].SectionId.some(ele => ele == '47')) this.commonDetails[0].SectionId.push('47');
              }
              else if (!this.commonDetails[0].SectionId.some(ele => ele == '47')) this.commonDetails[0].SectionId.push('47');
            }
            else {
              if (this.productId == '24') this.commonDetails[0]['SectionId'] = ['47'];
              else this.commonDetails[0]['SectionId'] = ['47'];
            }
          }
          //sessionStorage.setItem('homeCommonDetails', JSON.stringify(this.commonDetails))
          this.nextslide1 = true;
          // this.onCalculate(data.Result,'Content');

          // this.onCheckUWQuestionProceed(data.Result);
        }
        else {
          this.nextslide1 = false;
        }
      },
      (err) => { },
    );
  }
  onSubmitDomesticDetails(type) {
    // let valid = this.checkLocationValidation();
    let valid = true;
    if (valid) {
      let commonDetals: any = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
      if (commonDetals == null) commonDetals = this.commonDetails;
      let appId = "1", loginId = "", brokerbranchCode = ""; let createdBy = "";
      let quoteStatus = sessionStorage.getItem('QuoteStatus');
      let referenceNo = sessionStorage.getItem('quoteReferenceNo');
      if (referenceNo) {
        this.quoteRefNo = referenceNo;
      }
      else this.quoteRefNo = null;
      if (quoteStatus == 'AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRR') {
        //createdBy = this.vehicleDetailsList[0].CreatedBy;
      }
      else {
        createdBy = this.loginId;
        if (this.userType != 'Issuer') {
          this.brokerCode = this.agencyCode;
          appId = "1"; loginId = this.loginId;
        }
        else {
          appId = this.loginId;
          loginId = commonDetals[0].CustomerName;
          brokerbranchCode = null;
        }
      }
      this.applicationId = appId;
      let havePromoYN = 'N'
      if (commonDetals[0].PromoCode != null && commonDetals[0].PromoCode != '' && commonDetals[0].PromoCode != undefined) havePromoYN = 'Y'
      let startDate = null, endDate = null;
      let startDateList = String(commonDetals[0].PolicyStartDate).split('/');
      if (startDateList.length > 1) startDate = commonDetals[0].PolicyStartDate
      else startDate = this.datePipe.transform(commonDetals[0].PolicyStartDate, 'dd/MM/yyyy');
      let endDateList = String(commonDetals[0].PolicyEndDate).split('/');
      if (endDateList.length > 1) endDate = commonDetals[0].PolicyEndDate
      else endDate = this.datePipe.transform(commonDetals[0].PolicyEndDate, 'dd/MM/yyyy');
      this.policyStartDate = startDate; this.policyEndDate = endDate;
      let quoteNo = null;
      if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
      let ReqObj = {
        "PolicyDetails": {
          "SaveOrSubmit": type,
          "AcexecutiveId": "",
          "ProductType": null,
          "TiraCoverNoteNo": null,
          "CustomerReferenceNo": sessionStorage.getItem('customerReferenceNo'),
          "RequestReferenceNo": this.quoteRefNo,
          "QuoteNo": quoteNo,
          "BuildingOwnerYn": "N",
          "Createdby": this.loginId,
          "Currency": commonDetals[0].Currency,
          "ExchangeRate": commonDetals[0].ExchangeRate,
          "Havepromocode": havePromoYN,
          "PolicyEndDate": endDate,
          "PolicyStartDate": startDate,
          "IndustryId": "99999",
          "InsuranceId": this.insuranceId,
          "ProductId": this.productId,
          "BranchCode": this.branchCode,
        },
        "BrokerDetails": {
          "CustomerCode": commonDetals[0]?.CustomerCode,
          "CustomerName": commonDetals[0]?.CustomerName,
          "BdmCode": commonDetals[0]?.CustomerCode,
          "BrokerCode": commonDetals[0]?.BrokerCode,
          "LoginId": loginId,
          "ApplicationId": appId,
          "AgencyCode": this.agencyCode,
          "BrokerBranchCode": this.brokerbranchCode,
          "SourceTypeId": commonDetals[0].SourceType,
          "UserType": "Broker"
        },
        "LocationList": []
      }
      if (this.endorsementSection) {
        if (this.endorsementDetails.PolicyNo == null || this.endorsementDetails.PolicyNo == undefined) {
          this.endorsementDetails['PolicyNo'] = this.endorsePolicyNo;
        }
        ReqObj['EndorsementDetails'] = this.endorsementDetails
      }
      else {
        ReqObj["EndorsementDetails"] = {
          "EndorsementDate": null,
          "EndorsementEffectiveDate": null,
          "EndorsementRemarks": null,
          "EndorsementType": null,
          "EndorsementTypeDesc": null,
          "EndtCategoryDesc": null,
          "EndtCount": null,
          "EndtPrevPolicyNo": null,
          "EndtPrevQuoteNo": null,
          "EndtStatus": null,
          "IsFinanceEndt": null,
          "OrginalPolicyNo": null,
          "PolicyNo": null,
        }
      }
      let j = 0, locationList = [];
      for (let entry of this.locationList) {
        let i = 0;
        if (entry.BuildingOwnerYn == null) entry.BuildingOwnerYn = 'Y';
        if (entry.CoversRequired == null) entry.CoversRequired = 'BC';
        let obj = {
          "LocationId": j + 1,
          "LocationName": entry.LocationName,
          "CoversRequired": entry.CoversRequired,
          "BuildingOwnerYn": entry.BuildingOwnerYn,
          "Address": entry.BuildingAddress,
          "SectionList": []
        }
        let subEntry = null;
        if(j ==this.tabIndex){
          subEntry = this.productItem;
            // All Risk
          if (this.productId == '59') {
            let allRiskForm = this.allRiskForm.controls.allRisk.value;
            if (allRiskForm) {
              this.productItem.allRiskDomestic = [];
              for (let i = 0; i < allRiskForm.length; i++) {
                let d = {
                  "AllriskSumInsured": allRiskForm[i].AllriskSumInsured,
                  "AllriskDescription": allRiskForm[i].AllriskDescription,
                }
                this.productItem.allRiskDomestic.push(d)
                if (i == allRiskForm.length - 1) {
                  subEntry['allRiskDomestic'] = this.productItem.allRiskDomestic
                }
              }
            }
          }
        if (this.productId == '59') {
            if (subEntry.allRiskDomestic) {
              for (let index = 0; index < subEntry.allRiskDomestic.length; index++) {
                if (subEntry.allRiskDomestic[index]?.AllriskSumInsured != null && subEntry.allRiskDomestic[index]?.AllriskSumInsured != 0 && subEntry.allRiskDomestic[index]?.AllriskSumInsured != '0') {
                  let altEntry = {
                    "SectionId": "3",
                    "SectionName": "All Risk",
                    "CoverId": "5",
                    "AllriskSumInsured": subEntry.allRiskDomestic[index]?.AllriskSumInsured.replace(/,/g, ''),
                    "SumInsured": subEntry.allRiskDomestic[index]?.AllriskSumInsured.replace(/,/g, ''),
                    "DescriptionOfRisk": entry.AllriskDescription,
                    "OtherOccupation": index
                  }
                  if (entry['IndustryType']) { altEntry['IndustryType'] = entry['IndustryType']; altEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == entry['IndustryType'])?.CodeDesc }
                  obj.SectionList.push(altEntry);
                }
                
              }
            }
          }
        }
     
        if (entry.BuildingList.length != 0) {
          for (let build of entry.BuildingList) {
            if (build.BuildingSumInsured != 0 && build.BuildingSumInsured != null && build.RoofType != null && build.WallType != null) {
              let subEntry = {
                "CoverId": "5",
                "SectionId": "1",
                "SectionName": "Building",
                "Status": "Y",
                "RiskId": null,
                "RoofType": build.RoofType,
                "WallType": build.WallType,
                "BuildingBuildYear": '2024',
                "BuildingOwnerYn": "N",
                "FirstLossPayee": build.FirstLossPayee,
                "BuildingSumInsured": build.BuildingSumInsured,
                "DescriptionOfRisk": build.BuildingDescription,
                "SumInsured": build.BuildingSumInsured,
                "BuildingUsageId": null,
                "WaterTankSi": null,
                "ArchitectsSi": null,
                "LocationName": entry?.LocationName,
                "LossOfRentSi": this.productItem?.LossOfRentSi,
                "TypeOfProperty": this.productItem?.TypeOfProperty,
                "BuildingAddress": entry?.BuildingAddress
              }
              obj.SectionList.push(subEntry);
            }
          }
        }
        if (j == this.tabIndex) {
          entry['ContentSuminsured'] = this.productItem.ContentSuminsured;
          entry['ContentDescription'] = this.productItem.ContentDescription;
          entry['AllriskSumInsured'] = this.productItem.AllriskSumInsured;
          entry['AllriskDescription'] = this.productItem.AllriskDescription;
          entry['TotalNoOfEmployees'] = this.productItem.TotalNoOfEmployees;
          entry['EmpLiabilitySi'] = this.productItem.EmpLiabilitySi;
          entry['EmpDescription'] = this.productItem.EmpDescription;
          entry['LiabilityOccupationId'] = this.productItem.LiabilityOccupationId;
          entry['OccupationType'] = this.productItem.OccupationType;
          entry['ContentTypeId'] = this.productItem.ContentTypeId;
          entry['ElectronicEquipmentSI'] = this.productItem.ElectronicEquipmentSI;
          entry['PersonalDescription'] = this.productItem.PersonalDescription;
          entry['ElectronicDescription'] = this.productItem.ElectronicDescription;
          entry['SumInsured'] = this.productItem.SumInsured;
          entry['OtherOccupation'] = this.productItem.otheroptionPer;
          entry['PersonalDeath'] = this.productItem.PersonalDeath;
          entry['PersonalPermanent'] = this.productItem.PersonalPermanent;
          entry['PersonalTemporary'] = this.productItem.PersonalTemporary;
          entry['PersonalMedical'] = this.productItem.PersonalMedical;
        }
        if (this.productId == '59') {
          let personalAccidentApi = null;
          if (this.insuranceId == '100002') personalAccidentApi = new PersonalAccidentApiPhoenix()
          let PersonalAccidentList = personalAccidentApi.getSaveDetails(entry, this.occupationList, this.IndustryId, obj)
          if (PersonalAccidentList) {
            obj = PersonalAccidentList;
          }

        }
        if (entry.ContentSuminsured != null && entry.ContentSuminsured != 0 && entry.ContentSuminsured != '0') {

          let subEntry = {
            "SectionId": "47",
            "SectionName": "Household Contents",
            "CoverId": "2",
            "ContentSuminsured": entry.ContentSuminsured,
            "DescriptionOfRisk": entry.ContentDescription,
            "SumInsured": entry.ContentSuminsured,
            "Status": "Y",
            "JewellerySi": this.productItem?.JewellerySi,
            "PaitingsSi": this.productItem?.PaitingsSi,
            "CarpetsSi": this.productItem?.CarpetsSi,
            "EquipmentSi": this.productItem?.EquipmentSis,
          }
          obj.SectionList.push(subEntry);
        }
        if (entry.AllriskSumInsured != null && entry.AllriskSumInsured != 0 && entry.AllriskSumInsured != '0') {
          let subEntry = {
            "SectionId": "3",
            "SectionName": "All Risk",
            "CoverId": "5",
            "AllriskSumInsured": entry.AllriskSumInsured,
            "SumInsured": entry.AllriskSumInsured,
            "DescriptionOfRisk": entry.AllriskDescription,
          }
          obj.SectionList.push(subEntry);
        }
        // if(entry.OccupationType!=null && entry.OccupationType!='' && entry.SumInsured!='0' && entry.SumInsured!=null){
        //     let subEntry={   
        //       "SectionId": "35",
        //       "SectionName": "Personal Accident",
        //       "TotalNoOfPersons": "1",  
        //       "Status": "Y",
        //       "OccupationId": entry.OccupationType,
        //       "OccupationDesc": this.occupationList.find(ele=>ele.Code==entry.OccupationType)?.CodeDesc,
        //       "OccupationType": entry.OccupationType,
        //       "SumInsured": entry.SumInsured,
        //       "OtherOccupation": entry.OtherOccupation,
        //       "DescriptionOfRisk":entry.PersonalDescription,
        //     }
        //     obj.SectionList.push(subEntry);
        // }
        if (entry.EmpLiabilitySi != null && entry.EmpLiabilitySi != '' && entry.EmpLiabilitySi != '0') {
          let subEntry = {
            "SectionId": "36", "SectionName": "Employers Liability",
            "TotalNoOfEmployees": "1",
            "CoverId": "5",
            "OccupationId": entry.LiabilityOccupationId,
            "OccupationDesc": this.occupationList.find(ele => ele.Code == entry.LiabilityOccupationId)?.CodeDesc,
            "LiabilityOccupationId": entry.LiabilityOccupationId, "DescriptionOfRisk": entry.EmpDescription,
            "SumInsured": entry.EmpLiabilitySi, "Status": "Y"
          }
          obj.SectionList.push(subEntry);
        }
        if (entry.ElectronicEquipmentSI != null && entry.ElectronicEquipmentSI != '' && entry.ElectronicEquipmentSI != '0') {
          let subEntry = {
            "SectionId": "76", "SectionName": "Electronic Equipment", "CoverId": "90", "TotalNoOfEmployees": "1", "ContentId": entry.ContentTypeId, "ContentDesc": this.dropList.find(ele => ele.Code == entry.ContentTypeId)?.CodeDesc,
            "LiabilityOccupationId": entry.LiabilityOccupationId, "OccupationId": entry.LiabilityOccupationId, "DescriptionOfRisk": entry.ElectronicDescription,
            "OccupationDesc": this.occupationList.find(ele => ele.Code == entry.LiabilityOccupationId)?.CodeDesc, "SumInsured": entry.ElectronicEquipmentSI, "Status": "Y"
          }
          obj.SectionList.push(subEntry);
        }
        if (obj.SectionList.length != 0) locationList.push(obj);
        j += 1;
        if (j == this.locationList.length) {
          ReqObj.LocationList = locationList; this.onFinalSubmit(ReqObj, type);
        }
      }
    }
  }
  onSubmitAltDetails(type) {
    console.log('called');
    
    let i = 0;
    // if(this.endorsementSection && (this.endorsementCode=='851' || this.endorsementCode==851)){
    //   if(this.productId=='63' || this.productId=='59'){
    //     if((type=='Save' && this.LocationName.length==(this.tabIndex+1) && this.insuranceId!='59') || (type=='Save' && this.locationList.length==(this.currentIndex+1) && this.insuranceId!='59') || type=='Submit' ){
    //       if(this.endorsementSection) this.router.navigate(['/quotation/plan/premium-info']);
    //       else this.router.navigate(['/quotation/plan/premium-details']);
    //     }
    //     else{ this.tabIndex+=1;if(this.uwQuestionList.length!=0)this.getEditUwQuestions();if(this.productId=='59')this.onEditDomestic}
    //   }
    //   else{
    //     if(this.endorsementSection) this.router.navigate(['/quotation/plan/premium-info']);
    //     else this.router.navigate(['/quotation/plan/premium-details']);
    //   }
    // }
    // else{
    if ((this.productId == '19' && this.insuranceId!='100050') || this.productId == '24' || this.productId == '71' || this.productId == '70' || this.productId == '74' || this.productId == '69' || this.productId == '66' || this.productId == '72' || this.productId == '75' || this.productId == '49' || this.productId == '73' || this.productId == '68' || this.productId == '25'
      || this.productId == '14' || this.productId == '32' || this.productId == '39' || this.productId == '16' || this.productId == '26' || this.productId == '27' || this.productId == '48' || this.productId == '77' || this.productId == '82' || this.productId == '83') {
      if (!this.IndustryId) {
        this.industryError = true;
        return;
      }
    }



    // || this.productItem.ContentSuminsured=='0' || this.productItem.PlantSumInsured=='0'
    //   || this.productItem.TradeSumInsured=='0' || this.productItem.MiscellaneousSumInsured=='0' || this.productItem.PowerSurgeSumInsured=='0'
    //   || this.productItem.FirstLossBasisSumInsured=='0' || this.productItem.HailDamageSumInsured=='0' || this.productItem.RentSumInsured=='0'
    // || this.productItem.InflationSumInsured=='0' || this.productItem.GeyserSumInsured=='0'
    // if(this.productItem.BuildingConstructionType){
    //   if(this.productItem.BuildingSumInsured=='0' ){
    //         this.validationPopSI();
    //   }
    // }
    //else
    //  if(this.productItem.BuildingConstructionType==null || this.productItem.BuildingConstructionType==""){
    //  this.onKeyPress(event);
    // }
    let valid = this.emptyValidation();
    console.log(valid);
    
    if (valid) {
      let commonDetals: any = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
      if (commonDetals == null) commonDetals = this.commonDetails;
      let appId = "1", loginId = "", brokerbranchCode = ""; let createdBy = "";
      let quoteStatus = sessionStorage.getItem('QuoteStatus');
      let referenceNo = sessionStorage.getItem('quoteReferenceNo');
      if (referenceNo) {
        this.quoteRefNo = referenceNo;
      }
      else this.quoteRefNo = null;
      if (quoteStatus == 'AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRR') {
        //createdBy = this.vehicleDetailsList[0].CreatedBy;
      }
      else {
        createdBy = this.loginId;
        if (this.userType != 'Issuer') {
          this.brokerCode = this.agencyCode;
          appId = "1"; loginId = this.loginId;
        }
        else {
          appId = this.loginId;
          loginId = this.loginId;
          this.brokerbranchCode = null;
        }
      }
      this.applicationId = appId;
      let havePromoYN = 'N'
      if (commonDetals[0].PromoCode != null && commonDetals[0].PromoCode != '' && commonDetals[0].PromoCode != undefined) havePromoYN = 'Y'
      let startDate = null, endDate = null;
      let startDateList = String(commonDetals[0].PolicyStartDate).split('/');
      if (startDateList.length > 1) startDate = commonDetals[0].PolicyStartDate
      else startDate = this.datePipe.transform(commonDetals[0].PolicyStartDate, 'dd/MM/yyyy');
      let endDateList = String(commonDetals[0].PolicyEndDate).split('/');
      if (endDateList.length > 1) endDate = commonDetals[0].PolicyEndDate
      else endDate = this.datePipe.transform(commonDetals[0].PolicyEndDate, 'dd/MM/yyyy');
      this.policyStartDate = startDate; this.policyEndDate = endDate;
      let status = 'Y';
      if (this.endorsementSection) { status = 'E'; }
      let quoteNo = null;
      if (sessionStorage.getItem('quoteNo')) { if (sessionStorage.getItem('quoteNo') != 'null') quoteNo = sessionStorage.getItem('quoteNo') }
      let ReqObj = {
        "PolicyDetails": {
          "SaveOrSubmit": type,
          "AcexecutiveId": "",
          "ProductType": null,
          "TiraCoverNoteNo": null,
          "CustomerReferenceNo": sessionStorage.getItem('customerReferenceNo'),
          "RequestReferenceNo": this.quoteRefNo,
          "QuoteNo": quoteNo,
          "BuildingOwnerYn": "N",
          "Createdby": this.loginId,
          "Currency": commonDetals[0].Currency,
          "ExchangeRate": commonDetals[0].ExchangeRate,
          "Havepromocode": havePromoYN,
          "PolicyEndDate": endDate,
          "PolicyStartDate": startDate,
          "IndustryId": "99999",
          "InsuranceId": this.insuranceId,
          "ProductId": this.productId,
          "BranchCode": this.branchCode,
          "Status": status
        },
        "BrokerDetails": {
          "CustomerCode": commonDetals[0]?.CustomerCode,
          "CustomerName": commonDetals[0]?.CustomerName,
          "BdmCode": commonDetals[0]?.CustomerCode,
          "BrokerCode": commonDetals[0]?.BrokerCode,
          "LoginId": loginId,
          "ApplicationId": this.applicationId,
          "AgencyCode": this.agencyCode,
          "BrokerBranchCode": this.brokerbranchCode,
          "SourceTypeId": commonDetals[0].SourceType,
          "UserType": "Broker"
        },

        "LocationList": []
      }
      if (this.endorsementSection) {
        if (this.endorsementDetails.PolicyNo == null || this.endorsementDetails.PolicyNo == undefined) {
          this.endorsementDetails['PolicyNo'] = this.endorsePolicyNo;
        }
        ReqObj['EndorsementDetails'] = this.endorsementDetails
      }
      else {
        ReqObj["EndorsementDetails"] = {
          "EndorsementDate": null,
          "EndorsementEffectiveDate": null,
          "EndorsementRemarks": null,
          "EndorsementType": null,
          "EndorsementTypeDesc": null,
          "EndtCategoryDesc": null,
          "EndtCount": null,
          "EndtPrevPolicyNo": null,
          "EndtPrevQuoteNo": null,
          "EndtStatus": null,
          "IsFinanceEndt": null,
          "OrginalPolicyNo": null,
          "PolicyNo": null,
        }
      }
      let j = 0, locationList = [];

      for (let entry of this.locationList) {
        console.log(entry);
        let i = 0;
        if (entry.BuildingOwnerYn == null) entry.BuildingOwnerYn = 'Y';
        if (entry.CoversRequired == null) entry.CoversRequired = 'BC';
        let obj = {
          "LocationId": j + 1,
          "LocationName": entry.LocationName,
          "CoversRequired": entry.CoversRequired,
          "BuildingOwnerYn": entry.BuildingOwnerYn,
          "Address": entry.BuildingAddress,
          "SectionList": []
        }


        if (this.loopProductItem[j] == undefined && j == this.tabIndex) {
          this.loopProductItem.push(this.productItem);
        }
        console.log("Index Alt", j, this.tabIndex, this.loopProductItem);
        let subEntry = null;
        if (j == this.tabIndex) {
          subEntry = this.productItem; subEntry['IndustryType'] = this.IndustryId;
          subEntry['DeteriorationOfStock'] = this.form.controls['DeteriorationOfStock']?.value;
          subEntry['DeteriorationOfStockDesc'] = this.form.controls['DeteriorationOfStockDesc']?.value;
          subEntry['GrossProfit'] = this.form.controls['GrossProfit']?.value
          subEntry['IncreasedCostOfWorking'] = this.form.controls['IncreasedCostOfWorking']?.value
          subEntry['ClaimsPreparationCosts'] = this.form.controls['ClaimsPreparationCosts']?.value
          subEntry['MedicalExpenses'] = this.form.controls['MedicalExpenses']?.value
          subEntry['Death'] = this.form.controls['Death']?.value
          subEntry['TemporaryTotalDisability'] = this.form.controls['TemporaryTotalDisability']?.value
          subEntry['PermanentTotalDisability'] = this.form.controls['PermanentTotalDisability']?.value
          this.loopProductItem[j]['ClaimsPreparationCosts'] = subEntry['ClaimsPreparationCosts'];
          this.loopProductItem[j]['MedicalExpenses'] = subEntry['MedicalExpenses'];
          this.loopProductItem[j]['Death'] = subEntry['Death'];
          this.loopProductItem[j]['TemporaryTotalDisability'] = subEntry['TemporaryTotalDisability'];
          this.loopProductItem[j]['PermanentTotalDisability'] = subEntry['PermanentTotalDisability'];
          if (this.productId == '66' || this.productId == '67') {
            this.loopProductItem[j]['ConstructionType'] = subEntry['ConstructionType'] = this.form.controls['ConstructionType']?.value;
            this.loopProductItem[j]['AdditonalInflation'] = subEntry['AdditonalInflation'] = this.form.controls['AdditonalInflation']?.value;
            this.loopProductItem[j]['fireBuildingSumInsured'] = subEntry['fireBuildingSumInsured'] = this.form.controls['fireBuildingSumInsured']?.value
            this.loopProductItem[j]['contents'] = subEntry['contents'] = this.form.controls['contents']?.value;
            this.loopProductItem[j]['plantMachinery'] = subEntry['plantMachinery'] = this.form.controls['plantMachinery']?.value;
            this.loopProductItem[j]['stockInTrade'] = subEntry['stockInTrade'] = this.form.controls['stockInTrade']?.value
            this.loopProductItem[j]['miscellaneous'] = subEntry['miscellaneous'] = this.form.controls['miscellaneous']?.value;
            this.loopProductItem[j]['powerSurge'] = subEntry['powerSurge'] = this.form.controls['powerSurge']?.value;
            this.loopProductItem[j]['hailDamage'] = subEntry['hailDamage'] = this.form.controls['hailDamage']?.value
            this.loopProductItem[j]['rentReceivable'] = subEntry['rentReceivable'] = this.form.controls['rentReceivable']?.value;
            this.loopProductItem[j]['GeyserInhouse'] = subEntry['GeyserInhouse'] = this.form.controls['GeyserInhouse']?.value;
            this.loopProductItem[j]['GeyserSolar'] = subEntry['GeyserSolar'] = this.form.controls['GeyserSolar']?.value
            this.loopProductItem[j]['leakageExtension'] = subEntry['leakageExtension'] = this.form.controls['leakageExtension']?.value;
            this.loopProductItem[j]['leakageExtensionSumInsured'] = subEntry['leakageExtensionSumInsured'] = this.form.controls['leakageExtensionSumInsured']?.value;
            this.loopProductItem[j]['IndeminityPeriod'] = subEntry['IndeminityPeriod'] = this.form.controls['IndeminityPeriod']?.value;
            this.loopProductItem[j]['Cover'] = subEntry['Cover'] = this.form.controls['Cover']?.value;
            this.loopProductItem[j]['BISumInsured'] = subEntry['BISumInsured'] = this.form.controls['BISumInsured']?.value
            this.loopProductItem[j]['GrossRentals'] = subEntry['GrossRentals'] = this.form.controls['GrossRentals']?.value
            this.loopProductItem[j]['AccidentalSumInsured'] = subEntry['AccidentalSumInsured'] = this.form.controls['AccidentalSumInsured']?.value;
            this.loopProductItem[j]['ClaimPreparationCost'] = subEntry['ClaimPreparationCost'] = this.form.controls['ClaimPreparationCost']?.value;
            this.loopProductItem[j]['UnspecifiedSupplier'] = subEntry['UnspecifiedSupplier'] = this.form.controls['UnspecifiedSupplier']?.value
            this.loopProductItem[j]['PublicTelecommuncation'] = subEntry['PublicTelecommuncation'] = this.form.controls['PublicTelecommuncation']?.value;
            this.loopProductItem[j]['PublicTelecommuncationSI'] = subEntry['PublicTelecommuncationSI'] = this.form.controls['PublicTelecommuncationSI']?.value;
            this.loopProductItem[j]['PublicUtilities'] = subEntry['PublicUtilities'] = this.form.controls['PublicUtilities']?.value
            this.loopProductItem[j]['PublicUtilitiesSI'] = subEntry['PublicUtilitiesSI'] = this.form.controls['PublicUtilitiesSI']?.value;
            this.loopProductItem[j]['CustomerSupplier'] = subEntry['CustomerSupplier'] = this.form.controls['CustomerSupplier']?.value;
            this.loopProductItem[j]['CustomerSupplierSI'] = subEntry['CustomerSupplierSI'] = this.form.controls['CustomerSupplierSI']?.value
            this.loopProductItem[j]['PreventionofAccess'] = subEntry['PreventionofAccess'] = this.form.controls['PreventionofAccess']?.value;
            this.loopProductItem[j]['ConstructionType'] = subEntry['ConstructionType'] = this.form.controls['ConstructionType'].value;
            this.loopProductItem[j]['fireBuildingSumInsured'] = subEntry['fireBuildingSumInsured'] = String(this.form.controls['fireBuildingSumInsured'].value).replaceAll(',', '');
            //PlantMachinery
            if (this.productId == '66') {
              this.loopProductItem[j]['plantMachinery'] = subEntry['plantMachinery'] = String(this.form.controls['plantMachinery'].value).replaceAll(',', '');
              this.loopProductItem[j]['contents'] = subEntry['contents'] = String(this.form.controls['contents'].value).replaceAll(',', '');
              this.loopProductItem[j]['stockInTrade'] = subEntry['stockInTrade'] = String(this.form.controls['stockInTrade'].value).replaceAll(',', '');
              this.loopProductItem[j]['miscellaneous'] = subEntry['miscellaneous'] = String(this.form.controls['miscellaneous'].value).replaceAll(',', '');
              this.loopProductItem[j]['powerSurge'] = subEntry['powerSurge'] = String(this.form.controls['powerSurge'].value).replaceAll(',', '');
              this.loopProductItem[j]['hailDamage'] = subEntry['hailDamage'] = String(this.form.controls['hailDamage'].value).replaceAll(',', '');
              this.loopProductItem[j]['leakageExtension'] = subEntry['leakageExtension'] = this.form.controls['leakageExtension'].value;
              this.loopProductItem[j]['leakageExtensionSumInsured'] = subEntry['leakageExtensionSumInsured'] = String(this.form.controls['leakageExtensionSumInsured'].value).replaceAll(',', '');
              this.loopProductItem[j]['rentReceivable'] = subEntry['rentReceivable'] = String(this.form.controls['rentReceivable'].value).replaceAll(',', '');
            }
            this.loopProductItem[j]['GeyserInhouse'] = subEntry['GeyserInhouse'] = String(this.form.controls['GeyserInhouse'].value).replaceAll(',', '');
            this.loopProductItem[j]['GeyserSolar'] = subEntry['GeyserSolar'] = String(this.form.controls['GeyserSolar'].value).replaceAll(',', '');


            if (this.productId != '66') { this.loopProductItem[j]['Escalation'] = subEntry['Escalation'] = String(this.form.controls['Escalation'].value).replaceAll(',', ''); }
            // //BIFireSection
            //   this.loopProductItem[j]['IndeminityPeriod']=subEntry['IndeminityPeriod'] = this.productItem.IndeminityPeriod;
            //   this.loopProductItem[j]['Cover']=subEntry['Cover'] = this.productItem.Cover;
            //   this.loopProductItem[j]['BISumInsured']=subEntry['BISumInsured'] = this.productItem.BISumInsured;
            //   this.loopProductItem[j]['GrossRentals']=subEntry['GrossRentals'] = this.productItem.GrossRentals
            //Extensions
            this.loopProductItem[j]['AccidentalDamage'] = subEntry['AccidentalDamage'] = this.productItem.AccidentalSumInsured;
            this.loopProductItem[j]['ClaimPreparationCost'] = subEntry['ClaimPreparationCost'] = this.productItem.ClaimPreparationCost;
            this.loopProductItem[j]['UnspecifiedSupplier'] = subEntry['UnspecifiedSupplier'] = this.productItem.UnspecifiedSupplier;
            console.log("this. Form", this.form)
            this.loopProductItem[j]['PreventionofAccess'] = subEntry['PreventionofAccess'] = String(this.form.controls['PreventionofAccess'].value).replaceAll(',', '');
            this.loopProductItem[j]['PublicTelecommuncationSI'] = subEntry['PublicTelecommuncationSI'] = String(this.form.controls['PublicTelecommuncationSI'].value).replaceAll(',', '');
            this.loopProductItem[j]['PublicTelecommuncation'] = subEntry['PublicTelecommuncation'] = this.form.controls['PublicTelecommuncation'].value;
            this.loopProductItem[j]['PublicUtilitiesSI'] = subEntry['PublicUtilitiesSI'] = String(this.form.controls['PublicUtilitiesSI'].value).replaceAll(',', '');
            this.loopProductItem[j]['PublicUtilities'] = subEntry['PublicUtilities'] = this.form.controls['PublicUtilities'].value;
            this.loopProductItem[j]['CustomerSupplierSI'] = subEntry['CustomerSupplierSI'] = String(this.form.controls['CustomerSupplierSI'].value).replaceAll(',', '');
            this.loopProductItem[j]['CustomerSupplier'] = subEntry['CustomerSupplier'] = this.form.controls['CustomerSupplier'].value;
          }
          if (this.productId == '32') {
            let FidelityForm = this.fidelityForm.controls.fidelitys.value;
            if (FidelityForm) {
              this.productItem.FidelityListPhoenix = [];
              for (let i = 0; i < FidelityForm.length; i++) {
                let d = {
                  "AdditionalClaimsPreparationCosts": FidelityForm[i].AdditionalClaimsPreparationCosts,
                  "LimitOfIndemnity": FidelityForm[i].LimitOfIndemnity,
                }
                this.productItem.FidelityListPhoenix.push(d)
                if (i == FidelityForm.length - 1) {
                  subEntry['FidelityListPhoenix'] = this.productItem.FidelityListPhoenix
                }
              }
            }
          }
        
          //HouseHolders
          if (this.productId == '78') {
            this.loopProductItem[j]['AccidentalDamage'] = subEntry['AccidentalDamage'] = this.productItem.HouseAccidentalDamage;
            this.loopProductItem[j]['AccidentalDamageDesc'] = subEntry['AccidentalDamageDesc'] = this.productItem.HouseAccidentalDamageDesc;
            this.loopProductItem[j]['PowerSurge'] = subEntry['PowerSurge'] = this.productItem.PowerSurge;
            this.loopProductItem[j]['PowerSurgeDesc'] = subEntry['PowerSurgeDesc'] = this.productItem.PowerSurgeDesc;
            this.loopProductItem[j]['HolderTheftDesc'] = subEntry['HolderTheftDesc'] = this.productItem.HolderTheftDesc;
            this.loopProductItem[j]['HolderTheft'] = subEntry['HolderTheft'] = this.productItem.HolderTheft;
            this.loopProductItem[j]['HolderBreakdownDesc'] = subEntry['HolderBreakdownDesc'] = this.productItem.HolderBreakdownDesc;
            this.loopProductItem[j]['HolderBreakdown'] = subEntry['HolderBreakdown'] = this.productItem.HolderBreakdown
            this.loopProductItem[j]['HouseHolderContentList'] = subEntry['HouseHolderContentList'] = this.fieldHouseHolderContents[0]?.form.controls['contents'].value;
            this.loopProductItem[j]['HouseHolderContentList'] = this.fieldHouseHolderContents[0]?.form.controls['contents'].value;
          }
          // Public Liability Phoenix
          if (this.productId == '27') {
            this.loopProductItem[j]['GeneralLiability'] = subEntry['GeneralLiability'] = this.form.controls['GeneralLiability']?.value;
            this.loopProductItem[j]['LegalDefenceCosts'] = subEntry['LegalDefenceCosts'] = this.form.controls['LegalDefenceCosts']?.value;
            this.loopProductItem[j]['WrongfulArrestandDefamation'] = subEntry['WrongfulArrestandDefamation'] = this.form.controls['WrongfulArrestandDefamation']?.value;
            this.loopProductItem[j]['ProductsLiability'] = subEntry['ProductsLiability'] = this.form.controls['ProductsLiability']?.value;
            this.loopProductItem[j]['ProductsLiabilityRevenue'] = subEntry['ProductsLiabilityRevenue'] = this.form.controls['ProductsLiabilityRevenue']?.value;
            this.loopProductItem[j]['ProductSumInsured'] = subEntry['ProductSumInsured'] = this.form.controls['ProductSumInsured']?.value;
            this.loopProductItem[j]['DefectiveWorkmanship'] = subEntry['DefectiveWorkmanship'] = this.form.controls['DefectiveWorkmanship']?.value;
            this.loopProductItem[j]['DefectiveWorkmanshipRevenue'] = subEntry['DefectiveWorkmanshipRevenue'] = this.form.controls['DefectiveWorkmanshipRevenue']?.value;
            this.loopProductItem[j]['DefectiveSumInsured'] = subEntry['DefectiveSumInsured'] = this.form.controls['DefectiveSumInsured']?.value;
            this.loopProductItem[j]['SpreadofFire'] = subEntry['SpreadofFire'] = this.form.controls['SpreadofFire']?.value;
            this.loopProductItem[j]['FoodandDrink'] = subEntry['FoodandDrink'] = this.form.controls['FoodandDrink']?.value;
            this.loopProductItem[j]['ForecourtServiceStationExtension'] = subEntry['ForecourtServiceStationExtension'] = this.form.controls['ForecourtServiceStationExtension']?.value;
            this.loopProductItem[j]['CarWashandValetExtension'] = subEntry['CarWashandValetExtension'] = this.form.controls['CarWashandValetExtension']?.value;
            this.loopProductItem[j]['AdditionalclaimsPreparationCosts'] = subEntry['AdditionalclaimsPreparationCosts'] = this.form.controls['AdditionalclaimsPreparationCosts']?.value;
            console.log("SubEntry", subEntry)
          }
          // Construction All risk
          if(this.productId=='79' || this.productId=='84' || this.productId=='82'|| this.productId=='83'){
            this.loopProductItem[j]['CARTheft'] = subEntry['CARTheft'] = this.form.controls['CARTheft']?.value;
            this.loopProductItem[j]['CAROffSite'] = subEntry['CAROffSite'] = this.form.controls['CAROffSite']?.value;
            this.loopProductItem[j]['CAROpentrench'] = subEntry['CAROpentrench'] = this.form.controls['CAROpentrench']?.value;
            this.loopProductItem[j]['CARFireBridge'] = subEntry['CARFireBridge'] = this.form.controls['CARFireBridge']?.value;
            this.loopProductItem[j]['CARDemolition'] = subEntry['CARDemolition'] = this.form.controls['CARDemolition']?.value;
            this.loopProductItem[j]['CARProfessional'] = subEntry['CARProfessional'] = this.form.controls['CARProfessional']?.value;
            this.loopProductItem[j]['CAREscalation'] = subEntry['CAREscalation'] = this.form.controls['CAREscalation']?.value;
            this.loopProductItem[j]['CARDevaluation'] = subEntry['CARDevaluation'] = this.form.controls['CARDevaluation']?.value;
            this.loopProductItem[j]['CARClaimPreparation'] = subEntry['CARClaimPreparation'] = this.form.controls['CARClaimPreparation']?.value;
            this.loopProductItem[j]['CARSurrounding'] = subEntry['CARSurrounding'] = this.form.controls['CARSurrounding']?.value;
            this.loopProductItem[j]['CAREstimated'] = subEntry['CAREstimated'] = this.form.controls['CAREstimated']?.value;
            this.loopProductItem[j]['CARAnnual'] = subEntry['CARAnnual'] = this.form.controls['CARAnnual']?.value;
            this.loopProductItem[j]['CarMaximumContract'] = subEntry['CarMaximumContract'] = this.form.controls['CarMaximumContract']?.value;
            this.loopProductItem[j]['CARAnnual'] = subEntry['CARAnnual'] = this.form.controls['CARAnnual']?.value;
            this.loopProductItem[j]['CARPrincipal'] = subEntry['CARPrincipal'] = this.form.controls['CARPrincipal']?.value;
            this.loopProductItem[j]['CARDescription'] = subEntry['CARDescription'] = this.form.controls['CARDescription']?.value;
            this.loopProductItem[j]['CARLocationName'] = subEntry['CARLocationName'] = this.form.controls['CARLocationName']?.value;
            this.loopProductItem[j]['CARStartDate'] = subEntry['CARStartDate'] = this.form.controls['CARStartDate']?.value;
            this.loopProductItem[j]['CARPeriodOfActivity'] = subEntry['CARPeriodOfActivity'] = this.form.controls['CARPeriodOfActivity']?.value;
            this.loopProductItem[j]['ConstructionType'] = subEntry['ConstructionType'] = this.form.controls['ConstructionType']?.value;
            this.loopProductItem[j]['BuildingSumInsureds'] = subEntry['BuildingSumInsureds'] = this.form.controls['BuildingSumInsureds']?.value;
            this.loopProductItem[j]['CARuptoConstruction'] = subEntry['CARuptoConstruction'] = this.form.controls['CARuptoConstruction']?.value;
            this.loopProductItem[j]['CARuptoStoreys'] = subEntry['CARuptoStoreys'] = this.form.controls['CARuptoStoreys']?.value;
            this.loopProductItem[j]['CARuptoMonths'] = subEntry['CARuptoMonths'] = this.form.controls['CARuptoMonths']?.value;
            this.loopProductItem[j]['CARuptoSumInsured'] = subEntry['CARuptoSumInsured'] = this.form.controls['CARuptoSumInsured']?.value;
            
          }
          let EmployersForm = this.fieldEE[0]?.form?.value?.employers;
          if (EmployersForm) {
            this.productItem.EmployersLiabilityList = [];
            for (let i = 0; i < EmployersForm.length; i++) {
              let d = {
                "OccupationType": EmployersForm[i].OccupationType,
                "NoEmployees": EmployersForm[i].NoEmployees,
                "EmpSumInsured": EmployersForm[i].EmpSumInsured,
              }
              this.productItem.EmployersLiabilityList.push(d)
              if (i == EmployersForm.length - 1) {
                subEntry['EmployersLiabilityList'] = this.fieldEE[0]?.form.controls['employers'].value;

              }
            }
          }
        }
        else {
          let filter = null;
          if (this.loopProductItem[j]) { filter = this.loopProductItem[j]; subEntry = this.loopProductItem[j]; }
          else if (this.locationList[j]) {
            filter = this.locationList[j]; subEntry = this.locationList[j];
            if (this.locationList[j]?.EmployersLiabilityList == undefined) {

            }
          }
          console.log("Loop Item", this.loopProductItem[j], this.locationList[j], filter)
          if (filter) {
            if (this.productId == '66') {
              subEntry['ConstructionType'] = filter?.ConstructionType;
              subEntry['AdditonalInflation'] = filter?.AdditonalInflation;
              subEntry['AccidentalDamage'] = filter?.AccidentalDamage;
              subEntry['fireBuildingSumInsured'] = filter?.fireBuildingSumInsured;
              subEntry['contents'] = filter?.contents;
              subEntry['plantMachinery'] = filter?.plantMachinery;
              subEntry['stockInTrade'] = filter?.stockInTrade;
              subEntry['miscellaneous'] = filter?.miscellaneous;
              subEntry['powerSurge'] = filter?.powerSurge;
              subEntry['hailDamage'] = filter?.hailDamage;
              subEntry['rentReceivable'] = filter?.rentReceivable;
              subEntry['GeyserInhouse'] = filter?.GeyserInhouse;
              subEntry['GeyserSolar'] = filter?.GeyserSolar;
              subEntry['leakageExtension'] = filter?.leakageExtension;
              subEntry['leakageExtensionSumInsured'] = filter?.leakageExtensionSumInsured;
              subEntry['IndeminityPeriod'] = filter?.IndeminityPeriod;
              subEntry['Cover'] = filter?.Cover;
              subEntry['BISumInsured'] = filter?.BISumInsured;
              subEntry['GrossRentals'] = filter?.GrossRentals;
              subEntry['AccidentalSumInsured'] = filter?.AccidentalSumInsured;
              subEntry['ClaimPreparationCost'] = filter?.ClaimPreparationCost;
              subEntry['UnspecifiedSupplier'] = filter?.UnspecifiedSupplier;
              subEntry['PublicTelecommuncation'] = filter?.PublicTelecommuncation;
              subEntry['PublicTelecommuncationSI'] = filter?.PublicTelecommuncationSI;
              subEntry['PublicUtilities'] = filter?.PublicUtilities;
              subEntry['PublicUtilitiesSI'] = filter?.PublicUtilitiesSI;
              subEntry['CustomerSupplier'] = filter?.CustomerSupplier;
              subEntry['CustomerSupplierSI'] = filter?.CustomerSupplierSI;
              subEntry['PreventionofAccess'] = filter?.PreventionofAccess;
            }
            if (this.productId == '67') {
              if (filter?.ConstructionType) subEntry['ConstructionType'] = filter?.ConstructionType;
              if (filter?.fireBuildingSumInsured) subEntry['fireBuildingSumInsured'] = String(filter?.fireBuildingSumInsured).replaceAll(',', '');
              //PlantMachinery
              if (filter?.plantMachinery) subEntry['plantMachinery'] = String(filter?.plantMachinery).replaceAll(',', '');
              if (filter?.contents) subEntry['contents'] = String(filter?.contents).replaceAll(',', '');
              if (filter?.GeyserInhouse) subEntry['GeyserInhouse'] = String(filter?.GeyserInhouse).replaceAll(',', '');
              if (filter?.GeyserSolar) subEntry['GeyserSolar'] = String(filter?.GeyserSolar).replaceAll(',', '');
              if (filter?.stockInTrade) subEntry['stockInTrade'] = String(filter?.stockInTrade).replaceAll(',', '');
              if (filter?.miscellaneous) subEntry['miscellaneous'] = String(filter?.miscellaneous).replaceAll(',', '');
              if (filter?.powerSurge) subEntry['powerSurge'] = String(filter?.powerSurge).replaceAll(',', '');
              if (filter?.hailDamage) subEntry['hailDamage'] = String(filter?.hailDamage).replaceAll(',', '');
              if (filter?.rentReceivable) subEntry['rentReceivable'] = String(filter?.rentReceivable).replaceAll(',', '');
              if (filter?.leakageExtension) subEntry['leakageExtension'] = filter?.leakageExtension;
              if (filter?.leakageExtensionSumInsured) subEntry['leakageExtensionSumInsured'] = String(filter?.leakageExtensionSumInsured).replaceAll(',', '');
              if (filter?.Escalation) subEntry['Escalation'] = String(filter?.Escalation).replaceAll(',', '');
              //BIFireSection
              subEntry['IndeminityPeriod'] = filter?.IndeminityPeriod;
              subEntry['Cover'] = filter?.Cover;
              subEntry['BISumInsured'] = filter?.BISumInsured;
              subEntry['GrossRentals'] = filter?.GrossRentals;
              //Extensions
              subEntry['AccidentalDamage'] = filter?.AccidentalDamage;
              subEntry['ClaimPreparationCost'] = filter?.ClaimPreparationCost;
              subEntry['UnspecifiedSupplier'] = filter?.UnspecifiedSupplier;
              console.log("this. Form", this.form)
              if (filter?.PreventionofAccess) subEntry['PreventionofAccess'] = String(filter?.PreventionofAccess).replaceAll(',', '');
              if (filter?.PublicTelecommuncationSI) subEntry['PublicTelecommuncationSI'] = String(filter?.PublicTelecommuncationSI).replaceAll(',', '');
              if (filter?.PublicTelecommuncation) subEntry['PublicTelecommuncation'] = filter?.PublicTelecommuncation;
              if (filter?.PublicUtilitiesSI) subEntry['PublicUtilitiesSI'] = String(filter?.PublicUtilitiesSI).replaceAll(',', '');
              if (filter?.PublicUtilities) subEntry['PublicUtilities'] = filter?.PublicUtilities;
              if (filter?.CustomerSupplierSI) subEntry['CustomerSupplierSI'] = String(filter?.CustomerSupplierSI).replaceAll(',', '');
              if (filter?.CustomerSupplier) subEntry['CustomerSupplier'] = filter?.CustomerSupplier;
            }
          }

        }
        if (subEntry) {
          if (this.productId == '66') {
            entry['ConstructionType'] = subEntry.ConstructionType
            entry['AdditonalInflation'] = subEntry.AdditonalInflation
            entry['fireBuildingSumInsured'] = subEntry.fireBuildingSumInsured
            entry['contents'] = subEntry.contents
            entry['plantMachinery'] = subEntry.plantMachinery
            entry['stockInTrade'] = subEntry.stockInTrade
            entry['miscellaneous'] = subEntry.miscellaneous
            entry['powerSurge'] = subEntry.powerSurge
            entry['hailDamage'] = subEntry.hailDamage
            entry['rentReceivable'] = subEntry.rentReceivable
            entry['GeyserInhouse'] = subEntry.GeyserInhouse
            entry['GeyserSolar'] = subEntry.GeyserSolar
            entry['leakageExtension'] = subEntry.leakageExtension
            entry['leakageExtensionSumInsured'] = subEntry.leakageExtensionSumInsured
            entry['IndeminityPeriod'] = subEntry.IndeminityPeriod
            entry['Cover'] = subEntry.Cover
            entry['BISumInsured'] = subEntry.BISumInsured
            entry['GrossRentals'] = subEntry.GrossRentals
            entry['AccidentalSumInsured'] = subEntry.AccidentalSumInsured
            entry['ClaimPreparationCost'] = subEntry.ClaimPreparationCost
            entry['UnspecifiedSupplier'] = subEntry.UnspecifiedSupplier
            entry['PublicTelecommuncation'] = subEntry.PublicTelecommuncation
            entry['PublicTelecommuncationSI'] = subEntry.PublicTelecommuncationSI
            entry['PublicUtilities'] = subEntry.PublicUtilities
            entry['PublicUtilitiesSI'] = subEntry.PublicUtilitiesSI
            entry['CustomerSupplier'] = subEntry.CustomerSupplier
            entry['CustomerSupplierSI'] = subEntry.CustomerSupplierSI
            entry['PreventionofAccess'] = subEntry.PreventionofAccess
            entry['AccidentalDamage'] = subEntry.AccidentalDamage
          }
          if (this.productId == '67') {
            entry['ConstructionType'] = subEntry.ConstructionType
            entry['fireBuildingSumInsured'] = subEntry.fireBuildingSumInsured
            entry['contents'] = subEntry.contents
            entry['plantMachinery'] = subEntry.plantMachinery
            entry['stockInTrade'] = subEntry.stockInTrade
            entry['miscellaneous'] = subEntry.miscellaneous
            entry['powerSurge'] = subEntry.powerSurge
            entry['hailDamage'] = subEntry.hailDamage
            entry['rentReceivable'] = subEntry.rentReceivable
            entry['GeyserInhouse'] = subEntry.GeyserInhouse
            entry['GeyserSolar'] = subEntry.GeyserSolar
            entry['leakageExtension'] = subEntry.leakageExtension
            entry['leakageExtensionSumInsured'] = subEntry.leakageExtensionSumInsured
            entry['Escalation'] = subEntry.Escalation
            entry['IndeminityPeriod'] = subEntry.IndeminityPeriod
            entry['Cover'] = subEntry.Cover
            entry['BISumInsured'] = subEntry.BISumInsured
            entry['GrossRentals'] = subEntry.GrossRentals
            entry['AccidentalDamage'] = subEntry.AccidentalDamage
            entry['ClaimPreparationCost'] = subEntry.ClaimPreparationCost
            entry['UnspecifiedSupplier'] = subEntry.UnspecifiedSupplier
            entry['PublicTelecommuncation'] = subEntry.PublicTelecommuncation
            entry['PublicTelecommuncationSI'] = subEntry.PublicTelecommuncationSI
            entry['PublicUtilities'] = subEntry.PublicUtilities
            entry['PublicUtilitiesSI'] = subEntry.PublicUtilitiesSI
            entry['CustomerSupplier'] = subEntry.CustomerSupplier
            entry['CustomerSupplierSI'] = subEntry.CustomerSupplierSI
            entry['PreventionofAccess'] = subEntry.PreventionofAccess

          }
          if (this.productId == '69') {
            entry['OutstandingDebitBalances'] = subEntry.OutstandingDebitBalances
            entry['TransitExtension'] = subEntry.TransitExtension
            entry['ClaimsPreparationCosts'] = subEntry.ClaimsPreparationCosts;
          }
          if (this.productId == '70' || (this.productId=='19' && this.insuranceId=='100050')) {
            entry['AccidentalPhysicalLossDamage'] = subEntry.AccidentalPhysicalLossDamage
            entry['MaximumLimitperOccurrence'] = subEntry.MaximumLimitperOccurrence
            entry['OutstandingDebitBalances'] = subEntry.OutstandingDebitBalances
            entry['TransitExtension'] = subEntry.TransitExtension
            entry['AdditionalclaimsPreparationCosts'] = subEntry.AdditionalclaimsPreparationCosts;
            entry['ClaimsPreparationCosts'] = subEntry.AdditionalclaimsPreparationCosts;

            entry['Accidentaloilandchemical'] = subEntry.Accidentaloilandchemical;
          }
          // Employers Liability
          if (this.productId == '14') {
            entry['EmployersLiabilityList'] = subEntry['EmployersLiabilityList']
          }
          // Construction All Risk
          if (this.productId == '79' || this.productId=='84' || this.productId=='82'|| this.productId=='83') {
            entry['CARTheft'] = String(subEntry.CARTheft).replaceAll(',', '');
            entry['CAROffSite'] = String(subEntry.CAROffSite).replaceAll(',', '');
            entry['CAROpentrench'] = String(subEntry.CAROpentrench).replaceAll(',', '');
            entry['CARFireBridge'] = String(subEntry.CARFireBridge).replaceAll(',', '');
            entry['CARDemolition'] = String(subEntry.CARDemolition).replaceAll(',', '');
            entry['CARProfessional'] = String(subEntry.CARProfessional).replaceAll(',', '');
            entry['CAREscalation'] = String(subEntry.CAREscalation).replaceAll(',', '');
            entry['CARDevaluation'] = String(subEntry.CARDevaluation).replaceAll(',', '');
            entry['CARClaimPreparation'] = String(subEntry.CARClaimPreparation).replaceAll(',', '');
            entry['CARSurrounding'] = String(subEntry.CARSurrounding).replaceAll(',', '');
            entry['CAREstimated'] = String(subEntry.CAREstimated).replaceAll(',', '');
            entry['CARAnnual'] = String(subEntry.CARAnnual).replaceAll(',', '');
            entry['CarMaximumContract'] = String(subEntry.CarMaximumContract).replaceAll(',', '');
            entry['CARAnnual'] = subEntry.CARAnnual;
            entry['CARPrincipal'] = subEntry.CARPrincipal;
            entry['CARDescription'] = subEntry.CARDescription;
            entry['CARLocationName'] = subEntry.CARLocationName;
            entry['CARStartDate'] = subEntry.CARStartDate;
            entry['CARPeriodOfActivity'] = subEntry.CARPeriodOfActivity;
            entry['ConstructionType'] = subEntry.ConstructionType;
            entry['BuildingSumInsureds'] = String(subEntry.BuildingSumInsureds).replaceAll(',', '');
            entry['CARuptoConstruction'] = subEntry.CARuptoConstruction;
            entry['CARuptoStoreys'] = subEntry.CARuptoStoreys;
            entry['CARuptoMonths'] = subEntry.CARuptoMonths;
            entry['CARuptoSumInsured'] = String(subEntry.CARuptoSumInsured).replaceAll(',', '');
          }
          entry['IndustryType'] = subEntry['IndustryType'];
          //Deterioration Of Stock
          entry['DeteriorationOfStock'] = subEntry['DeteriorationOfStock']
          entry['DeteriorationOfStockDesc'] = subEntry['DeteriorationOfStockDesc'];
          // BussinessAllRisk
          entry['ClothingAndPersonalEffectsPhoenix'] = subEntry.ClothingAndPersonalEffectsPhoenix
          entry['ClothingAndPersonalEffectsPhoenixDesc'] = subEntry.ClothingAndPersonalEffectsPhoenixDesc
          entry['ArticlesKeptOnPremisesPhoenix'] = subEntry.ArticlesKeptOnPremisesPhoenix
          entry['ArticlesKeptOnPremisesPhoenixDesc'] = subEntry.ArticlesKeptOnPremisesPhoenixDesc
          entry['ElectronicEquipmentPhoenix'] = subEntry.ElectronicEquipmentPhoenix
          entry['ElectronicEquipmentPhoenixDesc'] = subEntry.ElectronicEquipmentPhoenixDesc
          entry['CellularPhonesPhoenix'] = subEntry.CellularPhonesPhoenix
          entry['CellularPhonesPhoenixDesc'] = subEntry.CellularPhonesPhoenixDesc
          entry['CampingEquipmentPhoenix'] = subEntry.CampingEquipmentPhoenix
          entry['CampingEquipmentPhoenixDesc'] = subEntry.CampingEquipmentPhoenixDesc
          entry['SportingEquipmentPhoenix'] = subEntry.SportingEquipmentPhoenix
          entry['SportingEquipmentPhoenixDesc'] = subEntry.SportingEquipmentPhoenixDesc
          entry['JewelleryPhoenix'] = subEntry.JewelleryPhoenix
          entry['JewelleryPhoenixDesc'] = subEntry.JewelleryPhoenixDesc
          //Electronic Equipment
          entry['ElectronicEquipment'] = subEntry.ElectronicEquipment
          entry['VariousPortableEquipment'] = subEntry.VariousPortableEquipment
          entry['IncreasedCostofWorking'] = subEntry.IncreasedCostofWorking
          entry['IncompatibilityCover'] = subEntry.IncompatibilityCover
          entry['EEclaimsPreparationCosts'] = subEntry.EEclaimsPreparationCosts
          entry['ElectronicEquipmentDesc'] = subEntry.ElectronicEquipmentDesc
          entry['VariousPortableEquipmentDesc'] = subEntry.VariousPortableEquipmentDesc
          entry['IncreasedCostofWorkingDesc'] = subEntry.IncreasedCostofWorkingDesc
          entry['IncompatibilityCoverDesc'] = subEntry.IncompatibilityCoverDesc
          entry['EEclaimsPreparationCostsDesc'] = subEntry.EEclaimsPreparationCostsDesc
          //entry['EmployersLiability'] = this.form.controls['EmployersLiability']?.value
          entry['BuildingSumInsuredFullcover'] = this.form.controls['BuildingSumInsuredFullcover']?.value
          entry['HomeownersLiability'] = this.form.controls['HomeownersLiability']?.value
          entry['AccidentalDamageToMachinery'] = this.form.controls['AccidentalDamageToMachinery']?.value
          entry['SolarGeyser'] = this.form.controls['SolarGeyser']?.value
          entry['InHouseGeyser'] = this.form.controls['InHouseGeyser']?.value
          entry['Powersurge'] = this.form.controls['Powersurge']?.value
          entry['SubsidenceAndLandslip'] = this.form.controls['SubsidenceAndLandslip']?.value
          entry['NoClaimBonus'] = this.form.controls['NoClaimBonus']?.value
          entry['BuildingSumInsuredFullcoverDesc'] = this.form.controls['BuildingSumInsuredFullcoverDesc']?.value
          entry['HomeownersLiabilityDesc'] = this.form.controls['HomeownersLiabilityDesc']?.value
          entry['AccidentalDamageToMachineryDesc'] = this.form.controls['AccidentalDamageToMachineryDesc']?.value
          entry['SolarGeyserDesc'] = this.form.controls['SolarGeyserDesc']?.value
          entry['InHouseGeyserDesc'] = this.form.controls['InHouseGeyserDesc']?.value;
          if (this.productId == '27') {
            entry['GeneralLiability'] = subEntry['GeneralLiability'];
            entry['LegalDefenceCosts'] = subEntry['LegalDefenceCosts'];
            entry['WrongfulArrestandDefamation'] = subEntry['WrongfulArrestandDefamation'];
            entry['ProductsLiability'] = subEntry['ProductsLiability'];
            entry['ProductsLiabilityRevenue'] = subEntry['ProductsLiabilityRevenue'];
            entry['ProductSumInsured'] = subEntry['ProductSumInsured'];
            entry['DefectiveWorkmanship'] = subEntry['DefectiveWorkmanship'];
            entry['DefectiveWorkmanshipRevenue'] = subEntry['DefectiveWorkmanshipRevenue'];
            entry['DefectiveSumInsured'] = subEntry['DefectiveSumInsured'];
            entry['SpreadofFire'] = subEntry['SpreadofFire'];
            entry['FoodandDrink'] = subEntry['FoodandDrink'];
            entry['ForecourtServiceStationExtension'] = subEntry['ForecourtServiceStationExtension'];
            entry['CarWashandValetExtension'] = subEntry['CarWashandValetExtension'];
            entry['AdditionalclaimsPreparationCosts'] = subEntry['AdditionalclaimsPreparationCosts'];
          }
          //Glass
          entry['AdditionalClaimsPreparationCosts'] = subEntry.AdditionalClaimsPreparationCosts
          entry['SpecialReinstatement'] = subEntry.SpecialReinstatement
          entry['InternalGlass'] = subEntry.InternalGlass
          entry['ExternalGlass'] = subEntry.ExternalGlass
          entry['GlassClaimsPreparationCosts'] = subEntry.GlassClaimsPreparationCosts
          //Machinery Breakdown
          if (this.productId == '39') {
            entry['GrossProfit'] = subEntry['GrossProfit'];
            entry['IncreasedCostOfWorking'] = subEntry['IncreasedCostOfWorking'];
            entry['ClaimsPreparationCosts'] = subEntry['ClaimsPreparationCosts'];
          }

          // Goods In Transit
          if (this.productId == '49') {
            entry['TransitCoverage'] = subEntry.TransitCoverage
            entry['Commodity'] = subEntry.Commodity
            entry['CoverageType'] = subEntry.CoverageType
            entry['GoodsInTransitSumInsured'] = subEntry.GoodsInTransitSumInsured
            entry['vehicleCount'] = subEntry.vehicleCount
            entry['TripsMonth'] = subEntry.TripsMonth
            entry['MaximumLimitTrips'] = subEntry.MaximumLimitTrips
            entry['FireExtingUserCharge'] = subEntry.FireExtingUserCharge
            entry['DetoriationRemoval'] = subEntry.DetoriationRemoval
            entry['ClaimPreparationCost'] = subEntry.ClaimPreparationCost

          }
          //Money
          if (this.productId == '16') {
            entry['SafeLockerGrade'] = subEntry.SafeLockerGrade;
            entry['MajorMoneyLimit'] = subEntry.MajorMoneyLimit;
            entry['LocksKeysofReceptacle'] = subEntry.LocksKeysofReceptacle;
            entry['ClothingPersonalEffectsofEmployees'] = subEntry.ClothingPersonalEffectsofEmployees;
            entry['Receptaclesinexcessofpolicylimit'] = subEntry.Receptaclesinexcessofpolicylimit;
            entry['SeasonalIncrease'] = subEntry.SeasonalIncrease;
          }
          // Office Contents
          if (this.productId == '68') {
            entry['OfficeContents'] = subEntry.OfficeContents;
            entry['OfficeContentsDesc'] = subEntry.OfficeContentsDesc;
            entry['OfficeClaimCosts'] = subEntry.OfficeClaimCosts;
            entry['TheftAspect'] = subEntry.TheftAspect;
            entry['WaterLeakage'] = subEntry.WaterLeakage;
            entry['PowerSurge'] = subEntry.PowerSurge;
            entry['AdditionalClaimsPreparationCosts'] = subEntry.AdditionalClaimsPreparationCosts;
            entry['LiabilityForLossOfDocuments'] = subEntry.LiabilityForLossOfDocuments;
          }
          // State Benefits
          if (this.productId == '74') {
            entry['MedicalExpenses'] = subEntry['MedicalExpenses']
            entry['Death'] = subEntry['Death']
            entry['TemporaryTotalDisability'] = subEntry['TemporaryTotalDisability']
            entry['PermanentTotalDisability'] = subEntry['PermanentTotalDisability']
          }
           if (this.productId == '19' && this.insuranceId=='100050') {
            let accidentalApi = null;
            if (this.insuranceId == '100050') accidentalApi = new AccidentalDamageCommercialNamibiaApi();
            let accidentallist: any = accidentalApi.getSaveDetails(entry, this.claimCostList, this.industryTypeList, obj,this.PackageIndustryType, this.FireIndustryList)
            if (accidentallist) { obj = accidentallist;console.log(obj);
             }
          }
          if (this.productId == '78') {
            //HouseHolder Content
            entry['AccidentalDamage'] = subEntry['AccidentalDamage'];
            entry['AccidentalDamageDesc'] = subEntry['AccidentalDamageDesc'];
            entry['PowerSurge'] = subEntry['PowerSurge'];
            entry['PowerSurgeDesc'] = subEntry['PowerSurgeDesc'];
            entry['HolderTheftDesc'] = subEntry['HolderTheftDesc'];
            entry['HolderTheft'] = subEntry['HolderTheft'];
            entry['HolderBreakdownDesc'] = subEntry['HolderBreakdownDesc'];
            entry['HolderBreakdown'] = subEntry['HolderBreakdown'];
            
            let houseContentApi = null;
            if (this.insuranceId == '100046') houseContentApi = new HouseHoldersContentsApiPhoenix();
            else if (this.insuranceId == '100047') houseContentApi = new HouseHoldersContentsApiBotswana();
            else if (this.insuranceId == '100048') houseContentApi = new HouseHoldersContentsApiMozambique();
            else if (this.insuranceId == '100049') houseContentApi = new HouseHoldersContentsApiSwaziland();
            else if (this.insuranceId == '100050') houseContentApi = new HouseHoldersContentsApiNamibia();
            let houseContentList = houseContentApi.getSaveDetails(entry, this.constructionTypes, this.IndustryId, this.industryTypeList, obj, subEntry['HouseHolderContentList'])
            if (houseContentList) {
              obj = houseContentList;
            }
          }
          // public LiabilityPhoenix
          if (this.productId == '27') {
            let publicApi = null;
            if (this.insuranceId == '100046') publicApi = new PublicLiabilityApiPhoenix();
            else if (this.insuranceId == '100047') publicApi = new PublicLiabilityApiBotswana();
            else if (this.insuranceId == '100048') publicApi = new PublicLiabilityApiMozambique();
            else if (this.insuranceId == '100049') publicApi = new PublicLiabilityApiSwaziland();
            else if (this.insuranceId == '100050') publicApi = new PublicLiabilityApiNamibia();
            let list: any = publicApi.getSaveDetails(entry, this.GeneralLiabilityList, this.LiabilityLegalList,
              this.ArrestList, this.IndustryId, this.industryTypeList, obj)
            if (list) { obj = list }
          }
          //fireBuildingSections
          if (this.productId == '67') {
            let buildingCombinedApi = null;
            if (this.insuranceId == '100046') buildingCombinedApi = new BuildingCombinedApiPhoenix();
            if (this.insuranceId == '100047') buildingCombinedApi = new BuildingCombinedBotswanaApi();
            if (this.insuranceId == '100048') buildingCombinedApi = new BuildingCombinedMozambiqueApi();
            if (this.insuranceId == '100049') buildingCombinedApi = new BuildingCombinedSwazilandApi();
            if (this.insuranceId == '100050') buildingCombinedApi = new BuildingCombinedNamibiaApi();
            let buildingCombinedList: any = buildingCombinedApi.getSaveDetails(entry, this.IndustryId, this.industryTypeList, obj)
            if (buildingCombinedList) { obj = buildingCombinedList }
          }
          if (this.productId == '66') {
            let fireApi = null;
            if (this.insuranceId == '100046') fireApi = new FireApiPhoenix();
            if (this.insuranceId == '100047') fireApi = new FireBotswanaApi();
            if (this.insuranceId == '100048') fireApi = new FireMozambiqueApi();
            if (this.insuranceId == '100049') fireApi = new FireSwazilandApi();
            if (this.insuranceId == '100050') fireApi = new FireNamibiaApi();
            let fireList: any = fireApi.getSaveDetails(entry, this.IndustryId, this.industryTypeList, obj)
            if (fireList) { obj = fireList }
          }
          if (this.productId == '57') {
            let gpaApi = null;
            if (this.insuranceId == '100046') gpaApi = new GPAApiPhoenix()
            else if (this.insuranceId == '100047') gpaApi = new GPAApiBotswana()
            else if (this.insuranceId == '100048') gpaApi = new GPAApiMozambique()
            else if (this.insuranceId == '100049') gpaApi = new GPAApiSwaziland()
            else if (this.insuranceId == '100050') gpaApi = new GPAApiNamibia()
            console.log(this.GPAList.filter(item => item.LocationIndex == String(obj.LocationId)), this.GPAList, obj.LocationId)
            if (this.GPAList?.filter(item => item.LocationIndex == j).length != 0) {
              let gpalist: any = gpaApi?.getSaveDetails(entry, this.claimCostList, this.IndustryId, this.industryTypeList, obj, this.GPAList?.filter(item => item.LocationIndex == j))
              if (gpalist) {
                obj = gpalist;
                if (this.productItem.MedicalExpenses && j == this.tabIndex) {
                  let unSavedEntry;
                  let unSavedEntry2;
                  let unSavedEntry3;
                  unSavedEntry = {
                    "SectionId": "182",
                    "SectionName": "Group Personal Accident",
                    "CoverId": "126",
                    "SumInsured": this.productItem.MedicalExpenses,
                    "TotalNoOfEmployees": this.productItem.NumberofEmployees,
                    "IndemnityType": this.productItem.Coverage,
                    "CategoryId": this.productItem.occupation,
                    "Status": "Y",
                    "OtherOccupation": this.GPAList.length
                  }
                  unSavedEntry2 = {
                    "SectionId": "182",
                    "SectionName": "Group Personal Accident",
                    "CoverId": "123",
                    "SumInsured": this.productItem.AnnualRemuneration,
                    "TotalNoOfEmployees": this.productItem.NumberofEmployees,
                    "IndemnityType": this.productItem.Coverage,
                    "CategoryId": this.productItem.occupation,
                    "Status": "Y",
                    "OtherOccupation": this.GPAList.length
                  }
                  unSavedEntry3 = {
                    "SectionId": "182",
                    "SectionName": "Group Personal Accident",
                    "CoverId": "50",
                    "SumInsured": this.productItem.TemporaryDisablement,
                    "TotalNoOfEmployees": this.productItem.NumberofEmployees,
                    "IndemnityType": this.productItem.Coverage,
                    "CategoryId": this.productItem.occupation,
                    "Status": "Y",
                    "OtherOccupation": this.GPAList.length
                  }
                  let existingIndex = obj.SectionList.findIndex(item => item.CategoryId === this.productItem.occupation);
                  if (existingIndex !== -1) {
                    // Replace the existing entry
                    obj.SectionList = obj.SectionList.filter(item => item.CategoryId !== this.productItem.occupation);
                  } else {
                    // Push a new entry
                    obj.SectionList.push(unSavedEntry, unSavedEntry2, unSavedEntry3);
                  }
                  console.log(obj);

                }
              }
            }
            else {
              if (this.productItem.MedicalExpenses) {
                let unSavedEntry;
                let unSavedEntry2;
                let unSavedEntry3;
                unSavedEntry = {
                  "SectionId": "182",
                  "SectionName": "Group Personal Accident",
                  "CoverId": "126",
                  "SumInsured": this.productItem.MedicalExpenses,
                  "TotalNoOfEmployees": this.productItem.NumberofEmployees,
                  "IndemnityType": this.productItem.Coverage,
                  "CategoryId": this.productItem.occupation,
                  "Status": "Y",
                  "OtherOccupation": this.GPAList.length
                }
                unSavedEntry2 = {
                  "SectionId": "182",
                  "SectionName": "Group Personal Accident",
                  "CoverId": "123",
                  "SumInsured": this.productItem.AnnualRemuneration,
                  "TotalNoOfEmployees": this.productItem.NumberofEmployees,
                  "IndemnityType": this.productItem.Coverage,
                  "CategoryId": this.productItem.occupation,
                  "Status": "Y",
                  "OtherOccupation": this.GPAList.length
                }
                unSavedEntry3 = {
                  "SectionId": "182",
                  "SectionName": "Group Personal Accident",
                  "CoverId": "50",
                  "SumInsured": this.productItem.TemporaryDisablement,
                  "TotalNoOfEmployees": this.productItem.NumberofEmployees,
                  "IndemnityType": this.productItem.Coverage,
                  "CategoryId": this.productItem.occupation,
                  "Status": "Y",
                  "OtherOccupation": this.GPAList.length
                }
                let existingIndex = obj.SectionList.findIndex(item => item.CategoryId === this.productItem.occupation);
                if (existingIndex !== -1) {
                  // Replace the existing entry
                  obj.SectionList = obj.SectionList.filter(item => item.CategoryId !== this.productItem.occupation);
                } else {
                  // Push a new entry
                  obj.SectionList.push(unSavedEntry, unSavedEntry2, unSavedEntry3);
                }
              }
            }
          }
          if (this.productId == '81') {
            entry['PersonalAccidental'] = subEntry.PersonalAccidental;
            entry['PersonalWrongful'] = subEntry.PersonalWrongful;
          }
          if (this.productId == '79') {
            let constructionAllRisk = null;
            if (this.insuranceId == '100046') constructionAllRisk = new ConstructionAllRiskApiPhoenix()
            let constructionAllRiskList = constructionAllRisk.getSaveDetails(entry, this.IndustryId, this.industryTypeList, obj)
            if (constructionAllRiskList) {
              obj = constructionAllRiskList;
            }
          }
          if (this.productId == '82') {
            let constructionAllRisk = null;
            if (this.insuranceId == '100002') constructionAllRisk = new ConstructionAllRiskUptoApiTanzaniya()
            let constructionAllRiskList = constructionAllRisk.getSaveDetails(entry, this.IndustryId, this.industryTypeList, obj)
            if (constructionAllRiskList) {
              obj = constructionAllRiskList;
            }
          }
          if (this.productId == '83') {
            let constructionAllRisk = null;
            if (this.insuranceId == '100002') constructionAllRisk = new ConstructionAllRiskAboveApiTanzaniya()
            let constructionAllRiskList = constructionAllRisk.getSaveDetails(entry, this.IndustryId, this.industryTypeList, obj)
            if (constructionAllRiskList) {
              obj = constructionAllRiskList;
            }
          }
          if (this.productId == '84') {
            let engineeringAllRisk = null;
            if (this.insuranceId == '100046') engineeringAllRisk = new EngineeringAllRiskApiPhoenix();
            let engineeringAllRiskList = engineeringAllRisk.getSaveDetails(entry, this.IndustryId, this.industryTypeList, obj)
            if (engineeringAllRiskList) {
              obj = engineeringAllRiskList;
            }
          }
          // Fidelity
          if (this.productId == '32') {
            if (subEntry.FidelityListPhoenix) {
              for (let index = 0; index < subEntry.FidelityListPhoenix.length; index++) {
                if (subEntry.FidelityListPhoenix[index]?.AdditionalClaimsPreparationCosts != null && subEntry.FidelityListPhoenix[index]?.AdditionalClaimsPreparationCosts != 0 && subEntry.FidelityListPhoenix[index]?.AdditionalClaimsPreparationCosts != '0') {
                  let altEntry = {
                    "SectionId": "43",
                    "CoverId": "372",
                    "SectionName": "Fidelity",
                    "SumInsured": subEntry.FidelityListPhoenix[index]?.AdditionalClaimsPreparationCosts.replace(/,/g, ''),
                    "Status": "Y",
                    "OtherOccupation": index
                  }
                  if (entry['IndustryType']) { altEntry['IndustryType'] = entry['IndustryType']; altEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == entry['IndustryType'])?.CodeDesc }
                  obj.SectionList.push(altEntry);
                }
                if (subEntry.FidelityListPhoenix[index]?.LimitOfIndemnity != null && subEntry.FidelityListPhoenix[index]?.LimitOfIndemnity != 0 && subEntry.FidelityListPhoenix[index]?.LimitOfIndemnity != '0') {
                  let altEntry = {
                    "SectionId": "43",
                    "CoverId": "293",
                    "SectionName": "Fidelity",
                    "SumInsured": subEntry.FidelityListPhoenix[index]?.LimitOfIndemnity.replace(/,/g, ''),
                    "Status": "Y",
                    "OtherOccupation": index
                  }
                  if (entry['IndustryType']) { altEntry['IndustryType'] = entry['IndustryType']; altEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == entry['IndustryType'])?.CodeDesc }
                  obj.SectionList.push(altEntry);
                }
              }
            }
          }
          if (this.productId == '70') {
            let accidentalApi = null;
            if (this.insuranceId == '100046') accidentalApi = new AccidentalDamageApiPhoenix();
            else if (this.insuranceId == '100047') accidentalApi = new AccidentalDamageBotswanaApi();
            else if (this.insuranceId == '100048') accidentalApi = new AccidentalDamageMozambiqueApi();
            else if (this.insuranceId == '100049') accidentalApi = new AccidentalDamageSwazilandApi();
            else if (this.insuranceId == '100050') accidentalApi = new AccidentalDamageNamibiaApi();
            let accidentallist: any = accidentalApi.getSaveDetails(entry, this.claimCostList, this.industryTypeList, obj)
            if (accidentallist) { obj = accidentallist }
          }
          // deterotation of stock
          if (this.productId == '75') {
            let deterApi = null;
            if (this.insuranceId == '100046') deterApi = new DeteriorationOfStockApiPhoenix();
            else if (this.insuranceId == '100047') deterApi = new DeteriorationOfStockApiBotswana();
            else if (this.insuranceId == '100048') deterApi = new DeteriorationOfStockApiMozambique();
            else if (this.insuranceId == '100049') deterApi = new DeteriorationOfStockApiSwaziland();
            else if (this.insuranceId == '100050') deterApi = new DeteriorationOfStockApiNamibia();
            let deterApilist: any = deterApi.getSaveDetails(entry, this.claimCostList, this.industryTypeList, obj)
            if (deterApilist) { obj = deterApilist }
          }
          // Business All Risk
          if (this.productId == '26') {
            let businessallriskApi = null;
            if (this.insuranceId == '100046') businessallriskApi = new BusinessAllRiskApiPhoenix();
            else if (this.insuranceId == '100047') businessallriskApi = new BusinessAllRiskApiBotswana();
            else if (this.insuranceId == '100048') businessallriskApi = new BusinessAllRiskApiMozambique();
            else if (this.insuranceId == '100049') businessallriskApi = new BusinessAllRiskApiSwaziland();
            else if (this.insuranceId == '100050') businessallriskApi = new BusinessAllRiskApiNamibia();
            let businessallriskApilist = businessallriskApi.getSaveDetails(entry, this.claimCostList, this.industryTypeList, obj)
            if (businessallriskApilist) {
              obj = businessallriskApilist;
            }
          }
          //Electronic Equipment
          if (this.productId == '25') {
            let publicLiability: any;
            if (this.insuranceId == "100046") publicLiability = new ElectronicEquipmentApi();
            else if (this.insuranceId == '100047') publicLiability = new ElectronicEquipmentApiBotswana();
            else if (this.insuranceId == '100048') publicLiability = new ElectronicEquipmentApiMozambique();
            else if (this.insuranceId == '100049') publicLiability = new ElectronicEquipmentApiSwaziland();
            else if (this.insuranceId == '100050') publicLiability = new ElectronicEquipmentApiNamibia();
            obj = publicLiability.getSaveDetails(entry, this.industryTypeList, this.claimCostList, obj);
          }
          if (this.productId == '14') {
            let employeerApi = null;
            if (this.insuranceId == '100046') employeerApi = new EmployersLiabilityApiPhoenix();
            else if (this.insuranceId == '100047') employeerApi = new EmployersLiabilityApiBotswana();
            else if (this.insuranceId == '100048') employeerApi = new EmployersLiabilityApiMozambique();
            else if (this.insuranceId == '100049') employeerApi = new EmployersLiabilityApiSwaziland();
            else if (this.insuranceId == '100050') employeerApi = new EmployersLiabilityApiNamibia();
            let employeerlist: any = employeerApi.getSaveDetails(entry, this.claimCostList, this.occupationList, this.industryTypeList, obj)
            if (employeerlist) { obj = employeerlist }
          }
          // Glass
          if (this.productId == '72') {

            let glassApi: any;
            if (this.insuranceId == '100046') glassApi = new GlassApiPhoenix();
            else if (this.insuranceId == '100047') glassApi = new GlassApiBotswana();
            else if (this.insuranceId == '100048') glassApi = new GlassApiMozambique();
            else if (this.insuranceId == '100049') glassApi = new GlassApiSwaziland();
            else if (this.insuranceId == '100050') glassApi = new GlassApiNamibia();
            let glasslist: any = glassApi.getSaveDetails(entry, this.claimCostList, this.IndustryId, this.industryTypeList, obj)
            if (glasslist) { obj = glasslist }
          }
          if (this.productId == '49') {
            let goodsApi = null;
            if (this.insuranceId == '100046') goodsApi = new GoodsInTransitApiPhoenix()
            else if (this.insuranceId == '100047') goodsApi = new GoodsInTransitApiBotswana()
            else if (this.insuranceId == '100048') goodsApi = new GoodsInTransitApiMozambique()
            else if (this.insuranceId == '100049') goodsApi = new GoodsInTransitApiSwaziland()
            else if (this.insuranceId == '100050') goodsApi = new GoodsInTransitApiNamibia()
            let goodsList = goodsApi.getSaveDetails(entry, this.claimCostList, this.industryTypeList, obj)
            if (goodsList) {
              obj = goodsList;
            }

          }
          //Machinery Breakdown
          if (this.productId == '39') {
            let machineryApi: any;
            if (this.insuranceId == "100046") machineryApi = new MachineryBreakdownApi();
            else if (this.insuranceId == '100047') machineryApi = new MachineryBreakdownApiBotswana();
            else if (this.insuranceId == '100048') machineryApi = new MachineryBreakdownApiMozambique();
            else if (this.insuranceId == '100049') machineryApi = new MachineryBreakdownApiSwaziland();
            else if (this.insuranceId == '100050') machineryApi = new MachineryBreakdownApiNamibia();
            let list: any = machineryApi.getSaveDetails(entry, this.claimCostList, this.industryTypeList, obj)
            if (list) { obj = list }
          }
          // Money
          if (this.productId == '16') {
            let moneyApi = null;
            if (this.insuranceId == '100046') moneyApi = new MoneyApi();
            else if (this.insuranceId == '100047') moneyApi = new MoneyApiBotswana();
            else if (this.insuranceId == '100048') moneyApi = new MoneyApiMozambique();
            else if (this.insuranceId == '100049') moneyApi = new MoneyApiSwaziland();
            else if (this.insuranceId == '100050') moneyApi = new MoneyApiNamibia();
            let moneyApiList = moneyApi.getSaveDetails(entry, this.industryTypeList, obj)
            if (moneyApiList) {
              obj = moneyApiList;
            }
          }
          //Office Contants
          if (this.productId == '68') {
            let officecontentsApi = null;
            if (this.insuranceId == '100046') officecontentsApi = new OfficeContentsApiPhoenix();
            else if (this.insuranceId == '100047') officecontentsApi = new OfficeContentsApiBotswana();
            else if (this.insuranceId == '100048') officecontentsApi = new OfficeContentsApiMozambique();
            else if (this.insuranceId == '100049') officecontentsApi = new OfficeContentsApiSwaziland();
            else if (this.insuranceId == '100050') officecontentsApi = new OfficeContentsApiNamibia();
            let officecontentslist: any = officecontentsApi.getSaveDetails(entry, this.claimCostList, this.industryTypeList, obj)
            if (officecontentslist) { obj = officecontentslist }
          }
          // Accounts Recievable
          if (this.productId == '69') {
            let accountsRecievableApi = null;
            if (this.insuranceId == '100046') accountsRecievableApi = new AccountsRecievableApiPhoenix();
            else if (this.insuranceId == '100047') accountsRecievableApi = new AccountsRecievableBotswanaApi();
            else if (this.insuranceId == '100048') accountsRecievableApi = new AccountsRecievableMozambiqueApi();
            else if (this.insuranceId == '100049') accountsRecievableApi = new AccountsRecievableSwazilandApi();
            else if (this.insuranceId == '100050') accountsRecievableApi = new AccountsRecievableNamibiaApi();
            let accountsRecievablelist: any = accountsRecievableApi.getSaveDetails(entry, this.claimCostList, this.industryTypeList, obj)
            if (accountsRecievablelist) { obj = accountsRecievablelist }
          }
          //Stated Benefits
          if (this.productId == '74') {
            let stateList: any;
            if (this.insuranceId == "100046") stateList = new StatedBenefitsApi();
            else if (this.insuranceId == '100047') stateList = new StatedBenefitsApiBotswana();
            else if (this.insuranceId == '100048') stateList = new StatedBenefitsApiMozambique();
            else if (this.insuranceId == '100049') stateList = new StatedBenefitsApiSwaziland();
            else if (this.insuranceId == '100050') stateList = new StatedBenefitsApiNamibia();
            obj = stateList.getSaveDetails(entry, this.IndustryId, this.industryTypeList, obj);
          }
        }
        if (this.productId != '70' && this.productId != '75' && this.productId != '26' && this.productId != '25' && this.productId != '14'
          && this.productId != '32' && this.productId != '72' && this.productId != '49' && this.productId != '39' && this.productId != '16' && this.productId != '27'
          && this.productId != '68' && this.productId != '74' && this.productId != '66' && this.productId != '67' && this.productId != '69') {
          entry["RoofType"] = subEntry.WallType;
          entry["WallType"] = subEntry.WallType;
          entry["BuildingSumInsured"] = subEntry.BuildingSuminsured;
          entry["SumInsured"] = subEntry.SumInsured;
          entry['ContentSuminsured'] = subEntry.ContentSuminsured;
          entry["ContentConstructionType"] = subEntry.ContentConstructionType;
          entry["PlantConstructionType"] = subEntry.PlantConstructionType;
          entry["PlantSumInsured"] = subEntry.PlantSumInsured;
          entry["TradeConstructionType"] = subEntry.TradeConstructionType;
          entry["TradeSumInsured"] = subEntry.TradeSumInsured;
          entry["MiscellaneousConstructionType"] = subEntry.MiscellaneousConstructionType;
          entry["MiscellaneousSumInsured"] = subEntry.MiscellaneousSumInsured;
          entry["PowerSurgeSumInsured"] = subEntry.PowerSurgeSumInsured;
          entry["HailDamageSumInsured"] = subEntry.HailDamageSumInsured;
          entry["RentSumInsured"] = subEntry.RentSumInsured;
          entry["GeyserSolarSumInsured"] = subEntry.InSolar;
          entry["GeyserSolarDescription"] = subEntry.InSolarDesc;
          entry["GeyserHouseSumInsured"] = subEntry.InHouse;
          entry["GeyserHouseDescription"] = subEntry.InHouseDesc;
          entry["FirstLossBasis"] = subEntry.FirstLossBasis;
          entry["FirstLossBasisSumInsured"] = subEntry.FirstLossBasisSumInsured;
          entry["InflationConstructionType"] = subEntry.InflationConstructionType;
          entry["InflationSumInsured"] = subEntry.InflationSumInsured;
          entry["ClaimsPreparationSumInsured"] = subEntry.ClaimsPreparationCost;
          entry["LiabilitySumInsured"] = subEntry.LiabilitySumInsured;
          entry["ThirdAspectSumInsured"] = subEntry.ThirdAspectSumInsured;
          entry["OfficeContentsSumInsured"] = subEntry.OfficeContentsSumInsured;
          entry["WaterLeakageSumInsured"] = subEntry.WaterLeakageSumInsured;
          entry["AdditionalClaimsSumInsured"] = subEntry.AdditionalClaimsSumInsured;
          entry["LiabilityLossSumInsured"] = subEntry.LiabilityLossSumInsured;
          entry["AccidentalDamageSumInsured"] = subEntry.AccidentalDamageSumInsured;
          entry["AccountsRecievableSumInsured"] = subEntry.AccountsRecievableSumInsured;
          entry['GlassSumInsured'] = subEntry.GlassSumInsured;
          entry['StateBenefitSumInsured'] = subEntry.StateBenefitSumInsured;
          entry['AccidentalDamageDesc'] = subEntry.AccidentalDamageDesc;




          entry['FirstLossLimit'] = subEntry.FirstLossLimit
          entry['VehiclesintheOpen'] = subEntry.VehiclesintheOpen
          entry['LocksandKeys'] = subEntry.LocksandKeys
          entry['LossDamagetoPersonalEffects'] = subEntry.LossDamagetoPersonalEffects
          entry['FuelinAbovegroundtanks'] = subEntry.FuelinAbovegroundtanks
          entry['FuelinUndergroundtanks'] = subEntry.FuelinUndergroundtanks
          entry['DamagetoBuildingscausedbyThieves'] = subEntry.DamagetoBuildingscausedbyThieves

          if (this.productId == '32') {
            entry['AdditionalClaimsPreparationCosts'] = subEntry.AdditionalClaimsPreparationCosts
            entry['LimitOfIndemnity'] = subEntry.LimitOfIndemnity
          }
          if (this.productId != '32') {
            entry['LimitofIndeminity'] = subEntry.LimitofIndeminity
            entry['FidelityClaimsPreparationCost'] = subEntry.FidelityClaimsPreparationCost
          }




          // Umbrella
          entry['UmbrellasumInsured'] = this.form.controls['UmbrellasumInsured']?.value;


          //HouseOwner
          entry['AccidentalDamage'] = this.form.controls['AccidentalDamage']?.value
          entry['AccidentalDamageDesc'] = this.form.controls['AccidentalDamageDesc']?.value
          entry['PowerSurge'] = this.form.controls['PowerSurge']?.value
          entry['PowerSurgeDesc'] = this.form.controls['PowerSurgeDesc']?.value
          entry['TheftCoverFromDomesticAndOutbuildings'] = this.form.controls['TheftCoverFromDomesticAndOutbuildings']?.value
          entry['TheftCoverFromDomesticAndOutbuildingsDesc'] = this.form.controls['TheftCoverFromDomesticAndOutbuildingsDesc']?.value
          entry['MechanicalAndElectricalBreakdown'] = this.form.controls['MechanicalAndElectricalBreakdown']?.value
          entry['MechanicalAndElectricalBreakdownDesc'] = this.form.controls['MechanicalAndElectricalBreakdownDesc']?.value
          entry['Contant'] = this.form.controls['Contant']?.value
          entry['SumInsured'] = this.form.controls['SumInsured']?.value
          entry['Description'] = this.form.controls['Description']?.value



          entry['OccupationType'] = subEntry.OccupationType
          entry['NoEmployees'] = subEntry.NoEmployees
          entry['EmpSumInsured'] = subEntry.EmpSumInsured





          if (this.productId == '57') {
            entry['MedicalExpenses'] = this.productItem.MedicalExpenses;
            entry['Coverage'] = this.productItem.Coverage;
            entry['TemporaryDisablement'] = this.productItem.TemporaryDisablement;
            entry['AnnualRemuneration'] = this.productItem.AnnualRemuneration;
            entry['NumberofEmployees'] = this.productItem.NumberofEmployees;
            entry['occupation'] = this.productItem.occupation;

          }
          if (this.productId == '80') {
            entry['ClothingAndPersonalEffectsPhoenixDesc'] = this.productItem.ClothingAndPersonalEffectsPhoenixDesc;
            entry['ClothingAndPersonalEffectsPhoenix'] = this.productItem.ClothingAndPersonalEffectsPhoenix;
            entry['CampingEquipmentPhoenixDesc'] = this.productItem.CampingEquipmentPhoenixDesc;
            entry['CampingEquipmentPhoenix'] = this.productItem.CampingEquipmentPhoenix;
            entry['SportingEquipmentPhoenixDesc'] = this.productItem.SportingEquipmentPhoenixDesc;
            entry['SportingEquipmentPhoenix'] = this.productItem.SportingEquipmentPhoenix;
            entry['JewelleryPhoenixDesc'] = this.productItem.JewelleryPhoenixDesc;
            entry['JewelleryPhoenix'] = this.productItem.JewelleryPhoenix;
            entry['MobilephoneDesc'] = this.productItem.MobilephoneDesc;
            entry['Mobilephone'] = this.productItem.Mobilephone;

          }
          if (this.productId == '81') {
            entry['PersonalAccidental'] = this.productItem.PersonalAccidental;
            entry['PersonalWrongful'] = this.productItem.PersonalWrongful;
          }
          if (this.productId != '32' && this.productId != '70' && this.productId != '27') {
            let AdditionalclaimsPreparationCosts = this.form.controls['AdditionalclaimsPreparationCosts']?.value
            if (AdditionalclaimsPreparationCosts) {
              entry['AdditionalclaimsPreparationCosts'] = String(this.CommaFormattedPublicLiabiity(this.ExtendsList.find(ele => ele.Code == AdditionalclaimsPreparationCosts)?.CodeDesc));
            }
          }
          // entry['AdditionalclaimsPreparationCosts'] = this.form.controls['AdditionalclaimsPreparationCosts']?.value;

          //Fire
          //Building
          if (this.productId == '66' || this.productId == '67') {
            entry['ConstructionType'] = this.form.controls['ConstructionType'].value;
            if (this.productId != '67') { entry['AdditonalInflation'] = this.form.controls['AdditonalInflation'].value; }
            if (this.form.controls['fireBuildingSumInsured']?.value) entry['fireBuildingSumInsured'] = String(this.form.controls['fireBuildingSumInsured'].value).replaceAll(',', '');
            //PlantMachinery
            if (this.form.controls['plantMachinery']?.value) entry['plantMachinery'] = String(this.form.controls['plantMachinery'].value).replaceAll(',', '');
            if (this.form.controls['contents']?.value) entry['contents'] = String(this.form.controls['contents'].value).replaceAll(',', '');
            if (this.form.controls['GeyserInhouse']?.value) entry['GeyserInhouse'] = String(this.form.controls['GeyserInhouse'].value).replaceAll(',', '');
            if (this.form.controls['GeyserSolar']?.value) entry['GeyserSolar'] = String(this.form.controls['GeyserSolar'].value).replaceAll(',', '');
            if (this.form.controls['stockInTrade']?.value) entry['stockInTrade'] = String(this.form.controls['stockInTrade'].value).replaceAll(',', '');
            if (this.form.controls['miscellaneous']?.value) entry['miscellaneous'] = String(this.form.controls['miscellaneous'].value).replaceAll(',', '');
            if (this.form.controls['powerSurge']?.value) entry['powerSurge'] = String(this.form.controls['powerSurge'].value).replaceAll(',', '');
            if (this.form.controls['hailDamage']?.value) entry['hailDamage'] = String(this.form.controls['hailDamage'].value).replaceAll(',', '');
            if (this.form.controls['rentReceivable']?.value) entry['rentReceivable'] = String(this.form.controls['rentReceivable'].value).replaceAll(',', '');
            if (this.form.controls['leakageExtension']?.value) entry['leakageExtension'] = this.form.controls['leakageExtension'].value;
            if (this.form.controls['leakageExtensionSumInsured']?.value) entry['leakageExtensionSumInsured'] = String(this.form.controls['leakageExtensionSumInsured'].value).replaceAll(',', '');
            if (this.form.controls['Escalation']?.value) entry['Escalation'] = String(this.form.controls['Escalation'].value).replaceAll(',', '');
            //BIFireSection
            entry['IndeminityPeriod'] = this.productItem.IndeminityPeriod;
            entry['Cover'] = this.productItem.Cover;
            entry['BISumInsured'] = this.productItem.BISumInsured;
            entry['GrossRentals'] = this.productItem.GrossRentals
            //Extensions
            entry['AccidentalDamage'] = this.productItem.AccidentalSumInsured;
            entry['ClaimPreparationCost'] = this.productItem.ClaimPreparationCost;
            entry['UnspecifiedSupplier'] = this.productItem.UnspecifiedSupplier;
            console.log("this. Form", this.form)
            if (this.form.controls['PreventionofAccess']?.value) entry['PreventionofAccess'] = String(this.form.controls['PreventionofAccess'].value).replaceAll(',', '');
            if (this.form.controls['PublicTelecommuncationSI']?.value) entry['PublicTelecommuncationSI'] = String(this.form.controls['PublicTelecommuncationSI'].value).replaceAll(',', '');
            if (this.form.controls['PublicTelecommuncation']?.value) entry['PublicTelecommuncation'] = this.form.controls['PublicTelecommuncation'].value;
            if (this.form.controls['PublicUtilitiesSI']?.value) entry['PublicUtilitiesSI'] = String(this.form.controls['PublicUtilitiesSI'].value).replaceAll(',', '');
            if (this.form.controls['PublicUtilities']?.value) entry['PublicUtilities'] = this.form.controls['PublicUtilities'].value;
            if (this.form.controls['CustomerSupplierSI']?.value) entry['CustomerSupplierSI'] = String(this.form.controls['CustomerSupplierSI'].value).replaceAll(',', '');
            if (this.form.controls['CustomerSupplier']?.value) entry['CustomerSupplier'] = this.form.controls['CustomerSupplier'].value;
            console.log("Final Entrys", entry)
          }


          if (this.productId == '80') {
            let personalAllriskApi = null;
            if (this.insuranceId == '100046') personalAllriskApi = new PersonalAllRiskApiPhoenix();
            let personalAllriskApilist = personalAllriskApi.getSaveDetails(entry, this.claimCostList, this.IndustryId, this.industryTypeList, obj)
            if (personalAllriskApilist) {
              obj = personalAllriskApilist;
            }
          }
          if (this.productId == '81') {
            let personalliabilityApi = null;
            if (this.insuranceId == '100046') personalliabilityApi = new PersonalLiabilityApiPhoenix();
            let personalliabilityApilist = personalliabilityApi.getSaveDetails(entry, this.claimCostList, this.IndustryId, this.industryTypeList, obj)
            if (personalliabilityApilist) {
              obj = personalliabilityApilist;
            }
          }
          // Umbrella
          if (this.productId == '73') {
            let umbrella = null;
            if (this.insuranceId == '100046') umbrella = new UmbrellaApi();
            else if (this.insuranceId == '100047') umbrella = new UmbrellaApiBotswana();
            else if (this.insuranceId == '100048') umbrella = new UmbrellaApiMozambique();
            else if (this.insuranceId == '100049') umbrella = new UmbrellaApiSwaziland();
            else if (this.insuranceId == '100050') umbrella = new UmbrellaApiNamibia();
            let list: any = umbrella.getSaveDetails(entry, this.claimCostList, this.IndustryId, this.industryTypeList, obj)
            if (list) { obj = list }
          }

          if (this.productId == '76') {
            let houseOwner: any;
            if (this.insuranceId == "100046") houseOwner = new HouseOwnerApiPhoenix();
            else if (this.insuranceId == '100047') houseOwner = new HouseOwnerApiBotswana();
            else if (this.insuranceId == '100048') houseOwner = new HouseOwnerApiMozambique();
            else if (this.insuranceId == '100049') houseOwner = new HouseOwnerApiSwaziland();
            else if (this.insuranceId == '100050') houseOwner = new HouseOwnerApiNamibia();
            let list: any = houseOwner.getSaveDetails(entry, this.buildingUsageList, obj)
            if (list) { obj = list }
          }


          //fireBuildingSections
          if (this.productId == '67') {
            let buildingCombinedApi = null;
            if (this.insuranceId == '100046') buildingCombinedApi = new BuildingCombinedApiPhoenix();
            if (this.insuranceId == '100047') buildingCombinedApi = new BuildingCombinedBotswanaApi();
            if (this.insuranceId == '100048') buildingCombinedApi = new BuildingCombinedMozambiqueApi();
            if (this.insuranceId == '100049') buildingCombinedApi = new BuildingCombinedSwazilandApi();
            if (this.insuranceId == '100050') buildingCombinedApi = new BuildingCombinedNamibiaApi();
            let buildingCombinedList: any = buildingCombinedApi.getSaveDetails(entry, this.IndustryId, this.industryTypeList, obj)
            if (buildingCombinedList) { obj = buildingCombinedList }
          }
          if (this.productId == '66') {
            let fireApi = null;
            if (this.insuranceId == '100046') fireApi = new FireApiPhoenix();
            if (this.insuranceId == '100047') fireApi = new FireBotswanaApi();
            if (this.insuranceId == '100048') fireApi = new FireMozambiqueApi();
            if (this.insuranceId == '100049') fireApi = new FireSwazilandApi();
            if (this.insuranceId == '100050') fireApi = new FireNamibiaApi();
            let fireList: any = fireApi.getSaveDetails(entry, this.IndustryId, this.industryTypeList, obj)
            if (fireList) { obj = fireList }
          }

          // Theft
          if (this.productId == '71') {
            let theft: any;
            if (this.insuranceId == '100046') theft = new TheftApiPhoenix();
            else if (this.insuranceId == '100047') theft = new TheftApiBotswana();
            else if (this.insuranceId == '100048') theft = new TheftApiMozambique();
            else if (this.insuranceId == '100049') theft = new TheftApiSwaziland();
            else if (this.insuranceId == '100050') theft = new TheftApiNamibia();
            let theftlist: any = theft.getSaveDetails(entry, this.claimCostList, this.IndustryId, this.industryTypeList, obj)
            if (theftlist) { obj = theftlist }
          }






          //  if(entry.powerSurge!=null && entry.powerSurge!=''){
          //     let subEntry={
          //       "SectionId":"188",
          //       "Status":"Y","SumInsured":entry.powerSurge,
          //       "CoverId": "356",
          //       "DescriptionOfRisk": null
          //     }
          //     if(this.IndustryId){subEntry['IndustryType'] = this.IndustryId;subEntry["IndustryTypeDesc"]= this.industryTypeList.find(ele=>ele.Code==this.IndustryId)?.CodeDesc}
          //     obj.SectionList.push(subEntry);
          //  }

          if (entry.AccidentalDamageSumInsured != 0 && entry.AccidentalDamageSumInsured != null && entry.AccidentalDamageSumInsured != '' && entry.AAccidentalDamageDesc != null && entry.AccidentalDamageDesc != '') {
            let subEntry = {
              "SectionId": "1", "SectionName": "Building",
              "Status": "Y", "SumInsured": entry.AccidentalDamageSumInsured,
              "CoverId": "372",
              "DescriptionOfRisk": entry.AccidentalDamageDesc
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.BuildingSumInsured != 0 && entry.BuildingSumInsured != null && entry.WallType != null) {
            let subEntry = {
              "SectionId": "1", "SectionName": "Building",
              "Status": "Y",
              "CategoryId": entry.WallType,
              "SumInsured": entry.BuildingSumInsured,

            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.ContentSuminsured != null && entry.ContentSuminsured != 0 && entry.ContentSuminsured != '0') {
            let subEntry = {
              "SectionId": "47",
              "SumInsured": entry.ContentSuminsured,
              "Status": "Y",
              "CategoryId": entry.ContentConstructionType,
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.PlantSumInsured != null && entry.PlantSumInsured != 0 && entry.PlantSumInsured != '0') {
            let subEntry = {
              "SectionId": "185",
              "SumInsured": entry.PlantSumInsured,
              "Status": "Y",
              "CategoryId": entry.PlantConstructionType,
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.TradeSumInsured != null && entry.TradeSumInsured != 0 && entry.TradeSumInsured != '0') {
            let subEntry = {
              "SectionId": "186",
              "SumInsured": entry.TradeSumInsured,
              "Status": "Y",
              "CategoryId": entry.TradeConstructionType,
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.MiscellaneousSumInsured != null && entry.MiscellaneousSumInsured != 0 && entry.MiscellaneousSumInsured != '0') {
            let subEntry = {
              "SectionId": "187",
              "SumInsured": entry.MiscellaneousSumInsured,
              "Status": "Y",
              "CategoryId": entry.MiscellaneousConstructionType,
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }

          if (entry.FirstLossBasisSumInsured != null && entry.FirstLossBasisSumInsured != 0 && entry.FirstLossBasisSumInsured != '0') {
            let subEntry = {
              "SectionId": "189",
              "SumInsured": entry.FirstLossBasisSumInsured,
              "Status": "Y",
              "CategoryId": entry.FirstLossBasis,
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.HailDamageSumInsured != null && entry.HailDamageSumInsured != 0 && entry.HailDamageSumInsured != '0') {
            let subEntry = {
              "SectionId": "190",
              "SumInsured": entry.HailDamageSumInsured,
              "Status": "Y",
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.RentSumInsured != null && entry.RentSumInsured != 0 && entry.RentSumInsured != '0') {
            let subEntry = {
              "SectionId": "191",
              "SumInsured": entry.RentSumInsured,
              "Status": "Y",
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.InflationSumInsured != null && entry.InflationSumInsured != 0 && entry.InflationSumInsured != '0') {
            let subEntry = {
              "SectionId": "192",
              "SumInsured": entry.InflationSumInsured,
              "Status": "Y",
              "CategoryId": entry.InflationConstructionType,
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.GeyserSolarSumInsured != null && entry.GeyserSolarSumInsured != 0 && entry.GeyserSolarSumInsured != '0' && entry.GeyserSolarDescription != null) {
            let subEntry = {
              "SectionId": "196",
              "SectionName": "Geyser",
              "SumInsured": entry.GeyserSolarSumInsured,
              "DescriptionOfRisk": entry.GeyserSolarDescription,
              "CoverId": "488",
              "Status": "Y",
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.GeyserHouseSumInsured != null && entry.GeyserHouseSumInsured != 0 && entry.GeyserHouseSumInsured != '0' && entry.GeyserHouseDescription != null) {
            let subEntry = {
              "SectionId": "196", "SectionName": "Geyser",
              "CoverId": "364", "SumInsured": entry.GeyserHouseSumInsured,
              "DescriptionOfRisk": entry.GeyserHouseDescription,
              "Status": "Y"
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.ClaimsPreparationSumInsured != null && entry.ClaimsPreparationSumInsured != 0 && entry.ClaimsPreparationSumInsured != '0') {
            let subEntry = {
              "SectionId": "197",
              "SectionName": "Claims Preparation",
              "SumInsured": this.claimCostList.find(ele => ele.Code == entry.ClaimsPreparationSumInsured)?.CodeDesc?.replaceAll(',', ''),
              "CategoryId": entry.ClaimsPreparationSumInsured,
              "Status": "Y",
            }
            if (this.IndustryId) { subEntry['IndustryType'] = this.IndustryId; subEntry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
            obj.SectionList.push(subEntry);
          }
          if (entry.LiabilitySumInsured != null && entry.LiabilitySumInsured != 0 && entry.LiabilitySumInsured != '0') {
            let subEntry = {
              "SectionId": "44",
              "SumInsured": entry.LiabilitySumInsured,
              "Status": "Y",
            }
            obj.SectionList.push(subEntry);
          }


          if (entry.LimitofIndeminity != '0' && entry.LimitofIndeminity != null && entry.LimitofIndeminity != '' && this.productId != '32') {
            let subEntry = {
              "SectionId": "43",
              "SectionName": "Fidelity",
              "CoverId": "293",
              "SumInsured": entry.LimitofIndeminity,
              "IndustryType": this.IndustryId
            }
            obj.SectionList.push(subEntry);
          }
          if (entry.FidelityClaimsPreparationCost != '0' && entry.FidelityClaimsPreparationCost != null && entry.FidelityClaimsPreparationCost != '' && this.productId != '32') {
            let subEntry = {
              "SectionId": "43",
              "SectionName": "Fidelity",
              "CoverId": "372",
              "SumInsured": entry.FidelityClaimsPreparationCost,
              "IndustryType": this.IndustryId
            }
            obj.SectionList.push(subEntry);
          }

          let LiabilityLoss = this.sectionDropdownList.find(ele => ele.Code == '202')?.CoverList;
          if (LiabilityLoss) {
            for (let cover of LiabilityLoss) {
              if (j == this.tabIndex) {
                if (this.productItem.CategoryId) entry['CategoryId'] = this.productItem.CategoryId;
                if (this.IndustryId) { entry['IndustryType'] = this.IndustryId; entry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
                entry[cover.CoverName.replaceAll(" ", "")] = this.productItem[cover.CoverName.replaceAll(" ", "")];
              }
              let subEntry = this.getCommonEntry('202', "Liability Loss", entry, cover);
              if (subEntry) obj.SectionList.push(subEntry);
            }
          }
          let Leakage = this.sectionDropdownList.find(ele => ele.Code == '200')?.CoverList;
          if (Leakage) {
            for (let cover of Leakage) {
              if (j == this.tabIndex) {
                if (this.productItem.CategoryId) entry['CategoryId'] = this.productItem.CategoryId;
                if (this.IndustryId) { entry['IndustryType'] = this.IndustryId; entry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
                entry[cover.CoverName.replaceAll(" ", "")] = this.productItem[cover.CoverName.replaceAll(" ", "")];
              }
              let subEntry = this.getCommonEntry('200', "Water Leakage", entry, cover);
              if (subEntry) obj.SectionList.push(subEntry);
            }
          }
          let thirdAspects = this.sectionDropdownList.find(ele => ele.Code == '199')?.CoverList;
          if (thirdAspects) {
            for (let cover of thirdAspects) {
              if (j == this.tabIndex) {
                if (this.productItem.CategoryId) entry['CategoryId'] = this.productItem.CategoryId;
                if (this.IndustryId) { entry['IndustryType'] = this.IndustryId; entry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
                entry[cover.CoverName.replaceAll(" ", "")] = this.productItem[cover.CoverName.replaceAll(" ", "")];
              }
              let subEntry = this.getCommonEntry('199', "Third Aspect", entry, cover);
              if (subEntry) obj.SectionList.push(subEntry);
            }
          }
          // let officeContents = this.sectionDropdownList.find(ele=>ele.Code=='198')?.CoverList;
          // if(officeContents){
          //   for(let cover of officeContents){
          //     if(j==this.tabIndex){
          //       if(this.productItem.CategoryId)  entry['CategoryId'] = this.productItem.CategoryId;
          //       if(this.productItem.DescriptionOfRisk)  entry['DescriptionOfRisk'] = this.productItem.DescriptionOfRisk;
          //       if(this.IndustryId){entry['IndustryType'] = this.IndustryId;entry["IndustryTypeDesc"]= this.industryTypeList.find(ele=>ele.Code==this.IndustryId)?.CodeDesc}
          //       entry[cover.CoverName.replaceAll(" ","")] = this.productItem[cover.CoverName.replaceAll(" ","")];
          //     }
          //     let subEntry = this.getCommonEntry('198',"Office Contents",entry,cover);
          //     if(subEntry) obj.SectionList.push(subEntry);
          //   }
          // }

          // let GlassCoverList = this.sectionDropdownList.find(ele=>ele.Code=='222')?.CoverList;
          // if(GlassCoverList){
          //   for(let cover of GlassCoverList){
          //     if(j==this.tabIndex){
          //       if(this.productItem.CategoryId)  entry['CategoryId'] = this.productItem.CategoryId;
          //       if(this.IndustryId){entry['IndustryType'] = this.IndustryId;entry["IndustryTypeDesc"]= this.industryTypeList.find(ele=>ele.Code==this.IndustryId)?.CodeDesc}
          //        entry[cover.CoverName.replaceAll(" ","")] = this.productItem[cover.CoverName.replaceAll(" ","")];
          //     }
          //     let subEntry = this.getCommonEntry('222',"Glass",entry,cover);
          //     if(subEntry) obj.SectionList.push(subEntry);
          //   }
          // }
          // let TheftCoverList = this.sectionDropdownList.find(ele=>ele.Code=='220')?.CoverList;
          // if(TheftCoverList){
          //   for(let cover of TheftCoverList){
          //     if(j==this.tabIndex){
          //       if(this.productItem.CategoryId)  entry['CategoryId'] = this.productItem.CategoryId;
          //       if(this.IndustryId){entry['IndustryType'] = this.IndustryId;entry["IndustryTypeDesc"]= this.industryTypeList.find(ele=>ele.Code==this.IndustryId)?.CodeDesc}
          //        entry[cover.CoverName.replaceAll(" ","")] = this.productItem[cover.CoverName.replaceAll(" ","")];
          //     }
          //     let subEntry = this.getCommonEntry('220',"Theft",entry,cover);
          //     if(subEntry) obj.SectionList.push(subEntry);
          //   }
          // }
          // let SBCoverList = this.sectionDropdownList.find(ele=>ele.Code=='225')?.CoverList;
          // if(SBCoverList){
          //   for(let cover of SBCoverList){
          //     if(j==this.tabIndex){
          //       if(this.productItem.CategoryId)  entry['CategoryId'] = this.productItem.CategoryId;
          //       if(this.IndustryId){entry['IndustryType'] = this.IndustryId;entry["IndustryTypeDesc"]= this.industryTypeList.find(ele=>ele.Code==this.IndustryId)?.CodeDesc}
          //        entry[cover.CoverName.replaceAll(" ","")] = this.productItem[cover.CoverName.replaceAll(" ","")];
          //     }
          //     let subEntry = this.getCommonEntry('225',"Stated Benefits",entry,cover);
          //     if(subEntry) obj.SectionList.push(subEntry);
          //   }
          // }
          let UmbrellaCoverList = this.sectionDropdownList.find(ele => ele.Code == '224')?.CoverList;
          if (UmbrellaCoverList) {
            for (let cover of UmbrellaCoverList) {
              if (j == this.tabIndex) {
                if (this.productItem.CategoryId) entry['CategoryId'] = this.productItem.CategoryId;
                if (this.IndustryId) { entry['IndustryType'] = this.IndustryId; entry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
                entry[cover.CoverName.replaceAll(" ", "")] = this.productItem[cover.CoverName.replaceAll(" ", "")];
              }
              let subEntry = this.getCommonEntry('224', "Umbrella Liability", entry, cover);
              if (subEntry) obj.SectionList.push(subEntry);
            }
          }
          let PowerCoverList = this.sectionDropdownList.find(ele => ele.Code == '188')?.CoverList;
          if (PowerCoverList) {
            for (let cover of PowerCoverList) {
              if (j == this.tabIndex) {
                if (this.productItem.CategoryId) entry['CategoryId'] = this.productItem.CategoryId;
                if (this.IndustryId) { entry['IndustryType'] = this.IndustryId; entry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
                entry[cover.CoverName.replaceAll(" ", "")] = this.productItem[cover.CoverName.replaceAll(" ", "")];
              }
              let subEntry = this.getCommonEntry('188', "Power Surge", entry, cover);
              if (subEntry) obj.SectionList.push(subEntry);
            }
          }
          let AdditionalClaims = this.sectionDropdownList.find(ele => ele.Code == '201')?.CoverList;
          if (AdditionalClaims) {
            for (let cover of AdditionalClaims) {
              if (j == this.tabIndex) {
                if (this.productItem.CategoryId) entry['CategoryId'] = this.productItem.CategoryId;
                if (this.IndustryId) { entry['IndustryType'] = this.IndustryId; entry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
                entry[cover.CoverName.replaceAll(" ", "")] = this.productItem[cover.CoverName.replaceAll(" ", "")];
              }
              let subEntry = this.getCommonEntry('201', "Additional Claims", entry, cover);
              if (subEntry) obj.SectionList.push(subEntry);
            }
          }
          if (this.productId != '67') {
            let GoodsTransitList = this.sectionDropdownList.find(ele => ele.Code == '46')?.CoverList;
            if (GoodsTransitList) {
              for (let cover of GoodsTransitList) {
                if (j == this.tabIndex) {
                  if (this.productItem.BuildingUsageId) { entry['BuildingUsageId'] = this.productItem.BuildingUsageId; entry['BuildingUsageDesc'] = this.categoryList.find(ele => ele.Code == this.productItem.BuildingUsageId)?.CodeDesc; }
                  if (this.productItem.CategoryId) entry['CategoryId'] = this.productItem.CategoryId;
                  if (this.productItem.GoodsLimit) entry['ContentDesc'] = this.productItem.GoodsLimit;
                  entry['ContentId'] = null
                  if (this.IndustryId) { entry['IndustryType'] = this.IndustryId; entry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
                  entry[cover.CoverName.replaceAll(" ", "")] = this.productItem[cover.CoverName.replaceAll(" ", "")];
                }
                let subEntry = this.getCommonEntry('46', "Goods in Transit", entry, cover);
                if (subEntry) obj.SectionList.push(subEntry);
              }
            }
          }
          let MotorList = this.sectionDropdownList.find(ele => ele.Code == '50')?.CoverList;
          if (MotorList) {
            for (let cover of MotorList) {
              if (j == this.tabIndex) {
                if (this.productItem.CategoryId) entry['CategoryId'] = this.productItem.CategoryId;
                if (this.IndustryId) { entry['IndustryType'] = this.IndustryId; entry["IndustryTypeDesc"] = this.industryTypeList.find(ele => ele.Code == this.IndustryId)?.CodeDesc }
                entry[cover.CoverName.replaceAll(" ", "")] = this.productItem[cover.CoverName.replaceAll(" ", "")];
              }
              let subEntry = this.getCommonEntry('50', "Motor", entry, cover);
              if (subEntry) obj.SectionList.push(subEntry);
            }
          }
        }

        if (obj.SectionList.length != 0) {

          locationList.push(obj);
        }
        j += 1;
        if (j == this.locationList.length) {
          console.log("FInal Location", locationList)
          ReqObj.LocationList = locationList;
          this.onFinalSubmit(ReqObj, type);
        }
      }
    }
    //}
  }
  InsertEnginnerInfo(){
  let obj=[];
  let payload;
  for(let i=0; i< this.locationList.length;i++){
    payload = {
      "ProductId": this.productId,
      "AnnualOpen": this.locationList[i].CARAnnual,
      "PrincipalOwner": this.locationList[i].CARPrincipal,
      "Description": this.locationList[i].CARDescription,
      "LocationId": i + 1,
      "RequestReferenceNo": this.requestReferenceNo,
      "QuoteNo": this.quoteNo,
      "PeriodOfActivity": this.locationList[i].CARPeriodOfActivity,
      "StartDate": this.datePipe.transform(this.locationList[i].CARStartDate,'dd/MM/yyyy'),
      "YearOfManufacture": null,
      "Manufacture": null,
      "EngineNumber":null,
      "SerialNumber": null,
      "OwnershipTypeId": null,
      "OwnershipDesc": null,
      "BasisOfValuationId": null,
      "BasisOfValuationDesc": null,
      "ConstructionType": null,
      "LocationName": this.locationList[i].CARLocationName
    }
    obj.push(payload)
  }
 
  let urlLink = `${this.motorApiUrl}api/InsertEngineerInfo`;
  this.sharedService.onPostMethodSync(urlLink, obj).subscribe(
    (data: any) => {
      console.log(data);
      if(data.Result){
        this.router.navigate(['/quotation/plan/premium-details']);
      }
    },
    (err) => { },
  );
  }
  getCommonEntry(sectionID, sectionName, entry, cover) {
    let subEntry = null;
    if (entry[cover.CoverName.replaceAll(" ", "")] != null && entry[cover.CoverName.replaceAll(" ", "")] != '' && entry[cover.CoverName.replaceAll(" ", "")] != '0.0' && entry[cover.CoverName.replaceAll(" ", "")] != 0) {
      subEntry = {
        "SectionId": sectionID,
        "CoverId": cover.CoverId,
        "SectionName": sectionName,
        "ContentDesc": entry?.ContentDesc,
        "contentId": entry?.ContentId,
        "CategoryId": entry?.CategoryId,
        "CategoryDesc": entry?.CategoryDesc,
        "BuildingUsageId": entry?.BuildingUsageId,
        "BuildingUsageDesc": entry?.BuildingUsageDesc,
        "IndustryType": entry.IndustryType,
        "IndustryTypeDesc": entry.IndustryTypeDesc,
        "SumInsured": entry[cover.CoverName.replaceAll(" ", "")],
        "Status": "Y"
      }
      if (sectionID == '223') subEntry['DescriptionOfRisk'] = entry[cover.CoverName.replaceAll(" ", "") + 'Desc']
      return subEntry;
    }
    else return subEntry;
  }
  onCheckSection(index) {
    this.onSubmitDomesticDetails('Save')
  }
  validationPop(data) {
    Swal.fire({
      title: '<strong>Form Validations</strong>',
      icon: 'info',
      html:
        `<ul class="list-group errorlist">
                 Please Select ${data}
              </ul>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-down"></i> Errors!',
      confirmButtonAriaLabel: 'Thumbs down, Errors!',
    })
  }
  validationPopSI(data) {
    Swal.fire({
      title: '<strong>Form Validations</strong>',
      icon: 'info',
      html:
        `<ul class="list-group errorlist">
                 Please Enter SumInsured (${data})
              </ul>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-down"></i> Errors!',
      confirmButtonAriaLabel: 'Thumbs down, Errors!',
    })
  }
  emptyValidation() {
    let i = 0;
    if (this.productId == '66' || this.productId == '67') {
      let fieldList = this.primaryfields[0].fieldGroup;
      console.log("Final Fields", fieldList, this.primaryfields)
      for (let field of fieldList) {
        if ((this.productItem[field.key] == '' || this.productItem[field.key] == null || this.productItem[field.key] == undefined) && field.props.required) {
          i += 1; field['templateOptions']['errors'] = true;
          field['props']['errors'] = true;
          this.form.controls[field.key].errors = true;
          this.form.controls[field.key].touched = true;
        }
        else {
          field['templateOptions']['errors'] = false;
          field['props']['errors'] = false;
          this.form.controls[field.key].errors = false;
          this.form.controls[field.key].touched = false;
        }
      }
      if (this.productId == '67' && this.BIValue == 'Y') {
        let fieldList = this.interruptionfields[0].fieldGroup;
        for (let field of fieldList) {
          if ((this.productItem[field.key] == '' || this.productItem[field.key] == null || this.productItem[field.key] == undefined) && field.props.required) {
            i += 1; field['templateOptions']['errors'] = true;
            field['props']['errors'] = true;
            this.form.controls[field.key].errors = true;
            this.form.controls[field.key].touched = true;
          }
          else {
            field['templateOptions']['errors'] = false;
            field['props']['errors'] = false;
            this.form.controls[field.key].errors = false;
            this.form.controls[field.key].touched = false;
          }
        }
      }
    }
    if (this.productId == '68') {
      console.log('FieldList', this.fieldEE)
      let fieldList = this.fieldEE[0].fieldGroup[0].fieldGroup[0].fieldGroup[1].fieldGroup[0].fieldGroup;
      for (let field of fieldList) {
        if (field.key) {
          if (field.props.required && (this.productItem[field.key] == '' || this.productItem[field.key] == null || this.productItem[field.key] == undefined)) {
            i += 1; field['templateOptions']['errors'] = true;
            field['props']['errors'] = true;
            this.form.controls[field.key].errors = true;
            this.form.controls[field.key].touched = true;
          }
          else {
            field['templateOptions']['errors'] = false;
            field['props']['errors'] = false;
            this.form.controls[field.key].errors = false;
            this.form.controls[field.key].touched = false;
          }
        }
      }
    }
    if (this.productId == '16' || this.productId == '70') {
      let fieldList = [];
      if (this.productId == '16') fieldList = this.fieldMoney[0].fieldGroup[0].fieldGroup;
      if (this.productId == '70') fieldList = this.fieldAccidentalDamage[0].fieldGroup[0].fieldGroup;
      console.log("Fields", this.fieldMoney, fieldList)
      for (let field of fieldList) {
        if (field.key) {
          if (field.templateOptions.required && (this.productItem[field.key] == '' || this.productItem[field.key] == null || this.productItem[field.key] == undefined || this.productItem[field.key] == '0')) {
            i += 1; field['templateOptions']['errors'] = true;
            field['props']['errors'] = true;
            this.form.controls[field.key].errors = true;
            this.form.controls[field.key].touched = true;
          }
          else {
            field['templateOptions']['errors'] = false;
            field['props']['errors'] = false;
            this.form.controls[field.key].errors = false;
            this.form.controls[field.key].touched = false;
          }
        }
      }
    }
    if (this.productId == '75') {
      if (this.form.controls['DeteriorationOfStock']?.value == '' || this.form.controls['DeteriorationOfStock']?.value == null || this.form.controls['DeteriorationOfStock']?.value == undefined || this.form.controls['DeteriorationOfStock']?.value == '0') { i += 1; this.deteriorationOfStockError = true; }
      else { this.deteriorationOfStockError = false; }
      if (this.form.controls['DeteriorationOfStockDesc']?.value == '' || this.form.controls['DeteriorationOfStockDesc']?.value == null || this.form.controls['DeteriorationOfStockDesc']?.value == undefined || this.form.controls['DeteriorationOfStockDesc']?.value == '0') { i += 1; this.deteriorationOfStockDescError = true; }
      else { this.deteriorationOfStockDescError = false; }
    }
    if(this.productId == '83'){
      if(this.showMaxLimitedError) i+=1;
    }
    if(this.productId == '82'){
      if(this.showMaxLimitError) i+=1;
    }
    // if(this.productItem.WallType){
    //   if(this.productItem.BuildingSuminsured=='0' || this.productItem.BuildingSuminsured==0 || this.productItem.BuildingSuminsured==''){
    //     this.validationPopSI("Building");
    //     return false;
    //   }else {
    //     i+=1;
    //   }
    // }
    // if(this.productItem.ContentConstructionType){
    //   if(this.productItem.ContentSuminsured=='0' || this.productItem.ContentSuminsured==0 || this.productItem.ContentSuminsured==''){
    //     this.validationPopSI("Content");
    //     return false;
    //   }
    //   else {
    //     i+=1;
    //   }
    // }
    // if(this.productItem.PlantConstructionType){
    //   if(this.productItem.PlantSumInsured=='0' || this.productItem.PlantSumInsured==0 || this.productItem.PlantSumInsured==''){
    //     this.validationPopSI("Plant & Machinery");
    //     return false;
    //   }else {
    //     i+=1;
    //   }
    // }
    //  if(this.productItem.MiscellaneousConstructionType){
    //   if(this.productItem.MiscellaneousSumInsured=='0' || this.productItem.MiscellaneousSumInsured==0 || this.productItem.MiscellaneousSumInsured==''){
    //     this.validationPopSI("Miscellaneous");
    //     return false;
    //   }else {
    //     i+=1;
    //   }
    // }
    //  if(this.productItem.TradeConstructionType){
    //   if(this.productItem.TradeSumInsured=='0' || this.productItem.TradeSumInsured==0 || this.productItem.TradeSumInsured==''){
    //     this.validationPopSI("Stock In Trade");
    //     return false;
    //   }else {
    //     i+=1;
    //   }
    // }
    //  if(this.productItem.FirstLossBasis){
    //   if(this.productItem.FirstLossBasisSumInsured=='0' || this.productItem.FirstLossBasisSumInsured==0 || this.productItem.FirstLossBasisSumInsured==''){
    //     this.validationPopSI("Leakage Extension");
    //     return false;
    //   }else {
    //     i+=1;
    //   }
    // }
    //  if(this.productItem.InflationConstructionType){
    //   if(this.productItem.InflationSumInsured=='0' || this.productItem.InflationSumInsured==0 || this.productItem.InflationSumInsured==''){
    //     this.validationPopSI("Additonal Inflation Margin");
    //     return false;
    //   }else {
    //     i+=1;
    //   }
    // }
    if (i == 0) { return true; }
    else { return false; }
  }
  onChangeBusiness() {
    let entry = this.productItem.WallType;
    let fieldList = this.field1Build[0].fieldGroup[0].fieldGroup;
    for (let field of fieldList) {
      if (field.key == 'BuildingSumInsured') {
        if (entry != '' && entry != '0' && entry != undefined && entry != null) { field.props.disabled = false; }
        else { this.productItem.BuildingSumInsured = '0'; field.formControl.setValue('0'); field.props.disabled = true; }
      }
    }
  }
  onKeyPressContent() {
    let entry = this.productItem.ContentConstructionType;
    let fieldList = this.fieldContent[0].fieldGroup[0].fieldGroup;
    for (let field of fieldList) {
      if (field.key == 'ContentSuminsured') {
        if (entry != '' && entry != '0' && entry != undefined && entry != null) { field.props.disabled = false; }
        else { this.productItem.ContentSuminsured = '0'; field.formControl.setValue('0'); field.props.disabled = true; }
      }
    }
  }
  onKeyPressPlant() {
    let entry = this.productItem.PlantConstructionType;
    let fieldList = this.fieldPlant[0].fieldGroup[0].fieldGroup;
    for (let field of fieldList) {
      if (field.key == 'PlantSumInsured') {
        if (entry != '' && entry != '0' && entry != undefined && entry != null) { field.props.disabled = false; }
        else { this.productItem.PlantSumInsured = '0'; field.formControl.setValue('0'); field.props.disabled = true; }
      }
    }

  }
  onKeyPressMiscellaneous() {
    let entry = this.productItem.MiscellaneousConstructionType;
    let fieldList = this.fieldMiscellaneous[0].fieldGroup[0].fieldGroup;
    for (let field of fieldList) {
      if (field.key == 'MiscellaneousSumInsured') {
        if (entry != '' && entry != '0' && entry != undefined && entry != null) { field.props.disabled = false; }
        else { this.productItem.MiscellaneousSumInsured = '0'; field.formControl.setValue('0'); field.props.disabled = true; }
      }
    }

  }
  onKeyPressTrade() {
    let entry = this.productItem.TradeConstructionType;
    let fieldList = this.fieldTrade[0].fieldGroup[0].fieldGroup;
    for (let field of fieldList) {
      if (field.key == 'TradeSumInsured') {
        if (entry != '' && entry != '0' && entry != undefined && entry != null) { field.props.disabled = false; }
        else { this.productItem.TradeSumInsured = '0'; field.formControl.setValue('0'); field.props.disabled = true; }
      }
    }

  }
  onKeyPressLeakage() {
    let entry = this.productItem.FirstLossBasis;
    let fieldList = this.fieldLeakage[0].fieldGroup[0].fieldGroup;
    for (let field of fieldList) {
      if (field.key == 'FirstLossBasisSumInsured') {
        if (entry != '' && entry != '0' && entry != undefined && entry != null) { field.props.disabled = false; }
        else { this.productItem.FirstLossBasisSumInsured = '0'; field.formControl.setValue('0'); field.props.disabled = true; }
      }
    }

  }
  onKeyPressInflation() {
    let entry = this.productItem.InflationConstructionType;
    let fieldList = this.fieldInflation[0].fieldGroup[0].fieldGroup;
    for (let field of fieldList) {
      if (field.key == 'InflationSumInsured') {
        if (entry != '' && entry != '0' && entry != undefined && entry != null) { field.props.disabled = false; }
        else { this.productItem.InflationSumInsured = '0'; field.formControl.setValue('0'); field.props.disabled = true; }
      }
    }
  }
  checkLocationValidation() {
    let i = 0, j = 0;
    for (let entry of this.locationList) {
      if (j == this.tabIndex) {
        if (entry.LocationName == null || entry.LocationName == '') { entry['LocationNameError'] = true; i += 1; }
        else { entry['LocationNameError'] = false; }
        if (entry.BuildingAddress == null || entry.BuildingAddress == '') { entry['BuildingAddressError'] = true; i += 1; }
        else { entry['BuildingAddressError'] = false; }
        if (entry.CoversRequired == 'B' || entry.CoversRequired == 'BC') {
         if(this.productId=='19'){
           for (let build of entry.FireList) {
            if (build.WallType == null || build.WallType == '') { build['WallTypeError'] = true; i += 1 } else { build['WallTypeError'] = false; }
            if (build.RoofType == null || build.RoofType == '') { build['RoofTypeError'] = true; i += 1 } else { build['RoofTypeError'] = false; }
            if (build.BuildingUsageId == null || build.BuildingUsageId == '') { build['BuildingUsageIdError'] = true; i += 1 } else { build['BuildingUsageIdError'] = false; }
            if (build.SumInsured == null || build.SumInsured == '' || build.SumInsured == 0) { build['SumInsuredError'] = true; i += 1 } else { build['SumInsuredError'] = false; }
          }
         }
        }
        if (entry.CoversRequired == 'C' || entry.CoversRequired == 'BC') {
          if (j == this.tabIndex) { entry['ContentSuminsured'] = this.productItem.ContentSuminsured }
          if (entry.CoversRequired == 'C') { if (entry.ContentSuminsured == null || entry.ContentSuminsured == '' || entry.ContentSuminsured == 0) { entry['ContentSuminsuredError'] = true; i += 1 } else { entry['ContentSuminsuredError'] = false; } }
          else { entry['ContentSuminsuredError'] = false; }
        }
      }
      j += 1;
      console.log(entry, "entryentry",j,i);

      if (j == this.locationList.length) return i == 0;
    }
  }
  onfinalsave(type) {
    let buildingList = [];
    let i = 0;
    if (this.TableRowBuilding.length != 0) {
      for (let entry of this.TableRowBuilding) {
        if (entry.BuildingAddress == undefined || entry.BuildingAddress == null) entry['BuildingAddress'] = null;
        let obj = {
          "SectionId": "1",
          "Status": "Y",
          "RiskId": entry.RiskId,
          "RoofType": entry.RoofType,
          "WallType": entry.WallType,
          "BuildingBuildYear": '2024',
          "BuildingOwnerYn": "N",
          "FirstLossPayee": entry.FirstLossPayee,
          "BuildingSumInsured": entry.BuildingSumInsured,
          "BuildingUsageId": entry.BuildingUsageId,
          "WaterTankSi": this.productItem?.WaterTankSi,
          "ArchitectsSi": this.productItem?.ArchitectsSi,
          "LocationName": entry?.LocationName,
          "LossOfRentSi": this.productItem?.LossOfRentSi,
          "TypeOfProperty": this.productItem?.TypeOfProperty,
          "BuildingAddress": entry?.BuildingAddress
        }
        buildingList.push(obj);
        i += 1;
      }
    }
    let endorsementDate = null, EndorsementEffectiveDate = null, EndorsementRemarks = null,
      EndorsementType = null, EndorsementTypeDesc = null, EndtCategoryDesc = null, EndtCount = null,
      EndtPrevPolicyNo = null, EndtPrevQuoteNo = null, EndtStatus = null, IsFinanceEndt = null, OrginalPolicyNo = null;
    if (this.endorsementDetails) {
      endorsementDate = this.endorsementDetails['EndorsementDate'];
      EndorsementEffectiveDate = this.endorsementDetails['EndorsementEffectiveDate'];
      EndorsementRemarks = this.endorsementDetails['EndorsementRemarks'];
      EndorsementType = this.endorsementDetails['EndorsementType'];
      EndorsementTypeDesc = this.endorsementDetails['EndorsementTypeDesc'];
      EndtCategoryDesc = this.endorsementDetails['EndtCategoryDesc'];
      EndtCount = this.endorsementDetails['EndtCount'];
      EndtPrevPolicyNo = this.endorsementDetails['EndtPrevPolicyNo'];
      EndtPrevQuoteNo = this.endorsementDetails['EndtPrevQuoteNo'];
      EndtStatus = this.endorsementDetails['EndtStatus'];
      IsFinanceEndt = this.endorsementDetails['IsFinanceEndt'];
      OrginalPolicyNo = this.endorsementDetails['OrginalPolicyNo'];
    }
    let ReqObj = {
      "CreatedBy": this.loginId,
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "EndorsementDate": endorsementDate,
      "EndorsementEffectiveDate": EndorsementEffectiveDate,
      "EndorsementRemarks": EndorsementRemarks,
      "EndorsementType": EndorsementType,
      "EndorsementTypeDesc": EndorsementTypeDesc,
      "EndtCategoryDesc": EndtCategoryDesc,
      "EndtCount": EndtCount,
      "EndtPrevPolicyNo": EndtPrevPolicyNo,
      "EndtPrevQuoteNo": EndtPrevQuoteNo,
      "EndtStatus": EndtStatus,
      "IsFinanceEndt": IsFinanceEndt,
      "OrginalPolicyNo": OrginalPolicyNo,
      "BuildingDetails": buildingList,

      "AllRiskDetails": [
        {
          "SectionId": "3",
          "AllriskSumInsured": this.productItem?.AllriskSumInsured
        }],
      "DomesticServant": [
        {
          "SectionId": "106",
          "TotalNoOfEmployees": "1",
          "LiabilityOccupationId": null,
          "EmpLiabilitySi": this.productItem.DomesticServantSi,
          "Status": "Y"
        }
      ],
      "EmployeeLiabilityDetails": [
        {
          "SectionId": "36",
          "TotalNoOfEmployees": "1",
          "LiabilityOccupationId": this.productItem.LiabilityOccupationId,
          "EmpLiabilitySi": this.productItem.EmpLiabilitySi,
          "Status": "Y",
        }
      ],
      "ContentDetails": {
        "SectionId": "47",
        "ContentSuminsured": this.productItem?.ContentSuminsured,
        "Status": "Y",
        "JewellerySi": this.productItem?.JewellerySi,
        "PaitingsSi": this.productItem?.PaitingsSi,
        "CarpetsSi": this.productItem?.CarpetsSi,
        "EquipmentSi": this.productItem?.EquipmentSis,
      },
      "ElectronicEquipmentDetails": null,
      "PersonalAccidentDetails": [
        {
          "SectionId": "35",
          "TotalNoOfPersons": "1",
          "Status": "Y",
          "OccupationType": this.productItem.OccupationType,
          "OccupationId": this.productItem.OccupationType,
          "SumInsured": this.productItem.PersonalAccidentSuminsured,
          "OtherOccupation": this.productItem.otheroptionPer,
        }
      ]
    }
    if (this.TableRowEE.length != 0) {
      let filterList = this.TableRowEE.filter(ele => ele.RiskId != null && ele.RiskId != '' && ele.SumInsured != null && ele.SumInsured != '0' && ele.SumInsured != 0);
      if (filterList.length != 0) {
        ReqObj['ElectronicEquipment'] = {
          "SectionId": "76",
          "ContentSuminsured": this.productItem.ElectronicEquipmentSI,
          "Status": "Y",
          "JewellerySi": "0",
          "PaitingsSi": "0",
          "CarpetsSi": "0",
          "EquipmentSi": "0"
        };

      }
      else ReqObj['ElectronicEquipment'] = null;
    }
    else ReqObj['ElectronicEquipment'] = null;
    if (this.endorsementSection) {
      if (this.productItem?.Status == undefined || this.productItem?.Status == null || this.productItem?.Status == 'Y') {
        ReqObj['Status'] = 'E';
      }
      else {
        ReqObj['Status'] = this.productItem?.Status;
      }
      ReqObj['PolicyNo'] = this.endorsePolicyNo
    }
    else {
      ReqObj['Status'] = 'Y';
    }
    if ((this.productItem?.BuildingSuminsured == null || this.productItem?.BuildingSuminsured == undefined || this.productItem?.BuildingSuminsured == '') && this.Buildings != 'Y') {
      ReqObj['BuildingDetails'] = null;
    }
    if (this.coversreuired != 'B') {
      if (this.productItem?.ContentSuminsured == null || this.productItem?.ContentSuminsured == undefined || this.productItem?.ContentSuminsured == '') {
        ReqObj['ContentDetails'] = null;
      }
    }
    if (!this.DomesticServant) { ReqObj['DomesticServant'] = null; }
    if (this.productItem?.AllriskSumInsured == null || this.productItem?.AllriskSumInsured == undefined || this.productItem?.AllriskSumInsured == '') {
      ReqObj['AllRiskDetails'] = null;
    }
    if (this.productItem?.OccupationType == null || this.productItem?.OccupationType == undefined || this.productItem?.OccupationType == '') {
      if (this.productItem?.PersonalAccidentSuminsured == null || this.productItem?.PersonalAccidentSuminsured == undefined || this.productItem?.PersonalAccidentSuminsured == '' || this.productItem?.PersonalAccidentSuminsured == '0') {
        ReqObj['PersonalAccidentDetails'] = null;
      }
    }
    if (this.productItem?.LiabilityOccupationId == null || this.productItem?.LiabilityOccupationId == undefined || this.productItem?.LiabilityOccupationId == '') {
      if (this.productItem?.EmpLiabilitySi == null || this.productItem?.EmpLiabilitySi == undefined || this.productItem?.EmpLiabilitySi == '' || this.productItem?.EmpLiabilitySi == '0') {
        ReqObj['EmployeeLiabilityDetails'] = null;
      }
    }
    if (this.coversreuired != 'BC' && this.coversreuired != 'B') {
      ReqObj['BuildingDetails'] = null;
    }
    if (this.coversreuired == 'B') { ReqObj['ContentDetails'] = null; }

    if ((this.coversreuired == 'B' || this.coversreuired == 'BC')) {
      if (ReqObj['EmployeeLiabilityDetails'] == null && ReqObj['PersonalAccidentDetails'] == null && ReqObj['BuildingDetails'] == null && ReqObj['ContentDetails'] == null && ReqObj['AllRiskDetails'] == null) {
        this.errorproceed(1);
      }
      else if (ReqObj['BuildingDetails'] != null) {
        //if(ReqObj.BuildingDetails[i]?.BuildingSumInsured==0 || ReqObj.BuildingDetails[i]?.BuildingSumInsured=='0' || ReqObj.BuildingDetails[i]?.BuildingSumInsured==null){
        if (ReqObj.BuildingDetails.length == 0 && type != 'delete') {
          this.errorproceed(2);
        }
        else {
          if (type == 'delete') ReqObj['BuildingDetails'] = null;
          this.finalSave(ReqObj, type);
        }
      }
      else if ((this.coversreuired == 'C') && (this.productItem?.ContentSuminsured == null || this.productItem?.ContentSuminsured == undefined || this.productItem?.ContentSuminsured == '')) {
        this.error1proceed();
      }
      else this.finalSave(ReqObj, type);
    }
    else if ((this.coversreuired == 'C') && (this.productItem?.ContentSuminsured == null || this.productItem?.ContentSuminsured == undefined || this.productItem?.ContentSuminsured == '')) {
      this.error1proceed();
    }
    else if (this.Buildings == 'N') {
      if (ReqObj['EmployeeLiabilityDetails'] == null && ReqObj['PersonalAccidentDetails'] == null && ReqObj['ContentDetails'] == null && ReqObj['AllRiskDetails'] == null) {
        this.errorproceed(1);
      }
      else if (ReqObj['BuildingDetails'] != null) {
        //if(ReqObj.BuildingDetails[i]?.BuildingSumInsured==0 || ReqObj.BuildingDetails[i]?.BuildingSumInsured=='0' || ReqObj.BuildingDetails[i]?.BuildingSumInsured==null){
        if (ReqObj.BuildingDetails.length == 0) {
          this.errorproceed(2);
        }
        // else if(ReqObj.BuildingDetails[i]?.BuildingBuildYear=='' || ReqObj.BuildingDetails[i]?.BuildingSumInsured==null){
        //   this.errorproceed(3);
        // }
        else {
          this.finalSave(ReqObj, type);
        }
      }
      else this.finalSave(ReqObj, type);
    }
    else this.finalSave(ReqObj, type);
  }
  finalSave(ReqObj, RequestType) {
    let urlLink = `${this.motorApiUrl}api/saveAllSection`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Result) {
          if (data?.ErrorMessage == null) {
            if (data.Result.length != 0) {
              this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
              if (RequestType == 'Save') this.visibleBuilding = false;
              else {
                if (this.TableRowBuilding.length == 0) {
                  this.TableRowBuilding = [{
                    id: 1,
                    BuildingUsageId: '',
                    BuildingBuildYear: '',
                    FirstLossPayee: '',
                    BuildingAddress: '',
                    WallType: '',
                    RoofType: '',
                    BuildingSumInsured: 0,
                    LocationName: '',
                  }]
                  this.currentBuildingRowIndex = this.TableRowBuilding.length - 1;
                }
                sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
                this.onCalculate(data.Result, null);
              }
              //this.onCheckUWQuestionProceed(data.Result);
            }
          }
          // }
          // else {
          //   this.nextslide=false;
          // }
        }
      },
      (err) => { },
    );
  }
  errorproceed(type) {
    let text = '';
    if (type == 1) text = ' Please Enter One Section Details';
    else if (type == 2) text = 'Please Enter Valid Building Sum Insured';
    else if (type == 3) text = 'Please Enter Valid Building Year';
    Swal.fire({
      title: '<strong>Form Validations</strong>',
      icon: 'info',
      html:
        `<ul class="list-group errorlist">
                    ${text}
              </ul>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-down"></i> Errors!',
      confirmButtonAriaLabel: 'Thumbs down, Errors!',
    })
  }

  error1proceed() {
    Swal.fire({
      title: '<strong>Form Validations</strong>',
      icon: 'info',
      html:
        `<ul class="list-group errorlist">
                 Please Enter Content Details
              </ul>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-down"></i> Errors!',
      confirmButtonAriaLabel: 'Thumbs down, Errors!',
    })
  }
  onprofessionalsave() {
    let occupations: any;
    if (this.productItem?.ProfessionalOccupation != null && this.productItem?.ProfessionalOccupation != '' && this.productItem?.ProfessionalOccupation != undefined) {
      let occ = this.occupationList.find(ele => ele.Code == this.productItem?.ProfessionalOccupation)
      if (occ) {
        occupations = occ.label;
      }
    }
    let endorsementDate = null, EndorsementEffectiveDate = null, EndorsementRemarks = null,
      EndorsementType = null, EndorsementTypeDesc = null, EndtCategoryDesc = null, EndtCount = null,
      EndtPrevPolicyNo = null, EndtPrevQuoteNo = null, EndtStatus = null, IsFinanceEndt = null, OrginalPolicyNo = null;
    if (this.endorsementDetails) {
      endorsementDate = this.endorsementDetails['EndorsementDate'];
      EndorsementEffectiveDate = this.endorsementDetails['EndorsementEffectiveDate'];
      EndorsementRemarks = this.endorsementDetails['EndorsementRemarks'];
      EndorsementType = this.endorsementDetails['EndorsementType'];
      EndorsementTypeDesc = this.endorsementDetails['EndorsementTypeDesc'];
      EndtCategoryDesc = this.endorsementDetails['EndtCategoryDesc'];
      EndtCount = this.endorsementDetails['EndtCount'];
      EndtPrevPolicyNo = this.endorsementDetails['EndtPrevPolicyNo'];
      EndtPrevQuoteNo = this.endorsementDetails['EndtPrevQuoteNo'];
      EndtStatus = this.endorsementDetails['EndtStatus'];
      IsFinanceEndt = this.endorsementDetails['IsFinanceEndt'];
      OrginalPolicyNo = this.endorsementDetails['OrginalPolicyNo'];
    }
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "ProductId": this.productId,
      "InsuranceId": this.insuranceId,
      "CreatedBy": this.loginId,
      "OccupationId": this.productItem?.ProfessionalOccupation,
      "OccupationDesc": occupations,
      "EndorsementDate": endorsementDate,
      "EndorsementEffectiveDate": EndorsementEffectiveDate,
      "EndorsementRemarks": EndorsementRemarks,
      "EndorsementType": EndorsementType,
      "EndorsementTypeDesc": EndorsementTypeDesc,
      "EndtCategoryDesc": EndtCategoryDesc,
      "EndtCount": EndtCount,
      "EndtPrevPolicyNo": EndtPrevPolicyNo,
      "EndtPrevQuoteNo": EndtPrevQuoteNo,
      "EndtStatus": EndtStatus,
      "IsFinanceEndt": IsFinanceEndt,
      "OrginalPolicyNo": OrginalPolicyNo,
      "PrincipalDetails":
      {
        "SectionId": "106",
        "ProfessionalType": '1',
        "EmployeeCount": this.productItem?.EmployeeCounts,
        "IndemnityType": this.productItem?.IndemnityTypes,
        "IndemnitySi": this.productItem?.ProfessionalSI,
        "GrossIncome": this.productItem?.GISI
      }
      ,
      "ProffesoionalStaffDetails":
      {
        "SectionId": "107",
        "ProfessionalType": '2',
        "EmployeeCount": this.productItem.ProfessionalStaff,
      }
      ,
      "NonProffesoionalStaffDetails":
      {
        "SectionId": "108",
        "ProfessionalType": '3',
        "EmployeeCount": this.productItem.NonProfessionalStaff
      }

      // "RequestReferenceNo": this.requestReferenceNo,
      // "RiskId": "1",
      // "ProductId": this.productId,
      // "SectionId": "106",
      // "InsuranceId": this.insuranceId,
      // "CreatedBy":this.loginId,
      // "OccupationId":this.productItem?.ProfessionalOccupation,
      // "OccupationDesc":"Adocate",
      // "ProfessionalType":this.productItem?.ProfessionalType,
      //  "EmployeeCount": this.productItem?.EmployeeCounts,
      //  "IndemnityType": this.productItem?.IndemnityTypes,
      //  "IndemnitySi":this.productItem?.ProfessionalSI,
      //  "GrossIncome":this.productItem?.GISI,
      //  "EndorsementDate": endorsementDate,
      //  "EndorsementEffectiveDate": EndorsementEffectiveDate,
      //  "EndorsementRemarks": EndorsementRemarks,
      //  "EndorsementType": EndorsementType,
      //  "EndorsementTypeDesc": EndorsementTypeDesc,
      //  "EndtCategoryDesc": EndtCategoryDesc,
      //  "EndtCount": EndtCount,
      //  "EndtPrevPolicyNo": EndtPrevPolicyNo,
      //  "EndtPrevQuoteNo": EndtPrevQuoteNo,
      //  "EndtStatus": EndtStatus,
      //  "IsFinanceEndt": IsFinanceEndt,
      //  "OrginalPolicyNo": OrginalPolicyNo,

    }
    let urlLink = `${this.motorApiUrl}api/slide7/saveprofindernity`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Result) {
          if (data.Result.length != 0) {
            this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
            sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
            this.onCalculate(data.Result, null);

            //this.onCheckUWQuestionProceed(data.Result);
          }

          // }
          // else {
          //   this.nextslide=false;
          // }
        }
      },
      (err) => { },
    );

  }


  onSavePersonalAccidentDetails() {
    this.subuserType = sessionStorage.getItem('typeValue');
    let quoteStatus = sessionStorage.getItem('QuoteStatus');
    this.requestReferenceNo = sessionStorage.getItem('quoteReferenceNo')
    let appId = "1", loginId = "", brokerbranchCode = "";
    let createdBy = "";
    if (quoteStatus == 'AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRR') {
      // brokerbranchCode = this.commonDetails[0].BrokerBranchCode;
      //   createdBy = this.commonDetails[0].CreatedBy;
    }
    else {
      createdBy = this.loginId;
      if (this.userType != 'Issuer') {
        // this.brokerCode = this.agencyCode;
        // appId = "1"; loginId=this.loginId;
        // brokerbranchCode = this.brokerbranchCode;
      }
      else {
        appId = this.loginId;
        // loginId = this.commonDetails[0].LoginId;
        // loginId = this.updateComponent.brokerLoginId
        // brokerbranchCode = this.commonDetails[0].BrokerBranchCode;
      }
    }
    let emp = [{
      "InsuranceId": this.insuranceId,
      "CreatedBy": createdBy,
      "ProductId": this.productId,
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "SectionId": "35",
      "OccupationType": this.productItem.OccupationType,
      "OccupationId": this.productItem.OccupationType,
      "SumInsured": this.productItem.PersonalAccidentSuminsured,
      "OtherOccupation": this.productItem.otheroptionPer,
      "TotalNoOfPersons": "1",
      "EndorsementDate": this.endorsementDate,
      "EndorsementEffectiveDate": this.endorsementEffectiveDate,
      "EndorsementRemarks": this.endorsementRemarks,
      "EndorsementType": this.endorsementType,
      "EndorsementTypeDesc": this.endorsementTypeDesc,
      "EndtCategoryDesc": this.endtCategoryDesc,
      "EndtCount": this.endtCount,
      "EndtPrevPolicyNo": this.endtPrevPolicyNo,
      "EndtPrevQuoteNo": this.endtPrevQuoteNo,
      "EndtStatus": this.endtStatus,
      "IsFinanceEndt": this.isFinanceEndt,
      "OrginalPolicyNo": this.orginalPolicyNo,

    }]
    if (this.endorsementSection) {
      if (this.productItem?.Status == undefined || this.productItem?.Status == null || this.productItem?.Status == 'Y') {
        emp[0]['Status'] = 'E';
      }
      else {
        emp[0]['Status'] = this.productItem?.Status;
      }
      emp[0]['PolicyNo'] = this.endorsePolicyNo
    }
    else {
      emp[0]['Status'] = 'Y';
    }
    let urlLink = `${this.motorApiUrl}api/slide13/savepersonlaccident`;
    this.sharedService.onPostMethodSync(urlLink, emp).subscribe(
      (data: any) => {
        if (data?.Result) {
          this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
          sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
          this.nextslide3 = true;
          // this.onCalculate(data?.Result,'PersonalAccident');
          // if(type=='proceed'){
          //   if(this.commonDetails){
          //     if(this.commonDetails[0].SectionId !=null && this.commonDetails[0].SectionId.length!=0){
          //       if(!this.commonDetails[0].SectionId.some(ele=>ele=='35')) this.commonDetails[0].SectionId.push('35');
          //     }
          //     else  this.commonDetails[0]['SectionId']=['35'];
          //   }
          //   sessionStorage.setItem('homeCommonDetails', JSON.stringify(this.commonDetails))
          // }
          //  this.onCheckUWQuestionProceed(data.Result,type,formType);
        }
        else {
          this.nextslide3 = false;
        }
      },
      (err) => { },
    );
  }

  getBuildingDetails(type) {

    let ReqObj = {
      // "RequestReferenceNo": this.requestReferenceNo,
      // // "RiskId": "1",
      // "SectionId":  "1"
      // "RequestReferenceNo": this.requestReferenceNo,
      // "SectionId": "1"

      "RequestReferenceNo": this.requestReferenceNo,
      "SectionId": "1"

    }
    let urlLink = `${this.motorApiUrl}api/slide14/getbuilding`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {

          this.productItem.BuildingSuminsured = data?.Result?.BuildingSumInsured;
          this.TableRowBuilding = data?.Result;
          console.log(this.TableRowBuilding, "this.TableRothis.TableRowBuildingwBuilding");

          if (this.TableRowBuilding.length != 0) {
            for (let build of this.TableRowBuilding) {
              build['SavedYN'] = 'Y';
            }
            if (this.TableRowBuilding.length > 1 || (this.TableRowBuilding[0].BuildingSumInsured != null && this.TableRowBuilding[0].BuildingSumInsured != 0)) this.currentBuildingRowIndex = null;
            this.getTotalBuilding();
          }
          console.log("Products in Building", this.productItem);
          if (this.requestReferenceNo) {
            this.editsections('Building');
          }
        }
      },
      (err) => { },
    );
  }
  getAddInfo() {
    if (this.requestReferenceNo != null) {
      let ReqObj = {
        "RequestReferenceNO": this.quoteRefNo,
        "SectionId": "1"
      }
      let urlLink = `${this.motorApiUrl}api/getbuildingdetails`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          if (data.Result) {
            console.log(data.Result, "this.LocationNamethis.LocationName");
            if (this.contentSection) {

              this.onEditLocationDetails(data.Result);
            }
            else {
              let i = 0
              for (i; i < data.Result.length; i++) {

              }
            }
          }

        },
        (err) => { },
      );
    }
    else { if (this.contentSection) this.onEditLocationDetails([]); }
  }

  getDomesticServantDetails(type) {
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "QuoteNo": null,
      "SectionId": "106"
    }
    let urlLink = `${this.motorApiUrl}api/getallpersonalaccident`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          if (data.Result.PersonalDetails) {
            this.currentDSRowIndex = null;
            this.TableRowDS = data.Result.PersonalDetails;
            for (let entry of this.TableRowDS) {
              entry['Name'] = entry?.PersonName;
              entry['SumInsured'] = entry?.Salary;
              entry['Nationality'] = entry?.NationalityId;
              if (entry.RiskId) this.onChangeContentLocation(entry);
            }
            this.getOccupationList('36', 'DomesticServant');
            this.editsections('DomesticServant');
          }
          else {
            this.productItem.LiabilityOccupationId = null; this.productItem.PersonalIntermediarySuminsured = '0'; this.productItem.EmpLiabilitySi = null;
            this.getOccupationList('36', 'DomesticServant');
            this.editsections('DomesticServant');
          }
        }
        this.newselectedIndex += 1;
        this.editsections(type);
      },
      (err) => { },
    );
  }
  getPersonalLiabilityDetails(type) {
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "QuoteNo": null,
      "SectionId": "36"
    }
    let urlLink = `${this.motorApiUrl}api/getallpersonalaccident`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          if (data.Result.PersonalDetails) {
            this.currentPLRowIndex = null;
            this.TableRowPL = data.Result.PersonalDetails;
            if (data.Result.PersonalDetails[0].LiabilityOccupationId != null && data.Result.PersonalDetails[0].LiabilityOccupationId != '') this.productItem.LiabilityOccupationId = data.Result[0].LiabilityOccupationId;
            else this.productItem.LiabilityOccupationId = null;
            for (let entry of this.TableRowPL) {
              entry['Name'] = entry?.PersonName;
              entry['SumInsured'] = entry?.Salary;
              entry['Nationality'] = entry?.NationalityId;
              if (entry.RiskId) this.onChangeContentLocation(entry);
            }
            this.getOccupationList('36', 'PersonalLiability');
            this.editsections('PersonalLiability');
          }
          else {
            this.productItem.LiabilityOccupationId = null; this.productItem.PersonalIntermediarySuminsured = '0'; this.productItem.EmpLiabilitySi = null;
            this.getOccupationList('36', 'PersonalLiability');
            this.editsections('PersonalLiability');
          }
        }
        this.newselectedIndex += 1;
        this.editsections(type);
      },
      (err) => { },
    );
  }

  getPersonalAccidentDetails(type) {
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "QuoteNo": null,
      "SectionId": "35"
    }
    let urlLink = `${this.motorApiUrl}api/getallpersonalaccident`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          if (data.Result.PersonalDetails) {
            this.TableRowPA = data.Result.PersonalDetails;

            this.currentPARowIndex = null;
            //if(data.Result[0].OccupationType!=null)this.productItem.OccupationType = data.Result[0].OccupationType;
            //else this.productItem.OccupationType = null;
            //this.productItem.otheroptionPer=data.Result[0].OtherOccupation;
            for (let entry of this.TableRowPA) {
              entry['Name'] = entry?.PersonName;
              entry['SumInsured'] = entry?.Salary;
              entry['Nationality'] = entry?.NationalityId;
              if (entry.RiskId) this.onChangeContentLocation(entry);
            }
            this.getOccupationList('35', 'PersonalAccident');
            //this.onoccChangepersonal('Direct');
            let entry = data?.Result[0];
            // if(entry.EndorsementDate){
            //   this.endorsementDate = entry?.EndorsementDate;
            //   this.endorsementEffectiveDate = entry?.EndorsementEffectiveDate;
            //   this.endorsementRemarks = entry?.EndorsementRemarks;
            //   this.endorsementType = entry?.EndorsementType;
            //   this.endorsementTypeDesc = entry?.EndorsementTypeDesc;
            //   this.endtCategoryDesc = entry?.EndtCategoryDesc;
            //   this.endtCount = entry?.EndtCount;
            //   this.endtPrevPolicyNo = entry?.EndtPrevPolicyNo;
            //   this.endtPrevQuoteNo = entry?.EndtPrevQuoteNo;
            //   this.endtStatus = entry?.EndtStatus;
            //   this.isFinanceEndt = entry?.IsFinanceEndt;
            //   this.orginalPolicyNo = entry?.OrginalPolicyNo;
            // }
          }
          else {
            this.productItem.OccupationType = null; this.productItem.PersonalAccidentSuminsured = null;
            this.getOccupationList('35', 'PersonalAccident');
          }
          this.editsections(type);
          //this.onoccChangepersonal('Direct');
          this.newselectedIndex += 1;

        }

      },
      (err) => { },
    );
  }


  onSaveBuildingList() {
    if (this.TableRowBuilding.length != 0) {
      let i = 0, j = 0, reqList = [], additionalList = [];
      for (let entry of this.TableRowBuilding) {
        if (entry.BuildingUsageId == null || entry.BuildingUsageId == '' || entry.BuildingUsageId == undefined) { entry['BuildingUsageId'] = '1' }
        if (entry.WallType != null && entry.WallType != '' && entry.WallType != undefined) entry['WallTypeError'] = false;
        else { j += 1; entry['WallTypeError'] = true; }
        if (entry.RoofType != null && entry.RoofType != '' && entry.RoofType != undefined) entry['RoofTypeError'] = false;
        else { j += 1; entry['RoofTypeError'] = true; }
        if (entry.BuildingSumInsured != null && entry.BuildingSumInsured != '' && entry.BuildingSumInsured != undefined && entry.BuildingSumInsured != 0 && entry.BuildingSumInsured != '0') entry['SumInsuredError'] = false;
        else { j += 1; entry['SumInsuredError'] = true; }
        if (entry.LocationName != null && entry.LocationName != '' && entry.LocationName != undefined && entry.LocationName != 0) entry['LocationError'] = false;
        else { j += 1; entry['LocationError'] = true; }
        if (entry.FirstLossPayee != null && entry.FirstLossPayee != '' && entry.FirstLossPayee != undefined && entry.FirstLossPayee != 0) entry['FirstLossPayeeError'] = false;
        else { j += 1; entry['FirstLossPayeeError'] = true; }
        let entryList = this.TableRowBuilding.filter(ele => (ele.RiskId == entry.RiskId) && ele.RiskId != null && ele.RiskId != '');
        if (entryList.length > 1) {
          j += 1;
          for (let obj of entryList) obj['DuplicateError'] = true;
        }
        else { entry['DuplicateError'] = false }
        let data = {
          "ItemId": entry.ItemId,
          "RiskId": entry.RiskId,
          "BuildingUsageId": entry.BuildingUsageId,
          "BuildingBuildYear": entry.BuildingBuildYear,
          "WallType": entry.WallType,
          "RoofType": entry.RoofType,
          "BuildingSumInsured": entry.BuildingSumInsured,
          "LocationName": entry.LocationName,
        }
        let additonalData = {
          "BuildingSuminsured": entry.BuildingSumInsured,
          "BuildingAddress": entry.BuildingAddress,
          "Createdby": this.loginId,
          "InbuildConstructType": null,
          "QuoteNo": sessionStorage.getItem('quoteNo'),
          "RequestReferenceNo": this.quoteRefNo,
          "SectionId": "1",
          "RiskId": entry.RiskId,
          "LocationName": entry.LocationName
        }
        additionalList.push(additonalData);
        reqList.push(data);
        i += 1;
        if (i == this.TableRowBuilding.length && j == 0) {
          this.onfinalsave('Save');
        }
      }
    }
    else {
      this.onfinalsave('delete');
    }
  }
  SaveBuildingList(datas) {

    let urlLink = `${this.motorApiUrl}api/buildingdetails`;
    this.sharedService.onPostMethodSync(urlLink, datas).subscribe(
      (data: any) => {
        if (data?.Result) {
          if (data.Result.length != 0) {
            sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
          }
        }
      },
      (err) => { },
    );

  }


  onSaveBuildingDetails() {
    this.subuserType = sessionStorage.getItem('typeValue');
    let quoteStatus = sessionStorage.getItem('QuoteStatus');
    let appId = "1", loginId = "", brokerbranchCode = "";
    let createdBy = "";
    if (quoteStatus == 'AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRR') {
      // brokerbranchCode = this.commonDetails[0].BrokerBranchCode;
      //   createdBy = this.commonDetails[0].CreatedBy;
    }
    else {
      createdBy = this.loginId;
      if (this.userType != 'Issuer') {
        // this.brokerCode = this.agencyCode;
        // appId = "1"; loginId=this.loginId;
        // brokerbranchCode = this.brokerbranchCode;
      }
      else {
        appId = this.loginId;
        // loginId = this.commonDetails[0].LoginId;
        // loginId = this.updateComponent.brokerLoginId
        // brokerbranchCode = this.commonDetails[0].BrokerBranchCode;
      }
    }
    let insuranceForList = [];
    if (this.productItem.InsuranceForId != null) {
      insuranceForList = Object.keys(this.productItem.InsuranceForId);
    }
    let reqRefNo = null, refNo = sessionStorage.getItem('quoteReferenceNo')
    if (refNo != undefined && refNo != "undefined") {
      reqRefNo = sessionStorage.getItem('quoteReferenceNo')
    }
    if (reqRefNo == 'undefined' || reqRefNo == undefined) reqRefNo = null;
    let ReqObj = {
      "CreatedBy": createdBy,
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "RequestReferenceNo": reqRefNo,
      "RiskId": "1",
      "SectionId": "1",
      "RoofType": this.productItem.RoofType,
      "WallType": this.productItem.WallType,
      "BuildingBuildYear": this.productItem.BuildingBuildYear,
      "BuildingOwnerYn": "N",
      "BuildingSumInsured": this.productItem.BuildingSuminsured,
      "BuildingUsageId": this.productItem.BuildingUsageId,
      "WaterTankSi": this.productItem?.WaterTankSi,
      "ArchitectsSi": this.productItem?.ArchitectsSi,
      "LossOfRentSi": this.productItem?.LossOfRentSi,
      "TypeOfProperty": this.productItem?.TypeOfProperty,
      "EndorsementDate": "",
      "EndorsementEffectiveDate": "",
      "EndorsementRemarks": "",
      "EndorsementType": "",
      "EndorsementTypeDesc": "",
      "EndtCategoryDesc": "",
      "EndtCount": "",
      "EndtPrevPolicyNo": "",
      "EndtPrevQuoteNo": "",
      "EndtStatus": "",
      "IsFinanceEndt": "",
      "OrginalPolicyNo": "",
      "PolicyNo": this.endorsePolicyNo,
      "Status": "Y",
    }
    if (this.endorsementSection) {
      if (this.productItem?.Status == undefined || this.productItem?.Status == null || this.productItem?.Status == 'Y') {
        ReqObj['Status'] = 'E';
      }
      else {
        ReqObj['Status'] = this.productItem?.Status;
      }
      ReqObj['PolicyNo'] = this.endorsePolicyNo
    }
    else {
      ReqObj['Status'] = 'Y';
    }
    let urlLink = `${this.motorApiUrl}api/slide14/savebuilding`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Result) {
          if (data.Result.length != 0) {
            this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
            sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
            this.nextslide = true;
            // this.onCalculate(data.Result,'Building');

            //this.onCheckUWQuestionProceed(data.Result);
          }

        }
        else {
          this.nextslide = false;
        }
      },
      (err) => { },
    );
  }
  getElectronicEquipDetails(type) {
    let ReqObj = {
      "RequestReferenceNO": this.requestReferenceNo,
      "SectionId": '76'
    }
    let urlLink = `${this.motorApiUrl}api/getallcontentrisk`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          if (data.Result.ContentRiskDetails) {
            this.TableRowEE = data?.Result?.ContentRiskDetails;
            if (this.TableRowEE.length != 0) {
              if (this.TableRowEE.length > 1 || (this.TableRowEE[0].SumInsured != null && this.TableRowEE[0].SumInsured != 0)) this.currentEERiskRowIndex = null;
            }
            if (this.TableRowEE.length != 0) {
              for (let entry of this.TableRowEE) {
                this.onChangeContentLocation(entry);
                entry['Content'] = entry?.ItemValue;
                entry['Serial'] = entry?.SerialNo;
                entry['Description'] = entry?.SerialNoDesc;
              }
            }
          }
          else {
            this.TableRowEE = [{
              id: 1,
              ItemId: '',
              Content: '',
              Serial: '',
              Description: '',
              SumInsured: 0,
            }];
          }
        }
        this.editsections('ElectronicEquipment');
        this.newselectedIndex += 1;
      },
      (err) => { },
    );
  }
  getAllRiskDetails(type) {
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "SectionId": '3'
    }
    let urlLink = `${this.motorApiUrl}api/slide2/getallriskdetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          this.productItem.AllriskSumInsured = data?.Result?.AllriskSumInsured;
          console.log("Products", this.productItem)
        }
        this.editsections('AllRisk');
        this.newselectedIndex += 1;
      },
      (err) => { },
    );
  }
  onSaveAllRiskDetails() {
    let ReqObj = {
      "CreatedBy": this.loginId,
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "SectionId": "3",
      "AllriskSumInsured": this.productItem?.AllriskSumInsured
    }
    let urlLink = `${this.motorApiUrl}api/slide2/saveallriskdetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data?.Result) {
          this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
          sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
          this.nextslide2 = true;
        }
        else {
          this.nextslide2 = false;
        }
      },
      (err) => { },
    );
  }


  onSavePersonalLiability() {
    let emp = {};
    emp['CreatedBy'] = this.loginId;
    emp['InsuranceId'] = this.insuranceId;
    emp['ProductId'] = this.productId;
    emp['RequestReferenceNo'] = this.requestReferenceNo;
    emp['RiskId'] = "1";
    emp['EndorsementDate'] = this.endorsementDate;
    emp['EndorsementEffectiveDate'] = this.endorsementEffectiveDate;
    emp['EndorsementRemarks'] = this.endorsementRemarks;
    emp['EndorsementType'] = this.endorsementType;
    emp['EndorsementTypeDesc'] = this.endorsementTypeDesc;
    emp['EndtCategoryDesc'] = this.endtCategoryDesc;
    emp['EndtCount'] = this.endtCount;
    emp['EndtPrevPolicyNo'] = this.endtPrevPolicyNo;
    emp['EndtPrevQuoteNo'] = this.endtPrevQuoteNo;
    emp['EndtStatus'] = this.endtStatus;
    emp['IsFinanceEndt'] = this.isFinanceEndt;
    emp['TotalNoOfEmployees'] = '1';
    emp['OrginalPolicyNo'] = this.orginalPolicyNo;
    emp['LiabilityOccupationId'] = this.productItem.LiabilityOccupationId;
    emp['EmpLiabilitySi'] = this.productItem.EmpLiabilitySi;
    emp['SectionId'] = "36";
    if (this.endorsementSection) {
      if (this.productItem?.Status == undefined || this.productItem?.Status == null || this.productItem?.Status == 'Y') {
        emp['Status'] = 'E';
      }
      else {
        emp['Status'] = this.productItem?.Status;
      }
      emp['PolicyNo'] = this.endorsePolicyNo
    }
    else {
      emp['Status'] = 'Y';
    }
    let urlLink = `${this.motorApiUrl}api/slide7/saveempliablity`;
    this.sharedService.onPostMethodSync(urlLink, [emp]).subscribe(
      (data: any) => {
        if (data?.Result.length != 0) {
          this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
          //this.updateComponent.quoteRefNo = data?.Result[0]?.RequestReferenceNo;
          sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
          if (this.commonDetails) {
            if (this.commonDetails[0].SectionId != null && this.commonDetails[0].SectionId.length != 0) {
              if (!this.commonDetails[0].SectionId.some(ele => ele == '36')) this.commonDetails[0].SectionId.push('36');
            }
            else this.commonDetails[0]['SectionId'] = ['36'];
          }
          // sessionStorage.setItem('homeCommonDetails', JSON.stringify(this.commonDetails)) 
          this.nextslide4 = true;
          // this.onCalculate(data.Result,'PersonalLiability');

          //this.onCheckUWQuestionProceed(data.Result);
        }
        else {
          this.nextslide4 = false;
        }
      },
      (err) => { },
    );
  }
  saveCommonDetails(section) {
    let sourcecode: any;
    let endorsementDate = null, EndorsementEffectiveDate = null, EndorsementRemarks = null,
      EndorsementType = null, EndorsementTypeDesc = null, EndtCategoryDesc = null, EndtCount = null,
      EndtPrevPolicyNo = null, EndtPrevQuoteNo = null, EndtStatus = null, IsFinanceEndt = null, OrginalPolicyNo = null;
    if (this.endorsementDetails) {
      endorsementDate = this.endorsementDetails['EndorsementDate'];
      EndorsementEffectiveDate = this.endorsementDetails['EndorsementEffectiveDate'];
      EndorsementRemarks = this.endorsementDetails['EndorsementRemarks'];
      EndorsementType = this.endorsementDetails['EndorsementType'];
      EndorsementTypeDesc = this.endorsementDetails['EndorsementTypeDesc'];
      EndtCategoryDesc = this.endorsementDetails['EndtCategoryDesc'];
      EndtCount = this.endorsementDetails['EndtCount'];
      EndtPrevPolicyNo = this.endorsementDetails['EndtPrevPolicyNo'];
      EndtPrevQuoteNo = this.endorsementDetails['EndtPrevQuoteNo'];
      EndtStatus = this.endorsementDetails['EndtStatus'];
      IsFinanceEndt = this.endorsementDetails['IsFinanceEndt'];
      OrginalPolicyNo = this.endorsementDetails['OrginalPolicyNo'];
    }
    let promocode = null, havePromoCode: any = 'N';
    if (this.promocode != null && this.promocode != undefined && this.promocode != '') havePromoCode = "Y";
    let appId = "1", loginId = "", brokerbranchCode = ""; let createdBy = "";
    let quoteStatus = sessionStorage.getItem('QuoteStatus');
    let referenceNo = sessionStorage.getItem('quoteReferenceNo');
    if (referenceNo) {
      this.quoteRefNo = referenceNo;
    }
    else this.quoteRefNo = null;
    if (quoteStatus == 'AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRR') {
      //createdBy = this.vehicleDetailsList[0].CreatedBy;
    }
    else {
      createdBy = this.loginId;
      if (this.userType != 'Issuer') {
        this.brokerCode = this.agencyCode;
        appId = "1"; loginId = this.loginId;
      }
      else {
        appId = this.loginId;
        //loginId = this.brokerLoginId
        brokerbranchCode = null;
      }
    }
    this.applicationId = appId;
    if (quoteStatus == 'AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRR') {
      if (this.applicationId != '01' && this.applicationId != '1') { this.issuerSection = true; }
      else { this.issuerSection = false; }
    }
    else if (this.userType != 'Broker' && this.userType != 'User') {
      //brokerbranchCode =  commonDetails[0]['BrokerBranchCode']
      this.issuerSection = true;
    }
    else { this.issuerSection = false; brokerbranchCode = this.userDetails.Result.BrokerBranchCode; }
    if (quoteStatus == 'AdminRP' || quoteStatus == 'AdminRA' || quoteStatus == 'AdminRR') {
    }
    if (this.userType != 'Broker' && this.userType != 'User') {
      //sourcecode=this.Code
    }
    else {
      sourcecode = sessionStorage.getItem('typeValue')
    }
    let homeDetails = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
    if (homeDetails) {
      if (homeDetails[0].SectionId == undefined || homeDetails[0].SectionId == "undefined")
        this.commonDetails = homeDetails;
    }
    if (this.productId == '59') { this.IndustryId = '99999' };
    let startDate = null, endDate = null;
    let dateList = String(this.policyStartDate).split('/');
    if (dateList.length == 1) startDate = this.datePipe.transform(this.policyStartDate, "dd/MM/yyyy");
    else startDate = this.policyStartDate;
    let dateList2 = String(this.policyEndDate).split('/');
    if (dateList2.length == 1) endDate = this.datePipe.transform(this.policyEndDate, "dd/MM/yyyy");
    else endDate = this.policyEndDate;
    let ReqObj = {
      "AcexecutiveId": "",
      "PolicyNo": this.endorsePolicyNo,
      "ProductId": this.productId,
      "ProductType": "Asset",
      "TiraCoverNoteNo": null,
      "RequestReferenceNo": this.quoteRefNo,
      "AgencyCode": this.agencyCode,
      "ApplicationId": this.applicationId,
      "BdmCode": this.customerCode,
      "BranchCode": this.branchCode,
      "BrokerBranchCode": brokerbranchCode,
      "BrokerCode": this.brokerCode,
      "BuildingOwnerYn": this.Buildings,
      "Createdby": this.loginId,
      "SourceTypeId": sourcecode,//this.Code
      "Currency": this.currencyCode,
      "CustomerReferenceNo": this.CustomerReferenceNo,
      "CustomerCode": this.customerCode,
      "CustomerName": this.customerName,
      "ExchangeRate": this.exchangeRate,
      "Havepromocode": havePromoCode,
      "Promocode": this.promocode,
      "InsuranceId": this.insuranceId,
      "LoginId": loginId,
      "UserType": this.userType,
      "PolicyEndDate": endDate,
      "PolicyStartDate": startDate,
      "SectionIds": section,
      "SubUsertype": sessionStorage.getItem('typeValue'),
      "RiskId": "1",
      "IndustryId": this.IndustryId,
      "EndorsementDate": endorsementDate,
      "EndorsementEffectiveDate": EndorsementEffectiveDate,
      "EndorsementRemarks": EndorsementRemarks,
      "EndorsementType": EndorsementType,
      "EndorsementTypeDesc": EndorsementTypeDesc,
      "EndtCategoryDesc": EndtCategoryDesc,
      "EndtCount": EndtCount,
      "EndtPrevPolicyNo": EndtPrevPolicyNo,
      "EndtPrevQuoteNo": EndtPrevQuoteNo,
      "EndtStatus": EndtStatus,
      "IsFinanceEndt": IsFinanceEndt,
      "OrginalPolicyNo": OrginalPolicyNo,
      "Status": "Y"
    }
    if (this.endorsementSection) {
      if (this.currentStatus == undefined || this.currentStatus == null || this.currentStatus == 'Y') {
        ReqObj['Status'] = 'E';
      }
      else {
        ReqObj['Status'] = this.currentStatus;
      }
      ReqObj['PolicyNo'] = this.endorsePolicyNo
    }
    else {
      ReqObj['Status'] = 'Y';
    }
    let urlLink = `${this.motorApiUrl}api/slide/savecommondetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          let sections = data.Result?.SectionIds;
          let refNo = data.Result?.RequestReferenceNo;
          this.requestReferenceNo = data.Result?.RequestReferenceNo;
          sessionStorage.setItem('quoteReferenceNo', data.Result?.RequestReferenceNo);
          let homeDetails = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
          this.NewSection = sections.length;
          this.onNextProceed(sections);

        }
      },
      (err) => { },
    );
  }

  onNextProceed(sections) {
    this.selectedIndex = 0;
    if (sections) {
      let i = 0; let j: any
      let se = sections.some(ele => ele == '1')
      if (se) {
        this.onSaveBuildingDetails();
        this.selectedIndex += 1;
      }
      else {
        this.nextslide = true;
      }

      let se1 = sections.some(ele => ele == '47')
      if (se1) {
        this.onSaveContentRiskDetails();
        this.selectedIndex += 1;
      }
      else {
        this.nextslide1 = true;
      }
      let se2 = sections.some(ele => ele == '3')
      if (se2) {
        this.onSaveAllRiskDetails();
        this.selectedIndex += 1;
      }
      else {
        this.nextslide2 = true;
      }
      let se3 = sections.some(ele => ele == '35')
      if (se3) {
        this.onSavePersonalAccidentDetails();
        this.selectedIndex += 1;
      }
      else {
        this.nextslide3 = true;
      }
      let se4 = sections.some(ele => ele == '36')
      if (se4) {
        this.onSavePersonalLiability();
        this.selectedIndex += 1;
      }
      else {
        this.nextslide4 = true;
      }
    }

  }


  getCommonDetails() {
    let urlLink: any;
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "ProductId": this.productId,
      "InsuranceId": this.insuranceId
    }
    //if(this.productId=='59') urlLink = `${this.motorApiUrl}home/getbuildingdetails`;
    urlLink = `${this.motorApiUrl}api/slide/getcommondetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          let details = data.Result;
          this.commonSectionList = data.Result.SectionIds;
          let startDate = null, endDate = null;
          this.policyStartDate = details.PolicyStartDate;
          this.policyEndDate = details.PolicyEndDate;
          this.exchangeRate = details.ExchangeRate;
          this.customerCode = details.CustomerCode;
          this.customerName = details.CustomerName;
          this.CustomerReferenceNo = details?.CustomerReferenceNo;
          if (this.productId == '59') this.getSectionList(null);
          // this.productItem = new ProductData();
          // this.productItem.BuildingOwnerYn = 'Y';
          //this.dobminDate = new Date();
        }
        // if(!this.activeSection){this.activeSection=true;this.setProductSections();}
      });
  }


  getCalculationDetails(vehicleDetails) {
    let createdBy = "";
    let quoteStatus = sessionStorage.getItem('QuoteStatus');
    if (quoteStatus == 'AdminRP') {
      //createdBy = this.vehicleDetailsList[0].CreatedBy;
    }
    else {
      createdBy = this.loginId;
    }
    if (this.productId != '59') {
      let sectionId = null;
      if (this.productId == '13') sectionId = '35';
      else if (this.productId == '14') sectionId = '37';
      else if (this.productId == '15') sectionId = '38';
      else if (this.productId == '32') sectionId = '43';
      let effectiveDate = null;
      if (this.endorsementSection) {
        effectiveDate = this.endorseEffectiveDate;
      }
      else {
        effectiveDate = this.commonDetails[0].PolicyStartDate;
      }
      let ReqObj = {
        "InsuranceId": this.insuranceId,
        "BranchCode": this.branchCode,
        "AgencyCode": this.agencyCode,
        "SectionId": sectionId,
        "ProductId": this.productId,
        "MSRefNo": vehicleDetails?.MSRefNo,
        "VehicleId": vehicleDetails?.VehicleId,
        "CdRefNo": vehicleDetails?.CdRefNo,
        "VdRefNo": vehicleDetails?.VdRefNo,
        "CreatedBy": createdBy,
        "productId": this.productId,
        "sectionId": sectionId,
        "RequestReferenceNo": this.requestReferenceNo,
        "EffectiveDate": effectiveDate,
        "PolicyEndDate": this.commonDetails[0].PolicyEndDate
      }
      let urlLink = `${this.CommonApiUrl}calculator/calc`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          let res: any = data;
          let homeDetails = JSON.parse(sessionStorage.getItem('homeCommonDetails'));
          if (homeDetails) {
            if (this.productId != '59') {
              if (homeDetails.SectionId == undefined || homeDetails.SectionId == "undefined") homeDetails['SectionId'] = [sectionId];
              sessionStorage.setItem('homeCommonDetails', JSON.stringify(homeDetails))
            }

          }
          this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);

        },
        (err) => { },
      );
    }
    else if (vehicleDetails.length != 0) {
      let i = 0;
      for (let veh of vehicleDetails) {
        let effectiveDate = null; let coverModificationYN = 'N';
        if (this.endorsementSection) {
          effectiveDate = this.endorseEffectiveDate;
          // let entry = this.enableFieldsList.some(ele => ele == 'Covers' && this.endorsementId!=850);
          // if (entry || (this.endorsementId == 846 && veh.Status =='D')) coverModificationYN = 'Y';
          // else coverModificationYN = 'N';
          if (this.endorseCoverModification) coverModificationYN = this.endorseCoverModification
        }
        else {
          effectiveDate = this.commonDetails[0].PolicyStartDate;
        }

        let ReqObj = {
          "InsuranceId": this.insuranceId,
          "BranchCode": this.branchCode,
          "AgencyCode": this.agencyCode,
          "SectionId": veh.SectionId,
          "ProductId": this.productId,
          "MSRefNo": veh?.MSRefNo,
          "VehicleId": veh?.VehicleId,
          "CdRefNo": veh?.CdRefNo,
          "VdRefNo": veh?.VdRefNo,
          "CreatedBy": createdBy,
          "productId": this.productId,
          "sectionId": veh.SectionId,
          "RequestReferenceNo": this.requestReferenceNo,
          "EffectiveDate": effectiveDate,
          "PolicyEndDate": this.commonDetails[0].PolicyEndDate,
          "CoverModification": coverModificationYN
        }
        let urlLink = `${this.CommonApiUrl}calculator/calc`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            let res: any = data;
            i += 1;
            if (i == vehicleDetails.length) {

              this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);
            }
          },
          (err) => { },
        );
      }
    }
  }


  onSaveUWQues(uwList, entry, type) {
    if (uwList.length != 0) {
      let urlLink = `${this.CommonApiUrl}api/saveuwquestions`;
      this.sharedService.onPostMethodSync(urlLink, uwList).subscribe(
        (data: any) => {
          if (data.Result) {
            if (this.productId == '66' || this.productId == '67' || this.productId == '68' || this.productId == '69' || this.productId == '70' || this.productId == '71' || this.productId == '72' || this.productId == '75' || this.productId == '49' || this.productId == '14' || this.productId == '32' || this.productId == '39' || this.productId == '73' || this.productId == '74' || this.productId == '76' || this.productId == '26' || this.productId == '27' || this.productId == '16' || this.productId == '57' || this.productId == '48' || this.productId == '78' || this.productId == '77' || this.productId == '25') {
              if (this.tabIndex != this.locationList.length - 1) {
                this.tabIndex += 1; this.productItem = new ProductData();
                if (this.productId == '32') { this.fidelityForm.controls['fidelitys'].setValue([{ "AdditionalClaimsPreparationCosts": null, "LimitOfIndemnity": null }]) }
                if (this.productId == '39') {
                  this.form.controls['GrossProfit']?.setValue('0'); this.form.controls['IncreasedCostOfWorking']?.setValue('0');
                  this.form.controls['ClaimsPreparationCosts']?.setValue(null)
                }
                if (this.productId == '66' || this.productId == '67' || this.productId == '78') {
                  this.form.reset();
                  this.productItem = new ProductData();
                }
                this.onEditfirePhoneix()
              }
              else { this.onCalculate(entry, type); }
            }
            else if (this.productId == '59' || this.productId == '24') {
              this.onFinalProceed();
            }
            else { this.onCalculate(entry, type); }
          }
        },
        (err) => { },
      );
    }
    else {
      if (this.productId == '59' || this.productId == '24') {
        this.onFinalProceed();
      }
      else { this.getCalculationDetails(entry); }
    }
  }

  onCalculate(buildDetails, type) {
    if(this.productId =='19' && this.insuranceId =='100050') this.SectionSelectYn ='';
    if ((this.SectionSelectYn == 'UWQues' || this.SectionSelectYn == '') && this.productId == '19') {
      let createdBy = ""
      let quoteStatus = sessionStorage.getItem('QuoteStatus');
      if (quoteStatus == 'AdminRP') {
        createdBy = ""
        this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);
      }
      else createdBy = this.loginId;
      console.log(buildDetails);
      if (buildDetails.length != 0) {
        this.requestReferenceNo = buildDetails[0]?.RequestReferenceNo;
        sessionStorage.setItem('quoteReferenceNo', buildDetails[0]?.RequestReferenceNo);
        let i = 0;
        let coverModificationYN = 'N';
        let entry = this.enableFieldsList.some(ele => ele == 'Covers');
        if (entry) coverModificationYN = 'Y';
        else coverModificationYN = 'N';
        if (this.endorsementSection) {
          if (this.endorseCoverModification) coverModificationYN = this.endorseCoverModification
        }
        let endDate: any = null;
        if (this.policyEndDate) {
          if (this.policyEndDate) {
            let dateList = String(this.policyEndDate).split('/');
            if (dateList.length > 1) endDate = this.policyEndDate;
            else endDate = this.datePipe.transform(this.policyEndDate, "dd/MM/yyyy");
          }
        }
        let effectiveDate = null;
        if (this.endorsementSection) {
          effectiveDate = this.endorseEffectiveDate;
        }
        else {
          if (this.policyStartDate) {

            let dateList = String(this.policyStartDate).split('/');
            if (dateList.length > 1) effectiveDate = this.policyStartDate;
            else effectiveDate = this.datePipe.transform(this.policyStartDate, "dd/MM/yyyy");
          }
        }
        let ReqObj = {
          "RequestReferenceNo": this.requestReferenceNo,
          "CoverModification": coverModificationYN,
          "EffectiveDate": effectiveDate,
          "PolicyEndDate": endDate,
        }
        let urlLink = `${this.CommonApiUrl}calculator/calc/call`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if (data) {
              let entry = data?.Result;
              if (this.productId == '63' || this.productId == '59') {
                if ((type == 'Save' && this.LocationName.length == (this.tabIndex + 1) && this.insuranceId != '59') || (type == 'Save' && this.locationList.length == (this.currentIndex + 1) && this.insuranceId != '59') || type == 'Submit') {
                  this.onFinalProceed();
                }
                else { this.tabIndex += 1; if (this.uwQuestionList.length != 0) this.getEditUwQuestions(); if (this.productId == '59') this.onEditDomestic }
              }
              else this.onFinalProceed();
            }
          });
        // for (let build of buildDetails) {
        //   let effectiveDate = null, coverModificationYN = 'N';
        //   if (this.endorsementSection) {
        //     effectiveDate = this.endorseEffectiveDate;
        //     if(this.endorseCoverModification) coverModificationYN = this.endorseCoverModification
        //   }
        //   else {
        //     effectiveDate = this.policyStartDate;

        //   }
        //   if(this.productId=='46') build['RiskId'] = '1';
        //   let sectionId = '';
        //   let locationId = '1';
        //   if(build.LocationId) locationId = build.LocationId
        //   let ReqObj = {
        //     "InsuranceId": this.insuranceId,
        //     "BranchCode": this.branchCode,
        //     "AgencyCode": this.agencyCode,
        //     "SectionId": build.SectionId,
        //     "ProductId": this.productId,
        //     "LocationId": locationId,
        //     "MSRefNo": build.MSRefNo,
        //     "VehicleId": build.RiskId,
        //     "CdRefNo": build.CdRefNo,
        //     "VdRefNo": build.VdRefNo,
        //     "CreatedBy": this.loginId,
        //     "productId": this.productId,
        //     "RequestReferenceNo": sessionStorage.getItem('quoteReferenceNo'),
        //     "EffectiveDate": effectiveDate,
        //     "PolicyEndDate": this.policyEndDate,
        //     "CoverModification": coverModificationYN
        //   }
        //   let urlLink = `${this.CommonApiUrl}calculator/calc`;
        //   this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        //     (data: any) => {
        //       if (data) {
        //         let entry = data?.Result;
        //         i += 1;
        //         if (i == buildDetails.length) {
        //           if(this.productId=='63' || this.productId=='59'){
        //               if((type=='Save' && this.LocationName.length==(this.tabIndex+1) && this.insuranceId!='59') || (type=='Save' && this.locationList.length==(this.currentIndex+1) && this.insuranceId!='59') || type=='Submit' ){
        //                     this.onFinalProceed();
        //               }
        //               else{ this.tabIndex+=1;if(this.uwQuestionList.length!=0)this.getEditUwQuestions();if(this.productId=='59')this.onEditDomestic}
        //             }
        //             else this.onFinalProceed();

        //         }
        //       }
        //     },
        //     (err) => { },
        //   );
        // }
      }
    }
    else if (this.productId != '19') {
      let createdBy = ""
      let quoteStatus = sessionStorage.getItem('QuoteStatus');
      if (quoteStatus == 'AdminRP') {
        createdBy = ""
        this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);
      }
      else createdBy = this.loginId;
      if (buildDetails.length != 0) {
        this.requestReferenceNo = buildDetails[0]?.RequestReferenceNo;
        sessionStorage.setItem('quoteReferenceNo', buildDetails[0]?.RequestReferenceNo);
        let coverModificationYN = 'N';
        let entry = this.enableFieldsList.some(ele => ele == 'Covers');
        if (entry) coverModificationYN = 'Y';
        else coverModificationYN = 'N';
        if (this.endorsementSection) {
          if (this.endorseCoverModification) coverModificationYN = this.endorseCoverModification
        }
        let endDate: any = null;
        if (this.policyEndDate) {
          if (this.policyEndDate) {
            let dateList = String(this.policyEndDate).split('/');
            if (dateList.length > 1) endDate = this.policyEndDate;
            else endDate = this.datePipe.transform(this.policyEndDate, "dd/MM/yyyy");
          }
        }
        let effectiveDate = null;
        if (this.endorsementSection) {
          effectiveDate = this.endorseEffectiveDate;
        }
        else {
          if (this.policyStartDate) {

            let dateList = String(this.policyStartDate).split('/');
            if (dateList.length > 1) effectiveDate = this.policyStartDate;
            else effectiveDate = this.datePipe.transform(this.policyStartDate, "dd/MM/yyyy");
          }
        }
        let ReqObj = {
          "RequestReferenceNo": this.requestReferenceNo,
          "CoverModification": coverModificationYN,
          "EffectiveDate": effectiveDate,
          "PolicyEndDate": endDate,
        }
        let urlLink = `${this.CommonApiUrl}calculator/calc/call`;
        this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
          (data: any) => {
            if (data) {
              let entry = data?.Result;
              if (this.productId == '63' || this.productId == '59') {
                if ((type == 'Save' && this.LocationName.length == (this.tabIndex + 1) && this.insuranceId != '59') || (type == 'Save' && this.locationList.length == (this.currentIndex + 1) && this.insuranceId != '59') || type == 'Submit') {
                  this.onFinalProceed();
                }
                else { this.tabIndex += 1; if (this.uwQuestionList.length != 0) this.getEditUwQuestions(); if (this.productId == '59') this.onEditDomestic }
              }
              else this.onFinalProceed();
            }
          });
        // let i = 0;
        // for (let build of buildDetails) {
        //   let effectiveDate = null, coverModificationYN = 'N';
        //   if (this.endorsementSection) {
        //     effectiveDate = this.endorseEffectiveDate;
        //     if(this.endorseCoverModification) coverModificationYN = this.endorseCoverModification
        //   }
        //   else {
        //     effectiveDate = this.policyStartDate;

        //   }
        //   if(this.productId=='46') build['RiskId'] = '1';
        //   let sectionId = '';
        //   let locationId = '1';
        //   if(build.LocationId) locationId = build.LocationId
        //   let ReqObj = {
        //     "InsuranceId": this.insuranceId,
        //     "BranchCode": this.branchCode,
        //     "AgencyCode": this.agencyCode,
        //     "SectionId": build.SectionId,
        //     "ProductId": this.productId,
        //     "LocationId": locationId,
        //     "MSRefNo": build.MSRefNo,
        //     "VehicleId": build.RiskId,
        //     "CdRefNo": build.CdRefNo,
        //     "VdRefNo": build.VdRefNo,
        //     "CreatedBy": this.loginId,
        //     "productId": this.productId,
        //     "RequestReferenceNo": sessionStorage.getItem('quoteReferenceNo'),
        //     "EffectiveDate": effectiveDate,
        //     "PolicyEndDate": this.policyEndDate,
        //     "CoverModification": coverModificationYN
        //   }
        //   let urlLink = `${this.CommonApiUrl}calculator/calc`;
        //   this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        //     (data: any) => {
        //       if (data) {
        //         let entry = data?.Result;
        //         i += 1;
        //         if (i == buildDetails.length) {
        //            if(this.productId=='63' || this.productId=='59'){
        //               if((type=='Save' && this.LocationName.length==(this.tabIndex+1) && this.insuranceId!='59') || (type=='Save' && this.locationList.length==(this.currentIndex+1) && this.insuranceId!='59') || type=='Submit' ){
        //                     this.onFinalProceed();
        //               }
        //               else{ this.tabIndex+=1;if(this.uwQuestionList.length!=0)this.getEditUwQuestions();if(this.productId=='59')this.onEditDomestic}
        //             }
        //             else this.onFinalProceed();

        //         }
        //       }
        //     },
        //     (err) => { },
        //   );
        // }
      }
    }
  }

  onSaveUWQuestions(uwList, buildDetails, index) {
    if (uwList.length != 0) {
      let urlLink = `${this.CommonApiUrl}api/saveuwquestions`;
      this.sharedService.onPostMethodSync(urlLink, uwList).subscribe(
        (data: any) => {
          if (data.Result) {
            if (index == buildDetails.length) { }
            //this.onCalculate(buildDetails)
          }
        },
        (err) => { },
      );
    }
  }
  onSIValueChange(args) {
    if (args.key === 'e' || args.key === '+' || args.key === '-') {
      return false;
    } else {
      return true;
    }
  }
  CommaFormattedPublicLiabiity(rowData) {
    if (rowData) rowData = parseFloat(rowData.replace(/[^0-9.]|(?<=\-..*)\./g, ""))
    return rowData
  }
  CommaFormattedCorp(rowData, type) {
    if (type == 'Fire' || type == 'BusinessFire' || type == 'MB' || type == 'PG' || type == 'EE' || type == 'Liability' || type == 'GPA' || type == 'Cover' || type == 'StockCover' || type == 'AllRisk') {
      if (rowData.SumInsured) rowData.SumInsured = String(rowData.SumInsured).replace(/[^0-9.]|(?<=\-..*)\./g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return rowData.SumInsured
    }
  }
  CommaFormattedValue(data){
    if(data) data = String(data).replace(/[^0-9.]|(?<=\-..*)\./g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return data
  }
  CommaFormatted(rowData, type) {
    // format number
    if (type == 'Building') {
      if (rowData.BuildingSI) rowData.BuildingSI = String(rowData.BuildingSI).replace(/[^0-9.]|(?<=\-..*)\./g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else if (type == 'Content') {
      if (rowData.ContentSI) rowData.ContentSI = String(rowData.ContentSI).replace(/[^0-9.]|(?<=\-..*)\./g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else if (type == 'AllRisk') {
      if (rowData.AllRiskSI) rowData.AllRiskSI = String(rowData.AllRiskSI).replace(/[^0-9.]|(?<=\-..*)\./g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else if (type == 'PL') {
      if (rowData.PersonalLiabilitySI) rowData.PersonalLiabilitySI = String(rowData.PersonalLiabilitySI).replace(/[^0-9.]|(?<=\-..*)\./g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else if (type == 'Domestic') {
      if (rowData.ServantSI) rowData.ServantSI = String(rowData.ServantSI).replace(/[^0-9.]|(?<=\-..*)\./g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else if (type == 'PA') {
      if (rowData.DeathSI) rowData.DeathSI = String(rowData.DeathSI).replace(/[^0-9.]|(?<=\-..*)\./g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
  onFinalProceed() {

    this.saveFleetDetails();
    // else this.saveFleetDetails();
    //this.router.navigate(['/quotation/plan/premium-details']);
    //this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);
  }
  saveFleetDetails() {
    // if(this.productId!='46'){
    //   let Reqobj={
    //     "RequestReferenceNo": this.requestReferenceNo,
    //     "InsuranceId": this.insuranceId,
    //     "ProductId": this.productId
    //   }
    //   let urlLink = `${this.motorApiUrl}api/savefleetdetails`;
    //     this.sharedService.onPostMethodSync(urlLink, Reqobj).subscribe(
    //       (data: any) => {
    //         if(data.Result){
    //           this.getFleetCalc(data.Result);
    //         }
    //       })
    // }
    // else{ 
    if (this.endorsementSection) this.router.navigate(['/quotation/plan/premium-info']);
    else {
      if(this.productId=='79' || this.productId=='84' || this.productId=='82'|| this.productId=='83') {
        this.InsertEnginnerInfo();
      }
      else this.router.navigate(['/quotation/plan/premium-details']);
      }

    //}
  }
  getFleetCalc(res) {
    let startDate = this.policyStartDate, endDate = this.policyEndDate
    //this.updateComponent.vehicleDetails = this.vehicleDetails;
    let effectiveDate = null;
    if (this.endorsementSection) {
      effectiveDate = this.endorseEffectiveDate;
    }
    else {
      if (this.policyStartDate) {
        if (this.policyStartDate.includes('/')) effectiveDate = this.policyStartDate;
        else effectiveDate = this.datePipe.transform(this.policyStartDate, "dd/MM/yyyy");
      }
    }
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode,
      "AgencyCode": this.agencyCode,
      "SectionId": res?.SectionId,
      "ProductId": this.productId,
      "MSRefNo": res?.MSRefNo,
      "VehicleId": res?.VehicleId,
      "CdRefNo": res?.CdRefNo,
      "VdRefNo": res?.VdRefNo,
      "CreatedBy": res?.CreatedBy,
      "productId": this.productId,
      "sectionId": res?.SectionId,
      "RequestReferenceNo": this.requestReferenceNo,
      "EffectiveDate": effectiveDate,
      "PolicyEndDate": endDate,
      "CoverModification": "N",
      "PDRefNo": res?.PDRefNo,
      "LocationId": "1"
    }
    let urlLink = `${this.CommonApiUrl}calculator/policy/calc`;
    if (this.insuranceId != '100028' && this.insuranceId != '100027' && this.insuranceId != '100040' && this.insuranceId != '100042' && this.insuranceId != '100019') {
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          if (data.CoverList) {
            if (this.endorsementSection) this.router.navigate(['/quotation/plan/premium-info']);
            else this.router.navigate(['/quotation/plan/premium-details']);
          }
        });
    }
    else {
      if (this.endorsementSection) this.router.navigate(['/quotation/plan/premium-info']);
      else this.router.navigate(['/quotation/plan/premium-details']);
    }
    // 
  }
  onCheckUWQuestionProceed(buildDetails) {
    //,type,formType
    if (buildDetails.length != 0) {
      if (this.uwQuestionList.length != 0) {
        let createdBy = ""
        let quoteStatus = sessionStorage.getItem('QuoteStatus');
        if (quoteStatus == 'AdminRP') {
          createdBy = ""
          this.router.navigate(['/Home/existingQuotes/customerSelection/customerDetails/excess-discount']);
        }
        else createdBy = this.loginId;
        this.requestReferenceNo = buildDetails[0]?.RequestReferenceNo;
        sessionStorage.setItem('quoteReferenceNo', buildDetails[0]?.RequestReferenceNo);
        let j = 0;
        for (let build of buildDetails) {
          let i = 0;
          let uwList: any[] = [];
          //let branchCode = '';
          for (let ques of this.uwQuestionList) {
            if (ques.Value != '' && ques.Value != null) {
              ques['BranchCode'] = this.branchCode;

              let status = null, loading = null, vehicleId = null;
              if (this.productId == '42' || this.productId == '43' || this.productId == '46') vehicleId = '1';
              else vehicleId = build.LocationId
              if (ques.QuestionType == '01' && ques.Value != null && ques.Value != '' && ques.Options != null) {
                let obj = ques.Options.find(ele => ele.UwQuesOptionDesc == ques.Value);
                console.log("Found Obj", ques, obj)
                if (obj) {
                  loading = obj.LoadingPercent
                  if (obj.ReferralYn == 'Y') status = 'R';
                  else status = 'Y';
                }
                else status = 'Y';
              }
              else status = ques.Status;
              let entry = {
                "InsuranceId": this.insuranceId,
                "ProductId": this.productId,
                "UwQuestionId": ques.UwQuestionId,
                "UwQuestionDesc": ques.UwQuestionDesc,
                "QuestionType": ques.QuestionType,
                "EffectiveDateStart": ques.EffectiveDateStart,
                "Status": status,
                "LoadingPercent": loading,
                "MandatoryYn": ques.MandatoryYn,
                "DataType": ques.DataType,
                "CreatedBy": createdBy,
                "UpdatedBy": this.loginId,
                "Value": ques.Value,
                "BranchCode": this.branchCode,
                "RequestReferenceNo": this.requestReferenceNo,
                "VehicleId": vehicleId
              }
              uwList.push(entry);
            }

            // if (ques.QuestionType == '01') {
            //   ques['CreatedBy'] = createdBy;
            //   ques['RequestReferenceNo'] = this.requestReferenceNo;
            //   ques['UpdatedBy'] = this.loginId;
            //   if(this.productId=='42' || this.productId=='43') ques["VehicleId"] = '1';
            //   else ques["VehicleId"] = build.LocationId
            //   uwList.push(ques);
            // }
            // else if (ques.Value != "") {
            //   ques['CreatedBy'] = createdBy;
            //   ques['RequestReferenceNo'] = this.requestReferenceNo;
            //   ques['UpdatedBy'] = this.loginId;
            //   if(this.productId=='42' || this.productId=='43') ques["VehicleId"] = '1';
            //   else ques["VehicleId"] = build.LocationId
            //   uwList.push(ques);
            // }
            i += 1;
            if (i == this.uwQuestionList.length) {
              j += 1;
              if (uwList.length != 0) this.onSaveUWQuestions(uwList, buildDetails, j);
              //type,formType
              else if (j == buildDetails.length) {//this.onCalculate(buildDetails)
              }
              //type,formType
            }
          }
        }
      }
      // else this.onCalculate(buildDetails)
      //,type,formType
    }
  }

  setCommonFormValues() {
    let refNo = sessionStorage.getItem('quoteReferenceNo');
    if (refNo == undefined) refNo = this.requestReferenceNo
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "SectionId": null
    }
    let urlLink = null;
    if (this.productId == '57') { ReqObj.SectionId = '45'; urlLink = `${this.motorApiUrl}api/slide13/getpersonlaaccident`; }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          let details = data?.Result;
          if (this.productId == '57') {
            this.getOccupationList('45', 'direct')
            this.GroupListNew = data.Result.filter(ele => ele.OccupationType != null && ele.OccupationType != '');
            if (this.GroupListNew.length != 0) {
              this.listSectionGroup = true;
              this.listnGroup = false;
            }
          }
        }
      },
      (err) => { },
    );
  }

  onsaveGroupPADetails() {
    if (this.GroupListNew.length != 0) {
      let list: any[] = this.GroupListNew.filter(ele => ele.OccupationType != null && ele.OccupationType != '');
      if (list.length != 0) {
        let i = 0;
        for (let entry of list) {
          entry["RequestReferenceNo"] = this.requestReferenceNo;
          entry["RiskId"] = entry.OccupationType;
          entry["ProductId"] = this.productId;
          entry["SectionId"] = "45";
          entry["InsuranceId"] = this.insuranceId
          entry["CreatedBy"] = this.loginId;
          i += 1;
          if (i == list.length) {
            let urlLink = `${this.motorApiUrl}api/slide13/savepersonlaccident`;
            this.sharedService.onPostMethodSync(urlLink, list).subscribe(
              (data: any) => {
                if (data?.Result.length != 0) {
                  this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
                  sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
                  if (this.commonDetails) {
                    if (this.commonDetails[0].SectionId != null && this.commonDetails[0].SectionId.length != 0) {
                      if (!this.commonDetails[0].SectionId.some(ele => ele == '45')) this.commonDetails[0].SectionId.push('45');
                    }
                    else this.commonDetails[0]['SectionId'] = ['45'];
                  }
                  sessionStorage.setItem('homeCommonDetails', JSON.stringify(this.commonDetails))
                  this.onCheckUWQuestionProceed(data.Result);
                }
              });
          }
        }
      }
    }
  }



  getCommonnDetails() {
    let urlLink: any;
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "ProductId": this.productId,
      "InsuranceId": this.insuranceId
    }
    //if(this.productId=='59') urlLink = `${this.motorApiUrl}home/getbuildingdetails`;
    urlLink = `${this.motorApiUrl}api/slide/getcommondetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        if (data.Result) {
          let details = data.Result;
          let startDate = null, endDate = null;
          startDate = details.PolicyStartDate;
          endDate = details.PolicyEndDate;
          this.commonDetails = [
            {
              "PolicyStartDate": startDate,
              "PolicyEndDate": endDate,
              "Currency": details?.Currency,
              "SectionId": details?.SectionIds,
              "AcexecutiveId": "",
              "ExchangeRate": details?.ExchangeRate,
              "StateExtent": "",
              "NoOfDays": details?.NoOfDays,
              "HavePromoCode": details?.Havepromocode,
              "PromoCode": details?.Promocode,
              "SourceType": details?.SourceType,
              "BrokerCode": details?.BrokerCode,
              "BranchCode": details?.BranchCode,
              "BrokerBranchCode": details?.BrokerBranchCode,
              "CustomerCode": details?.CustomerCode,
              "CustomerName": details?.CustomerName,
              "LoginId": null,
              "IndustryName": null
            }
          ]
          sessionStorage.setItem('homeCommonDetails', JSON.stringify(this.commonDetails));
          this.currencyCode = this.commonDetails[0].Currency

          this.ProductCode = details.SectionIds[0];
          if (this.productId == '56') {

            //let fireData = new EmployersLiability();
            let fireData = new HealthInsurance();
            this.fields[0] = fireData?.fields[0];
            console.log("Final Fields", this.fields)
            let entry = [];
            // this.AddNewFunc();

            //   let modelHooks = { onInit: (field: FormlyFieldConfig) => {
            //     field.formControl.valueChanges.subscribe(() => {
            //       this.onoccChangepersonalInd('change');
            //     });
            //   } 
            // }
            // this.fields[0] = fireData?.fields[0];

            let referenceNo = sessionStorage.getItem('quoteReferenceNo');
            this.showSection = true;
            if (referenceNo) {
              this.requestReferenceNo = referenceNo;
              this.getSectionList(null);
              //this.setCommonFormValues();
              this.setCommonFormValues1();
              this.getRelationTypeList('direct');
              console.log('FIIIIIIIIIIIIIII', this.fields[0].fieldGroup[0]);
              // this.productItem = new ProductData();

            }
            else {
              // this.productItem = new ProductData();
              this.formSection = true; this.viewSection = false;
            }
          }
          // this.productItem = new ProductData();
          this.productItem.BuildingOwnerYn = 'Y';
          this.dobminDate = new Date();
        }
        // if(!this.activeSection){this.activeSection=true;this.setProductSections();}
      });
  }

  getSectionList(locationList) {
    if (this.productId != '66' && this.productId != '67') {
      let ReqObj = {
        "InsuranceId": this.insuranceId,
        "ProductId": this.productId
      }
      let urlLink = `${this.ApiUrl1}master/dropdown/productsection`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          if (data.Result) {
            let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': '' }];
            this.sectionDropdownList = defaultObj.concat(data.Result);
            if (this.productId == '67' || this.productId == '68' || this.productId == '69' || this.productId == '70' || this.productId == '71' || this.productId == '72' || this.productId == '75' || this.productId == '49' || this.productId == '14' || this.productId == '32' || this.productId == '39' || this.productId == '73' || this.productId == '74' || this.productId == '76'
              || this.productId == '48' || this.productId == '78' || this.productId == '77' || this.productId == '25' || this.productId == '16' || this.productId == '26' || this.productId == '27' || this.productId == '57' || this.productId == '80' || this.productId == '79' || this.productId == '84' || this.productId == '81' || this.productId =='82' || this.productId=='83' || this.productId=='59') {
              this.getSectionCoverList(data.Result, locationList);
            }
            else {
              let i = 0;
              for (let n of this.sectionDropdownList) {
                console.log('HJGGGGG', n.CodeDesc)
                if (this.productId == '59') {
                  if (this.commonSectionList.some(ele => ele == n.Code)) {
                    if (n.Code == '1') {
                      this.Building1 = true;
                    }
                    if (n.Code == '47') {
                      this.Content = true;
                    }
                    if (n.Code == '76') {
                      this.ElecEquipment = true;
                    }
                    if (n.Code == '3') {
                      this.AllRisk = true;
                    }
                    if (n.Code == '36') {
                      this.PersonalAccident = true;
                    }
                    if (n.Code == '106') {
                      this.DomesticServant = true;
                    }
                    if (n.Code == '35') {
                      this.personalIndemity = true;
                    }
                  }
                  i += 1;
                }
                else {

                  if (n.Code == '1') {
                    this.Building1 = true;
                  }
                  if (n.Code == '47') {
                    this.Content = true;
                  }
                  if (n.Code == '76') {
                    this.ElecEquipment = true;
                  }
                  if (n.Code == '3') {
                    this.AllRisk = true;
                  }
                  if (n.Code == '36') {
                    this.PersonalAccident = true;
                  }
                  if (n.Code == '106') {
                    this.DomesticServant = true;
                  }
                  if (n.Code == '35') {
                    this.personalIndemity = true;
                  }
                  i += 1;
                }
              }
            }

          }
        });
    }
    else {
      this.setOtherSections(locationList);
    }
  }
  setOtherSections(locationList) {

    if (this.productId == '66') { this.FirePhoenix = true; this.editsections('FirePhoenix'); }
    else if (this.productId == '67') this.BuildingCombinedPhoenix = true; this.editsections('BuildingCombinedPhoenix');
    if (locationList) {
      let i = 0; this.locationList = [];
      for (let entry of locationList) {
        let obj = {
          "LocationId": entry.LocationId, "LocationName": entry.LocationName, "CoversRequired": entry?.CoversRequired, "BuildingOwnerYn": entry?.BuildingOwnerYn,
          "BuildingList": [], "GeyserList": [{ "BuildingUsageId": null, "SumInsured": 0 }], "BuildingAddress": entry.Address, "LiabilityList": [{ 'CategoryId': null, 'SumInsured': null }],
          "WorkmenList": [{ 'OccupationId': null, 'SumInsured': null }], "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ContentId': null, 'ContentDesc': null, 'SumInsured': null, 'SerialNo': null }],
          "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }]
        }
        let subDetails = entry.SectionList;
        if (this.productId == '67') {
          let buildingCombinedApi = new BuildingCombinedApiPhoenix();
          let finalObj = buildingCombinedApi.getEditDetails(subDetails, obj, this.BIValue, this.EValue, this.showInterruptions, this.showExtensionToggle, this.showExtensions);
          if (finalObj) {
            obj = finalObj?.Obj; this.EValue = finalObj?.EValue;
            this.BIValue = finalObj?.BIValue; this.showExtensions = finalObj?.showExtensions;
            this.showInterruptions = finalObj?.showInterruptions; this.showExtensionToggle = finalObj?.showExtensionToggle;
          }
        }
        else if (this.productId == '66') {
          let fireApi = new FireApiPhoenix();
          let finalObj = fireApi.getEditDetails(subDetails, obj, this.BIValue, this.EValue, this.showInterruptions, this.showExtensionToggle, this.showExtensions);
          if (finalObj) {
            obj = finalObj?.Obj; this.EValue = finalObj?.EValue;
            this.BIValue = finalObj?.BIValue; this.showExtensions = finalObj?.showExtensions;
            this.showInterruptions = finalObj?.showInterruptions; this.showExtensionToggle = finalObj?.showExtensionToggle;
          }
        }
        this.locationList.push(obj);
        console.log(this.locationList);

        i += 1;
        if (i == this.locationList.length) { this.onEditfirePhoneix(); }
      }
    }
  }
  change(type) {
    // console.log(event.target.innerText, type);
    if (this.BIValue == 'Y' && type == 'isConfirmed') {
      this.showInterruptions = true;
      this.showExtensionToggle = true;
    }
    else if (this.BIValue == 'N' && type == 'isConfirmed') {
      this.showExtensions = false;
      this.showInterruptions = false;
      this.showExtensionToggle = false;
    }
    else if (this.EValue == 'Y' && type == 'extensions') {
      this.showExtensions = true;
      this.showExtensionToggle = true;
    }
    else if (this.EValue == 'N' && type == 'extensions') this.showExtensions = false;
    else if (this.EValue == 'Y' && type == 'CARextensions') this.showCARExtensions = true;
    else if (this.EValue == 'N' && type == 'CARextensions') this.showCARExtensions = false;
    else if (this.EValue == 'Y' && type == 'EARextensions') this.showEARExtensions = true;
    else if (this.EValue == 'N' && type == 'EARextensions') this.showEARExtensions = false;
    else if(this.yesNoValue =='N' && type == 'professionalIndeminity') this.showprofessionalExtensions = false; 
    else if(this.yesNoValue =='Y' && type == 'professionalIndeminity') this.showprofessionalExtensions = true; 
   
    
  }
  getSectionCoverList(result, locationList) {
    this.sectionDropdownList = result;
    let i = 0;
    for (let n of this.sectionDropdownList) {
      let ReqObj = {
        "Limit": "",
        "Offset": "100",
        "InsuranceId": this.insuranceId,
        "ProductId": this.productId,
        "SectionId": n.Code
      }
      let urlLink = `${this.ApiUrl1}master/getallsectioncoverdetails`;
      this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
        (data: any) => {
          n['CoverList'] = data.Result;
          // if(n.Code== '1'){this.BuildingPhoenix=true;this.editsections('Building')}
          if (n.Code == '1') {
            let contentData = new policyFormConfig();
            let fireData = contentData.policyfields.fieldGroup;
            this.primaryfields = contentData.primaryfields.fieldGroup;
            console.log(fireData);
            this.addControlsToForm(fireData);
            this.groupedFields = this.groupFields(fireData);
            this.getLeakageFire();
            this.getPublicUtiltiesList()

          }
          else if (n.Code == '47') { this.ContentPhoenix = true; this.editsections('Content') }
          else if (n.Code == '192') { this.InflationPhoenix = true; this.editsections('Inflation') }
          else if (n.Code == '196') { this.GeyserPhoenix = true; this.editsections('Geyser') }
          else if (n.Code == '190') { this.HailPhoenix = true; this.editsections('HailDamage') }
          else if (n.Code == '189') { this.LeakagePhoenix = true; this.editsections('Leakage') }
          else if (n.Code == '187') { this.MiscellaneousPhoenix = true; this.editsections('Miscellaneous') }
          else if (n.Code == '185') { this.PlantMachineryPhoenix = true; this.editsections('Plant') }
          else if (n.Code == '188') { this.PowerSurgePhoenix = true; this.editsections('Powersurge') }
          else if (n.Code == '191') { this.RentRecievablePhoenix = true; this.editsections('Rent') }
          else if (n.Code == '194') { this.StockInTradePhoenix = true; this.editsections('Trade') }
          else if (n.Code == '197') { this.ClaimsPreparationPhoenix = true; this.editsections('ClaimsPreparation') }
          else if (n.Code == '44') { this.LiabilityPhoenix = true; this.editsections('Liability') }
          else if (n.Code == '198') { this.OfficeContentsPhoenix = true; this.editsections('OfficeContents') }
          else if (n.Code == '199') { this.ThirdAspectPhoenix = true; this.editsections('ThirdAspect') }
          else if (n.Code == '200') { this.WaterLeakagePhoenix = true; this.editsections('WaterLeakage') }
          else if (n.Code == '201') { this.AdditionalClaimsPhoenix = true; this.editsections('AdditionalClaims') }
          else if (n.Code == '231') { this.PersonalLiabiltyPhoenix = true; this.editsections('PersonalLiability') }
          else if (n.Code == '202') { this.LiabilityLossPhoenix = true; this.editsections('LiabilityLoss') }
          else if (n.Code == '229') {
            this.ConstructionAllRiskPhoenix = true;
            let fireData = null;
            fireData = new ConstructionAllRiskPhoenix();
            this.addControlsToForm(fireData.CARfields.fieldGroup);
            this.addControlsToForm(fireData.extendsCARfields.fieldGroup);
            this.addControlsToForm(fireData.constructionCARfields.fieldGroup);
            this.addControlsToForm(fireData.additionalCARfields.fieldGroup);
            this.fieldsCAR = this.groupFields(fireData.CARfields.fieldGroup);
            this.fieldsCARPrimary = fireData.constructionCARfields.fieldGroup;
            this.fieldsCARAdditional = this.groupFields(fireData.additionalCARfields.fieldGroup);
            this.fieldsCARExtensions = this.groupFields(fireData.extendsCARfields.fieldGroup);
            this.getConstructionTypeList();
          }
          else if (n.Code == '232') {
          
          let fireData = null;
          if(this.productId=='82'){fireData = new ConstructionAllRiskUptoTanzaniya();this.ConstructionAllRiskUptoTanzaniya = true;}
          if(this.productId=='83'){fireData = new ConstructionAllRiskAboveTanzaniya();this.ConstructionAllRiskAboveTanzaniya = true;}
          this.addControlsToForm(fireData.CARuptofields.fieldGroup);
          this.addControlsToForm(fireData.constructionCARuptofields.fieldGroup);
          this.fieldsCARupto = this.groupFields(fireData.CARuptofields.fieldGroup);
          this.fieldsCARPrimaryupto = this.groupFields(fireData.constructionCARuptofields.fieldGroup);
          this.buildingContractorsList();
          }
          else if (n.Code == '233') {
            this.EngineeringAllRiskPhoenix = true;
            let fireData = null;
            fireData = new EngineeringAllRiskPhoenix();
            this.addControlsToForm(fireData.EARfields.fieldGroup);
            this.addControlsToForm(fireData.extendsEARfields.fieldGroup);
            this.addControlsToForm(fireData.constructionEARfields.fieldGroup);
            this.addControlsToForm(fireData.additionalEARfields.fieldGroup);
            this.fieldsEAR = this.groupFields(fireData.EARfields.fieldGroup);
            this.fieldsEARPrimary = fireData.constructionEARfields.fieldGroup;
            this.fieldsEARAdditional = this.groupFields(fireData.additionalEARfields.fieldGroup);
            this.fieldsEARExtensions = this.groupFields(fireData.extendsEARfields.fieldGroup);
            this.getConstructionTypeList();
          }
          else if (n.Code == '230') { this.PersonalAllRiskPhoenix = true; this.editsections('PersonalAllRisk') }
          else if (n.Code == '56') { this.AccidentalDamagePhoenix = true; this.getClaimPreparationList(); this.editsections('AccidentalDamage'); }
          else if (n.Code == '219') { this.AccountsRecievablePhoenix = true; this.getClaimPreparationList(); this.editsections('Accounts Recievable'); }
          else if (n.Code == '222') { this.GlassPhoenix = true; this.getClaimPreparationList(); this.editsections('Glass'); }
          // else if(n.Code=='224'){this.UmbrellaPhoenix=true;this.editsections('Umbrella')}
          //else if(n.Code=='225'){this.StateBenefitsPhoenix=true;this.editsections('StateBenefits')}
          else if (n.Code == '220') { this.TheftPhoenix = true; this.getClaimPreparationList(); this.editsections('Theft'); }
          else if (n.Code == '76') { this.ElectronicEquipmentPhoenix = true; this.getClaimPreparationList(); this.editsections('ElectronicEquipment'); }
          else if (n.Code == '42') { this.MoneyPhoenix = true; this.editsections('Money') }
          else if (n.Code == '223') { this.AllRiskPhoenix = true; this.editsections('AllRiskPhoenix') }
          //else if(n.Code=='54'){this.PublicLiabilityPhoenix=true;this.editsections('PublicLiabilityPhoenix')}
          //else if(n.Code=='182'){this.GroupPersonalPhoenix=true;this.editsections('GroupPersonalPhoenix')}
          // else if(n.Code=='182'){this.GroupPersonalPhoenix=true;this.editsections('GroupPersonalPhoenix')}
          else if (n.Code == '75') { this.BIPhoenix = true; this.editsections('BIPhoenix') }
          else if (n.Code == '46') { this.GoodsTransitPhoenix = true; this.editsections('GoodsTransitPhoenix') }
          else if (n.Code == '228') { this.HouseHoldersPhoenix = true; this.editsections('HouseHoldersPhoenix') }
          else if (n.Code == '4') { this.FirePhoenix = true; this.editsections('FirePhoenix') }
          else if (n.Code == '50') { this.MotorPhoenix = true; this.editsections('MotorPhoenix') }
          else if (n.Code == '37') { this.EmployeePhoenix = true; this.editsections('EmployeePhoenix') }
          else if (n.Code == '43') { this.FidelityPhoenix = true; this.editsections('FidelityPhoenix') }
          else if (n.Code == '227') { this.HouseOwnerPhoenix = true; this.editsections('HouseOwnerPhoenix') }
          else if (n.Code == '225') { this.StateBenefitsPhoenix = true; this.editsections('StateBenefitsPhoenix') }
          else if (n.Code == '41') { this.MachineryBreakDownPhoenix = true; this.getClaimPreparationList(); this.editsections('MachineryBreakDownPhoenix') }
          else if (n.Code == '224') { this.UmbrellaPhoenix = true; this.editsections('UmbrellaPhoenix') }
          else if (n.Code == '226') { this.DetoriationPhoenix = true; this.editsections('DetoriationPhoenix') }
          else if (n.Code == '41') { this.MachineryPhoenix = true; this.editsections('MachineryPhoenix') }
          else if (n.Code == '37') { this.EmloyersLiabilityPhoenix = true; this.editsections('EmployersLiabilityphoenix') }
          else if (n.Code == '54') {
            let contentData = null;
            if (this.insuranceId == '100046') contentData = new PublicLiabilityPhoenix();
            if (this.insuranceId == '100047') contentData = new PublicLiabilityBotswana();
            if (this.insuranceId == '100048') contentData = new PublicLiabilityMozambique();
            if (this.insuranceId == '100049') contentData = new PublicLiabilitySwaziland();
            if (this.insuranceId == '100050') contentData = new PublicLiabilityNamibia();
            this.PublicLiabilityPhoenix = true;
            this.genaralField = contentData.policyfields.fieldGroup;
            this.IndemityRevenue = contentData.policyfields1.fieldGroup;
            this.ExtendsFields = contentData.extendsfields.fieldGroup;
            this.addControlsToForm(this.genaralField);
            this.addControlsToForm(this.IndemityRevenue);
            this.addControlsToForm(this.ExtendsFields);
            this.groupedFields = this.groupFields(this.genaralField);
            this.ExtensFields = this.groupFields(this.ExtendsFields);
            this.getGeneralLiability();
            this.getArrestSi();
            this.getLiabilityLegalSi();
            this.getClaimCostSi();
            let fireData2 = null;
            fireData2 = new EngineeringAllRiskPhoenix();
            this.fieldsEAR = this.groupFields(fireData2.EARfields.fieldGroup);
            this.fieldsEARPrimary = fireData2.constructionEARfields.fieldGroup;
            this.fieldsEARAdditional = this.groupFields(fireData2.additionalEARfields.fieldGroup);
            this.fieldsEARExtensions = this.groupFields(fireData2.extendsEARfields.fieldGroup);
          }
          else if (n.Code == '182') {
            this.GroupPersonalPhoenix = true;
            let contentData = null;
            if (this.insuranceId == '100046') contentData = new GPAPhoenix();
            else if (this.insuranceId == '100047') { contentData = new GPABotswana() }
            else if (this.insuranceId == '100048') { contentData = new GPAMozambique(); }
            else if (this.insuranceId == '100049') { contentData = new GPASwaziland(); }
            else if (this.insuranceId == '100050') { contentData = new GPANamibia(); }
            this.GroupPersonalForm = contentData.fields;
            this.getOccupationEmployers();
            this.getNoOfWeeks();
            if (!this.requestReferenceNo) this.showAddForm = true;
            // let singleArray=[];
            // singleArray.push(contentData.groupPersonalAccident.fieldGroup)
            // this.addControlsToForm(singleArray);
            // this.GroupPersonalForm = singleArray;
            // console.log( this.GroupPersonalForm,"GroupPersonalForm")
          }
       
          if (!this.BIPhoenix && this.productId == '66') { this.BIPhoenix = true; this.editsections('BIPhoenix') }
          i += 1;
          if (i == this.sectionDropdownList.length) {
            console.log(locationList);
            
            if (locationList) {
              let i = 0; this.locationList = [];
              for (let entry of locationList) {
                let obj = {
                  "LocationId": entry.LocationId, "LocationName": entry.LocationName, "CoversRequired": entry?.CoversRequired, "BuildingOwnerYn": entry?.BuildingOwnerYn,
                  "BuildingList": [], "GeyserList": [{ "BuildingUsageId": null, "SumInsured": 0 }], "BuildingAddress": entry.Address, "LiabilityList": [{ 'CategoryId': null, 'SumInsured': null }],
                  "WorkmenList": [{ 'OccupationId': null, 'SumInsured': null }], "PAList": [{ 'RelationType': null, 'DeathSI': null }], "ElecEquipList": [{ 'ContentId': null, 'ContentDesc': null, 'SumInsured': null, 'SerialNo': null }],
                  "contents": [], "employers": [],
                  "MachineryList": [{ 'ItemId': null, 'SumInsured': null, 'SerialNo': null }], "PlateGlassList": [{ "SumInsured": null, "CategoryId": null }]
                }
                let subDetails = entry.SectionList;
                console.log(subDetails);
                
                let demo = subDetails.filter(ele => ele['SectionId'] == '56');
                let contentDetails = subDetails.filter(ele => ele['SectionId'] == '47');
                if (contentDetails.length != 0) {
                  obj['ContentSuminsured'] = contentDetails[0].SumInsured;
                  obj['ContentConstructionType'] = contentDetails[0].CategoryId;
                  obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }
                let buildDetails = subDetails.filter(ele => ele['SectionId'] == '1');
                console.log(buildDetails, "buildDetails");
                if (buildDetails.length != 0) {
                  obj['BuildingSumInsured'] = buildDetails[0].SumInsured;
                  obj['WallType'] = buildDetails[0].CategoryId;
                  obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }
                let PlantType = subDetails.filter(ele => ele['SectionId'] == '185');
                if (PlantType.length != 0) {
                  obj['PlantConstructionType'] = PlantType[0].CategoryId;
                  obj['PlantSumInsured'] = PlantType[0].SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }

                let Trade = subDetails.filter(ele => ele['SectionId'] == '186');
                if (Trade.length != 0) {
                  obj['TradeConstructionType'] = Trade[0].CategoryId;
                  obj['TradeSumInsured'] = Trade[0].SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }

                let Miscellaneous = subDetails.filter(ele => ele['SectionId'] == '187');
                if (Miscellaneous.length != 0) {
                  obj['MiscellaneousConstructionType'] = Miscellaneous[0].CategoryId;
                  obj['MiscellaneousSumInsured'] = Miscellaneous[0].SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }
                let Powersurge = subDetails.filter(ele => ele['SectionId'] == '188');
                if (Powersurge.length != 0) {
                  // obj['MiscellaneousConstructionType']=Powersurge[0].CategoryId;
                  obj['PowerSurgeSumInsured'] = Powersurge[0].SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }

                let Leakage = subDetails.filter(ele => ele['SectionId'] == '189');
                if (Leakage.length != 0) {
                  obj['FirstLossBasis'] = Leakage[0].CategoryId;
                  obj['FirstLossBasisSumInsured'] = Leakage[0].SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }

                let HailDamage = subDetails.filter(ele => ele['SectionId'] == '190');
                if (HailDamage.length != 0) {
                  // obj['FirstLossBasis']=Leakage[0].HailDamage;
                  obj['HailDamageSumInsured'] = Leakage[0].SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }

                let Rent = subDetails.filter(ele => ele['SectionId'] == '191');
                if (Rent.length != 0) {
                  // obj['FirstLossBasis']=Leakage[0].HailDamage;
                  obj['RentSumInsured'] = Rent[0].SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }

                let Inflation = subDetails.filter(ele => ele['SectionId'] == '192');
                if (Inflation.length != 0) {
                  obj['InflationConstructionType'] = Inflation[0].CategoryId;
                  obj['InflationSumInsured'] = Inflation[0].SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }
                let Geyser = subDetails.filter(ele => ele['SectionId'] == '196');
                if (Geyser.length != 0) {
                  //  obj['InflationConstructionType']=Geyser[0].HailDamage;
                  let solarEntry = Geyser.filter(ele => ele.CoverId == 488 || ele.CoverId == '488')
                  if (solarEntry.length != 0) { obj['GeyserSolarSumInsured'] = solarEntry[0].SumInsured;; obj['GeyserSolarDescription'] = solarEntry[0].DescriptionOfRisk; obj['IndustryType'] = null; if (solarEntry[0]?.IndustryType != '0') obj['IndustryType'] = solarEntry[0].IndustryType; }
                  let houseEntry = Geyser.filter(ele => ele.CoverId == 364 || ele.CoverId == '364')
                  if (houseEntry.length != 0) { obj['GeyserHouseSumInsured'] = solarEntry[0].SumInsured; obj['GeyserHouseDescription'] = solarEntry[0].DescriptionOfRisk; obj['IndustryType'] = null; if (solarEntry[0]?.IndustryType != '0') obj['IndustryType'] = solarEntry[0].IndustryType; }
                }
                let ClaimsPreparation = subDetails.filter(ele => ele['SectionId'] == '197');
                if (ClaimsPreparation.length != 0) {
                  //  obj['InflationConstructionType']=Geyser[0].HailDamage;
                  obj['ClaimsPreparationSumInsured'] = ClaimsPreparation[0].CategoryId; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }
                let Liability = subDetails.filter(ele => ele['SectionId'] == '44');
                if (Liability.length != 0) {
                  //  obj['InflationConstructionType']=Geyser[0].HailDamage;
                  obj['LiabilitySumInsured'] = Liability[0].SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                }
                if (this.productId != '71') {
                  let OfficeContents = subDetails.filter(ele => ele['SectionId'] == '198');
                  if (OfficeContents.length != 0) {
                    let coverList = this.sectionDropdownList.find(ele => ele.Code == '198')?.CoverList;
                    if (coverList) {
                      for (let cover of coverList) {
                        let entry = OfficeContents.find(ele => String(ele.CoverId) == cover.CoverId);
                        if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                      }
                    }
                  }
                }



                // let StateBenefits  = subDetails.filter(ele=>ele['SectionId']=='225');
                // if(StateBenefits.length!=0){
                //   let coverList = this.sectionDropdownList.find(ele=>ele.Code=='225')?.CoverList;
                //   if(coverList){
                //     for(let cover of coverList){
                //       let entry = StateBenefits.find(ele=>String(ele.CoverId)==cover.CoverId);
                //       if(entry){obj[cover.CoverName.replaceAll(" ","")]=entry?.SumInsured;obj['IndustryType']=null;if(entry?.IndustryType!='0')obj['IndustryType']=entry?.IndustryType;}
                //     }
                //   }
                // }
                let powerSurge = subDetails.filter(ele => ele['SectionId'] == '188');
                if (powerSurge.length != 0) {

                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '188')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = powerSurge.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }
                let additionalClaims = subDetails.filter(ele => ele['SectionId'] == '201');
                if (additionalClaims.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '201')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = additionalClaims.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }
                let LiabilityLoss = subDetails.filter(ele => ele['SectionId'] == '202');
                if (LiabilityLoss.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '202')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = LiabilityLoss.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }
                let Umbrella = subDetails.filter(ele => ele['SectionId'] == '224');
                if (Umbrella.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '224')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = Umbrella.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }
                let GlassEntry = subDetails.filter(ele => ele['SectionId'] == '222');
                if (GlassEntry.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '222')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = GlassEntry.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }
                // let TheftEntry  = subDetails.filter(ele=>ele['SectionId']=='220');
                // if(TheftEntry.length!=0){
                //   let coverList = this.sectionDropdownList.find(ele=>ele.Code=='220')?.CoverList;
                //   if(coverList){
                //     for(let cover of coverList){
                //       let entry = TheftEntry.find(ele=>String(ele.CoverId)==cover.CoverId);
                //       if(entry){obj[cover.CoverName.replaceAll(" ","")]=entry?.SumInsured;obj['IndustryType']=null;if(entry?.IndustryType!='0')obj['IndustryType']=entry?.IndustryType;}
                //     }
                //   }
                // }
                let thirdAspects = subDetails.filter(ele => ele['SectionId'] == '199');
                if (thirdAspects.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '199')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = thirdAspects.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }
                let leakage = subDetails.filter(ele => ele['SectionId'] == '200');
                if (leakage.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '200')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = leakage.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }



                // for (let i = this.tabIndex; i < this.locationList.length; i++) {
                //   let obj: any = {}; // Define obj for each iteration
                //   let AccDamageSection = subDetails.filter(ele => ele['SectionId'] == '56');
                //   console.log(AccDamageSection);

                //   if (AccDamageSection.length != 0) {
                //     let accPhysical = AccDamageSection.filter(ele => ele.CoverId == 417 || ele.CoverId == '417');
                //     accPhysical.forEach(ele => {
                //       obj['AccidentalPhysicalLossDamage'] = ele.SumInsured;
                //       obj['IndustryType'] = null;
                //       if (ele?.IndustryType != '0') obj['IndustryType'] = ele.IndustryType;
                //     });

                //     let accMaximum = AccDamageSection.filter(ele => ele.CoverId == 416 || ele.CoverId == '416');
                //     accMaximum.forEach(ele => {
                //       obj['MaximumLimitperOccurrence'] = ele.SumInsured;
                //       obj['IndustryType'] = null;
                //       if (ele?.IndustryType != '0') obj['IndustryType'] = ele.IndustryType;
                //     });

                //     let accAdditional = AccDamageSection.filter(ele => ele.CoverId == 372 || ele.CoverId == '372');
                //     accAdditional.forEach(ele => {
                //       obj['AdditionalclaimsPreparationCosts'] = ele.SumInsured;
                //       obj['IndustryType'] = null;
                //       if (ele?.IndustryType != '0') obj['IndustryType'] = ele.IndustryType;
                //     });

                //     let accAccidental = AccDamageSection.filter(ele => ele.CoverId == 491 || ele.CoverId == '491');
                //     accAccidental.forEach(ele => {
                //       obj['Accidentaloilandchemical'] = ele.SumInsured;
                //       obj['IndustryType'] = null;
                //       if (ele?.IndustryType != '0') obj['IndustryType'] = ele.IndustryType;
                //     });
                //   }

                //   console.log(`Processed location index: ${i}`, obj);
                // }


                let TheftSection = subDetails.filter(ele => ele['SectionId'] == '220');
                if (TheftSection.length != 0) {
                  let theftLossDamage = TheftSection.filter(ele => ele.CoverId == 423 || ele.CoverId == '423')
                  if (theftLossDamage.length != 0) { obj['LossDamagetoPersonalEffects'] = theftLossDamage[0].SumInsured; obj['IndustryType'] = null; if (theftLossDamage[0]?.IndustryType != '0') obj['IndustryType'] = theftLossDamage[0].IndustryType; }
                  let theftFuelaboveGround = TheftSection.filter(ele => ele.CoverId == 419 || ele.CoverId == '419')
                  if (theftFuelaboveGround.length != 0) { obj['FuelinAbovegroundtanks'] = theftFuelaboveGround[0].SumInsured; obj['IndustryType'] = null; if (theftFuelaboveGround[0]?.IndustryType != '0') obj['IndustryType'] = theftFuelaboveGround[0].IndustryType; }
                  let theftFuelbottomGround = TheftSection.filter(ele => ele.CoverId == 500 || ele.CoverId == '500')
                  if (theftFuelbottomGround.length != 0) { obj['FuelinUndergroundtanks'] = theftFuelbottomGround[0].SumInsured; obj['IndustryType'] = null; if (theftFuelbottomGround[0]?.IndustryType != '0') obj['IndustryType'] = theftFuelbottomGround[0].IndustryType; }
                  let theftDamageByThieves = TheftSection.filter(ele => ele.CoverId == 421 || ele.CoverId == '421')
                  if (theftDamageByThieves.length != 0) { obj['DamagetoBuildingscausedbyThieves'] = theftDamageByThieves[0].SumInsured; obj['IndustryType'] = null; if (theftDamageByThieves[0]?.IndustryType != '0') obj['IndustryType'] = theftDamageByThieves[0].IndustryType; }
                  let theftLockskeys = TheftSection.filter(ele => ele.CoverId == 3422 || ele.CoverId == '422')
                  if (theftLockskeys.length != 0) { obj['LocksandKeys'] = theftLockskeys[0].SumInsured; obj['IndustryType'] = null; if (theftLockskeys[0]?.IndustryType != '0') obj['IndustryType'] = theftLockskeys[0].IndustryType; }
                  let theftfirstlosslimit = TheftSection.filter(ele => ele.CoverId == 418 || ele.CoverId == '418')
                  if (theftfirstlosslimit.length != 0) { obj['FirstLossLimit'] = theftfirstlosslimit[0].SumInsured; obj['IndustryType'] = null; if (theftfirstlosslimit[0]?.IndustryType != '0') obj['IndustryType'] = theftfirstlosslimit[0].IndustryType; }
                  let theftVehicles = TheftSection.filter(ele => ele.CoverId == 420 || ele.CoverId == '420')
                  if (theftVehicles.length != 0) { obj['VehiclesintheOpen'] = theftVehicles[0].SumInsured; obj['IndustryType'] = null; if (theftVehicles[0]?.IndustryType != '0') obj['IndustryType'] = theftVehicles[0].IndustryType; }
                  let theftClaims = TheftSection.filter(ele => ele.CoverId == 372 || ele.CoverId == '372')
                  if (theftClaims.length != 0) { obj['AdditionalClaimsPreparationCosts'] = theftClaims[0].CategoryId; obj['IndustryType'] = null; if (theftClaims[0]?.IndustryType != '0') obj['IndustryType'] = theftClaims[0].IndustryType; }


                }

                let GlassSection = subDetails.filter(ele => ele['SectionId'] == '222');
                if (GlassSection.length != 0) {
                  let glassReinstate = GlassSection.filter(ele => ele.CoverId == 429 || ele.CoverId == '429')
                  if (glassReinstate.length != 0) { obj['SpecialReinstatement'] = glassReinstate[0].SumInsured; obj['IndustryType'] = null; if (glassReinstate[0]?.IndustryType != '0') obj['IndustryType'] = glassReinstate[0].IndustryType; }
                  let glassInternal = GlassSection.filter(ele => ele.CoverId == 489 || ele.CoverId == '489')
                  if (glassInternal.length != 0) { obj['InternalGlass'] = glassInternal[0].SumInsured; obj['IndustryType'] = null; if (glassInternal[0]?.IndustryType != '0') obj['IndustryType'] = glassInternal[0].IndustryType; }
                  let glassExternal = GlassSection.filter(ele => ele.CoverId == 490 || ele.CoverId == '490')
                  if (glassExternal.length != 0) { obj['ExternalGlass'] = glassExternal[0].SumInsured; obj['IndustryType'] = null; if (glassExternal[0]?.IndustryType != '0') obj['IndustryType'] = glassExternal[0].IndustryType; }
                  let glassClaims = GlassSection.filter(ele => ele.CoverId == 372 || ele.CoverId == '372')
                  if (glassClaims.length != 0) { obj['GlassClaimsPreparationCosts'] = glassClaims[0].CategoryId; obj['IndustryType'] = null; if (glassClaims[0]?.IndustryType != '0') obj['IndustryType'] = glassClaims[0].IndustryType; }
                  obj['IndustryType'] = GlassSection[0]['IndustryType']
                }

                // Employers LIabilitys
                // let EmployersLiability  = subDetails.filter(ele=>ele['SectionId']=='37');
                // if(EmployersLiability.length!=0){
                //   let employersSumInsured = EmployersLiability.filter(ele=>ele.CoverId==293|| ele.CoverId=='293')
                //   if(employersSumInsured.length!=0){obj['EmployersLiability']=employersSumInsured[0].SumInsured;obj['IndustryType']=null;if(employersSumInsured[0]?.IndustryType!='0')obj['IndustryType']=employersSumInsured[0].IndustryType;}

                //   obj['IndustryType'] = EmployersLiability[0]['IndustryType']

                // }

                // let FidelitySection  = subDetails.filter(ele=>ele['SectionId']=='43');
                // if(FidelitySection.length!=0){
                //   let fideIndeminity = FidelitySection.filter(ele=>ele.CoverId==293|| ele.CoverId=='293')
                //   if(fideIndeminity.length!=0){obj['LimitofIndeminity']=fideIndeminity[0].SumInsured;obj['IndustryType']=null;if(fideIndeminity[0]?.IndustryType!='0')obj['IndustryType']=fideIndeminity[0].IndustryType;}
                //   let fideClaims = FidelitySection.filter(ele=>ele.CoverId==372|| ele.CoverId=='372')
                //   if(fideClaims.length!=0){obj['FidelityClaimsPreparationCost']=fideClaims[0].SumInsured;obj['IndustryType']=null;if(fideClaims[0]?.IndustryType!='0')obj['IndustryType']=fideClaims[0].IndustryType;}
                // }

                let allRisk = subDetails.filter(ele => ele['SectionId'] == '223');
                if (allRisk.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '223')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = allRisk.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj[cover.CoverName.replaceAll(" ", "") + 'Desc'] = entry?.DescriptionOfRisk; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }



                let GroupPersonalAccidentPhoenix = subDetails.filter(ele => ele['SectionId'] == '182');
                if (GroupPersonalAccidentPhoenix.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '182')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = GroupPersonalAccidentPhoenix.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }
                let BIPhoenix = subDetails.filter(ele => ele['SectionId'] == '75');
                if (BIPhoenix.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '75')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = BIPhoenix.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) {
                        obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured;
                        if (entry?.BuildingUsageId) obj['BuildingUsageId'] = entry?.BuildingUsageId;
                        obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                      }
                    }
                  }
                }

                // let GoodsTransitPhoenix  = subDetails.filter(ele=>ele['SectionId']=='46');
                // if(GoodsTransitPhoenix.length!=0){
                //   let coverList = this.sectionDropdownList.find(ele=>ele.Code=='46')?.CoverList;
                //   if(coverList){
                //     for(let cover of coverList){
                //       let entry = GoodsTransitPhoenix.find(ele=>String(ele.CoverId)==cover.CoverId);
                //       if(entry){obj[cover.CoverName.replaceAll(" ","")]=entry?.SumInsured;
                //         obj['IndustryType']=null;if(entry?.IndustryType!='0')obj['IndustryType']=entry?.IndustryType;
                //         if(entry?.BuildingUsageId)obj['BuildingUsageId']=entry?.BuildingUsageId;
                //       }
                //     }
                //   }
                // }
                let FirePhoenix = subDetails.filter(ele => ele['SectionId'] == '4');
                if (FirePhoenix.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '4')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = FirePhoenix.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) {
                        obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured;
                        obj['IndustryType'] = null; obj['CategoryId'] = null; obj['BuildingUsageId'] = null;
                        if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType;
                        if (entry?.CategoryId) obj['CategoryId'] = entry?.CategoryId;
                        if (entry?.BuildingUsageId) obj['BuildingUsageId'] = entry?.BuildingUsageId;
                      }
                    }
                  }
                }
                let MotorPhoenix = subDetails.filter(ele => ele['SectionId'] == '50');
                if (MotorPhoenix.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '50')?.CoverList;
                  if (coverList) {
                    for (let cover of coverList) {
                      let entry = MotorPhoenix.find(ele => String(ele.CoverId) == cover.CoverId);
                      if (entry) { obj[cover.CoverName.replaceAll(" ", "")] = entry?.SumInsured; obj['IndustryType'] = null; if (entry?.IndustryType != '0') obj['IndustryType'] = entry?.IndustryType; }
                    }
                  }
                }
                // let EmployeePhoenix  = subDetails.filter(ele=>ele['SectionId']=='37');
                // if(EmployeePhoenix.length!=0){
                //   let coverList = this.sectionDropdownList.find(ele=>ele.Code=='37')?.CoverList;
                //   if(coverList){
                //     for(let cover of coverList){
                //       let entry = EmployeePhoenix.find(ele=>String(ele.CoverId)==cover.CoverId);
                //       if(entry){obj[cover.CoverName.replaceAll(" ","")]=entry?.SumInsured;obj['IndustryType']=null;if(entry?.IndustryType!='0')obj['IndustryType']=entry?.IndustryType;}
                //     }
                //   }
                // }
                let FidelityPhoenix = subDetails.filter(ele => ele['SectionId'] == '43');
                

                if (FidelityPhoenix.length != 0) {
                  let coverList = this.sectionDropdownList.find(ele => ele.Code == '43')?.CoverList;
                  console.log(coverList);
                  
                  if (coverList) {
                    obj['entries'] = []; // Initialize an array to store multiple objects
                    let occupationMap = new Map(); // Map to group by OtherOccupation

                    for (let cover of coverList) {
                      for (let entry of FidelityPhoenix) {
                        if (String(entry.CoverId) === cover.CoverId) {
                          let coverName = cover.CoverName.replaceAll(" ", ""); // Format cover name
                          let occupation = entry.OtherOccupation || "Unknown"; // Use OtherOccupation as key

                          if (!occupationMap.has(occupation)) {
                            occupationMap.set(occupation, { OtherOccupation: occupation }); // Initialize object
                          }

                          // Add SumInsured under the respective cover name
                          occupationMap.get(occupation)[coverName] = entry.SumInsured;

                          // Assign IndustryType only if it's not '0'
                          if (entry?.IndustryType !== '0') {
                            occupationMap.get(occupation)['IndustryType'] = entry.IndustryType;
                          }
                        }
                      }
                    }

                    // Convert map values to array
                    obj['entries'] = Array.from(occupationMap.values());
                  }
                }
             
                 
                 
                
                // // Public Liablity Phoenix
                // let DeteriorationOfStockPhoenix = subDetails.filter(ele => ele['SectionId'] == '226');
                // if (DeteriorationOfStockPhoenix.length != 0) {
                //   let DeteriorationOfStockList = DeteriorationOfStockPhoenix.filter(ele => ele.CoverId == '471' ||  ele.CoverId == 471);
                //   if (DeteriorationOfStockList.length != 0) { obj['DeteriorationOfStock'] = DeteriorationOfStockList[0].SumInsured;obj['DeteriorationOfStockDesc']= DeteriorationOfStockList[0].DescriptionOfRisk;obj['IndustryType']=DeteriorationOfStockList[0].IndustryType;}

                // }
                if (this.productId == '27') {
                  let publicLiability = null;
                  if (this.insuranceId == '100046') publicLiability = new PublicLiabilityApiPhoenix();
                  else if (this.insuranceId == '100047') publicLiability = new PublicLiabilityApiBotswana()
                  else if (this.insuranceId == '100048') publicLiability = new PublicLiabilityApiMozambique()
                  else if (this.insuranceId == '100049') publicLiability = new PublicLiabilityApiSwaziland()
                  else if (this.insuranceId == '100050') publicLiability = new PublicLiabilityApiNamibia()
                  obj = publicLiability.getEditDetails(subDetails, obj);
                }
                if (this.productId == '70') {
                  let accidentalApi = null;
                  if (this.insuranceId == '100046') accidentalApi = new AccidentalDamageApiPhoenix();
                  else if (this.insuranceId == '100047') accidentalApi = new AccidentalDamageBotswanaApi();
                  else if (this.insuranceId == '100048') accidentalApi = new AccidentalDamageMozambiqueApi();
                  else if (this.insuranceId == '100049') accidentalApi = new AccidentalDamageSwazilandApi();
                  else if (this.insuranceId == '100050') accidentalApi = new AccidentalDamageNamibiaApi();
                  obj = accidentalApi.getEditDetails(subDetails, obj);
                  console.log("Final Edit Value", obj)
                }
                if (this.productId == '76') {
                  let houseOwner: any;
                  if (this.insuranceId == "100046") houseOwner = new HouseOwnerApiPhoenix();
                  else if (this.insuranceId == '100047') houseOwner = new HouseOwnerApiBotswana();
                  else if (this.insuranceId == '100048') houseOwner = new HouseOwnerApiMozambique();
                  else if (this.insuranceId == '100049') houseOwner = new HouseOwnerApiSwaziland();
                  else if (this.insuranceId == '100050') houseOwner = new HouseOwnerApiNamibia();
                  obj = houseOwner.getEditDetails(subDetails, obj);
                }
                //Electronic Equipment
                if (this.productId == '25') {
                  let publicLiability: any;
                  if (this.insuranceId == "100046") publicLiability = new ElectronicEquipmentApi();
                  else if (this.insuranceId == '100047') publicLiability = new ElectronicEquipmentApiBotswana();
                  else if (this.insuranceId == '100048') publicLiability = new ElectronicEquipmentApiMozambique();
                  else if (this.insuranceId == '100049') publicLiability = new ElectronicEquipmentApiSwaziland();
                  else if (this.insuranceId == '100050') publicLiability = new ElectronicEquipmentApiNamibia();
                  obj = publicLiability.getEditDetails(subDetails, obj);
                }
                //Machinery Breakdown
                if (this.productId == '39') {
                  let machineryApi: any;
                  if (this.insuranceId == "100046") machineryApi = new MachineryBreakdownApi();
                  else if (this.insuranceId == '100047') machineryApi = new MachineryBreakdownApiBotswana();
                  else if (this.insuranceId == '100048') machineryApi = new MachineryBreakdownApiMozambique();
                  else if (this.insuranceId == '100049') machineryApi = new MachineryBreakdownApiSwaziland();
                  else if (this.insuranceId == '100050') machineryApi = new MachineryBreakdownApiNamibia();
                  obj = machineryApi.getEditDetails(subDetails, obj);
                }
                //Umbrella
                if (this.productId == '73') {
                  let umbrella = null;
                  if (this.insuranceId == '100046') umbrella = new UmbrellaApi();
                  else if (this.insuranceId == '100047') umbrella = new UmbrellaApiBotswana();
                  else if (this.insuranceId == '100048') umbrella = new UmbrellaApiMozambique();
                  else if (this.insuranceId == '100049') umbrella = new UmbrellaApiSwaziland();
                  else if (this.insuranceId == '100050') umbrella = new UmbrellaApiNamibia();
                  obj = umbrella.getEditDetails(subDetails, obj);
                }
                // Office Contents 
                if (this.productId == '68') {
                  let officecontentsApi = null;
                  if (this.insuranceId == '100046') officecontentsApi = new OfficeContentsApiPhoenix();
                  else if (this.insuranceId == '100047') officecontentsApi = new OfficeContentsApiBotswana();
                  else if (this.insuranceId == '100048') officecontentsApi = new OfficeContentsApiMozambique();
                  else if (this.insuranceId == '100049') officecontentsApi = new OfficeContentsApiSwaziland();
                  else if (this.insuranceId == '100050') officecontentsApi = new OfficeContentsApiNamibia();
                  obj = officecontentsApi.getEditDetails(subDetails, obj);

                }
                // Accounts Recievable
                if (this.productId == '69') {
                  let accountsRecievable = null;
                  if (this.insuranceId == '100046') accountsRecievable = new AccountsRecievableApiPhoenix();
                  else if (this.insuranceId == '100047') accountsRecievable = new AccountsRecievableBotswanaApi();
                  else if (this.insuranceId == '100048') accountsRecievable = new AccountsRecievableMozambiqueApi();
                  else if (this.insuranceId == '100049') accountsRecievable = new AccountsRecievableSwazilandApi();
                  else if (this.insuranceId == '100050') accountsRecievable = new AccountsRecievableNamibiaApi();
                  obj = accountsRecievable.getEditDetails(subDetails, obj);
                }
                // Theft
                if (this.productId == '71') {
                  let theft: any;
                  if (this.insuranceId == '100046') theft = new TheftApiPhoenix();
                  else if (this.insuranceId == '100047') theft = new TheftApiBotswana();
                  else if (this.insuranceId == '100048') theft = new TheftApiMozambique();
                  else if (this.insuranceId == '100049') theft = new TheftApiSwaziland();
                  else if (this.insuranceId == '100050') theft = new TheftApiNamibia();
                  obj = theft.getEditDetails(subDetails, obj);
                }
                // Glass
                if (this.productId == '72') {
                  let glassApi: any;
                  if (this.insuranceId == '100046') glassApi = new GlassApiPhoenix();
                  else if (this.insuranceId == '100047') glassApi = new GlassApiBotswana();
                  else if (this.insuranceId == '100048') glassApi = new GlassApiMozambique();
                  else if (this.insuranceId == '100049') glassApi = new GlassApiSwaziland();
                  else if (this.insuranceId == '100050') glassApi = new GlassApiNamibia();
                  obj = glassApi.getEditDetails(subDetails, obj);
                }
                // Business Alll risk
                if (this.productId == '26') {
                  let businessallriskApi = null;
                  if (this.insuranceId == '100046') businessallriskApi = new BusinessAllRiskApiPhoenix();
                  else if (this.insuranceId == '100047') businessallriskApi = new BusinessAllRiskApiBotswana();
                  else if (this.insuranceId == '100048') businessallriskApi = new BusinessAllRiskApiMozambique();
                  else if (this.insuranceId == '100049') businessallriskApi = new BusinessAllRiskApiSwaziland();
                  else if (this.insuranceId == '100050') businessallriskApi = new BusinessAllRiskApiNamibia();
                  obj = businessallriskApi.getEditDetails(subDetails, obj);
                }
                if (this.productId == '80') {
                  let personalallriskApi = null;
                  if (this.insuranceId == '100046') personalallriskApi = new PersonalAllRiskApiPhoenix();
                  obj = personalallriskApi.getEditDetails(subDetails, obj);
                }
                if (this.productId == '81') {
                  let personalliabilityApi = null;
                  if (this.insuranceId == '100046') personalliabilityApi = new PersonalLiabilityApiPhoenix();
                  obj = personalliabilityApi.getEditDetails(subDetails, obj);
                }
                if (this.productId == '79') {
                  let constructionAllRiskApi = null;
                  if (this.insuranceId == '100046') constructionAllRiskApi = new ConstructionAllRiskApiPhoenix();
                  let engineerInfo = JSON.parse(sessionStorage.getItem('EngineerInfo'));
                  obj = constructionAllRiskApi.getEditDetails(subDetails, obj, engineerInfo);             
                }
                if (this.productId == '82') {
                  let constructionAllRiskApi = null;
                  if (this.insuranceId == '100002') constructionAllRiskApi = new ConstructionAllRiskUptoApiTanzaniya();
                  let engineerInfo = JSON.parse(sessionStorage.getItem('EngineerInfo'));
                  obj = constructionAllRiskApi.getEditDetails(subDetails, obj, engineerInfo);              
                }
                if (this.productId == '83') {
                  let constructionAllRiskApi = null;
                  if (this.insuranceId == '100002') constructionAllRiskApi = new ConstructionAllRiskUptoApiTanzaniya();
                  let engineerInfo = JSON.parse(sessionStorage.getItem('EngineerInfo'));
                  obj = constructionAllRiskApi.getEditDetails(subDetails, obj, engineerInfo);             
                }
                if (this.productId == '84') {
                  let engineeringAllRiskApi = null;
                  if (this.insuranceId == '100046') engineeringAllRiskApi = new EngineeringAllRiskApiPhoenix();
                  let engineerInfo = JSON.parse(sessionStorage.getItem('EngineerInfo'));
                  obj = engineeringAllRiskApi.getEditDetails(subDetails, obj, engineerInfo); 
                }
                // Deteroitation of stock
                if (this.productId == '75') {
                  let deterApi = null;
                  if (this.insuranceId == '100046') deterApi = new DeteriorationOfStockApiPhoenix();
                  else if (this.insuranceId == '100047') deterApi = new DeteriorationOfStockApiBotswana();
                  else if (this.insuranceId == '100048') deterApi = new DeteriorationOfStockApiMozambique();
                  else if (this.insuranceId == '100049') deterApi = new DeteriorationOfStockApiSwaziland();
                  else if (this.insuranceId == '100050') deterApi = new DeteriorationOfStockApiNamibia();
                  obj = deterApi.getEditDetails(subDetails, obj);
                }
                //Stated Benefits
                if (this.productId == '74') {
                  let stateList: any;
                  if (this.insuranceId == "100046") stateList = new StatedBenefitsApi();
                  else if (this.insuranceId == '100047') stateList = new StatedBenefitsApiBotswana();
                  else if (this.insuranceId == '100048') stateList = new StatedBenefitsApiMozambique();
                  else if (this.insuranceId == '100049') stateList = new StatedBenefitsApiSwaziland();
                  else if (this.insuranceId == '100050') stateList = new StatedBenefitsApiNamibia();
                  obj = stateList.getEditDetails(subDetails, obj);
                }
                // Money
                if (this.productId == '16') {
                  let moneyApi = null;
                  if (this.insuranceId == '100046') moneyApi = new MoneyApi();
                  else if (this.insuranceId == '100047') moneyApi = new MoneyApiBotswana();
                  else if (this.insuranceId == '100048') moneyApi = new MoneyApiMozambique();
                  else if (this.insuranceId == '100049') moneyApi = new MoneyApiSwaziland();
                  else if (this.insuranceId == '100050') moneyApi = new MoneyApiNamibia();
                  obj = moneyApi.getEditDetails(subDetails, obj);

                }
                if (this.productId == '49') {
                  let goodsApi = null;
                  if (this.insuranceId == '100046') goodsApi = new GoodsInTransitApiPhoenix()
                  else if (this.insuranceId == '100047') goodsApi = new GoodsInTransitApiBotswana()
                  else if (this.insuranceId == '100048') goodsApi = new GoodsInTransitApiMozambique()
                  else if (this.insuranceId == '100049') goodsApi = new GoodsInTransitApiSwaziland()
                  else if (this.insuranceId == '100050') goodsApi = new GoodsInTransitApiNamibia()

                  obj = goodsApi.getEditDetails(subDetails, obj);
                }
                if (this.productId == '78') {
                  let HouseContentsApi = null;
                  if (this.insuranceId == '100046') HouseContentsApi = new HouseHoldersContentsApiPhoenix();
                  else if (this.insuranceId == '100047') HouseContentsApi = new HouseHoldersContentsApiBotswana();
                  else if (this.insuranceId == '100048') HouseContentsApi = new HouseHoldersContentsApiMozambique();
                  else if (this.insuranceId == '100049') HouseContentsApi = new HouseHoldersContentsApiSwaziland();
                  else if (this.insuranceId == '100050') HouseContentsApi = new HouseHoldersContentsApiNamibia();
                  obj = HouseContentsApi.getEditDetails(subDetails, obj);
                }
                if (this.productId == '14') {
                  let employeerApi = null;
                  if (this.insuranceId == '100046') employeerApi = new EmployersLiabilityApiPhoenix();
                  else if (this.insuranceId == '100047') employeerApi = new EmployersLiabilityApiBotswana();
                  else if (this.insuranceId == '100048') employeerApi = new EmployersLiabilityApiMozambique();
                  else if (this.insuranceId == '100049') employeerApi = new EmployersLiabilityApiSwaziland();
                  else if (this.insuranceId == '100050') employeerApi = new EmployersLiabilityApiNamibia();
                  obj = employeerApi.getEditDetails(subDetails, obj);
                }
                if (this.productId == '57') {
                  let GPArisk = null;
                  if (this.insuranceId == '100046') GPArisk = new GPAApiPhoenix()
                  else if (this.insuranceId == '100047') GPArisk = new GPAApiBotswana()
                  else if (this.insuranceId == '100048') GPArisk = new GPAApiMozambique()
                  else if (this.insuranceId == '100049') GPArisk = new GPAApiSwaziland()
                  else if (this.insuranceId == '100050') GPArisk = new GPAApiNamibia()
                  obj = GPArisk.getEditDetails(subDetails, obj, i);


                }
                if (this.productId == '80') {
                  let PersonalAllrisk = null;
                  if (this.insuranceId == '100046') PersonalAllrisk = new PersonalAllRiskApiPhoenix()
                  else if (this.insuranceId == '100047') PersonalAllrisk = new PersonalAllRiskApiBotswana()
                  else if (this.insuranceId == '100048') PersonalAllrisk = new PersonalAllRiskApiMozambique()
                  else if (this.insuranceId == '100049') PersonalAllrisk = new PersonalAllRiskApiSwaziland()
                  else if (this.insuranceId == '100050') PersonalAllrisk = new PersonalAllRiskApiNamibia()

                  obj = PersonalAllrisk.getEditDetails(subDetails, obj);
                  console.log(obj);


                }
                if (this.productId == '59') {
                  let PersonalAccidentrisk = null;
                  if (this.insuranceId == '100002') PersonalAccidentrisk = new PersonalAccidentApiPhoenix()
                  obj = PersonalAccidentrisk.getEditDetails(subDetails, obj);
                }
                // let DetoriationPhoenix  = subDetails.filter(ele=>ele['SectionId']=='226');
                // if(DetoriationPhoenix.length!=0){
                //   let coverList = this.sectionDropdownList.find(ele=>ele.Code=='226')?.CoverList;
                //   if(coverList){
                //     for(let cover of coverList){
                //       let entry = DetoriationPhoenix.find(ele=>String(ele.CoverId)==cover.CoverId);
                //       if(entry){obj[cover.CoverName.replaceAll(" ","")]=entry?.SumInsured;obj['IndustryType']=null;if(entry?.IndustryType!='0')obj['IndustryType']=entry?.IndustryType;}
                //     }
                //   }
                // }

                this.locationList.push(obj);
                console.log(this.locationList);
                this.loopProductItem = this.locationList;
                i += 1;
                if (i == this.locationList.length) {
                  console.log("FInal LocationS", this.locationList)
                  this.onEditfirePhoneix();
                }
              }
            }
          }
        })

    }
  }
  private addControlsToForm(fields: any[]) {
    fields.forEach((field) => {
      if (field?.key) {
        this.form.addControl(field.key, new FormControl(''));
      }
      if (field?.fieldGroup) {
        this.addControlsToForm(field.fieldGroup);
      }
    });
  }

  private groupFields(fields: any[]): any[] {
    const grouped: any[] = [];
    const visibleFields = fields.filter(field => !field.hide);
    const newLineFields = ['IndemnityPeriod']; // Fields that must always start a new line

    let tempGroup: any[] = [];

    for (let i = 0; i < visibleFields.length; i++) {
      const field = visibleFields[i];

      if (newLineFields.includes(field.key)) {
        // Push any existing group before adding new-line field
        if (tempGroup.length > 0) {
          grouped.push(tempGroup);
          tempGroup = [];
        }
        grouped.push([field]); // Push IndemnityPeriod alone
      } else {
        // Pair fields together
        if (tempGroup.length === 0 || tempGroup.length === 1) {
          tempGroup.push(field);
        }

        if (tempGroup.length === 2) {
          grouped.push(tempGroup);
          tempGroup = [];
        }
      }
    }

    // Push remaining group if not empty
    if (tempGroup.length > 0) {
      grouped.push(tempGroup);
    }
    console.log(grouped);

    return grouped;
  }
  onoccChangepersonalInd(type) {
    let fields = this.fields[0].fieldGroup[0].fieldGroup;
    console.log('Personal Accident Fieldsss', fields);
    for (let field of fields) {
      if (field.key == 'otheroptionPer') {
        if (type == 'change' && field.formControl) { field.formControl.setValue(''); }
        if (this.productItem.OccupationType == '99999') {
          field.hideExpression = false; field.hide = false;
        }
        else {
          field.hideExpression = true; field.hide = true;
        }
      }
      console.log('NNNNNNNNNNN', this.fields[0].fieldGroup[0].fieldGroup[2]);
    }
  }

  AddNew() {
    //this.value;
    //this.Section=true;
    //this.jsonList.push(row);
    this.productItem.LocationAddress = null;
    this.productItem.LocationNameBuilding = null;
    this.productItem.BuildingSumInsureds = null;
    let entry = {
      "BuildingAddress": null,
      "BuildingBuildYear": null,
      "BuildingFloors": null,
      "InbuildConstructType": null,
      "BuildingSuminsured": null,
      "RiskId": null,
      "SectionId": "1"
    }
    this.currentBuildingIndex = this.building.length;
    this.editBuildingSection = false;
    this.enableBuildingEditSection = true;
    this.building.push(entry);
  }


  getProfessional() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "SectionLevelReq": [
        {
          "RequestReferenceNo": this.requestReferenceNo,
          "RiskId": "53",
          "SectionId": '106'
        },
        {
          "RequestReferenceNo": this.requestReferenceNo,
          "RiskId": "53",
          "SectionId": '107'
        },
        {
          "RequestReferenceNo": this.requestReferenceNo,
          "RiskId": "53",
          "SectionId": '108'
        },
      ]
    }
    let urlLink = `${this.motorApiUrl}api/slide15/gethumantype`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        console.log(data);
        this.productItem = new ProductData();
        if (data.Result) {
          let datas = data?.Result[0];
          this.productItem.ProfessionalOccupation = datas?.OccupationId;

          this.productItem.ProfessionalType = datas?.ProfessionalType;
          this.productItem.EmployeeCounts = datas?.EmployeeCount;
          this.productItem.GISI = datas?.GrossIncome;
          this.productItem.IndemnityTypes = datas?.InternityType;
          this.productItem.ProfessionalSI = datas?.IndernitySI;
          let datas1 = data?.Result[1];
          let datas2 = data?.Result[2];
          this.productItem.ProfessionalStaff = datas1?.EmployeeCount;
          this.productItem.NonProfessionalStaff = datas2?.EmployeeCount;
          // "OccupationId":this.productItem?.ProfessionalOccupation,
          // "OccupationDesc":"Adocate",
          // "ProfessionalType":this.productItem?.ProfessionalType,
          //  "EmployeeCount": this.productItem?.EmployeeCounts,
          //  "IndemnityType": this.productItem?.IndemnityTypes,
          //  "IndemnitySi":this.productItem?.ProfessionalSI,
          //  "GrossIncome":this.productItem?.GISI,
          // console.log('Daaaaaaaaaaaaa',datas);
        }
      },
      (err) => { },
    );
  }
  onSaveHealthInsurance() {
    let list = [], i = 0;
    for (let entry of this.productItem.patientList) {
      let obj = entry;
      if (entry.DateOfBirth != null && entry.DateOfBirth != undefined) {
        let dateList = String(entry.DateOfBirth).split('/');
        if (dateList.length > 1) { }
        else obj.DateOfBirth = this.datePipe.transform(entry.DateOfBirth, 'dd/MM/yyyy');
      }
      obj['CreatedBy'] = this.loginId;
      obj['InsuranceId'] = this.insuranceId;
      obj['ProductId'] = this.productId;
      obj['RiskId'] = String(i + 1);
      obj['SectionId'] = this.ProductCode;
      obj['RequestReferenceNo'] = this.requestReferenceNo;
      list.push(obj);
      i += 1;
      if (i == this.productItem.patientList.length) {
        let urlLink = `${this.motorApiUrl}api/slide15/savehealthinsure`;
        this.sharedService.onPostMethodSync(urlLink, list).subscribe(
          (data: any) => {
            if (data?.Result) {
              if (data.Result.length != 0) {
                this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
                sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
                this.onCalculate(data.Result, null);

                //this.onCheckUWQuestionProceed(data.Result);
              }

              // }
              // else {
              //   this.nextslide=false;
              // }
            }
            // if (data?.Result) {
            //   if (data?.Result.length!=0) {
            //     this.requestReferenceNo = data?.Result[0]?.RequestReferenceNo;
            //     sessionStorage.setItem('quoteReferenceNo', this.requestReferenceNo);
            //       if(this.commonDetails){
            //         if(this.commonDetails[0].SectionId !=null && this.commonDetails[0].SectionId.length!=0){
            //           if(!this.commonDetails[0].SectionId.some(ele=>ele==this.ProductCode)) this.commonDetails[0].SectionId.push(this.ProductCode);
            //         }
            //         else  this.commonDetails[0]['SectionId']=[this.ProductCode];
            //       }
            //     sessionStorage.setItem('homeCommonDetails', JSON.stringify(this.commonDetails)) 

            //   }
            // }
          });
      }
    }
  }
  setCommonFormValues1() {
    let refNo = sessionStorage.getItem('quoteReferenceNo');
    if (refNo == undefined) refNo = this.requestReferenceNo
    let ReqObj = {
      "RequestReferenceNo": this.requestReferenceNo,
      "RiskId": "1",
      "SectionId": null
    }
    let urlLink = null;

    if (this.productId == '56') { ReqObj.SectionId = this.ProductCode; urlLink = `${this.motorApiUrl}api/slide15/gethealthinsure`; }
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          let details = data?.Result;

          if (this.productId == '56') {
            let i = 0;
            let details = data.Result;
            for (let s of details) {
              let entry = {
                "RequestReferenceNo": s?.RequestReferenceNo,
                "ProductId": s?.ProductId,
                "SectionId": s?.SectionId,
                "InsuranceId": s?.InsuranceId,
                "CreatedBy": this.loginId,
                "RiskId": s?.RiskId,
                "RelationType": s?.RelationType,
                "RelationTypeDesc": s?.RelationTypeDesc,
                "DateOfBirth": s?.DateOfBirth,
                "NickName": s?.NickName
              }
              if (entry.DateOfBirth) {
                entry.DateOfBirth = this.onDateFormatInEdit(entry.DateOfBirth)
                // let dateList = String(entry.DateOfBirth).split('/');
                // if(dateList.length>1){
                //   entry.DateOfBirth = dateList[2]+'-'+dateList[1]+'-'+dateList[0];
                // }
              }
              if (i == 0) {
                this.ProductCode = s.SectionId;
                if (entry.RelationType == null || entry.RelationType == '') entry.RelationType = '1';
              }
              else if (entry.RelationType == null || entry.RelationType == undefined) entry.RelationType = '';
              this.productItem.patientList.push(entry);
              console.log('MNNNNNGGGGGGGGGGGGG', this.productItem?.patientList)
              i += 1;
              if (i == details.length) { this.getRelationTypeList('direct'); }
              this.showsection = true;
            }

          }
        }
      },
      (err) => { },
    );
  }
  onDateFormatInEdit(date) {
    console.log(date);
    if (date) {
      let format = date.split('-');
      if (format.length > 1) {
        var NewDate = new Date(new Date(format[0], format[1], format[2]));
        NewDate.setMonth(NewDate.getMonth() - 1);
        return NewDate;
      }
      else {
        format = date.split('/');
        if (format.length > 1) {
          var NewDate = new Date(new Date(format[2], format[1], format[0]));
          NewDate.setMonth(NewDate.getMonth() - 1);
          return NewDate;
        }
      }

    }
  }


  setSMEForm() {

    // let sections:any[] = this.commonDetails[0].SectionId;
    //let section = sections.filter(ele => ele=='42')
    this.tab = new FormlyFieldTabs();
    this.fields = [
      {
        type: 'tabs',
        fieldGroup: [


        ],
      }
    ];

    // if(sections){
    // console.log('sectionssss',sections)
    this.showSection = true;
    let contentData
    if (this.insuranceId == '100004') {
      contentData = new Buildingss();
    }
    else {
      contentData = new Building();
    }
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData?.fields]);
    this.getWallMaterialList();
    this.getRoofMaterialList();
    //this.getbuildingpurposeList();
    if (this.insuranceId == '100004') {
      this.getTypeOfProperty();
    }

    let contentData1 = new HouseHoldContents();
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData1?.fields]);

    let contentData2: any;
    if (this.insuranceId == '100004') {
      contentData2 = new AllRiskss();
    }
    else {
      contentData2 = new AllRisk();
    }
    let contentData5: any;
    if (this.insuranceId == '100004') {
      contentData5 = new AllRiskss();
    }
    else {
      contentData5 = new AllRisk();
    }
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData2?.fields])

    let contentData3 = new PersonalLiability();
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData3?.fields])
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData5?.fields]);
    let fireData = new ElectronicEquipment();
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([fireData?.fields]);

    let contentData4 = new PersonalAccident();
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData4?.fields]);


    let fireData1 = new BussinessAllRisk();
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([fireData1?.fields]);


    let contentData6
    if (this.productId != '24') {
      contentData6 = new HouseHoldContentsss();
    }
    else {
      contentData6 = new HouseHoldContents();
    }
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData6?.fields]);

    let contentData7 = new PublicLiability();
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData7?.fields]);

    let fireData3 = new FireAlliedPerils();
    let entry = [];
    entry.push(fireData?.fields);
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([fireData3?.fields]);

    let contentData9 = new MachineryBreakDown();
    let checkYnHooks = {
      onInit: (field: FormlyFieldConfig) => {
        field.formControl.valueChanges.subscribe(() => {
          this.checkMachineryYNChanges()
        });
      }
    };
    // let groupList = contentData9.fields.fieldGroup[0].fieldGroup[0].fieldGroup[1].fieldGroup;
    // let i=0;
    // for(let group of groupList){
    //    group.fieldGroup[0].hooks = checkYnHooks;
    //    i+=1;
    //    if(i==groupList.length){this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([contentData9?.fields]); this.checkMachineryYNChanges()}
    // }

    let employeeData = new EmployersLiabilitytwo();
    let field = {
      props: { label: 'Employers Liability' },
      fieldGroup: employeeData.fields
    }
    let modelHooks = {
      onInit: (field: FormlyFieldConfig) => {
        field.formControl.valueChanges.subscribe(() => {
          //this.onoccChange('change');
        });
      }
    }
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([field]);
    console.log('SectionEmployeers', this.fields[0].fieldGroup);
    for (let field of this.fields[0].fieldGroup) {
      console.log('Formly Fields', field.props.label)
      if (field.props.label == 'Employers Liability') {
        this.fieldsEmployee = field.fieldGroup;
        // console.log('Fedilitysss',field.fieldGroup[0].fieldGroup[0].fieldGroup[0].fieldGroup[0]);
        // console.log('Empliablity',this.fieldsEmployee[0].fieldGroup[0].fieldGroup[0].fieldGroup[0]);
      }
    }
    if (this.fieldsEmployee) {
      //this.fieldsEmployee[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].hooks = modelHooks;
    }

    let fidelity = new Fidelitytwo();
    //let fidelity = new Fidelity();
    let field1 = {
      props: { label: 'Fidelity' },
      fieldGroup: fidelity.fields
    }
    let modelHooks1 = {
      onInit: (field: FormlyFieldConfig) => {
        field.formControl.valueChanges.subscribe(() => {
          //this.onoccFedilityChange('change');
        });
      }
    }
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([field1]);
    for (let field of this.fields[0].fieldGroup) {
      console.log('Formly Fields', field.props.label)
      if (field.props.label == 'Fidelity') {
        // this.fieldsFidelity = field.fieldGroup;
      }
    }
    // if(this.fieldsFidelity){
    //   this.fieldsFidelity[0].fieldGroup[0].fieldGroup[0].fieldGroup[0].hooks = modelHooks;
    // }


    this.productItem.employeeList = [{ "LiabilityOccupationId": null, "TotalNoOfEmployees": null, "EmpLiabilitySi": '0' }];
    this.productItem.fidelityList = [{ "LiabilityOccupationId": null, "TotalNoOfEmployees": null, "EmpLiabilitySi": '0' }];
    let money = new Money();
    let checkYnHooks1 = {
      onInit: (field: FormlyFieldConfig) => {
        field.formControl.valueChanges.subscribe(() => {
          // this.checkMoneyYNChanges()
        });
      }
    };
    let groupList1 = money.fields.fieldGroup[0].fieldGroup[0].fieldGroup[1].fieldGroup;
    let m = 0;
    for (let group of groupList1) {
      group.fieldGroup[0].hooks = checkYnHooks1;
      m += 1;
      if (m == groupList1.length) {
        this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([money?.fields]);
        //this.checkMoneyYNChanges()}
      }
    }
    if (this.insuranceId == '100002') {
      let fireData = new Burglary();
      //let entry = [];
      //entry.push(fireData?.fields);
      this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([fireData?.fields]);
      console.log("Burglary Fields", this.fields[0].fieldGroup);
    }
    else if (this.insuranceId == '100004') {
      let fireData = new Burglarys();
      let field = {
        props: { label: 'Burglary' },
        fieldGroup: [fireData.fields]
      }
      console.log("Burglary Fields", field)
      let regionHooks = {
        onInit: (field: FormlyFieldConfig) => {
          field.formControl.valueChanges.subscribe(() => {
            // this.ongetDistrictList('change')
          });
        }
      }

      field.fieldGroup[0].fieldGroup[1].fieldGroup[0].fieldGroup[1].hooks = regionHooks;
      this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([field])
      // this.getNatureTradeList();
      // this.getInsuranceForList();
      // this.getWallMaterialList();
      // this.buglaryloss();
      // this.getRoofMaterialList();
      // this.getCeilingMaterialList();
      // this.getRegionList();
      // this.getWindowConsMaterialList();
      // this.getDoorsMaterilalList(); 
      // this.getNightLeftDoorList(); this.getBuildingOccupiedList();
    }


    let fireData8 = new BusinessInterruption();
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([fireData8?.fields]);

    let fireData2 = new GoodsInTransit();
    this.fields[0].fieldGroup = this.fields[0].fieldGroup.concat([fireData2?.fields]);
    console.log("Goods Fields", this.fields);
    // this.getTransportList();
    // this.getgeographicalLimit();
    // this.getTransportedByList();

    if (this.requestReferenceNo) {
      this.sectionCount = 0;
      //  if(sections.some(ele=>ele=='1')) this.getBuildingDetails();
      //  if(sections.some(ele=>ele=='3')) this.getAllRiskDetails(sections);
      //  if(sections.some(ele=>ele=='47' || ele=='74')) this.getContentDetails(sections);
      //  if(sections.some(ele=>ele=='35')) //this.getPersonalAccidentDetails(sections);
      //  if(sections.some(ele=>ele=='36')) this.getPersonalLiabilityDetails(sections);
      //  if(sections.some(ele=>ele=='40')) this.getFireAlliedRiskDetails(sections);
      //  if(sections.some(ele=>ele=='45')){ this.getEmployeeRiskDetails(sections)}
      //  if(sections.some(ele=>ele=='43')){ this.getFidelityRiskDetails(sections)}
      //  if(sections.some(ele=>ele=='41')){ this.getMachineryBreakDownDetails(sections)}
      //  if(sections.some(ele=>ele=='42')){ this.getMoneyDetails(sections)}
      //  if(sections.some(ele=>ele=='52')){ this.getBurglaryDetails(sections) }
      //  if(sections.some(ele=>ele=='69')){ this.getBusinessAllRiskDetails(sections) }
      //  if(sections.some(ele=>ele=='75')){ this.getBusinessInterruptionDetails(sections) }
      //  if(sections.some(ele=>ele=='76')){ this.getElectronicEquipment(sections)}
      //  if(sections.some(ele=>ele=='46')){ this.getGoodsTransitDetails(sections) }
      //  if(sections.some(ele=>ele=='54')){ this.getPublicLiabilityDetails(sections) }
      //  if(sections.some(ele=>ele=='3') && this.productId=='21' || this.productId == '26'){ this.getPlantallrisk(sections) }
      //  if(sections.some(ele=>ele=='3') && this.productId=='21'){ this.getElectronicEquipment(sections) 

    }
    //  if(sections.some(ele=>ele=='56' || ele=='53')){ 
    //   this.sectionCount +=1;
    //   if(sections.length==this.sectionCount){
    //     this.formSection = true; this.viewSection = false;
    //   }
    //  }

    // else{
    //   this.formSection = true; this.viewSection = false;
    // }
    // }

  }

  getUWDetails() {
    // let branchCode = '';
    // if(this.userType!='Broker' && this.userType!='User'){
    //   branchCode = this.branchCode
    // }
    // else{
    //   branchCode = this.brokerbranchCode
    // }
    let ReqObj = {
      "Limit": "0",
      "Offset": "100",
      "ProductId": this.productId,
      "LoginId": this.loginId,
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode,
      "SectionId": "99999"
    }
    let urlLink = `${this.CommonApiUrl}master/getactiveuwquestions`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let res: any = data.Result;
        if (res.length != 0) {
          if (res.length != 0) {
            let i = 0;
            for (let ques of res) {
              if (ques['HiddenYN'] == undefined) ques['HiddenYN'] = 'N';
              if (ques.Options != null && ques.Options.length != 0) {
                let j = 0;
                for (let option of ques.Options) {
                  if (option.DependentYn == 'Y') {
                    let uwQues = this.uwQuestionList.find(ele => ele.UwQuestionId == option.DependentUnderwriterId);
                    if (uwQues) uwQues['HiddenYN'] = 'Y';
                  }
                  j += 1;
                  if (j == ques.Options.length) {
                    i += 1; if (i == res.length) {
                      let section = [], i = 0;
                      for (let entry of res) {
                        if (!section.some(ele => ele == entry.SectionId)) section.push(entry.SectionId);
                        i += 1;
                        if (i == res.length) {
                          let j = 0, finalList = [];
                          for (let obj of section) {
                            let subObj = {
                              "SectionId": obj,
                              "SectionName": res.find(ele => ele.SectionId == obj)?.SectionName,
                              "UWQuestionsList": res.filter(ele => ele.SectionId == obj)
                            }
                            finalList.push(subObj);
                            j += 1;
                            if (j == section.length) { this.uwQuestionList = finalList; this.getEditUwQuestions(); }
                          }
                        }
                      }
                    }
                    //this.getEditUwQuestions();
                  }

                }
              }
              else {
                i += 1; if (i == res.length) {
                  let section = [], i = 0;
                  for (let entry of res) {
                    if (!section.some(ele => ele == entry.SectionId)) section.push(entry.SectionId);
                    i += 1;
                    if (i == res.length) {
                      let j = 0, finalList = [];
                      for (let obj of section) {
                        let subObj = {
                          "SectionId": obj,
                          "SectionName": res.find(ele => ele.SectionId == obj)?.SectionName,
                          "UWQuestionsList": res.filter(ele => ele.SectionId == obj)
                        }
                        finalList.push(subObj);
                        j += 1;
                        if (j == section.length) { this.uwQuestionList = finalList; this.getEditUwQuestions(); }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        else {
        }
      },
      (err) => { },
    );
  }
  getDuplicates(res) {
    res.reduce(function (acc, current, index, res) {
      if (res.findIndex(item => item.SectionId === current.SectionId) !== index && !acc.find(item => item.SectionId === current.SectionId)) {
        acc.push(current);
      }
      return acc;
    });
  }
  getEditUwQuestions() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
      "LoginId": this.loginId,
      "RequestReferenceNo": this.quoteRefNo,
      "LocationId": String(this.tabIndex + 1),
      "VehicleId": String(this.tabIndex + 1),
      "SectionId": null
    }
    let urlLink = `${this.CommonApiUrl}api/getuwquestionsdetails`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let uwList = data?.Result;
        console.log("UW List", uwList, this.uwQuestionList)
        if (uwList.length != 0) {
          let i = 0;
          for (let ques of uwList) {
            let list = this.uwQuestionList.find(ele => ele.SectionId == ques.SectionId)?.UWQuestionsList;
            let entry = list.find(ele => ele.UwQuestionId == ques.UwQuestionId);
            if (entry) { entry.Value = ques.Value };
            console.log("Filtered UW", entry)
            i += 1;
            if (i == uwList.length) {
              for (let obj of this.uwQuestionList) {
                obj.UWQuestionsList.forEach(x => {
                  if (x.QuestionType == '01') {
                    x.Value = x.Value ? x.Value : 'N'
                    if (x.Value == null || x.Value == 'N') x.Value = 'No'
                    if (x.Options != null) this.showUWQUestion(x.Options.find(ele => ele.UwQuesOptionDesc == x.Value), x.Options, 'direct');
                  }

                });
              }
              this.questionSection = true; console.log("Final UW List", this.uwQuestionList);
            }
          }
        }
        else {
          let k = 0;
          for (let obj of this.uwQuestionList) {
            let i = 0
            for (let ques of obj.UWQuestionsList) {
              ques.Value = null;
              i += 1;
              if (i == obj.UWQuestionsList) { k += 1; if (k == this.uwQuestionList.length) { this.questionSection = true; console.log("Final UW List", this.uwQuestionList); } }
            }
          }
        }
      },
      (err) => { },
    );
  }
  showUWQUestion(rowData, optionList, type) {
    if (optionList.length != 0 && rowData != undefined) {
      for (let option of optionList) {
        if (option.DependentYn != null && option.DependentYn == 'Y') {
          if (option.DependentUnderwriterId == rowData.DependentUnderwriterId) {
            let ques = this.uwQuestionList.find(ele => ele.UwQuestionId == option.DependentUnderwriterId)
            ques['HiddenYN'] = 'N';
            if (type == 'change') ques['Value'] = null;
          }
          else {
            let ques = this.uwQuestionList.find(ele => ele.UwQuestionId == option.DependentUnderwriterId)
            ques['HiddenYN'] = 'Y';
          }
        }
      }
    }
  }
  checkHideQUestion(rowData) {
    return rowData['HiddenYN'] == 'Y';
  }
  setBuildingOwnerYN() {
    if (this.BuildingOwnerYn != 'Y') {
      this.coversRequired = 'C'
    }
    else if (this.coversRequired == null) this.coversRequired = 'BC';
  }

  setsectionView() {
    if (this.SectionSelectYn == 'FC') {
      this.sectionView1 = true;
      this.sectionView2 = false;
      this.sectionView3 = false;
      this.sectionView4 = false; this.sectionView7 = false;
      this.sectionView5 = false; this.sectionView6 = false;
      this.packageplusMenus = [
        'Fire & Allied Perils',
        'Business Interruption (Fire & Allied Perils)',
        'BURGLARY/THEFT',
        'Money',
        'Office Contents',
        'Goods in Transit'
      ].map(menu => ({ menu, filled: false }));

      this.currentPackagePlus = this.packageplusMenus[0].menu;
    }
    else if (this.SectionSelectYn == 'EC') {
      this.sectionView1 = false;
      this.sectionView2 = true;
      this.sectionView3 = false;
      this.sectionView4 = false; this.sectionView7 = false;
      this.sectionView5 = false; this.sectionView6 = false;
      this.packageplusMenus = [
        'Business All Risk',
        'Plate Glass',
        'Machinery Breakdown',
        'Electronic Equipment',
        'Accidental Damge'
      ].map(menu => ({ menu, filled: false }));

      this.currentPackagePlus = this.packageplusMenus[0].menu;
    }
    else if (this.SectionSelectYn == 'FAO') {
      this.sectionView1 = false;
      this.sectionView2 = false;
      this.sectionView3 = false;
      this.checkAddOnCoverlist()
      this.checkStockAddOnCoverlist(); this.sectionView7 = false;
      this.sectionView5 = false; this.sectionView6 = false;
      this.packageplusMenus = [
        'Fire add on',
        'Stock add on'
      ].map(menu => ({ menu, filled: false }));

      this.currentPackagePlus = this.packageplusMenus[0].menu;
    }
    else if (this.SectionSelectYn == 'ClaimExperience') {
      this.sectionView1 = false; this.sectionView7 = false;
      this.sectionView2 = false; this.sectionView3 = false;
      this.sectionView4 = false; this.sectionView5 = false;
      this.sectionView6 = true;
      this.packageplusMenus = [
        'Claim Experience Details'
      ].map(menu => ({ menu, filled: false }));

      this.currentPackagePlus = this.packageplusMenus[0].menu;
    }
    else if (this.SectionSelectYn == 'UWQues') {
      this.sectionView1 = false; this.sectionView7 = true;
      this.sectionView2 = false; this.sectionView3 = false;
      this.sectionView4 = false; this.sectionView5 = false;
      this.sectionView6 = false; this.packageplusMenus = [
        'UnderWriter Questions'
      ].map(menu => ({ menu, filled: false }));

      this.currentPackagePlus = this.packageplusMenus[0].menu;
    }
    else {
      this.sectionView1 = false;
      this.sectionView2 = false;
      this.sectionView3 = true;
      this.sectionView4 = false; this.sectionView7 = false;
      this.sectionView5 = false; this.sectionView6 = false;
      this.packageplusMenus = [
        'Fidelity',
        'Public Liability',
        'Group Personal Accident'
      ].map(menu => ({ menu, filled: false }));

      this.currentPackagePlus = this.packageplusMenus[0].menu;
    }
    if(this.requestReferenceNo){
       this.packageplusMenus.forEach(element => {
        let valid = this.checkFilled(element.menu);
        if (valid) {
         let index = this.packageplusMenus.findIndex(item => item.menu === element.menu);
         this.packageplusMenus[index].filled = true;
       }
     });
     this.packageplusMenus.sort((a, b) => {
       return (b.filled === true ? 1 : 0) - (a.filled === true ? 1 : 0);
     });
    }
  }

  getBackCorprate(type) {
    if (type == 'Back1') {
      if (this.SectionSelectYn == 'EC') {
        this.sectionView1 = true; this.sectionView7 = false;
        this.sectionView2 = false; this.sectionView6 = false;
        this.sectionView3 = false; this.sectionView4 = false;
        this.sectionView5 = false;
        this.SectionSelectYn = 'FC'
      }
      else if (this.SectionSelectYn == 'EL') {
        this.sectionView1 = false; this.sectionView7 = false;
        this.sectionView2 = true; this.sectionView6 = false;
        this.sectionView3 = false;
        this.sectionView4 = false;
        this.sectionView5 = false;
        this.SectionSelectYn = 'EC'
      }
      else if (this.SectionSelectYn == 'FAO') {
        this.sectionView1 = false; this.sectionView7 = false;
        this.sectionView2 = false; this.sectionView6 = false;
        this.sectionView3 = true;
        this.sectionView4 = false;
        this.sectionView5 = false;
        this.checkAddOnCoverlist();
        this.SectionSelectYn = 'EL'
      }
      else if (this.SectionSelectYn == 'ClaimExperience') {
        this.sectionView1 = false; this.sectionView6 = false;
        this.sectionView2 = false; this.sectionView3 = false;
        this.sectionView4 = true; this.sectionView5 = false; this.sectionView7 = false;
        this.SectionSelectYn = 'FAO'
      }
      else if (this.SectionSelectYn == 'UWQues') {
        this.sectionView1 = false; this.sectionView6 = true;
        this.sectionView2 = false; this.sectionView3 = false;
        this.sectionView4 = false; this.sectionView5 = false; this.sectionView7 = false;
        this.SectionSelectYn = 'ClaimExperience'
      }
      else if (this.SectionSelectYn == 'SAO') {
        this.sectionView1 = false;
        this.sectionView2 = false;
        this.sectionView3 = false;

        this.sectionView5 = false;
        this.SectionSelectYn = 'FAO'
      }
    }
    else if (type == 'Back2') {
      if (this.SectionSelectYn == 'EC') {
        this.sectionView1 = true;
        this.sectionView2 = false;
        this.sectionView3 = false;
        this.sectionView4 = false;
        this.sectionView5 = false;
        this.SectionSelectYn = 'FC'
      }

      else if (this.SectionSelectYn == 'EL') {
        this.sectionView1 = false;
        this.sectionView2 = true;
        this.sectionView3 = false;
        this.sectionView4 = false;
        this.sectionView5 = false;
        this.SectionSelectYn = 'EC'
      }
      else if (this.SectionSelectYn == 'FAO') {
        this.sectionView1 = false;
        this.sectionView2 = false;
        this.sectionView3 = true;
        this.sectionView4 = false;
        this.sectionView5 = false;
        this.checkAddOnCoverlist();
        this.SectionSelectYn = 'EL'
      }
      else if (this.SectionSelectYn == 'ClaimExperience') {
        this.sectionView1 = false; this.sectionView6 = false;
        this.sectionView2 = false; this.sectionView3 = false;
        this.sectionView4 = true; this.sectionView5 = false; this.sectionView7 = false;
        this.SectionSelectYn = 'FAO';
      }
      else if (this.SectionSelectYn == 'UWQues') {
        this.sectionView1 = false; this.sectionView6 = true;
        this.sectionView2 = false; this.sectionView3 = false;
        this.sectionView4 = false; this.sectionView5 = false; this.sectionView7 = false;
        this.SectionSelectYn = 'ClaimExperience'
      }
      else if (this.SectionSelectYn == 'SAO') {
        this.sectionView1 = false;
        this.sectionView2 = false;
        this.sectionView3 = false;

        this.sectionView5 = false;
        this.SectionSelectYn = 'FAO'
      }
      else if (this.SectionSelectYn = 'FC') {
        this.tabIndex -= 1; this.sectionView1 = false; this.sectionView4 = true; this.SectionSelectYn = 'FAO';
      }
    }

  }
  checkAddOnCoverlist() {
    let entry = this.locationList[this.tabIndex]?.FireAddOnList;
    if (entry == null || entry == undefined) entry = [];
    let i = 0;
    for (let cover of this.addOnCoverList) {
      let obj = entry.find(ele => String(ele.CoverId) == String(cover.CoverId));
      if (obj) { cover['SumInsured'] = obj?.SumInsured; this.CommaFormattedCorp(cover, 'Cover') }
      else cover['SumInsured'] = cover.SumInsured;
      i += 1; if (i == this.addOnCoverList.length) this.sectionView4 = true;

    }
  }
  checkStockAddOnCoverlist() {
    let entry = this.locationList[this.tabIndex]?.StockAddOnList;
    if (entry == null || entry == undefined) entry = [];
    let i = 0;
    for (let cover of this.stockAddOnCoverList) {
      let obj = entry.find(ele => String(ele.CoverId) == String(cover.CoverId));
      if (obj) { cover['SumInsured'] = obj?.SumInsured; this.CommaFormattedCorp(cover, 'Cover') }
      else cover['SumInsured'] = cover.SumInsured;
      i += 1; if (i == this.stockAddOnCoverList.length) this.sectionView4 = true;

    }
  }
  onChangeIndustry(rowdata) {

    let ReqObj = {
      "CategoryId": rowdata,
      "BranchCode": this.branchCode,
      "InsuranceId": this.insuranceId,
      "ProductId": this.productId,
    }
    let urlLink = `${this.CommonApiUrl}master/dp/occupation`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': '', 'CodeDescLocal': '--Sélectionner--' }]
        this.industryOcupationList = defaultObj.concat(data.Result);
      },
      (err) => { },
    );
  }
  getPlateGlassType() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "PLATE_GLASS"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': '' }]
        this.PlateGlassType = defaultObj.concat(data.Result);

        for (let i = 0; i < this.PlateGlassType.length; i++) {
          this.PlateGlassType[i].label = this.PlateGlassType[i]['CodeDesc'];
          this.PlateGlassType[i].value = this.PlateGlassType[i]['Code'];
          //delete this.PlateGlassType[i].CodeDesc;
          if (i == this.PlateGlassType.length - 1) {
            console.log("Plate Glasss List", this.fields18)
            let fieldList = this.fields18[0].fieldGroup[0].fieldGroup;
            for (let field of fieldList) {
              if (field.key == 'PlateGlassType') {
                field.templateOptions.options = this.PlateGlassType;
              }
            }
          }
        }
      },
      (err) => { },
    );
  }
  getGeneralLiability() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "PUBLIC LIABILITY SUMINSURED"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.GeneralLiabilityList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.GeneralLiabilityList.length; i++) {
          this.GeneralLiabilityList[i].label = this.GeneralLiabilityList[i]['CodeDesc'];
          this.GeneralLiabilityList[i].value = this.GeneralLiabilityList[i]['Code'];

          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.GeneralLiabilityList.length - 1) {
            let GeneralLiabilityList = this.genaralField;
            for (let field of GeneralLiabilityList) { if (field.key == 'GeneralLiability') { field.props.options = this.GeneralLiabilityList; } }
            let productLiabilityList1 = this.IndemityRevenue[0].fieldGroup[1].fieldGroup[0].fieldGroup;
            let productLiabilityList2 = this.IndemityRevenue[0].fieldGroup[1].fieldGroup[1].fieldGroup;
            console.log(productLiabilityList1, "productLiabilityListproductLiabilityList");
            for (let field of productLiabilityList1) { if (field.key == 'ProductsLiability' || field.key == 'DefectiveWorkmanship') { field.templateOptions.options = this.GeneralLiabilityList; } }

            for (let field of productLiabilityList2) { if (field.key == 'ProductsLiability' || field.key == 'DefectiveWorkmanship') { field.templateOptions.options = this.GeneralLiabilityList; } }
          }
        }
      })
    console.log(this.primaryfields);

  }
  getLiabilityLegalSi() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "PUBLIC LIABILITY LEGAL"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.LiabilityLegalList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.LiabilityLegalList.length; i++) {
          this.LiabilityLegalList[i].label = this.LiabilityLegalList[i]['CodeDesc'];
          this.LiabilityLegalList[i].value = this.LiabilityLegalList[i]['Code'];

          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.LiabilityLegalList.length - 1) {
            let LiabilityLegalList = this.genaralField;
            for (let field of LiabilityLegalList) { if (field.key == 'LegalDefenceCosts') { field.props.options = this.LiabilityLegalList; } }
            // let productLiabilityList = this.IndemityRevenue;
            // for(let field of productLiabilityList){if(field.key=='ProductLiability' || field.key=='DefectiveWorkmanship'  ){field.props.options = this.GeneralLiabilityList;}}
          }
        }
      })
    console.log(this.primaryfields);

  }

  getArrestSi() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "PUBLIC LIABILITY Wrongful Arrest"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.ArrestList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.ArrestList.length; i++) {
          this.ArrestList[i].label = this.ArrestList[i]['CodeDesc'];
          this.ArrestList[i].value = this.ArrestList[i]['Code'];

          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.ArrestList.length - 1) {
            let ArrestList = this.genaralField;
            for (let field of ArrestList) { if (field.key == 'WrongfulArrestandDefamation') { field.props.options = this.ArrestList; } }
            // let ArrestList = this.IndemityRevenue;
            // for(let field of ArrestList){if(field.key=='ProductLiability' || field.key=='DefectiveWorkmanship'  ){field.props.options = this.GeneralLiabilityList;}}
          }
        }
      })
    console.log(this.primaryfields);

  }

  getClaimCostSi() {
    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "ItemType": "CLAIM_COST"
    }
    let urlLink = `${this.CommonApiUrl}master/getbyitemvalue`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        let defaultObj = [{ 'CodeDesc': '-Select-', 'Code': null }]
        this.ExtendsList = defaultObj.concat(data.Result);
        for (let i = 0; i < this.ExtendsList.length; i++) {
          this.ExtendsList[i].label = this.ExtendsList[i]['CodeDesc'];
          this.ExtendsList[i].value = this.ExtendsList[i]['Code'];

          // delete this.roofMaterialList[i].CodeDesc;
          if (i == this.ExtendsList.length - 1) {
            let ExtendsList = this.ExtendsFields;
            for (let field of ExtendsList) { if (field.key == 'AdditionalclaimsPreparationCosts') { field.props.options = this.ExtendsList; } }
            // let ArrestList = this.IndemityRevenue;
            // for(let field of ArrestList){if(field.key=='ProductLiability' || field.key=='DefectiveWorkmanship'  ){field.props.options = this.GeneralLiabilityList;}}
          }
        }
      })
    console.log(this.primaryfields);

  }
  get rows(): FormArray {
    console.log(this.form.get('IndemityRevenue') as FormArray);
    return this.form.get('IndemityRevenue') as FormArray;
  }
  addRowph() {
    const rowGroup = this.fb.group({
      groupPersonalAccident: [this.GroupPersonalForm, Validators.required],
    });
    console.log(rowGroup);
    let firedata = new GPAPhoenix()
    this.addControlsToForm(rowGroup.controls.groupPersonalAccident.value)
    // this.getGeneralLiability()
    // this.form.controls['ProductsLiability'].value()
    // this.form.controls['SumInsuredEnd'].value()
    this.GroupPersonalForm.push(rowGroup.controls.groupPersonalAccident.value[0]);  // Add the new row to the rows FormArray
    console.log(this.GroupPersonalForm);
  }
  //Fire
  private addControlsToFormFire() {
    const addControls = (fields: any[]) => {
      fields.forEach((field) => {
        if (field?.key) {
          this.form.addControl(field.key, new FormControl(''));
        }
        if (field?.fieldGroup) {
          addControls(field.fieldGroup);
        }
      });
    };
    if (this.productId == '66') addControls(this.extensionTablefields)
    if (this.productId == '66') addControls(this.fields);
    addControls(this.primaryfields)
    if (this.productId == '66') addControls(this.extensionfields)
    if (this.productId == '67') {
      addControls(this.extensionTablefields)
      addControls(this.primaryfields)
      addControls(this.extensionfields)
      addControls(this.interruptionfields)
      addControls(this.fields)

    }
  }

  setLeakageExtensionOptions() {
    // Setting options dynamically for the leakageExtension field
    const leakageExtensionField = this.fields.find(field => field.key === 'leakageExtension');
    if (leakageExtensionField) {
      leakageExtensionField.props.options = [

      ];
    }
  }
  setConfirm() {
    this.BIList = [{ Code: 'Y', CodeDesc: 'Yes' }, { Code: 'N', CodeDesc: 'No' }]
    // const confirmField = this.fields.find(field => field.key === 'isConfirmed');
    // if (confirmField) {
    //   confirmField.props.options = [
    //     { value: 'N', label: 'No' },
    //     { value: 'Y', label: 'Yes' },
    //   ];
    //   confirmField.defaultValue = 'N'
    // }

  }

  setExtensions() {
    const confirmField = this.fields.find(field => field.key === 'extensions');
    if (confirmField) {
      confirmField.props.options = [
        { value: 'N', label: 'No' },
        { value: 'Y', label: 'Yes' },
      ];
      confirmField.defaultValue = 'N';
    }
  }
  onKeyDown(event: KeyboardEvent, field) {
    const inputElement = event.target as HTMLInputElement;
    let maxLength = 0;
    maxLength = 19;
    if (inputElement.value.length >= maxLength) {
      event.preventDefault();
    }
  }

  CommaFormattedDynamic(event: KeyboardEvent, name) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value) inputElement.value = String(inputElement.value).replace(/[^0-9.]|(?<=\-..*)\./g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return inputElement.value;
  }
  findDropdownValue(value: any) {
    console.log(value);
    const numericValue = parseFloat(value);
    const formattedValue = numericValue
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(formattedValue);
    console.log(this.claimCostList);

    const matchedItem = this.claimCostList.find(
      (item: any) => item.CodeDesc === formattedValue
    );
    console.log(matchedItem);

    return matchedItem?.Code;
  }
  findDropdownValueWithRetry(value: any, retries = 5, delay = 500): Promise<any> {
    return new Promise((resolve) => {
      const attemptLookup = () => {
        if (this.claimCostList && this.claimCostList.length > 0) {
          resolve(this.findDropdownValue(value));
        } else if (retries > 0) {
          setTimeout(() => attemptLookup(), delay);
        } else {
          resolve(null);
        }
      };

      attemptLookup();
    });
  }
  addContent() {
    console.log('add content clicked');
    
    setTimeout(() => {
      this.repeatService.requestAdd();
    }, 100);
  }
  getOccupationEmployers() {

    let ReqObj = {
      "InsuranceId": this.insuranceId,
      "BranchCode": this.branchCode,
      "ProductId": this.productId,
      "TitleType": 'I'
    }
    let urlLink = `${this.CommonApiUrl}master/dropdown/occupation`;
    this.sharedService.onPostMethodSync(urlLink, ReqObj).subscribe(
      (data: any) => {
        if (data.Result) {
          this.occupationList = data.Result;
          let defaultRow = [{ 'label': '---Select---', 'value': '', 'Code': '', 'CodeDesc': '---Select---', 'CodeDescLocal': '--Sélectionner--' }];
          // if(this.insuranceId=='100040' || this.insuranceId=='100042'){
          for (let i = 0; i < this.occupationList.length; i++) {
            this.occupationList[i].label = this.occupationList[i]['CodeDesc'];
            this.occupationList[i].value = this.occupationList[i]['Code'];
            if (i == this.occupationList.length - 1) {
              if (this.productId == '57') {
                console.log(this.GroupPersonalForm);
                let fieldList = this.GroupPersonalForm[0].fieldGroup[0].fieldGroup;
                for (let field of fieldList) {
                  if (field.key == 'occupation') {
                    field.props.options = defaultRow.concat(this.occupationList);
                    this.checkFieldNames()
                  }
                }
              }
              else {
                let fieldList = this.fieldEE[0]?.fieldArray?.fieldGroup[0]?.fieldGroup;
                console.log(fieldList);
                for (let field of fieldList) {
                  if (field.key == 'OccupationType') {
                    field.props.options = defaultRow.concat(this.occupationList);
                    this.checkFieldNames()
                  }
                }
                if (this.requestReferenceNo) {
                  //let fieldList=this.fieldEE[0].fieldGroup[0].fieldGroup[0].fieldGroup;
                  let fieldArray = this.fieldEE[0].fieldGroup;
                  for (let fieldList of fieldArray) {
                    for (let field of fieldList.fieldGroup[0].fieldGroup) {
                      if (field.key == 'OccupationType') {
                        field.props.options = defaultRow.concat(this.occupationList);
                        this.checkFieldNames()
                      }
                    }
                  }

                }
              }


            }
          }

        }
      },
      (err) => { },
    );
  }
  isNumberKey(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  
checkLimitValue(event: Event,key,type): void {
  if(type == 'max')
  {
    if(key =='CARuptoSumInsured'){
      const input = event.target as HTMLInputElement;
      const numericValue = parseFloat(input.value.replace(/,/g, ''));
      if (numericValue > 1000000000) {
        this.showMaxLimitError = true;
        input.value = '1000000000';
        this.form.controls['CARuptoSumInsured'].setValue('1000000000');
      } else {
        this.showMaxLimitError = false;
      }
    }
  }
  if(type == 'min')
    {
      if(key =='CARuptoSumInsured'){
        const input = event.target as HTMLInputElement;
        const numericValue = parseFloat(input.value.replace(/,/g, ''));
        if (numericValue < 1000000000) {
          this.showMaxLimitedError = true;
          // input.value = '1000000000';
          // this.form.controls['CARuptoSumInsured'].setValue('1000000000');
        } else {
          this.showMaxLimitedError = false;
        } 
      }
    }
    if(key =='CARuptoMonths'){
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/,/g, '');
    const numericValue = parseFloat(value);
    if(this.productId=='82'){
      if (numericValue > 12) {
      this.showMonthsError = true;
      input.value = '12';
      this.form.controls[key].setValue('12');
      }
    }
    if(this.productId=='83'){
      if (numericValue > 36) {
      this.showMonthsError = true;
      input.value = '36';
      this.form.controls[key].setValue('36');
      }
    }
  }
}
  addIndeminity(){
    const index = this.fields2.length;
    let contentData3 = new AllRisk();
    const newGroup = contentData3.fields;
    this.fields2.push(newGroup);
    console.log(this.fields2);
  }


   removeIndeminityRow(index: number) {
     console.log(index);
    if (index >= 0 && index < this.fields2.length) {
      this.fields2.splice(index, 1);
    }
  }
}
