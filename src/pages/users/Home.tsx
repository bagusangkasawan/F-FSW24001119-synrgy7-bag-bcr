import React from "react";
import { Button, Accordion } from "react-bootstrap";
import AppBar from "../../components/AppBar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import TestimonialCarousel from "../../components/TestimonialCarousel";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        const path = "/cars";
        navigate(path);
    };
    return (
        <>
            <section id="hero">
                <AppBar></AppBar>
                <div className="container-lg spes">
                    <div className="row align-items-center">
                        <div className="col-md-6 desc-wrapper">
                            <h1 className="heading-bold-36">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p className="body-light-14 hero-desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            <Button variant="success" onClick={routeChange}>
                                Cari Mobil
                            </Button>
                        </div>
                        <div className="col-md-6 hero-img">
                            <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440133/assets/img_car_a9bwgv.png" alt="gambar mobil" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="our-service" style={{ display: "flex", justifyContent: "center" }}>
                <div className="container services row">
                    <div className="image-content col">
                        <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440132/assets/img_service_p8i27q.png" alt="ilustrasi layanan" className="img-fluid" />
                    </div>
                    <div className="text-content col" style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
                        <h2 className="heading-bold-24">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                        <p className="body-light-14 service-desc">
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                        </p>
                        <ul className="list-service m-0 p-0">
                            <li className="service-item d-flex gap-2 align-items-center body-light-14">
                                <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440119/assets/check_icon_h04vuc.png" alt="" height={24} />
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </li>
                            <li className="service-item d-flex gap-2 align-items-center body-light-14">
                                <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440119/assets/check_icon_h04vuc.png" alt="" height={24} />
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </li>
                            <li className="service-item d-flex gap-2 align-items-center body-light-14">
                                <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440119/assets/check_icon_h04vuc.png" alt="" height={24} />
                                Sewa Mobil Jangka Panjang Bulanan
                            </li>
                            <li className="service-item d-flex gap-2 align-items-center body-light-14">
                                <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440119/assets/check_icon_h04vuc.png" alt="" height={24} />
                                Gratis Antar - Jemput Mobil di Bandara
                            </li>
                            <li className="service-item d-flex gap-2 align-items-center body-light-14">
                                <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440119/assets/check_icon_h04vuc.png" alt="" height={24} />
                                Layanan Airport Transfer / Drop In Out
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="why-us">
                <div className="container">
                    <h2 className="heading-bold-24">Why Us</h2>
                    <p className="body-light-14">Mengapa harus pilih Binar Car Rental?</p>
                    <div className="usp-wrapper row">
                        <div className="col-md-3">
                            <div className="card p-3">
                                <div className="card-body">
                                    <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440122/assets/icon_complete_cjuofx.png" alt="" className="usp1" />
                                    <h6 className="title-bold-16">Mobil Lengkap</h6>
                                    <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-3">
                                <div className="card-body">
                                    <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440124/assets/icon_price_htdnwa.png" alt="" className="usp2" />
                                    <h6 className="title-bold-16">Harga Murah</h6>
                                    <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-3">
                                <div className="card-body">
                                    <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440123/assets/icon_24hrs_ips9dc.png" alt="" className="usp3" />
                                    <h6 className="title-bold-16">Layanan 24 Jam</h6>
                                    <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-3">
                                <div className="card-body">
                                    <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440129/assets/icon_professional_ipwf3a.png" alt="" className="usp4" />
                                    <h6 className="title-bold-16">Sopir Profesional</h6>
                                    <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TestimonialCarousel></TestimonialCarousel>
            <div className="cta-banner" id="cta">
                <div className="container d-flex justify-content-center">
                    <div className="cta-card d-flex flex-column align-items-center justify-content-center">
                        <h1 className="heading-bold-36">Sewa Mobil di (Lokasimu) Sekarang</h1>
                        <p className="body-light-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="btn btn-success" type="button">
                            Mulai Sewa Mobil
                        </button>
                    </div>
                </div>
            </div>
            <section id="faq" className="d-flex justify-content-center">
                <div className="container row ">
                    <div className="col-md-6">
                        <h2>Frequently Asked Question</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="col-md-6">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> Apakah Ada biaya antar-jemput?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Home;
