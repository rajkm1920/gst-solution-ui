export class DocumentDetail {
    private  _documentId:number;
	private  _invoiceId:number;
	private  _statusId:number;
	private  _status:String;
	private  _documentPath:String;
	private  _processedInvoiceId:number;
	private  _createTime:String;
	private  _createdBy:number;
	private  _updateTime:String;
    private  _updatedBy:number;

    /**
     * Getter documentId
     * @return {number}
     */
	public get documentId(): number {
		return this._documentId;
	}

    /**
     * Getter invoiceId
     * @return {number}
     */
	public get invoiceId(): number {
		return this._invoiceId;
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
     * Getter documentPath
     * @return {String}
     */
	public get documentPath(): String {
		return this._documentPath;
	}

    /**
     * Getter processedInvoiceId
     * @return {number}
     */
	public get processedInvoiceId(): number {
		return this._processedInvoiceId;
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
     * Setter documentId
     * @param {number} value
     */
	public set documentId(value: number) {
		this._documentId = value;
	}

    /**
     * Setter invoiceId
     * @param {number} value
     */
	public set invoiceId(value: number) {
		this._invoiceId = value;
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
     * Setter documentPath
     * @param {String} value
     */
	public set documentPath(value: String) {
		this._documentPath = value;
	}

    /**
     * Setter processedInvoiceId
     * @param {number} value
     */
	public set processedInvoiceId(value: number) {
		this._processedInvoiceId = value;
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
