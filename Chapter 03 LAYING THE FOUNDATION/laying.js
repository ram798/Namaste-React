import React from "react";
import ReactDOM from "react-dom/client";
import { IconName } from "react-icons/fa";
import logo from './logo.png';



//Nested header element using React.createElement
const header = React.createElement("div", {className:"title"},
[
    React.createElement("h1", {key:"one",}, "This is Me"),
    React.createElement("h1", {key:"two",},"This is You"),
    React.createElement("h1", {key:"three",},"This is Us")
] );
const dev = ReactDOM.createRoot(document.getElementById("cool"));
dev.render(header);

// using JSX

const newHeader =(
     <div className="title">
     <h1 id="jsx1" key= "four"> "BE Curious" </h1>
     <h2 id="jsx2" key= "five"> "BE Patient" </h2>
     <h3 id="jsx3" key= "six"> "BE Consistent" </h3>
     </div>
);
const roops = ReactDOM.createRoot(document.getElementById("mane"));
roops.render(newHeader);

const Attribute = <h3 id="plus" key= "seven"> Hell BOY</h3>
const Rise = () =>(<h4> {key="eight"}, "Dont Overthink"</h4>);



//functional component

const FunctionalComponent = () =>{
    return(
        <div className="title">
            {newHeader}
            <h2>Namaste React BHAI</h2>
            <Attribute/>
            <Rise/>
        </div>
    );
};
const roar = ReactDOM.createRoot(document.getElementById("rope"));
roar.render(<FunctionalComponent/>);

//search -bar
const SearchComponent = () => {
    return (
      <input
        className="search"
        key="search-bar"
        placeholder={"search anything"}
      />
    );
  };
  

  const MainComponent = () => {
    return (
      <div className="main">
        <img src={logo} alt="logo" width="40px" height="40px" />
        <SearchComponent />
        <IconName size="2em" />
      </div>
    );
  };
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<MainComponent />);