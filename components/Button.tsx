import { FC, MouseEvent } from "react";

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
		<button
			className="px-4 py-2 text-white bg-black ring-2 ring-black rounded-sm transition ease-in duration-100 hover:bg-transparent hover:text-black"
			onClick={onClick}
		>
			{children}
		</button>
	);
}