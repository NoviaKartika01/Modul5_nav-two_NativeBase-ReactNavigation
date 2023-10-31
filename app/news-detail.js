import React from "react";
import { Image, ScrollView, Text } from "react-native";
import { Box, Heading } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import { Header } from "../components";

const NewsDetail = () => {
  const params = useLocalSearchParams();

  return (
    <>
      <Header title="News" withBack={true} />
      <ScrollView>
        <Box p="$4">
          <Image
            source={{ uri: params.image }}
            style={{ width: "100%", height: 200 }}
          />
          <Text fontSize="$sm">{params.date}</Text>
          <Heading fontSize="$md">{params.title}</Heading>
          <Text fontSize="$md">{params.content}</Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;


// kode lama (modul 5)
// import { Heading, Text, Center } from "@gluestack-ui/themed";
// import { Header } from "../components";
// import { useLocalSearchParams } from "expo-router";

// const NewsDetail = () => {
//   const params = useLocalSearchParams();
//   return (
//     <>
//       <Header title={"News"} withBack={true} />
//       <Center flex={1} padding={"$4"}>
//         <Heading>News Detail</Heading>
//         <Text textAlign="center">{params.title}</Text>
//       </Center>
//     </>
//   );
// }; 

// export default NewsDetail;

// import React from "react";
// import { ScrollView } from "react-native";
// import { Box, Image, Heading, Text } from "@gluestack-ui/themed";
// import datas from "../datas";

// const NewsDetail = ({ route }) => {
//   const { id } = route.params;

//   const news = datas.find((item) => item.id === id);

//   return (
//     <ScrollView>
//       <Box p="$4">
//         <Image
//           source={{ uri: news.image }}
//           w="full"
//           h={200}
//           alt="Image Data"
//         />
//         <Text fontSize="$sm">{news.date}</Text>
//         <Heading fontSize="$md">{news.title}</Heading>
//         <Text fontSize="$md">{news.content}</Text>
//       </Box>
//     </ScrollView>
//   );
// };

// export default NewsDetail;


