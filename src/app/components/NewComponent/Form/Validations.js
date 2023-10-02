import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];
const FILE_SIZE = 524288;
const phoneNumberRegEx = /^[0-1]{2}[0-9]{9}/;
const PasswordRegEx =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const ValidationNewRegister = yup.object({
  os: yup
    .string()
    .length(3, "Min 5 caracteres")
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .required("Requerido *"),

  ot: yup
    .string()
    .length(3, "Min 5 caracteres")
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .required("Requerido *"),

  planta: yup
    .string()
    .required("Requerido *")
    .notOneOf(["", "Seleccionar"], "Debes seleccionar una opción"),

  mini: yup
    .string()
    .required("Requerido *")
    .notOneOf(["", "Seleccionar"], "Debes seleccionar una opción"),

  dateStart: yup
    .string()
    .required("Requerido *")
    .notOneOf(["", "Seleccionar"], "Debes seleccionar una opción"),

  dateEnd: yup
    .string()
    .required("Requerido *")
    .notOneOf(["", "Seleccionar"], "Debes seleccionar una opción"),

  user: yup.string().required("Requerido *"),

  typeElement: yup
    .string()
    .required("Requerido *")
    .notOneOf(["", "Seleccionar"], "Debes seleccionar una opción"),

  name: yup.string().required("Requerido *"),

  typeProcess: yup
    .string()
    .required("Requerido *")
    .notOneOf(["", "Seleccionar"], "Debes seleccionar una opción"),

  potenciaCantidad: yup
    .string()
    .length(3, "Min 5 caracteres")
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .required("Requerido *"),

  potenciaData: yup
    .string()
    .required("Requerido *")
    .notOneOf(["", "Seleccionar"], "Debes seleccionar una opción"),

  golpeNew: yup.string().required("Requerido *"),

  dataPlate: yup
    .string()
    .required("Requerido *")
    .notOneOf(["", "Seleccionar"], "Debes seleccionar una opción"),

  description: yup.string().required("Requerido *"),
});

export default ValidationNewRegister;
