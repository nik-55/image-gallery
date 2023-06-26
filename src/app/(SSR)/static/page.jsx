import { generateRandomNumbers } from "@/utils"; 
import Image from "next/image";

const page = async () => {
    const response = await fetch( 'https://jsonplaceholder.typicode.com/photos' );
    const data = await response.json()
    const randomNumbers = generateRandomNumbers(2,3000,10);
  return (
    <div>
        {randomNumbers.map((index)=>{
            const temp = data[index]
            return (
                <div className="m-2" key={temp.id}>
                    <Image src={temp.url} width={"200"} height={"200"} alt={temp.title}/>
                    <span className="text-black-100">{temp.title}</span>
                </div>
            )
        })}
    </div>
  )
}

export default page