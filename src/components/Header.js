//  TITLE
export const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-5m46EtSJE4rE9UiJK3C_ezBqj5cA6T3Q3t67QcQzw&s"
      />
    </a>
  );
  
  // HEADER RENDERING TITLE
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

  export default Header;