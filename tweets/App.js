// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;

    const allTweets = tweets.map(Tweet)

    return (
        <span>{allTweets}</span>
    )
}






// CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props) => {

    // console.log(props.user.username)


    let style = {
        opacity: 0.62
    }

    let compileTweet = (
    
    <div className="bg-white p-2 m-2 w-50">
    <div className="d-flex align-items-center">
        <img width="50" src={props.user.profilePic} />
        <div className="mt-4 ml-2">
            <b> {props.user.username}</b>
             {props.user.isVerified ? (<img width="15" src={"twitterIcons/check-circle.svg"} />) : null }
            <p> {props.user.handle}</p>
            
        </div>
    </div>
    <h3> {props.text}</h3>
    <hr />
    <div className="d-flex text-secondary">
        <img style={style} src={"./twitterIcons/message-circle.svg"} />
        <b className="mr-3 ml-1"> {props.replies}</b>
        <img style={style} src={"./twitterIcons/repeat.svg"} />
        <b className="mr-3 ml-1"> {props.retweets}</b>
        <img style={style} src={"./twitterIcons/heart.svg"} />
        <b className="mr-3 ml-1"> {props.likes}</b>
    </div>
</div>

    )

    return compileTweet


};






const User = null;  // CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = null;  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly