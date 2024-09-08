export interface FormField {
  label: string
  type: "text" | "select"
  options?: string[]
}

export const basicInformationFields = ref<FormField[]>([
  { label: "Name", type: "text" },
  { label: "Display Name ID", type: "text" },
  { label: "Rollover Text ID", type: "text" },
  { label: "Short Rollover Text ID", type: "text" },
  { label: "Editor Name ID", type: "text" },
])

// Define unit combat fields
export const unitCombatFields = ref<FormField[]>([
  { label: "Initial Hitpoints", type: "text" },
  { label: "Max Hitpoints", type: "text" },
  { label: "Line of Sight (LOS)", type: "text" },
  { label: "Weight Class", type: "text" },
  { label: "Auto Attack Range", type: "text" },
  { label: "Unit Regen", type: "text" },
  { label: "Recharge Time", type: "text" },
  { label: "Max Contained Units", type: "text" },
  { label: "Aux Recharge Time", type: "text" },
  { label: "Armor Angle", type: "text" },
  { label: "Armor Value", type: "text" },
])

// Define movement information fields
export const movementInformationFields = ref<FormField[]>([
  { label: "Movement Type", type: "select", options: ["amphibious", "land", "water", "air"] },
  { label: "Max Velocity", type: "text" },
  { label: "Turn Rate", type: "text" },
  { label: "Max Run Velocity", type: "text" },
])
