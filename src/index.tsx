import React, { ReactNode } from 'react'
import { FlatListProps, ModalProps, StyleProp, TextStyle, ViewStyle } from 'react-native'
import { CountryProvider, DEFAULT_COUNTRY_CONTEXT } from './CountryContext'
import { CountryFilterProps } from './CountryFilter'
import { CountryPicker } from './CountryPicker'
import { DEFAULT_THEME, Theme, ThemeProvider } from './CountryTheme'
import { FlagButtonProps } from './FlagButton'
import { Country, CountryCode, Region, Subregion, TranslationLanguageCode } from './types'

interface Props {
  allowFontScaling?: boolean
  countryCode: CountryCode
  region?: Region
  subregion?: Subregion
  countryCodes?: CountryCode[]
  excludeCountries?: CountryCode[]
  preferredCountries?: CountryCode[]
  theme?: Theme
  translation?: TranslationLanguageCode
  modalProps?: ModalProps
  filterProps?: CountryFilterProps
  flatListProps?: FlatListProps<Country>
  placeholder?: string
  withAlphaFilter?: boolean
  withCallingCode?: boolean
  withCurrency?: boolean
  withEmoji?: boolean
  withCountryNameButton?: boolean
  withCurrencyButton?: boolean
  withCallingCodeButton?: boolean
  withCloseButton?: boolean
  withFlagButton?: boolean
  withFilter?: boolean
  withFlag?: boolean
  withModal?: boolean
  withTitle?: boolean,
  title?: string,
  titleStyle?: StyleProp<TextStyle>,
  disableNativeModal?: boolean
  visible?: boolean
  containerButtonStyle?: StyleProp<ViewStyle>
  renderFlagButton?(props: FlagButtonProps): ReactNode
  renderCountryFilter?(props: CountryFilterProps): ReactNode
  onSelect(country: Country): void
  onOpen?(): void
  onClose?(): void
}

const Main = ({ theme, translation, ...props }: Props) => {
  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, ...theme }}>
      <CountryProvider value={{ ...DEFAULT_COUNTRY_CONTEXT, translation }}>
        <CountryPicker {...props} />
      </CountryProvider>
    </ThemeProvider>
  )
}

Main.defaultProps = {
  onSelect: () => {},
  withEmoji: true,
}

export default Main
export { CountryFilter } from './CountryFilter'
export { CountryList } from './CountryList'
export { CountryModal } from './CountryModal'
export { CountryModalProvider } from './CountryModalProvider'
export { getCountriesAsync as getAllCountries, getCountryCallingCodeAsync as getCallingCode } from './CountryService'
export { DARK_THEME, DEFAULT_THEME } from './CountryTheme'
export { Flag } from './Flag'
export { FlagButton } from './FlagButton'
export { HeaderModal } from './HeaderModal'
export * from './types'

