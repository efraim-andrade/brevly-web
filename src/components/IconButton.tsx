import { Button, type ButtonProps } from "@/components/Button";
import type { IconProps } from "@phosphor-icons/react";
import type { ReactElement } from "react";

type IconButtonProps = ButtonProps & {
	icon: ReactElement<IconProps>;
};

export function IconButton({ icon }: IconButtonProps) {
	return <Button icon={icon} variant="secondary" />;
}
