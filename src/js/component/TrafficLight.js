import React, { useState } from "react";

export function TrafficLight() {
	const [currentLight, setLight] = useState("yellow");
	return (
		<div>
			<div className="trafficTop"> </div>
			<div className="trafficContainer">
				{currentLight === "red" ? (
					<div className="red light expanded" />
				) : (
					<div
						className="red light"
						onClick={() => setLight("red")}
					/>
				)}
				{currentLight === "yellow" ? (
					<div className="yellow light expanded" />
				) : (
					<div
						className="yellow light"
						onClick={() => setLight("yellow")}
					/>
				)}
				{currentLight === "green" ? (
					<div className="green light expanded" />
				) : (
					<div
						className="green light"
						onClick={() => setLight("green")}
					/>
				)}
			</div>
		</div>
	);
}
