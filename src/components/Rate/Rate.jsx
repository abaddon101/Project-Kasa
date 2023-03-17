import starEmpty from "../../assets/starsEmpty.png";
import starFull from "../../assets/starsFull.png";
import style from "../Rate/Rate.scss"

 function Rate({rate}){
    let fullStars = Array.from({ length: rate }, (value, index) => index);
    let emptyStars = Array.from({ length: 5 - rate }, (value, index) => index);
    
    return (
        <div className="rate">
        {
            fullStars.map((star, index) => {
                return (<img key={index} alt="star" className="star" src={starFull}></img>)
            })
        }
        {
            emptyStars.map((star, index) => {
                return (<img key={index} alt="star" className="star" src={starEmpty}></img>)
            })
        }
        </div>
    )
}

export default Rate