import Card from "../Components/Card";

const BuySell = (props) => {
    return ( 
        <div>
            {/* <img src="./images/secondhand wala.png" alt="2nd hand png" /> */}
            <img src="./images/secondhand wala.png" class="d-block w-100" alt="image1"/>
            <div className="bodyjastai">
            <Card 
            title={props.books[0].title}
            image={props.books[0].image}
            price={props.books[0].price}
                />
            <Card 
            title={props.books[1].title}
            image={props.books[1].image}
            price={props.books[1].price}
                />
            <Card 
            title={props.books[2].title}
            image={props.books[2].image}
            price={props.books[2].price}
                />
            <Card 
            title={props.books[3].title}
            image={props.books[3].image}
            price={props.books[3].price}
                />
            {/* <Card 
            title={props.books[4].title}
            image={props.books[4].image}
            price={props.books[4].price}
                /> */}
                </div>
        </div>
     );
}
 
export default BuySell;