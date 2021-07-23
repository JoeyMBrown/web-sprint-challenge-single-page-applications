export default function GalleryItem (props) {
    const {img, resturant, food, deliveryTime, deliveryFee } = props;
    return (
        <div>
            <img src={`${img}`} />
            <h3>{resturant}</h3>
            <p>${`${food}`}</p>

            <div>
                <p>{deliveryTime}</p>
                <p>{deliveryFee}</p>
            </div>
        </div>
    )
}