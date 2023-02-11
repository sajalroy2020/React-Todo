import classes from "../styles/style.module.css";
import { useState } from "react";
import React from "react";
import Card from "../component/card";
import List from "./CartData";

export default function Cart(){

    const [carts, setCarts]=useState([]);

    const handelClick = (item)=>{
        let x ={
            title: item.title,
            image: item.image,
            price: item.price,
        }
        setCarts([...carts, x]);
    }
   
    return(
        <div className={classes.container}>
           <h1>Add to Cart</h1>
            {/* <div className={classes.all_cart}>
                {List.map((item, index) => (<Card title={item.title} subTitle={item.subTitle} price={item.price} image={item.image} key={index} />))}
            </div> */}

            <div className={classes.all_cart}>
                {List.map((item) => (
                    <Card key={item.id} item={item} handelClick={handelClick} />
                ))}
            </div>
                
            <h3>1</h3>
            <div className={classes.cartCard}>
                {
                    carts.map((carts)=>(
                        <div className={classes.singlCard}>
                            <img src={carts.image} alt="" />
                            <div>
                                <h4>{carts.title}</h4>
                                <h3>$ {carts.price}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}