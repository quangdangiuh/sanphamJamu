import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import { ImageGallery } from '@georstat/react-native-image-gallery';

import {Colors, Fonts} from '../../../../contants';
import {Display} from '../../../../utils';

const GalleryReview = ({idGallery, pos, handleShowGallery}) => {
  const imagesGallery = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1630149462161-2fe69fa964ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1630149462177-35a341b42fcf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1630042166175-0ebcd586fab9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1629994562870-75d504fc02a1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1630157051334-e302a5fe8947?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1630149462161-2fe69fa964ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1630149462177-35a341b42fcf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1630042166175-0ebcd586fab9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1629994562870-75d504fc02a1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1630157051334-e302a5fe8947?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      thumbUrl: '',
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => {
    handleShowGallery(false, idGallery);
    setIsOpen(false);
  };

  const renderHeaderComponent = (image: ImageObject, currentIndex: number) => {
    return (
      <View style={styles.vwrapper}>
        {/*<Text style={styles.text}>Image Number {currentIndex}</Text>*/}
        <TouchableOpacity
          activeOpacity={.8}
          onPress={closeGallery}
          style={styles.TouchableOpacity}
        >
          <AntIcon name="closecircle" style={styles.iconClose} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFooterComponent = (image: ImageObject, currentIndex: number) => {
    return (
      <View style={styles.vwrapper}>
        <Text style={styles.text}>
          {currentIndex + 1}/{imagesGallery.length}
        </Text>
      </View>
    );
  };

  const renderCustomImage = (image: ImageObject) => {
    return (
      <View style={styles.vwImageWapper}>
        <Image
          resizeMode="cover"
          source={{
            uri: image.url,
          }}
          style={styles.imageBig}
          // thumbnailSource="https://via.placeholder.com/350x150"
        />
      </View>
    );
  };

  return (
    <View>
      {/*<TouchableOpacity activeOpacity={.8} onPress={openGallery}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>*/}
    
      {/*Chỉnh màu nền vào thư viện chỉnh*/}
      <ImageGallery
        initialIndex={pos}
        hideThumbs={false}
        thumbColor={Colors.DEFAULT_GREEN}
        close={closeGallery}
        isOpen={isOpen}
        images={imagesGallery}
        renderCustomImage={renderCustomImage}
        renderHeaderComponent={renderHeaderComponent}
        // renderFooterComponent={renderFooterComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vwrapper: {
    alignItems: 'center',
    // backgroundColor: 'red',
    flexDirection: 'row',
    height: 52,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    color: 'white',
  },
  vwImageWapper: {
    alignItems: 'center',
    borderRadius: 11,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24,
    width: '100%',
  },
  imageBig: {
    width: Display.width - 20,
    height: Display.width - 20,
    borderRadius: 250,
    borderWidth: 1,
    borderColor: Colors.COLOR_WHITE,
    overflow: 'hidden',
  },
  iconClose: {
    fontSize: 30,
    color: Colors.COLOR_WHITE,
  }
});

export default GalleryReview;
