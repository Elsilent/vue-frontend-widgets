import type { IconBackend } from '../enum/icon_backend';
import type { Mood } from '../enum/mood';

export interface Toast {
  id: number;
  icon: string;
  iconBackend?: IconBackend;
  mood: Mood;
  message: string;
  title: string;
}
