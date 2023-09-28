import * as yup from "yup";

export const YupValidation = yup.object({
  golpe: yup
    .string()
    .min(6, "Todo bien!")
    .max(7, "Muy Largo!")
    .required("Requerido!"),
});

export default YupValidation;
