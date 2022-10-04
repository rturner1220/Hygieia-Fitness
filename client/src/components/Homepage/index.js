import HeaderImg from '../../images/header02.jpg'
import custom01 from '../../images/custom01.jpg'
import { useNavigate } from 'react-router-dom';

import custom02 from '../../images/custom02.jpg'
import custom03 from '../../images/custom03.jpg'
import '../../App.css'

const Homepage = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/login");
    }
    return (
        <>
            <div className='header'>
                <div>
                    <div className='img'>
                        <img src={HeaderImg} alt='' />
                    </div>
                    <div className='overlay'></div>
                </div>
                <div className='content'>
                    <h6>Build Your Fitness World <br /> By Building Your Body</h6>
                    <button className='btn' onClick={login}>Join Now</button>
                </div>
            </div>

            <section>
                <div className='custom container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className='box'>
                                <img src={custom01} className='img-fluid' alt='' />
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='box'>
                                <img src={custom02} className='img-fluid' alt='' />
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='box'>
                                <img src={custom03} className='img-fluid' alt='' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    );
};

export default Homepage;