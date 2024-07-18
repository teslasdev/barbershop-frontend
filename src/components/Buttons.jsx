import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'


export default function PrimaryButton({
    label,
    ...props
}) {
  return (
    <TouchableOpacity {...props} className="flex justify-center items-center h-[44px] bg-[#D3CDC1] rounded-[24px]">
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}