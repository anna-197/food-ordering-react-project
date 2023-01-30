import logo from "./logo.svg";
import "./App.css";

import Header, {Title} from "./components/Header"
import Footer from "./components/Footer";
import Body from "./components/Body"

/**

      Header

         - Logo(Title)

         - Nav Items(Right Side)

         - Cart

      Body 

         - Search bar

         - RestrauntList

           - RestaurantCard (many cards)

               - Image

               - Name

               - Rating

               - Cusines

      Footer

       - links

       - Copyright

     

     */

//  RENDERING HEADER, BODY AND FOOTER
function App() {
  return (
    <>
      <Header />

      <Body />

      <Footer />
    </>
  );
}

export default App;
