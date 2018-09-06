import { Cities } from "./cities";
import { States } from "./states";
import { StatusMaster } from "./status-master";
import { UserDetail } from "./user-detail";
import { CustomerGstinPlanDetail } from "./customer-gstin-plan-detail";

export class CustomerGstinDetail {
	private  _gstId:Number;
	private  _customerId:Number;
	private  _customerName:String;
	private  _legalName:String; 
	private  _businessName:String;
	private  _businessType:String;
	private  _referralCode:String;
	private  _email:String;
	private  _contact:String;
	private  _scheme:String;
	private  _planAmount:DoubleRange;
	private  _stateId:Number;
	private  _planId:Number;
	private  _state:String;
	private  _cityId:Number;
	private  _city:String;
	private  _gstin:String;
	private  _statusId:Number;
	private  _status:String;

	private _gstPlan : CustomerGstinPlanDetail[];



    /**
     * Getter gstPlan
     * @return {CustomerGstinPlanDetail[]}
     */
	public get gstPlan(): CustomerGstinPlanDetail[] {
		return this._gstPlan;
	}

    /**
     * Setter gstPlan
     * @param {CustomerGstinPlanDetail[]} value
     */
	public set gstPlan(value: CustomerGstinPlanDetail[]) {
		this._gstPlan = value;
	}
	
    /**
     * Getter gstId
     * @return {Number}
     */
	public get gstId(): Number {
		return this._gstId;
	}

    /**
     * Getter customerId
     * @return {Number}
     */
	public get customerId(): Number {
		return this._customerId;
	}

    /**
     * Getter customerName
     * @return {String}
     */
	public get customerName(): String {
		return this._customerName;
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
     * Getter businessType
     * @return {String}
     */
	public get businessType(): String {
		return this._businessType;
	}

    /**
     * Getter referralCode
     * @return {String}
     */
	public get referralCode(): String {
		return this._referralCode;
	}

    /**
     * Getter email
     * @return {String}
     */
	public get email(): String {
		return this._email;
	}

    /**
     * Getter contact
     * @return {String}
     */
	public get contact(): String {
		return this._contact;
	}

    /**
     * Getter scheme
     * @return {String}
     */
	public get scheme(): String {
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
     * @return {Number}
     */
	public get stateId(): Number {
		return this._stateId;
	}

    /**
     * Getter planId
     * @return {Number}
     */
	public get planId(): Number {
		return this._planId;
	}

    /**
     * Getter state
     * @return {String}
     */
	public get state(): String {
		return this._state;
	}

    /**
     * Getter cityId
     * @return {Number}
     */
	public get cityId(): Number {
		return this._cityId;
	}

    /**
     * Getter city
     * @return {String}
     */
	public get city(): String {
		return this._city;
	}

    /**
     * Getter gstin
     * @return {String}
     */
	public get gstin(): String {
		return this._gstin;
	}

    /**
     * Getter statusId
     * @return {Number}
     */
	public get statusId(): Number {
		return this._statusId;
	}

    /**
     * Getter status
     * @return {String}
     */
	public get status(): String {
		return this._status;
	}

    /**
     * Setter gstId
     * @param {Number} value
     */
	public set gstId(value: Number) {
		this._gstId = value;
	}

    /**
     * Setter customerId
     * @param {Number} value
     */
	public set customerId(value: Number) {
		this._customerId = value;
	}

    /**
     * Setter customerName
     * @param {String} value
     */
	public set customerName(value: String) {
		this._customerName = value;
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
     * Setter businessType
     * @param {String} value
     */
	public set businessType(value: String) {
		this._businessType = value;
	}

    /**
     * Setter referralCode
     * @param {String} value
     */
	public set referralCode(value: String) {
		this._referralCode = value;
	}

    /**
     * Setter email
     * @param {String} value
     */
	public set email(value: String) {
		this._email = value;
	}

    /**
     * Setter contact
     * @param {String} value
     */
	public set contact(value: String) {
		this._contact = value;
	}

    /**
     * Setter scheme
     * @param {String} value
     */
	public set scheme(value: String) {
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
     * @param {Number} value
     */
	public set stateId(value: Number) {
		this._stateId = value;
	}

    /**
     * Setter planId
     * @param {Number} value
     */
	public set planId(value: Number) {
		this._planId = value;
	}

    /**
     * Setter state
     * @param {String} value
     */
	public set state(value: String) {
		this._state = value;
	}

    /**
     * Setter cityId
     * @param {Number} value
     */
	public set cityId(value: Number) {
		this._cityId = value;
	}

    /**
     * Setter city
     * @param {String} value
     */
	public set city(value: String) {
		this._city = value;
	}

    /**
     * Setter gstin
     * @param {String} value
     */
	public set gstin(value: String) {
		this._gstin = value;
	}

    /**
     * Setter statusId
     * @param {Number} value
     */
	public set statusId(value: Number) {
		this._statusId = value;
	}

    /**
     * Setter status
     * @param {String} value
     */
	public set status(value: String) {
		this._status = value;
	}
	
    
}
