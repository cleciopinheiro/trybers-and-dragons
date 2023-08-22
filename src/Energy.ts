export type EnergyType = string;

export default interface Energy {
  type_: EnergyType;
  amount: number;
}