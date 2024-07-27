import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPage.css'

const articles = [
  {
    id: 1,
    category: 'Family Holidays',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],
    quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',
    comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 2,
    category: 'Beaches',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],
    quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 3,
    category: 'Adventure travel',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],
    quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 4,
    category: 'Art and culture',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 5,
    category: 'Air travel',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 6,
    category: 'Adventure travel',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',
    comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 7,
    category: 'Art and culture',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 8,
    category: 'Air travel',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 9,
    category: 'Explore',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 10,
    category: 'Family Holidays',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 11,
    category: 'Beaches',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false }
    ]
  },
  {
    id: 12,
    category: 'Explore',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: false  }
    ]
  },
  {
    id: 13,
    category: 'Beaches',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  },
  {
    id: 14,
    category: 'Explore',
    date: '08/08/2024',
    title: 'Lorem ipsum dolor',
    content: 'Lorem ipsum dolor sit amet et delectus accommodare his.',
    mainimage: '/assets/mountain.avif',
    otherimages:["/assets/placeholder.jpeg","/assets/placeholder.jpeg"],
    quote:'Lorem ipsum dolor sit amet et delectus accommodare his.',
    comments: [
      { name: 'Jane Doe', comment: 'CYX XYSS', photo:"/assets/placeholder.jpeg", isVerified: true  }
    ]
  }
];

const BlogDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(article => article.id === parseInt(id, 10));

  if (!article) {
    return <div className="text-center mt-10 font-medium text-lg text-gray-700">Article not found</div>;
  }

  return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden my-10">
        <img className="w-full h-64 object-cover" src={article.mainimage} alt="Blog image" />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{article.title}</h1>
          <p className="text-gray-500 mb-4">{article.date}</p>
          <div className="prose prose-lg max-w-none">
            <p>{article.content}</p>
          </div>
          {article.otherimages.map((image, index) => (
            <img key={index} src={image} alt={`Detail ${index}`} className="mt-6 rounded-lg shadow-md" />
          ))}
          <blockquote className="italic border-l-4 border-blue-500 pl-4 my-6 text-gray-700">"{article.quote}"</blockquote>
        </div>
      </div>
  );
};

export default BlogDetailsPage;