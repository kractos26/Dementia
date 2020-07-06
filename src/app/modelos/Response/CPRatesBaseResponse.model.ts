import { CointPaymentRateResponse } from './CoinPaymentRateResponse.model';

export class CPRatesBaseResponse
    {
        BTC:CointPaymentRateResponse;
        LTC :CointPaymentRateResponse;
        USD:CointPaymentRateResponse;
        LTCT:CointPaymentRateResponse;
    }