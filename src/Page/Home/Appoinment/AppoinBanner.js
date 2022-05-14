import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import backgroundPic from '../../../assets/images/bg.png'

const AppoinBanner = ({ date, setDate }) => {

    const appoinmentStyle = {
        backgroundImage: `url(${backgroundPic})`,
        backgroundSize: 'cover',
    }


    return (
        <div style={appoinmentStyle} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
                <img src={chair} alt='pic' className="max-w-sm rounded-lg shadow-2xl mb-12  lg:mb-1 lg:ml-12 " />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppoinBanner;