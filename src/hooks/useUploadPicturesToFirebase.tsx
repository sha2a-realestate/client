'use client';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { FIREBASE_STORAGE } from '@/firebaseConfig';
import { useState } from 'react';

export function useUploadPicturesToFirebase() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<any>(null);
  const [url, setUrl] = useState<string | null>(null);

  async function uploadPicture(file: any, folderName: string, fileName: string) {
    setLoading(true);
    const storageRef = ref(FIREBASE_STORAGE, `${folderName}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        setError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setLoading(false);
          setUrl(downloadURL);
        });
      }
    );
  }

  return { uploadPicture, url, progress, loading, error };
}
