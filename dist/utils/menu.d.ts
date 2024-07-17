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
export declare class MenuFlattener {
    private flattenItem;
    flatten(menu: Menu): FlatMenu;
}
export declare class MenuManager {
    find(menu: FlatMenu, code: string): FlatMenuItem | undefined;
}
export declare const menuManager: MenuManager;
