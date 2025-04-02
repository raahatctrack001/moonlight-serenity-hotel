import { prisma } from "@/lib/prisma";

export const getHotelById = async ({ hotelId }: { hotelId: string }) => {
    try {
        const hotel = await prisma.hotel.findUnique({
            where: {
                id: hotelId,
            },
            include: {
                rooms: true,
            },
        });

        return hotel;
    } catch (error) {
        console.error("Error fetching hotel:", error);
        throw new Error((error as Error).message);
    }
};
