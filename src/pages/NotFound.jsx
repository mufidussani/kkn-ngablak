import React from "react";
import Section404 from "../components/pagenotfound/section";
import { HtmlHead } from "../components/HtmlHead";

const NotFound = () => {
	return (
		<>
			<HtmlHead
				title="404"
				decription="[insert page description]"
				link="/404"
			/>
			<Section404 />
		</>
	);
};

export default NotFound;
