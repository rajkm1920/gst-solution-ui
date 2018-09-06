export class ProcessInvoice {
    private  _processInvoiceid:number;
	private  _type:String;;
	private  _docIdArr :number[];
    private  _statusName:String;
    private  _schemeType:number;
	private  _reportId:number;
	private  _name:String;
	private  _invoiceNo:String;
	private  _invoiceId:number;
	private  _invoiceTitle:String;
    private  _gstId :number;
    private  _gstPlanId :number;
    private  _natureOfInvoice:String;
    private  _nature:String;
	private  _state:String;
	private  _invoiceDate:String;
	private  _hsn:String;
	private  _quantity:number;
	private  _rate:DoubleRange;
	private  _invoiceValue:DoubleRange;
	private  _taxableValue:DoubleRange;;
	private  _igstPercent:DoubleRange;
	private  _cgstPercent:DoubleRange;
	private  _sgstPercent:DoubleRange;

   
	private  _igstTotal:DoubleRange;
	private  _cgstTotal:DoubleRange;
	private  _sgstTotal:DoubleRange;
	private  _createTime:String;

	private  _createdBy:number;
	private  _updateTime:String;
	private  _updatedBy:number;
	private  _statusId:number;
    private  _status:String;
    private  _month:number;
    private  _year:number;


    /**
     * Getter gstPlanId
     * @return {number}
     */
	public get gstPlanId(): number {
		return this._gstPlanId;
	}

    /**
     * Setter gstPlanId
     * @param {number} value
     */
	public set gstPlanId(value: number) {
		this._gstPlanId = value;
	}
    

    /**
     * Getter processInvoiceid
     * @return {number}
     */
	public get processInvoiceid(): number {
		return this._processInvoiceid;
	}

    /**
     * Getter type
     * @return {String}
     */
	public get type(): String {
		return this._type;
	}

    /**
     * Getter docIdArr
     * @return {number[]}
     */
	public get docIdArr(): number[] {
		return this._docIdArr;
	}

    /**
     * Getter statusName
     * @return {String}
     */
	public get statusName(): String {
		return this._statusName;
	}

    /**
     * Getter schemeType
     * @return {String}
     */
	public get schemeType(): number {
		return this._schemeType;
	}

    /**
     * Getter reportId
     * @return {number}
     */
	public get reportId(): number {
		return this._reportId;
	}

    /**
     * Getter name
     * @return {String}
     */
	public get name(): String {
		return this._name;
	}

    /**
     * Getter invoiceNo
     * @return {String}
     */
	public get invoiceNo(): String {
		return this._invoiceNo;
	}

    /**
     * Getter invoiceId
     * @return {number}
     */
	public get invoiceId(): number {
		return this._invoiceId;
	}

    /**
     * Getter invoiceTitle
     * @return {String}
     */
	public get invoiceTitle(): String {
		return this._invoiceTitle;
	}

    /**
     * Getter gstId
     * @return {number}
     */
	public get gstId(): number {
		return this._gstId;
	}

    /**
     * Getter natureOfInvoice
     * @return {number}
     */
	public get natureOfInvoice(): String {
		return this._natureOfInvoice;
	}

    /**
     * Getter nature
     * @return {String}
     */
	public get nature(): String {
		return this._nature;
	}

    /**
     * Getter state
     * @return {String}
     */
	public get state(): String {
		return this._state;
	}

    /**
     * Getter invoiceDate
     * @return {String}
     */
	public get invoiceDate(): String {
		return this._invoiceDate;
	}

    /**
     * Getter hsn
     * @return {String}
     */
	public get hsn(): String {
		return this._hsn;
	}

    /**
     * Getter quantity
     * @return {number}
     */
	public get quantity(): number {
		return this._quantity;
	}

    /**
     * Getter rate
     * @return {DoubleRange}
     */
	public get rate(): DoubleRange {
		return this._rate;
	}

    /**
     * Getter invoiceValue
     * @return {DoubleRange}
     */
	public get invoiceValue(): DoubleRange {
		return this._invoiceValue;
	}

    /**
     * Getter taxableValue
     * @return {DoubleRange}
     */
	public get taxableValue(): DoubleRange {
		return this._taxableValue;
	}

    /**
     * Getter igstPercent
     * @return {DoubleRange}
     */
	public get igstPercent(): DoubleRange {
		return this._igstPercent;
	}

    /**
     * Getter cgstPercent
     * @return {DoubleRange}
     */
	public get cgstPercent(): DoubleRange {
		return this._cgstPercent;
	}

    /**
     * Getter sgstPercent
     * @return {DoubleRange}
     */
	public get sgstPercent(): DoubleRange {
		return this._sgstPercent;
	}

    /**
     * Getter igstTotal
     * @return {DoubleRange}
     */
	public get igstTotal(): DoubleRange {
		return this._igstTotal;
	}

    /**
     * Getter cgstTotal
     * @return {DoubleRange}
     */
	public get cgstTotal(): DoubleRange {
		return this._cgstTotal;
	}

    /**
     * Getter sgstTotal
     * @return {DoubleRange}
     */
	public get sgstTotal(): DoubleRange {
		return this._sgstTotal;
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
     * Getter month
     * @return {number}
     */
	public get month(): number {
		return this._month;
	}

    /**
     * Getter year
     * @return {number}
     */
	public get year(): number {
		return this._year;
	}

    /**
     * Setter processInvoiceid
     * @param {number} value
     */
	public set processInvoiceid(value: number) {
		this._processInvoiceid = value;
	}

    /**
     * Setter type
     * @param {String} value
     */
	public set type(value: String) {
		this._type = value;
	}

    /**
     * Setter docIdArr
     * @param {number[]} value
     */
	public set docIdArr(value: number[]) {
		this._docIdArr = value;
	}

    /**
     * Setter statusName
     * @param {String} value
     */
	public set statusName(value: String) {
		this._statusName = value;
	}

    /**
     * Setter schemeType
     * @param {number} value
     */
	public set schemeType(value: number) {
		this._schemeType = value;
	}

    /**
     * Setter reportId
     * @param {number} value
     */
	public set reportId(value: number) {
		this._reportId = value;
	}

    /**
     * Setter name
     * @param {String} value
     */
	public set name(value: String) {
		this._name = value;
	}

    /**
     * Setter invoiceNo
     * @param {String} value
     */
	public set invoiceNo(value: String) {
		this._invoiceNo = value;
	}

    /**
     * Setter invoiceId
     * @param {number} value
     */
	public set invoiceId(value: number) {
		this._invoiceId = value;
	}

    /**
     * Setter invoiceTitle
     * @param {String} value
     */
	public set invoiceTitle(value: String) {
		this._invoiceTitle = value;
	}

    /**
     * Setter gstId
     * @param {number} value
     */
	public set gstId(value: number) {
		this._gstId = value;
	}

    /**
     * Setter natureOfInvoice
     * @param {String} value
     */
	public set natureOfInvoice(value: String) {
		this._natureOfInvoice = value;
	}

    /**
     * Setter nature
     * @param {String} value
     */
	public set nature(value: String) {
		this._nature = value;
	}

    /**
     * Setter state
     * @param {String} value
     */
	public set state(value: String) {
		this._state = value;
	}

    /**
     * Setter invoiceDate
     * @param {String} value
     */
	public set invoiceDate(value: String) {
		this._invoiceDate = value;
	}

    /**
     * Setter hsn
     * @param {String} value
     */
	public set hsn(value: String) {
		this._hsn = value;
	}

    /**
     * Setter quantity
     * @param {number} value
     */
	public set quantity(value: number) {
		this._quantity = value;
	}

    /**
     * Setter rate
     * @param {DoubleRange} value
     */
	public set rate(value: DoubleRange) {
		this._rate = value;
	}

    /**
     * Setter invoiceValue
     * @param {DoubleRange} value
     */
	public set invoiceValue(value: DoubleRange) {
		this._invoiceValue = value;
	}

    /**
     * Setter taxableValue
     * @param {DoubleRange} value
     */
	public set taxableValue(value: DoubleRange) {
		this._taxableValue = value;
	}

    /**
     * Setter igstPercent
     * @param {DoubleRange} value
     */
	public set igstPercent(value: DoubleRange) {
		this._igstPercent = value;
	}

    /**
     * Setter cgstPercent
     * @param {DoubleRange} value
     */
	public set cgstPercent(value: DoubleRange) {
		this._cgstPercent = value;
	}

    /**
     * Setter sgstPercent
     * @param {DoubleRange} value
     */
	public set sgstPercent(value: DoubleRange) {
		this._sgstPercent = value;
	}

    /**
     * Setter igstTotal
     * @param {DoubleRange} value
     */
	public set igstTotal(value: DoubleRange) {
		this._igstTotal = value;
	}

    /**
     * Setter cgstTotal
     * @param {DoubleRange} value
     */
	public set cgstTotal(value: DoubleRange) {
		this._cgstTotal = value;
	}

    /**
     * Setter sgstTotal
     * @param {DoubleRange} value
     */
	public set sgstTotal(value: DoubleRange) {
		this._sgstTotal = value;
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
     * Setter month
     * @param {number} value
     */
	public set month(value: number) {
		this._month = value;
	}

    /**
     * Setter year
     * @param {number} value
     */
	public set year(value: number) {
		this._year = value;
	}
    


}
