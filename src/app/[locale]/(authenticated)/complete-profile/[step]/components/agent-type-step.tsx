import AgentOfferingIcon from '@/assets/agent-offering.svg';
import AgentSeekingIcon from '@/assets/agent-seeking.svg';
import { SubmitButton } from '@/components';
import { AgenTypesList, AgentType, Routes } from '@/constants';
import { selectUser } from '@/lib/features/userSlice';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from '@/navigation';
import { updateUserData } from '@/services/api/updateUserData';
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
        'cursor-pointer w-[120px] h-[120px] rounded-xl shadow-xl flex flex-col items-center justify-center gap-4 hover:bg-gray-50 transition-all ease-in-out duration-300',
        'md:w-[160px] md:h-[160px]',
        { 'bg-primary w-[140px] h-[140px] md:w-[175px] md:h-[175px] hover:bg-primary/85': isActiveType }
      )}
    >
      {type === 'seeking' && <Image src={AgentSeekingIcon} alt="Agent Type" width={60} height={60} />}
      {type === 'offering' && <Image src={AgentOfferingIcon} alt="Agent Type" width={60} height={60} />}
      <p className={clsx({ 'font-bold text-2xl text-white': isActiveType }, 'text-xl text-primary')}>
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
    await updateUserData({ data: { activeType, uid: user?.uid } });
    router.push(Routes.Dashboard.Index);
  };

  return (
    <div className="place-content-center flex flex-col items-stretch">
      <p className="font-semibold m-auto text-3xl">{t('label.agentTypeStepTitle')}</p>
      <div className="flex gap-6 m-auto my-12">
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
