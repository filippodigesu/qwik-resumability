import { component$ } from "@builder.io/qwik";
import { IconArrowDownRight } from "../icons/IconArrowDownRight";

export default component$(() => {
  const items = [
    [
      {
        question: "Perché un altro framework?",
        answer: `La risposta breve è che Qwik risolve un problema che altri framework non possono risolvere. Qwik offre prestazioni di avvio istantanee, indipendentemente dalla complessità dell'applicazione. Le applicazioni Qwik forniscono la stessa quantità di JS iniziale, indipendentemente dalla quantità di componenti.`,
      },
      {
        question: "Che cos'è Qwik City?",
        answer: `Qwik City è solo un insieme di API aggiuntive rispetto a Qwik. Si pensi a Qwik come al nucleo centrale e a City come alle API aggiuntive (routing, caricamento dei dati, endpoint, ecc.). Lo chiamiamo un meta-framework per Qwik. Qwik City è per Qwik quello che Next.js è per React, Nuxt per Vue o SvelteKit per Svelte.`,
      },
      {
        question: "Qwik scarica JS quando l'utente interagisce?",
        answer: `No. In produzione, Qwik utilizza molte informazioni generate durante l'SSR (Server-Side Rendering) per iniziare a pre-popolare la cache con i soli bit di interattività disponibili nella pagina corrente il prima possibile. In questo modo, quando l'utente fa clic o interagisce, il JS è già nella cache.`,
      },
    ],
    [
      {
        question: "Le app Qwik sono lente sulle reti lente?",
        answer: `Niente affatto! Grazie allo Speculative Module Fetching, le applicazioni Qwik non risentono della lentezza delle reti rispetto ad altri framework. Anzi, grazie al bundling a grana fine e alla resumability, le app Qwik possono diventare interattive con molto meno JS, rendendole di fatto più veloci sulle reti lente.`,
      },
      {
        question: "Qwik genera troppi file piccoli?",
        answer: `In modalità dev Qwik genera molti file di piccole dimensioni perché utilizza il server Dev Vite.js, ma in modalità di produzione Qwik raggruppa i file in modo più efficiente.`,
      },
      {
        question:
          "In quali linguaggi è scritto Qwik?",
        answer: `La maggior parte di Qwik è scritta in TypeScript, un superset di JavaScript che aggiunge la tipizzazione statica opzionale e altre caratteristiche. Tuttavia, il compilatore (o ottimizzatore) di Qwik è scritto in Rust, un linguaggio molto veloce ed efficiente in termini di memoria.`,
      },
    ],
  ];

  return (
    <section class="border-t border-gray-200 dark:border-slate-800">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <p class="text-base text-primary-600 dark:text-purple-200 font-semibold tracking-wide uppercase">
              FAQs
            </p>
            <h2 class="max-w-lg mb-4 text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto font-heading">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div class="max-w-screen-xl sm:mx-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 md:grid-cols-2">
            {items.map((subitems, index) => (
              <div key={index} class="space-y-8">
                {subitems.map(({ question, answer }, index2) => (
                  <div key={index2}>
                    <h3 class="mb-4 text-xl font-bold">
                      <IconArrowDownRight class="w-7 h-7 text-secondary-500 inline-block" />
                      {question}
                    </h3>
                    {answer.split("\n\n").map((paragraph, index3) => (
                      <p key={index3} class="text-gray-700 dark:text-gray-400 mb-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
