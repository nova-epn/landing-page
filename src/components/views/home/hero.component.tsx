"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/common/containers";
import { Button } from "@/components/common/buttons";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="bg-[url('/images/hero/bg.jpg')]">
      <Image
        src={"/images/logos/full.png"}
        alt="Nova Club full logo"
        className=""
        height={1000}
        width={600}
      />
      <Link href={"/postulaciones"}>
        <Button>Aplica Ahora</Button>
      </Link>
    </Section>
  );
}
