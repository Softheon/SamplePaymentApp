import { PaymentMethod } from './payment-method.model';

/**
 * Payment Request Model - https://hack.softheon.io/api/payments/docs/general/schemas/#paymentrequestmodel
 * 
 * @export
 * @class PaymentRequest
 */
export class PaymentRequest {
    /**
     * The payment amount
     * 
     * @type {number}
     * @memberof PaymentRequest
     */
    public paymentAmount: number;

    /**
     * The description of what will be paid for
     * 
     * @type {string}
     * @memberof PaymentRequest
     */
    public description: string;

    /**
     * The client application provided reference ID for the payment
     * 
     * @type {string}
     * @memberof PaymentRequest
     */
    public referenceId: string;

    /**
     * An object representing the payment method for this payment
     * 
     * @type {PaymentMethod}
     * @memberof PaymentRequest
     */
    public paymentMethod: PaymentMethod;
}
