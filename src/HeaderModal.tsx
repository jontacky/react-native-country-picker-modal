import React, { ReactNode } from 'react'
import { ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import Icon from "react-native-dynamic-vector-icons"
import CloseButton from './CloseButton'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  }, 
  search: {
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#14141414",
    borderRadius: 10,
    paddingLeft: 10
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
        {withFilter &&
        <>
        <Icon name="search" color="#14141414" type="MaterialCommunityIcon"/>
         {renderFilter(props)}
         </>
        }
      </View>
    </View>
  )
}

HeaderModal.defaultProps = {
  withCloseButton: false
}
