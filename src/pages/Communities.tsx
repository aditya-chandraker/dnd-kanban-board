import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface AlbumProps {
    title: string;
    artist: string;
    image: string;
    description: string;
}

interface CommunitiesProps {
    albums: AlbumProps[];
}

// export default function Communities({ albums }: CommunitiesProps) {
export default function Communities() {
    const albums = [{ title: "ur mom", old: "5 years", description: "is gay", image: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg" },
    { title: "Backflip in a year", old: "4 years", description: "UConn comunity teaching others how to get over their mental psyces and praying that we don't lose brain cels while landing on our spines", image: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg" },
    { title: "ur mom", old: "5 years", description: "is gay", image: "" },
    { title: "ur mom long long long long title", old: "5 years", description: "is gay", image: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg" },]

    return (
        <Flex flexWrap="wrap" justifyContent="left" style={{ marginTop: "55px" }}>
            {albums.map((album) => (
                <Box
                    key={album.title}
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="md"
                    m={3}
                >
                    <Image src={album.image} alt={album.title} boxSize="250px" objectFit="cover" />

                    <Box p="6" maxW={250}>
                        <Flex alignItems="baseline">
                            <Text fontWeight="semibold" fontSize="lg" mr="2" noOfLines={1}>
                                {album.title}
                            </Text>
                            <Text color="gray.500" fontSize="sm" noOfLines={1}>
                                {album.old}
                            </Text>
                        </Flex>

                        <Box as="span" color="gray.600" fontSize="sm" noOfLines={2}>
                            {album.description}
                        </Box>
                    </Box>
                </Box>
            ))}
        </Flex>
    );
}