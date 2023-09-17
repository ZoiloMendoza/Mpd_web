import { FormControl, FormHelperText, InputLabel, Input  } from '@mui/material';
import { FormStyles } from "./styles";

const Form = () => {
  return (
    <FormControl style={FormStyles.container}>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">
        Nosotros nunca compartiremos tu correo.
      </FormHelperText>
    </FormControl>
  );
};

export default Form;
