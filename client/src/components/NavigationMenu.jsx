import {Link} from "react-router-dom";

const NavigationMenu=()=>{
 return   <>
   <div >
    {/* other elements */}

    <nav>
     <ul>
      <li>
       <Link to={`products`}>route products</Link>
      </li>
      <li>
       <Link to={`orders`}>route orders</Link>
      </li>
     </ul>
    </nav>

    {/* other elements */}
   </div>
  </>
 }
 export default  NavigationMenu;