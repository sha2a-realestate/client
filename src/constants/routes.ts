export const Routes = {
  Home: '/',
  Contact: '/contact',
  Auth: {
    Join: `/join`,
    Login: '/login',
    ForgotPassword: '/reset-password'
  },
  CompleteProfile: (step: string) => `/complete-profile?step=${step}}`,
  Dashboard: {
    Index: '/dashboard'
  }
};
