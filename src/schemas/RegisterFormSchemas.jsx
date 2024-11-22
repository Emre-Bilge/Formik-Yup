import * as yup from 'yup';


export const RegisterFormSchemas = yup.object().shape({
    email: yup.string().email("Lütfen geçerli bir Email giriniz").required("Email adresi girmek zorunludur"),

    age: yup.number().positive("Pozitif bir değer giriniz").required("Yaş girilmesi zorunludur"),

    password: yup.string().required("Şifre girilmesi zorunludur").min(4, "4 harften fazla olmak zorundadır").max(10, "10 karakterden küçük olmak zorundadır."),
    confirmPassword: yup.string().required("Şifre tekrarı girmek zorunludur").oneOf([yup.ref("password", yup.password)], "Şifreler eşleşmiyor"),
    term: yup.boolean().required("Sözleşmeyi onaylayınız")
})