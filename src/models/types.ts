export interface BiographyName {
  name: string;
  // kunya
  teknonym?: string;
  // nisba
  connection?: string;
}

export interface Biography {
  id: number;
  nameDetails: BiographyName;
  residence?: string;
  reliability?: string;
  period?: string;
  dod?: string;
  collectors?: Array<string>;
}
