import { getHotelById } from "@/app/server-actions/Hotel/getHotelById";
import HotelForm from "@/components/_components/hotel/HotelForm";
import { auth } from "@clerk/nextjs/server";

interface HotelPageProps {
    params: {
        hotelId: string;
    };
}

export default async function Hotel({ params }: HotelPageProps) {
    const { hotelId } = params;
    const { userId } = await auth();
    
    if(!userId){
        return <div className="w-full min-h-screen grid place-items-center">
            Not Authenticated...
        </div>
    }
    const hotelData = await getHotelById({hotelId});
    if(hotelData && hotelData.userId !== userId){
        return <div>
            Access Denied...
        </div>
    }
    console.log("hotelData", hotelData);
    return (
        <div>
            <HotelForm hotel={hotelData} />
        </div>
    );
}
