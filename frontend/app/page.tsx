'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Item {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/items', {
        title,
        description,
      });
      setTitle('');
      setDescription('');
      fetchItems();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Oddo Full Stack App
            </h1>
            <p className="text-xl text-gray-600">
              Next.js + Python FastAPI + PostgreSQL
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Add New Item
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Create Item
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Items List
            </h2>
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600">Loading...</p>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No items yet. Create your first item above!
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-gray-400">
                          Created: {new Date(item.created_at).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

