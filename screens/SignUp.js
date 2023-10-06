import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput, Modal, FlatList, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import { render } from 'react-native-web'

const SignUp = ({ navigation }) => {
  //useState for password visibility
  const [showPassword, setshowPassword] = useState(false)
  //For Header
  function renderHeader() { 
    return ( 
      <TouchableOpacity
       style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 6,
        paddingHorizontal: SIZES.padding * 2,
       }}
       onPress={() => console.log('Sign Up')}
      >
        <Image 
           source={icons.back}
           resizeMode='contain'
           style={{
             width: 20,
             height: 20,
             tintColor: COLORS.white
           }}
        />
        <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Sign Up</Text>
      </TouchableOpacity>
    )
  }

  //For Logo
  function renderLogo() { 
    return ( 
      <View 
      style={{ 
        marginTop: SIZES.padding * 5,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        <Image 
         source={images.purpleLogo}
         resizeMode='contain'
         style={{
           width: '60%',
          height: '100%'
         }}
        />
      </View>
    )
  }

  //For Form
  function renderForm() { 
    return (
      <View style={{
      marginTop: SIZES.padding * 3,
      marginHorizontal: SIZES.padding * 3
    }}>
      {/* Full Name */}
      <View style={{
        marginTop: SIZES.padding * 3
      }}>
       <Text
         style={{color: COLORS.lightPurple, ...FONTS.body3}}
       >Full Name</Text>
      <TextInput 
         style={{ 
          marginVertical: SIZES.padding,
          borderBottomColor: COLORS.white,
          borderBottomWidth: 1,
          height: 40,
          color: COLORS.white,
          ...FONTS.body3
         }}
         placeholder='Enter Full Name'
         selectionColor={COLORS.white}
      />
      </View>

      {/* Phone Number */}
      <View
        style={{ 
          marginTop: SIZES.padding * 2
        }}
      >
        <Text
          style={{color: COLORS.lightPurple, ...FONTS.body3}}
        >Phone Number</Text>

       
       <View style={{ flexDirection: "row" }}>
         {/* Country Code */}
              <TouchableOpacity 
                style={{
                  width: 100,
                  height: 50,
                  marginHorizontal: 5,
                  borderBottomColor: COLORS.white,
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  ...FONTS.body2
                }}
                onPress={() => console.log('Country Code')}
              >
                <View style={{
                  justifyContent: 'center'
                }}>
                  <Image 
                    source={icons.down}
                    style={{
                      width: 10,
                      height: 10,
                      tintColor: COLORS.white
                    }}
                  />
                </View>
               <View style={{
                justifyContent: 'center',
                marginLeft: 5
               }}>
                 <Image 
                source={images.ngFlag}
                resizeMode='contain'
                style={{ 
                  width: 30,
                  height: 30,
                  
                }}
                />
               </View>

               <View style={{
               justifyContent: 'center',
               marginLeft: 5
               }}>
                  <Text style={{ color: COLORS.white, ...FONTS.body3 }}>+234</Text>
               </View>
              </TouchableOpacity>

              {/* Phone Number Input */}
              <TextInput 
                style={{
                  flex: 1,
                  marginVertical: SIZES.padding,
                  height: 40,
                  borderBottomColor: COLORS.white,
                  borderBottomWidth: 1,
                  color: COLORS.white,
                }}
                placeholder='Enter Phone Number'
                selectionColor={COLORS.white}
                placeholderTextColor={COLORS.white}
              />
       </View>
      </View>

      {/* Password */}
      <View 
       style={{
        marginTop: SIZES.padding * 2
       }}
      >
        <Text style={{ color: COLORS.lightPurple, ...FONTS.body3 }}>Password</Text>
        <TextInput 
          style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.white,
            ...FONTS.body3
          }}
          placeholder='Enter Password'
          selectionColor={COLORS.white}
          secureTextEntry={!showPassword}
          placeholderTextColor={COLORS.white}
        />
        <TouchableOpacity 
          style={{ 
            position: 'absolute',
            right: 0,
            bottom: 10,
            height: 30,
            width: 30
          }}
          onPress={() => setshowPassword(!showPassword)}
        >
          <Image 
            source={ showPassword ? icons.disable_eye : icons.eye}
            style={{
            height: 20,
            width: 20,
            tintColor: COLORS.white
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
    )
  }

  function renderButton() { 
    return (
      <View style={{
          margin: SIZES.padding * 3
      }}>
        <TouchableOpacity 
          style={{ 
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center'
           }}
           onPressIn={() => navigation.navigate('Home')}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null} // this is to make the keyboard not cover the input field
        style = {{ flex: 1, }}
    > 
  <LinearGradient 
    colors={[COLORS.darkBlack, COLORS.magneta]}
    style={{ flex: 1 }}
  >
    <ScrollView>
    
        {/* Header */}
        {renderHeader()}

        {/* Logo */}
        {renderLogo()}

        {/* Form */}
        {renderForm()}

        {/* Button */}
        {renderButton()}
      
  </ScrollView>
  </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({})