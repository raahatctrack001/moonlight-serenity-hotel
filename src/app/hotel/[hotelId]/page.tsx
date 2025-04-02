import HotelForm from "@/components/_components/hotel/HotelForm";

interface HotelPageProps {
    params: {
        hotelId: string;
    };
}

export default function Hotel({ params }: HotelPageProps) {
    const { hotelId } = params;
    console.log("hotelId", hotelId);

    return (
        <div>
            <HotelForm />
        </div>
    );
}
