"use client"

import {useState, useEffect} from 'react'
import { generateRandomNumbers } from "@/utils"; 
import Image from 'next/image';

const Images = () => {
    const [imageArr, setImageArr] = useState([])

    
    useEffect(()=>{
        const func = async () => {
            const response = await fetch( 'https://jsonplaceholder.typicode.com/photos' );
            const data = await response.json()
            const randomNumbers = generateRandomNumbers(2,3000,10);
            const temp = randomNumbers.map((index)=>{
                return data[index]
            })
            setImageArr([...temp])
        }
        func()
    },[])

    return (
        <div>
            {imageArr.map((temp) => {
                return (
                    <div className="m-2" key={temp.id}>
                        <Image src={temp.url} width={"200"} height={"200"} alt={temp.title} />
                        <span className="text-black-100">{temp.title}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Images