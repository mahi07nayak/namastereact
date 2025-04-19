


const Title = () => (
    <img className="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        alt="Logo" />
);

const Header = () => {
    return (
        <>
            <div className="Header1">
                <Title />
                <div className="nav-bar">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>cart</li>
                    </ul>
                </div>
            </div>
        </>

    );
}



export default Header;