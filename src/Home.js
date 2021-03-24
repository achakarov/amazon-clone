import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/Coming2America/C2A2_2021_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB659358842_.jpg" alt="" />
                <div className="home_row">
                    <Product title='The lean startup' price={19.99} image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg' rating={5}/>
                    <Product title='Lenovo Legion 5 Gaming Laptop, 15.6" FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black' price={991.98} image='https://m.media-amazon.com/images/I/81w+3k4U8PL._AC_UL320_.jpg' rating={5} />
                </div>
                <div className="home_row">
                    <Product title='UNEN iphone Charger（3/3/6/6/10FT）5 Pack-Black and Blue' price={14.99} image='https://m.media-amazon.com/images/I/71XhOxInbUL._AC_UL320_.jpg' rating={4} />
                    <Product title='Mkeke Compatible with iPhone 11 Case, Clear Shock Absorption Cases for 6.1 Inch' price={8.49} image='https://images-na.ssl-images-amazon.com/images/I/717-rbzZg3L._AC_SL1500_.jpg' rating={3} />
                    <Product title='iRobot Roomba i6+ (6550) Robot Vacuum with Automatic Dirt Disposal' price={767.98  } image='https://images-na.ssl-images-amazon.com/images/I/71dYXeq7KoL._AC_SL1500_.jpg' rating={5} />
                </div>
                <div className="home_row">
                    <Product title='Samsung Business CH890 Series 34 inch WQHD 3440x1440 Ultrawide Curved Desktop Monitor for Business' price={597.51} image='https://images-na.ssl-images-amazon.com/images/I/71qkzkC7bHL._AC_SL1500_.jpg' rating={5} />
                </div>
            </div>
        </div>
    );
}

export default Home;