import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const personalInfoValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('This field is required'),
  secondName: Yup.string().required('This field is required'),
  phoneNumber: Yup.string()
    .min(8)
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required')
});
