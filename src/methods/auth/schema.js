import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const schema = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Email Address is Required."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required."),
});

// yup.string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .nullable(),
//  yup.object().shape({
//    mobile: yup
//      .string()
//      .length(10, "Invalid phone number")
//      .required("Phone number is required"),
//  });

