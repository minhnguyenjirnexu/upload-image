// Some api call will be produce in here

import * as zaloApi from '../lib/zalo-api';

export const sendIntroQuestion = (ctx) => zaloApi.sendIntroQuestion(ctx.userId, ctx.query.question)