export type SideNavigationItemType = {
  id: number;
  name: string;

  linkPath: string;
};

export type CommunityEventType = {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string;
  image: any;
  hidden?: boolean;
};

export interface SecurityEventType extends CommunityEventType {}

export type PressType = {
  id: number;
  name: string;
  description: string;
  date: string;
  link: string;
};

export type TestimonialType = {
  id: number;
  from: string;
  description: string;
  image: any;
};
