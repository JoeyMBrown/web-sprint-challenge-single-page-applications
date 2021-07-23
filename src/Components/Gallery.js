import GalleryItem from './GalleryItem';

export default function Gallery(props) {
    const { galleryList } = props;
    return (
        <div>
            <h2>Food Delivery in Gotham City</h2>
            {
                galleryList.map((galleryItem) => <GalleryItem img={galleryItem.img} resturant={galleryItem.resturant} food={galleryItem.food} deliveryTime={galleryItem.deliveryTime} deliveryFee={galleryItem.deliveryFee} />)
            }
        </div>
    )
}