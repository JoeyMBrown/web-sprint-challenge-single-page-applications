import TopImage from '../Components/TopImage'
import Gallery from '../Components/Gallery'

export default function HomePage(props) {
    const { galleryList } = props
    return (
        <div>
            <TopImage text={'Your favorite food delivered while coding'} button={true} butnText={'Pizza?'} img={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png"}/>
            <Gallery galleryList={galleryList}/>
        </div>
    )
}