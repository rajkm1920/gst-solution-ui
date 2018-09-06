export class CustomerDto {

    private  _id :Number;
	private  _custmorId :Number;
	private  _employeeCode:String;
	private  _name :String;
	private  _contact:String;
	private  _email:String;
	private  _address:String;
	private  _walletAmount:DoubleRange;
	private  _referralCode:String;
	private  _legalName:String;
	private  _businessName:String;
	private  _gstin:String;
	private  _cityId:Number;
	private  _statId:Number;
	private  _city:String;

    /**
     * Getter id
     * @return {Number}
     */
	public get id(): Number {
		return this._id;
	}

    /**
     * Getter custmorId
     * @return {Number}
     */
	public get custmorId(): Number {
		return this._custmorId;
	}

    /**
     * Getter employeeCode
     * @return {String}
     */
	public get employeeCode(): String {
		return this._employeeCode;
	}

    /**
     * Getter name
     * @return {String}
     */
	public get name(): String {
		return this._name;
	}

    /**
     * Getter contact
     * @return {String}
     */
	public get contact(): String {
		return this._contact;
	}

    /**
     * Getter email
     * @return {String}
     */
	public get email(): String {
		return this._email;
	}

    /**
     * Getter address
     * @return {String}
     */
	public get address(): String {
		return this._address;
	}

    /**
     * Getter walletAmount
     * @return {DoubleRange}
     */
	public get walletAmount(): DoubleRange {
		return this._walletAmount;
	}

    /**
     * Getter referralCode
     * @return {String}
     */
	public get referralCode(): String {
		return this._referralCode;
	}

    /**
     * Getter legalName
     * @return {String}
     */
	public get legalName(): String {
		return this._legalName;
	}

    /**
     * Getter businessName
     * @return {String}
     */
	public get businessName(): String {
		return this._businessName;
	}

    /**
     * Getter gstin
     * @return {String}
     */
	public get gstin(): String {
		return this._gstin;
	}

    /**
     * Getter cityId
     * @return {Number}
     */
	public get cityId(): Number {
		return this._cityId;
	}

    /**
     * Getter statId
     * @return {Number}
     */
	public get statId(): Number {
		return this._statId;
	}

    /**
     * Getter city
     * @return {String}
     */
	public get city(): String {
		return this._city;
	}

    /**
     * Getter state
     * @return {String}
     */
	public get state(): String {
		return this._state;
	}

    /**
     * Getter planId
     * @return {Number}
     */
	public get planId(): Number {
		return this._planId;
	}

    /**
     * Getter plantitle
     * @return {String}
     */
	public get plantitle(): String {
		return this._plantitle;
	}

    /**
     * Getter planStartDate
     * @return {String}
     */
	public get planStartDate(): String {
		return this._planStartDate;
	}

    /**
     * Getter planEndDate
     * @return {String}
     */
	public get planEndDate(): String {
		return this._planEndDate;
	}

    /**
     * Getter paymentStatus
     * @return {Number }
     */
	public get paymentStatus(): Number  {
		return this._paymentStatus;
	}

    /**
     * Getter ceateTime
     * @return {String}
     */
	public get ceateTime(): String {
		return this._ceateTime;
	}

    /**
     * Setter id
     * @param {Number} value
     */
	public set id(value: Number) {
		this._id = value;
	}

    /**
     * Setter custmorId
     * @param {Number} value
     */
	public set custmorId(value: Number) {
		this._custmorId = value;
	}

    /**
     * Setter employeeCode
     * @param {String} value
     */
	public set employeeCode(value: String) {
		this._employeeCode = value;
	}

    /**
     * Setter name
     * @param {String} value
     */
	public set name(value: String) {
		this._name = value;
	}

    /**
     * Setter contact
     * @param {String} value
     */
	public set contact(value: String) {
		this._contact = value;
	}

    /**
     * Setter email
     * @param {String} value
     */
	public set email(value: String) {
		this._email = value;
	}

    /**
     * Setter address
     * @param {String} value
     */
	public set address(value: String) {
		this._address = value;
	}

    /**
     * Setter walletAmount
     * @param {DoubleRange} value
     */
	public set walletAmount(value: DoubleRange) {
		this._walletAmount = value;
	}

    /**
     * Setter referralCode
     * @param {String} value
     */
	public set referralCode(value: String) {
		this._referralCode = value;
	}

    /**
     * Setter legalName
     * @param {String} value
     */
	public set legalName(value: String) {
		this._legalName = value;
	}

    /**
     * Setter businessName
     * @param {String} value
     */
	public set businessName(value: String) {
		this._businessName = value;
	}

    /**
     * Setter gstin
     * @param {String} value
     */
	public set gstin(value: String) {
		this._gstin = value;
	}

    /**
     * Setter cityId
     * @param {Number} value
     */
	public set cityId(value: Number) {
		this._cityId = value;
	}

    /**
     * Setter statId
     * @param {Number} value
     */
	public set statId(value: Number) {
		this._statId = value;
	}

    /**
     * Setter city
     * @param {String} value
     */
	public set city(value: String) {
		this._city = value;
	}

    /**
     * Setter state
     * @param {String} value
     */
	public set state(value: String) {
		this._state = value;
	}

    /**
     * Setter planId
     * @param {Number} value
     */
	public set planId(value: Number) {
		this._planId = value;
	}

    /**
     * Setter plantitle
     * @param {String} value
     */
	public set plantitle(value: String) {
		this._plantitle = value;
	}

    /**
     * Setter planStartDate
     * @param {String} value
     */
	public set planStartDate(value: String) {
		this._planStartDate = value;
	}

    /**
     * Setter planEndDate
     * @param {String} value
     */
	public set planEndDate(value: String) {
		this._planEndDate = value;
	}

    /**
     * Setter paymentStatus
     * @param {Number } value
     */
	public set paymentStatus(value: Number ) {
		this._paymentStatus = value;
	}

    /**
     * Setter ceateTime
     * @param {String} value
     */
	public set ceateTime(value: String) {
		this._ceateTime = value;
	}
	private  _state:String;
	private  _planId:Number;
	private  _plantitle:String;
	private  _planStartDate:String;
	private  _planEndDate:String;
	private  _paymentStatus:Number ;
	private  _ceateTime:String;
	
	
	
	

}
