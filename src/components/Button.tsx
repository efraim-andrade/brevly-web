import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	label: string;
	className?: string;
	icon?: React.ReactNode;
	variant?: "primary" | "secondary";
};

const baseStyles = "rounded-lg text-md disabled:opacity-50";

const variantStyles = {
	primary: "bg-blue-base hover:bg-blue-darks p-4 text-white w-full",
	secondary: "bg-gray-200 border-2 border-blue-base p-2 text-gray-500",
};

export function Button({
	label,
	variant = "primary",
	className,
	icon,
	...rest
}: ButtonProps) {
	return (
		<button
			className={clsx(baseStyles, variantStyles[variant], className)}
			{...rest}
		>
			{icon}

			<span>{label}</span>
		</button>
	);
}
