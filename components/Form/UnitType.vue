<template>
  <div class="neumorphic-container my-2">
    <!-- Left Sidebar: Category and Search -->
    <div class="row">
      <!-- Sidebar for searching and filtering by category -->
      <div class="col-md-4">
        <div class="filter-container">
          <input
            type="text"
            v-model="searchQuery"
            @input="filterUnitTypes"
            placeholder="Search unit types..."
            class="form-control neumorphic-input"
          />
          <div class="category-filter my-2">
            <button
              v-for="category in Object.keys(categorizedUnitTypes)"
              :key="category"
              @click="selectCategory(category as Category)"
              :class="{ active: activeCategory === category }"
              class="neumorphic-btn w-100"
            >
              {{ category }}
            </button>
          </div>

          <!-- Display filtered types for the selected category -->
          <div class="filtered-types-list">
            <div
              v-for="(type, index) in filteredUnitTypes"
              :key="index"
              class="filtered-type"
              @click="addType(type)"
            >
              {{ type }}
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side: Selected types as tags -->
      <div class="col-md-8">
        <div class="selected-types-container">
          <div v-for="(type, index) in selectedUnitTypes" :key="index" class="selected-tag">
            {{ type }}
            <button @click="removeType(type)" class="remove-tag-btn">&times;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Define a union type for category keys
type Category = "All" | "Logical" | "Abstract" | "Other"
// Categorizing the unit types into Logical, Abstract, and Other
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
  Other: [
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
  All: ['Herdable', 'LogicalTypeValidTraitorTarget', 'LogicalTypeVillagersAttackResponse', 'LogicalTypeValidMeteorTarget', 'Unit', 'NatureClass', 'HuntedResource', 'EconomicUnit',
                  'WoodDropsite', 'LogicalTypeNorseSoldierThatBuilds', 'AbstractWonder', 'LogicalTypeRangedUnitsAutoAttack', 'AbstractTower', 'AnimalOfSet', 'LogicalTypeFindWoodDropsite',
                  'LogicalTypeShipNotHero', 'LogicalTypeValidFrostTarget', 'AffectedByTownBell', 'BuildLimitSharedNorse', 'Socket', 'TradeableFrom', 'InfantryLineUpgraded', 'HerdableMagnet',
                  'TradeUnit', 'AbstractWall', 'LogicalTypeLandMilitary', 'AbstractPharaoh', 'AbstractCloseCombatShip', 'LogicalTypeBuildingNotWonderOrTitan', 'Ranged',
                  'LogicalTypeValidShockwaveTarget', 'AnimalReactive', 'LogicalTypeHandUnitsAttack', 'LogicalTypeHeroicMythUnit', 'AbstractSocketedTownCenter', 'BuildingClass',
                  'LogicalTypeBuildingEmpoweredForLOS', 'LogicalTypeNeededForVictory', 'LogicalTypeParticipatesInBattlecries', 'LogicalTypeAutoAttackFocusBuildings', 'EmbellishmentClass', 'Nature',
                  'LogicalTypeFreezableMythUnit', 'LogicalTypeTeleporterBuilding', 'AbstractArcherShip', 'ValidIdleVillager', 'LogicalTypeMythUnitNotFlying', 'AbstractWarshipHero', 'GoldDropsite',
                  'LogicalTypeEasySelectAvoid', 'LogicalTypeAffectedByCeaseFireBuildingSlow', 'LogicalTypeMinimapFilterEconomic', 'MilitaryUnit', 'LogicalTypeUnitIsConstructed',
                  'LogicalTypeValidLocustSwarmTarget', 'LogicalTypeVillagersAttack', 'Transport', 'MythUnitMelee', 'Ship', 'FishResource', 'AbstractFishingShip',
                  'LogicalTypeMythUnitThatGeneratesFavor', 'NonConvertableHerdable', 'AbstractWalkingWoods', 'FoodDropsite', 'TradeableTo', 'MythUnitSiege', 'LogicalTypeFindBarracks',
                  'AbstractVillager', 'CavalryLineUpgraded', 'AbstractTransportShip', 'BuildLimitSharedAtlantean', 'LogicalTypeAffectedByValor', 'MythUnitCavalry', 'LogicalTypeValidSentinelTarget',
                  'ArcherLineUpgraded', 'LogicalTypeFindGoldDropsite', 'CountsTowardMilitaryScore', 'Building', 'LogicalTypeAgressiveNatureUnit', 'MythUnit', 'HeroShadowUpgraded', 'AbstractScout',
                  'AbstractTitan', 'VillagerHero', 'MinorHero', 'UnitClass', 'LogicalTypeArchaicMythUnit', 'LogicalTypeValidSpyTarget', 'WildCrops', 'LogicalTypeVillagersRespondToAttack',
                  'LogicalTypeBuildingsThatShoot', 'LogicalTypeSeidrTarget', 'AbstractFarm', 'AbstractFortress', 'AbstractArmory', 'AbstractInvisibleWall', 'Dropsite', 'LogicalTypeBuildingsNotWalls',
                  'LogicalTypeClassicalMythUnit', 'LogicalTypeVillagerNotHero', 'Resource', 'LogicalTypeAgeUpBuilding', 'LogicalTypeValidTornadoAttack', 'GoldResource', 'AnimalPrey',
                  'LogicalTypeConvertsHerds', 'AbstractDock', 'AbstractHealer', 'EconomicUpgraded', 'LogicalTypeAffectedByValleyOfTheKings', 'Huntable', 'AbstractGullinbursti',
                  'AbstractHouseBuildLimit', 'LogicalTypeTartarianGateValidOverlapPlacement', 'LogicalTypeValidShiftingSandsTarget', 'MythUnitRanged', 'LogicalTypeAffectedByRestoration',
                  'LogicalTypeRangedMythUnit', 'AbstractCavalry', 'LogicalTypeSunRayProjectile', 'LogicalTypeValidBoltTarget', 'AbstractDwarf', 'LogicalTypeTCBuildLimit', 'Unattackable',
                  'LogicalTypeHealed', 'DisplayQueue', 'LogicalTypeSharedHeroSelection', 'LogicalTypeRangedUnitsAttack', 'AbstractFlyingUnit', 'AbstractArcher', 'LogicalTypeHandUnitsAutoAttack',
                  'AbstractSiegeShip', 'Hero', 'LogicalTypeMythUnitNotTitan', 'NavalUnit', 'LogicalTypeEarthquakeAttack', 'AbstractTemple', 'AbstractMonument', 'MajorHero', 'AbstractSiegeWeapon',
                  'LogicalTypeValidSPCUnitsDeadCondition', 'MilitaryBuilding', 'AbstractWarship', 'Tree', 'AbstractTownCenter', 'LogicalTypeMilitaryProductionBuilding',
                  'LogicalTypeMinimapFilterMilitary', 'LogicalTypeFindFoodDropsite', 'AbstractInfantry', 'LogicalTypeNavalMilitary', 'HumanSoldier', 'Projectile', 'AbstractEmpowerer',
                  'LogicalTypeGarrisonInShips', 'AbstractSettlement', 'LogicalTypeBuildingThatCanBeEmpowered', 'LogicalTypeFindStable', 'CountsTowardEconomicScore', 'LogicalTypePickable',
                  'AbstractOracle', 'AbstractMarket', 'AnimalPredator', 'LogicalTypeMythicMythUnit']
})
// Computed property to dynamically fill the "All" category
const fillAllCategory = () => {
  categorizedUnitTypes.value.All = Object.entries(categorizedUnitTypes.value)
    .filter(([key]) => key !== 'All')  // Filter out the 'All' key
    .flatMap(([_, types]) => types)    // Flatten the array of types
}


