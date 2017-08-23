/**
 * Address - https://hack.softheon.io/api/payments/docs/general/schemas/#address
 * 
 * @export
 * @class Address
 */
export class Address {

    /**
     * The first line of the street address. Typically contains the number and street name
     * 
     * @type {string}
     * @memberof Address
     */
    public address1: string = "123 Main Street";

    /**
     * The second line of the street address. Typically contains an apartment number, suite number or department
     * 
     * @type {string}
     * @memberof Address
     */
    public address2: string = "Apt A";

    /**
     * The city where the address is situated
     * 
     * @type {string}
     * @memberof Address
     */
    public city: string = "Metropolis";

    /**
     * The state where the address is located
     * 
     * @type {string}
     * @memberof Address
     */
    public state: string = "NY";

    /**
     * The postal code for the address
     * 
     * @type {string}
     * @memberof Address
     */
    public zipCode: string = "12345";
}
