import type { IconBackend } from '../../utils/enum/icon_backend';

export interface MenuItem {
  icon?: string;
  iconBackend?: IconBackend;
  label?: string;
}
