const Data = [
  /*Trang chủ*/
  {
    name: "Home",
    title: "Trang chủ",
    iconName: "home",
    iconType: "AntIcon",
    screen:  "Main",
    display: 1,
    children: [],
  },
  /*Giới thiệu*/
  {
    name: "About",
    title: "Giới thiệu",
    iconName: "head-question-outline",
    iconType: "MaterialIcon",
    screen:  "About",
    display: 1,
    children: [],
  },
  /*Sản phẩm*/
  {
    name: "Product",
    title: "Sản phẩm",
    iconName: "store-settings-outline",
    iconType: "MaterialIcon",
    screen:  "Product",
    display: 1,
    children: [
      {
        name: "ProductCategory",
        title: "Danh mục sản phẩm",
        iconName: "",
        iconType: "",
        screen:  "ProductCategory",
        display: 0,
      },
      {
        name: "ProductDetail",
        title: "Chi tiết sản phẩm",
        iconName: "",
        iconType: "",
        screen:  "ProductDetail",
        display: 0,
      }
    ]
  },
  /*Tin tức*/
  {
    name: "News",
    title: "Tin tức",
    iconName: "newspaper-variant-multiple",
    iconType: "MaterialIcon",
    screen:  "News",
    display: 1,
    children: [],
  },
  /*Liên hệ*/
  {
    name: "Contact",
    title: "Liên hệ",
    iconName: "contacts",
    iconType: "AntIcon",
    screen:  "Contact",
    display: 1,
    children: [],
  },
  /*Giỏ hàng*/
  {
    name: "Cart",
    title: "Giỏ hàng",
    iconName: "shopping-cart",
    iconType: "FeaIcon",
    screen:  "Cart",
    display: 0,
    children: [
      {
        name: "CartProcess",
        title: "Đang xử lý giỏ hàng",
        iconName: "",
        iconType: "",
        screen:  "CartProcess",
        display: 0,
        children: [],
      },
      {
        name: "CartFinish",
        title: "Hoàn tất giỏ hàng",
        iconName: "",
        iconType: "",
        screen:  "CartFinish",
        display: 0,
        children: [],
      }
    ],
  },
  /*Thành viên*/
  {
    name: "Member",
    title: "Thành viên",
    iconName: "",
    iconType: "",
    screen:  "Member",
    display: 0,
    children: [
      {
        name: "Registry",
        title: "Đăng ký",
        iconName: "",
        iconType: "",
        screen:  "Registry",
        display: 0,
        children: [],
      },
      {
        name: "Login",
        title: "Đăng nhập",
        iconName: "",
        iconType: "",
        screen:  "Login",
        display: 0,
        children: [],
      },
      {
        name: "Logout",
        title: "Đăng xuất",
        iconName: "",
        iconType: "",
        screen:  "Logout",
        display: 0,
        children: [],
      },
      {
        name: "YourOrder",
        title: "Đơn hàng",
        iconName: "",
        iconType: "",
        screen:  "YourOrder",
        display: 0,
        children: [],
      },
      {
        name: "ChangePass",
        title: "Đổi mật khẩu",
        iconName: "",
        iconType: "",
        screen:  "ChangePass",
        display: 0,
        children: [],
      }
    ],
  },
];

let Routes = [];
{Data.map((item) => {
  Routes.push(item);

  let children = item.children;
  if (children.length) {
    {children.map((itemC) => {
      Routes.push(itemC);
    })}
  }
})}

export default Routes;