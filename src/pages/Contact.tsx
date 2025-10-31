import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-10 text-gray-200">
      <h1 className="text-2xl font-bold text-center mb-8">Свяжитесь с нами</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h2 className="text-lg font-bold mb-4">Наши контакты</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-xl mr-3">📍</div>
                <div>
                  <h3 className="font-bold mb-1 text-sm">Адрес</h3>
                  <p className="text-xs text-gray-400">
                    Москва, ул. Примерная, д. 1<br />
                    Офис 101, 1 этаж
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-xl mr-3">📞</div>
                <div>
                  <h3 className="font-bold mb-1 text-sm">Телефон</h3>
                  <p className="text-xs text-gray-400">
                    +7 (495) 123-45-67<br />
                    Пн-Пт: 9:00 - 20:00
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-xl mr-3">✉️</div>
                <div>
                  <h3 className="font-bold mb-1 text-sm">Email</h3>
                  <p className="text-xs text-gray-400">
                    info@home-comfort.ru<br />
                    support@home-comfort.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-xl mr-3">⏰</div>
                <div>
                  <h3 className="font-bold mb-1 text-sm">Режим работы</h3>
                  <p className="text-xs text-gray-400">
                    Понедельник - Пятница: 9:00 - 20:00<br />
                    Суббота: 10:00 - 18:00<br />
                    Воскресенье: выходной
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-3">Мы в социальных сетях</h2>
            <div className="flex gap-3">
              <a href="#" className="text-3xl hover:scale-110 transition-transform">
                📘
              </a>
              <a href="#" className="text-3xl hover:scale-110 transition-transform">
                📷
              </a>
              <a href="#" className="text-3xl hover:scale-110 transition-transform">
                📺
              </a>
              <a href="#" className="text-3xl hover:scale-110 transition-transform">
                💬
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-lg font-bold mb-4">Форма обратной связи</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-xs font-medium mb-1">
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-900 text-white text-sm"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-900 text-white text-sm"
                placeholder="ivan@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-medium mb-1">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-900 text-white text-sm"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium mb-1">
                Сообщение *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-900 text-white text-sm resize-none"
                placeholder="Ваше сообщение..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
