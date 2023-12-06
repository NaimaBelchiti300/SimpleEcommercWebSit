import React, { useState } from 'react'




import hoodi1 from './images/hoodi1.jpeg'
import hoodi2 from './images/hoodi2.jpeg'
import hoodi3 from './images/hoodi3.jpeg'
import tshirt1 from './images/tshirt1.jpg'
import tshirt2 from './images/tshirt2.jpeg'
import tshirt3 from './images/tshirt3.jpeg'
import bleuse1 from './images/bleuse1.jpg'
import bleuse2 from './images/bleuse2.jpg'
import manteau1 from'./images/manteau1.jpg'
import manteau2 from'./images/manteau2.jpeg'
import manteau3 from'./images/manteau3.jpg'
import tshirthomme from './images/tshirthomme1.jpg'
import jube from './images/jube rouge.jpg'
import manche from './images/manche longues.jpeg'
import vest from './images/veste solide.webp'
import robe from './images/robe.jpeg'
import blousejub from './images/blousejube.jpg'
import manche2 from './images/manchelongue2.jpeg'


export default function Store(){
   
    const Products=[
        {
            id:0,
            title:"jube rouge",
            price:"240Dh",
            category:"children",
            img:jube
        },
        {
            id:1,
            title:"manche longue",
            price:"230dh",
            category:"children",
            img:manche
        },


        {
            id:2,
            title:"Hoodie",
            price:"240Dh",
            category:"women",
            img:hoodi1
        }, {
            id:3,
            title:"T-shirt",
            price:"134dh",
            category:"women",
            img:tshirt1
        }, {
            id:4,
            title:"sweatShirt",
            price:"240Dh",
            category:"women",
            img:hoodi2
        },
        {
            id:5,
            title:"vest enfant",
            price:"240Dh",
            category:"children",
            img:vest
        },
        {
            id:6,
            title:"petite robe ",
            price:"120dh",
            category:"children",
            img:robe
        },
        {
            id:7,
            title:"T-shirt",
            price:"240Dh",
            category:"women",
            img:tshirt2
        },
        {
            id:8,
            title:"Manteau",
            price:"240Dh",
            category:"men",
            img:manteau2
        },
        {
            id:9,
            title:"Manteau",
            price:"300dh",
            category:"men",
            img:manteau3
        },

        {
            id:10,
            title:"Simple Bleuse",
            price:"99dh",
            category:"men",
            img:bleuse1
        },
        {
            id:11,
            title:"manche longue ",
            price:"240Dh",
            category:"children",
            img:manche2
        },
        {
            id:12,
            title:"Bleuse men",
            price:"240Dh",
            category:"men",
            img:bleuse2
        },
        {
            id:13,
            title:"Manteau",
            price:"150dh",
            category:"men",
            img:manteau1
        },
       
        {
            id:14,
            title:"T-shirt",
            price:"100dh",
            category:"men",
            img:tshirthomme
        }

        , {
            id:15,
            title:"T-shirt",
            price:"240Dh",
            category:"women",
            img:tshirt3
        },
        {
            id:16,
            title:"blouse et jupe",
            price:"240Dh",
            category:"children",
            img:blousejub
        }
        , {
            id:17,
            title:"Simple SweatShirt",
            price:"240Dh",
            category:"women",
            img:hoodi3
        }
        
    ]
    const [produit,setproduit]=useState(Products)
    const [search,setsearch]=useState("")
    const [cart,setcart]=useState([])
    const filterresult=(CategoryName)=>{
      const result=Products.filter((cat)=>{
         return cat.category==CategoryName
      })
      setproduit(result)
   
  }      

  const AddCart = (productid) => {
    const checkProduct = cart.find((p) => p.id === productid);
    const product = produit.find((p) => p.id === productid);
    
    if (checkProduct) {
      setcart((prev) => {
        return prev.map((produit) => {
          if (produit.id === productid) {
            return { ...produit, quantite: produit.quantite + 1 };
          }
          return produit;
        });
      });
      return;
    }
  
    // If the product is not in the cart, set the quantity to 1
    product.quantite = 1;
  
    setcart((prev) => {
      return [...prev, product];
    });
  };
  
  

  

  const Total = cart.reduce((total, item) => {
    return total + parseInt(item.price) * parseInt(item.quantite);
    
  }, 0);
const deletproduct=(productid)=>{
const removeproduct=cart.filter((p)=>{
  return p.id!=productid
})
setcart(removeproduct)
}
 const increment=(idproduct)=>{
setcart((prev)=>{
  return prev.map((p)=>{
    if(p.id===idproduct){
      return {...p,quantite:p.quantite+1}
    }
    return p
  })
})

}
const decrement=(idproduct)=>{
setcart((prev)=>{
  return prev.map((p)=>{
    if(p.id===idproduct){
      return {...p,quantite:p.quantite===0?0:p.quantite-1}
    }
    return p
  })
})
}
    return(
      
        <>
      
     
       <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" >Ecom NB</a>
   
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" >Shopping</a>
              </li>
            
            </ul>
            <div className="d-flex" role="search text-white">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link  text-white " > Shopping-Cart
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="40" viewBox="0 0 576 512">
      
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
        </svg>
        <span>({cart.length})</span>
        </a>
              </li>
            
            </ul>
              
            </div>
          </div>
        </div>
      </nav>

      <div className='row '>
        <div className='col-md-3 ' style={{backgroundColor:" rgb(87, 87, 87)"}} >
         <form className='container-fluid form-group ' onSubmit={(e)=>e.preventDefault()}>
         <input
  type='text'
  className="form-control"
  value={search}
  onChange={(e) => {
    const searchValue = e.target.value;
    setsearch(searchValue);
    const filteredProducts = Products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setproduit(filteredProducts);
  }}
  placeholder='Search By Product Name'
  style={{marginTop:"200px", marginBottom:"30px"}}
/>

         
        <input type='submit' onClick={()=>filterresult('women')} className="form-control" value="Women" style={{width:"70%",backgroundColor:"pink",marginBottom:"30px"}}/>
        <input type='submit'onClick={()=>filterresult('men')} className="form-control " value="Men" style={{width:"70%",backgroundColor:"gray",marginBottom:"30px"}}/>
        <input type='submit' onClick={()=>filterresult('children')}className="form-control bg-info" value="Children" style={{width:"70%", marginBottom:"30px"}}/>
        <input type='submit' onClick={()=>setproduit(Products)} className="form-control bg-warning" value="All" style={{width:"70%", marginBottom:"30px"}}/>

       
         </form>
           
        </div>
        <div className='col-md-9 '>
            <div className='text text-center' style={{marginTop:"20px"}}>
            <h2 >Online Shop</h2>
           <p>Products</p>
            </div>
         

            <div className='row'>
              {produit.map((p) => (
                <div key={p.id} className="col-lg-4 col-md-6 mb-4">
                  <div className='card'>
                    <img src={p.img} width="100%" height="100%"  className='card-img-top' alt='Product' />
                    <div className='card-body'>
                      <h4 className='card-title text-success'>{p.title}</h4>
                      <h5 className='card-title '>Our Products is a vibrant and stylish attire designed. Crafted with high-quality fabric</h5>
                      <p className='card-text text-danger'>{p.category + ' ' + p.price}</p>
                      <a className='btn btn-primary' onClick={()=>AddCart(p.id)}>
                        Add To Cart
                      </a>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>













           




         
        </div>
       
      </div>















      <div className="container">
  <h1 className="text-center mt-4">
    Your Cart  
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="40" viewBox="0 0 576 512">
    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>

    </svg>
  </h1>
  {cart.length === 0 ? (
    <h3 className="text-center text-info">No Product In Your Cart !!!</h3>
  ) : (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove Products</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((p) => (
            <tr key={p.id}>
              <td><img src={p.img} width="100" height="100" alt={p.title} /></td>
              <td>{p.price}</td>
              <td>
                <span style={{ fontSize: "20px" }}>{p.quantite}</span>
                <button onClick={() => increment(p.id)} className="btn btn-secondary mx-1">+</button>
                <button onClick={() => decrement(p.id)} className="btn btn-secondary">-</button>
              </td>
              <td>
                <button onClick={() => deletproduct(p.id)} className="btn btn-danger">Delete Product 🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-center">Total Price: {Total+"DH"}</h1>
    </div>
  )}
</div>







      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
         
        <h5  className=' col-md-12 text-white text-center' >Made with ❤ By Naima Belchiti</h5>
          <div className="collapse navbar-collapse" >
            
           
          </div>
        </div>
      </nav>

    
  
   
      
     
        </>
    )
}

