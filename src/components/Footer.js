import { AddButton } from './Buttons';
export default function Footer({ ...props }) {
	return (
		<div
			style={{
				position: 'fixed',
				bottom: 0,
				width: '100%',
				height: '178px',
				display: 'flex',
				justifyContent: 'center',
				background:
					'linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #C4C4C4 100%)',
				backdropFilter: 'blur(4px)',
			}}
		>
			<AddButton {...props} />
		</div>
	);
}
