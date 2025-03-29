
import { Input } from "../input";

export default function Searchbar(){
    return <div className="flex justify-center ">
        <Input 
            placeholder="search hotels..."
            className="border-2 w-md max-w-xl"    
        />
    </div>
}