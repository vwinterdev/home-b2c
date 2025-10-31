export default function Promotions() {
  const promotions = [
    {
      title: 'Скидка 50% на товары для кухни',
      description: 'Вся посуда и кухонные принадлежности со скидкой 50%',
      discount: '50%',
      validUntil: 'до 31 декабря 2024',
      color: 'orange',
    },
    {
      title: 'Распродажа текстиля',
      description: 'Постельное бельё, подушки и одеяла со скидкой 40%',
      discount: '40%',
      validUntil: 'до 15 января 2025',
      color: 'pink',
    },
    {
      title: 'Бесплатная доставка',
      description: 'При заказе от 3000₽ доставка бесплатно',
      discount: 'FREE',
      validUntil: 'постоянно',
      color: 'blue',
    },
    {
      title: 'Новогодние скидки',
      description: 'Специальные предложения на праздничный ассортимент',
      discount: '30%',
      validUntil: 'до 10 января 2025',
      color: 'green',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 text-gray-200">
      <h1 className="text-2xl font-bold text-center mb-8">Акции и скидки</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-${promo.color}-600 to-${promo.color}-800 text-white rounded-lg p-6 border border-${promo.color}-700`}
          >
            <div className="text-4xl font-bold mb-3">{promo.discount}</div>
            <h2 className="text-lg font-bold mb-3">{promo.title}</h2>
            <p className="text-sm mb-3 opacity-90">{promo.description}</p>
            <div className="text-xs opacity-75">Действует {promo.validUntil}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 max-w-3xl mx-auto mb-8">
        <h2 className="text-lg font-bold mb-4 text-center">Почему стоит воспользоваться акциями?</h2>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-xl mr-3">💰</span>
            <div>
              <h3 className="font-bold mb-1 text-sm">Экономия средств</h3>
              <p className="text-xs text-gray-400">
                Покупайте товары по сниженным ценам и экономьте бюджет семьи
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-xl mr-3">🎯</span>
            <div>
              <h3 className="font-bold mb-1 text-sm">Качественный товар</h3>
              <p className="text-xs text-gray-400">
                Скидки не означают снижение качества — только проверенная продукция
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-xl mr-3">⚡</span>
            <div>
              <h3 className="font-bold mb-1 text-sm">Ограниченное время</h3>
              <p className="text-xs text-gray-400">
                Акции действуют ограниченное время — не упустите возможность
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-400 mb-4">
          Хотите узнать о новых акциях первыми?
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 transition-colors text-sm"
        >
          Подписаться на рассылку
        </a>
      </div>
    </div>
  );
}
