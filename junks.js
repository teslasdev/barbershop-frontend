{/* <View style={styles.formContainer}>
        <SvgLogo2 width={49.23} height={49} />
        <Text style={styles.loginText}>Log in</Text>
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
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              <ErrorMessage name="email" component={Text} style={styles.errorText} />
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
              <ErrorMessage name="password" component={Text} style={styles.errorText} />
              <TouchableOpacity style={styles.forgetPassword} onPress={() => {}}>
                <Text style={styles.forgetPasswordText}>Forget Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, !isValid && styles.buttonDisabled]}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Log In</Text>}
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
              <Text style={styles.registerText}>Have no account yet?</Text>
              <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View> */}

      const [loading, setLoading] = useState(false);

      const initialValues = {
        email: "",
        password: "",
      };

      const navigation = useNavigation();
    
      const validationSchema = Yup.object({
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
    