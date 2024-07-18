import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import FormLabel from "../src/components/FormLabel";
import { PasswordInputs, PrimaryInputs } from "../src/components/Inputs";
import PrimaryButton from "../src/components/Buttons";
import KeyboardAvoidingComponent from "../src/components/KeyboardAvoidingComponent";

const LoginScreen = () => {
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
              <View className="h-[8px] w-[32px] bg-[#D3CDC1] rounded-[8px]" />
              <View className="h-[8px] w-[8px] bg-[#D3CDC166] rounded-[8px]" />
            </View>

            <View className="py-10 flex flex-col gap-y-6">
              <View className="gap-y-2">
                <FormLabel label={"First Name"} />
                <PrimaryInputs
                  className="h-[44px] w-full"
                  placeholder={"John"}
                />
              </View>
              <View className="gap-y-2">
                <FormLabel label={"Last Name"} />
                <PrimaryInputs
                  className="h-[44px] w-full"
                  placeholder={"Doe"}
                />
              </View>

              <View className="gap-y-2">
                <FormLabel label={"Email Address"} />
                <PrimaryInputs
                  className="h-[44px] w-full"
                  placeholder={"Johndoe@gmail.com"}
                />
              </View>

              <View className="gap-y-2">
                <FormLabel label={"Password"} />
                <PasswordInputs
                  className="h-[44px] w-full"
                  placeholder={"Create Password"}
                />
              </View>

              <View className="gap-y-2">
                <FormLabel label={"Password Confirmation"} />
                <PasswordInputs
                  className="h-[44px] w-full"
                  placeholder={"Create Password"}
                />
              </View>
            </View>

            <View>
              <PrimaryButton label={"Continue"} />
            </View>
          </View>
        </KeyboardAvoidingComponent>
      </View>
    </View>
  );
};



export default LoginScreen;
