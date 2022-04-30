import React from 'react';
import './Testimonial.css'

import clientImg from '../../assests/img/man.png'

const Testimonial = () => {
    return (
        <div>
            <section className="client-section py-5">
                <div className="container w-[1200px] mx-auto">
                    <div className="text-center">
                        <h6 className="text-orange-500 font-semibold"> Clients words  </h6>
                        <h2 className="py-2 md:text-5xl">What our clients say</h2>
                    </div>
                    <div className="client-content items-center py-3  grid md:grid-cols-2">
                        <div className="client-content-left">
                            <p>"I'm not a fan of buying used cars, and I'm naturally skeptical of the process and those involved. BUT, I can honestly say that the experience of buying a used vehicle from Quality Cars - and dealing with Colin in particular - was excellent. He is professional, well-informed, conscientious and his follow through was perfect. I'm very satisfied and would not hesitate to recommend them or buy another vehicle from them."</p>
                            <p className="text-orange-500 font-semibold">Tamim Ahmed</p>
                            <span>Faunder</span>
                        </div>
                        <div className="col-md-5 clien-content">
                            <img src={clientImg} alt="" />
                            <div className="client-img-icon">
                                <span> <i className="fa fa-quote-right" aria-hidden="true"></i> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;