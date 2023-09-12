import React from 'react';
import serviceBanner from "../../../asset/serviceBanner.png"
import LeftService from '../leftService';
const Services = () => {
    return (
        <div>
            
    <main>
        <section>
            <div className="container">
                <div className="pageBg" style={{ backgroundImage: `url('${serviceBanner}')` }}>
                    <h1 className="pageHeader">Creative <span>Services</span></h1>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row mb_60 gy-5">
                    <div className="col-md-3">
                      <LeftService/>
                    </div>

                    <div className="col-md-9">
                        <div className="mb-5 d-flex flex-column gap-2">
                            <h2 className="mb-3 text-center"><strong>A vast array of creative services awaits</strong></h2>
                            <p className="lead">
                                4835Studios is a hybrid creative company that combines a distinct understanding of brand
                                strategy with expertise in design, communications, and promotion. The work takes shape
                                in many ways, across many media. Whether audio or video production, online or print, we
                                unify, integrate and amplify the central idea —the critical value— for all kinds of
                                artists, businesses, products and services.
                            </p>
                            <p className="lead">
                                We strive to deliver a recording and production experience that goes above and beyond
                                artists expectations of what a studio can be.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="d-flex flex-column gap-4 h-100">
                                    <div className="d-flex flex-column gap-2 align-items-center">
                                        <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                                            <i className="fa fa-music"></i>
                                        </div>
                                        <h4>Audio</h4>
                                    </div>
                                    <ul className="serviceList mx-auto">
                                        <li><small>Music Recording</small></li>
                                        <li><small>Mixing &amp; Mastering</small></li>
                                        <li><small>PSAs</small></li>
                                        <li><small>Voice Overs</small></li>
                                        <li><small>ADR</small></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex flex-column gap-4 h-100">
                                    <div className="d-flex flex-column gap-2 align-items-center">
                                        <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                                            <i className="fa fa-video-camera"></i>
                                        </div>
                                        <h4>Visual</h4>
                                    </div>
                                    <ul className="serviceList mx-auto">
                                        <li><small>Music Videos</small></li>
                                        <li><small>Event Presentations</small></li>
                                        <li><small>Live Event Streaming</small></li>
                                        <li><small>Behind-the-scenes Videos</small></li>
                                        <li><small>Short &amp; Full-length Films</small></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex flex-column gap-4 h-100">
                                    <div className="d-flex flex-column gap-2 align-items-center">
                                        <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                                            <i className="fa fa-retweet"></i>
                                        </div>
                                        <h4>Promotional</h4>
                                    </div>
                                    <ul className="serviceList mx-auto">
                                        <li><small>Brand Identity</small></li>
                                        <li><small>Music Licensing</small></li>
                                        <li><small>Radio Promotion</small></li>
                                        <li><small>Live Event Promotion</small></li>
                                        <li><small>Project Fundraising</small></li>
                                        <li><small>Youtube Sponsorship</small></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex flex-column gap-4 h-100">
                                    <div className="d-flex flex-column gap-2 align-items-center">
                                        <div className="serviceIconLarge d-flex justify-content-center align-items-center mb-2">
                                            <i className="fa fa-cloud-upload"></i>
                                        </div>
                                        <h4>Digital</h4>
                                    </div>
                                    <ul className="serviceList mx-auto">
                                        <li><small>Website &amp; Logo Design</small></li>
                                        <li><small>Mobile Applications</small></li>
                                        <li><small>Social Media Marketing</small></li>
                                        <li><small>Content Management</small></li>
                                        <li><small>E-Commerce</small></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="half-margins"/>
                        <h2 className="text-center mb-3"><strong>A Few Extra Services</strong></h2>
                        <div className="row gy-3">
                            <div className="col-12 col-md-6">
                                <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                                    <div className="serviceIcon d-flex justify-content-center align-items-center">
                                        <i className="fa fa-video-camera"></i>
                                    </div>
                                    <h4>Aerial Photography &amp; Videography</h4>
                                </div>
                                <p>
                                    Let us capture stunning overhead and perimeter views of your real estate property.
                                </p>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                                    <div className="serviceIcon d-flex justify-content-center align-items-center">
                                        <i className="fa fa-music"></i>
                                    </div>
                                    <h4>Music Documentaries</h4>
                                </div>
                                <p>
                                    Full-length video with a documentary feel. Picture <em>The Making of
                                        Thriller</em>.
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                                    <div className="serviceIcon d-flex justify-content-center align-items-center">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <h4>Promotional Design</h4>
                                </div>
                                <p>
                                    Project artwork to help advance your brand and get your artist message to your audience.
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="d-flex justify-content-start gap-2 align-items-center mb-3">
                                    <div className="serviceIcon d-flex justify-content-center align-items-center">
                                        <i className="fa fa-group"></i>
                                    </div>
                                    <h4>Customer Support</h4>
                                </div>
                                <p>
                                    Our customers are our most valuable asset. We do everything to accomodate artists and your satifaction is our #1 priority. If there is anything we can do to further enhance your visit with us, please don't hesitate to ask.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
        </div>
    );
};

export default Services;