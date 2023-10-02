import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import ValidationNewRegister from "./Validations";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NewForm from "./NewForm";

const FormRegister = () => {
  const initialValue = {
    os: "",
    ot: "",
    planta: "",
    mini: "",
    dateStart: "",
    dateEnd: "",
    user: "",
    typeElement: "",
    name: "",
    typeProcess: "",
    potenciaCantidad: "",
    potenciaData: "",
    golpeNew: "",
    dataPlate: "",
    description: "",
  };

  const namePlant = [
    {
      name: "Planta 1",
    },
    {
      name: "Planta 2",
    },
    {
      name: "Planta 3",
    },
    {
      name: "Planta 4",
    },
    {
      name: "Planta 5",
    },
    {
      name: "Planta 6",
    },
  ];

  const nameMini = [
    {
      name: "Mini 1",
    },
    {
      name: "Mini 2",
    },
    {
      name: "Mini 3",
    },
    {
      name: "Mini 4",
    },
    {
      name: "Mini 5",
    },
    {
      name: "Mini 6",
    },
  ];
  const typeElement = [
    {
      name: "Elemento 1",
    },
    {
      name: "Elemento 2",
    },
    {
      name: "Elemento 3",
    },
    {
      name: "Elemento 4",
    },
    {
      name: "Elemento 5",
    },
    {
      name: "Elemento 6",
    },
  ];

  const typeProcess = [
    {
      name: "Normal",
    },
    {
      name: "Urgente",
    },
    {
      name: "Garantia",
    },
    {
      name: "Cancelado",
    },
  ];

  const handleSubmit = (values, props) => {
    console.log("values", values);
    alert(JSON.stringify(values));

    props.resetForm();
  };

  return (
    <Grid container>
      <Grid item sm={12} xs={12}>
        <Paper>
          <Box p={3}>
            <p
              style={{
                color: "#D82E20",
                fontSize: "20px",
                textAlign: "initial",
                marginBottom: "10px",
              }}
            >
              <b>Nuevo Registro</b>
            </p>

            <Formik
              initialValues={initialValue}
              validationSchema={ValidationNewRegister}
              onSubmit={handleSubmit}
            >
              {(props) => {
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          label="O.S"
                          type="text"
                          name="os"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="os" />}
                          error={props.errors.os && props.touched.os}
                        />{" "}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          label="O.T"
                          type="text"
                          name="ot"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="ot" />}
                          error={props.errors.ot && props.touched.ot}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          select
                          label="Planta"
                          name="planta"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="planta" />}
                          error={props.errors.planta && props.touched.planta}
                        >
                          {namePlant.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          select
                          label="Mini"
                          name="mini"
                          // type="text"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="mini" />}
                          error={props.errors.mini && props.touched.mini}
                        >
                          {nameMini.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Fecha de inicio"
                            name="dateStart"
                            helperText={<ErrorMessage name="dateStart" />}
                            error={
                              props.errors.dateStart && props.touched.dateStart
                            }
                          />
                        </LocalizationProvider>{" "}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            name="dateEnd"
                            label="Fecha promesa"
                            helperText={<ErrorMessage name="dateEnd" />}
                            error={
                              props.errors.dateEnd && props.touched.dateEnd
                            }
                          />
                        </LocalizationProvider>{" "}
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          label="Usuario"
                          name="user"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="user" />}
                          error={props.errors.user && props.touched.user}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          select
                          label="Tipo de elemento"
                          name="typeElement"
                          // type="text"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="typeElement" />}
                          error={
                            props.errors.typeElement &&
                            props.touched.typeElement
                          }
                        >
                          {typeElement.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          label="Nombre"
                          name="name"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="name" />}
                          error={props.errors.name && props.touched.name}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field
                          COMPON
                          select
                          label="Proceso"
                          name="typeProcess"
                          // type="text"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="typeProcess" />}
                          error={
                            props.errors.typeProcess &&
                            props.touched.typeProcess
                          }
                        >
                          {typeProcess.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>

                    {/* <NewForm /> */}
                    <p
                      style={{
                        color: "#D82E20",
                        fontSize: "20px",
                        textAlign: "initial",
                        marginBottom: "10px",
                      }}
                    >
                      <b>Motor</b>
                    </p>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          label="Potencia/cantidad"
                          name="potenciaCantidad"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="potenciaCantidad" />}
                          error={
                            props.errors.potenciaCantidad &&
                            props.touched.potenciaCantidad
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          select
                          label="Potencia/Dato"
                          name="potenciaData"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="potenciaData" />}
                          error={
                            props.errors.potenciaData &&
                            props.touched.potenciaData
                          }
                        >
                          <MenuItem value={"KW"}>KW</MenuItem>
                          <MenuItem value={"HP"}>HP</MenuItem>
                        </TextField>{" "}
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Golpe"
                          name="golpeNew"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="golpeNew" />}
                          error={
                            props.errors.golpeNew && props.touched.golpeNew
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          select
                          label="Placa de Datos"
                          name="dataPlate"
                          // type="text"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="dataPlate" />}
                          error={
                            props.errors.dataPlate && props.touched.dataPlate
                          }
                        >
                          <MenuItem value={"SI"}>SI</MenuItem>
                          <MenuItem value={"NO"}>NO</MenuItem>
                          {/* {nameMini.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))} */}
                        </TextField>
                      </Grid>
                    </Grid>
                    <TextField
                      label="Descripcion"
                      name="description"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="description" />}
                      error={
                        props.errors.description && props.touched.description
                      }
                    />
                    <TextField
                      name="image"
                      type="file"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      onChange={(event) =>
                        props.setFieldValue("image", event.target.files[0])
                      }
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="image" />}
                      error={props.errors.image && props.touched.image}
                      required
                    />
                    <Button
                      type="submit"
                      variant="outlined"
                      // sx={12}
                      style={{
                        borderRadius: "50px",
                        background: "#D82E20",
                        border: "none",
                        textTransform: "capitalize",
                        color: "white",
                        fontSize: "16px",
                        // width: "8vw",
                        marginTop: "15px",
                        height: "6vh",
                        marginLeft: "10px",
                      }}
                    >
                      <span>
                        <b>Guardar</b>
                      </span>
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      {/* <NewForm /> */}
    </Grid>
  );
};

export default FormRegister;
