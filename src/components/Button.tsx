import type { IconProps } from "@phosphor-icons/react";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactElement } from "react";
import React from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	label?: string;
	className?: string;
	icon?: ReactElement<IconProps>;
	variant?: "primary" | "secondary";
};

const baseStyles = "rounded-lg text-md disabled:opacity-50 cursor-pointer ";

const variantStyles = {
	primary: "bg-blue-base p-4 text-white w-full hover:bg-blue-darks",
	secondary:
		"bg-gray-200 border-2 border-transparent p-2 text-gray-500 hover:border-blue-base",
};

export function Button({
	label,
	variant = "primary",
	className,
	icon,
	...rest
}: ButtonProps) {
	const styledIcon =
		icon && React.cloneElement(icon, { className: "text-grey-600 ", size: 16 });

	return (
		<button
			className={`${clsx(baseStyles, variantStyles[variant], className)} flex items-center justify-center gap-[6px]`}
			{...rest}
		>
			{styledIcon && <div className="text-gray-600">{styledIcon}</div>}

			{label && <span>{label}</span>}
		</button>
	);
}
