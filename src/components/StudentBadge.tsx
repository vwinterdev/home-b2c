export default function StudentBadge() {
  return (
    <div
      className="fixed right-3 bottom-6 z-50 select-none"
      aria-label="Автор работы"
    >
      <div className="rounded-full bg-white/10 text-gray-200 border border-white/15 shadow-lg backdrop-blur px-4 py-2 text-xs md:text-sm">
        Работу выполнил студент
        <span className="ml-1 font-semibold text-orange-300">Владислав Акулинин</span>
      </div>
    </div>
  );
}


