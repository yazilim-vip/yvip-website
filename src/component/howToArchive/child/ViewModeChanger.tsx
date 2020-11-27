import React from 'react'

// ---------------------------
//  External Dependencies
// ---------------------------
import {
    ButtonGroup,
    ToggleButton,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons'

// ---------------------------
//  Internal Dependencies
// ---------------------------
import {
    FileManagerViewMode,
    HOWTO_VIEW_MODE_GRID_VIEW,
    HOWTO_VIEW_MODE_LIST_VIEW
} from '../HowToArchiveConstants'
import { TooltipElement } from '../..'

export interface ViewModeChangerProps {
    viewMode: FileManagerViewMode
    viewModeToggleEventHandler: () => void
}

export const ViewModeChanger = ({
    viewMode,
    viewModeToggleEventHandler
}: ViewModeChangerProps) => {
    return (
        <ButtonGroup toggle className='float-right'>
            <TooltipElement
                placement='bottom'
                tooltipElement='Grid View Mode'
            >
                <ToggleButton
                    type='radio'
                    variant='secondary'
                    name='radio'
                    value={viewMode === HOWTO_VIEW_MODE_GRID_VIEW}
                    checked={viewMode === HOWTO_VIEW_MODE_GRID_VIEW}
                    onChange={() => viewModeToggleEventHandler()}
                >
                    <FontAwesomeIcon icon={faTh} />
                </ToggleButton>
            </TooltipElement>
            <TooltipElement
                placement='bottom'
                tooltipElement='List View Mode'
            >
            
                <ToggleButton
                    type='radio'
                    variant='secondary'
                    name='radio'
                    value={viewMode === HOWTO_VIEW_MODE_LIST_VIEW}
                    checked={viewMode === HOWTO_VIEW_MODE_LIST_VIEW}
                    onChange={() => viewModeToggleEventHandler()}
                >
                    <FontAwesomeIcon icon={faThList} />
                </ToggleButton>
            </TooltipElement>
        </ButtonGroup>
    )
}
