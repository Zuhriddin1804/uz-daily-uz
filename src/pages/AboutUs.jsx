import React from 'react';
import data from '../assets/data';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('selectedLanguage') || 'uz'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage]);

    const changeLanguage = (languageCode) => {
        setSelectedLanguage(languageCode);
    };

    return (
        <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <div className='mb-7 space-y-5 sm:w-180% sm:mb-0'>
                <h3 className='text-3xl font-medium text-black'>{t("about_us_title")}</h3>
                <p className='text-lg font-normal text-gray-800'>
                    <strong className='text-base font-bold text-black'>
                        Uzbekistan Daily (UzDaily.com)
                    </strong> {t("about_us_description_1")}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t("about_us_description_2")}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t("about_us_description_3")}
                </p>
                <p className='text-lg font-normal text-gray-800'>
                    {t("about_us_contact_info")}
                </p>
                <p className='text-lg font-normal text-gray-80'>
                    <strong className='text-base font-bold text-black'>
                        {t("about_us_company_name")}
                    </strong>
                    <br />
                    <strong className='text-base font-bold text-black mr-2'>
                        {t("about_us_address")}
                    </strong> {t("about_us_address_details")}
                    <br />
                    <strong className='text-base font-bold text-black mr-2'>
                        {t("about_us_tel")}
                    </strong>
                    +998 90 938 83 38
                    <br />
                    <strong className='text-base font-bold text-black mr-2'>
                        {t("about_us_email")}
                    </strong>
                    <Link to='mailto:info@uzdaily.com'>info@uzdaily.com</Link>
                </p>
            </div>
            <div className='w-auto'>
                <div className='mb-5'>
                    <h3 className='text-black text-2xl font-medium text-center sm:text-start'>
                        {t("latest_news")}
                    </h3>
                </div>
                <div>
                    <ul className='grid grid-cols-1 gap-y-4'>
                        {data().slice(0, 3).map((news) => (
                            <li key={news.id} className='bg-white shadow-lg rounded-md'>
                                <Link to={`/Uzbekistan/${news.id}`}>
                                    <div className='grid lg:grid-cols-2 gap-6 p-4'>
                                        <div>
                                            <img className='w-full h-full rounded-md' src={news.image} alt={news.alt} />
                                        </div>
                                        <div className='flex flex-col justify-evenly space-y-7'>
                                            <h3 className="text-black text-sm font-medium">{t(news.title)}</h3>
                                            <div className='flex justify-between items-center'>
                                                <p className="text-black text-base sm:text-xs font-medium">{news.date}</p>
                                                <p className="text-black text-base sm:text-xs font-medium flex items-center">{t(news.detail)} <HiArrowRight className='ml-1' /></p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
