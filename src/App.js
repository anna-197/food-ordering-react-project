import logo from "./logo.svg";
import "./App.css";

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

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>

          <li>About</li>

          <li>Contact</li>

          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />

      {/* <Body /> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
