export default function NewArrivals() {
  const newItems = [
    {
      name: 'Смарт-кастрюли с антипригарным покрытием',
      category: 'Товары для кухни',
      image: '🍳',
      description: 'Инновационные кастрюли с керамическим покрытием',
      price: '2,490₽',
    },
    {
      name: 'Органайзеры для ванной комнаты',
      category: 'Товары для ванной',
      image: '🚿',
      description: 'Функциональные системы хранения из влагостойкого пластика',
      price: '890₽',
    },
    {
      name: 'Экологичные средства для уборки',
      category: 'Уборка и хранение',
      image: '🌿',
      description: 'Биоразлагаемые чистящие средства без вредных химикатов',
      price: '450₽',
    },
    {
      name: 'Перкалевое постельное бельё',
      category: 'Текстиль и декор',
      image: '🛏️',
      description: 'Премиальное бельё из натурального хлопка',
      price: '3,990₽',
    },
    {
      name: 'Умные контейнеры для хранения',
      category: 'Уборка и хранение',
      image: '📦',
      description: 'Герметичные контейнеры с датчиками свежести',
      price: '1,290₽',
    },
    {
      name: 'Цифровые термометры для воды',
      category: 'Товары для ванной',
      image: '🌡️',
      description: 'Точные термометры с LED-дисплеем',
      price: '690₽',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 text-gray-200">
      <h1 className="text-2xl font-bold text-center mb-4">Новинки каталога</h1>
      
      <p className="text-center text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
        Откройте для себя последние добавления в нашем каталоге. Каждую неделю 
        мы пополняем ассортимент интересными и качественными товарами для вашего дома.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {newItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-orange-500 transition-all group"
          >
            <div className="bg-gray-900 p-8 text-center">
              <div className="text-6xl">{item.image}</div>
            </div>
            <div className="p-4">
              <span className="text-xs text-orange-500 font-semibold">
                {item.category}
              </span>
              <h3 className="text-base font-bold mt-1 mb-2 group-hover:text-orange-500">
                {item.name}
              </h3>
              <p className="text-xs text-gray-400 mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-orange-500">
                  {item.price}
                </span>
                <button className="bg-orange-600 text-white px-3 py-1.5 rounded-lg hover:bg-orange-700 transition-colors text-xs">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-lg font-bold mb-3">Не пропустите обновления!</h2>
        <p className="text-sm mb-4 opacity-90">
          Подпишитесь на нашу рассылку и получайте уведомления о новых товарах 
          прямо на почту. Будьте первыми, кто узнает о новинках!
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Ваш email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900 text-sm"
          />
          <button className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm">
            Подписаться
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-400 mb-4">
          Интересует полный каталог? Перейдите к просмотру всех товаров
        </p>
        <a
          href="/catalog"
          className="inline-block bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 transition-colors text-sm"
        >
          Перейти в каталог
        </a>
      </div>
    </div>
  );
}
