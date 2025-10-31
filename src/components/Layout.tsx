import { Outlet, Link } from 'react-router-dom';
import StudentBadge from './StudentBadge';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Header/Navigation */}
      <header className="bg-gray-800 border-b border-gray-700">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg font-bold text-orange-500">
              Домашний Уют
            </Link>
            <div className="flex gap-4 text-sm">
              <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                Главная
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                О компании
              </Link>
              <Link to="/catalog" className="text-gray-300 hover:text-orange-500 transition-colors">
                Каталог
              </Link>
              <Link to="/promotions" className="text-gray-300 hover:text-orange-500 transition-colors">
                Акции
              </Link>
              <Link to="/new-arrivals" className="text-gray-300 hover:text-orange-500 transition-colors">
                Новинки
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                Контакты
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-900">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 text-gray-300 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-base font-bold mb-3">Домашний Уют</h3>
              <p className="text-sm text-gray-400">
                Всё для вашего дома по доступным ценам
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Категории</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li>
                  <Link to="/catalog#kitchen" className="hover:text-white">
                    Товары для кухни
                  </Link>
                </li>
                <li>
                  <Link to="/catalog#bathroom" className="hover:text-white">
                    Товары для ванной
                  </Link>
                </li>
                <li>
                  <Link to="/catalog#cleaning" className="hover:text-white">
                    Уборка и хранение
                  </Link>
                </li>
                <li>
                  <Link to="/catalog#textile" className="hover:text-white">
                    Текстиль и декор
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Информация</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-white">
                    О компании
                  </Link>
                </li>
                <li>
                  <Link to="/promotions" className="hover:text-white">
                    Акции
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Контакты</h4>
              <p className="text-sm text-gray-400">
                Телефон: +7 (495) 123-45-67<br />
                Email: info@home-comfort.ru<br />
                Москва, ул. Примерная, д. 1
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            <p>&copy; 2024 Домашний Уют. Все права защищены.</p>
          </div>
        </div>
      </footer>
      <StudentBadge />
    </div>
  );
}

