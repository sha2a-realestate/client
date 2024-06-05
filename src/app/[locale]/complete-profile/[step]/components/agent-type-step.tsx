'use client';
import AgentOfferingIcon from '@/assets/agent-offering.svg';
import AgentSeekingIcon from '@/assets/agent-seeking.svg';
import { SubmitButton } from '@/components/form';
import { AgenTypesList, AgentType, Routes } from '@/constants';
import { selectUser } from '@/lib/features/authSlice';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';
// import { updateUserData } from '@/services/api/updateUserData';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const AgentTypeCard = ({
  type,
  activeType: isActiveType,
  setActiveType
}: {
  activeType: boolean;
  type: AgentType;
  setActiveType: (agentType: AgentType) => void;
}) => {
  const t = useTranslations();
  return (
    <div
      onClick={() => setActiveType(type)}
      className={clsx(
        'flex h-[120px] w-[120px] cursor-pointer flex-col items-center justify-center gap-4 rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-50',
        'md:h-[160px] md:w-[160px]',
        { 'h-[140px] w-[140px] bg-primary hover:bg-primary/85 md:h-[175px] md:w-[175px]': isActiveType }
      )}
    >
      {type === 'seeking' && <Image src={AgentSeekingIcon} alt="Agent Type" width={60} height={60} />}
      {type === 'offering' && <Image src={AgentOfferingIcon} alt="Agent Type" width={60} height={60} />}
      <p className={clsx({ 'text-2xl font-bold text-white': isActiveType }, 'text-xl text-primary')}>
        {t(`label.${type}`)}
      </p>
    </div>
  );
};

interface AgentTypeFormProps {}

export function AgentTypeStep({}: AgentTypeFormProps) {
  const [activeType, setActiveType] = useState<AgentType>('seeking');
  const t = useTranslations();
  const router = useRouter();
  const user = useAppSelector(selectUser);

  const handleActiveAgentTypeChange = (agentType: AgentType) => {
    setActiveType(agentType);
  };

  const handleSubmit = async () => {
    // await updateUserData({ data: { agentType: activeType }, uid: user?.uid });
    router.push(Routes.Home);
  };

  return (
    <div className="flex flex-col place-content-center items-stretch">
      <p className="m-auto text-3xl font-semibold">{t('label.agentTypeStepTitle')}</p>
      <div className="m-auto my-12 flex gap-6">
        {AgenTypesList.map((agentType) => (
          <AgentTypeCard
            type={agentType}
            setActiveType={handleActiveAgentTypeChange}
            activeType={activeType === agentType}
            key={agentType}
          />
        ))}
      </div>
      <SubmitButton onClick={handleSubmit} title={t('label.next')} />
    </div>
  );
}
