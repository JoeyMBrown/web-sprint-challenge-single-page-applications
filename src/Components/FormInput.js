export default function FormInput(props) {
    const { input, options, name, label, placeHolder } = props.input;
    console.log(props);
    return (
        <label> {label[0]} {label[1]}
            {
                options ? options.map((option, index) =><p>{option}<input key={index} type={input} name={name} value={option} id={option} /></p>) : <input type={input} placeholder={placeHolder} />
            }
        </label>
    )
}