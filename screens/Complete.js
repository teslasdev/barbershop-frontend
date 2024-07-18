import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import FormLabel from "../src/components/FormLabel";
import {
  DatePickerComponent,
  DropInputs,
  PrimaryInputs,
} from "../src/components/Inputs";
import PrimaryButton from "../src/components/Buttons";
import KeyboardAvoidingComponent from "../src/components/KeyboardAvoidingComponent";

const Complete = () => {
  return (
    <View className="flex-1">
      <View className="w-full h-full">
        <View className="h-[189px] relative">
          <Image
            source={require("../assets/images/water-wave-texture-background-brown-design 1.png")}
            className="w-full h-full absolute z-10"
          />
          <View className="absolute bottom-0 p-6 z-20">
            <Text className="text-[32px] leading-[41.66px] font-[700]">
              Sign Up
            </Text>
            <View className="flex flex-row gap-x-1 mt-">
              <Text className="font-[500] text-[16px] text-[#000000CC]">
                Already have an Account?
              </Text>
              <TouchableOpacity className="">
                <Text className="underline">Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <KeyboardAvoidingComponent>
          <View className="p-6">
            <View className="flex items-center gap-2 flex-row">
              <View className="h-[8px] w-[8px] bg-[#D3CDC166] rounded-[8px]" />
              <View className="h-[8px] w-[32px] bg-[#D3CDC1] rounded-[8px]" />
            </View>

            <View className="py-10 flex flex-col gap-y-6">
              <View className="gap-y-2">
                <FormLabel label={"Phone Number"} />
                <PrimaryInputs
                  className="h-[44px] w-full"
                  placeholder={"+972-00-000-0000"}
                />
              </View>
              <View className="gap-y-2">
                <FormLabel label={"Date of Birth"} />
                <DatePickerComponent
                  className="h-[44px] w-full"
                  placeholder={"DD.MM.YYYY"}
                />
              </View>

              <View className="gap-y-2">
                <FormLabel label={"Anniversary Day"} />
                <DatePickerComponent
                  className="h-[44px] w-full"
                  placeholder={"DD.MM.YYYY"}
                />
              </View>

              <View className="gap-y-2">
                <FormLabel label={"Gender"} />
                <DropInputs
                  className="h-[44px] w-full"
                  placeholder={"Select"}
                />
              </View>

              <View className="gap-y-2">
                <FormLabel label={"Refer By"} />
                <PrimaryInputs
                  className="h-[44px] w-full"
                  placeholder={"Johndoe@gmail.com"}
                />
              </View>
            </View>

            <View>
              <PrimaryButton label={"Sign Up"} />
            </View>
          </View>
        </KeyboardAvoidingComponent>
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
    height: "65%",
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

export default Complete;
