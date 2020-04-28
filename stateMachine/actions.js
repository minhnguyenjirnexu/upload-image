import { assign } from "xstate/lib/actionTypes";
import getQuestionByStateKey from "../lib/getQuestionByStateKey";
import { loanAmount, loanTenor, loanPurpose } from "../lib/constants/States";

const updateConversation = (ctx, {data}) => ctx.conversations.map((chatItem) => chatItem.key === data.key ? {
    ...chatItem,
    answer: data.answer
} : chatItem);

export const updateCtxWithAnswer = assign({
    conversations: updateConversation
})

export const updateCtxWithResults = assign({
    results: (ctx, {data}) => data
})

export const askQuestion = (key) => assign({
    conversations: (ctx) => [].concat(ctx.conversations, getQuestionByStateKey(key))
})

export const askLoanAmount = askQuestion(loanAmount)
export const askLoanTenor = askQuestion(loanTenor)
export const askLoanPurpose = askQuestion(loanPurpose)