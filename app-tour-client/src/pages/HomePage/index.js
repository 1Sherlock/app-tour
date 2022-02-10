import React from 'react';
import {Button, Card, CardBody, UncontrolledCollapse} from "reactstrap";
const showMore = () => {

};
const HomePage = () => {
    return (
        <div>
            <section id="header">
                <div className="container">
                    <div className="navbar navbar-expand-sm justify-content-between">
                        <a href="#" className="navbar-brand">
                            <img src="/logo.png" alt="" className=""/>
                        </a>

                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#" className="nav-link font-family-medium">Tour
                                programmes</a></li>
                            <li className="nav-item"><a href="#"
                                                        className="nav-link font-family-medium">Destinations</a></li>
                            <li className="nav-item"><a href="#" className="nav-link font-family-medium">Contacts</a>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link font-family-medium">Need help?</a>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link font-family-medium">Blog</a></li>
                        </ul>
                    </div>

                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center">
                                <h2 className="main-text font-family-mont-semi-bold mb-0">Let`s go to travel with our
                                    company</h2>
                                <p className="text font-family-regular mb-0">World is a book, those who don't travel
                                    reads only a page of it...</p>
                                <button className="btn btn-header shadow-none font-family-regular" type="button">See
                                    programmes >>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="yellow-line" />

            <section id="tour-programmes">
                <div className="container">
                    <div className="d-flex flex-column align-items-start title-tour">
                        <p className="font-family-regular">Where do you want to travel?</p>
                        <h2 className="font-family-mont-regular">Tour programmes</h2>
                    </div>

                    <div className="row">
                        <div className="col-4 card-style mb-3">
                            <div className="card border-0">
                                <div className="card-header border-0 p-0">
                                    <img src="/card3.png" alt="" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="font-family-regular">Antalya</h5>
                                    <p className="font-family-light">Antalya is beautifully sprawled on the western
                                        Mediterranean coastline and hence,
                                        offers wonderful scenic views.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center"><img src="/lokatsiya.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">Antalya,Turkey</span>
                                        </div>
                                        <div className="d-flex align-items-center"><img src="/cost.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">100/person</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 card-style mb-3">
                            <div className="card border-0">
                                <div className="card-header border-0 p-0">
                                    <img src="/card2.png" alt="" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="font-family-regular">Venice</h5>
                                    <p className="font-family-light">Venice is one of Italy’s most picturesque cities.
                                        Beautiful floating palaces of stone surrounded by an ancient network of
                                        canals.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center"><img src="/lokatsiya.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">Venice, Italy</span>
                                        </div>
                                        <div className="d-flex align-items-center"><img src="/cost.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">250/person</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 card-style mb-3">
                            <div className="card border-0">
                                <div className="card-header border-0 p-0">
                                    <img src="/card1.png" alt="" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="font-family-regular">Antalya</h5>
                                    <p className="font-family-light">Antalya is beautifully sprawled on the western
                                        Mediterranean coastline and hence,
                                        offers wonderful scenic views.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center"><img src="/lokatsiya.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">Antalya,Turkey</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center"><img
                                            src="/cost.png" alt=""
                                            className=""/> <span
                                            className="ml-1 font-family-light">100/person</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 card-style mb-3">
                            <div className="card border-0">
                                <div className="card-header border-0 p-0">
                                    <img src="/card3.png" alt="" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="font-family-regular">Antalya</h5>
                                    <p className="font-family-light">Antalya is beautifully sprawled on the western
                                        Mediterranean coastline and hence,
                                        offers wonderful scenic views.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center"><img src="/lokatsiya.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">Antalya,Turkey</span>
                                        </div>
                                        <div className="d-flex align-items-center"><img src="/cost.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">100/person</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 card-style mb-3">
                            <div className="card border-0">
                                <div className="card-header border-0 p-0">
                                    <img src="/card2.png" alt="" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="font-family-regular">Venice</h5>
                                    <p className="font-family-light">Venice is one of Italy’s most picturesque cities.
                                        Beautiful floating palaces of stone surrounded by an ancient network of
                                        canals.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center"><img src="/lokatsiya.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">Venice, Italy</span>
                                        </div>
                                        <div className="d-flex align-items-center"><img src="/cost.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">250/person</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 card-style mb-3">
                            <div className="card border-0">
                                <div className="card-header border-0 p-0">
                                    <img src="/card1.png" alt="" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="font-family-regular">Antalya</h5>
                                    <p className="font-family-light">Antalya is beautifully sprawled on the western
                                        Mediterranean coastline and hence,
                                        offers wonderful scenic views.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center"><img src="/lokatsiya.png" alt=""
                                                                                        className=""/> <span
                                            className="ml-1 font-family-light">Antalya,Turkey</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center"><img
                                            src="/cost.png" alt=""
                                            className=""/> <span
                                            className="ml-1 font-family-light">100/person</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <button className="btn text-white btn-show font-family-light shadow-none" type="button"
                                onClick={showMore}>Show more...
                        </button>
                    </div>
                </div>
            </section>

            <section id="destination">
                <div className="container">
                    <div className="d-flex flex-column align-items-start title-destination">
                        <p className="font-family-regular">Choose your</p>
                        <h2 className="font-family-mont-regular">Destination</h2>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="box">
                            <div id="carousel">
                                <figure>
                                    <img src="/carousel-1.jpg" alt=""/>
                                    <div className="layer d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="text-white">Keukenhof</h5>
                                        <h4 className="text-white">Holand</h4>
                                    </div>
                                </figure>
                                <figure>
                                    <img src="/carousel-2.jpg" alt=""/>
                                    <div className="layer d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="text-white">Dubai</h5>
                                        <h4 className="text-white">UAE</h4>
                                    </div>
                                </figure>
                                <figure>
                                    <img src="/carousel-3.jpg" alt=""/>
                                    <div className="layer d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="text-white">Colosseum</h5>
                                        <h4 className="text-white">Italy</h4>
                                    </div>
                                </figure>
                                <figure>
                                    <img src="/carousel-4.jpg" alt=""/>
                                    <div className="layer d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="text-white">Bodrum</h5>
                                        <h4 className="text-white">Turkey</h4>
                                    </div>
                                </figure>
                                <figure>
                                    <img src="/carousel-5.jpg" alt=""/>
                                    <div className="layer d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="text-white">Glacier Express</h5>
                                        <h4 className="text-white">Switzerland</h4>
                                    </div>
                                </figure>
                                <figure>
                                    <img src="/carousel-6.jpg" alt=""/>
                                    <div className="layer d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="text-white">Anantara Kihavah</h5>
                                        <h4 className="text-white">Maldives</h4>
                                    </div>
                                </figure>
                                <figure>
                                    <img src="/carousel-7.jpg" alt=""/>
                                    <div className="layer d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="text-white">Taj Mahal</h5>
                                        <h4 className="text-white">India</h4>
                                    </div>
                                </figure>
                                <figure>
                                    <img src="/carousel-8.jpg" alt=""/>
                                    <div className="layer d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="text-white"></h5>
                                        <h4 className="text-white">Norvegia</h4>
                                    </div>
                                </figure>
                                <figure>
                                    <img src="/carousel-9.jpg" alt=""/>
                                    <div className="layer d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="text-white"></h5>
                                        <h4 className="text-white">Hawaii</h4>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="blog">
                <div className="container">
                    <div className="d-flex flex-column align-items-start title-blog">
                        <p className="font-family-regular">What`s news</p>
                        <h2 className="font-family-mont-regular">In the WORLD</h2>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="col-6">
                            <div className="card border-0 news">
                                <h3 className="news-title font-family-bold">WHO CALLS TRAVEL BANS FUTILE; RECOMMENDS NATIONS
                                    TO LIFT OR RELAX
                                    COVID-19 TRAVEL
                                    RESTRICTIONS</h3>

                                <p className="news-text font-family-light">
                                    The WHO recommended at the International Health Regulations Emergency Committee on
                                    COVID-19 that, the nations should remove the travel bans and restrictions. As per
                                    report, they do not provide value and continue to contribute to the economic and social
                                    stress and further stated that these restrictions have been incompetent in
                                </p>

                                <img src="/news1.png" alt="" className=""/>
                            </div>

                            <div className="card border-0 news">
                                <h3 className="news-title font-family-bold">
                                    Tourism Ireland welcomes lifting of Covid-19 restrictions
                                </h3>

                                <p className="news-text font-family-light">
                                    The Irish government has announced that almost all Covid-19 public health restrictions
                                    will come to an end. The move was welcomed by Tourism Ireland.
                                </p>

                                <img src="/news3.png" alt="" className=""/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card border-0 news">
                                <h3 className="news-title font-family-bold">
                                    Tourism Ireland welcomes lifting of Covid-19 restrictions
                                </h3>

                                <p className="news-text font-family-light">
                                    The Irish government has announced that almost all Covid-19 public health restrictions
                                    will come to an end. The move was welcomed by Tourism Ireland.
                                </p>

                                <img src="/news2.png" alt="" className=""/>
                            </div>

                            <div className="card border-0 news">
                                <h3 className="news-title font-family-bold">WHO CALLS TRAVEL BANS FUTILE; RECOMMENDS NATIONS
                                    TO LIFT OR RELAX
                                    COVID-19 TRAVEL
                                    RESTRICTIONS</h3>

                                <p className="news-text font-family-light">
                                    The WHO recommended at the International Health Regulations Emergency Committee on
                                    COVID-19 that, the nations should remove the travel bans and restrictions. As per
                                    report, they do not provide value and continue to contribute to the economic and social
                                    stress and further stated that these restrictions have been incompetent in
                                </p>

                                <img src="/news4.png" alt="" className=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="need-help">
                <div className="container">
                    <div className="d-flex flex-column align-items-start title-need-help">
                        <p className="font-family-regular">Need help?</p>
                        <h2 className="font-family-mont-regular">Frequently asked question</h2>
                    </div>


                    <div className="faq">
                        <div>
                            <Button
                                id="toggler-1"
                                className="collapse-button"
                            >
                                <p className="mb-0">What is your national cuisine?</p>
                                <img src="/down.png" alt="" className=""/>
                            </Button>
                            <UncontrolledCollapse toggler="#toggler-1">
                                <Card className="collapse-card">
                                    <CardBody>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni,
                                        voluptas debitis similique porro a molestias consequuntur earum odio officiis
                                        natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </div>

                        <div>
                            <Button
                                id="toggler-2"
                                className="collapse-button"
                            >
                                <p className="mb-0">I am traveling with a child, what documents may I need at
                                    check-in?</p>
                                <img src="/down.png" alt="" className=""/>
                            </Button>
                            <UncontrolledCollapse toggler="#toggler-2">
                                <Card className="collapse-card">
                                    <CardBody>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni,
                                        voluptas debitis similique porro a molestias consequuntur earum odio officiis
                                        natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </div>

                        <div>
                            <Button
                                id="toggler-3"
                                className="collapse-button"
                            >
                                <p className="mb-0">What are the rules for transporting children?</p>
                                <img src="/down.png" alt="" className=""/>
                            </Button>
                            <UncontrolledCollapse toggler="#toggler-3">
                                <Card className="collapse-card">
                                    <CardBody>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni,
                                        voluptas debitis similique porro a molestias consequuntur earum odio officiis
                                        natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </div>

                        <div>
                            <Button
                                id="toggler-4"
                                className="collapse-button"
                            >
                                <p className="mb-0">How can I buy plane tickets online?</p>
                                <img src="/down.png" alt="" className=""/>
                            </Button>
                            <UncontrolledCollapse toggler="#toggler-4">
                                <Card className="collapse-card">
                                    <CardBody>
                                        Tickets for the train you are interested in in Uzbekistan can be purchased
                                        through the unified payment system E-ticket by clicking on the
                                        following link
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </div>

                        <div>
                            <Button
                                id="toggler-5"
                                className="collapse-button"
                            >
                                <p className="mb-0">How can I buy intercity bus tickets online?</p>
                                <img src="/down.png" alt="" className=""/>
                            </Button>
                            <UncontrolledCollapse toggler="#toggler-5">
                                <Card className="collapse-card">
                                    <CardBody>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni,
                                        voluptas debitis similique porro a molestias consequuntur earum odio officiis
                                        natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </div>

                        <div>
                            <Button
                                id="toggler-6"
                                className="collapse-button"
                            >
                                <p className="mb-0">What is your national cuisine?</p>
                                <img src="/down.png" alt="" className=""/>
                            </Button>
                            <UncontrolledCollapse toggler="#toggler-6">
                                <Card className="collapse-card">
                                    <CardBody>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni,
                                        voluptas debitis similique porro a molestias consequuntur earum odio officiis
                                        natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </div>
                    </div>
                </div>
            </section>

            <section id="map">
                <div className="container">
                    <div className="d-flex flex-column align-items-start title-contact">
                        <p className="font-family-regular">Any question</p>
                        <h2 className="font-family-mont-regular">Contact with us</h2>
                    </div>
                    <div className="map-zone">
                        <iframe className="map"
                                src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2520.324655923657!2d69.28582771909839!3d41.30477332895754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d41.3045192!2d69.285954!4m0!5e0!3m2!1sru!2s!4v1643181255335!5m2!1sru!2s"
                                allowFullScreen="" loading="lazy"/>

                        <div className="contacts">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="">
                                            <h6>Contact number:</h6>
                                            <h6>Email:</h6>
                                            <h6>Social Networks:</h6>
                                        </div>

                                        <div className="">
                                            <p className="mb-0">+998(93) 436 - 63 -31</p>
                                            <p>travelbox77@email.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer border-top-0">
                                    <img src="/telegram-white.png" alt="" className="mr-2"/>
                                    <img src="/meta-white.png" alt="" className="mx-2"/>
                                    <img src="/instagram-white.png" alt="" className="mx-2"/>
                                    <img src="/twitter-white.png" alt="" className="mx-2"/>
                                    <img src="/youtube-white.png" alt="" className="mx-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-5 footer-logo">
                            <div className="d-flex align-items-center">
                                <img src="/logo.png" alt=""/>

                                <div className="ml-3">
                                    <p className="mb-0 font-family-mont-semi-bold">We work only for travellers</p>
                                    <h4 className="mb-0 font-family-mont-semi-bold">Travel Box</h4>
                                </div>
                            </div>

                            <div className="context mt-3 font-family-light">
                                Travel Box - the agency that help to people who really like to travel, want to learn
                                another land and enjoy the world miracles. lorem Book and manage all your company’s
                                travel in one easy-to-use tool.Choose from the world’s greatest accommodation selection
                                as well as.
                            </div>
                        </div>

                        <div className="col-2 footer-menu d-flex flex-column align-items-center">
                            <div className="title-menu">
                                <h6 className="font-family-regular">Menu</h6>
                            </div>
                            <ul className="navbar-nav align-items-center+
                        ">
                                <li className="nav-item"><a href="#"
                                                            className="nav-link font-family-light text-dark">Home</a>
                                </li>
                                <li className="nav-item"><a href="#"
                                                            className="nav-link font-family-light text-dark">Tour</a>
                                </li>
                                <li className="nav-item"><a href="#"
                                                            className="nav-link font-family-light text-dark">Category</a>
                                </li>
                                <li className="nav-item"><a href="#" className="nav-link font-family-light text-dark">About
                                    us</a></li>
                            </ul>
                        </div>

                        <div className="col-4 footer-contact">
                            <div className="title-footer-contact">
                                <h6 className="font-family-regular">Contact</h6>
                            </div>
                            <div className="d-flex flex-column justify-content-center mt-3">
                                <div className="mb-3"><img src="/email.png" alt=""/> <span
                                    className="ml-2 font-family-light text-footer">travelBox@email.com</span></div>

                                <div className="mb-3"><img src="/phone-icon.png" alt=""/> <span
                                    className="ml-2 font-family-light text-footer">+998(93) 436 - 63 -31</span>
                                </div>

                                <div className="mb-3 d-flex align-items-center"><img src="/location.png" alt=""/> <p
                                    className="ml-2 mb-0 font-family-light text-footer">Toshkent shahar, 100017, Yunusobod
                                    tumani, Navoiy ko`chasi, 1</p>
                                </div>
                            </div>

                            <div className="row-socials">
                                <a href="#" className=""><img src="" alt="" className=""/></a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className="yellow-line">
                <div className="d-flex align-items-center justify-content-center text-white font-family-light">
                    2021 (c) — Cosmos Soft Products
                </div>
            </div>

        </div>
    );
};

export default HomePage;