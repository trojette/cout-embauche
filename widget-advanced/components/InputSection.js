import React, { Component } from 'react'
import BasicInput from '../containers/BasicInput'
import AdvancedQuestions from '../containers/AdvancedQuestions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {textColour, themeColour, textColourOnWhite} from '../themeColours'

export default class Input extends Component {
	render() {
		let {showInput, showAdvanced, toggleAdvancedSection, inputTouched, inputChanged} = this.props
		if (!showInput) return null

		return (
			<div>
				<BasicInput />
				{ showAdvanced &&
					<AdvancedQuestions />
				}
				<div>
				{ !showAdvanced && <ReactCSSTransitionGroup
					component="div"
					id="user-next-action"
					transitionName="user-next-action-animation"
					transitionEnterTimeout={10000}
					transitionLeaveTimeout={700} >
					{ !inputTouched &&
						<div key="1" className="input-tip">
							<p>Renseignez votre situation ci-dessus</p>
						</div>}
					{ inputChanged &&
						<div key="2" className="input-tip">
							<p>Votre estimation est mise à jour à chaque changement</p>
							<p>
								<a href="#" style={{color: textColourOnWhite}}
								id="show-advanced"
								onClick={toggleAdvancedSection}
								title="Allez plus loin dans l'estimation avec quelques questions supplémentaires">
								Affinez les résultats
								</a>
							</p>
						</div>
					}
				</ReactCSSTransitionGroup>}
				{ showAdvanced &&
						<a href="#"
						id="reinit"
						onClick={toggleAdvancedSection}
						title="Réinitialiser les questions supplémentaires">
						Réinitialiser
						</a>
				}
				</div>

			</div>
		)
	}
}