import React, { useState } from "react";
import { Button, Dialog, DialogHeader, IconButton, TextInput, Stack,
DialogContent, DialogActions, Text} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function ShowMessage (){
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button title="Открыть окно подсказки"
        style={{ margin: 16 }}
        onPress={() => setVisible(true)}
      />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Заголовок подсказки"/>
        <DialogContent>
          <Stack spacing={20}>
            <Text>Основное сообщение всплывающей подсказки</Text>
            <TextInput inputStyle={{width:70}} label="Сообщение" variant="outlined"
            trailing={props => ( <IconButton icon={props => 
            <Icon name="eye" {...props} />} {...props} />)}/>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button title={props => <Icon name="close" size={24} {...props} />} 
          variant="outlined" onPress={() => setVisible(false)}/>
          <Button title={props => <Icon name="check" size={24} {...props} />}  
          variant="outlined" onPress={() => setVisible(false)}/>
        </DialogActions>
      </Dialog>
      </>
  );
};