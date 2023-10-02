import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

import { Formik, Field, Form, ErrorMessage } from "formik";
import YupValidation from "./ValidationSearch";

const Search = () => {
  const initialValue = {
    golpe: "",
  };

  const handleSubmit = (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));
    props.resetForm();
  };

  return (
    <Grid container style={{ marginBottom: "3vh" }}>
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
              <b>Busqueda</b>
            </p>
            <Formik
              initialValues={initialValue}
              validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(props) => {
                return (
                  <Form>
                    <Grid container spacing={0.5}>
                      <Grid item xs={12} md={8}>
                        <Field
                          as={TextField}
                          label="Golpe"
                          type="text"
                          name="golpe"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="golpe" />}
                          error={props.errors.golpe && props.touched.golpe}
                          required
                        />{" "}
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Button
                          variant="outlined"
                          sx={12}
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
                            <b>Buscar</b>
                          </span>
                        </Button>{" "}
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Search;
