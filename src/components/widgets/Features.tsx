import { component$ } from "@builder.io/qwik";
import { IconResumable } from "../icons/IconResumable";
import { IconSerializable } from "../icons/IconSerializable";
import { IconProgressive } from "../icons/iconProgressive";
import { IconPerformance } from "../icons/IconPerformance";
import { IconSeo } from "../icons/IconSeo";
import { IconReactivity } from "../icons/IconReactivity";

export default component$(() => {
  const items = [
    [
      {
        title: "Resumable",
        description:
          "Elimina completamente il requisito dell'idratazione.",
        icon: <IconResumable />,
      },
      {
        title: "Serialization",
        description:
          "Le applicazioni Qwik possono essere serializzate in qualsiasi momento del loro ciclo di vita.",
        icon: <IconSerializable />,
      },
      {
        title: "Progressive",
        description:
          "Il principio di progressive consiste nello scaricare il codice in modo dinamico, in base alle esigenze dell'applicazione.",
        icon: <IconProgressive />,
      },
    ],
    [
      {
        title: "Performance Istantanee",
        description:
          "Una buona velocità della pagina migliora l'esperienza dell'utente (UI/UX) e aumenta i tassi di conversione.",
        icon: <IconPerformance />,
      },
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Le prestazioni sono un'aspetto fondamentale per l'indicizzazione sui motori di ricerca.",
        icon: <IconSeo />,
      },
      {
        title: "Reactivity",
        description:
          "La caratteristica di reattività in Qwik consente al framework di tenere traccia di quali componenti sono iscritti a quale stato.",
        icon: <IconReactivity />,
      },
    ],
  ];

  return (
    <section class="scroll-mt-16" id="features">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20">
        <div class="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
          <p class="text-base text-primary-600 dark:text-purple-200 font-semibold tracking-wide uppercase">
            Features
          </p>
          <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
            Qwik – il primo framework Resumable O(1)
          </h2>
          <p class="max-w-3xl mx-auto sm:text-center text-xl text-gray-600 dark:text-slate-400">
            Qwik è un framework web open source sviluppato da Miško Hevery, Manu Martinez Almeida e Adam Bradley, per la creazione di applicazioni web.
          </p>
        </div>
        <div class="grid mx-auto space-y-6 md:grid-cols-2 md:space-y-0">
          {items.map((subitems, index) => (
            <div key={index} class="space-y-8 sm:px-8">
              {subitems.map(({ title, description, icon }, index2) => (
                <div key={index2} class="flex flex-row max-w-md">
                  <div class="mb-4 mr-4">
                    <div class="text-white flex items-center justify-center w-12 h-12 rounded-full bg-secondary-500 dark:bg-secondary-700">
                      {icon}
                    </div>
                  </div>
                  <div>
                    <h3 class="mb-3 text-xl font-bold">{title}</h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
