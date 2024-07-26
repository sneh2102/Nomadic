import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const tour = await prisma.tourCategory.create({
        data: {
            name: "Tour Category 1",
            tourPackages: {
                create: [
                    {
                        name: "Stonehenge with Cathedral Tour",
                        city: "London",
                        location: "Westminster Borough",
                        freeCancelationAvailable: true,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/stonehenge.jpg",
                        price: 72,
                    },
                    {
                        name: "Majestic Mountains Expedition",
                        city: "Canada",
                        location: "Rocky Mountains",
                        freeCancelationAvailable: true,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/rockies.jpg",
                        price: 120,
                    },
                    {
                        name: "Venice Gondola Experience",
                        city: "Italy",
                        location: "Venice",
                        freeCancelationAvailable: true,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/venice.jpg",
                        price: 55,
                    },
                    {
                        name: "Safari Adventure in Serengeti",
                        city: "Tanzania",
                        location: "Serengeti National Park",
                        freeCancelationAvailable: true,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/safari.jpg",
                        price: 230,
                    },
                    {
                        name: "Eiffel Tower Summit Access",
                        city: "France",
                        location: "Paris",
                        freeCancelationAvailable: true,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/paris.jpg",
                        price: 65,
                    },
                    {
                        name: "Great Wall of China Hiking Tour",
                        city: "China",
                        location: "Beijing",
                        freeCancelationAvailable: true,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/great_wall.jpg",
                        price: 110,
                    },
                    {
                        name: "Northern Lights Viewing in Iceland",
                        city: "Iceland",
                        location: "Reykjavik",
                        price: 150,
                        freeCancelationAvailable: true,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/northern_lights.jpg",
                    },
                    {
                        name: "Grand Canyon Helicopter Tour",
                        location: "Arizona",
                        city: "USA",
                        price: 299,
                        freeCancelationAvailable: true,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/canyon.jpg",
                    },
                    {
                        name: "Pyramids of Giza Tour",
                        city: "Egypt",
                        location: "Cairo",
                        price: 50,
                        freeCancelationAvailable: true,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/pyramids.jpg",
                    },
                    {
                        name: "Sydney Opera House Guided Tour",
                        city: "Australia",
                        location: "Sydney",
                        freeCancelationAvailable: true,
                        price: 40,
                        image: "https://csci-5709-g10-tour-images.s3.amazonaws.com/sydney.jpg",
                    },
                ],
            },
        },
    });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })