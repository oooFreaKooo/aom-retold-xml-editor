<template>
  <div class="neumorphic-container my-3">
    <!-- Main Button to toggle all categories -->
    <button class="btn neumorphic-btn w-100 mb-3" :class="{ active: isMainOpen }" @click="toggleMain">Unit Types</button>

    <!-- Wrapper for the three-column layout -->
    <div class="collapse" :class="{ show: isMainOpen }">
      <div class="row">
        <!-- Logical Types Column -->
        <div class="col-12 col-md-4 mb-4">
          <button class="btn neumorphic-btn w-100 mb-2" :class="{ active: activeCategories['Logical'] }" @click="toggleCategory('Logical')">
            Logical Types
          </button>
          <div class="py-2 collapse" :class="{ show: activeCategories['Logical'] }">
            <div v-for="(type, index) in categorizedUnitTypes.Logical" :key="`logical_${index}`" class="form-check mb-2">
              <input type="checkbox" class="form-check-input" :id="`logicalType_${type}`" :value="type" v-model="selectedUnitTypes" />
              <label class="form-check-label" :for="`logicalType_${type}`">
                {{ type }}
              </label>
            </div>
          </div>
        </div>

        <!-- Abstract Types Column -->
        <div class="col-12 col-md-4 mb-4">
          <button class="btn neumorphic-btn w-100 mb-2" :class="{ active: activeCategories['Abstract'] }" @click="toggleCategory('Abstract')">
            Abstract Types
          </button>
          <div class="py-2 collapse" :class="{ show: activeCategories['Abstract'] }">
            <div v-for="(type, index) in categorizedUnitTypes.Abstract" :key="`abstract_${index}`" class="form-check mb-2">
              <input type="checkbox" class="form-check-input" :id="`abstractType_${type}`" :value="type" v-model="selectedUnitTypes" />
              <label class="form-check-label" :for="`abstractType_${type}`">
                {{ type }}
              </label>
            </div>
          </div>
        </div>

        <!-- Other Types Column -->
        <div class="col-12 col-md-4 mb-4">
          <button class="btn neumorphic-btn w-100 mb-2" :class="{ active: activeCategories['Others'] }" @click="toggleCategory('Others')">
            Other Types
          </button>
          <div class="p-3 collapse" :class="{ show: activeCategories['Others'] }">
            <div v-for="(type, index) in categorizedUnitTypes.Others" :key="`other_${index}`" class="form-check mb-2">
              <input type="checkbox" class="form-check-input" :id="`otherType_${type}`" :value="type" v-model="selectedUnitTypes" />
              <label class="form-check-label" :for="`otherType_${type}`">
                {{ type }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Define a union type for category keys
type Category = "Logical" | "Abstract" | "Others"
// Categorizing the unit types into Logical, Abstract, and Others
const categorizedUnitTypes = ref({
  Logical: [
    "LogicalTypeValidTraitorTarget",
    "LogicalTypeVillagersAttackResponse",
    "LogicalTypeValidMeteorTarget",
    "LogicalTypeNorseSoldierThatBuilds",
    "LogicalTypeRangedUnitsAutoAttack",
    "LogicalTypeFindWoodDropsite",
    "LogicalTypeShipNotHero",
    "LogicalTypeValidFrostTarget",
    "LogicalTypeLandMilitary",
    "LogicalTypeBuildingNotWonderOrTitan",
    "LogicalTypeValidShockwaveTarget",
    "LogicalTypeHandUnitsAttack",
    "LogicalTypeHeroicMythUnit",
    "LogicalTypeBuildingEmpoweredForLOS",
    "LogicalTypeNeededForVictory",
    "LogicalTypeParticipatesInBattlecries",
    "LogicalTypeAutoAttackFocusBuildings",
    "LogicalTypeFreezableMythUnit",
    "LogicalTypeTeleporterBuilding",
    "LogicalTypeMythUnitNotFlying",
    "LogicalTypeEasySelectAvoid",
    "LogicalTypeAffectedByCeaseFireBuildingSlow",
    "LogicalTypeMinimapFilterEconomic",
    "LogicalTypeUnitIsConstructed",
    "LogicalTypeValidLocustSwarmTarget",
    "LogicalTypeVillagersAttack",
    "LogicalTypeMythUnitThatGeneratesFavor",
    "LogicalTypeFindBarracks",
    "LogicalTypeAffectedByValor",
    "LogicalTypeValidSentinelTarget",
    "LogicalTypeFindGoldDropsite",
    "LogicalTypeAgressiveNatureUnit",
    "LogicalTypeArchaicMythUnit",
    "LogicalTypeValidSpyTarget",
    "LogicalTypeVillagersRespondToAttack",
    "LogicalTypeBuildingsThatShoot",
    "LogicalTypeSeidrTarget",
    "LogicalTypeBuildingsNotWalls",
    "LogicalTypeClassicalMythUnit",
    "LogicalTypeVillagerNotHero",
    "LogicalTypeAgeUpBuilding",
    "LogicalTypeValidTornadoAttack",
    "LogicalTypeConvertsHerds",
    "LogicalTypeAffectedByValleyOfTheKings",
    "LogicalTypeTartarianGateValidOverlapPlacement",
    "LogicalTypeValidShiftingSandsTarget",
    "LogicalTypeAffectedByRestoration",
    "LogicalTypeRangedMythUnit",
    "LogicalTypeSunRayProjectile",
    "LogicalTypeValidBoltTarget",
    "LogicalTypeTCBuildLimit",
    "LogicalTypeHealed",
    "LogicalTypeSharedHeroSelection",
    "LogicalTypeRangedUnitsAttack",
    "LogicalTypeHandUnitsAutoAttack",
    "LogicalTypeMythUnitNotTitan",
    "LogicalTypeEarthquakeAttack",
    "LogicalTypeValidSPCUnitsDeadCondition",
    "LogicalTypeMilitaryProductionBuilding",
    "LogicalTypeMinimapFilterMilitary",
    "LogicalTypeFindFoodDropsite",
    "LogicalTypeNavalMilitary",
    "LogicalTypeGarrisonInShips",
    "LogicalTypeBuildingThatCanBeEmpowered",
    "LogicalTypeFindStable",
    "LogicalTypePickable",
    "LogicalTypeMythicMythUnit",
  ],
  Abstract: [
    "AbstractWonder",
    "AbstractTower",
    "AbstractWall",
    "AbstractPharaoh",
    "AbstractCloseCombatShip",
    "AbstractSocketedTownCenter",
    "AbstractWarshipHero",
    "AbstractWalkingWoods",
    "AbstractVillager",
    "AbstractTransportShip",
    "AbstractScout",
    "AbstractTitan",
    "AbstractFarm",
    "AbstractFortress",
    "AbstractArmory",
    "AbstractInvisibleWall",
    "AbstractDock",
    "AbstractHealer",
    "AbstractGullinbursti",
    "AbstractHouseBuildLimit",
    "AbstractCavalry",
    "AbstractDwarf",
    "AbstractFlyingUnit",
    "AbstractArcher",
    "AbstractSiegeShip",
    "AbstractTemple",
    "AbstractMonument",
    "AbstractSiegeWeapon",
    "AbstractWarship",
    "AbstractTownCenter",
    "AbstractInfantry",
    "AbstractEmpowerer",
    "AbstractSettlement",
    "AbstractOracle",
    "AbstractMarket",
  ],
  Others: [
    "Herdable",
    "Unit",
    "NatureClass",
    "HuntedResource",
    "EconomicUnit",
    "WoodDropsite",
    "AffectedByTownBell",
    "BuildLimitSharedNorse",
    "Socket",
    "TradeableFrom",
    "InfantryLineUpgraded",
    "HerdableMagnet",
    "TradeUnit",
    "Ranged",
    "AnimalReactive",
    "BuildingClass",
    "EmbellishmentClass",
    "Nature",
    "ValidIdleVillager",
    "GoldDropsite",
    "MilitaryUnit",
    "Transport",
    "MythUnitMelee",
    "Ship",
    "FishResource",
    "NonConvertableHerdable",
    "FoodDropsite",
    "TradeableTo",
    "MythUnitSiege",
    "CavalryLineUpgraded",
    "CountsTowardMilitaryScore",
    "Building",
    "MythUnit",
    "HeroShadowUpgraded",
    "VillagerHero",
    "MinorHero",
    "UnitClass",
    "WildCrops",
    "Dropsite",
    "Resource",
    "GoldResource",
    "AnimalPrey",
    "Huntable",
    "MythUnitRanged",
    "Unattackable",
    "DisplayQueue",
    "Hero",
    "NavalUnit",
    "MajorHero",
    "MilitaryBuilding",
    "Tree",
    "Projectile",
    "HumanSoldier",
    "AnimalPredator",
  ],
})

// State to toggle the main wrapper
const isMainOpen = ref(false)

// State to toggle individual categories
const activeCategories = ref<Record<Category, boolean>>({
  Logical: false,
  Abstract: false,
  Others: false,
})

// Track selected unit types
const selectedUnitTypes = ref<string[]>([])

// Toggle the main unit types section
const toggleMain = () => {
  isMainOpen.value = !isMainOpen.value
}

// Toggle individual categories
const toggleCategory = (category: Category) => {
  activeCategories.value[category] = !activeCategories.value[category]
}
</script>

<style scoped lang="scss">
$bg-color: #e0e5ec;
$shadow-light: #ffffff;
$shadow-dark: #a3b1c6;
$primary-color: #ff4136;
$text-color: #4a4a4a;
$highlight-color: #ffffff;
$shadow-color: #babecc;

.neumorphic-container {
  background: $bg-color;
  border-radius: 15px; // Smaller border radius
  box-shadow: 5px 5px 10px $shadow-dark, -5px -5px 10px $shadow-light; // Smaller shadow
  padding: 15px; // Reduced padding
}

.neumorphic-btn {
  background: $bg-color;
  color: $text-color;
  border-radius: 15px;
  font-size: 14px;
  padding: 8px 12px;
  box-shadow: 5px 5px 10px $shadow-dark, -5px -5px 10px $shadow-light;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 4px 4px 8px $shadow-dark, -4px -4px 8px $shadow-light;
  }

  &:active,
  &.active {
    background-color: $primary-color;
    color: $bg-color;
  }
}

