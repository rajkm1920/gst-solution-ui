import { QueryResponse } from './query-response';

export class QueryDetail {
  private _queryId: number;
  private _customerId: number;
  private _customerName: String;
  private _title: String;
  private _query: String;
  private _statusId: number;
  private _status: String;
  private _createTime: String;
  private _createdBy: String;
  private _updateTime: String;
  private _updatedBy: number;
  private _queryResponses: QueryResponse[] = [];

  /**
   * Getter queryResponses
   * @return {QueryResponse[]}
   */
  public get queryResponses(): QueryResponse[] {
    return this._queryResponses;
  }

  /**
   * Setter queryResponses
   * @param {QueryResponse[]} value
   */
  public set queryResponses(value: QueryResponse[]) {
    this._queryResponses = value;
  }

  /**
   * Getter queryId
   * @return {number}
   */
  public get queryId(): number {
    return this._queryId;
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
   * @return {String}
   */
  public get customerName(): String {
    return this._customerName;
  }

  /**
   * Getter title
   * @return {String}
   */
  public get title(): String {
    return this._title;
  }

  /**
   * Getter query
   * @return {String}
   */
  public get query(): String {
    return this._query;
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
   * @return {String}
   */
  public get status(): String {
    return this._status;
  }

  /**
   * Getter createTime
   * @return {String}
   */
  public get createTime(): String {
    return this._createTime;
  }

  /**
   * Getter createdBy
   * @return {String}
   */
  public get createdBy(): String {
    return this._createdBy;
  }

  /**
   * Getter updateTime
   * @return {String}
   */
  public get updateTime(): String {
    return this._updateTime;
  }

  /**
   * Getter updatedBy
   * @return {number}
   */
  public get updatedBy(): number {
    return this._updatedBy;
  }

  /**
   * Setter queryId
   * @param {number} value
   */
  public set queryId(value: number) {
    this._queryId = value;
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
   * @param {String} value
   */
  public set customerName(value: String) {
    this._customerName = value;
  }

  /**
   * Setter title
   * @param {String} value
   */
  public set title(value: String) {
    this._title = value;
  }

  /**
   * Setter query
   * @param {String} value
   */
  public set query(value: String) {
    this._query = value;
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
   * @param {String} value
   */
  public set status(value: String) {
    this._status = value;
  }

  /**
   * Setter createTime
   * @param {String} value
   */
  public set createTime(value: String) {
    this._createTime = value;
  }

  /**
   * Setter createdBy
   * @param {String} value
   */
  public set createdBy(value: String) {
    this._createdBy = value;
  }

  /**
   * Setter updateTime
   * @param {String} value
   */
  public set updateTime(value: String) {
    this._updateTime = value;
  }

  /**
   * Setter updatedBy
   * @param {number} value
   */
  public set updatedBy(value: number) {
    this._updatedBy = value;
  }
}
