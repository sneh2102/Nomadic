/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
    Center,
    Button,
} from "@chakra-ui/react";
import { MdOutlineLocationOn } from "react-icons/md";
import UserHistoryDetailsModal from "./UserHistoryDetailsModal";
import AddHistoryNotesModal from "./AddHistoryNotesModal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdOutlineReviews } from "react-icons/md";
const UserHistory: React.FC = () => {


    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false)


    const { id } = useParams()
    useEffect(() => {
        console.log("history", `${(import.meta as any).env.VITE_BASE_API_URL}`)
        setLoading(true)
        console.log(`${(import.meta as any).env.VITE_BASE_API_URL}/api/v1/booking/${id}`)
        axios.get(`${(import.meta as any).env.VITE_BASE_API_URL}/api/v1/booking/${id}`).then((response: any) => {
            console.log("res", response.data)
            setCards(response.data.data)
        }).catch((error: any) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) return <Center my="5">Loading...</Center>

    return (
        <Box p={4}>
            <Heading ml={["2", "5", "7", "10"]}>History</Heading>
            <Flex overflowX="auto" whiteSpace="nowrap">
                {cards?.length === 0 ? <Box>No history found</Box> : <>
                    {cards?.map((card: any) => (
                        <Flex
                            flexDir="column-reverse"
                            key={card.id}
                            height="350px"
                            width="350px"
                            flex="0 0 auto"
                            m={["4", "4", "8", "8"]}
                            overflow="hidden"
                            border="1px solid lightgray"
                            borderRadius="20px"
                            className="scale-img card"
                        >
                            {/* <Flex p="4" justifyContent="space-between" fontSize="large"> */}
                            <Flex alignItems="center" justifyContent="space-between" p="5">
                                {/* {card.content} */}
                                <AddHistoryNotesModal location={`${card.tourPackage.city}, ${card.tourPackage.location}`} note={card.note} id={id} />
                                <UserHistoryDetailsModal data={card.tourPackage} totalCost={card.totalCost} noOfPeople={card.noOfPeople} bookingDate={card.createdAt} />
                                <Button colorScheme="green">
                                    <MdOutlineReviews />
                                </Button>
                                {/* </Flex> */}
                                {/* <Text fontWeight="bolder">$200</Text> */}
                            </Flex>
                            <Box
                                height="100%"
                                width="100%"
                                overflowY="auto"
                                position="relative"
                                backgroundImage={card.tourPackage.image}
                                backgroundColor="rgba(0, 0, 0, 0.3)"
                                backgroundBlendMode="darken"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundPosition="center"
                                backgroundAttachment="unset"
                            >
                                <Box
                                    mt="3"
                                    position="absolute"
                                    color="white"
                                    // boxShadow="2xl"
                                    left="5%"
                                    bottom="5%"
                                    borderRadius="5px"
                                    p="1"
                                >
                                    <Text size="md" fontSize="xl" fontWeight="bolder">
                                        {card.tourPackage.city}
                                    </Text>
                                    <Flex justifyContent="space-between" alignItems="center">
                                        <Flex alignItems="center">
                                            <MdOutlineLocationOn />
                                            <Text size="md" textAlign="center" ml="1">
                                                {card.tourPackage.location}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                    ))}
                </>}


            </Flex>
        </Box>
    );
};

export default UserHistory;
