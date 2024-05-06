import UploadPic from '@/assets/upload-profile-picture-placeholder.svg';
import { FIREBASE_DB, FIREBASE_STORAGE } from '@/firebaseConfig';
import { useUploadPicturesToFirebase } from '@/hooks';
import { selectUser } from '@/lib/features/authSlice';
import { useAppSelector } from '@/lib/hooks';
import clsx from 'clsx';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface ImageUploadProps {
  url?: string;
}

const ImageLoadingPlaceholder = () => (
  <div className="text-white w-[140px] h-[140px] bg-gray-400 rounded-full m-auto flex items-center justify-center">
    <p>Loading...</p>
  </div>
);

export function ImageUpload({ url }: ImageUploadProps) {
  const [image, setImage] = useState(url || null);
  const ref = useRef<any>();
  const user = useAppSelector(selectUser);
  const t = useTranslations();
  const { uploadPicture, loading, url: downloadURL } = useUploadPicturesToFirebase();
  const uid = user?.id as string;

  const handleContianerClick = () => {
    if (image) {
      setImage(null);
      return;
    }
    ref.current.click();
  };

  const handleImageUpload = async (e: any) => {
    await uploadPicture(e.target.files[0], 'profile_pictures', uid);
    handleUpdateImageInFirestore();
  };

  const handleUpdateImageInFirestore = async () => {
    const url = await getDownloadURL(storageRef(FIREBASE_STORAGE, `profile_pictures/${uid}`));
    const userDoc = doc(FIREBASE_DB, 'users', uid);

    await updateDoc(userDoc, { profile_picture: url });
  };

  return (
    <div className="text-center animate hover:fade cursor-pointer" onClick={handleContianerClick}>
      <input type="file" accept=".jpg,.png,.jpeg" ref={ref} style={{ display: 'none' }} onChange={handleImageUpload} />
      {loading && <ImageLoadingPlaceholder />}
      {!loading && (
        <Image
          width={140}
          height={140}
          src={url ? url : downloadURL ? downloadURL : UploadPic}
          className={clsx('w-[140px] h-[140px] m-auto rounded-full object-cover')}
          alt="User profile"
        />
      )}
      <h1 className="text-sm font-semibold text-primary mt-2">
        {loading ? t('label.uploading') : downloadURL ? t('label.clickToRemove') : t('label.clickToUpload')}
      </h1>
    </div>
  );
}
