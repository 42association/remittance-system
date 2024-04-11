import { Avatar } from '@chakra-ui/react';

interface FaceProps
{
	photoUrl: string;
	userName?: string;
}

const Face: React.FC<FaceProps> = ({ photoUrl, userName = 'User Name'}) => {
	return <Avatar size="md" name={userName} src={photoUrl} />;
};

export default Face;
