export const Routes = {
  Home: '/',
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
