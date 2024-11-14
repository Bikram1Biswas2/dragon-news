import React from 'react';
import { FaShareAlt, FaEye, FaStar } from 'react-icons/fa';
import moment from 'moment';

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <div>
            <h2 className="font-bold text-lg">{news.author.name}</h2>
            <p className="text-gray-500 text-sm">
              {moment(news.author.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">
        {news.title}
      </h3>

      {/* Image */}
      <img
        src={news.thumbnail_url}
        alt="News Thumbnail"
        className="w-full  object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-gray-500 text-sm mb-4">
        {moment(news.published_date).format("dddd, MMMM Do, YYYY")} | Tag Cloud Tags: {news.details}
      </p>

      <p className="text-red-500 font-semibold cursor-pointer">Read More</p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <FaStar className="text-orange-500" />
          <span className="ml-1 font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
