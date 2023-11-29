import type { MenuItem as PopoverMenuItem } from '@/utils/menu';

export interface MenuItem extends PopoverMenuItem {
  handler: () => void;
  label: string;
}
