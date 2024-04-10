import { Box, Input } from "@chakra-ui/react";

export const SendInput = () => {
    return (
        <Box m="0 11px" pt="190px">
          <Input placeholder="送金したい人のintra名を入力" background="#ffffff" color="#000000" border="none" borderRadius="6px" />
        </Box>
    );
}