import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
 {id:1,name:"Snake Plant",price:18,category:"Air Purifying",image:"https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=600&q=80"},
 {id:2,name:"Peace Lily",price:22,category:"Air Purifying",image:"https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"},
 {id:3,name:"Spider Plant",price:15,category:"Air Purifying",image:"https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80"},
 {id:4,name:"Boston Fern",price:20,category:"Air Purifying",image:"https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80"},
 {id:5,name:"Areca Palm",price:28,category:"Air Purifying",image:"https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80"},
 {id:6,name:"Rubber Plant",price:25,category:"Air Purifying",image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"},
 {id:7,name:"Aloe Vera",price:14,category:"Succulents",image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"},
 {id:8,name:"Jade Plant",price:16,category:"Succulents",image:"https://images.unsplash.com/photo-1566916631009-5a5a6b6c6d9b?auto=format&fit=crop&w=600&q=80"},
 {id:9,name:"Echeveria",price:13,category:"Succulents",image:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"},
 {id:10,name:"Haworthia",price:17,category:"Succulents",image:"https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80"},
 {id:11,name:"Zebra Haworthia",price:19,category:"Succulents",image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"},
 {id:12,name:"String of Pearls",price:24,category:"Succulents",image:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"},
 {id:13,name:"Monstera",price:30,category:"Tropical Plants",image:"https://images.unsplash.com/photo-1614594574481-4f5f5b7d8b1c?auto=format&fit=crop&w=600&q=80"},
 {id:14,name:"Calathea",price:26,category:"Tropical Plants",image:"https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"},
 {id:15,name:"Bird of Paradise",price:35,category:"Tropical Plants",image:"https://images.unsplash.com/photo-1532105111962-b9b4e3d8a2b4?auto=format&fit=crop&w=600&q=80"},
 {id:16,name:"Philodendron",price:27,category:"Tropical Plants",image:"https://images.unsplash.com/photo-1545165375-3f6b040f6f4b?auto=format&fit=crop&w=600&q=80"},
 {id:17,name:"ZZ Plant",price:21,category:"Tropical Plants",image:"https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80"},
 {id:18,name:"Chinese Evergreen",price:23,category:"Tropical Plants",image:"https://images.unsplash.com/photo-1597055181300-9c4a1b9b0d4a?auto=format&fit=crop&w=600&q=80"}
];

function Navbar() {
 const count = useSelector(s => s.cart.items.reduce((sum,item)=>sum+item.quantity,0));
 return <nav className="navbar">
   <Link className="brand" to="/">🌿 Paradise Nursery</Link>
   <div className="navlinks">
     <Link to="/">Home</Link><Link to="/plants">Plants</Link>
     <Link className="cart-link" to="/cart">🛒 Cart ({count})</Link>
   </div>
 </nav>;
}

function ProductList() {
 const dispatch=useDispatch();
 const cartItems=useSelector(s=>s.cart.items);
 const categories=useMemo(()=>[...new Set(products.map(p=>p.category))],[]);
 return <>
   <Navbar/>
   <main className="page">
    <h1>Our Houseplants</h1>
    {categories.map(category=><section className="category" key={category}>
      <h2>{category}</h2>
      <div className="plant-grid">
       {products.filter(p=>p.category===category).map(product=>{
        const added=cartItems.some(item=>item.id===product.id);
        return <article className="plant-card" key={product.id}>
          <img src={product.image} alt={product.name}/>
          <h3>{product.name}</h3>
          <div className="price">${product.price}</div>
          <button className="btn" disabled={added} onClick={()=>dispatch(addItem(product))}>
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
        </article>;
       })}
      </div>
    </section>)}
   </main>
   <div className="footer">Paradise Nursery © 2026</div>
 </>;
}
export default ProductList;
