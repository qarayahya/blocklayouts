/**
 * Home Tab Component
 */
import {
	Card,
	CardHeader,
	CardBody,
	Button,
	Icon,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
	globe,
	link,
	comment,
	cover,
	external,
	layout,
} from "@wordpress/icons";

import "./home.scss";

const Home = () => {
	const quickLinks = [
		{
			label: __("Blocklayouts.com", "blocklayouts"),
			url: "https://blocklayouts.com/",
			icon: <Icon icon={globe} />,
		},
		{
			label: __("Patterns Library", "blocklayouts"),
			url: "https://blocklayouts.com/patterns/",
			icon: <Icon icon={layout} />,
		},
		{
			label: __("Documentation", "blocklayouts"),
			url: "https://blocklayouts.com/documentation/",
			icon: <Icon icon={cover} />,
		},
		{
			label: __("Support", "blocklayouts"),
			url: "https://blocklayouts.com/support/",
			icon: <Icon icon={comment} />,
		},
	];

	return (
		<div className="blocklayouts-dashboard__home">
			<div className="blocklayouts-dashboard__home-content">
				<h2 style={{ fontSize: "28px" }}>
					{__("Welcome to Blocklayouts!", "blocklayouts")}
				</h2>
				<p style={{ marginBottom: "24px", color: "#757575" }}>
					{__(
						"Blocklayouts is a WordPress plugin that enhances your block editor experience with custom blocks, enhanced core blocks, and pre-designed patterns to build WordPress sites faster.",
						"blocklayouts",
					)}
				</p>

				<iframe
					width="100%"
					height="420px"
					src="https://www.youtube.com/embed/nN_pJps0IQk?si=-R3PJaqtba1AEPPE"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
			<div className="blocklayouts-dashboard__home-sidebar">
				<div className="blocklayouts-dashboard__home-sidebar-item">
					<Icon icon={external} size={28} style={{ marginBottom: "8px" }} />
					<h3 style={{ marginBottom: "24px" }}>
						{__("Quick Links", "blocklayouts")}
					</h3>
					<ul>
						{quickLinks.map((link) => (
							<li key={link.label}>
								<Button
									variant="link"
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									icon={link.icon}
									__next40pxDefaultSize
									style={{ padding: 0 }}
								>
									{link.label}
								</Button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
