import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import './Carddetailpage.css';
import axios from 'axios';

const Detailbuysell = () => {
    const slug = useParams();
    const secondslug = slug['id'];

    const [Detailbuysellpage, setDetailbuysellpage] = useState([]);

    useEffect(()=>
    {
        axios.get(`http://192.168.1.70:8000/oldbooks/${secondslug}/`)
    .then((res)=>{
        console.log(res.data);
        setDetailbuysellpage(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])

    console.log(slug);

    return ( 
        <>
        <br/>
        <br/>
        <br/>
          <div className="bib"> 
         <div className="flo">
             <div className="flo">

                 <div className="mol">
                     <div className="glider">
                        <div className="dreview">
                            <img src={Detailbuysellpage.book_image} id="imagebox" alt=""/>

                          </div> 
                        </div>
                    </div>


                    <div className="mol">
                       <div className="content">
                         <h2>{Detailpage.book_name}</h2>
                         <p className="grice">Price:${Detailbuysellpage.book_price}</p>
                         {/* <a href="/Buy_now" className="btn">Buy Through insta</a> */}
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div>
         <p>{Detailbuysellpage.book_description}</p>
     </div>
        </>
     );
}
 
export default Detailbuysell;