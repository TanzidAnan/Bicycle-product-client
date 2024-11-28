import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    const allProduct = useLoaderData();
    console.log(allProduct)
    return (
        <div>
            <section>
                <Header></Header>
            </section>
        <section>
            <p>tanzid</p>
        </section>
        </div>
    );
};

export default Home;