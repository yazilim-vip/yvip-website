// Core ReactJS
import React from 'react';
import { Link } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

// Bootstrap
import { Col, Container, ListGroup, Row } from "react-bootstrap";


const HowToFileManager = (props) => {

	// values from mapStateToProps
	const folderPath = props.folderPath;
	const isHit = props.isHit;
	const categoryList = props.categoryList;
	const howtoList = props.howtoList;
	const isToggleOn = props.isToggleOn;


	const prefix = folderPath + "/"
	const renderItem = (name, link, icon, color) => {
		if (isToggleOn) {
			return (
				<Link to={link} className="link" key={link}>
					<ListGroup.Item>
						<FontAwesomeIcon icon={icon} className="mr-3" color={color} />
						{name}
					</ListGroup.Item>
				</Link>
			)
		} else {
			return (
				<Col xs={4} sm={3} md={3} lg={2} className="py-4 text-center" key={link}>
					<Link to={link} className="link">
						<FontAwesomeIcon icon={icon}
							className="pb-1"
							size="4x"
							color={color}
						/>
						<br />
						{name}
					</Link>
				</Col>
			)
		}
	}

	const renderCategories = (items) => Object.keys(items).map(key => {
		let name = isHit ? items[key].name : items[key].name
		let link = isHit ? items[key].path : (prefix + items[key].name)

		return (
			renderItem(name, link, faFolder, "#50a4d4")
		)
	})


	const renderHowtos = (items) => Object.keys(items).map(key => {
		let name = isHit ? items[key].name : items[key].label
		let link = isHit ? items[key].path : (prefix + items[key].label)

		return (
			renderItem(name, link, faFile, "#494d52")
		)
	})

	const renderByToggle = () => {
		if (isToggleOn) {
			return (
				<ListGroup>
					{renderCategories(categoryList)}
					{renderHowtos(howtoList)}
				</ListGroup>
			)
		} else {
			return (
				<Row>
					{renderCategories(categoryList)}
					{renderHowtos(howtoList)}
				</Row>
			)
		}
	}

	return (
		<Container fluid>
			{renderByToggle()}
		</Container>
	)
}


export default HowToFileManager
