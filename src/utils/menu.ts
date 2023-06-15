import type { RouteLocationRaw } from 'vue-router';
import type { IconBackend } from './enum/icon_backend';

export interface MenuItem {
  icon?: string;
  iconBackend?: IconBackend;
  label: string;
  route: RouteLocationRaw;
}

export interface FlatMenuSection {
  icon?: string;
  iconBackend?: IconBackend;
  label?: string;
}

export interface MenuSection extends FlatMenuSection {
  items: Record<string, MenuItem | MenuSection>;
  label?: string;
}

export interface FlatMenuItem extends MenuItem {
  code: string;
}

export type FlatMenu = (FlatMenuItem | FlatMenuSection)[];

export type Menu = Record<string, MenuSection>;

export class MenuFlattener {
  private flattenItem(item: MenuItem | MenuSection, code: string, prefix = ''): FlatMenu {
    if ('route' in item) {
      return [
        {
          ...item,
          code: `${prefix}${code}`,
        },
      ];
    }

    return Object.entries(item.items)
      .map(([itemCode, item]) => this.flattenItem(item, itemCode, `${prefix}${code}.`))
      .flat();
  }

  flatten(menu: Menu): FlatMenu {
    return Object.entries(menu)
      .map(([code, item]) => this.flattenItem(item, code))
      .flat();
  }
}

export class MenuManager {
  find(menu: FlatMenu, code: string): FlatMenuItem | undefined {
    return <FlatMenuItem | undefined>menu.find((item) => 'code' in item && item.code === code);
  }
}

export const menuManager = new MenuManager();
