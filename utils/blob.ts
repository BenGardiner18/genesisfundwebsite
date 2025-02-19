import { put } from "@vercel/blob";

export async function uploadImage(file: File, folder: string) {
  try {
    const { url } = await put(`${folder}/${file.name}`, file, {
      access: 'public',
      addRandomSuffix: false // Keep original filename
    });
    return url;
  } catch (error) {
    console.error('Error uploading to blob storage:', error);
    throw error;
  }
}

export async function uploadImages(files: File[], folder: string) {
  const results = await Promise.all(
    files.map(file => uploadImage(file, folder))
  );
  return results;
} 