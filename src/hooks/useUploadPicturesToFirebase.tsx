'use client';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { FIREBASE_STORAGE } from '@/firebaseConfig';
import { useState } from 'react';

export function useUploadPicturesToFirebase(): [
  (file: any, folderName: string, fileName: string) => void,
  string | null,
  number,
  any
] {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<any>(null);
  const [url, setUrl] = useState<string | null>(null);

  async function storePicturesInFirebase(file: any, folderName: string, fileName: string) {
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
        //   reject(error);
        setError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // resolve(downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  }

  return [storePicturesInFirebase, url, progress, error];
}
