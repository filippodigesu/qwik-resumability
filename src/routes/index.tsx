import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import FAQs from "~/components/widgets/FAQs";
import CallToAction from "~/components/widgets/CallToAction";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <FAQs />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
