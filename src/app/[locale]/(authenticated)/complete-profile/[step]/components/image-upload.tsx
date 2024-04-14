import UploadPic from '@/assets/upload-profile-picture-placeholder.svg';
import { ImageUploadingAnimation } from '@/components/animations';
import { useUploadPicturesToFirebase } from '@/hooks';
import { selectUser } from '@/lib/features/userSlice';
import { useAppSelector } from '@/lib/hooks';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface ImageUploadProps {
  url?: string;
}

export function ImageUpload({ url }: ImageUploadProps) {
  const [image, setImage] = useState(url || null);
  const ref = useRef<any>();
  const user = useAppSelector(selectUser);
  const t = useTranslations();
  const { uploadPicture, loading, url: downloadURL } = useUploadPicturesToFirebase();

  const handleContianerClick = () => {
    if (image) {
      setImage(null);
      return;
    }
    ref.current.click();
  };

  const handleImageLocally = async (e: any) => {
    await uploadPicture(e.target.files[0], 'profile_pictures', user?.uid as string);
  };

  return (
    <div className="text-center animate hover:fade cursor-pointer" onClick={handleContianerClick}>
      <input type="file" accept=".jpg,.png,.jpeg" ref={ref} style={{ display: 'none' }} onChange={handleImageLocally} />
      {loading && <ImageUploadingAnimation />}
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
