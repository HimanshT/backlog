import img1 from "../images/exams.svg";
import '../css/navbar.css';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section>
                <div id="header" className="d-flex align-items-center">
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                        <h1>
                                            Clear your semester exams with <strong className="brand-name">BACKLOG</strong>
                                        </h1>
                                        <h2 className="my-3">
                                            without getting a backLog 🔥
                                        </h2>
                                        <div className="mt-3">
                                            <Link to="/mainsearch" className="btn-get-started">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img src={img1} className="img-fluid animated" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}