export default function About() {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-200">
      <h1 className="text-2xl font-bold text-center mb-8">О компании «Домашний Уют»</h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-bold mb-3 text-orange-500">Наша история</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Компания «Домашний Уют» была основана в 2010 году с целью предоставить 
            покупателям качественные товары для дома по доступным ценам. За годы работы 
            мы выросли из небольшого магазина в крупного поставщика товаров бытового 
            потребления, обслуживающего тысячи довольных клиентов по всей России.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-bold mb-3 text-orange-500">Наша миссия</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Сделать каждый дом комфортным и уютным, предлагая широкий ассортимент 
            качественных товаров для быта по справедливым ценам. Мы верим, что 
            домашний уют должен быть доступен каждому.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-bold mb-4 text-orange-500">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="text-xl mr-3">🎯</div>
              <div>
                <h3 className="font-bold mb-1 text-sm">Качество</h3>
                <p className="text-xs text-gray-400">
                  Только проверенные товары от надёжных поставщиков
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-xl mr-3">💝</div>
              <div>
                <h3 className="font-bold mb-1 text-sm">Честность</h3>
                <p className="text-xs text-gray-400">
                  Прозрачные цены и честные условия сотрудничества
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-xl mr-3">👥</div>
              <div>
                <h3 className="font-bold mb-1 text-sm">Забота о клиентах</h3>
                <p className="text-xs text-gray-400">
                  Индивидуальный подход и профессиональный сервис
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-xl mr-3">🌱</div>
              <div>
                <h3 className="font-bold mb-1 text-sm">Ответственность</h3>
                <p className="text-xs text-gray-400">
                  Развитие бизнеса с заботой об окружающей среде
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-bold mb-4 text-orange-500">Почему выбирают нас</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Широкий ассортимент товаров для дома и семьи</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Конкурентные цены и регулярные скидки</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Быстрая обработка и доставка заказов</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Гарантия качества на всю продукцию</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Профессиональная консультация и поддержка</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Удобная оплата и возврат товаров</span>
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg p-6 text-white text-center">
          <h2 className="text-lg font-bold mb-3">Свяжитесь с нами</h2>
          <p className="text-sm mb-4">
            У вас есть вопросы или предложения? Мы всегда рады общению!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            Написать нам
          </a>
        </section>
      </div>
    </div>
  );
}
