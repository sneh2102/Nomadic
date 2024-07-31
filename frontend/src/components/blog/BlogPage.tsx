import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/BlogPage.css'

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
const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-56 object-cover" src={article.mainimage} alt="Blog image" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{article.date}</p>
              <p className="text-gray-700 mb-6">{article.content.slice(0, 100)}...</p>
              <Link to={`/blog/${article.id}`} className="text-blue-500 hover:text-blue-600 transition duration-300">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;