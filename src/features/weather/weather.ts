export interface Weather {
  description: string;
  currentTemperature: number;
  minTemperature?: number;
  maxTemperature?: number;
  humidity?: number;
  precipitation?: number;
  wind?: number;
  icon?: number;
  windDirection?: string;
}
