import React from 'react';

// Main
import Main from '../../main';

// About
import {About} from '../../about';

// Contact
import {Contact} from '../../contact';

// Product
import {Product, Category as ProductCategory, Detail as ProductDetail} from '../../product';

// Cart
import {Cart, CartFinish, CartProcess} from '../../cart';

// News
import {News} from '../../news';

// Member
import {Member, Registry, Login, Logout, YourOrder, ChangePass} from '../../member';

// Component
import {PageNotFound} from '../components';

const Screen = ({screen, props}) => {

  // Modules
  const ModulePage = (screen, props) => {
    switch (screen) {
     /*MAIN*/
      case "Main": {
        return <Main {...props} />;
      }

      /*ABOUT*/
      case "About": {
        return <About {...props} />;
      }

      /*PRODUCT*/
      case "Product": {
        return <Product {...props} />;
      }
      case "ProductCategory": {
        return <ProductCategory {...props} />;
      }
     case "ProductDetail": {
        return <ProductDetail {...props} />;
      }

      /*NEWS*/
      case "News": {
        return <News {...props} />;
      }

      /*CONTACT*/
      case "Contact": {
        return <Contact {...props} />;
      }

      /*CART*/
      case "Cart": {
        return <Cart {...props} />;
      }
      case "CartProcess": {
        return <CartProcess {...props} />;
      }
      case "CartFinish": {
        return <CartFinish {...props} />;
      }

      /*MEMBER*/
      case "Member": {
        return <Member {...props} />;
      }
      case "Registry": {
        return <Registry {...props} />;
      }
      case "Login": {
        return <Login {...props} />;
      }
      case "Logout": {
        return <Logout {...props} />;
      }
      case "YourOrder": {
        return <YourOrder {...props} />;
      }
      case "ChangePass": {
        return <ChangePass {...props} />;
      }
      
      default:
        return <PageNotFound {...props} />;
    }
  }

  return (
    <>
      {ModulePage(screen, props)}
    </>
  );
};

export default Screen;
