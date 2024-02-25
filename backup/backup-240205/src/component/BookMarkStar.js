
const BookMarkStar = ({handleBookMark, isClicked}) => {
    // const starIconRef = useRef();
    // const [isClicked, setIsClicked] = useState();
    // const handleBookMark = () => {
    //     setIsClicked(!isClicked);
    // }
    return (
        <button 
            className="BookMarkStar"
            onClick={handleBookMark}
        >
            <span 
                className={isClicked?`material-symbols-outlined star_icon true` : `material-symbols-outlined star_icon`}
            >
                grade
            </span>
        </button>
    );
}
export default BookMarkStar;