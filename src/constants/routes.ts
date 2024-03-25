export const Routes = {
  Home: "/",
  Contact: "/contact",
  Auth: {
    Join: `/join`,
    Login: "/login",
    ForgotPassword: "/reset-password",
  },
  Dashboard: {
    Index: (param: string) => "/dashboard",
  }
};
