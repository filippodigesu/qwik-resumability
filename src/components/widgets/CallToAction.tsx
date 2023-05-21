import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none">
            <h2 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
              <span class="text-[#039de1]">Qwik</span> Test
            </h2>
            <p class="text-xl text-gray-600 dark:text-slate-400">
              Questa pagina è stata costruita con lo scopo di testare le performance.
            </p>

            <div class="mt-6">
              <a
                class="btn btn-primary mb-4 sm:mb-0 w-full sm:w-auto"
                href="https://pagespeed.web.dev/analysis/https-qwik-resumability-vercel-app/7qa260tsk4?form_factor=desktop"
                target="_blank"
                rel="noopener"
              >
                Scopri le Performance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
