import { createMachine } from "xstate";
import { intro, processing, loanAmount, loanTenor, loanPurpose, error, question, otp, fullName, phoneNumber } from "../lib/constants/States";
import { START, ANSWER } from "../lib/constants/Actions";

function getState(name, target) {
    const { meta } = option;
    return {
        initial: question,
        meta,
        on: {
            [ANSWER]: {
                target: `.${validating}`,
                actions:  'updateCtxWithAnswer'
            }
        },
        states: {
            [question]: {
                entry: `ask${name}`
            },
            [error]: {},
            [success]: {},
            [validating]: {}
        },
        onDone: `.${target}`
    }
}

export const stateMachine = createMachine({
    initial: intro,
    context: {

    },
    states: {
        [intro]: {
            initial: question,
            on: {
                [START]: {
                    target: `.${processing}`,
                    actions: 'updateRecipientId'
                }
            }
        },
        [processing]: {
            initial: loanAmount,
            states: {
                [loanAmount]: getState(loanAmount, loanTenor),
                [loanTenor]: getState(loanTenor, loanPurpose),
                [loanPurpose]: getState(loanPurpose, fullName),
                [fullName]: getState(fullName, phoneNumber),
                [phoneNumber]: getState(phoneNumber, email),
                [email]: getState(email, otp),
            }
        }
    }
})