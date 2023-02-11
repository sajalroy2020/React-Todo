import testing from "../styles/style.module.css";
export default function Instagram(props){
    return(
        <img className={testing.instagram_img} src={props.image} alt="" />
    )
}