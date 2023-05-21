import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { IconGithub } from "../icons/IconGithub";

const coverImage = "https://raw.githubusercontent.com/filippodigesu/qwik-resumability/main/src/assets/images/HERO.webp";

export default component$(() => {
  return (
    <section class={`bg-gradient-to-b md:bg-gradient-to-r from-white via-purple-50 to-sky-100 dark:bg-none mt-[-100px]`}>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:flex md:h-screen 2xl:h-auto pt-[72px]">
        <div class="py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left">
          <div class="pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex items-center basis-3/5">
            <div>
              <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                Questo sito web è costruito con {" "}
                <span class="text-[#039de1]">Qwik</span>
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-600 mb-8 dark:text-slate-400">
                  Qwik Test è un sito web costruito con il Framework Qwik, sfruttando la sua feature più importante: la Resumability.
                  È stato progettato seguendo le best practice per l'ottimizzazione delle performance.
                </p>
                <div class="max-w-xs sm:max-w-md flex flex-nowrap flex-col sm:flex-row gap-4 m-auto md:m-0 justify-center md:justify-start">
                  <div class="flex w-full sm:w-auto">
                    <a
                      class="btn btn-primary sm:mb-0 w-full"
                      href="https://pagespeed.web.dev/analysis/https-qwik-resumability-vercel-app/52s5buu969?form_factor=desktop"
                      target="_blank"
                      rel="noopener"
                    >
                      Metriche Page Speed
                    </a>
                  </div>
                  <div class="flex w-full sm:w-auto">
                    <a class="btn w-full bg-gray-50 dark:bg-transparent" href="https://github.com/filippodigesu/qwik-resumability/"><IconGithub /> GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="block md:flex items-center flex-1">
            <div class="relative m-auto max-w-4xl">
              <Image
                loading="eager"
                src={coverImage}
                layout="constrained"
                width={493}
                height={616}
                alt="Università degli studi di Bari Aldo Moro"
                class="mx-auto w-full rounded-md md:h-full drop-shadow-2xl bg-gray-400 dark:bg-slate-700"
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
