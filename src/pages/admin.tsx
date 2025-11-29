import { useEffect, useState } from 'react';

const Admin = () => {
  const [page, setPage] = useState('home');
  const [form, setForm] = useState({
    background: '',
    image: '',
    title1: '',
    title2: '',
    text: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`/content/${page}.json`)
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch(() =>
        setForm({
          background: '',
          image: '',
          title1: '',
          title2: '',
          text: '',
        }),
      );
  }, [page]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setStatus('Сохраняем...');
    const res = await fetch('/api/save-content-github', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page, data: form }),
    });

    if (res.ok) {
      setStatus('✅ Сохранено в GitHub');
    } else {
      const err = await res.json();
      setStatus(`❌ Ошибка: ${err.error}`);
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-4 p-8">
      <h1 className="text-2xl font-bold">Универсальная админка</h1>

      <select
        value={page}
        onChange={(e) => setPage(e.target.value)}
        className="w-full border p-2"
      >
        <option value="home">Главная</option>
        <option value="news">Новости</option>
        <option value="contacts">Контакты</option>
      </select>

      <input
        type="text"
        value={form.background}
        onChange={(e) => handleChange('background', e.target.value)}
        placeholder="Фоновая картинка (URL)"
        className="w-full border p-2"
      />
      <input
        type="text"
        value={form.image}
        onChange={(e) => handleChange('image', e.target.value)}
        placeholder="Картинка (URL)"
        className="w-full border p-2"
      />
      <input
        type="text"
        value={form.title1}
        onChange={(e) => handleChange('title1', e.target.value)}
        placeholder="Заголовок 1"
        className="w-full border p-2"
      />
      <input
        type="text"
        value={form.title2}
        onChange={(e) => handleChange('title2', e.target.value)}
        placeholder="Заголовок 2"
        className="w-full border p-2"
      />
      <textarea
        value={form.text}
        onChange={(e) => handleChange('text', e.target.value)}
        placeholder="Текст"
        className="h-32 w-full border p-2"
      />

      <button
        onClick={handleSave}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        💾 Сохранить
      </button>
      <div className="mt-2 text-sm text-gray-700">{status}</div>
    </div>
  );
};

export default Admin;
