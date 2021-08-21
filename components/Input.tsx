import { ChangeEvent, FC } from "react";

interface Props {
	value: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

export const Input: FC<Props> = ({ value, handleChange, placeholder }) => {
	return (
		<input
			className="p-3 outline-none border-2 border-gray-300 shadow-sm rounded-md"
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
		/>
	);
};
