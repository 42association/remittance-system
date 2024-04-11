import { VStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from 'react-icons';

interface NavButtonProps {
	icon: IconType;
	label: string;
	onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, onClick }) => {
	return (
	  <VStack spacing={1}>
		<IconButton
		  icon={React.createElement(icon)}
		  aria-label={label}
		  fontSize="30px"
		  size="xl"
		  colorScheme="grey.800"
		  onClick={onClick}
		/>
		<Text fontSize="sm">{label}</Text>
	  </VStack>
	);
  };

export default NavButton;
