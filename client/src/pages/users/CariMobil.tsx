import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";

const CariMobil: React.FC = () => {
    return (
        <>
            <section id="hero">
                <AppBar></AppBar>
                <div className="container-lg spes">
                    <div className="row align-items-center">
                        <div className="col-md-6 desc-wrapper">
                            <h1 className="heading-bold-36">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p className="body-light-14 hero-desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        </div>
                        <div className="col-md-6 hero-img">
                            <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440133/assets/img_car_a9bwgv.png" alt="gambar mobil" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <SearchBar></SearchBar>
            <Footer></Footer>
        </>
    );
};

export default CariMobil;
