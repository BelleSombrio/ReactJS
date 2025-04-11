'use client'
import { Globe } from "@/components/magicui/globe";
import Image from "next/image";
import { ShinyButton } from "@/components/magicui/shiny-button";
import CardFood from "@/components/cards/card-food";
import { Meteors } from "@/components/magicui/meteors";
import { useEffect, useState } from "react";
import Food from "@/models/Food";
import { GetFood } from "@/services/FoodService";
import { p } from "framer-motion/client";



export default function Home() {
  const [foods, setFoods] = useState<Food[] | null>(null)

  useEffect(() => {
    const pegarFoods = async () => {
      try {
        const response = await GetFood()
        setFoods(response)
      } catch (error) {
        console.log(error)
      }
    }
    pegarFoods()
  })
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {foods ? (
        foods.map((food, index) =>
          <CardFood
            key={index}
            id={food.id}
            ingredientes={food.ingredientes}
            nome={food.nome}
            preco={food.preco}
          />
        )
      ) : (
        <p>LOADING...</p>
      )
      }

      <Meteors />


    </div>
  );
}
