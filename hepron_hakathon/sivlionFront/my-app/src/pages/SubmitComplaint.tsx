import ComplaintForm from "@/components/ComplaintForm";
import { useApp } from "@/context/AppContext";

const SubmitComplaint = () => {
  const { t } = useApp();

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-lg text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{t("form.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("form.subtitle")}</p>
      </div>
      <ComplaintForm />
    </div>
  );
};

export default SubmitComplaint;
