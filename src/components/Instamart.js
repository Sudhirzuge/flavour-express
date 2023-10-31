// import { useState } from "react";


// const Section = ({title, description}) => {
//     const [isVisible, setIsVisible] = useState(false);
//     return(
//         <div>
//              <h2>{title}</h2>
//              {isVisible?(
//                     <button onClick={()=>setIsVisible(false)} >
//                         show 
//                     </button>
//                 ):(
//                     <button onClick={()=>setIsVisible(true)}>
//                         Hide
//                     </button>
//                 )
//              }
//              {isVisible && <p>{description}</p>}
//         </div>
//     );
// };



// const Instamart = () => {
//   return(
//         <div>
//             <h1> Instamart </h1>
//                 <Section className="sectionofinstamart" title={"first Acordion"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
//                 <Section className="sectionofinstamart" title={"second Acordion"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
//                 <Section className="sectionofinstamart" title={"third Acordion"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
//         </div>
//     )
// };

// export default Instamart;