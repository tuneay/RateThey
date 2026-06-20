"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Film, Sparkles, Tv } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const verticals = [
  {
    icon: Film,
    title: "RateMovies",
    description: "İzlediğin filmleri puanla, listeler oluştur, yeniden keşfet.",
  },
  {
    icon: Tv,
    title: "RateSeries",
    description: "Dizileri ve sezonları takip et, nerede kaldığını unutma.",
  },
  {
    icon: BookOpen,
    title: "RateBooks",
    description: "Okuduğun kitapları değerlendir, okuma yolculuğunu sakla.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Landing() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="flex flex-col items-center py-20 text-center md:py-28">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="border-border/70 bg-card/60 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm"
        >
          <Sparkles className="text-primary size-4" />
          Gelişmiş öneri sistemiyle desteklenir
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          Beğendiklerini puanla,{" "}
          <span className="text-primary">sıradakini biz bulalım.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-muted-foreground mt-6 max-w-xl text-lg text-pretty"
        >
          Film, dizi ve kitapları tek yerde değerlendir. RateThey seni tanır ve
          gerçekten seveceğin yapımları önerir.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/register"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            Ücretsiz başla
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/movies"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Keşfet
          </Link>
        </motion.div>
      </section>

      {/* Verticals */}
      <section className="grid gap-5 pb-24 sm:grid-cols-3">
        {verticals.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="group border-border/70 bg-card/60 hover:border-primary/40 rounded-xl border p-6 transition-colors"
          >
            <div className="bg-primary/10 text-primary grid size-11 place-items-center rounded-lg">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground mt-1.5 text-sm">
              {description}
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
