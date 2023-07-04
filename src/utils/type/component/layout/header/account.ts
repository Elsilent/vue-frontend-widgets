import type { IconBackend } from '../../../../enum/icon_backend';

export type AvatarInfo =
  | { icon: string; iconBackend?: IconBackend }
  | { label: string }
  | { source: string };
