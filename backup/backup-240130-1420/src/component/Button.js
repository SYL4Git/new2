const Button = ({ btnText, btnClick, btnName, btnImg, btnValue }) => {
    return (
        <button className={`btn ${btnName}`} onClick={btnClick} value={btnValue}>
            {btnText}
            <img src={btnImg} />
        </button>
    );
}
export default Button;