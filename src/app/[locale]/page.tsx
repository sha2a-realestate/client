import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      {t("msg")}
    </main>
  );
}
