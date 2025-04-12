import { motion } from "framer-motion";

interface HamburgerProps {
	isOpen: boolean;
	variant: "normal" | "thin";
	onClick: () => void;
}

export default function Hamburger({
	isOpen,
	variant,
	onClick
}: HamburgerProps) {
	const hamburgerBarMotionVariants = {
		normal: {
			top: {
				closed: {},
				open: {
					rotate: 45,
					translateY: `280%`,
					scale: 0.75
				}
			},
			middle: {
				closed: {},
				open: {
					translateX: 100,
					opacity: 0
				}
			},
			bottom: {
				closed: {},
				open: {
					rotate: -45,
					translateY: `-280%`,
					scale: 0.75
				}
			}
		},
		thin: {
			top: {
				closed: {},
				open: {
					rotate: 45,
					translateY: `420%`,
					scale: 0.75
				}
			},
			middle: {
				closed: {},
				open: {
					translateX: 100,
					opacity: 0
				}
			},
			bottom: {
				closed: {},
				open: {
					rotate: -45,
					translateY: `-420%`,
					scale: 0.75
				}
			}
		}
	};

	return (
		<motion.div
			className={hamburgerStyling}
			animate={isOpen ? "open" : "closed"}
			onClick={onClick}
		>
			<motion.div
				className={
					variant === "normal"
						? hamburgerBarStylingNormal
						: hamburgerBarStylingThin
				}
				variants={
					variant === "normal"
						? hamburgerBarMotionVariants.normal.top
						: hamburgerBarMotionVariants.thin.top
				}
			/>
			<motion.div
				className={
					variant === "normal"
						? hamburgerBarStylingNormal
						: hamburgerBarStylingThin
				}
				variants={
					variant === "normal"
						? hamburgerBarMotionVariants.normal.middle
						: hamburgerBarMotionVariants.thin.middle
				}
			/>
			<motion.div
				className={
					variant === "normal"
						? hamburgerBarStylingNormal
						: hamburgerBarStylingThin
				}
				variants={
					variant === "normal"
						? hamburgerBarMotionVariants.normal.bottom
						: hamburgerBarMotionVariants.thin.bottom
				}
			/>
		</motion.div>
	);
}

const hamburgerStyling = `
    flex
    flex-col
    h-full
    w-full
    justify-evenly
    bg-transparent
	rounded-xl
    p-0
	hover:scale-105
	duration-200
`;

const hamburgerBarStylingBase = `
    hamburgerBar
    flex
    flex-row
	bg-gray-50
`;

const hamburgerBarStylingNormal = `
	${hamburgerBarStylingBase}
	h-[10%]
`;

const hamburgerBarStylingThin = `
	${hamburgerBarStylingBase}
	h-[6%]
`;
