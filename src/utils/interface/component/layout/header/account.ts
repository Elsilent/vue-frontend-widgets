import type { MenuItem as PopoverMenuItem } from '../../../menu';

export interface Locale {
  code: string;
  icon: string;
}

export interface MenuItem extends PopoverMenuItem {
  handler: () => void;
  label: string;
}
