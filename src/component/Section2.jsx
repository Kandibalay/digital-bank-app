import React from 'react';

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      author: 'Claire Robinson',
      title: 'Receive money in any currency with no fees',
      excerpt:
        'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...',
      image: '/images/article-currency.jpg',
    },
    {
      id: 2,
      author: 'Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      excerpt:
        'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...',
      image: '',
    },
    {
      id: 3,
      author: 'Wilson Hutton',
      title: 'Take your Easybank card wherever you go',
      excerpt:
        'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...',
      image: '',
    },
    {
      id: 4,
      author: 'Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      excerpt:
        'Stay informed with the latest insights and updates from our team. From smart financial tips to exciting product announcements, our curated articles are designed to help you get the most out of your experience. Whether you are managing money on the go or exploring new features, there is something here for everyone.',
      image: '',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
        Latest Articles
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">By {article.author}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-green-500 cursor-pointer transition">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
