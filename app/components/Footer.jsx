import React from "react";
import {
	AiOutlineGithub,
	AiOutlineTwitter,
	AiOutlineLinkedin,
	AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
	return (
		<div className="bg-blue-400">
			<footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
				<div className="mx-auto  p-4 flex flex-col text-center text-black md:flex-row md:justify-between">
					<div className="flex flex-row items-center justify-center space-x-1 text-black dark:text-neutral-100">
						© 2023 Kyle Chen<a href="/" className="hover:underline"></a>
					</div>
					<div className="flex flex-row items-center justify-center space-x-2 mb-1">
						<a
							href="https://github.com/elyknehc"
							rel="noreferrer"
							target="_blank"
						>
							<AiOutlineGithub
								className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-neutral-100"
								size={30}
							/>
						</a>

						<a
							href="https://www.linkedin.com/in/kyleechen/"
							rel="noreferrer"
							target="_blank"
						>
							<AiOutlineLinkedin
								className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-neutral-100"
								size={30}
							/>
						</a>
						<a
							href="https://www.youtube.com/channel/UCJtam1AKqoTl_R5RQzEPi7w"
							rel="noreferrer"
							target="_blank"
						>
							<AiOutlineYoutube
								className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-neutral-100"
								size={30}
							/>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
