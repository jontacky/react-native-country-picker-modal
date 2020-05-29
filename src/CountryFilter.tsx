import React from 'react'
import { Platform, StyleSheet, TextInput, TextInputProps } from 'react-native'
import { useTheme } from './CountryTheme'

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#14141414',
    padding: 10,
    ...Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOffset: 0
      }
    })
  }
})

export type CountryFilterProps = TextInputProps

export const CountryFilter = (props: CountryFilterProps) => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor
  } = useTheme()
  return (
    <TextInput
      testID="text-input-country-filter"
      autoCorrect={false}
      placeholderTextColor={filterPlaceholderTextColor}
      style={[
        styles.input,
        { fontFamily, fontSize, color: onBackgroundTextColor }
      ]}
      {...props}
    />
  )
}

CountryFilter.defaultProps = {
  autoFocus: false,
  placeholder: 'Search for Country'
}
