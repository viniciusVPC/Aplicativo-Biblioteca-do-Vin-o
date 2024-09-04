import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image 
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color}}>
{name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#EBD9B4',
      tabBarInactiveTintColor: '#f5f2eb',
      tabBarStyle: {
        backgroundColor: '#638889',
        borderTopWidth: 1,
        borderTopColor: '#232533',
        height: 70
      }
    }}
    >
      <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon 
          icon={icons.home}
          color={color}
          name="Home"
          focused={focused}
          />
        )
      }}
      />
      <Tabs.Screen
      name="view-library"
      options={{
        title: 'Biblioteca',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon 
          icon={icons.bookmark}
          color={color}
          name="Biblioteca"
          focused={focused}
          />
        )
      }}
      />
      <Tabs.Screen
      name="create"
      options={{
        title: 'Criar',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon 
          icon={icons.plus}
          color={color}
          name="Criar"
          focused={focused}
          />
        )
      }}
      />
      <Tabs.Screen
      name="profile"
      options={{
        title: 'Perfil',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon 
          icon={icons.profile}
          color={color}
          name="Perfil"
          focused={focused}
          />
        )
      }}
      />
    </Tabs>
    </>
  )
}

export default TabsLayout