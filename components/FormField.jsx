import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { React, useState } from "react";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-secondary font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-white rounded-2xl focus:bg-gray flex-row">
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="black"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Senha" && !showPassword}
        />

        {title === "Senha" && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-full"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
