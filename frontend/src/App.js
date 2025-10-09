//inside app js ,you can just pick what to render while learning 

import React from "react";//import product app from "./productApp  
// uncomment this if yoy want to show product 
// 
import AuthApp from "./authApp"; //for now ,show signup and login

function App() {
    return (
        <div>
            <AuthApp />
            {/* <ProductApp /> */}              

        </div>
    );
}
export default App;