import { intro, loanAmount, loanPurpose, fullName, phoneNumber, otp } from './constants/States';
import { OCB_ENUM } from './constants/Enums';

const getQuestionByStateKey = (key) => {
    const byKey = {
        [intro]: 'Welcome to the Zalo Chat bot',
        [loanAmount]: 'Please enter your amount you want, should be around 5,000,000 VND to 10,000,000 VND',
        [loanTenor]: 'Please enter the tenor you want to borrow',
        [loanPurpose]: OCB_ENUM.LOAN_PURPOSE,
        [fullName]: 'Please enter your full Name?',
        [phoneNumber]: 'Please enter your phone number? Must be digit only.',
        [otp]: 'Please enter your otp that we sent over your phone number'
    }

    return (
        byKey[key] && {
          question: byKey[key],
          key: key
        }
    );
}

export default getQuestionByStateKey;