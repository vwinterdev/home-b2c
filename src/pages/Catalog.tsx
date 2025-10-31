export default function Catalog() {
  const categories = [
    {
      id: 'kitchen',
      name: 'Товары для кухни',
      icon: '🍳',
      color: 'orange',
      items: [
        { name: 'Посуда и кастрюли', image: '🔪' },
        { name: 'Столовые приборы', image: '🍴' },
        { name: 'Хранение продуктов', image: '🥫' },
        { name: 'Текстиль для кухни', image: '🧺' },
      ],
    },
    {
      id: 'bathroom',
      name: 'Товары для ванной',
      icon: '🚿',
      color: 'blue',
      items: [
        { name: 'Полотенца', image: '🛁' },
        { name: 'Косметика', image: '🧴' },
        { name: 'Аксессуары', image: '🧼' },
        { name: 'Организация пространства', image: '🗂️' },
      ],
    },
    {
      id: 'cleaning',
      name: 'Уборка и хранение',
      icon: '🧹',
      color: 'green',
      items: [
        { name: 'Моющие средства', image: '🧽' },
        { name: 'Щётки и губки', image: '🧯' },
        { name: 'Корзины и контейнеры', image: '📦' },
        { name: 'Системы хранения', image: '🗄️' },
      ],
    },
    {
      id: 'textile',
      name: 'Текстиль и декор',
      icon: '🏠',
      color: 'pink',
      items: [
        { name: 'Постельное бельё', image: '🛏️' },
        { name: 'Шторы', image: '🪟' },
        { name: 'Ковры и коврики', image: '🧵' },
        { name: 'Декор для дома', image: '🖼️' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 text-gray-200">
      <h1 className="text-2xl font-bold text-center mb-8">Каталог товаров</h1>
      
      <div className="space-y-8">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">{category.icon}</div>
              <h2 className="text-xl font-bold">{category.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-lg p-4 hover:border-orange-500 transition-all cursor-pointer bg-gray-900"
                >
                  <div className="text-4xl text-center mb-3">{item.image}</div>
                  <h3 className="text-sm font-semibold text-center">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
