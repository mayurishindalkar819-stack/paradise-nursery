import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function Navbar() {
 const count=useSelector(s=>s.cart.items.reduce((sum,item)=>sum+item.quantity,0));
 return <nav className="navbar">
   <Link className="brand" to="/">🌿 Paradise Nursery</Link>
   <div className="navlinks"><Link to="/">Home</Link><Link to="/plants">Plants</Link><Link className="cart-link" to="/cart">🛒 Cart ({count})</Link></div>
 </nav>;
}

function CartItem() {
 const dispatch=useDispatch();
 const items=useSelector(s=>s.cart.items);
 const totalItems=items.reduce((sum,item)=>sum+item.quantity,0);
 const totalCost=items.reduce((sum,item)=>sum+item.price*item.quantity,0);

 const checkout=()=>alert("Coming Soon!");

 return <>
  <Navbar/>
  <main className="cart-page">
   <h1>Shopping Cart</h1>
   <div className="cart-summary">
    <strong>Total Plants: {totalItems}</strong>
    <strong>Total Cost: ${totalCost.toFixed(2)}</strong>
   </div>
   {items.length===0 ? <div className="empty">
      <h2>Your cart is empty</h2><Link to="/plants"><button className="btn">Continue Shopping</button></Link>
    </div> :
    <>
     {items.map(item=><article className="cart-row" key={item.id}>
       <img className="cart-img" src={item.image} alt={item.name}/>
       <div><h2>{item.name}</h2><p>Unit Price: ${item.price.toFixed(2)}</p>
         <p>Total: ${(item.price*item.quantity).toFixed(2)}</p>
         <div className="qty">
          <button aria-label="decrease" onClick={()=>dispatch(updateQuantity({id:item.id,quantity:item.quantity-1}))}>−</button>
          <strong>{item.quantity}</strong>
          <button aria-label="increase" onClick={()=>dispatch(updateQuantity({id:item.id,quantity:item.quantity+1}))}>+</button>
         </div>
       </div>
       <button className="delete" onClick={()=>dispatch(removeItem(item.id))}>Delete</button>
     </article>)}
     <div className="cart-actions">
      <Link to="/plants"><button className="btn secondary">Continue Shopping</button></Link>
      <button className="btn" onClick={checkout}>Checkout</button>
     </div>
    </>}
  </main>
 </>;
}
export default CartItem;
