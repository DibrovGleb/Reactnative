import React, { useState } from "react";
import {
  Provider,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from "@react-native-material/core";

export default function ShowMessage (){
  const [visible, setVisible] = useState(false);

  return (
    <Provider>
      <Button
        title="Открыть окно подсказки"
        style={{ margin: 16 }}
        onPress={() => setVisible(true)}
      />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Dialog Header" />
        <DialogContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            eligendi inventore, laboriosam laudantium minima minus nesciunt
            pariatur sequi.
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
      </Provider>
  );
};