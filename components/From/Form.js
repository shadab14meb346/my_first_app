import React from "react";
import { Button, TextField } from "@shopify/polaris";

export const Form = () => {
  const [value, setValue] = React.useState("");

  const handleChange = React.useCallback((newValue) => setValue(newValue), []);

  return (
    <>
      <TextField
        label="TikTok Username"
        value={value}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Enter your TikTok username"
      />
      <Button primary style={{ marginTop: "10px" }}>
        Add
      </Button>
    </>
  );
};
