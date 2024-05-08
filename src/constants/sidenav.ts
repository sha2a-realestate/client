import { Heart, Home, Megaphone, Settings } from 'lucide-react';
import { Routes } from './routes';

export const SideNavLinks = [
  { name: 'dashboard', url: Routes.Home, icon: Home },
  { name: 'favourites', url: Routes.Favourites, icon: Heart },
  { name: 'my-advertisements', url: Routes.MyAds, icon: Megaphone },
  { name: 'settings', url: Routes.Settings, icon: Settings }
];