// Fill "All" on initial load
fillAllCategory()

// Reactive state for selected unit types (tags)
const selectedUnitTypes = ref<string[]>([])

// Reactive state for the search input
const searchQuery = ref<string>("")

// Reactive state for active category
const activeCategory = ref<Category>("Logical") // Explicitly typed as 'Category'

// Filtered list of unit types based on search input and category
const filteredUnitTypes = ref<string[]>([])

// Filter unit types when the user types or selects a category
const filterUnitTypes = () => {
  // If there's a search query, switch to "All" category
  if (searchQuery.value) {
    activeCategory.value = "All"
  }

  const allTypes = categorizedUnitTypes.value[activeCategory.value]
  if (searchQuery.value) {
    filteredUnitTypes.value = allTypes.filter((type) =>
      type.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  } else {
    filteredUnitTypes.value = allTypes
  }
}

// Select a category to filter by
const selectCategory = (category: Category) => {
  activeCategory.value = category
  filterUnitTypes()
}

// Add a new type to the selected tags
const addType = (type: string) => {
  if (type && !selectedUnitTypes.value.includes(type)) {
    selectedUnitTypes.value.push(type)
  }
}

// Remove a type from the selected tags
const removeType = (type: string) => {
  selectedUnitTypes.value = selectedUnitTypes.value.filter((t) => t !== type)
}
</script>

<style scoped lang="scss">
$bg-color: #e0e5ec;
$shadow-light: #ffffff;
$shadow-dark: #a3b1c6;
$primary-color: #421715;
$text-color: #4a4a4a;
$highlight-color: #ffffff;
$shadow-color: #babecc;

.neumorphic-container {
  background: $bg-color;
  border-radius: 15px; // Smaller border-radius
  box-shadow: 6px 6px 12px $shadow-dark, -6px -6px 12px $shadow-light; // Smaller shadow
  padding: 10px; // Smaller padding
}

.neumorphic-input {
  background: $bg-color;
  color: $text-color;
  border: none;
  border-radius: 8px; // Smaller border-radius
  padding: 6px 10px; // Smaller padding for input
  font-size: 12px; // Smaller font size
  box-shadow: inset 3px 3px 7px $shadow-dark, inset -3px -3px 7px $shadow-light; // Smaller shadows
  width: 100%;
}

.filter-container {
  display: flex;
  flex-direction: column;
}

.type-input {
  padding: 10px;
  margin-bottom: 10px;
}

.category-filter {
  display: flex;
  gap: 10px;
}

.neumorphic-btn {
  background: $bg-color;
  color: $text-color;
  border-radius: 15px; // Smaller border-radius
  font-size: 14px; // Smaller font-size
  padding: 8px 12px; // Smaller padding
  box-shadow: 6px 6px 12px $shadow-color, -6px -6px 12px $highlight-color; // Smaller shadow

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 8px 8px 16px $shadow-color, -8px -8px 16px $highlight-color;
  }

  &:active,
  &.active {
    background-color: $primary-color;
    color: $bg-color;
  }
}

.filtered-types-list {
  max-height: 200px;
  overflow-y: auto;
  background-color: $bg-color;
  border-radius: 10px;
  box-shadow: 5px 5px 10px $shadow-dark, -5px -5px 10px $shadow-light;
}

.filtered-type {
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
}

.selected-types-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.selected-tag {
  background-color: $primary-color;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.remove-tag-btn {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
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
