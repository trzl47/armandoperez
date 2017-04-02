// Libs
import React, { Component } from 'react';
// Components
import Photo from '../components/photo.js';
import photos from '../components/photos.js';

const renderPhotographs = (photos, length) => {
	const photographs = photos.map((photo) => {
		return (
			<div className="col-md-4" key={photo.id}>
				<Photo
					title={photo.title}
					desc={photo.desc}
					rte={photo.path}
					img={photo.img}
					attr={photo.className}
					 />
			</div>
		)
	});
	const chunkCards = (arr, size) => {
		let rows = [];
		for (let i = 0; i < arr.length; i+=size) {
			rows.push(arr.slice(i,i+size));
		}
		return rows;
	};
	const renderRows = () => {
		// let count = 0;
		return (
			chunkCards(photographs, 3).map((row, index) => {
				return (
					<div className="row" key={index}>
						{ row }
					</div>
				)
			})
		)
	};
	return (
		renderRows()
	);
};

export default class HomeSupporting extends Component {
	render() {
		const photoContent = photos.Home;
		return (
			<div className='supporting'>
				<div className='container'>
					{ renderPhotographs(photoContent, photoContent.length) }
				</div>
			</div>
		);
	}
}
