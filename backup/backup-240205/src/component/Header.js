
const Header=({headTxt, leftChild, midChild, rightChild})=>{
    return(
        <div className="Header">
            <div className="head_text">
                {headTxt}
            </div>
            <div className="head_btn_left">
                {leftChild}
            </div>
            <div className="head_btn_mid">
                {midChild}
            </div>
            <div className="head_btn_right">
                {rightChild}
            </div>
        </div>
    )
}
export default Header