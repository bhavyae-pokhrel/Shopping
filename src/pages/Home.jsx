// import { useState, useEffect } from "react";
// import Spinner from "../components/Spinner";
// import Product from "../components/Product";

// const Home = () => {
//   const API_URL = "https://fakestoreapi.com/products";
//   const [loading, setLoading] = useState(false);
//   const [posts, setPosts] = useState([]);

//   async function fetchProductData() {
//     setLoading(true);

//     try{
//       const res = await fetch(API_URL);
//       const data = await res.json();

//       setPosts(data);
//     }
//     catch(error) {
//       console.log("Error aagya ji");
//       setPosts([]);
//     }
//     setLoading(false);
//   }

//   useEffect( () => {
//     fetchProductData();
//   },[])

//   return (
//     <div>
//       {
//         loading ? <Spinner />  :
//         posts.length > 0 ? 
//         (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
//           {
//             posts.map( (post) => (
//             <Product key = {post.id} post={post}/>
//           ) )
//           }
//         </div>) :
//         <div className="flex justify-center items-center">
//           <p>No Data Found</p>
//         </div> 
//       }
//     </div>
//   );
// };

// export default Home;









// import { useState, useEffect } from "react";
// import Spinner from "../components/Spinner";
// import Product from "../components/Product";


// const Home = () => {
//   const API_URL = "https://fakestoreapi.com/products";
//   const [loading, setLoading] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [search,setSearch]=useState("")

//   async function fetchProductData() {
//     setLoading(true);

//     try{
//       const res = await fetch(API_URL);
//       const data = await res.json();

//       setPosts(data);
//     }
//     catch(error) {
//       console.log("Error aagya ji");
//       setPosts([]);
//     }
//     setLoading(false);
//   }

//   useEffect( () => {
//     fetchProductData();
//   },[])

//   return (
//     // <div>
//     //   {
//     //     loading ? <Spinner />  :
       
//     //     posts.length > 0 ? 
//     //         (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
//     //         {
//     //            posts.map( (post) => (
//     //            <Product key = {post.id} post={post}/>
//     //            ))
//     //         }
//     //         </div>) :
//     //     <div className="flex justify-center items-center">
//     //       <p>No Data Found</p>
//     //     </div> 
//     //   }
        
//     // </div>
    








//     <div>
//     {
//       loading ? <Spinner />  :
     
//       posts.length > 0 ? 
//           (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
//         {
//             posts.
//                filter((post)=>(
//                 if(setSearch.length<2){
//                     return post;
//                 }
                  
//                 else if (post.title.toLowerCase().includes(setSearch.toLowerCase()) ){
//                     return post;
//                 }
               
//             )).map( (post) => (
//              <Product key = {post.id} post={post}/>
//             ))
//         }
//           </div>) :
//       <div className="flex justify-center items-center">
//         <p>No Data Found</p>
//       </div> 
//     }
      
//   </div>
//   );
// };

// export default Home




import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log("Error occurred:", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            <center>
                <input type="text" style={{color:"black"}} className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="Search for clothing..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                
            </center>
          {posts
            .filter((post) => {
            
              if (search.length < 2) {
                return post;
              }
             
              return post.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((post) => (
              <Product key={post.id} post={post} />
            ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
