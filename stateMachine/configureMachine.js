import {StateMachine} from 'xstate';
import  stateMachine from './stateMachine';
import getInitialContext from './getInitialContext';
import * as actions from './actions'
import * as guards from './guards'
import * as services from './services'

/**
 *
 * @param {Object} context
 * @returns {StateMachine}
 */
const configureMachine = (context = getInitialContext()) =>
    stateMachine
        .withConfig({
        actions,
        guards,
        services
        })
        .withContext(context);

export default configureMachine;