import { Plan } from "./plans";
import { CustomerGstinPlanDetail } from "./customer-gstin-plan-detail";
export class UserDetail {
  private _rmId: Number;
  private _customerId: Number;
  private _id: Number;
  private _customerIdArray: Number[] = [];
  private _userId: Number;
  private _name: String;
  private _customerName: String;
  private _creationTime: String;
  private _contact: String;
  private _email: String;
  private _statusId: Number;
  private _status: String;
  private _role: String;
  private _address: String;
  private _password: String;
  private _walletAmount: String;
  private _plans: Plan[];
  private _gstPlans: CustomerGstinPlanDetail[];
  /**
   * Getter walletAmount
   * @return {String}
   */
  public get walletAmount(): String {
    return this._walletAmount;
  }

  /**
   * Setter walletAmount
   * @param {String} value
   */
  public set walletAmount(value: String) {
    this._walletAmount = value;
  }


  public get password(): String {
    return this._password;
  }

  public set password(value: String) {
    this._password = value;
  }

  public get rmId(): Number {
    return this._rmId;
  }

  public set rmId(value: Number) {
    this._rmId = value;
  }

  public get customerId(): Number {
    return this._customerId;
  }

  public set customerId(value: Number) {
    this._customerId = value;
  }

  public get creationTime(): String {
    return this._creationTime;
  }

  public set creationTime(value: String) {
    this._creationTime = value;
  }

  public get customerName(): String {
    return this._customerName;
  }

  public set customerName(value: String) {
    this._customerName = value;
  }
  /**
   * Getter gstPlans
   * @return {Number[]}
   */
  public get customerIdArray(): Number[] {
    return this._customerIdArray;
  }

  /**
   * Setter gstPlans
   * @param {Number[]} value
   */
  public set customerIdArray(value: Number[]) {
    this._customerIdArray = value;
  }

  /**
   * Getter userId
   * @return {Number}
   */
  public get userId(): Number {
    return this._userId;
  }

  /**
   * Setter statusId
   * @param {Number} value
   */
  public set userId(value: Number) {
    this._userId = value;
  }

  /**
   * Getter statusId
   * @return {Number}
   */
  public get statusId(): Number {
    return this._statusId;
  }

  /**
   * Setter statusId
   * @param {Number} value
   */
  public set statusId(value: Number) {
    this._statusId = value;
  }

  /**
   * Getter status
   * @return {String}
   */
  public get status(): String {
    return this._status;
  }

  /**
   * Setter status
   * @param {String} value
   */
  public set status(value: String) {
    this._status = value;
  }

  /**
   * Getter gstPlans
   * @return {CustomerGstinPlanDetail[]}
   */
  public get gstPlans(): CustomerGstinPlanDetail[] {
    return this._gstPlans;
  }

  /**
   * Setter gstPlans
   * @param {CustomerGstinPlanDetail[]} value
   */
  public set gstPlans(value: CustomerGstinPlanDetail[]) {
    this._gstPlans = value;
  }

  /**
   * Getter plans
   * @return {Plan[]}
   */
  public get plans(): Plan[] {
    return this._plans;
  }

  /**
   * Setter id
   * @param {Number} value
   */
  public set id(value: Number) {
    this._id = value;
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
   * Setter role
   * @param {String} value
   */
  public set role(value: String) {
    this._role = value;
  }

  /**
   * Setter address
   * @param {String} value
   */
  public set address(value: String) {
    this._address = value;
  }

  /**
   * Setter plans
   * @param {Plan[]} value
   */
  public set plans(value: Plan[]) {
    this._plans = value;
  }

  public get id(): Number {
    return this._id;
  }
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
   * Getter address
   * @return {String}
   */
  public get role(): String {
    return this._role;
  }
}
