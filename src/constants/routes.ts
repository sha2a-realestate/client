export const Routes = {
  Home: '/',
  Contact: '/contact',
  Auth: {
    Join: `/join`,
    Login: '/auth/login',
    Register: '/auth/register',
    ForgotPassword: '/reset-password'
  },
  CompleteProfile: (step: string) => `/complete-profile/${step}`,
  Dashboard: {
    Index: '/dashboard'
  }
};
