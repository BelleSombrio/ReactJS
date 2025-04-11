'use client'
import React, { useEffect, useState } from 'react'
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { GetFoodById } from "@/services/FoodService"
import Food from '@/models/Food';



export default function CardFood({id, nome, ingredientes, preco}:Food) {
    
    return (
        <div>

            <NeonGradientCard>
                <div className="p-4">
                   <h2>{nome}</h2>
                   <p>{ingredientes}</p>
                   <h3>{preco}</h3>
                </div>
            </NeonGradientCard>

        </div>
    )
}
