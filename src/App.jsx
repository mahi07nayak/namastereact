import React from "react";
import ReactDOM from "react-dom/client";
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
    return 
    <>
    <Header />
    <Body />
    <Footer />
    </>;
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);