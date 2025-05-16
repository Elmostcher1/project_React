import React  , {Suspense , lazy}  from 'react';
import {createBrowserRouter,createHashRouter,RouterProvider} from 'react-router-dom';
import toast , {Toaster} from "react-hot-toast"
import Swal from 'sweetalert2'
// links To Components---
const  Layout =  lazy( ()=> import ('./components/Layout/Layout'))
const  Home = lazy(()=>import ( './components/Home/Home'))
const  Contact = lazy(()=>import ( './components/Contact/Contact'))
const  Shop = lazy(()=>import ( './components/Shop/Shop'))
const  Cart = lazy(()=>import ( './components/Cart/Cart'))
const About  = lazy(()=>import( './components/About/About'))
 const SingleProducts = lazy(()=> import ( './components/Shop/SingleProducts/SingleProducts'))
 const  Wishlist = lazy(()=> import ( './components/wishlist/wishlist'))
import Child1 from './components/Home/Featured/Child1/Child1';
import Child2 from './components/Home/Featured/Child2/Child2';
import Child3 from './components/Home/Featured/Child3/Child3';
import Nested1 from './components/Shop/SingleProducts/nested_1/nested_1';
import Nested2 from './components/Shop/SingleProducts/nested_2/nested_2';
import Nested3 from './components/Shop/SingleProducts/nested_3/nested_3';
import LotieHandel from './LotieHandel';



function App() {

// https://dummyjson.com/products
// https://dummyjson.com/products/categories


const router = createHashRouter([
  {
    path : '' ,
    element : <Suspense fallback={<LotieHandel status={'main_pages'}/>}><Layout /> </Suspense> ,
    children : [
      {index : '' , element: <Suspense fallback={<LotieHandel status={'netsed_page'} />}><Home /></Suspense> , children:[
        {path : '' , element : <Child1   />} ,
        {path : 'Best' , element : <Child2   />} ,
        {path : 'featured' , element : <Child3   />} ,
      ] },
      
      {path : 'contact' , element: <Suspense fallback={<LotieHandel status={'netsed_page'} />}><Contact /></Suspense>} ,
      
      {path : 'about' , element: <Suspense fallback={<LotieHandel status={'netsed_page'} />}><About /></Suspense>} ,

      {path : 'cart' , element: <Suspense fallback={<LotieHandel status={'netsed_page'} />}><Cart /></Suspense>} ,

      
      {path : 'shop' , element: <Suspense fallback={<LotieHandel status={'netsed_page'} />}><Shop /></Suspense>} ,
      {path : 'wishlist' , element: <Suspense fallback={<LotieHandel status={'netsed_page'} />} > <Wishlist /></Suspense>} ,


      {path : '/singlepro/:id' , element: <Suspense fallback={<LotieHandel status={'netsed_page'} />}><SingleProducts /></Suspense> , children : [
         {path : '' , element: <Nested1  />} ,
         {path : 'nested_2' , element: <Nested2  />} ,
         {path : 'nested_3' , element: <Nested3  />} ,     
       ]} ,

    ] ,
    errorElement : <LotieHandel status={"error"} />
  }
])




 

  return (
    <main>
      <Toaster />
      <RouterProvider router={router} />
    </main>
  )
}

export default App
