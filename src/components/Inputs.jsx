import { View, Text, TextInput, Image, Platform, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import SvgEye from "../../assets/svgs/eye.svg";
import SvgCalender from "../../assets/svgs/calendar.svg";
import SvgArrow from "../../assets/svgs/arrow-down.svg";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment';

export const PrimaryInputs = ({ className, ...props }) => {
  return (
    <View className="w-full h-[44px]">
      <TextInput
        className={`${className} w-full font-[400] border rounded-[24px] border-[#D3CDC1] px-4`}
        {...props}
      />
    </View>
  );
};

export const PasswordInputs = ({ className, ...props }) => {
  return (
    <View className="w-full relative flex h-[44px] justify-center items-center">
      <TextInput
        className={`${className} w-full font-[400] border rounded-[24px] border-[#D3CDC1] px-4`}
        {...props}
      />
      <View className="absolute top-4 right-6">
        <SvgEye />
      </View>
    </View>
  );
};

export const DropInputs = ({ className, ...props }) => {
  return (
    <View className="w-full relative flex h-[44px] justify-center items-center">
      <TextInput
        className={`${className} w-full font-[400] border rounded-[24px] border-[#D3CDC1] px-4`}
        {...props}
      />
      <View className="absolute top-4 right-6">
        <SvgArrow />
      </View>
    </View>
  );
};

export const DatePickerComponent = ({ className, ...props }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const formatDate = (date) => {
    return moment(date).format('DD.MM.YYYY');
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View className="w-full relative flex h-[44px] justify-center items-center">
      <TextInput
        value={formatDate(date)}
        className={`${className} w-full font-[400] border rounded-[24px] border-[#D3CDC1] text-[#00000066] px-4`}
        {...props}
        onFocus={showDatepicker}
      />
      <View className="absolute top-4 right-6">
        <SvgCalender />
      </View>
      {show && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          onRequestClose={() => setShow(false)}
        >
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPressOut={() => setShow(false)}
          >
            <View style={styles.pickerContainer}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="spinner"
                onChange={onChange}
                textColor="black"
                style={styles.picker}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  picker: {
    width: 320,
    height: 260,
  },
});