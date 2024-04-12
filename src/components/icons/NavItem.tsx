import { VStack, IconButton, Text, Link } from "@chakra-ui/react";
import React from "react";
import { IconType } from 'react-icons';

interface NavButtonProps {
	icon: IconType;
	label: string;
	href: string,
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, href }) => {
	return (
		<Link href={href}>
			<VStack spacing={1} align="center">
				<IconButton
					icon={React.createElement(icon)}
					aria-label={label}
					fontSize="30px"
					size="xl"
					colorScheme="grey.800"
				/>
				<Text fontSize="sm" textAlign="center">
					{label}
				</Text>
			</VStack>
		</Link>
	);
};

export default NavButton;
