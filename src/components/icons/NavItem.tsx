import { VStack, IconButton, Text, Link } from "@chakra-ui/react";
import React from "react";
import { IconType } from 'react-icons';
import { Icon } from '@chakra-ui/react'

interface NavButtonProps {
	icon: IconType;
	label: string;
	href: string,
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, href }) => {
	return (
		<Link href={href}>
			<VStack spacing={1} align="center">
				<Icon as={icon} boxSize={10} color="#b0b0b0" />
				<Text fontSize="sm" textAlign="center" color="#b0b0b0">
					{label}
				</Text>
			</VStack>
		</Link>
	);
};

export default NavButton;
