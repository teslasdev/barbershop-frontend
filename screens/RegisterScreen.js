import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import SvgLogo from "../assets/svgs/Logo.svg";
import SvgLogo2 from "../assets/svgs/Logo2.svg";
import SvgIllustration from "../assets/svgs/Illustration.svg";
import SvgEmail from "../assets/svgs/email.svg";
import SvgLock from "../assets/svgs/lock.svg";
import SvgEye from "../assets/svgs/eye.svg";
import SvgGoogle from "../assets/svgs/google.svg";
import SvgFacebook from "../assets/svgs/facebook.svg";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://andrii-server.onrender.com/api/login",
        values
      );
      setLoading(false);
      Alert(response.data.message); // Display success message
      navigation.navigate("HomeScreen"); // Navigate to home screen
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data.error || "Error occurred"); // Display error message
      } else {
        Alert("Unexpected error occurred"); // Handle unexpected errors
        console.error("Error:", error);
      }
    }
    resetForm();
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <SvgLogo2 width={49.23} height={49} />
        <Text style={styles.loginText}>Create Account</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
              <View style={styles.inputContainer}>
                <SvgEmail width={24} height={24} />
                <TextInput
                  style={styles.input}
                  placeholder="name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.email}
                />
              </View>
              <ErrorMessage
                name="email"
                component={Text}
                style={styles.errorText}
              />
              <View style={styles.inputContainer}>
                <SvgEmail width={24} height={24} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              <ErrorMessage
                name="email"
                component={Text}
                style={styles.errorText}
              />
              <View style={styles.inputContainer}>
                <SvgLock width={24} height={24} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                <SvgEye width={24} height={24} />
              </View>
              <ErrorMessage
                name="password"
                component={Text}
                style={styles.errorText}
              />
              <TouchableOpacity
                style={styles.forgetPassword}
                onPress={() => {}}
              >
                <Text style={styles.forgetPasswordText}>Forget Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, !isValid && styles.buttonDisabled]}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Create Account</Text>
                )}
              </TouchableOpacity>
              <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.separatorText}>Or</Text>
                <View style={styles.separator} />
              </View>
              <View style={styles.socialButtonsContainer}>
                <SvgGoogle width={175} height={40} />
                <SvgFacebook width={175} height={40} />
              </View>
              <Text style={styles.registerText}>Have account already?</Text>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.registerButtonText}>Login</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3949AB",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  illustrationContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 24,
    width: "95%",
    height: "70%",
    alignItems: "center",
  },
  loginText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3949AB",
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E6E9FA",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  forgetPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgetPasswordText: {
    color: "#3949AB",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#3949AB",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#E6E9FA",
  },
  separatorText: {
    marginHorizontal: 10,
    color: "#7B7B7B",
    fontWeight: "600",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 10,
  },
  registerText: {
    color: "#7B7B7B",
    fontWeight: "600",
    marginBottom: 10,
  },
  registerButton: {
    borderColor: "#3949AB",
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  registerButtonText: {
    color: "#3949AB",
  },
});

export default RegisterScreen;
