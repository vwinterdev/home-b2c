import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-gray-200">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-3">
                Добро пожаловать в «Домашний Уют»!
              </h1>
              <p className="text-base mb-6">
                Всё для вашего дома по доступным ценам
              </p>
              <Link
                to="/catalog"
                className="inline-block bg-white text-orange-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Перейти в каталог
              </Link>
            </div>
            <div className="text-6xl text-center">🏠</div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-10 mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-center">Специальные предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="text-base font-bold mb-2">Распродажа</h3>
              <p className="text-sm text-gray-300 mb-3">
                Скидки до 50% на товары для кухни
              </p>
              <Link
                to="/promotions"
                className="text-orange-400 font-semibold hover:text-orange-500 text-sm"
              >
                Подробнее →
              </Link>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-base font-bold mb-2">Новинки</h3>
              <p className="text-sm text-gray-300 mb-3">
                Лучшие товары для вашего дома
              </p>
              <Link
                to="/new-arrivals"
                className="text-orange-400 font-semibold hover:text-orange-500 text-sm"
              >
                Смотреть →
              </Link>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="text-base font-bold mb-2">Бесплатная доставка</h3>
              <p className="text-sm text-gray-300 mb-3">
                При заказе от 3000₽
              </p>
              <Link
                to="/catalog"
                className="text-orange-400 font-semibold hover:text-orange-500 text-sm"
              >
                Заказать →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-center">Наши категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/catalog#kitchen"
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500 transition-all group"
            >
              <div className="bg-orange-900/30 p-6 text-center">
                <div className="text-5xl mb-3">🍳</div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold mb-1 group-hover:text-orange-500">
                  Товары для кухни
                </h3>
                <p className="text-sm text-gray-400">Всё для готовки и сервировки</p>
              </div>
            </Link>
            <Link
              to="/catalog#bathroom"
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all group"
            >
              <div className="bg-blue-900/30 p-6 text-center">
                <div className="text-5xl mb-3">🚿</div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold mb-1 group-hover:text-blue-500">
                  Товары для ванной
                </h3>
                <p className="text-sm text-gray-400">Гигиена и комфорт</p>
              </div>
            </Link>
            <Link
              to="/catalog#cleaning"
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-all group"
            >
              <div className="bg-green-900/30 p-6 text-center">
                <div className="text-5xl mb-3">🧹</div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold mb-1 group-hover:text-green-500">
                  Уборка и хранение
                </h3>
                <p className="text-sm text-gray-400">Чистота и порядок</p>
              </div>
            </Link>
            <Link
              to="/catalog#textile"
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-pink-500 transition-all group"
            >
              <div className="bg-pink-900/30 p-6 text-center">
                <div className="text-5xl mb-3">🏠</div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold mb-1 group-hover:text-pink-500">
                  Текстиль и декор
                </h3>
                <p className="text-sm text-gray-400">Уют и стиль</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 mb-8 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-center">Домашний Уют в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">5000+</div>
              <div className="text-sm text-gray-400">Товаров в каталоге</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">15к+</div>
              <div className="text-sm text-gray-400">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">10</div>
              <div className="text-sm text-gray-400">Лет на рынке</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Техподдержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-10 mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-center">Почему выбирают нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-5 text-center border border-gray-700">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-base font-bold mb-2">Доступные цены</h3>
              <p className="text-sm text-gray-300">
                Лучшее соотношение цены и качества, регулярные акции и скидки до 70%
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-5 text-center border border-gray-700">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="text-base font-bold mb-2">Быстрая доставка</h3>
              <p className="text-sm text-gray-300">
                Отправляем заказы в день оформления. Доставка по всей России от 2 дней
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-5 text-center border border-gray-700">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-base font-bold mb-2">Гарантия качества</h3>
              <p className="text-sm text-gray-300">
                Только проверенные производители, официальная гарантия, удобный возврат
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-10 mb-8 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-center">Популярные товары</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-all cursor-pointer">
              <div className="text-5xl text-center mb-3">🍽️</div>
              <h3 className="text-sm font-bold mb-2">Набор посуды Premium</h3>
              <p className="text-xs text-gray-400 mb-3">23 предмета, антипригарное покрытие</p>
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-orange-500">4,990₽</span>
                <span className="text-xs text-gray-500 line-through">7,990₽</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-all cursor-pointer">
              <div className="text-5xl text-center mb-3">🧴</div>
              <h3 className="text-sm font-bold mb-2">Набор средств для уборки</h3>
              <p className="text-xs text-gray-400 mb-3">Экологичные, без хлора</p>
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-orange-500">890₽</span>
                <span className="text-xs text-gray-500 line-through">1,290₽</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-all cursor-pointer">
              <div className="text-5xl text-center mb-3">🛏️</div>
              <h3 className="text-sm font-bold mb-2">Перкалевое бельё 1.5</h3>
              <p className="text-xs text-gray-400 mb-3">Натуральный хлопок 200 TC</p>
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-orange-500">2,490₽</span>
                <span className="text-xs text-gray-500 line-through">3,990₽</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-orange-500 transition-all cursor-pointer">
              <div className="text-5xl text-center mb-3">🗄️</div>
              <h3 className="text-sm font-bold mb-2">Система хранения 6 шт</h3>
              <p className="text-xs text-gray-400 mb-3">Герметичные контейнеры</p>
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-orange-500">1,690₽</span>
                <span className="text-xs text-gray-500 line-through">2,490₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-10 mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-center">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <div className="flex mb-3">
                <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                "Отличный магазин! Заказал посуду, привезли быстро, качество на высоте. Рекомендую!"
              </p>
              <div className="text-xs text-gray-400">— Иван П., Москва</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <div className="flex mb-3">
                <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                "Новинки появляются регулярно, цены адекватные. Оформили заказ на 5000₽ - доставка бесплатная!"
              </p>
              <div className="text-xs text-gray-400">— Мария С., СПб</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
              <div className="flex mb-3">
                <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                "Муж доволен набором инструментов, я - новым постельным бельём. Будем заказывать ещё!"
              </p>
              <div className="text-xs text-gray-400">— Елена К., Казань</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Готовы начать покупки?</h2>
          <p className="text-base mb-6">Выбирайте качество, экономите деньги!</p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/catalog"
              className="bg-white text-orange-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              Смотреть каталог
            </Link>
            <Link
              to="/promotions"
              className="bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-800 transition-colors text-sm"
            >
              Все акции
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
