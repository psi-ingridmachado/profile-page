import React from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';
import backgroundImage0 from './bg0.png';
import backgroundImage2 from './bg2.png';
import backgroundImage3 from './bg3.png';

import profileImage from './profile.jpeg';
import hFont from './hfont.ttf';
const ProfilePage = () => {
    const arrayBg = [
        backgroundImage0,
        backgroundImage2,
        backgroundImage3
    ]
    const getRandomBg = () => {
        return arrayBg[Math.floor(Math.random() * 3)];
    }

    const emailLink = 'mailto:psicologia@ingridmachado.com';
    const whatsappLink = 'https://wa.me/5515997105289?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre...';
    const instagramLink = 'https://www.instagram.com/psi.ingridmachado';

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover" style={{
            fontFamily: hFont,
            backgroundImage: `url(${getRandomBg()})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: "100%"
        }}>
            <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={profileImage} alt="Profile" />
                    </div>
                </div>

                <h1 className="text-4xl font-bold mb-2 text-white tracking-wide w-72">Ingrid Machado Alves Da Silva</h1>
                <p className="text-lg text-gray-400">Psicógola</p>
                <p className="text-l text-gray-400">CRP 06/178937</p>
            </div>

                <div className="mt-8">
                    <a href={whatsappLink} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                        Fale comigo
                    </a>
                </div>

            <div className="text-center mt-8">
                {/* <h2 className="text-2l font-bold mb-4">Contato</h2> */}


                <ul className="flex justify-center space-x-4">
                    <li>
                        <a href={emailLink} className="text-blue-500 hover:text-blue-700">
                            <FaEnvelope />
                        </a>
                    </li>
                    <li>
                        <a href={whatsappLink} className="text-green-500 hover:text-green-700">
                            <FaWhatsapp />
                        </a>
                    </li>
                    <li>
                        <a href={instagramLink} className="text-pink-500 hover:text-pink-700">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default ProfilePage;
