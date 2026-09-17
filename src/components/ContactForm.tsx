import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { ArrowUpRight } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
  botcheck?: boolean;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const accessKey = "708e178e-4b15-4f84-92d9-45010150f81a"; // ← замени на свой ключ

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "artteam",
      subject: "Новая заявка с artteam-dev.ru",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      {/* Honeypot — отдельное поле, отдельное имя */}
      <input
        type="checkbox"
        id="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        style={{ display: "none" }}
        {...register("botcheck")}
      />

      {/* Имя */}
      <div>
        <input
          type="text"
          placeholder="Ваше имя"
          autoComplete="name"
          {...register("name", { required: "Введите имя" })}
          className="w-full rounded-[6px] px-4 py-3
                     bg-[rgba(255,255,255,0.02)]
                     border border-[rgba(255,255,255,0.08)]
                     text-mist text-[14px]
                     placeholder:text-fog
                     focus:outline-none focus:border-mist
                     transition-colors"
        />
        {errors.name && (
          <p className="mt-1 text-[11px] text-coral">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email для связи"
          autoComplete="email"
          {...register("email", {
            required: "Введите email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Некорректный email",
            },
          })}
          className="w-full rounded-[6px] px-4 py-3
                     bg-[rgba(255,255,255,0.02)]
                     border border-[rgba(255,255,255,0.08)]
                     text-mist text-[14px]
                     placeholder:text-fog
                     focus:outline-none focus:border-mist
                     transition-colors"
        />
        {errors.email && (
          <p className="mt-1 text-[11px] text-coral">{errors.email.message}</p>
        )}
      </div>

      {/* Сообщение */}
      <div>
        <textarea
          placeholder="Расскажите о проекте"
          rows={4}
          {...register("message", { required: "Напишите пару слов о задаче" })}
          className="w-full rounded-[6px] px-4 py-3
                     bg-[rgba(255,255,255,0.02)]
                     border border-[rgba(255,255,255,0.08)]
                     text-mist text-[14px]
                     placeholder:text-fog
                     focus:outline-none focus:border-mist
                     transition-colors resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-[11px] text-coral">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Кнопка */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          group inline-flex items-center justify-center gap-2
          w-full
          bg-acid text-void
          rounded-[6px] px-4 py-3
          text-[14px] font-[510] tracking-[-0.011em]
          hover:brightness-95 transition
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {isSubmitting ? (
          "Отправка..."
        ) : (
          <>
            Обсудить проект
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </>
        )}
      </button>

      {/* Сообщение об успехе / ошибке */}
      {result && (
        <p
          className={`text-[13px] text-center ${
            isSuccess ? "text-pulse" : "text-coral"
          }`}
        >
          {result}
        </p>
      )}
    </form>
  );
}
