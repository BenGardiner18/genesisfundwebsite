'use client';

import { useState } from 'react';
import { uploadImages } from '@/utils/blob';

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, folder: string) => {
    if (!e.target.files?.length) return;
    
    setUploading(true);
    try {
      const files = Array.from(e.target.files);
      const uploadedUrls = await uploadImages(files, folder);
      setUrls(prev => [...prev, ...uploadedUrls]);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Upload Images to Blob Storage</h1>
      
      <div className="space-y-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">VC Partner Logos</h2>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleUpload(e, 'vcs')}
            disabled={uploading}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">School Logos</h2>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleUpload(e, 'schools')}
            disabled={uploading}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        {uploading && (
          <div className="text-blue-600">
            Uploading...
          </div>
        )}

        {urls.length > 0 && (
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Uploaded URLs</h2>
            <ul className="space-y-2">
              {urls.map((url, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {url}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 