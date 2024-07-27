import React, {useState} from 'react';
import './PopularTopics.css';
import ArticlesSection from './ArticlesSection';
import {useNavigate} from "react-router-dom";

const articles = [
  { id:1, category: 'Family Holidays', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
  {  id:2,category: 'Beaches', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
  {  id:3,category: 'Adventure travel', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
    {  id:4,category: 'Art and culture', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
  {  id:5,category: 'Air travel', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
  {  id:6,category: 'Adventure travel', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
    {  id:7,category: 'Art and culture', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
  {  id:8,category: 'Air travel', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
  {  id:9,category: 'Explore', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
{  id:10,category: 'Family Holidays', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
  {  id:11,category: 'Beaches', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
  {  id:12,category: 'Explore', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
{  id:13,category: 'Beaches', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },
  {  id:14,category: 'Explore', date: '08/08/2024', title: 'Lorem ipsum dolor', content: 'Lorem ipsum dolor sit amet et delectus accommodare his.', image: '/assets/placeholder.jpeg' },

];
const ITEMS_PER_PAGE = 6;

const PopularTopics: React.FC = () => {
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCategoryClick = (category: string) => {
    setFilteredCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handleCardClick = (id: number) => {
    navigate(`/blog/${id}`); // Navigate to the blog page with the article id
  };

  const filteredArticles = filteredCategory
    ? articles.filter(article => article.category === filteredCategory)
    : articles;

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="popular-topics">
      <ArticlesSection onCategoryClick={handleCategoryClick} />
      <div className="topics-container">
        {currentArticles.map((article, index) => (
          <div className="topic-card" key={index} onClick={() => handleCardClick(article.id)}>
            <img src={article.image} alt={article.title} />
            <div className="card-content">
              <p>{article.date}</p>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={index + 1 === currentPage ? 'active' : ''}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PopularTopics;