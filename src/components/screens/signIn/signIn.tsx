import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Formik, useField } from "formik";
import StyledInputText from "../../../styles/StyledInputText";
import StyledText from "../../../styles/StyledText";
import { loginSchema } from "../../../utils/validationSchemas/login";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const FormikInputValue = ({ name = "", ...props }) => {
    // field -> información del campo
    // meta -> metainformación del campo, variaciones, errores, etc
    // helpers -> funciones para cambiar el valor del campo
    const [field, meta, helpers] = useField(name);
    return (
      <>
        <StyledInputText
          onChangeText={(value: string) => helpers.setValue(value)}
          value={field.value}
          error={meta.error}
          {...props}
        />
        {meta.error && (
          <StyledText style={styles.error}>{meta.error}</StyledText>
        )}
      </>
    );
  };

  const validateForm = (value: any) => {
    let errors = {
      email: "",
      password: "",
    };
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(value.email)) {
      errors.email = "Invalid email address";
    } else if (!value.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      // validate={validateForm} // validación manual
      validationSchema={loginSchema} // validación con yup
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        return (
          <View style={styles.container}>
            <View style={styles.inputs}>
              <FormikInputValue name="email" placeholder="E-mail" />
              <FormikInputValue
                name="password"
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <Button title="Log In" onPress={() => handleSubmit()} />
          </View>
        );
      }}
    </Formik>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputs: {
    gap: 5,
    marginBottom: 20,
  },
  error: {
    color: "red",
    fontSize: 12,
    margin: 0,
    padding: 0,
    // marginVertical: 5,
  },
});
