export default function TopImage(props) {
    const { text, button, butnText, img } = props;
    return (
        <div>
            <h2>{text}</h2>
            {
                button ? <button>{butnText}</button> : null
            }
        </div>
    )
}