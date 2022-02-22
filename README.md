# React native image auto-height
This code will set the image height to auto based on the given width or vice versa.

# How to set image width to be 100% and height to be auto in react native?

## Example to auto scale image height:
```
import AuthoHeightImage from 'AuthoHeightImage';

<AuthoHeightImage
  url='http://placehold.jp/300x500.png'
  newWidth={300}
  styles={styles.image}
/>

```

## Example to auto scale image width:
```
import AuthoHeightImage from 'AuthoHeightImage';

<AuthoHeightImage
  url='http://placehold.jp/300x500.png'
  newHeight={300}
  styles={styles.image}
/>

```
