import * as Yup from "yup";

export const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  city: Yup.string().required("City is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  StreetAddress: Yup.string().required("Street Address is required"),
});
