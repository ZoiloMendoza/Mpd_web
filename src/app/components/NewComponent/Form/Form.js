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
      name: "Elemento 4",
    },
  ];

  const handleSubmit = (values, props) => {
    console.log(values);
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
                          type="Email"
                          name="email"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="email" />}
                          error={props.errors.email && props.touched.email}
                        />{" "}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          label="O.T"
                          name="phoneNumber"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="phoneNumber" />}
                          error={
                            props.errors.phoneNumber &&
                            props.touched.phoneNumber
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          select
                          label="Planta"
                          name="planta"
                          type="text"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="password" />}
                          error={
                            props.errors.password && props.touched.password
                          }
                        >
                          {namePlant.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </TextField>{" "}
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
                          helperText={<ErrorMessage name="password" />}
                          error={
                            props.errors.password && props.touched.password
                          }
                        >
                          {nameMini.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </TextField>{" "}
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          {/* <DemoContainer components={["DatePicker"]}> */}
                          <DatePicker label="Fecha de inicio" />
                          {/* </DemoContainer> */}
                        </LocalizationProvider>{" "}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            name="confirmPassword"
                            label="Fecha promesa"
                            helperText={<ErrorMessage name="confirmPassword" />}
                            error={
                              props.errors.confirmPassword &&
                              props.touched.confirmPassword
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
                        />{" "}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          select
                          label="Tipo de elemento"
                          name="mini"
                          // type="text"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="password" />}
                          error={
                            props.errors.password && props.touched.password
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
                        />{" "}
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          select
                          label="Proceso"
                          name="mini"
                          // type="text"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="password" />}
                          error={
                            props.errors.password && props.touched.password
                          }
                        >
                          {typeProcess.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </TextField>{" "}
                      </Grid>
                    </Grid>

                    {/* <TextField
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
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button> */}
                    <NewForm />
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
