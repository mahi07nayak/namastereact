import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./component/Body";
/*
function AppLayout() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}
 */


 /*
   const AppLayout = () => (
       <>
           <Header />
           <Body />
           <Footer/>
       </>
   );
   */
const AppLayout = function () {
    return (
    <>
    
    <Header/>
   <Body/>
     </>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);