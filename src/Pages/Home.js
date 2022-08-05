import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
import './Home.css';

const Home = (props) => {

    return (
        <div>
            <Carousel />
            <h2 style={{
                color: "#171C24",
                margin:"0px",
                padding:"20px",
                backgroundColor:"#F6F6F6",
                fontSize:"40px",
                fontWeight:"bold"

            }}>Featured Products</h2>
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

export default Home;