import React, {FC} from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import ViewIcon from '../assets/viewIcon';

interface ListImagesProps {
  images: Array<{
    id: string;
    views: number;
    largeImageURL: string;
  }>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setItem: any;
}

const ListImages: FC<ListImagesProps> = ({images, setVisible, setItem}) => {
  const handleClick = (image: {
    id: string;
    views: number;
    largeImageURL: string;
  }) => {
    setVisible(true);
    setItem(image);
  };

  return (
    <FlatList
      data={images}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.imageView}
            activeOpacity={1}
            onPress={() => handleClick(item)}>
            <View style={styles.btnStyle}>
              <ViewIcon />
              <Text style={{marginStart: 5, color: '#fff', fontWeight: '700'}}>
                {item?.views}
              </Text>
            </View>
            <Image style={styles.medium} source={{uri: item?.largeImageURL}} />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ListImages;

const styles = StyleSheet.create({
  medium: {
    flex: 1,
    height: 150,
    margin: 2,
  },
  imageView: {
    flex: 1,
    position: 'relative',
  },
  btnStyle: {
    width: 80,
    height: 30,
    bottom: 2,
    left: 2,
    position: 'absolute',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    zIndex: 1,
    flexDirection: 'row',
  },
});