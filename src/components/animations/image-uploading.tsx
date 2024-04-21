import animationData from '@/assets/lotties/image-loading.json';
import Lottie from 'lottie-react';

export function ImageUploadingAnimation() {
  return (
    <Lottie
      animationData={animationData}
      className="m-auto w-[180px] h-[180px] flex justify-center items-center"
      loop={true}
    />
  );
}
