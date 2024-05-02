import React from 'react'
import vediobg from "./videobg.mp4"
import "./cstyle.css"

export default function Carousels() {

	return (
		<>
			<div className="main1" style={{ width: "100%", height: "" }}>
				<video style={{}} id="housevideo" src={vediobg} autoPlay loop muted />
				<div className="content">
					<h1>Welcome</h1>
					<p>Lorem ipsum dolor sit amet consectetur,</p>
				</div>
			</div>



		</>
	)
}
