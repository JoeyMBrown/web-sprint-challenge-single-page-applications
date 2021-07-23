import React from "react";
import { Link } from "react-router-dom";

export default function TopImage(props) {
    const { text, button, butnText, img } = props;
    return (
        <div>
            <h2>{text}</h2>
            {
                button ? <Link to="/pizza" id="order-pizza">{butnText}</Link> : null
            }
        </div>
    )
}