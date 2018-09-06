import { DocumentDetail } from './document-detail';
export class Invoice {
    private  _invoiceId:number;
	private  _customerId:number;
    private  _gstinPlanId:number;
    private  _gstinId:number;
    private  _gstinNumber:String;
	private  _customerName:String;
	private  _rmId:number;
	private  _customerGstinPlanId:number;
	private  _statusId:number;
	private  _status:String;
	private  _title:String;
	private  _invoiceAmount:number;
	private  _processedInvoiceId:number;
	private  _processedStatus:number;
	private  _invoiceDate:String;
	private  _createdBy:number;
	private  _createTime:String;
	private  _updateTime:String;
    private  _updatedBy:number;
    private  _month:number;
    private  _year:number;
    private _reportId:number;
    private  _invoiceDocuments:DocumentDetail[];


    /**
     * Getter reportId
     * @return {number}
     */
	public get reportId(): number {
		return this._reportId;
	}

    /**
     * Setter reportId
     * @param {number} value
     */
	public set reportId(value: number) {
		this._reportId = value;
	}
    
    /**
     * Getter year
     * @return {number}
     */
	public get year(): number {
		return this._year;
	}

    /**
     * Setter year
     * @param {number} value
     */
	public set year(value: number) {
		this._year = value;
	}

    /**
     * Getter monty
     * @return {number}
     */
	public get month(): number {
		return this._month;
	}

    /**
     * Setter monty
     * @param {number} value
     */
	public set month(value: number) {
		this._month = value;
	}
     




    /**
     * Getter gstinId
     * @return {number}
     */
	public get gstinId(): number {
		return this._gstinId;
	}

    /**
     * Setter gstinId
     * @param {number} value
     */
	public set gstinId(value: number) {
		this._gstinId = value;
	}


    /**
     * Getter invoiceDocuments
     * @return {DocumentDetail[]}
     */
	public get invoiceDocuments(): DocumentDetail[] {
		return this._invoiceDocuments;
	}

    /**
     * Setter invoiceDocuments
     * @param {DocumentDetail[]} value
     */
	public set invoiceDocuments(value: DocumentDetail[]) {
		this._invoiceDocuments = value;
	}


    /**
     * Getter invoiceId
     * @return {number}
     */
	public get invoiceId(): number {
		return this._invoiceId;
	}

    /**
     * Getter customerId
     * @return {number}
     */
	public get customerId(): number {
		return this._customerId;
	}

    /**
     * Getter gstinPlanId
     * @return {number}
     */
	public get gstinPlanId(): number {
		return this._gstinPlanId;
	}

    /**
     * Getter gstinNumber
     * @return {String}
     */
	public get gstinNumber(): String {
		return this._gstinNumber;
	}

    /**
     * Getter customerName
     * @return {String}
     */
	public get customerName(): String {
		return this._customerName;
	}

    /**
     * Getter rmId
     * @return {number}
     */
	public get rmId(): number {
		return this._rmId;
	}

    /**
     * Getter customerGstinPlanId
     * @return {number}
     */
	public get customerGstinPlanId(): number {
		return this._customerGstinPlanId;
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
     * Getter title
     * @return {String}
     */
	public get title(): String {
		return this._title;
	}

    /**
     * Getter invoiceAmount
     * @return {number}
     */
	public get invoiceAmount(): number {
		return this._invoiceAmount;
	}

    /**
     * Getter processedInvoiceId
     * @return {number}
     */
	public get processedInvoiceId(): number {
		return this._processedInvoiceId;
	}

    /**
     * Getter processedStatus
     * @return {number}
     */
	public get processedStatus(): number {
		return this._processedStatus;
	}

    /**
     * Getter invoiceDate
     * @return {String}
     */
	public get invoiceDate(): String {
		return this._invoiceDate;
	}

    /**
     * Getter createdBy
     * @return {number}
     */
	public get createdBy(): number {
		return this._createdBy;
	}

    /**
     * Getter createTime
     * @return {String}
     */
	public get createTime(): String {
		return this._createTime;
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
     * Setter invoiceId
     * @param {number} value
     */
	public set invoiceId(value: number) {
		this._invoiceId = value;
	}

    /**
     * Setter customerId
     * @param {number} value
     */
	public set customerId(value: number) {
		this._customerId = value;
	}

    /**
     * Setter gstinPlanId
     * @param {number} value
     */
	public set gstinPlanId(value: number) {
		this._gstinPlanId = value;
	}

    /**
     * Setter gstinNumber
     * @param {String} value
     */
	public set gstinNumber(value: String) {
		this._gstinNumber = value;
	}

    /**
     * Setter customerName
     * @param {String} value
     */
	public set customerName(value: String) {
		this._customerName = value;
	}

    /**
     * Setter rmId
     * @param {number} value
     */
	public set rmId(value: number) {
		this._rmId = value;
	}

    /**
     * Setter customerGstinPlanId
     * @param {number} value
     */
	public set customerGstinPlanId(value: number) {
		this._customerGstinPlanId = value;
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
     * Setter title
     * @param {String} value
     */
	public set title(value: String) {
		this._title = value;
	}

    /**
     * Setter invoiceAmount
     * @param {number} value
     */
	public set invoiceAmount(value: number) {
		this._invoiceAmount = value;
	}

    /**
     * Setter processedInvoiceId
     * @param {number} value
     */
	public set processedInvoiceId(value: number) {
		this._processedInvoiceId = value;
	}

    /**
     * Setter processedStatus
     * @param {number} value
     */
	public set processedStatus(value: number) {
		this._processedStatus = value;
	}

    /**
     * Setter invoiceDate
     * @param {String} value
     */
	public set invoiceDate(value: String) {
		this._invoiceDate = value;
	}

    /**
     * Setter createdBy
     * @param {number} value
     */
	public set createdBy(value: number) {
		this._createdBy = value;
	}

    /**
     * Setter createTime
     * @param {String} value
     */
	public set createTime(value: String) {
		this._createTime = value;
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
