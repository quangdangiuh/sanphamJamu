import React from 'react';

import RenderHTML from 'react-native-render-html';

import {Colors} from '../../../contants';
import {Display} from '../../../utils';

const renderersProps = {img: {enableExperimentalPercentWidth: true}};
const styleViewHTML = {
  div: {color: Colors.COLOR_333, fontSize: 12,},
  ul: {listStyleType: 'none', margin: 0, padding: 0,},
  li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
  span: {color:'red', },
  strong: {color: Colors.COLOR_333, fontSize: 12,},
  p: {color: Colors.COLOR_333, fontSize: 12, textAlign: 'left', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
  img: {maxWidth: (Display.width - 20), },
  a: {color: Colors.COLOR_0000FF, fontSize: 12,},
};

const classStyles = { 
  "vhitempay": {
    borderBottomWidth: .5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 10,
    marginBottom: 10,
  },
  "itemlast": {
    borderBottomWidth: 0,
    paddingBottom: 0,
    marginBottom: 0
  },
};

const dataRadioMethod = [
  {
    id: 1,
    label: 'Thanh toán khi nhận hàng (COD)',
    value: 'cod',
    description: <RenderHTML
                  contentWidth={Display.width}
                  source={{
                    html: '<p>Thanh toán bằng tiền mặt trực tiếp khi nhận hàng</p>',
                  }}
                  enableExperimentalMarginCollapsing={true}
                  enableExperimentalGhostLinesPrevention={true}
                  renderersProps={renderersProps}
                  tagsStyles={styleViewHTML}
                  classesStyles={classStyles}
                />
  },
  {
    id: 2,
    label: 'Thanh toán qua chuyển khoản',
    value: 'bank',
    description: <RenderHTML
                  contentWidth={Display.width}
                  source={{
                    html: '<div class="vhcontpayment"><div class="vhitempay active" id="vhtab1"><p>Vietcombank - Ngân hàng TMCP Ngoại Thương Việt Nam</p><p>Chi nhánh: Hồ Chí Minh</p><p>Số tài khoản: <strong style="font-size: 17px;">0000 0000 0000</strong></p><p>Chủ tài khoản: CÔNG TY TNHH THƯƠNG MẠI &amp; DỊCH VỤ THE JAMU MOMMY CENTER</p><p> Nội dung chuyển khoản:  <strong><a href="#">thanh toan [Số điện thoại]</a></strong></p></div><div class="vhitempay" id="vhtab2"><p>BIDV Ngân hàng TMCP Đầu tư và Phát triển Việt Nam </p><p>Chi nhánh: Hồ Chí Minh</p><p>Số tài khoản: <strong style="font-size: 17px;">0000 0000 0000</strong></p><p>Chủ tài khoản: CÔNG TY TNHH THƯƠNG MẠI &amp; DỊCH VỤ THE JAMU MOMMY CENTER</p><p> Nội dung chuyển khoản:  <strong><a href="#">thanh toan [Số điện thoại]</a></strong></p></div><div class="vhitempay itemlast" id="vhtab3"><p>Agribank - Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam</p><p>Chi nhánh: Hồ Chí Minh</p><p>Số tài khoản: <strong style="font-size: 17px;">0000 0000 0000</strong></p><p>Chủ tài khoản: CÔNG TY TNHH THƯƠNG MẠI &amp; DỊCH VỤ THE JAMU MOMMY CENTER</p><p> Nội dung chuyển khoản:  <strong><a href="#">thanh toan [Số điện thoại]</a></strong></p></div></div>',
                  }}
                  enableExperimentalMarginCollapsing={true}
                  enableExperimentalGhostLinesPrevention={true}
                  renderersProps={renderersProps}
                  tagsStyles={styleViewHTML}
                  classesStyles={classStyles}
                />
  }
];

export default {dataRadioMethod};
