import React, { useRef, useState } from 'react';
import UploadPic from '@/assets/upload-profile-picture-placeholder.svg';
import Image from 'next/image';
import { selectUser } from '@/lib/features/userSlice';
import { useAppSelector } from '@/lib/hooks';
import { UserInfo } from 'firebase/auth';
import { useUploadPicturesToFirebase } from '@/hooks';
import clsx from 'clsx';
import { ImageUploadingAnimation } from '@/components/animations';

interface ImageUploadProps {
  url?: string;
}

export function ImageUpload({ url }: ImageUploadProps) {
  const [image, setImage] = useState(url || null);
  const ref = useRef<any>();
  const user = useAppSelector(selectUser);
  const { uid } = user as UserInfo;

  const { uploadPicture, loading, url: imageUrl } = useUploadPicturesToFirebase();

  const handleContianerClick = () => {
    if (image) {
      setImage(null);
      return;
    }
    ref.current.click();
  };

  const handleImageLocally = async (e: any) => {
    setImage(e.target.files[0]);
    await uploadPicture(e.target.files[0], 'profile_pictures', uid);
  };

  return (
    <div className="text-center animate hover:fade cursor-pointer" onClick={handleContianerClick}>
      <input type="file" accept=".jpg,.png,.jpeg" ref={ref} style={{ display: 'none' }} onChange={handleImageLocally} />
      {loading ? (
        <ImageUploadingAnimation />
      ) : (
        <Image
          width={160}
          height={160}
          src={
            typeof image === 'string'
              ? image
              : image
                ? URL.createObjectURL(new Blob([image], { type: 'image/png+xml' }))
                : UploadPic
          }
          className={clsx('w-[140px] h-[140px] m-auto rounded-full object-cover')}
          alt="User profile"
        />
      )}
      <h1 className="text-sm font-semibold text-primary mt-2">
        {loading ? 'Uploading...' : image ? 'Click to remove' : 'Click to upload'}
      </h1>
    </div>
  );
}
