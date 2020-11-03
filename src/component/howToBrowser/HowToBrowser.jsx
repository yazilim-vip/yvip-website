// Core ReactJS
import React from "react";

// Connected Router 
import { push } from 'connected-react-router'

// Redux
import { connect } from "react-redux";
import { actionCreators } from "../../redux/actions";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";

// Bootstrap
import { Col, Row, Alert, FormControl, ButtonGroup, ToggleButton } from "react-bootstrap";

// React Sliding Pane
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

// React Markdown
import ReactMarkdown from "react-markdown";

// Underscore
import _ from "underscore"

// Project Components
import HowToFileManager from "./HowToFileManager";
import HowToBreadcrumb from "./HowToBreadcrumb";

// Constants
import HOWTO_ITEM_TYPE from '../../model/HowToItemType';

// Module Styles
import './HowToBrowser.module.scss'

const HowToBrowser = ({
	// values from mapStateToProps
	folderPath,
	selectedCategory,
	selectedCategoryName,
	selectedHowto,
	selectedHowtoName,
	howtoSelectedFlag,
	searchIndex,
	query,
	isToggleOn,

	//TODO from breadcrumb
	categoryNames,
	rootCategorySelectedFlag,

	//TODO from fileManager (folderName and isToggleOn removed because of duplication)
	isHit,
	categoryList,
	howtoList,

	// methods from props
	onSearchResult,
	onToggle,
	push
}) => {

	const search = (query) => {
		if (!query) {
			return onSearchResult("", null, null)
		}

		let hits = searchIndex.filter(o => o.name.includes(query.toLowerCase()))

		if (hits) {
			let categoryHits = []
			let howtoHits = []

			hits.forEach(hit => {
				if (hit.type === HOWTO_ITEM_TYPE.CATEGORY_HIT) {
					categoryHits.push(hit);
				} else if (hit.type === HOWTO_ITEM_TYPE.HOWTO_HIT) {
					howtoHits.push(hit);
				}
			});

			onSearchResult(query, categoryHits, howtoHits)
		} else {
			onSearchResult(query, null, null)
		}
	}

	const renderHowtoContentElement = () => {
		if (selectedHowto) {
			return (
				<SlidingPane
					className="howto-sliding-pane"
					overlayClassName="howto-sliding-pane-overlay"
					isOpen={howtoSelectedFlag}
					children={<ReactMarkdown source={selectedHowto.markdownContent} />}
					title={selectedHowto.label}
					width="100"
					from="bottom"
					closeIcon={<FontAwesomeIcon icon={faAngleDown} size="2x" />}
					onRequestClose={() => { push(folderPath) }}
				>
				</SlidingPane>
			)
		}

		if (howtoSelectedFlag) {
			return (
				<Alert key={1} variant={"danger"}>
					<b>{selectedHowtoName}</b> not found in <b>{selectedCategory.name}</b> folder.
				</Alert>
			)
		}
	};

	const renderMainContentElement = () => {
		if (!selectedCategory) {
			return (
				<Alert key={1} variant={"danger"}>.
					Category <b>{selectedCategoryName}</b> not found in path.
				</Alert>
			)
		}

		return (
			<div>
				<Row>
					<Col md="7">
						<HowToBreadcrumb
							categoryNames={categoryNames}
							rootCategorySelectedFlag={rootCategorySelectedFlag}
						/>
					</Col>

					<Col md="2" sm="3" className="mb-2 mb-sm-0">
						<ButtonGroup toggle className="float-right">
							<ToggleButton
								type="radio"
								variant="secondary"
								name="radio"
								checked={!isToggleOn}
								onChange={() => onToggle()}
							>
								<FontAwesomeIcon icon={faTh} />

							</ToggleButton>

							<ToggleButton
								type="radio"
								variant="secondary"
								name="radio"
								checked={isToggleOn}
								onChange={() => onToggle()}
							>
								<FontAwesomeIcon icon={faThList} />
							</ToggleButton>
						</ButtonGroup>
					</Col>

					<Col md="3" sm="9">

						{/* <div className="mr-3 mt-2 align-items-center">
							<Switch />
						</div> */}

						<FormControl
							type="search"
							placeholder="Search..."
							aria-label="Search"
							value={query}
							onChange={event => search(event.target.value)} />
					</Col>
				</Row>

				<hr />

				<HowToFileManager
					folderPath={folderPath}
					isHit={isHit}
					categoryList={categoryList}
					howtoList={howtoList}
					isToggleOn={isToggleOn}
				/>

				{renderHowtoContentElement()}

			</div>
		)
	}

	return renderMainContentElement()
}

const mapStateToProps = (state) => {
	const howtoReducer = state.howtoReducer

	const categoryHits = howtoReducer.categoryHits
	const howtoHits = howtoReducer.howtoHits
	const selectedCategory = howtoReducer.selectedCategory

	let categoryList = categoryHits ? _.extend({}, categoryHits) : selectedCategory.subCategoryList
	let howtoList = howtoHits ? _.extend({}, howtoHits) : selectedCategory.howtoList


	return {
		folderPath: howtoReducer.folderPath,
		selectedCategory: howtoReducer.selectedCategory,
		selectedCategoryName: howtoReducer.selectedCategoryName,
		selectedHowto: howtoReducer.selectedHowto,
		selectedHowtoName: howtoReducer.selectedHowtoName,
		howtoSelectedFlag: howtoReducer.howtoSelectedFlag,
		query: howtoReducer.query,
		categoryHits: howtoReducer.categoryHits,
		howtoHits: howtoReducer.howtoHits,
		searchIndex: howtoReducer.searchIndex,
		isToggleOn: howtoReducer.isToggleOn,

		// ..
		categoryNames: howtoReducer.categoryNames,
		rootCategorySelectedFlag: howtoReducer.rootCategorySelectedFlag,

		// ..
		isHit: howtoReducer.categoryHits || howtoReducer.howtoHits,
		categoryList: categoryList,
		howtoList: howtoList,
	}
}

const mapDispatchToProps = { ...actionCreators, push }
export default connect(mapStateToProps, mapDispatchToProps)(HowToBrowser)