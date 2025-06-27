import * as yup from 'yup'

 export const UserSchema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    email: yup.string().email("Email must be Valid").required('Email is Required')
})