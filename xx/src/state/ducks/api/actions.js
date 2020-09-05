import { PROCESS_API_ERROR } from './types';

export const processError = (payload) => ({ type: PROCESS_API_ERROR, payload });

export default { processError };
