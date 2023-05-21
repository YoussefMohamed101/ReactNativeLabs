import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),
  password: Yup.string()
    .min(9, "Password must be at least 9 characters long")
    .required("Password is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (values) => {
    console.log(values);
    alert("Login successful");
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              autoCapitalize="none"
            />
            {errors.username && touched.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              autoCapitalize="none"
              secureTextEntry={!showPassword}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <View style={styles.passwordToggleContainer}>
              <Button
                title={showPassword ? "Hide" : "Show"}
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              autoCapitalize="none"
              keyboardType="numeric"
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <Text style={styles.error}>{errors.phoneNumber}</Text>
            )}
            <Button title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    marginVertical: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  error: {
    fontSize: 12,
    color: "red",
  },
  passwordToggleContainer: {
    alignItems: "flex-end",
    marginVertical: 10,
    paddingRight: 10,
  },
});

export default LoginForm;
