const Title = () => (
    <a href="/">
      <img className="logo"
    src="https://images.template.net/wp-content/uploads/2017/01/30134618/Bar-Logos.jpg"
    alt="logo"/>
   </a>
       );


       const Header = () => {
        return (
            <div className="header">
                <Title/>
               
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