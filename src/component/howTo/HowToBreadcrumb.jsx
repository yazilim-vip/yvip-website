// Core ReactJS
import React from "react";
import { Link } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// Bootstrap
import { Breadcrumb } from "react-bootstrap";

const HowToBreadcrumb = (props) => {

    const categoryNames = props.categoryNames;
    const rootCategorySelectedFlag =  props.rootCategorySelectedFlag;

    const getLink = (index) => {
        return "/howto/" + categoryNames.slice(0, index).join("/")
    }

    const renderItems = categoryNames.map((item, index) => {
        return (
            <Breadcrumb.Item key={item} active={index + 1 === categoryNames.length} linkAs={Link} linkProps={{ to: getLink(index + 1), className: "link" }}>
                {item}
            </Breadcrumb.Item>
        )
    })

    return (
        <Breadcrumb>
            <Breadcrumb.Item key="root" active={rootCategorySelectedFlag} linkAs={Link} linkProps={{ to: "/howto", className: "link" }}>
                <span>
                    <FontAwesomeIcon icon={faHome} />
                </span>
            </Breadcrumb.Item>

            {renderItems}
        </Breadcrumb>
    )
}
export default HowToBreadcrumb