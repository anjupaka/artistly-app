'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '@components/ui/Header';
import { useState } from 'react';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  fee: yup.string().required('Fee is required'),
  location: yup.string().required('Location is required'),
});

const categories = ['Singers', 'Dancers', 'DJs', 'Speakers'];
const languages = ['English', 'Hindi', 'Tamil', 'Telugu'];

export default function OnboardingPage() {
  const [image, setImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      bio: '',
      category: [],
      languages: [],
      fee: '',
      location: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log({
      ...data,
      imageName: image ? image.name : 'No image uploaded',
    });
    alert(`🎉 Artist "${data.name}" submitted! Check console.`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100">
      <Header />
      <div className="max-w-3xl mx-auto py-12 px-6">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-10 border border-indigo-100">
          <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10 tracking-tight">
            🎤 Artist Onboarding
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-semibold text-indigo-600 mb-1">Name *</label>
              <input
                type="text"
                {...register('name')}
                className="w-full p-3 rounded-xl border border-indigo-300 bg-white/60 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <p className="text-sm text-red-500 mt-1">{errors.name?.message}</p>
            </div>

            {/* Bio */}
            <div>
              <label className="block font-semibold text-indigo-600 mb-1">Bio *</label>
              <textarea
                {...register('bio')}
                rows={3}
                className="w-full p-3 rounded-xl border border-indigo-300 bg-white/60 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <p className="text-sm text-red-500 mt-1">{errors.bio?.message}</p>
            </div>

            {/* Categories */}
            <div>
              <label className="block font-semibold text-indigo-600 mb-2">Category *</label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center bg-indigo-50 hover:bg-indigo-100 transition rounded-xl px-3 py-2 border border-indigo-200"
                  >
                    <input type="checkbox" value={cat} {...register('category')} className="mr-2" />
                    {cat}
                  </label>
                ))}
              </div>
              <p className="text-sm text-red-500 mt-1">{errors.category?.message}</p>
            </div>

            {/* Languages */}
            <div>
              <label className="block font-semibold text-indigo-600 mb-2">Languages Spoken *</label>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <label
                    key={lang}
                    className="flex items-center bg-purple-50 hover:bg-purple-100 transition rounded-xl px-3 py-2 border border-purple-200"
                  >
                    <input type="checkbox" value={lang} {...register('languages')} className="mr-2" />
                    {lang}
                  </label>
                ))}
              </div>
              <p className="text-sm text-red-500 mt-1">{errors.languages?.message}</p>
            </div>

            {/* Fee */}
            <div>
              <label className="block font-semibold text-indigo-600 mb-1">Fee Range *</label>
              <select
                {...register('fee')}
                className="w-full p-3 rounded-xl border border-indigo-300 bg-white/60 focus:ring-2 focus:ring-indigo-400 outline-none"
              >
                <option value="">Select Fee</option>
                <option value="Below ₹50,000">Below ₹50,000</option>
                <option value="₹50,000–₹100,000">₹50,000–₹100,000</option>
                <option value="₹100,000–₹200,000">₹100,000–₹200,000</option>
                <option value="Above ₹200,000">Above ₹200,000</option>
              </select>
              <p className="text-sm text-red-500 mt-1">{errors.fee?.message}</p>
            </div>

            {/* Location */}
            <div>
              <label className="block font-semibold text-indigo-600 mb-1">Location *</label>
              <input
                type="text"
                {...register('location')}
                className="w-full p-3 rounded-xl border border-indigo-300 bg-white/60 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <p className="text-sm text-red-500 mt-1">{errors.location?.message}</p>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block font-semibold text-indigo-600 mb-1">Profile Image (optional)</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="bg-white/70 p-2 rounded-lg border border-gray-300"
              />
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-bold tracking-wide shadow-xl transition transform hover:scale-105"
              >
                Submit Artist 🎨
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