.neumorphic-content {
  background: $bg-color;
  border-radius: 15x; // Reduced border-radius
  box-shadow: inset 4px 4px 8px $shadow-dark, inset -4px -4px 8px $shadow-light; // Smaller inset shadow
  padding: 10px; // Reduced padding for content
}

.form-check-input {
  display: none;

  & + .form-check-label {
    position: relative;
    padding-left: 30px; // Smaller padding
    font-size: 14px; // Smaller font size
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 20px; // Smaller size for checkbox
      height: 20px; // Smaller size for checkbox
      border-radius: 5px;
      background: $bg-color;
      box-shadow: inset 3px 3px 7px $shadow-dark, inset -3px -3px 7px $shadow-light; // Smaller shadow for checkbox
    }
  }

  &:checked + .form-check-label::after {
    content: "✔";
    position: absolute;
    left: 5px; // Adjusted for smaller checkbox
    top: 1px; // Adjusted for smaller checkbox
    color: $primary-color;
    font-size: 14px; // Smaller checkmark size
    font-weight: bold;
  }
}

.collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out; // Faster transition

  &.show {
    max-height: 100%;
  }
}
</style>

<!-- .neumorphic-btn {
  background-color: $bg-color;
  color: $accent-color;
  border: none;
  outline: none;
  font-size: 18px;
  border-radius: 50%; // Round shape
  padding: 20px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  box-shadow: 8px 8px 16px $shadow-color, -8px -8px 16px $highlight-color;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  // Add radial gradient effect on buttons
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 235deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0) 70%);
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 20px $shadow-color, -10px -10px 20px $highlight-color;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: inset 8px 8px 16px $shadow-color, inset -8px -8px 16px $highlight-color;
  }

  // SVG inside button
  svg {
    width: 40px;
    height: 40px;
    fill: $text-color;
    transition: fill 0.3s ease;
  }

  &:hover svg {
    fill: $primary-color;
  }
} -->
