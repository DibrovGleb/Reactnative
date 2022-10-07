import React, { useState } from "react";
import { ListItem, Switch } from "@react-native-material/core";

export default function Switches() {
  const [checked, setChecked] = useState(true),
        [enabled, setEnabled] = useState(true);
  return (
    <>
      <ListItem
        title="1 переключатель"
        trailing={
          <Switch value={checked} onValueChange={() => setChecked(!checked)} />
        }
        onPress={() => setChecked(!checked)}
      />
      <ListItem
        title="2 переключатель"
        trailing={
          <Switch value={enabled} onValueChange={() => setEnabled(!enabled)} />
        }
        onPress={() => setEnabled(!enabled)}
      />
      <ListItem title="Выключенный переключатель" trailing={<Switch disabled />} disabled />
    </>
  );
};