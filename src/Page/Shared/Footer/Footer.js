import React from 'react';
import background from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: 'cover',
        }}>
            <footer class="  py-4 container mx-auto ">
                <div className='grid grid-cols-3 pl-4 '>
                    <div className='grid grid-row'>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div className='grid grid-row'>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div className='grid grid-row '>
                        <span class="footer-title">Legal</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>

                </div>
                <footer class="footer footer-center pt-6  text-base-content">
                    <div>
                        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
            </footer>
        </div>
    );
};

export default Footer;