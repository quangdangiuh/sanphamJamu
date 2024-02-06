import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import _ from "lodash";
import RenderHTML from 'react-native-render-html';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';
import {MenuTab} from '../../global/components';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

import {dataMenuTab, dataDetail} from './data';
import {BannerTop} from './components';

const About = ({route, navigation}) => {
  const scrollRef = useRef(null);

  const [title, setTitle] = useState("");
  const { id } = route.params ?? {};

  useEffect(() => {
    let _obj = {}
    let _pos = _.findIndex(dataMenuTab, function(o) { return o.id == id; });
    if(_pos >= 0){
      _obj = _.find(dataMenuTab, function(o) { return o.id == id; });
    }else{
      _obj = _.find(dataMenuTab, function(o) { return o.id == 1; });
    }
    setTitle(_obj.title);
  }, [id]);

  const renderersProps = {img: {enableExperimentalPercentWidth: true}};
  const html_content = {
      html: `${dataDetail[0].content}`,
  };

  return (
    <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>
      <Header navigation={navigation} />

      <ScrollView 
        ref={scrollRef}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'handled'}
      >
        {/*Banner Top*/}
        <BannerTop />

        <View style={styles.vwInfoContainer}>
          <MenuTab
            navigation={navigation}
            data={dataMenuTab}
            title={title}
            styleContainer={{marginTop: 0, marginBottom: 15,}}
          />

          <View style={styles.vwInfoContent}>
            <RenderHTML
              contentWidth={Display.width - 20}
              source={html_content}
              enableExperimentalMarginCollapsing={true}
              enableExperimentalGhostLinesPrevention={true}
              // renderersProps={renderersProps}
              tagsStyles={{
                h1: {marginTop: 0, paddingTop: 0, fontSize: 28,},
                ul: {listStyleType: 'none', margin: 0, padding: 0,},
                li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                span: {color:'red', },
                p: {color: Colors.COLOR_333, fontSize: 13, textAlign: 'left', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
                img: {maxWidth: (Display.width - 20), }
              }}
            />
          </View>
        </View>

        {/*Footer*/}
        <Footer navigation={navigation} />
      </ScrollView>

      {/*Sidebar*/}
      <ContactSidebar scrollRef={scrollRef} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  vwInfoContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  vwInfoContent: {
    // backgroundColor: Colors.DEFAULT_GREEN
  },
});

export default About;
