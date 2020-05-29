import React, { ReactNode } from 'react'
import { ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import CloseButton from './CloseButton'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  search: {
    flexDirection: 'row'
},
})

interface HeaderModalProps {
  withTitle?: boolean,
  title?: string,
  titleStyle: StyleProp<TextStyle>,
  withFilter?: boolean
  withCloseButton?: boolean
  closeButtonImage?: ImageSourcePropType
  closeButtonStyle?: StyleProp<ViewStyle>
  closeButtonImageStyle?: StyleProp<ImageStyle>
  onClose(): void
  renderFilter(props: HeaderModalProps): ReactNode
}
export const HeaderModal = (props: HeaderModalProps) => {
  const {
    withTitle,
    title,
    titleStyle,
    withFilter,
    withCloseButton,
    closeButtonImage,
    closeButtonStyle,
    closeButtonImageStyle,
    onClose,
    renderFilter
  } = props
  return (
    <View style={styles.container}>
      {
        withTitle && <Text style={titleStyle}>{title}</Text>
      }
      {withCloseButton && <CloseButton
        image={closeButtonImage}
        style={closeButtonStyle}
        imageStyle={closeButtonImageStyle}
        onPress={onClose}
      />}
      <View style={styles.search}>
        {withFilter && renderFilter(props)}
      </View>
    </View>
  )
}

HeaderModal.defaultProps = {
  withCloseButton: false
}
