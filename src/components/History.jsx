import React from "react";
import AppNav from "./Nav";
import Sidebar from "./Sidebar";

 function History () {
     return (
         <div>
             <AppNav/>
             <Sidebar/>
            <h1>History</h1>
            <p>This is the user's history.</p>
         </div>
        
     );
 }

 export default History;