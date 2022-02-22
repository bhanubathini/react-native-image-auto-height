import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  ActivityIndicator,
  ImageStyle,
  Dimensions,
} from "react-native";

interface Props {
  url: string;
  newWidth?: number;
  newHeight?: number;
  styles: ImageStyle;
}
/**
 * SETS THE IMAGE HEIGHT TO AUTO AS PER THE GIVEN WIDTH
 * OR SETS THE IMAGE WIDTH TO AUTO AS PER THE GIVEN HEIGHT
 * YOU SHOULD PROVIDE EITHER THE REQUIRED WIDTH OR HEIGHT OF THE IMAGE
 * EITHER OF THEM IS MANDATORY
 * @param param: {url: imageurl, newWidth: desired width of the image, newHeight: desired height of the image, styles: styles prop if you want to add any styles to the image }
 * @returns
 */
const AuthoHeightImage: React.FC<Props> = ({
  url,
  newWidth,
  newHeight,
  styles,
}) => {
  const windowWidth = Dimensions.get("window").width;

  //Setting the initial image height and width to device's width before image loads
  const [imageDimensions, setimageDimensions] = useState({
    width: windowWidth,
    height: windowWidth,
  });

  //Show loader before image loads
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Image.getSize(
      url,
      (imgWidth, imgHeight) => {
        let ratio = newWidth
          ? newWidth / imgWidth
          : newHeight
          ? newHeight / imgHeight
          : 1;

        setimageDimensions({
          width: newWidth ? newWidth : ratio * imgWidth,
          height: newHeight ? newHeight : ratio * imgHeight,
        });
        setLoading(false);
      },
      (error) => {
        console.error(`Couldn't get the image size: ${error.message}`);
      }
    );
    // return () => {

    // }
  }, [url, newWidth, newHeight]);
  return loading ? (
    <View
      style={{
        height: imageDimensions.height,
        width: imageDimensions.width,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="small" color="#0A93F5" />
    </View>
  ) : (
    <Image
      source={{ uri: url }}
      style={[
        styles,
        {
          height: imageDimensions.height,
          width: imageDimensions.width,
        },
      ]}
      resizeMode="cover"
    />
  );
};

export default AuthoHeightImage;
