import type { MenuItem as PopoverMenuItem } from '../../../../menu';

export interface MenuItem extends PopoverMenuItem {
  handler: () => void;
  label: string;
}
