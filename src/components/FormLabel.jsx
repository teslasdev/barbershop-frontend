import { View, Text } from 'react-native'
import React from 'react'

export default function FormLabel({
    label
}) {
  return (
    <View>
      <Text className="text-[#000000] leading-[24px] text-[12px]">{label}</Text>
    </View>
  )
}