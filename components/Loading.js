import { ActivityIndicator, Stack, Text} from "@react-native-material/core";

export default function Loading (){
    return(
        <Stack spacing={50} fill center style={{ backgroundColor: '#c3c3c34f' }}>
        <Text variant="overline" style={{ fontSize:'24px'}}>Загрузка...</Text>
        <ActivityIndicator size="large"/>
        </Stack>
    )
}