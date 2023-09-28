import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import ValidationNewRegister from "./Validations";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const NewForm = () => {
  const initialValue = {
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    image: "",
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
      name: "Si",
    },
    {
      name: "No",
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

  const handleSubmit = (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));

    props.resetForm();
  };

  return (
    <Grid container>
      {/* <Grid> */}
      <Paper style={{ boxShadow: "none" }}>
        {/* <Box p={3}> */}
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

        <Formik
          initialValues={initialValue}
          validationSchema={ValidationNewRegister}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Field
                      as={TextField}
                      label="Potencia/cantidad"
                      type="Email"
                      name="email"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="email" />}
                      error={props.errors.email && props.touched.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      select
                      label="Potencia/Dato"
                      name="phoneNumber"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="phoneNumber" />}
                      error={
                        props.errors.phoneNumber && props.touched.phoneNumber
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
                      name="planta"
                      type="text"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="password" />}
                      error={props.errors.password && props.touched.password}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      select
                      label="Placa de Datos"
                      name="mini"
                      // type="text"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="password" />}
                      error={props.errors.password && props.touched.password}
                    >
                      {nameMini.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                <TextField
                  label="Descripcion"
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  helperText={<ErrorMessage name="confirmPassword" />}
                  error={
                    props.errors.confirmPassword &&
                    props.touched.confirmPassword
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
                  style={{
                    borderRadius: "50px",
                    background: "#D82E20",
                    border: "none",
                    textTransform: "capitalize",
                    color: "white",
                    fontSize: "16px",
                    width: "8vw",
                    marginTop: "15px",
                    height: "6vh",
                    marginLeft: "10px",
                  }}
                >
                  <span>
                    <b>Guardar</b>
                  </span>
                </Button>
              </>
            );
          }}
        </Formik>
        {/* </Box> */}
      </Paper>
    </Grid>
    // </Grid>
  );
};

export default NewForm;
