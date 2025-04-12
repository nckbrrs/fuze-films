import { motion } from "framer-motion";
import Link from "next/link";

interface FullScreenMenuProps {
	isOpen: boolean;
	links: { linkType: "external" | "local"; text: string; href: string }[];
	onClickLink: () => void;
}

export default function FullScreenMenu({
	isOpen,
	links,
	onClickLink
}: FullScreenMenuProps) {
	return isOpen ? (
		<motion.div
			className={fullScreenMenuContainerStyling}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className={menuLinksColStyling}>
				{links.map((l) => (
					<Link
						className={linkTextStyling}
						key={l.text}
						href={`${l.href}`}
						target={l.linkType === "external" ? "_blank" : ""}
						rel={
							l.linkType === "external"
								? "noopener noreferrer"
								: ""
						}
						onClick={onClickLink}
					>
						{l.text.toUpperCase()}
					</Link>
				))}
			</div>
		</motion.div>
	) : null;
}

const fullScreenMenuContainerStyling = `
    flex
	flex-row 
    w-full
    h-full
    space-y-2 
    left-0 
    top-0 
    justify-center 
    items-center
    fixed
    z-20
	bg-background
`;

const menuLinksColStyling = `
    flex
    flex-col
    flex-wrap
    group
    items-start
    justify-center
    space-y-0 lg:space-y-1
    translate-y-2 
`;

const linkTextStyling = `
	w-full	
    text-4xl
    font-bold
	italic
	text-left
    duration-200
    group-hover:opacity-25
    group-hover:blur-[2px]
    hover:!opacity-100
    hover:!blur-[0px]
	hover:translate-x-3
`;
