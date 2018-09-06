export class QueryResponse {
  private _responseId: number;
  private _queryId: number;
  private _response: String;
  private _statusId: number;
  private _status: String;
  private _createTime: String;
  private _createdBy: number;
  private _updateTime: String;
  private _updatedBy: number;
  private _customerId: number;

  /**
   * Getter customerId
   * @return {number}
   */
  public get customerId(): number {
    return this._customerId;
  }

  /**
   * Setter customerId
   * @param {number} value
   */
  public set customerId(value: number) {
    this._customerId = value;
  }


  /**
   * Getter responseId
   * @return {number}
   */
  public get responseId(): number {
    return this._responseId;
  }

  /**
   * Getter queryId
   * @return {number}
   */
  public get queryId(): number {
    return this._queryId;
  }

  /**
   * Getter response
   * @return {String}
   */
  public get response(): String {
    return this._response;
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
   * @return {number}
   */
  public get createdBy(): number {
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
   * Setter responseId
   * @param {number} value
   */
  public set responseId(value: number) {
    this._responseId = value;
  }

  /**
   * Setter queryId
   * @param {number} value
   */
  public set queryId(value: number) {
    this._queryId = value;
  }

  /**
   * Setter response
   * @param {String} value
   */
  public set response(value: String) {
    this._response = value;
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
   * @param {number} value
   */
  public set createdBy(value: number) {
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
