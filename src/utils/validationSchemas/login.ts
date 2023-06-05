import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
            .string()
            .email("Email inválido*")
            .required("Campo obligatorio*"),
    password: yup
            .string()
            .min(8, "La contraseña debe tener al menos 8 caracteres*")
            .required("Campo obligatorio*"),
});