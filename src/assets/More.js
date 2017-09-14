import React from 'react'

export default function More({ size = 60, color = "#FFF" }) {
  return(
<svg height={size} width={size} version="1.1" viewBox="0 0 160 160">
	<defs/>
	<g id="Activities" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
		<g id="Artboard" fill="#000000">
			<path id="more" d="M20,60 C9,60 0,69 0,80 C0,91 9,100 20,100 C31,100 40,91 40,80 C40,69 31,60 20,60 L20,60 Z M140,60 C129,60 120,69 120,80 C120,91 129,100 140,100 C151,100 160,91 160,80 C160,69 151,60 140,60 L140,60 Z M80,60 C69,60 60,69 60,80 C60,91 69,100 80,100 C91,100 100,91 100,80 C100,69 91,60 80,60 L80,60 Z"/>
		</g>
	</g>
</svg>
)
}