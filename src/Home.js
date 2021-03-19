import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/Coming2America/C2A2_2021_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB659358842_.jpg" alt="" />
                <div className="home_row">
                    <Product title='The lean startup' price={19.99} image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg' rating={5}/>
                    <Product />
                </div>
                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home_row">
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default Home;