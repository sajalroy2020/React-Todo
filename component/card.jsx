import classes from "../styles/style.module.css";
// export default function Card(props){
//     return(
//             <div className={classes.all_card} >
//                 <img src={props.image} alt="img" />
//                 <br />
//                 <h3>{props.title}</h3>
//                 <h4>{props.price}</h4>
//                 <p>{props.subTitle}</p>
//                 <button type="submit" className={classes.btn}>Add to Cart</button>
//             </div>
//     )
// }

export default function Card({item, handelClick}){
    let {id, title, price, subTitle, image} = item;

    return(
        <div className={classes.all_card} >
                   <img src={image} alt="img" />
                   <br />
                   <h3>{title}</h3>
                   <h4>Price- ${price}</h4>
                   <p>{subTitle}</p>
                   <button onClick={()=>handelClick(item)} type="submit" className={classes.btn}>Add to Cart</button>
               </div>
    )
}