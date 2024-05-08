export const Routes = {
  Home: '/results',
  Favourites: '/favourites',
  Settings: '/settings',
  MyAds: '/my-advertisement',
  Contact: '/contact',
  Auth: {
    Login: '/login',
    Register: '/register',
    ForgotPassword: '/reset-password'
  },
  CompleteProfile: (step: string) => `/complete-profile/${step}`,
  Dashboard: {
    Index: '/dashboard'
  }
};
