import React from 'react';
import data from '../assets/data';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Detail = () => {
    const { id } = useParams();
    const newsItem = data().find(news => news.id === parseInt(id));

    if (!newsItem) {
        return <div className='w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5'>
            <p className='text-2xl font-medium text-red-500 text-center'>{t(yangilik_topilmadi)}</p>
        </div>
    };

    const { t } = useTranslation();

    return (
        <div className="w-full max-w-7xl sm:flex gap-x-16 justify-center mx-auto px-5">
            <div className='mb-7 space-y-5 sm:w-180% sm:mb-0'>
                <img src={newsItem.image} alt={newsItem.alt} className='w-full h-96 rounded-md' />
                <h3 className='text-2xl font-medium text-black'>{t(newsItem.title)}</h3>
                <p className='text-lg font-medium text-gray-500'>{newsItem.date}</p>
                <p className='text-lg font-sm text-black'>{t(newsItem.content)}</p>
            </div>
            <div className='w-auto'>
                <div className='mb-5'>
                    <h3 className='text-black text-2xl font-medium text-center sm:text-start'>
                        {t('latest_news')}
                    </h3>
                </div>
                <div>
                    <ul className='grid grid-cols-1 gap-y-4'>
                        {data().slice(0, 3).map((news) => (
                            <li key={news.id} className='bg-white grid lg:grid-cols-2 gap-6 shadow-lg rounded-md p-4'>
                                <div>
                                    <img className='w-full h-full rounded-md' src={news.image} alt={news.alt} />
                                </div>
                                <div className='flex flex-col justify-evenly space-y-7'>
                                    <h3 className="text-black text-sm font-medium">{t(news.title)}</h3>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-black text-xs font-medium">{news.date}</p>
                                        <Link to={`/Uzbekistan/${news.id}`} className="text-black text-xs font-medium">{t(news.detail)}</Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Detail;
