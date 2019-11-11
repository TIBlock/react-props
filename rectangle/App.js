// Render the rectangle using React!
const App = (props) => {
    let { rectangle } = props;

    let style = {
        height: rectangle.height,
        width: rectangle.width,
        backgroundColor: rectangle.color
    }

    console.log(rectangle)
    return (
        <span><div style={style}></div></span>
    )
}


