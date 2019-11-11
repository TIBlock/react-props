// Render the cards using React!
const App = (props) => {
    let { cards } = props;

    const allCards = cards.map(Card)

    return (
        <span>{allCards}</span>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = (props) => {

    let card = "cards/" + props.value + props.suit + ".png"

    return (
        <img width='150' src={card} />
    ) 
} 