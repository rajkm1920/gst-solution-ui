export class GST{
    
    private  _gstId:number;
	private  _customerId:number;
	private _customerName:string;
	private _legalName:string; 
	private _businessName:string;
	private _customerType:string;
	private _referralCode:string;
	private _email:string;
	private _contact:string;
	private _scheme:string;
	private  _stateId:number;
	private  _planId:number;
	private _state:string;
	private  _cityId:number;
	private _city:string;
	private _gstin:string;
	private  _statusId:number;
    private _status:string;
    private _months:number;
    private _businessType:string;
    private _planType:string;
    private _planAmount:DoubleRange;
    private _serviceAmount:number;

    /**
     * Getter serviceAmount
     * @return {DoubleRange}
     */
	public get serviceAmount(): number {
		return this._serviceAmount;
	}

    /**
     * Setter serviceAmount
     * @param {number} value
     */
	public set serviceAmount(value: number) {
		this._serviceAmount = value;
	}
    


    /**
     * Getter planType
     * @return {string}
     */
	public get planType(): string {
		return this._planType;
	}

    /**
     * Setter planType
     * @param {string} value
     */
	public set planType(value: string) {
		this._planType = value;
	}


    /**
     * Getter businessType
     * @return {string}
     */
	public get businessType(): string {
		return this._businessType;
	}

    /**
     * Setter businessType
     * @param {string} value
     */
	public set businessType(value: string) {
		this._businessType = value;
	}



    /**
     * Getter months
     * @return {number}
     */
	public get months(): number {
		return this._months;
	}

    /**
     * Setter months
     * @param {number} value
     */
	public set months(value: number) {
		this._months = value;
	}
    
    /**
     * Getter gstId
     * @return {number}
     */
	public get gstId(): number {
		return this._gstId;
	}

    /**
     * Getter customerId
     * @return {number}
     */
	public get customerId(): number {
		return this._customerId;
	}

    /**
     * Getter customerName
     * @return {string}
     */
	public get customerName(): string {
		return this._customerName;
	}

    /**
     * Getter legalName
     * @return {string}
     */
	public get legalName(): string {
		return this._legalName;
	}

    /**
     * Getter businessName
     * @return {string}
     */
	public get businessName(): string {
		return this._businessName;
	}

    /**
     * Getter customerType
     * @return {string}
     */
	public get customerType(): string {
		return this._customerType;
	}

    /**
     * Getter referralCode
     * @return {string}
     */
	public get referralCode(): string {
		return this._referralCode;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter contact
     * @return {string}
     */
	public get contact(): string {
		return this._contact;
	}

    /**
     * Getter scheme
     * @return {string}
     */
	public get scheme(): string {
		return this._scheme;
	}

    /**
     * Getter planAmount
     * @return {DoubleRange}
     */
	public get planAmount(): DoubleRange {
		return this._planAmount;
	}

    /**
     * Getter stateId
     * @return {number}
     */
	public get stateId(): number {
		return this._stateId;
	}

    /**
     * Getter planId
     * @return {number}
     */
	public get planId(): number {
		return this._planId;
	}

    /**
     * Getter state
     * @return {string}
     */
	public get state(): string {
		return this._state;
	}

    /**
     * Getter cityId
     * @return {number}
     */
	public get cityId(): number {
		return this._cityId;
	}

    /**
     * Getter city
     * @return {string}
     */
	public get city(): string {
		return this._city;
	}

    /**
     * Getter gstin
     * @return {string}
     */
	public get gstin(): string {
		return this._gstin;
	}

    /**
     * Getter statusId
     * @return {number}
     */
	public get statusId(): number {
		return this._statusId;
	}

    /**
     * Getter status
     * @return {string}
     */
	public get status(): string {
		return this._status;
	}

    /**
     * Setter gstId
     * @param {number} value
     */
	public set gstId(value: number) {
		this._gstId = value;
	}

    /**
     * Setter customerId
     * @param {number} value
     */
	public set customerId(value: number) {
		this._customerId = value;
	}

    /**
     * Setter customerName
     * @param {string} value
     */
	public set customerName(value: string) {
		this._customerName = value;
	}

    /**
     * Setter legalName
     * @param {string} value
     */
	public set legalName(value: string) {
		this._legalName = value;
	}

    /**
     * Setter businessName
     * @param {string} value
     */
	public set businessName(value: string) {
		this._businessName = value;
	}

    /**
     * Setter customerType
     * @param {string} value
     */
	public set customerType(value: string) {
		this._customerType = value;
	}

    /**
     * Setter referralCode
     * @param {string} value
     */
	public set referralCode(value: string) {
		this._referralCode = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter contact
     * @param {string} value
     */
	public set contact(value: string) {
		this._contact = value;
	}

    /**
     * Setter scheme
     * @param {string} value
     */
	public set scheme(value: string) {
		this._scheme = value;
	}

    /**
     * Setter planAmount
     * @param {DoubleRange} value
     */
	public set planAmount(value: DoubleRange) {
		this._planAmount = value;
	}

    /**
     * Setter stateId
     * @param {number} value
     */
	public set stateId(value: number) {
		this._stateId = value;
	}

    /**
     * Setter planId
     * @param {number} value
     */
	public set planId(value: number) {
		this._planId = value;
	}

    /**
     * Setter state
     * @param {string} value
     */
	public set state(value: string) {
		this._state = value;
	}

    /**
     * Setter cityId
     * @param {number} value
     */
	public set cityId(value: number) {
		this._cityId = value;
	}

    /**
     * Setter city
     * @param {string} value
     */
	public set city(value: string) {
		this._city = value;
	}

    /**
     * Setter gstin
     * @param {string} value
     */
	public set gstin(value: string) {
		this._gstin = value;
	}

    /**
     * Setter statusId
     * @param {number} value
     */
	public set statusId(value: number) {
		this._statusId = value;
	}

    /**
     * Setter status
     * @param {string} value
     */
	public set status(value: string) {
		this._status = value;
	}

}